export type ReferenceTag = "marketplace" | "distribution" | "b2b";

/** Per-logo visual normalization inside a fixed logo slot. */
export interface ReferenceLogoFit {
  /** Relative scale vs default slot height (1 = default). */
  scale: number;
  /** Max logo width as % of the slot (keeps wide wordmarks from edge-to-edge). */
  maxWidthPct: number;
}

export interface ReferenceBrand {
  id: string;
  name: string;
  logo: string;
  order: number;
  scopeTR: string;
  scopeEN: string;
  scopeRU: string;
  tag: ReferenceTag;
  logoFit: ReferenceLogoFit;
}

export const REFERENCE_BRANDS: ReferenceBrand[] = [
  {
    id: "the-purest-solutions",
    name: "The Purest Solutions",
    logo: "/uploads/references/the-pure-solutions.png",
    order: 1,
    scopeTR: "Rusya distribütörlük ve pazara giriş çalışmaları",
    scopeEN: "Russia distribution and market-entry projects",
    scopeRU: "Проекты по дистрибуции и выходу на рынок России",
    tag: "distribution",
    // Stacked wordmark; slightly light visually → nudge up
    logoFit: { scale: 1.16, maxWidthPct: 70 },
  },
  {
    id: "tekno-roll",
    name: "Tekno Roll",
    logo: "/uploads/references/tekno-roll.png",
    order: 2,
    scopeTR: "Rusya merkezli ilgili ürünlerin marketplace çalışmaları",
    scopeEN: "Russia-based marketplace operations for relevant product groups",
    scopeRU: "Marketplace-операции в России для соответствующих товарных групп",
    tag: "marketplace",
    // Square icon reads small against wide wordmarks
    logoFit: { scale: 1.32, maxWidthPct: 50 },
  },
  {
    id: "i8-denim",
    name: "i8 DENIM",
    logo: "/uploads/references/i8denim.webp",
    order: 3,
    scopeTR: "Rusya marketplace operasyonu, ürün ve stok yönetimi",
    scopeEN: "Russia marketplace operations, product and stock management",
    scopeRU: "Операции на российских маркетплейсах, управление товарами и запасами",
    tag: "marketplace",
    // Near-square asset; boost presence without dominating
    logoFit: { scale: 1.22, maxWidthPct: 54 },
  },
  {
    id: "machinist",
    name: "Machinist",
    logo: "/uploads/references/Machinist.webp",
    order: 4,
    scopeTR: "Rusya marketplace operasyonu, ürün ve stok yönetimi",
    scopeEN: "Russia marketplace operations, product and stock management",
    scopeRU: "Операции на российских маркетплейсах, управление товарами и запасами",
    tag: "marketplace",
    // Very wide + low native res: controlled upscale for presence without dominance
    logoFit: { scale: 0.62, maxWidthPct: 82 },
  },
  {
    id: "denim-trip",
    name: "DenimTrip",
    logo: "/uploads/references/denim-trip.webp",
    order: 5,
    scopeTR: "Rusya pazarı ve marketplace çalışmaları",
    scopeEN: "Russia market and marketplace projects",
    scopeRU: "Проекты по российскому рынку и маркетплейсам",
    tag: "marketplace",
    // Heavy block wordmark; slight pullback (also low native res)
    logoFit: { scale: 0.9, maxWidthPct: 76 },
  },
  {
    id: "respire",
    name: "Respire",
    logo: "/uploads/references/respire.webp",
    order: 6,
    scopeTR: "Rusya marketplace operasyonu, ürün ve stok yönetimi",
    scopeEN: "Russia marketplace operations, product and stock management",
    scopeRU: "Операции на российских маркетплейсах, управление товарами и запасами",
    tag: "marketplace",
    logoFit: { scale: 0.92, maxWidthPct: 74 },
  },
  {
    id: "wooster",
    name: "Wooster",
    logo: "/uploads/references/wooster.webp",
    order: 7,
    scopeTR: "Rusya marketplace operasyonu",
    scopeEN: "Russia marketplace operations",
    scopeRU: "Операции на российских маркетплейсах",
    tag: "marketplace",
    // Wide bold wordmark dominates the row
    logoFit: { scale: 0.72, maxWidthPct: 80 },
  },
  {
    id: "envira",
    name: "Envira",
    logo: "/uploads/references/envira-logo.png",
    order: 8,
    scopeTR: "Marketplace operasyonu",
    scopeEN: "Marketplace operations",
    scopeRU: "Операции на маркетплейсах",
    tag: "marketplace",
    logoFit: { scale: 1.0, maxWidthPct: 68 },
  },
  {
    id: "su-body-care",
    name: "SU Body Care",
    logo: "/uploads/references/su-body-care.png",
    order: 9,
    scopeTR: "Marketplace operasyonu",
    scopeEN: "Marketplace operations",
    scopeRU: "Операции на маркетплейсах",
    tag: "marketplace",
    // Thin line mark reads light → boost
    logoFit: { scale: 1.28, maxWidthPct: 66 },
  },
];

export function scopeForBrand(brand: ReferenceBrand, lang: "tr" | "en" | "ru"): string {
  if (lang === "en") return brand.scopeEN;
  if (lang === "ru") return brand.scopeRU;
  return brand.scopeTR;
}
