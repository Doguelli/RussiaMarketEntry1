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
      "item": item.url.startsWith("http") ? item.url : `https://russiamarketentry.com${item.url}`
    }))
  };
}

// Registered seat of ООО «НАСЕЛЬ ТЕКСТИЛЬ» — the only legal entity named on
// the site's legal pages. No Turkish street address is published in schema.
export const VERIFIED_CONTACT = {
  email: "hello@russiamarketentry.com",
  phoneTr: "+90 532 785 24 20",
  phoneRu: "+7 993 406-72-58",
  streetAddress: "проспект Мира, д. 50, кв. 179",
  addressLocality: "Нижнекамск",
  addressRegion: "Республика Татарстан",
  postalCode: "423571",
  addressCountry: "RU",
  /** Full registered address as published on legal and contact surfaces */
  fullAddressRu:
    "423571, Республика Татарстан, Нижнекамский район, г. Нижнекамск, проспект Мира, д. 50, кв. 179, Россия",
  legalName: "ООО «НАСЕЛЬ ТЕКСТИЛЬ»",
  inn: "1651099520",
  kpp: "165101001",
  ogrn: "1251600038513",
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
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ConsultingBusiness"],
    "name": "Russia Market Entry",
    "legalName": VERIFIED_CONTACT.legalName,
    "url": url ? (url.startsWith("http") ? url : `https://russiamarketentry.com${url}`) : "https://russiamarketentry.com",
    "logo": "https://russiamarketentry.com/favicon.png",
    "description":
      description ??
      "Türkiye'den Rusya'ya uçtan uca e-ticaret, Ozon, Wildberries, Lamoda entegrasyonu, lojistik ve şirket kurulumu.",
    "email": VERIFIED_CONTACT.email,
    "taxID": VERIFIED_CONTACT.inn,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": VERIFIED_CONTACT.streetAddress,
      "addressLocality": VERIFIED_CONTACT.addressLocality,
      "addressRegion": VERIFIED_CONTACT.addressRegion,
      "postalCode": VERIFIED_CONTACT.postalCode,
      "addressCountry": VERIFIED_CONTACT.addressCountry
    },
    "areaServed": [
      { "@type": "Country", "name": "TR" },
      { "@type": "Country", "name": "RU" }
    ],
    ...(knowsAbout && knowsAbout.length > 0 ? { knowsAbout } : {}),
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": VERIFIED_CONTACT.phoneTr,
        "email": VERIFIED_CONTACT.email,
        "contactType": "customer service",
        "areaServed": "TR",
        "availableLanguage": ["Turkish", "English", "Russian"]
      },
      {
        "@type": "ContactPoint",
        "telephone": VERIFIED_CONTACT.phoneRu,
        "email": VERIFIED_CONTACT.email,
        "contactType": "customer service",
        "areaServed": "RU",
        "availableLanguage": ["Turkish", "English", "Russian"]
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/russia-market-entry"
    ]
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
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": title,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "Russia Market Entry",
      "url": "https://russiamarketentry.com"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Türkiye"
      },
      {
        "@type": "Country",
        "name": "Rusya"
      }
    ],
    "serviceType": "E-Commerce Consulting & Operations",
    "url": url.startsWith("http") ? url : `https://russiamarketentry.com${url}`
  };
}

export function createArticleSchema(
  title: string,
  description: string,
  slug: string,
  publishedAt: string,
  imageUrl?: string,
  /** Language URL prefix: '' (TR), '/ru', or '/en' */
  pathPrefix: string = ""
) {
  const fullUrl = `https://russiamarketentry.com${pathPrefix}/blog/${slug}`;
  const fullImageUrl = imageUrl
    ? (imageUrl.startsWith("http") ? imageUrl : `https://russiamarketentry.com${imageUrl}`)
    : "https://russiamarketentry.com/og-image.jpg";

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

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": [fullImageUrl],
    "datePublished": parseTurkishDateToISO(publishedAt),
    "dateModified": parseTurkishDateToISO(publishedAt),
    "author": {
      "@type": "Organization",
      "name": "Russia Market Entry",
      "url": "https://russiamarketentry.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Russia Market Entry",
      "logo": {
        "@type": "ImageObject",
        "url": "https://russiamarketentry.com/favicon.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullUrl
    }
  };
}
