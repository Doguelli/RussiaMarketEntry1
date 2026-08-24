import { motion } from "motion/react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { createBreadcrumbSchema } from "@/utils/seo";
import { aboutPath, absoluteUrl, homePath, servicesPath } from "@/utils/ruPaths";

export default function About() {
  const { t, i18n } = useTranslation();
  const isRu = i18n.language === 'ru';
  const isEn = i18n.language === 'en';
  const pagePath = aboutPath(isRu);
  const canonicalUrl = absoluteUrl(pagePath);

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: isRu ? 'Главная' : (isEn ? 'Home' : 'Ana Sayfa'), url: homePath(isRu) },
    { name: t('nav.about'), url: pagePath }
  ]);

  return (
    <main className="pt-8 pb-24">
      <Helmet>
        <title>{t('about.title')}</title>
        <meta name="description" content={t('about.desc_meta')} />
        <meta name="keywords" content={isRu ? "о нас, регистрация компании в турции, wildberries ozon турция" : "hakkımızda, Rusya e-ticaret danışmanı, Ozon Türkiye partneri, Wildberries lojistik"} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="tr" href="https://russiamarketentry.com/hakkimizda" />
        <link rel="alternate" hrefLang="en" href="https://russiamarketentry.com/hakkimizda" />
        <link rel="alternate" hrefLang="ru" href="https://russiamarketentry.com/ru/o-nas" />
        <link rel="alternate" hrefLang="x-default" href="https://russiamarketentry.com/hakkimizda" />
        <meta property="og:title" content={t('about.title')} />
        <meta property="og:description" content={t('about.desc_meta')} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      {/* Header */}
      <div className="bg-transparent py-20 mb-10 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 bg-primary-50 text-primary-600 text-[13px] font-bold rounded-full mb-6 uppercase tracking-wider"
          >
            {t('about.badge')}
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-[48px] md:text-[56px] font-extrabold text-primary-500 mb-6 tracking-tight leading-tight"
          >
            {t('about.h1')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 max-w-3xl mx-auto text-[18px] leading-relaxed"
          >
            {t('about.subtitle')}
          </motion.p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg text-slate-600 prose-headings:font-sans max-w-none"
          >
            <h2 className="text-[32px] font-extrabold mb-6 tracking-tight text-primary-500">{t('about.story_heading')}</h2>
            <p className="text-[16px] leading-relaxed">
              {t('about.story1')}
            </p>
            <p className="text-[16px] leading-relaxed">
              {t('about.story2')}
            </p>
            <ul className="list-none pl-0 space-y-4 my-8">
              {[
                t('about.problem1'),
                t('about.problem2'),
                t('about.problem3'),
                t('about.problem4')
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 border-b border-slate-100 pb-4">
                  <div className="w-8 h-8 rounded-full bg-accent-50 flex items-center justify-center shrink-0 text-accent-500">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-slate-800 text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[16px] leading-relaxed border-l-4 border-accent-500 pl-6 italic" dangerouslySetInnerHTML={{__html: t('about.story_solution')}}>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary-500 rounded-3xl p-10 md:p-12 text-white relative overflow-hidden h-full flex flex-col justify-between shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-600 rounded-full opacity-30 blur-3xl translate-x-1/2 -translate-y-1/2" />
            
            <div className="relative z-10">
              <h3 className="text-[32px] font-extrabold mb-10 tracking-tight leading-tight" dangerouslySetInnerHTML={{__html: t('about.today_heading')}}></h3>
              
              <div className="grid grid-cols-2 gap-6 mb-10">
                 <div>
                   <div className="text-[32px] font-extrabold text-accent-500 mb-1">100+</div>
                   <div className="text-white/80 text-[14px] leading-tight">{t('home.trust1')}</div>
                 </div>
                 <div>
                   <div className="text-[32px] font-extrabold text-accent-500 mb-1">50+</div>
                   <div className="text-white/80 text-[14px] leading-tight">{t('home.trust2')}</div>
                 </div>
                 <div>
                   <div className="text-[32px] font-extrabold text-accent-500 mb-1">$10M+</div>
                   <div className="text-white/80 text-[14px] leading-tight">{t('home.trust3')}</div>
                 </div>
                 <div>
                   <div className="text-[32px] font-extrabold text-accent-500 mb-1">15+</div>
                   <div className="text-white/80 text-[14px] leading-tight">{t('home.trust4')}</div>
                 </div>
              </div>

              <div className="space-y-6">
                {[
                  t('about.point1'),
                  t('about.point2'),
                  t('about.point3'),
                  t('about.point4')
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded flex items-center justify-center bg-white/10 shrink-0 mt-0.5 border border-white/10">
                      <span className="text-[10px] font-bold text-accent-500">0{i+1}</span>
                    </div>
                    <p className="text-white/80 text-[16px] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-white/10 relative z-10">
              <p className="font-semibold text-white text-[18px] mb-8 tracking-tight leading-relaxed">
                {t('about.today_footer')}
              </p>
              <Link to={servicesPath(isRu)} className="bg-accent-500 hover:bg-accent-600 transition-colors text-white px-8 py-[14px] rounded-full font-bold text-[15px] inline-flex items-center gap-2">
                {t('about.btn')} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </section>

      </div>
    </main>
  );
}
