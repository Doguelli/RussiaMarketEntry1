export type BlogCategoryKey =
  | "pazaryerleri"
  | "lojistik"
  | "hukuk-sirket"
  | "vergi-finans"
  | "pazarlama-buyume"
  | "genel";

export interface BlogCategoryDef {
  key: BlogCategoryKey;
  label: string;
  labelEn: string;
  labelRu: string;
  badgeClass: string;
  accentClass: string;
  bulletClass: string;
  calloutClass: string;
  statValueClass: string;
}

export const blogCategories: Record<BlogCategoryKey, BlogCategoryDef> = {
  pazaryerleri: {
    key: "pazaryerleri",
    label: "Pazaryerleri",
    labelEn: "Marketplaces",
    labelRu: "Маркетплейсы",
    badgeClass: "bg-primary-50 text-primary-700 border border-primary-100",
    accentClass: "text-primary-600",
    bulletClass: "bg-primary-500",
    calloutClass: "bg-primary-50 border border-primary-100",
    statValueClass: "text-primary-600",
  },
  lojistik: {
    key: "lojistik",
    label: "Lojistik & Depo",
    labelEn: "Logistics & Warehouse",
    labelRu: "Логистика и склад",
    badgeClass: "bg-orange-50 text-orange-700 border border-orange-100",
    accentClass: "text-orange-600",
    bulletClass: "bg-orange-500",
    calloutClass: "bg-orange-50 border border-orange-100",
    statValueClass: "text-orange-600",
  },
  "hukuk-sirket": {
    key: "hukuk-sirket",
    label: "Hukuk & Şirket Kuruluşu",
    labelEn: "Legal & Company Setup",
    labelRu: "Право и регистрация компании",
    badgeClass: "bg-purple-50 text-purple-700 border border-purple-100",
    accentClass: "text-purple-600",
    bulletClass: "bg-purple-500",
    calloutClass: "bg-purple-50 border border-purple-100",
    statValueClass: "text-purple-600",
  },
  "vergi-finans": {
    key: "vergi-finans",
    label: "Vergi & Finans",
    labelEn: "Tax & Finance",
    labelRu: "Налоги и финансы",
    badgeClass: "bg-emerald-50 text-emerald-700 border border-emerald-100",
    accentClass: "text-emerald-600",
    bulletClass: "bg-emerald-500",
    calloutClass: "bg-emerald-50 border border-emerald-100",
    statValueClass: "text-emerald-600",
  },
  "pazarlama-buyume": {
    key: "pazarlama-buyume",
    label: "Pazarlama & Büyüme",
    labelEn: "Marketing & Growth",
    labelRu: "Маркетинг и рост",
    badgeClass: "bg-pink-50 text-pink-700 border border-pink-100",
    accentClass: "text-pink-600",
    bulletClass: "bg-pink-500",
    calloutClass: "bg-pink-50 border border-pink-100",
    statValueClass: "text-pink-600",
  },
  genel: {
    key: "genel",
    label: "Genel",
    labelEn: "General",
    labelRu: "Общее",
    badgeClass: "bg-primary-50 text-primary-600 border border-primary-100",
    accentClass: "text-primary-500",
    bulletClass: "bg-accent-500",
    calloutClass: "bg-primary-50 border border-primary-100",
    statValueClass: "text-primary-600",
  },
};

export const blogCategoryList = Object.values(blogCategories);

export function getBlogCategory(key?: string): BlogCategoryDef {
  if (key && key in blogCategories) return blogCategories[key as BlogCategoryKey];
  return blogCategories.genel;
}

export function getCategoryLabel(cat: BlogCategoryDef, lang?: string): string {
  if (lang === "en") return cat.labelEn;
  if (lang === "ru") return cat.labelRu;
  return cat.label;
}
