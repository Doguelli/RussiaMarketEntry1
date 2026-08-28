import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { createBreadcrumbSchema } from "@/utils/seo";
import { socialMetaElements } from "@/components/PageSocialMeta";
import {
  absoluteUrl,
  homePath,
  privacyPath,
  termsPath,
  cookiesPath,
} from "@/utils/ruPaths";
import { getLegalDoc, type LegalKind } from "@/data/legalContent";

type Props = {
  kind: LegalKind;
  /** URL language tree: Turkish paths vs /ru/* paths */
  isRu: boolean;
};

export default function LegalDocument({ kind, isRu }: Props) {
  const doc = getLegalDoc(kind);
  const pagePath = isRu ? doc.pathRu : doc.pathTr;
  const canonicalUrl = absoluteUrl(pagePath);
  const title = isRu ? doc.titleRu : doc.titleTr;
  const description = isRu ? doc.metaRu : doc.metaTr;
  const h1 = isRu ? doc.h1Ru : doc.h1Tr;
  const updatedLabel = isRu ? doc.updatedLabelRu : doc.updatedLabelTr;
  const updatedDate = isRu ? doc.updatedDateRu : doc.updatedDateTr;
  const sections = isRu ? doc.sectionsRu : doc.sectionsTr;
  const trHref = absoluteUrl(doc.pathTr);
  const ruHref = absoluteUrl(doc.pathRu);

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: isRu ? "Главная" : "Ana Sayfa", url: homePath(isRu) },
    { name: h1, url: pagePath },
  ]);

  const otherLinks = [
    {
      kind: "privacy" as const,
      label: isRu ? "Политика конфиденциальности" : "Gizlilik Politikası",
      to: privacyPath(isRu),
    },
    {
      kind: "terms" as const,
      label: isRu ? "Условия использования" : "Kullanım Şartları",
      to: termsPath(isRu),
    },
    {
      kind: "cookies" as const,
      label: isRu ? "Политика cookie" : "Çerez Politikası",
      to: cookiesPath(isRu),
    },
  ].filter((l) => l.kind !== kind);

  return (
    <main className="pt-8 pb-24">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="tr" href={trHref} />
        <link rel="alternate" hrefLang="ru" href={ruHref} />
        <link rel="alternate" hrefLang="x-default" href={trHref} />
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
          aria-label={isRu ? "Другие правовые документы" : "Diğer yasal belgeler"}
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
