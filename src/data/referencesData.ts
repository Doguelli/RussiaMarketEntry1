export type ReferenceTag = "marketplace" | "distribution" | "b2b";

export interface ReferenceBrand {
  id: string;
  name: string;
  logo: string;
  order: number;
  scopeTR: string;
  scopeEN: string;
  scopeRU: string;
  tag: ReferenceTag;
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
  },
];

export function scopeForBrand(brand: ReferenceBrand, lang: "tr" | "en" | "ru"): string {
  if (lang === "en") return brand.scopeEN;
  if (lang === "ru") return brand.scopeRU;
  return brand.scopeTR;
}
