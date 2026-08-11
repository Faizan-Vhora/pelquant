// Resizes and re-encodes the hero banner. No cwebp/sharp on this machine, so
// Chrome does the work: the source is served same-origin from the dev server
// (a file:// canvas would be tainted and toDataURL would throw).
import { spawn, execSync } from 'node:child_process';
import fs from 'node:fs';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9340;
const SRC = 'http://localhost:5173/hero-src.png';
const OUT = 'public/hero';
const WIDTHS = [1682, 1280, 828];
const QUALITY = 0.82;

fs.mkdirSync(OUT, { recursive: true });

const chrome = spawn(CHROME, ['--headless=new', `--remote-debugging-port=${PORT}`,
  '--disable-gpu', '--no-first-run', '--user-data-dir=/tmp/enc-profile', 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let url;
for (let i = 0; i < 40 && !url; i++) {
  try {
    url = (await fetch(`http://127.0.0.1:${PORT}/json/list`).then((r) => r.json()))
      .find((t) => t.type === 'page')?.webSocketDebuggerUrl;
  } catch { /* waiting */ }
  if (!url) await sleep(250);
}
const ws = new WebSocket(url);
await new Promise((r) => (ws.onopen = r));
let id = 0; const pending = new Map();
ws.onmessage = (e) => { const m = JSON.parse(e.data); if (pending.has(m.id)) { pending.get(m.id)(m.result); pending.delete(m.id); } };
const send = (method, params = {}) => new Promise((res) => { const n = ++id; pending.set(n, res); ws.send(JSON.stringify({ id: n, method, params })); });

await send('Page.enable'); await send('Runtime.enable');
await send('Page.navigate', { url: 'http://localhost:5173/' });
await sleep(1500);

for (const w of WIDTHS) {
  for (const [type, ext] of [['image/webp', 'webp'], ['image/jpeg', 'jpg']]) {
    const { result } = await send('Runtime.evaluate', {
      returnByValue: true, awaitPromise: true,
      expression: `(async () => {
        const img = new Image();
        img.src = ${JSON.stringify(SRC)};
        await img.decode();
        const w = ${w}, h = Math.round(${w} * img.naturalHeight / img.naturalWidth);
        const c = document.createElement('canvas');
        c.width = w; c.height = h;
        const ctx = c.getContext('2d');
        ctx.imageSmoothingQuality = 'high';
        // JPEG has no alpha; paint the page background so edges stay seamless.
        if (${JSON.stringify(type)} === 'image/jpeg') {
          ctx.fillStyle = '#080810';
          ctx.fillRect(0, 0, w, h);
        }
        ctx.drawImage(img, 0, 0, w, h);
        return { data: c.toDataURL(${JSON.stringify(type)}, ${QUALITY}).split(',')[1], h };
      })()`,
    });
    if (!result.value?.data) { console.error('failed', w, ext, JSON.stringify(result).slice(0, 200)); continue; }
    const buf = Buffer.from(result.value.data, 'base64');
    const name = `${OUT}/pelhero-${w}.${ext}`;
    fs.writeFileSync(name, buf);
    console.log(`${name.padEnd(34)} ${w}x${result.value.h}  ${(buf.length / 1024).toFixed(0)} KB`);
  }
}

ws.close(); chrome.kill();
try { execSync('pkill -f enc-profile'); } catch { /* gone */ }
