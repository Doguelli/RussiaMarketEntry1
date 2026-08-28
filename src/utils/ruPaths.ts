/**
 * Explicit TR ↔ RU public-path mapping.
 * Shared data keys (service IDs, for-whom slugs) stay Turkish;
 * only public RU URL segments use Russian Latin slugs.
 */

export const SITE_ORIGIN = "https://russiamarketentry.com";

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

/** Resolve URL param to internal service ID (accepts TR id or RU slug). */
export function resolveServiceId(param: string | undefined): string | undefined {
  if (!param) return undefined;
  if (SERVICE_ID_TO_RU_SLUG[param]) return param;
  return RU_SLUG_TO_SERVICE_ID[param] || param;
}

/** Resolve URL param to internal for-whom slug (accepts TR or RU slug). */
export function resolveForWhomSlug(param: string | undefined): string | undefined {
  if (!param) return undefined;
  if (FORWHOM_SLUG_TO_RU[param]) return param;
  return RU_SLUG_TO_FORWHOM[param] || param;
}

export function servicesPath(isRu: boolean): string {
  return isRu ? "/ru/uslugi" : "/hizmetler";
}

export function servicePath(serviceId: string, isRu: boolean): string {
  if (isRu) {
    const slug = SERVICE_ID_TO_RU_SLUG[serviceId] || serviceId;
    return `/ru/uslugi/${slug}`;
  }
  return `/hizmetler/${serviceId}`;
}

export function forWhomPath(isRu: boolean): string {
  return isRu ? "/ru/dlya-kogo" : "/kimler-icin";
}

export function forWhomDetailPath(trSlug: string, isRu: boolean): string {
  if (isRu) {
    const slug = FORWHOM_SLUG_TO_RU[trSlug] || trSlug;
    return `/ru/dlya-kogo/${slug}`;
  }
  return `/kimler-icin/${trSlug}`;
}

export function contactPath(isRu: boolean): string {
  return isRu ? "/ru/kontakty" : "/iletisim";
}

export function aboutPath(isRu: boolean): string {
  return isRu ? "/ru/o-nas" : "/hakkimizda";
}

export function russiaMarketPath(isRu: boolean): string {
  return isRu ? "/ru/rynok-rossii" : "/rusya-pazari";
}

export function whyRussiaPath(isRu: boolean): string {
  return isRu ? "/ru/pochemu-rossiya" : "/neden-rusya-detay";
}

export function operationModelPath(isRu: boolean): string {
  return isRu ? "/ru/model-raboty" : "/operasyon-modeli";
}

export function homePath(isRu: boolean): string {
  return isRu ? "/ru" : "/";
}

export function privacyPath(isRu: boolean): string {
  return isRu ? "/ru/politika-konfidentsialnosti" : "/gizlilik-politikasi";
}

export function termsPath(isRu: boolean): string {
  return isRu ? "/ru/usloviya-ispolzovaniya" : "/kullanim-sartlari";
}

export function cookiesPath(isRu: boolean): string {
  return isRu ? "/ru/politika-cookie" : "/cerez-politikasi";
}

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Map any current public pathname to the equivalent URL in the target language.
 * EN only has a dedicated tree for /blog; other pages share TR URLs.
 */
export function pathForLanguage(
  pathname: string,
  targetLang: "tr" | "en" | "ru"
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
  // for the shared company-formation service URL (content stays locale-correct).
  if (
    (path === "/kompaniya-v-turtsii" || path === "/ru/kompaniya-v-turtsii") &&
    targetLang !== "ru"
  ) {
    return "/hizmetler/turkiyede-sirket-kurulumu";
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
  } else if (path.startsWith("/en/")) {
    trPath = path.replace(/^\/en/, "") || "/";
  }

  // Service / for-whom detail on TR tree
  const serviceMatch = trPath.match(/^\/hizmetler\/([^/]+)$/);
  const forWhomMatch = trPath.match(/^\/kimler-icin\/([^/]+)$/);

  if (targetLang === "ru") {
    if (serviceMatch) return servicePath(serviceMatch[1], true);
    if (forWhomMatch) return forWhomDetailPath(forWhomMatch[1], true);
    if (TR_TO_RU_PAGE[trPath]) return TR_TO_RU_PAGE[trPath];
    if (trPath === "/") return "/ru";
    return `/ru${trPath}`;
  }

  // EN (non-blog): share TR URLs
  if (targetLang === "en") {
    return trPath;
  }

  // TR
  return trPath;
}
