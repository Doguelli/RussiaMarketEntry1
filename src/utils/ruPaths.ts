/**
 * Explicit TR ↔ EN ↔ RU public-path mapping.
 * Shared data keys (service IDs, for-whom slugs) stay Turkish;
 * public EN and RU URL segments use their own slugs.
 */

export const SITE_ORIGIN = "https://russiamarketentry.com";

export type PathLang = "tr" | "en" | "ru";

/** `true`/`false` are the legacy isRu flag; a language code selects that URL tree. */
export type PathLangArg = PathLang | boolean | string;

export function toPathLang(lang: PathLangArg): PathLang {
  if (lang === true || lang === "ru") return "ru";
  if (lang === "en") return "en";
  return "tr";
}

/** Structural pages: Turkish path → English path */
export const TR_TO_EN_PAGE: Record<string, string> = {
  "/": "/en",
  "/hakkimizda": "/en/about",
  "/rusya-pazari": "/en/russia-market",
  "/neden-rusya-detay": "/en/why-russia",
  "/hizmetler": "/en/services",
  "/operasyon-modeli": "/en/operating-model",
  "/kimler-icin": "/en/who-we-serve",
  "/iletisim": "/en/contact",
  "/blog": "/en/blog",
  "/referanslar": "/en/references",
  "/gizlilik-politikasi": "/en/privacy-policy",
  "/kullanim-sartlari": "/en/terms-of-use",
  "/cerez-politikasi": "/en/cookie-policy",
};

export const EN_TO_TR_PAGE: Record<string, string> = Object.fromEntries(
  Object.entries(TR_TO_EN_PAGE).map(([tr, en]) => [en, tr])
);

/** Internal service ID → EN URL slug */
export const SERVICE_ID_TO_EN_SLUG: Record<string, string> = {
  "operasyon-kurulumu": "operations-setup",
  "pazaryeri-yonetimi": "marketplace-management",
  "lojistik-ve-depo": "logistics-and-fulfillment",
  "sistem-ve-entegrasyon": "systems-and-integration",
  "marka-buyutme": "brand-growth",
  "vergi-ve-finans": "tax-and-finance",
  "turkiyede-sirket-kurulumu": "company-formation-in-turkey",
  "ithalat-ve-gumruk-yonetimi": "import-and-customs",
  "pazar-arastirmasi-ve-strateji": "market-research-and-strategy",
  "medikal-ve-saglik": "medical-and-healthcare",
};

export const EN_SLUG_TO_SERVICE_ID: Record<string, string> = Object.fromEntries(
  Object.entries(SERVICE_ID_TO_EN_SLUG).map(([id, slug]) => [slug, id])
);

/** Internal for-whom slug → EN URL slug */
export const FORWHOM_SLUG_TO_EN: Record<string, string> = {
  "tekstil-markalari": "textile-brands",
  ureticiler: "manufacturers",
  "e-ticaret-girisimcileri": "ecommerce-entrepreneurs",
  "kozmetik-ureticileri": "cosmetics-manufacturers",
};

export const EN_SLUG_TO_FORWHOM: Record<string, string> = Object.fromEntries(
  Object.entries(FORWHOM_SLUG_TO_EN).map(([tr, en]) => [en, tr])
);

/** Structural pages: Turkish path → Russian path */
export const TR_TO_RU_PAGE: Record<string, string> = {
  "/": "/ru",
  "/hakkimizda": "/ru/o-nas",
  "/rusya-pazari": "/ru/rynok-rossii",
  "/neden-rusya-detay": "/ru/pochemu-rossiya",
  "/hizmetler": "/ru/uslugi",
  "/operasyon-modeli": "/ru/model-raboty",
  "/kimler-icin": "/ru/dlya-kogo",
  "/iletisim": "/ru/kontakty",
  "/kompaniya-v-turtsii": "/ru/kompaniya-v-turtsii",
  "/blog": "/ru/blog",
  "/referanslar": "/ru/keisy-i-klienty",
  "/gizlilik-politikasi": "/ru/politika-konfidentsialnosti",
  "/kullanim-sartlari": "/ru/usloviya-ispolzovaniya",
  "/cerez-politikasi": "/ru/politika-cookie",
};

/** Russian path → Turkish path (inverse of TR_TO_RU_PAGE) */
export const RU_TO_TR_PAGE: Record<string, string> = Object.fromEntries(
  Object.entries(TR_TO_RU_PAGE).map(([tr, ru]) => [ru, tr])
);

/** Internal service ID (shared TR/EN/RU data key) → RU URL slug */
export const SERVICE_ID_TO_RU_SLUG: Record<string, string> = {
  "operasyon-kurulumu": "nastroika-operatsii",
  "pazaryeri-yonetimi": "upravlenie-marketpleisami",
  "lojistik-ve-depo": "logistika-i-fulfiliment",
  "sistem-ve-entegrasyon": "integratsiya-i-avtomatizatsiya",
  "marka-buyutme": "prodvizhenie-brenda",
  "vergi-ve-finans": "nalogi-i-finansy",
  "turkiyede-sirket-kurulumu": "registratsiya-biznesa-v-turtsii",
  "ithalat-ve-gumruk-yonetimi": "import-i-tamozhnya",
  "pazar-arastirmasi-ve-strateji": "issledovanie-rynka",
  "medikal-ve-saglik": "meditsina-i-zdravoohranenie",
};

