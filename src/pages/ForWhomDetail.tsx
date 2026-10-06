import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { forWhomData } from "../data/forWhomData";
import { forWhomDataEN } from "../data/forWhomDataEN";
import { forWhomDataRU } from "../data/forWhomDataRU";
import { forWhomGuides, FOR_WHOM_GUIDE_HEADINGS } from "../data/forWhomGuides";
import { createBreadcrumbSchema, createFaqSchema, withBrand } from "@/utils/seo";
import { socialMetaElements, hreflangElements } from "@/components/PageSocialMeta";
import {
  resolveForWhomSlug,
  forWhomPath,
  forWhomDetailPath,
  contactPath,
  absoluteUrl,
  homePath,
  blogIndexPath,
  toPathLang,
} from "@/utils/ruPaths";

export default function ForWhomDetail() {
  const { slug: slugParam } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const isRu = i18n.language === 'ru';
  const pageLang = i18n.language;
  const isEn = i18n.language === 'en';
  const slug = resolveForWhomSlug(slugParam);
  
  const currentData = isRu ? forWhomDataRU : (isEn ? forWhomDataEN : forWhomData);
  const data = currentData.find((item) => item.slug === slug);

  if (!data || !slug) {
    return <Navigate to={forWhomPath(pageLang)} replace />;
  }

  const defaultConclusionDesc = isRu
    ? "Свяжитесь с нами, чтобы настроить наиболее эффективную модель продаж и начать масштабирование."
    : (isEn 
      ? "Contact us to set up the most suitable operation model for you and start selling."
      : "Size en uygun operasyon modelini kurmak ve satışlara başlamak için bizimle iletişime geçin.");

  const pagePath = forWhomDetailPath(slug, pageLang);
  const canonicalUrl = absoluteUrl(pagePath);
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: isRu ? 'Главная' : (isEn ? 'Home' : 'Ana Sayfa'), url: homePath(pageLang) },
    { name: isRu ? 'Для кого' : (isEn ? 'Who Is It For?' : t('nav.for_whom')), url: forWhomPath(pageLang) },
    { name: data.shortTitle, url: pagePath }
  ]);
  const guideLang = toPathLang(pageLang);
  const guide = forWhomGuides[guideLang][slug];
  const guideHeadings = FOR_WHOM_GUIDE_HEADINGS[guideLang];

  return (
    <main className="bg-slate-50 min-h-screen pt-10 pb-12 md:pb-16">
      <Helmet>
        <title>{withBrand(data.title)}</title>
        <meta name="description" content={data.description} />
        <link rel="canonical" href={canonicalUrl} />
        {hreflangElements((lang) => forWhomDetailPath(slug, lang))}
        {socialMetaElements({
          title: withBrand(data.title),
          description: data.description,
          url: canonicalUrl,
        })}
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        {guide && guide.faq.length > 0 && (
          <script type="application/ld+json">{JSON.stringify(createFaqSchema(guide.faq))}</script>
        )}
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <div className="mb-8">
          <Link to={forWhomPath(pageLang)} className="inline-flex items-center gap-2 text-slate-500 hover:text-primary-500 font-medium transition-colors">
            <ArrowLeft className="w-5 h-5" />
            {isRu ? 'Назад к решениям' : (isEn ? 'Back to Solutions' : 'Kimler İçin Sayfasına Dön')}
          </Link>
        </div>

        {/* Header */}
        <div className={`bg-white rounded-3xl p-6 lg:p-10 border-t-4 border-slate-100 shadow-xl overflow-hidden relative mb-10`} style={{ borderTopColor: 'var(' + data.color + ')' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10"
          >
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-[14px] mb-6 ${data.lightColor} ${data.color}`}>
              {data.icon}
              <span>{isRu ? 'Персональное решение' : (isEn ? 'Custom Solution' : 'Özel Çözüm')}</span>
            </div>
            
            <h1 className={`text-[32px] md:text-[48px] font-extrabold text-primary-500 leading-tight mb-8`}>
              {data.title}
            </h1>
            
            {/* Content */}
            <div className="mt-8">
              {data.content}
            </div>

            {guide && (
              <div className="mt-4 space-y-10">
                {guide.sections.map((section) => (
                  <section key={section.title} className="max-w-4xl">
                    <h2 className="text-[26px] font-bold text-primary-500 mb-4">{section.title}</h2>
                    {section.paragraphs.map((paragraph, i) => (
                      <p key={i} className="text-[17px] leading-relaxed text-slate-600 mb-4">
                        {paragraph}
                      </p>
                    ))}
                    {section.links && section.links.length > 0 && (
                      <div className="flex flex-wrap gap-x-6 gap-y-2">
                        {section.links.map((link) => (
                          <Link
                            key={link.blogSlug}
                            to={`${blogIndexPath(pageLang)}/${link.blogSlug}`}
                            className="inline-flex items-center gap-1.5 font-semibold text-accent-500 hover:text-accent-600"
                          >
                            {guideHeadings.readMore}: {link.label}
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </section>
                ))}

                {guide.faq.length > 0 && (
                  <section className="max-w-4xl">
                    <h2 className="text-[26px] font-bold text-primary-500 mb-6">{guideHeadings.faq}</h2>
                    <div className="space-y-4">
                      {guide.faq.map((item) => (
                        <div key={item.question} className="bg-slate-50 rounded-2xl p-6">
                          <h3 className="text-[18px] font-bold text-primary-500 mb-2">{item.question}</h3>
                          <p className="text-[16px] leading-relaxed text-slate-600">{item.answer}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </div>
            )}

            {/* Conclusion */}
            <div className={`rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden mt-16 ${data.bgColor}`}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-[100px] opacity-20 pointer-events-none" />
              
              <h3 className="text-[28px] font-bold mb-6">
                {data.conclusionTitle || (isRu ? 'Итог' : (isEn ? 'Conclusion' : 'Sonuç'))}
              </h3>
              
              <p className="text-white/90 text-[18px] leading-relaxed mb-8 max-w-4xl">
                {data.conclusionDesc || defaultConclusionDesc}
              </p>

              <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-[22px] font-bold mb-2">
                    {isRu ? 'Сделайте первый шаг для выхода на рынок' : (isEn ? 'Take the First Step to Enter the Market' : 'Pazara Giriş İçin İlk Adımı Atın')}
                  </h4>
                  <p className="text-white/80">
                    {isRu ? 'Свяжитесь с нами, чтобы запустить новый канал масштабирования продаж.' : (isEn ? 'Contact us to create a new growth channel.' : 'Yeni bir büyüme kanalı oluşturmak için bizimle iletişime geçin.')}
                  </p>
                </div>
                <Link
                  to={contactPath(pageLang)}
                  className="shrink-0 inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-colors"
                >
                  {isRu ? 'Оставить заявку' : (isEn ? 'Apply Now' : 'Hemen Başvuru Yapın')} <ArrowRight className="w-5 h-5"/>
                </Link>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </main>
  );
}
