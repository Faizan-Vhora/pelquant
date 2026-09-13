// Resizes and re-encodes a team portrait into responsive webp + jpg.
// Same approach as encode-hero-banner.mjs: there is no cwebp or sharp on this
// machine, so Chrome's canvas does the encoding. The source is served over
// localhost rather than file:// because a file:// canvas is tainted and
// toDataURL() throws on it.
//
//   node scripts/encode-portrait.mjs <source-image> <output-basename> [sx,sy,sw,sh]
//
// The optional source rect crops before resizing. Team portraits arrive at
// whatever framing the photographer chose; cropping them to a comparable head
// scale is what keeps two cards side by side from looking mismatched.
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

const [srcPath, name, cropArg] = process.argv.slice(2);
if (!srcPath || !name) {
  console.error('usage: node scripts/encode-portrait.mjs <source-image> <output-basename> [sx,sy,sw,sh]');
  process.exit(1);
}
const crop = cropArg ? cropArg.split(',').map(Number) : null;
if (crop && (crop.length !== 4 || crop.some(Number.isNaN))) {
  console.error('crop must be four numbers: sx,sy,sw,sh');
  process.exit(1);
}

const bytes = fs.readFileSync(srcPath);
// Two paths, deliberately: /page must be a real HTML document so the tab gets a
// normal origin. Navigating to the image bytes instead leaves the tab on an
// opaque origin and toDataURL() then throws on a tainted canvas.
const server = http.createServer((req, res) => {
  if (req.url === '/page') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<!doctype html><meta charset="utf-8"><title>encode</title>');
    return;
  }
  // Content type is a hint only — Chrome sniffs the bytes, so one handler
  // serves png and jpeg sources alike.
  res.writeHead(200, { 'Content-Type': 'application/octet-stream' });
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
await send('Page.navigate', { url: `http://127.0.0.1:${SERVE_PORT}/page` });
await sleep(800);

for (const w of WIDTHS) {
  for (const [type, ext] of [['image/webp', 'webp'], ['image/jpeg', 'jpg']]) {
    const { result } = await send('Runtime.evaluate', {
      returnByValue: true, awaitPromise: true,
      expression: `(async () => {
        const img = new Image();
        img.src = 'http://127.0.0.1:${SERVE_PORT}/src';
        await img.decode();
        const crop = ${JSON.stringify(crop)};
        const [sx, sy, sw, sh] = crop || [0, 0, img.naturalWidth, img.naturalHeight];
        const w = ${w}, h = Math.round(${w} * sh / sw);
        const c = document.createElement('canvas');
        c.width = w; c.height = h;
        const ctx = c.getContext('2d');
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, sx, sy, sw, sh, 0, 0, w, h);
        return c.toDataURL('${type}', ${QUALITY});
      })()`,
    });
    if (typeof result.value !== 'string') {
      console.error('render failed:', JSON.stringify(result));
      process.exit(1);
    }
    const data = result.value.split(',')[1];
    const file = path.join(OUT, `${name}-${w}.${ext}`);
    fs.writeFileSync(file, Buffer.from(data, 'base64'));
    console.log(`${file}  ${(fs.statSync(file).size / 1024).toFixed(1)} KB`);
  }
}

ws.close();
chrome.kill();
// Chrome holds a keep-alive socket to the local server, so close() alone never
// resolves and the script hangs after writing every file.
server.closeAllConnections();
server.close();
process.exit(0);