export const RU_SLUG_TO_SERVICE_ID: Record<string, string> = Object.fromEntries(
  Object.entries(SERVICE_ID_TO_RU_SLUG).map(([id, slug]) => [slug, id])
);

/** Internal for-whom slug → RU URL slug */
export const FORWHOM_SLUG_TO_RU: Record<string, string> = {
  "tekstil-markalari": "tekstilnye-brendy",
  ureticiler: "proizvoditeli",
  "e-ticaret-girisimcileri": "online-torgovlya",
  "kozmetik-ureticileri": "proizvoditeli-kosmetiki",
};

export const RU_SLUG_TO_FORWHOM: Record<string, string> = Object.fromEntries(
  Object.entries(FORWHOM_SLUG_TO_RU).map(([tr, ru]) => [ru, tr])
);

/** Old public RU URLs → new public RU URLs (for Netlify 301s / reference) */
export const OLD_RU_TO_NEW_RU: Record<string, string> = {
  "/ru/hakkimizda": "/ru/o-nas",
  "/ru/rusya-pazari": "/ru/rynok-rossii",
  "/ru/neden-rusya-detay": "/ru/pochemu-rossiya",
  "/ru/hizmetler": "/ru/uslugi",
  "/ru/operasyon-modeli": "/ru/model-raboty",
  "/ru/kimler-icin": "/ru/dlya-kogo",
  "/ru/iletisim": "/ru/kontakty",
  ...Object.fromEntries(
    Object.entries(SERVICE_ID_TO_RU_SLUG).map(([id, slug]) => [
      `/ru/hizmetler/${id}`,
      `/ru/uslugi/${slug}`,
    ])
  ),
  ...Object.fromEntries(
    Object.entries(FORWHOM_SLUG_TO_RU).map(([tr, ru]) => [
      `/ru/kimler-icin/${tr}`,
      `/ru/dlya-kogo/${ru}`,
    ])
  ),
};

function normalizePath(pathname: string): string {
  const path = (pathname.split("?")[0] || "/").replace(/\/+$/, "") || "/";
  return path;
}

/** Resolve URL param to internal service ID (accepts TR id, EN or RU slug). */
export function resolveServiceId(param: string | undefined): string | undefined {
  if (!param) return undefined;
  if (SERVICE_ID_TO_RU_SLUG[param]) return param;
  return RU_SLUG_TO_SERVICE_ID[param] || EN_SLUG_TO_SERVICE_ID[param] || param;
}

/** Resolve URL param to internal for-whom slug (accepts TR, EN or RU slug). */
export function resolveForWhomSlug(param: string | undefined): string | undefined {
  if (!param) return undefined;
  if (FORWHOM_SLUG_TO_RU[param]) return param;
  return RU_SLUG_TO_FORWHOM[param] || EN_SLUG_TO_FORWHOM[param] || param;
}

/** Structural page path in the requested language tree. */
function pagePath(trPath: string, lang: PathLangArg): string {
  const target = toPathLang(lang);
  if (target === "ru") return TR_TO_RU_PAGE[trPath] || trPath;
  if (target === "en") return TR_TO_EN_PAGE[trPath] || trPath;
  return trPath;
}

export function servicesPath(lang: PathLangArg): string {
  return pagePath("/hizmetler", lang);
}

export function servicePath(serviceId: string, lang: PathLangArg): string {
  const target = toPathLang(lang);
  if (target === "ru") return `/ru/uslugi/${SERVICE_ID_TO_RU_SLUG[serviceId] || serviceId}`;
  if (target === "en") return `/en/services/${SERVICE_ID_TO_EN_SLUG[serviceId] || serviceId}`;
  return `/hizmetler/${serviceId}`;
}

export function forWhomPath(lang: PathLangArg): string {
  return pagePath("/kimler-icin", lang);
}

export function forWhomDetailPath(trSlug: string, lang: PathLangArg): string {
  const target = toPathLang(lang);
  if (target === "ru") return `/ru/dlya-kogo/${FORWHOM_SLUG_TO_RU[trSlug] || trSlug}`;
  if (target === "en") return `/en/who-we-serve/${FORWHOM_SLUG_TO_EN[trSlug] || trSlug}`;
  return `/kimler-icin/${trSlug}`;
}

export function contactPath(lang: PathLangArg): string {
  return pagePath("/iletisim", lang);
}

export function aboutPath(lang: PathLangArg): string {
  return pagePath("/hakkimizda", lang);
}

export function russiaMarketPath(lang: PathLangArg): string {
  return pagePath("/rusya-pazari", lang);
}

export function whyRussiaPath(lang: PathLangArg): string {
  return pagePath("/neden-rusya-detay", lang);
}

