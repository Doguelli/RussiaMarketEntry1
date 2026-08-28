import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, "..", p);

const NOT_FOUND_PRERENDER_PATH = "/this-page-does-not-exist";

const template = fs.readFileSync(toAbsolute("dist/index.html"), "utf-8");
const { render, blogRoutes, pageLanguageForPath } = await import(
  pathToFileURL(toAbsolute("dist/server/entry-server.js"))
);

const staticRoutesToPrerender = [
  "/",
  "/hakkimizda",
  "/rusya-pazari",
  "/neden-rusya-detay",
  "/hizmetler",
  "/hizmetler/operasyon-kurulumu",
  "/hizmetler/pazaryeri-yonetimi",
  "/hizmetler/lojistik-ve-depo",
  "/hizmetler/sistem-ve-entegrasyon",
  "/hizmetler/marka-buyutme",
  "/hizmetler/vergi-ve-finans",
  "/hizmetler/turkiyede-sirket-kurulumu",
  "/hizmetler/ithalat-ve-gumruk-yonetimi",
  "/hizmetler/pazar-arastirmasi-ve-strateji",
  "/hizmetler/medikal-ve-saglik",
  "/operasyon-modeli",
  "/kimler-icin",
  "/kimler-icin/tekstil-markalari",
  "/kimler-icin/ureticiler",
  "/kimler-icin/e-ticaret-girisimcileri",
  "/kimler-icin/kozmetik-ureticileri",
  "/iletisim",
  "/gizlilik-politikasi",
  "/kullanim-sartlari",
  "/cerez-politikasi",
  "/blog",
  "/kompaniya-v-turtsii",

  // English Blog List (only blog gets its own English URL tree; every
  // other page still shares its URL between Turkish and English)
  "/en/blog",

  // Russian Infrastructure & Commercial Pages (Russian Latin path segments)
  "/ru",
  "/ru/o-nas",
  "/ru/rynok-rossii",
  "/ru/pochemu-rossiya",
  "/ru/uslugi",
  "/ru/uslugi/nastroika-operatsii",
  "/ru/uslugi/upravlenie-marketpleisami",
  "/ru/uslugi/logistika-i-fulfiliment",
  "/ru/uslugi/integratsiya-i-avtomatizatsiya",
  "/ru/uslugi/prodvizhenie-brenda",
  "/ru/uslugi/nalogi-i-finansy",
  "/ru/uslugi/registratsiya-biznesa-v-turtsii",
  "/ru/uslugi/import-i-tamozhnya",
  "/ru/uslugi/issledovanie-rynka",
  "/ru/uslugi/meditsina-i-zdravoohranenie",
  "/ru/model-raboty",
  "/ru/dlya-kogo",
  "/ru/dlya-kogo/tekstilnye-brendy",
  "/ru/dlya-kogo/proizvoditeli",
  "/ru/dlya-kogo/online-torgovlya",
  "/ru/dlya-kogo/proizvoditeli-kosmetiki",
  "/ru/kontakty",
  "/ru/politika-konfidentsialnosti",
  "/ru/usloviya-ispolzovaniya",
  "/ru/politika-cookie",
  "/ru/kompaniya-v-turtsii",
  "/ru/blog",
];

const blogRoutesToPrerender = blogRoutes;

/** Single source of truth: deduplicated prerender + sitemap URL list. */
const routesToPrerender = [...new Set([...staticRoutesToPrerender, ...blogRoutesToPrerender])];

