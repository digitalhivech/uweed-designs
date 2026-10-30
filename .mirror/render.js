// Render every components/<Name>/preview.html to previews/<Name>.png.
// Usage: node .mirror/render.js <repo> <dir holding node_modules/@fontsource>
// Needs Playwright (preinstalled in Claude cloud sessions) and
// `npm i @fontsource/dm-sans@5.1.0 @fontsource/poppins@5.1.0` in the font dir.
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const repo = path.resolve(process.argv[2]);
const fd = path.resolve(process.argv[3], 'node_modules/@fontsource');
const faces = [['DM Sans', 400, 'dm-sans'], ['DM Sans', 500, 'dm-sans'], ['DM Sans', 700, 'dm-sans'], ['Poppins', 600, 'poppins'], ['Poppins', 700, 'poppins'], ['Poppins', 800, 'poppins']]
  .map(([f, w, d]) => `@font-face{font-family:'${f}';font-weight:${w};font-style:normal;src:url('file://${fd}/${d}/files/${d}-latin-${w}-normal.woff2') format('woff2')}`).join('\n');

(async () => {
  const out = path.join(repo, 'previews');
  fs.rmSync(out, { recursive: true, force: true });
  fs.mkdirSync(out, { recursive: true });
  const browser = await chromium.launch();
  const comps = fs.readdirSync(path.join(repo, 'components')).filter(d => fs.existsSync(path.join(repo, 'components', d, 'preview.html')));
  const problems = [];
  for (const c of comps) {
    const dir = path.join(repo, 'components', c);
    let html = fs.readFileSync(path.join(dir, 'preview.html'), 'utf8');
    const m = html.match(/@dsCard[^>]*?height=(\d+)/);
    const h = m ? parseInt(m[1], 10) : 600;
    const inject = `<style>${faces}
*,*::before,*::after{animation:none!important;transition:none!important}</style><link rel="stylesheet" href="../../tokens.css"><link rel="stylesheet" href="../bundle.css"><script src="../lib/react.production.min.js"></script><script src="../lib/react-dom.production.min.js"></script><script src="../bundle.js"></script>`;
    html = html.includes('<head>') ? html.replace('<head>', '<head>' + inject) : inject + html;
    const wrap = path.join(dir, '__render.html');
    fs.writeFileSync(wrap, html);
    const page = await browser.newPage({ viewport: { width: 1000, height: Math.max(200, h) }, deviceScaleFactor: 2 });
    const errors = [];
    page.on('pageerror', e => errors.push(String(e)));
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.route('**/*', r => r.request().url().startsWith('file:') ? r.continue() : r.abort());
    try {
      await page.goto('file://' + wrap);
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(400);
      await page.screenshot({ path: path.join(out, c + '.png'), fullPage: true });
    } catch (e) { errors.push(String(e)); }
    if (errors.length) problems.push({ component: c, errors: errors.slice(0, 2) });
    await page.close();
    fs.unlinkSync(wrap);
  }
  await browser.close();
  console.log(JSON.stringify({ rendered: comps.length, problems }));
})();
