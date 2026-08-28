export const SITE_ORIGIN = "https://russiamarketentry.com";
export const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/og-image.jpg`;
export const ORGANIZATION_ID = `${SITE_ORIGIN}/#organization`;

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function createBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith("http") ? item.url : `${SITE_ORIGIN}${item.url}`
    }))
  };
}

// Registered seat of ООО «НАСЕЛЬ ТЕКСТИЛЬ» — used on legal pages and as the
// Organization JSON-LD PostalAddress. This is NOT the Moscow fulfillment site.
export const VERIFIED_CONTACT = {
  email: "hello@russiamarketentry.com",
  phoneTr: "+90 532 785 24 20",
  phoneRu: "+7 993 406-72-58",
  streetAddress: "проспект Мира, д. 50, кв. 179",
  addressLocality: "Нижнекамск",
  addressRegion: "Республика Татарстан",
  postalCode: "423571",
  addressCountry: "RU",
  /** Full registered address as published on legal and company-identification surfaces */
  fullAddressRu:
    "423571, Республика Татарстан, Нижнекамский район, г. Нижнекамск, проспект Мира, д. 50, кв. 179, Россия",
  legalName: "ООО «НАСЕЛЬ ТЕКСТИЛЬ»",
  inn: "1651099520",
  kpp: "165101001",
  ogrn: "1251600038513",
};

/**
 * Moscow-area operational / fulfillment location used in commercial and
 * logistics copy. Must never be described as the registered / legal address.
 */
export const OPERATIONAL_LOCATION = {
  streetAddress: "Domodedovskoye Shosse 20",
  addressLocality: "Podolsk",
  /** Compact display used in footer / contact (Latin) */
  displayEn: "Podolsk, Domodedovskoye Shosse 20, Moscow area",
  displayTr: "Podolsk, Domodedovskoye Shosse 20, Moskova bölgesi",
  displayRu: "Подольск, Домодедовское шоссе 20, Москва (операционная / fulfillment-инфраструктура)",
};

export interface OrganizationSchemaOptions {
  /** Business description in the language of the page emitting the schema. */
  description?: string;
  /** Topic list in the language of the page emitting the schema. */
  knowsAbout?: string[];
  /** Canonical URL of the page emitting the schema. */
  url?: string;
}

/**
 * One business entity typed as both Organization and ConsultingBusiness. This
 * used to be two separate blocks — a hardcoded Turkish ConsultingBusiness in
 * index.html (which leaked onto every prerendered page, including the Russian
 * and English ones) plus this Organization. Callers now pass the page's own
 * language for every human-readable field.
 */
export function createOrganizationSchema(options: OrganizationSchemaOptions = {}) {
  const { description, knowsAbout, url } = options;
  const pageUrl = url
    ? url.startsWith("http")
      ? url
      : `${SITE_ORIGIN}${url}`
    : SITE_ORIGIN;

  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ConsultingBusiness"],
    "@id": ORGANIZATION_ID,
    "name": "Russia Market Entry",
    "legalName": VERIFIED_CONTACT.legalName,
    "url": pageUrl,
    "logo": `${SITE_ORIGIN}/favicon.png`,
    "description":
      description ??
      "Türkiye'den Rusya'ya uçtan uca e-ticaret, Ozon, Wildberries, Lamoda entegrasyonu, lojistik ve şirket kurulumu.",
    "email": VERIFIED_CONTACT.email,
    "taxID": VERIFIED_CONTACT.inn,
    "identifier": [
      { "@type": "PropertyValue", "propertyID": "INN", "value": VERIFIED_CONTACT.inn },
      { "@type": "PropertyValue", "propertyID": "KPP", "value": VERIFIED_CONTACT.kpp },
      { "@type": "PropertyValue", "propertyID": "OGRN", "value": VERIFIED_CONTACT.ogrn },
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": VERIFIED_CONTACT.streetAddress,
      "addressLocality": VERIFIED_CONTACT.addressLocality,
      "addressRegion": VERIFIED_CONTACT.addressRegion,
      "postalCode": VERIFIED_CONTACT.postalCode,
      "addressCountry": VERIFIED_CONTACT.addressCountry,
    },
    "areaServed": [
      { "@type": "Country", "name": "TR" },
      { "@type": "Country", "name": "RU" },
    ],
    ...(knowsAbout && knowsAbout.length > 0 ? { knowsAbout } : {}),
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": VERIFIED_CONTACT.phoneTr,
        "email": VERIFIED_CONTACT.email,
        "contactType": "customer service",
        "areaServed": "TR",
        "availableLanguage": ["Turkish", "English", "Russian"],
      },
      {
        "@type": "ContactPoint",
        "telephone": VERIFIED_CONTACT.phoneRu,
        "email": VERIFIED_CONTACT.email,
        "contactType": "customer service",
        "areaServed": "RU",
        "availableLanguage": ["Turkish", "English", "Russian"],
      },
    ],
    "sameAs": ["https://www.linkedin.com/company/russia-market-entry"],
  };
}