function mergeRouteIntoHtml(url, appHtml) {
  const titles = appHtml.match(/<title[^>]*>[\s\S]*?<\/title>/gi) || [];
  const metas = appHtml.match(/<meta[^>]*\/?>/gi) || [];
  const links = appHtml.match(/<link[^>]*\/?>/gi) || [];
  const jsonLd = appHtml.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi) || [];

  let cleanAppHtml = appHtml
    .replace(/<title[^>]*>[\s\S]*?<\/title>/gi, "")
    .replace(/<meta[^>]*\/?>/gi, "")
    .replace(/<link[^>]*\/?>/gi, "")
    .replace(/<script[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi, "");

  let html = template;

  const pageLang = pageLanguageForPath(url);
  html = html.replace(/<html\s+lang="[^"]*"/i, `<html lang="${pageLang}"`);

  html = html
    .replace(/<title[^>]*>[\s\S]*?<\/title>/gi, "")
    .replace(/<link[^>]*rel=["']canonical["'][^>]*\/?>/gi, "")
    .replace(/<meta[^>]*name=["']description["'][^>]*\/?>/gi, "")
    .replace(/<meta[^>]*property=["']og:title["'][^>]*\/?>/gi, "")
    .replace(/<meta[^>]*property=["']og:description["'][^>]*\/?>/gi, "")
    .replace(/<meta[^>]*property=["']og:url["'][^>]*\/?>/gi, "")
    .replace(/<meta[^>]*property=["']og:type["'][^>]*\/?>/gi, "")
    .replace(/<meta[^>]*property=["']og:image["'][^>]*\/?>/gi, "")
    .replace(/<meta[^>]*name=["']twitter:[^"']+["'][^>]*\/?>/gi, "");

  const routeHeadTags = [...titles, ...metas, ...links, ...jsonLd].join("\n    ");

  if (routeHeadTags) {
    html = html.replace("</head>", `  ${routeHeadTags}\n</head>`);
  }

  html = html.replace(
    '<div id="root"></div>',
    `<div id="root">${cleanAppHtml}</div>`
  );

  return html;
}

function writeHtmlFile(relativePath, html) {
  const filePath = toAbsolute(relativePath);
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filePath, html);
}

(async () => {
  for (const url of routesToPrerender) {
    const { html: appHtml } = await render(url);
    const html = mergeRouteIntoHtml(url, appHtml);

    const filePath =
      url === "/"
        ? "dist/index.html"
        : `dist${url.endsWith("/") ? url.slice(0, -1) : url}/index.html`;

    writeHtmlFile(filePath, html);
    console.log(`Prerendered: ${url} -> ${filePath}`);
  }

  // Real 404 page for Netlify (served with HTTP 404 via public/_redirects).
  const { html: notFoundAppHtml } = await render(NOT_FOUND_PRERENDER_PATH);
  const notFoundHtml = mergeRouteIntoHtml(NOT_FOUND_PRERENDER_PATH, notFoundAppHtml);
  writeHtmlFile("dist/404.html", notFoundHtml);
  console.log(`Prerendered: ${NOT_FOUND_PRERENDER_PATH} -> dist/404.html`);

  if (fs.existsSync(toAbsolute("dist/server"))) {
    fs.rmSync(toAbsolute("dist/server"), { recursive: true, force: true });
  }

  const siteOrigin = "https://russiamarketentry.com";
  const buildDate = new Date().toISOString().slice(0, 10);

  function sitemapMeta(url) {
    if (url === "/" || url === "/ru") return { priority: "1.0", changefreq: "weekly" };
    if (url === "/blog" || url === "/en/blog" || url === "/ru/blog" || url === "/hizmetler" || url === "/ru/uslugi") {
      return { priority: "0.9", changefreq: "weekly" };
    }
    if (url.startsWith("/hizmetler/") || url.startsWith("/ru/uslugi/")) {
      return { priority: "0.8", changefreq: "weekly" };
    }
    if (url.startsWith("/blog/") || url.startsWith("/en/blog/") || url.startsWith("/ru/blog/")) {
      return { priority: "0.6", changefreq: "monthly" };
    }
    if (url.startsWith("/kimler-icin") || url.startsWith("/ru/dlya-kogo")) {
      return { priority: "0.7", changefreq: "monthly" };
    }
    if (
      url.includes("gizlilik") ||
      url.includes("kullanim-sartlari") ||
      url.includes("cerez") ||
      url.includes("politika-konfidentsialnosti") ||
      url.includes("usloviya-ispolzovaniya") ||
      url.includes("politika-cookie")
    ) {
      return { priority: "0.3", changefreq: "yearly" };
    }
    return { priority: "0.7", changefreq: "monthly" };
  }

  const sitemapUrls = routesToPrerender
    .map((url) => {
      const { priority, changefreq } = sitemapMeta(url);
      return `  <url><loc>${siteOrigin}${url}</loc><lastmod>${buildDate}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;
    })
    .join("\n");
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls}\n</urlset>\n`;
  writeHtmlFile("dist/sitemap.xml", sitemapXml);

  console.log(
    `Prerendering complete! Generated static HTML for ${routesToPrerender.length} routes + 404.html in dist/. Sitemap: ${routesToPrerender.length} URLs.`
  );
})();