export function operationModelPath(lang: PathLangArg): string {
  return pagePath("/operasyon-modeli", lang);
}

export function homePath(lang: PathLangArg): string {
  return pagePath("/", lang);
}

export function blogIndexPath(lang: PathLangArg): string {
  return pagePath("/blog", lang);
}

export function privacyPath(lang: PathLangArg): string {
  return pagePath("/gizlilik-politikasi", lang);
}

export function termsPath(lang: PathLangArg): string {
  return pagePath("/kullanim-sartlari", lang);
}

export function cookiesPath(lang: PathLangArg): string {
  return pagePath("/cerez-politikasi", lang);
}

export const REFERENCES_TR = "/referanslar";
export const REFERENCES_EN = "/en/references";
export const REFERENCES_RU = "/ru/keisy-i-klienty";

export function referencesPath(lang: PathLangArg, isEn?: boolean): string {
  return pagePath(REFERENCES_TR, isEn ? "en" : lang);
}

/** Absolute tr/en/ru alternates for a page, given its path in every tree. */
export function hreflangUrls(pathFor: (lang: PathLang) => string): Record<PathLang | "x-default", string> {
  const tr = absoluteUrl(pathFor("tr"));
  return {
    tr,
    en: absoluteUrl(pathFor("en")),
    ru: absoluteUrl(pathFor("ru")),
    "x-default": tr,
  };
}

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Map any current public pathname to the equivalent URL in the target language.
 */
export function pathForLanguage(
  pathname: string,
  targetLang: PathLang
): string {
  let path = normalizePath(pathname);

  // Normalize legacy RU structural/service/for-whom paths to new RU first
  if (OLD_RU_TO_NEW_RU[path]) {
    path = OLD_RU_TO_NEW_RU[path];
  }

  const blogMatch = path.match(/^(?:\/(en|ru))?\/blog(\/.*)?$/);
  if (blogMatch) {
    const rest = blogMatch[2] || "";
    if (targetLang === "tr") return `/blog${rest}`;
    return `/${targetLang}/blog${rest}`;
  }

  // Russian-only company landing: switching to TR/EN must leave the RU page
  // for the company-formation service page (content stays locale-correct).
  if (
    (path === "/kompaniya-v-turtsii" || path === "/ru/kompaniya-v-turtsii") &&
    targetLang !== "ru"
  ) {
    return servicePath("turkiyede-sirket-kurulumu", targetLang);
  }

  // Strip language prefix to get a TR-shaped path for mapping
  let trPath = path;
  if (path === "/ru" || path.startsWith("/ru/")) {
    // Known new RU page
    if (RU_TO_TR_PAGE[path]) {
      trPath = RU_TO_TR_PAGE[path];
    } else if (path.startsWith("/ru/uslugi/")) {
      const ruSlug = path.slice("/ru/uslugi/".length);
      const id = RU_SLUG_TO_SERVICE_ID[ruSlug] || ruSlug;
      trPath = `/hizmetler/${id}`;
    } else if (path === "/ru/uslugi") {
      trPath = "/hizmetler";
    } else if (path.startsWith("/ru/dlya-kogo/")) {
      const ruSlug = path.slice("/ru/dlya-kogo/".length);
      const trSlug = RU_SLUG_TO_FORWHOM[ruSlug] || ruSlug;
      trPath = `/kimler-icin/${trSlug}`;
    } else if (path === "/ru/dlya-kogo") {
      trPath = "/kimler-icin";
    } else {
      // Fallback: strip /ru
      trPath = path.replace(/^\/ru/, "") || "/";
    }
  } else if (path === "/en" || path.startsWith("/en/")) {
    if (EN_TO_TR_PAGE[path]) {
      trPath = EN_TO_TR_PAGE[path];
    } else if (path.startsWith("/en/services/")) {
      const enSlug = path.slice("/en/services/".length);
      trPath = `/hizmetler/${EN_SLUG_TO_SERVICE_ID[enSlug] || enSlug}`;
    } else if (path.startsWith("/en/who-we-serve/")) {
      const enSlug = path.slice("/en/who-we-serve/".length);
      trPath = `/kimler-icin/${EN_SLUG_TO_FORWHOM[enSlug] || enSlug}`;
    } else {
      trPath = path.replace(/^\/en/, "") || "/";
    }
  }

  // Service / for-whom detail on TR tree
  const serviceMatch = trPath.match(/^\/hizmetler\/([^/]+)$/);
  const forWhomMatch = trPath.match(/^\/kimler-icin\/([^/]+)$/);

  if (serviceMatch) return servicePath(serviceMatch[1], targetLang);
  if (forWhomMatch) return forWhomDetailPath(forWhomMatch[1], targetLang);
  if (targetLang === "tr") return trPath;
  const pageMap = targetLang === "ru" ? TR_TO_RU_PAGE : TR_TO_EN_PAGE;
  if (pageMap[trPath]) return pageMap[trPath];
  // Unmapped pages keep the TR path for EN.
  return targetLang === "ru" ? `/ru${trPath}` : trPath;
}