export interface WebSiteSchemaOptions {
  url?: string;
}

/** Home-page WebSite entity. No SearchAction — the site has no internal search UI. */
export function createWebSiteSchema(options: WebSiteSchemaOptions = {}) {
  const siteUrl = options.url
    ? options.url.startsWith("http")
      ? options.url
      : `${SITE_ORIGIN}${options.url}`
    : SITE_ORIGIN;

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Russia Market Entry",
    "url": siteUrl,
    "publisher": { "@id": ORGANIZATION_ID },
  };
}

/**
 * FAQPage for the questions actually rendered on the page, in that page's
 * language. Google requires the schema to mirror visible content, which the
 * previous index.html-wide Turkish FAQ block violated on every non-home page.
 */
export function createFaqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
}

export function createServiceSchema(title: string, description: string, url: string) {
  const fullUrl = url.startsWith("http") ? url : `${SITE_ORIGIN}${url}`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": title,
    "description": description,
    "provider": { "@id": ORGANIZATION_ID },
    "areaServed": [
      { "@type": "Country", "name": "Türkiye" },
      { "@type": "Country", "name": "Rusya" },
    ],
    "serviceType": "E-Commerce Consulting & Operations",
    "url": fullUrl,
  };
}

export function createArticleSchema(
  title: string,
  description: string,
  slug: string,
  publishedAt: string,
  imageUrl?: string,
  /** Language URL prefix: '' (TR), '/ru', or '/en' */
  pathPrefix: string = "",
  modifiedAt?: string
) {
  const fullUrl = `${SITE_ORIGIN}${pathPrefix}/blog/${slug}`;
  const fullImageUrl = imageUrl
    ? imageUrl.startsWith("http")
      ? imageUrl
      : `${SITE_ORIGIN}${imageUrl}`
    : DEFAULT_OG_IMAGE;

  // Standardize published date format to YYYY-MM-DD
  const parseTurkishDateToISO = (dateStr: string) => {
    const months: { [key: string]: string } = {
      Ocak: "01", Şubat: "02", Mart: "03", Nisan: "04", Mayıs: "05", Haziran: "06",
      Temmuz: "07", Ağustos: "08", Eylül: "09", Ekim: "10", Kasım: "11", Aralık: "12"
    };
    const parts = dateStr.trim().split(" ");
    if (parts.length === 3) {
      const day = parts[0].padStart(2, "0");
      if (!months[parts[1]]) {
        console.warn(`createArticleSchema: tanınmayan ay adı "${parts[1]}" (girdi: "${dateStr}"), Ocak varsayıldı.`);
      }
      const month = months[parts[1]] || "01";
      const year = parts[2];
      return `${year}-${month}-${day}`;
    }
    console.warn(`createArticleSchema: tarih ayrıştırılamadı ("${dateStr}"), sabit bir tarihe düşülüyor.`);
    return "2026-08-01";
  };

  const datePublished = parseTurkishDateToISO(publishedAt);
  const dateModified = parseTurkishDateToISO(modifiedAt ?? publishedAt);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": [fullImageUrl],
    "datePublished": datePublished,
    "dateModified": dateModified,
    "author": { "@id": ORGANIZATION_ID },
    "publisher": { "@id": ORGANIZATION_ID },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullUrl,
    },
  };
}
