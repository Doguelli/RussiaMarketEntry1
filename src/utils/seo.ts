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

export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Russia Market Entry",
    "url": "https://russiamarketentry.com",
    "logo": "https://russiamarketentry.com/favicon.png",
    "description": "Türkiye'den Rusya'ya uçtan uca e-ticaret, Ozon, Wildberries, Lamoda entegrasyonu, lojistik ve şirket kurulumu.",
    "address": [
      {
        "@type": "PostalAddress",
        "addressCountry": "TR",
        "addressLocality": "İstanbul"
      },
      {
        "@type": "PostalAddress",
        "addressCountry": "RU",
        "addressLocality": "Moskova"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+90 (212) 000 00 00",
      "contactType": "customer service",
      "availableLanguage": ["Turkish", "English", "Russian"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/russia-market-entry"
    ]
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
