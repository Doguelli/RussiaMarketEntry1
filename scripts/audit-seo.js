import fs from 'node:fs';
import path from 'node:path';

const origin = 'https://russiamarketentry.com';
const dist = path.resolve('dist');
const sitemap = fs.readFileSync(path.join(dist, 'sitemap.xml'), 'utf8');
const routes = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => new URL(m[1]).pathname);
const attrs = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)=["']([^"']*)["']/g)].map(m => [m[1].toLowerCase(), m[2]]));
const pages = new Map(routes.map(route => [route, fs.readFileSync(path.join(dist, route === '/' ? 'index.html' : `${route.slice(1)}.html`), 'utf8')]));
const issues = [];
const add = (route, message) => issues.push({route, message});
const titles = new Map();
for (const [route, html] of pages) {
  const metas = [...html.matchAll(/<meta\b[^>]*>/gi)].map(m => attrs(m[0]));
  if (metas.filter(m => m.name === 'robots').length !== 1) add(route, 'missing/duplicate robots directive');
  if (html.includes('data-ssr-hidden')) add(route, 'prerendered content is hidden while JavaScript loads');
  const links = [...html.matchAll(/<link\b[^>]*>/gi)].map(m => attrs(m[0]));
  const title = [...html.matchAll(/<title[^>]*>(.*?)<\/title>/gi)];
  if (title.length !== 1 || !title[0][1].trim()) add(route, `title count: ${title.length}`);
  else { const list = titles.get(title[0][1]) || []; list.push(route); titles.set(title[0][1], list); }
  if (metas.filter(m => m.name === 'description' && m.content?.trim()).length !== 1) add(route, 'missing/duplicate description');
  const canonical = links.filter(l => l.rel === 'canonical');
  if (canonical.length !== 1 || canonical[0].href !== origin + route) add(route, 'incorrect canonical');
  if (!metas.some(m => m.property === 'og:url' && m.content === origin + route)) add(route, 'incorrect Open Graph URL');
  if (metas.some(m => m.name === 'robots' && /noindex/i.test(m.content))) add(route, 'sitemap URL is noindex');
  if ((html.match(/<h1\b/gi) || []).length !== 1) add(route, 'H1 count is not 1');
  const expectedLang = route === '/en' || route.startsWith('/en/') ? 'en' : route === '/ru' || route.startsWith('/ru/') ? 'ru' : 'tr';
  if (!html.includes(`<html lang="${expectedLang}"`)) add(route, 'incorrect HTML language');
  for (const alternate of links.filter(l => l.rel === 'alternate' && l.hreflang)) {
    const target = new URL(alternate.href).pathname;
    if (!pages.has(target)) add(route, `alternate has no indexable page: ${target}`);
    else if (alternate.hreflang !== 'x-default') {
      const targetLang = target === '/en' || target.startsWith('/en/') ? 'en' : target === '/ru' || target.startsWith('/ru/') ? 'ru' : 'tr';
      if (alternate.hreflang !== targetLang) add(route, `alternate has incorrect language: ${target}`);
      const targetLinks = [...pages.get(target).matchAll(/<link\b[^>]*>/gi)].map(m => attrs(m[0]));
      if (!targetLinks.some(l => l.rel === 'alternate' && l.href === origin + route)) add(route, `nonreciprocal alternate: ${target}`);
    }
  }
  for (const m of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
    try { const data = JSON.parse(m[1]); if (data.datePublished && !/^\d{4}-\d{2}-\d{2}/.test(data.datePublished)) add(route, 'invalid schema publication date'); }
    catch { add(route, 'invalid JSON-LD'); }
  }
  for (const m of html.matchAll(/<a\b[^>]*>/gi)) {
    const href = attrs(m[0]).href;
    if (!href || !(href === '/' || /^(\/[^/]|https:\/\/russiamarketentry\.com(?:\/|$))/.test(href))) continue;
    const target = new URL(href.replace(/&amp;/g, '&'), origin).pathname.replace(/\/$/, '') || '/';
    if (!pages.has(target) && !fs.existsSync(path.join(dist, decodeURIComponent(target)))) add(route, `broken internal link: ${target}`);
  }
  for (const m of html.matchAll(/<img\b[^>]*>/gi)) {
    const img = attrs(m[0]);
    if (img.src?.startsWith('/') && !fs.existsSync(path.join(dist, decodeURIComponent(img.src)))) add(route, `missing image: ${img.src}`);
  }
}
for (const [title, list] of titles) if (list.length > 1) add(list.join(', '), `duplicate title: ${title}`);
const notFound = fs.readFileSync(path.join(dist, '404.html'), 'utf8');
if (!/name="robots"[^>]*content="noindex/i.test(notFound)) add('/404.html', 'missing noindex');
if ((notFound.match(/name="robots"/gi) || []).length !== 1) add('/404.html', 'conflicting robots directives');
const redirects = fs.readFileSync(path.join(dist, '_redirects'), 'utf8').split(/\r?\n/)
  .map(line => line.trim()).filter(line => line && !line.startsWith('#')).map(line => line.split(/\s+/));
for (const [from, to] of [
  ['/contact', '/iletisim'],
  ['/en/services/market-research-strategy', '/en/services/market-research-and-strategy'],
  ['/ru/hizmetler/medikal-ve-saglik', '/ru/uslugi/meditsina-i-zdravoohranenie'],
]) {
  const index = redirects.findIndex(([source]) => source === from);
  const fallback = redirects.findIndex(([source]) => source === '/*');
  if (index < 0 || index >= fallback || redirects[index][1] !== to || !redirects[index][2].startsWith('301') || !pages.has(to)) {
    add(from, 'missing/invalid permanent redirect before the 404 fallback');
  }
}
const unique = [...new Map(issues.map(i => [`${i.route}:${i.message}`, i])).values()];
console.log(JSON.stringify({pages: pages.size, issues: unique}, null, 2));
process.exitCode = unique.length ? 1 : 0;
