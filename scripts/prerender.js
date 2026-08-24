import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, "..", p);

const template = fs.readFileSync(toAbsolute("dist/index.html"), "utf-8");
const { render, blogRoutes } = await import(pathToFileURL(toAbsolute("dist/server/entry-server.js")));

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
  "/operasyon-modeli",
  "/kimler-icin",
  "/kimler-icin/tekstil-markalari",
  "/kimler-icin/ureticiler",
  "/kimler-icin/e-ticaret-girisimcileri",
  "/kimler-icin/kozmetik-ureticileri",
  "/iletisim",
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
  "/ru/model-raboty",
  "/ru/dlya-kogo",
  "/ru/dlya-kogo/tekstilnye-brendy",
  "/ru/dlya-kogo/proizvoditeli",
  "/ru/dlya-kogo/online-torgovlya",
  "/ru/dlya-kogo/proizvoditeli-kosmetiki",
  "/ru/kontakty",
  "/ru/kompaniya-v-turtsii",
  "/ru/blog",
];

// Every blog post's own detail page is derived from blogPosts (src/data/blogData.tsx,
// via the built SSR bundle's exported blogRoutes) instead of being hand-maintained
// here, so newly added posts (including ones added through the admin panel) are
// automatically prerendered. The URL prefix on the bare /blog/:slug,
// /en/blog/:slug and /ru/blog/:slug routes (AppRoutes.tsx) is what tells the
// app which language to render on first load for a non-JS crawler — so a post
// is only listed here for the languages it actually has content in
// (src/utils/blogLanguages.ts).
const blogRoutesToPrerender = blogRoutes;

const routesToPrerender = [...staticRoutesToPrerender, ...blogRoutesToPrerender];

// Paths outside the /ru tree whose page is nevertheless written entirely in
// Russian. /kompaniya-v-turtsii is the original public URL of the Russian
// company-formation landing page (kept live, and canonicalised to
// /ru/kompaniya-v-turtsii); claiming lang="tr" there would misdeclare it.
const RUSSIAN_CONTENT_TR_PATHS = new Set(["/kompaniya-v-turtsii"]);

function htmlLangForUrl(url) {
  if (url === "/ru" || url.startsWith("/ru/")) return "ru";
  if (url === "/en" || url.startsWith("/en/")) return "en";
  if (RUSSIAN_CONTENT_TR_PATHS.has(url)) return "ru";
  return "tr";
}

(async () => {
  for (const url of routesToPrerender) {
    const { html: appHtml } = await render(url);

    // Extract head elements rendered by React for this route
    const titles = appHtml.match(/<title[^>]*>[\s\S]*?<\/title>/gi) || [];
    const metas = appHtml.match(/<meta[^>]*\/?>/gi) || [];
    const links = appHtml.match(/<link[^>]*\/?>/gi) || [];
    const jsonLd = appHtml.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi) || [];

    // Clean appHtml from extracted head elements so they don't remain in #root
    let cleanAppHtml = appHtml
      .replace(/<title[^>]*>[\s\S]*?<\/title>/gi, "")
      .replace(/<meta[^>]*\/?>/gi, "")
      .replace(/<link[^>]*\/?>/gi, "")
      .replace(/<script[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi, "");

    let html = template;

    // Set <html lang> from the prerender URL (Helmet htmlAttributes are not in #root HTML)
    const pageLang = htmlLangForUrl(url);
    html = html.replace(/<html\s+lang="[^"]*"/i, `<html lang="${pageLang}"`);

    // Clean up default/fallback head tags from template to avoid duplicates
    html = html
      .replace(/<title[^>]*>[\s\S]*?<\/title>/gi, "")
      .replace(/<link[^>]*rel=["']canonical["'][^>]*\/?>/gi, "")
      .replace(/<meta[^>]*name=["']description["'][^>]*\/?>/gi, "")
      .replace(/<meta[^>]*property=["']og:title["'][^>]*\/?>/gi, "")
      .replace(/<meta[^>]*property=["']og:description["'][^>]*\/?>/gi, "")
      .replace(/<meta[^>]*property=["']og:url["'][^>]*\/?>/gi, "")
      .replace(/<meta[^>]*property=["']og:type["'][^>]*\/?>/gi, "")
      .replace(/<meta[^>]*property=["']og:image["'][^>]*\/?>/gi, "");

    const routeHeadTags = [...titles, ...metas, ...links, ...jsonLd].join("\n    ");

    if (routeHeadTags) {
      html = html.replace("</head>", `  ${routeHeadTags}\n</head>`);
    }

    html = html.replace(
      '<div id="root"></div>',
      `<div id="root">${cleanAppHtml}</div>`
    );

    const filePath =
      url === "/"
        ? "dist/index.html"
        : `dist${url.endsWith("/") ? url.slice(0, -1) : url}/index.html`;

    const dir = path.dirname(toAbsolute(filePath));
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(toAbsolute(filePath), html);
    console.log(`Prerendered: ${url} -> ${filePath}`);
  }

  // Clean up server build folder after prerendering
  if (fs.existsSync(toAbsolute("dist/server"))) {
    fs.rmSync(toAbsolute("dist/server"), { recursive: true, force: true });
  }

  // Regenerate sitemap.xml so newly added blog posts (e.g. via the admin panel)
  // are automatically included instead of relying on the hand-maintained
  // public/sitemap.xml staying in sync. Priority/changefreq are assigned by
  // route pattern (mirrors the tiers the old hand-maintained sitemap used);
  // lastmod uses the build date for every URL, same coarse granularity the
  // old hand-maintained sitemap used (a single date for all entries).
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
    return { priority: "0.7", changefreq: "monthly" };
  }

  const sitemapUrls = routesToPrerender
    .map((url) => {
      const { priority, changefreq } = sitemapMeta(url);
      return `  <url><loc>${siteOrigin}${url}</loc><lastmod>${buildDate}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;
    })
    .join("\n");
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls}\n</urlset>\n`;
  fs.writeFileSync(toAbsolute("dist/sitemap.xml"), sitemapXml);

  console.log(`Prerendering complete! Generated static HTML for ${routesToPrerender.length} routes in dist/.`);
})();
