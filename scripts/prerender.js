import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, "..", p);

const template = fs.readFileSync(toAbsolute("dist/index.html"), "utf-8");
const { render } = await import(toAbsolute("dist/server/entry-server.js"));

const routesToPrerender = [
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
  "/operasyon-modeli",
  "/kimler-icin",
  "/kimler-icin/tekstil-markalari",
  "/kimler-icin/ureticiler",
  "/kimler-icin/e-ticaret-girisimcileri",
  "/kimler-icin/kozmetik-ureticileri",
  "/iletisim",
  "/blog",
  "/blog/rusyada-e-ticaret-nasil-yapilir",
  "/blog/wildberriesde-satis-yapmak",
  "/blog/lamodaya-nasil-girilir",
  "/blog/rusyada-sirket-kurmadan-satis-yapilabilir-mi",
  "/blog/wildberries-algoritmasi-nasil-calisir",
  "/blog/rusyada-en-cok-satan-urunler-2026",
  "/blog/wildberries-depo-stratejisi-basarili-satis",
  "/blog/wildberries-ozon-lojistik-yonetimi-stok-stratejisi",
  "/blog/cestniy-znak-nedir-rusyada-hangi-urunlerde-zorunludur"
];

(async () => {
  for (const url of routesToPrerender) {
    const { html: appHtml, helmet } = render(url);

    let html = template;

    if (helmet) {
      // Clean up any default head tags from template to avoid duplicates
      html = html
        .replace(/<title[^>]*>[\s\S]*?<\/title>/gi, "")
        .replace(/<link[^>]*rel=["']canonical["'][^>]*\/?>/gi, "")
        .replace(/<meta[^>]*name=["']description["'][^>]*\/?>/gi, "")
        .replace(/<meta[^>]*property=["']og:title["'][^>]*\/?>/gi, "")
        .replace(/<meta[^>]*property=["']og:description["'][^>]*\/?>/gi, "")
        .replace(/<meta[^>]*property=["']og:url["'][^>]*\/?>/gi, "")
        .replace(/<meta[^>]*property=["']og:type["'][^>]*\/?>/gi, "");

      const headTags = [
        helmet.title?.toString(),
        helmet.meta?.toString(),
        helmet.link?.toString(),
        helmet.script?.toString()
      ].filter(Boolean).join("\n    ");

      if (headTags) {
        html = html.replace("</head>", `  ${headTags}\n</head>`);
      }
    }

    html = html.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
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

  console.log(`Prerendering complete! Generated static HTML for ${routesToPrerender.length} routes in dist/.`);
})();
