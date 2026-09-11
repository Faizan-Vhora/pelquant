// Generates the 1200x630 Open Graph cards referenced by SEO.jsx.
// Renders an HTML card per page with headless Chrome, which is already
// installed — no image toolchain needed.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const OUT = 'public/og';
const TMP = fs.mkdtempSync(path.join(os.tmpdir(), 'og-'));

// Pull the real page titles straight from SEO.jsx so cards can never drift
// from the metadata they accompany.
const seo = fs.readFileSync('src/components/SEO.jsx', 'utf8');
const re = /'(\/[a-z/-]*)':\s*\{[\s\S]*?title:\s*'((?:[^'\\]|\\.)*)'[\s\S]*?ogImage:\s*'([^']*)'/g;
const pages = [];
let m;
while ((m = re.exec(seo))) {
  pages.push({
    route: m[1],
    title: m[2].replace(/\\'/g, "'"),
    name: path.basename(m[3], path.extname(m[3])),
  });
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Split "Headline - Qualifier | PELQUANT" into a strong line and a support line.
function split(title) {
  const withoutBrand = title.replace(/\s*\|\s*PELQUANT\s*$/i, '').trim();
  const parts = withoutBrand.split(/\s+[-–—]\s+/);
  if (parts.length > 1) {
    return { lead: parts[0].trim(), sub: parts.slice(1).join(' — ').trim() };
  }
  return { lead: withoutBrand, sub: '' };
}

// Section accent, so a services card reads differently from a solutions card.
function accent(route) {
  if (route.startsWith('/services')) return '#60a5fa';
  if (route.startsWith('/solutions')) return '#a855f7';
  return '#FF6B2B';
}

function label(route) {
  if (route === '/') return 'AI-First Engineering';
  if (route.startsWith('/services')) return 'Services';
  if (route.startsWith('/solutions')) return 'Solutions';
  return route.slice(1).replace(/-/g, ' ') || 'Pelquant';
}

const card = ({ route, title }) => {
  const { lead, sub } = split(title);
  const a = accent(route);
  return `<!doctype html><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Audiowide&family=Inter:wght@400;500;600;800&display=block" rel="stylesheet">
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  html,body{width:1200px;height:630px}
  body{
    background:#080810;
    font-family:Inter,sans-serif;
    color:#EBEBF5;
    position:relative;
    overflow:hidden;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding:72px 80px;
  }
  /* Same blueprint grid and corner glow as the live hero. */
  .grid{position:absolute;inset:0;
    background-image:linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),
                     linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px);
    background-size:60px 60px}
  .glow{position:absolute;top:-220px;left:50%;transform:translateX(-50%);
    width:1100px;height:700px;border-radius:50%;
    background:radial-gradient(ellipse at center,${a}22 0%,transparent 65%);filter:blur(60px)}
  .edge{position:absolute;left:0;bottom:0;width:100%;height:160px;
    background:linear-gradient(to top,${a}26 0%,transparent 100%)}
  .row{position:relative;display:flex;align-items:center;gap:14px}
  .logo{font-family:Audiowide,sans-serif;font-size:30px;letter-spacing:.05em;color:#EBEBF5}
  .bracket{color:#FF6B2B}
  .tag{margin-left:auto;font-size:15px;font-weight:600;letter-spacing:.16em;
    text-transform:uppercase;color:${a};border:1px solid ${a}55;
    background:${a}14;border-radius:40px;padding:9px 20px}
  .body{position:relative}
  h1{font-size:${lead.length > 34 ? 62 : 76}px;font-weight:800;line-height:1.07;
    letter-spacing:-.035em;color:#fff;max-width:1000px}
  p{margin-top:24px;font-size:27px;line-height:1.45;color:#9090b0;max-width:900px}
  .foot{position:relative;display:flex;align-items:center;gap:16px;
    font-size:19px;color:#8b8bb0}
  .dot{width:9px;height:9px;border-radius:50%;background:${a}}
  .url{margin-left:auto;font-weight:600;color:#EBEBF5}
</style>
<div class="grid"></div><div class="glow"></div><div class="edge"></div>
<div class="row">
  <span class="logo"><span class="bracket">[</span>PELQUANT</span>
  <span class="tag">${esc(label(route))}</span>
</div>
<div class="body">
  <h1>${esc(lead)}</h1>
  ${sub ? `<p>${esc(sub)}</p>` : ''}
</div>
<div class="foot">
  <span class="dot"></span>
  <span>Engineering &amp; growth, under one roof</span>
  <span class="url">pelquant.com${route === '/' ? '' : route}</span>
</div>`;
};

fs.mkdirSync(OUT, { recursive: true });

// Optional route filter, so adding one page does not mean re-rendering all 35
// cards: `node scripts/generate-og-images.mjs /team`.
const only = process.argv.slice(2);
const selected = only.length ? pages.filter((p) => only.includes(p.route)) : pages;
if (only.length && !selected.length) {
  console.error(`no route matched ${only.join(', ')}`);
  process.exit(1);
}

for (const page of selected) {
  const html = path.join(TMP, `${page.name}.html`);
  fs.writeFileSync(html, card(page));
  execFileSync(CHROME, [
    '--headless',
    '--disable-gpu',
    '--hide-scrollbars',
    '--force-device-scale-factor=1',
    '--window-size=1200,630',
    '--virtual-time-budget=4000',
    `--screenshot=${path.join(OUT, page.name + '.png')}`,
    `file://${html}`,
  ], { stdio: 'ignore' });
  process.stdout.write('.');
}

console.log(`\ngenerated ${selected.length} cards in ${OUT}`);
