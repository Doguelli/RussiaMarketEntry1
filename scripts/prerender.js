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
  "/blog/cestniy-znak-nedir-rusyada-hangi-urunlerde-zorunludur",
  "/blog/eac-belgesi-nedir-rusyaya-ihracat-icin-bilmeniz-gereken-her-sey",
  "/blog/rusyada-ooo-sirketi-nasil-kurulur-turk-markalari-icin-2026-rehberi",
  "/blog/rusyaya-ithalat-sureci-turk-markalari-icin-adim-adim-rehber",
  
  // Russian Infrastructure & Commercial Pages
  "/ru",
  "/ru/hakkimizda",
  "/ru/rusya-pazari",
  "/ru/neden-rusya-detay",
  "/ru/hizmetler",
  "/ru/hizmetler/operasyon-kurulumu",
  "/ru/hizmetler/pazaryeri-yonetimi",
  "/ru/hizmetler/lojistik-ve-depo",
  "/ru/hizmetler/sistem-ve-entegrasyon",
  "/ru/hizmetler/marka-buyutme",
  "/ru/hizmetler/vergi-ve-finans",
  "/ru/operasyon-modeli",
  "/ru/kimler-icin",
  "/ru/kimler-icin/tekstil-markalari",
  "/ru/kimler-icin/ureticiler",
  "/ru/kimler-icin/e-ticaret-girisimcileri",
  "/ru/kimler-icin/kozmetik-ureticileri",
  "/ru/iletisim",
  "/ru/kompaniya-v-turtsii",
  "/ru/blog",
  
  // Russian Blog Cluster (8 posts)
  "/blog/registraciya-kompanii-v-turtsii-dlya-inostrantsev-poshagovoe-rukovodstvo-2026",
  "/blog/otkrytie-bankovskogo-scheta-v-turtsii-dlya-yuridicheskih-i-fizicheskih-lits",
  "/blog/nalogi-v-turtsii-dlya-biznesa-kurumlar-kdv-optimizatsiya",
  "/blog/vnzh-ikamet-i-rabochaya-viza-v-turtsii-pri-otkrytii-biznesa",
  "/blog/torgovlya-i-logistika-mezhdu-turtsiey-i-rossiey-tamozhnya-i-raschety",
  "/blog/yuridicheskiy-adres-i-buhgalter-mali-musavir-v-turtsii",
  "/blog/eksport-iz-turtsii-na-marketpleysy-wildberries-ozon",
  "/blog/limited-sirket-protiv-anonim-sirket-sravnenie-form-biznesa-v-turtsii"
];

(async () => {
  for (const url of routesToPrerender) {
    const { html: appHtml } = render(url);

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

  console.log(`Prerendering complete! Generated static HTML for ${routesToPrerender.length} routes in dist/.`);
})();
