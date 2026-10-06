import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { createBreadcrumbSchema } from "@/utils/seo";
import { socialMetaElements, hreflangElements } from "@/components/PageSocialMeta";
import {
  absoluteUrl,
  homePath,
  privacyPath,
  termsPath,
  cookiesPath,
  type PathLang,
} from "@/utils/ruPaths";
import { getLegalDoc, type LegalKind } from "@/data/legalContent";

type Props = {
  kind: LegalKind;
  /** URL language tree */
  lang: PathLang;
};

const LABELS: Record<PathLang, { home: string; privacy: string; terms: string; cookies: string; otherDocs: string }> = {
  tr: {
    home: "Ana Sayfa",
    privacy: "Gizlilik Politikası",
    terms: "Kullanım Şartları",
    cookies: "Çerez Politikası",
    otherDocs: "Diğer yasal belgeler",
  },
  en: {
    home: "Home",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    cookies: "Cookie Policy",
    otherDocs: "Other legal documents",
  },
  ru: {
    home: "Главная",
    privacy: "Политика конфиденциальности",
    terms: "Условия использования",
    cookies: "Политика cookie",
    otherDocs: "Другие правовые документы",
  },
};

export default function LegalDocument({ kind, lang }: Props) {
  const doc = getLegalDoc(kind);
  const pick = <T,>(tr: T, en: T, ru: T): T => (lang === "ru" ? ru : lang === "en" ? en : tr);
  const pagePath = pick(doc.pathTr, doc.pathEn, doc.pathRu);
  const canonicalUrl = absoluteUrl(pagePath);
  const title = pick(doc.titleTr, doc.titleEn, doc.titleRu);
  const description = pick(doc.metaTr, doc.metaEn, doc.metaRu);
  const h1 = pick(doc.h1Tr, doc.h1En, doc.h1Ru);
  const updatedLabel = pick(doc.updatedLabelTr, doc.updatedLabelEn, doc.updatedLabelRu);
  const updatedDate = pick(doc.updatedDateTr, doc.updatedDateEn, doc.updatedDateRu);
  const sections = pick(doc.sectionsTr, doc.sectionsEn, doc.sectionsRu);
  const labels = LABELS[lang];

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: labels.home, url: homePath(lang) },
    { name: h1, url: pagePath },
  ]);

  const otherLinks = [
    { kind: "privacy" as const, label: labels.privacy, to: privacyPath(lang) },
    { kind: "terms" as const, label: labels.terms, to: termsPath(lang) },
    { kind: "cookies" as const, label: labels.cookies, to: cookiesPath(lang) },
  ].filter((l) => l.kind !== kind);

  return (
    <main className="pt-8 pb-24">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        {hreflangElements((l) => (l === "ru" ? doc.pathRu : l === "en" ? doc.pathEn : doc.pathTr))}
        {socialMetaElements({ title, description, url: canonicalUrl })}
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="bg-transparent py-16 mb-10 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[13px] font-semibold text-primary-600 uppercase tracking-wider mb-4">
            {updatedLabel}: {updatedDate}
          </p>
          <h1 className="text-[36px] md:text-[44px] font-extrabold text-primary-500 tracking-tight leading-tight">
            {h1}
          </h1>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-10 text-slate-600">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-[22px] font-bold text-primary-500 mb-4 tracking-tight">
                {section.heading}
              </h2>
              {section.paragraphs?.map((p, i) => (
                <p key={`${section.heading}-p-${i}`} className="text-[16px] leading-relaxed mb-3">
                  {p}
                </p>
              ))}
              {section.bullets && section.bullets.length > 0 && (
                <ul className="list-disc pl-5 space-y-2 text-[16px] leading-relaxed">
                  {section.bullets.map((b, i) => (
                    <li key={`${section.heading}-b-${i}`}>{b}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <nav
          className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row gap-4 text-[14px]"
          aria-label={labels.otherDocs}
        >
          {otherLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-primary-600 hover:text-accent-500 font-semibold transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </article>
    </main>
  );
}
