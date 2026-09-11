// Resizes and re-encodes a team portrait into responsive webp + jpg.
// Same approach as encode-hero-banner.mjs: there is no cwebp or sharp on this
// machine, so Chrome's canvas does the encoding. The source is served over
// localhost rather than file:// because a file:// canvas is tainted and
// toDataURL() throws on it.
//
//   node scripts/encode-portrait.mjs <source-image> <output-basename>
import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9341;
const SERVE_PORT = 9342;
const OUT = 'public/team';
const WIDTHS = [320, 480, 640, 960];
const QUALITY = 0.86;

const [srcPath, name] = process.argv.slice(2);
if (!srcPath || !name) {
  console.error('usage: node scripts/encode-portrait.mjs <source-image> <output-basename>');
  process.exit(1);
}

const bytes = fs.readFileSync(srcPath);
const server = http.createServer((_, res) => {
  res.writeHead(200, { 'Content-Type': 'image/jpeg' });
  res.end(bytes);
}).listen(SERVE_PORT);

fs.mkdirSync(OUT, { recursive: true });

const chrome = spawn(CHROME, ['--headless=new', `--remote-debugging-port=${PORT}`,
  '--disable-gpu', '--no-first-run', '--user-data-dir=/tmp/portrait-profile', 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let url;
for (let i = 0; i < 40 && !url; i++) {
  try {
    url = (await fetch(`http://127.0.0.1:${PORT}/json/list`).then((r) => r.json()))
      .find((t) => t.type === 'page')?.webSocketDebuggerUrl;
  } catch { /* chrome still starting */ }
  if (!url) await sleep(250);
}
const ws = new WebSocket(url);
await new Promise((r) => (ws.onopen = r));
let id = 0; const pending = new Map();
ws.onmessage = (e) => {
  const m = JSON.parse(e.data);
  if (pending.has(m.id)) { pending.get(m.id)(m.result); pending.delete(m.id); }
};
const send = (method, params = {}) => new Promise((res) => {
  const n = ++id; pending.set(n, res); ws.send(JSON.stringify({ id: n, method, params }));
});

await send('Page.enable');
await send('Runtime.enable');
await send('Page.navigate', { url: `http://127.0.0.1:${SERVE_PORT}/blank` });
await sleep(800);

for (const w of WIDTHS) {
  for (const [type, ext] of [['image/webp', 'webp'], ['image/jpeg', 'jpg']]) {
    const { result } = await send('Runtime.evaluate', {
      returnByValue: true, awaitPromise: true,
      expression: `(async () => {
        const img = new Image();
        img.src = 'http://127.0.0.1:${SERVE_PORT}/src.jpg';
        await img.decode();
        const w = ${w}, h = Math.round(${w} * img.naturalHeight / img.naturalWidth);
        const c = document.createElement('canvas');
        c.width = w; c.height = h;
        const ctx = c.getContext('2d');
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, w, h);
        return c.toDataURL('${type}', ${QUALITY});
      })()`,
    });
    const data = result.value.split(',')[1];
    const file = path.join(OUT, `${name}-${w}.${ext}`);
    fs.writeFileSync(file, Buffer.from(data, 'base64'));
    console.log(`${file}  ${(fs.statSync(file).size / 1024).toFixed(1)} KB`);
  }
}

ws.close();
chrome.kill();
server.close();
