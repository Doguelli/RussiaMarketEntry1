import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { ShoppingBag, TrendingUp, Globe2, Truck, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { createBreadcrumbSchema } from "@/utils/seo";
import { russiaMarketPath, absoluteUrl, homePath, contactPath, whyRussiaPath } from "@/utils/ruPaths";

export default function RussiaMarket() {
  const { t, i18n } = useTranslation();
  const isRu = i18n.language === 'ru';
  const isEn = i18n.language === 'en';
  const pagePath = russiaMarketPath(isRu);
  const canonicalUrl = absoluteUrl(pagePath);

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: isRu ? 'Главная' : (isEn ? 'Home' : 'Ana Sayfa'), url: homePath(isRu) },
    { name: t('nav.russia_market'), url: pagePath }
  ]);

  return (
    <main className="bg-slate-50 min-h-screen pt-8 pb-12 md:pt-10 md:pb-16">
      <Helmet>
        <title>{t('russia_market_page.title')}</title>
        <meta name="description" content={t('russia_market_page.desc_meta')} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="tr" href="https://russiamarketentry.com/rusya-pazari" />
        <link rel="alternate" hrefLang="ru" href="https://russiamarketentry.com/ru/rynok-rossii" />
        <link rel="alternate" hrefLang="x-default" href="https://russiamarketentry.com/rusya-pazari" />
        <meta property="og:title" content={t('russia_market_page.title')} />
        <meta property="og:description" content={t('russia_market_page.desc_meta')} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-2 bg-primary-100 text-primary-600 text-[13px] font-bold rounded-full mb-4 md:mb-5 uppercase tracking-wider">
              {t('russia_market_page.badge')}
            </div>
            <h1 className="text-[30px] sm:text-[40px] md:text-[52px] font-extrabold text-primary-500 mb-4 md:mb-5 tracking-tight leading-tight" dangerouslySetInnerHTML={{__html: t('russia_market_page.h1')}}>
            </h1>
            <p className="text-[15px] md:text-[17px] text-slate-500 leading-relaxed">
              {t('russia_market_page.subtitle')}
            </p>
          </motion.div>
        </div>

        {/* Neden Rusya Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16">
          {[
            {
              id: "hacim",
              icon: TrendingUp,
              title: t('russia_market_page.feat1_title'),
              desc: t('russia_market_page.feat1_desc')
            },
            {
              id: "talep",
              icon: Globe2,
              title: t('russia_market_page.feat2_title'),
              desc: t('russia_market_page.feat2_desc')
            },
            {
              id: "lojistik",
              icon: Truck,
              title: t('russia_market_page.feat3_title'),
              desc: t('russia_market_page.feat3_desc')
            },
            {
              id: "rekabet",
              icon: ShieldCheck,
              title: t('russia_market_page.feat4_title'),
              desc: t('russia_market_page.feat4_desc')
            }
          ].map((item, i) => (
            <Link to={`${whyRussiaPath(isRu)}#${item.id}`} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-5 md:p-7 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:border-primary-300 transition-all cursor-pointer flex gap-4 md:gap-5 h-full group"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-primary-50 group-hover:bg-primary-500 group-hover:text-white transition-colors rounded-2xl flex items-center justify-center text-primary-500">
                    <item.icon className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-[17px] md:text-[20px] font-bold text-primary-500 mb-2 group-hover:text-accent-500 transition-colors flex items-center gap-2">
                    {item.title} 
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-[14px] md:text-[15px]">{item.desc}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Pazar Karşılaştırması Table */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-5 md:p-10 mb-12 md:mb-16 overflow-x-auto">
          <h2 className="text-[24px] md:text-[32px] font-extrabold text-primary-500 mb-5 md:mb-7 tracking-tight text-center">{t('russia_market_page.table_title')}</h2>
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b-2 border-primary-500">
                <th className="py-3 px-4 md:py-4 md:px-6 text-primary-500 font-bold uppercase tracking-wider text-[13px] md:text-[14px]">{t('russia_market_page.th1')}</th>
                <th className="py-3 px-4 md:py-4 md:px-6 text-slate-500 font-bold uppercase tracking-wider text-[13px] md:text-[14px]">{t('russia_market_page.th2')}</th>
                <th className="py-3 px-4 md:py-4 md:px-6 text-accent-500 font-bold uppercase tracking-wider text-[13px] md:text-[14px]">{t('russia_market_page.th3')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { kriter: t('russia_market_page.tr1_c1'), eur: t('russia_market_page.tr1_c2'), rus: t('russia_market_page.tr1_c3') },
                { kriter: t('russia_market_page.tr2_c1'), eur: t('russia_market_page.tr2_c2'), rus: t('russia_market_page.tr2_c3') },
                { kriter: t('russia_market_page.tr3_c1'), eur: t('russia_market_page.tr3_c2'), rus: t('russia_market_page.tr3_c3') },
                { kriter: t('russia_market_page.tr4_c1'), eur: t('russia_market_page.tr4_c2'), rus: t('russia_market_page.tr4_c3') },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 md:py-5 md:px-6 font-bold text-primary-500 text-[14px] md:text-[15px]">{row.kriter}</td>
                  <td className="py-4 px-4 md:py-5 md:px-6 text-slate-500 text-[14px] md:text-[15px]">{row.eur}</td>
                  <td className="py-4 px-4 md:py-5 md:px-6 font-semibold text-accent-500 flex items-center gap-2 text-[14px] md:text-[15px]">
                    <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0" /> {row.rus}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pazaryeri Ekosistemi */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <h2 className="text-[26px] md:text-[34px] font-extrabold text-primary-500 mb-3 md:mb-4 tracking-tight leading-tight">{t('russia_market_page.eco_title')}</h2>
          <p className="text-slate-500 text-[15px] md:text-[17px]">
            {t('russia_market_page.eco_desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-12">
          {/* Wildberries */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-5 md:p-7 border-t-4 border-[#cb11ab] shadow-sm relative overflow-hidden group"
          >
            <h3 className="text-[24px] md:text-[28px] font-black text-[#cb11ab] tracking-tight lowercase mb-4 md:mb-5">wildberries</h3>
            <div className="space-y-3 md:space-y-4">
              <div>
                <strong className="text-primary-500 block mb-1 text-[14px]">{t('russia_market_page.vol')}</strong>
                <span className="text-slate-500 text-[14px] md:text-[15px]">{t('russia_market_page.wb_vol')}</span>
              </div>
              <div>
                <strong className="text-primary-500 block mb-1 text-[14px]">{t('russia_market_page.strat')}</strong>
                <span className="text-slate-500 text-[14px] md:text-[15px]">{t('russia_market_page.wb_strat')}</span>
              </div>
              <div>
                <strong className="text-primary-500 block mb-1 text-[14px]">{t('russia_market_page.focus')}</strong>
                <span className="text-slate-500 text-[14px] md:text-[15px]">{t('russia_market_page.wb_focus')}</span>
              </div>
            </div>
          </motion.div>

          {/* Lamoda */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-5 md:p-7 border-t-4 border-black shadow-sm"
          >
            <h3 className="text-[24px] md:text-[28px] font-black text-black tracking-widest uppercase mb-4 md:mb-5">LAMODA</h3>
            <div className="space-y-3 md:space-y-4">
              <div>
                <strong className="text-primary-500 block mb-1 text-[14px]">{t('russia_market_page.vol')}</strong>
                <span className="text-slate-500 text-[14px] md:text-[15px]">{t('russia_market_page.lm_vol')}</span>
              </div>
              <div>
                <strong className="text-primary-500 block mb-1 text-[14px]">{t('russia_market_page.strat')}</strong>
                <span className="text-slate-500 text-[14px] md:text-[15px]">{t('russia_market_page.lm_strat')}</span>
              </div>
              <div>
                <strong className="text-primary-500 block mb-1 text-[14px]">{t('russia_market_page.focus')}</strong>
                <span className="text-slate-500 text-[14px] md:text-[15px]">{t('russia_market_page.lm_focus')}</span>
              </div>
            </div>
          </motion.div>

          {/* Ozon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-5 md:p-7 border-t-4 border-[#005BFF] shadow-sm"
          >
            <h3 className="text-[24px] md:text-[28px] font-black text-[#005BFF] tracking-tighter mb-4 md:mb-5">OZON</h3>
            <div className="space-y-3 md:space-y-4">
              <div>
                <strong className="text-primary-500 block mb-1 text-[14px]">{t('russia_market_page.vol')}</strong>
                <span className="text-slate-500 text-[14px] md:text-[15px]">{t('russia_market_page.oz_vol')}</span>
              </div>
              <div>
                <strong className="text-primary-500 block mb-1 text-[14px]">{t('russia_market_page.strat')}</strong>
                <span className="text-slate-500 text-[14px] md:text-[15px]">{t('russia_market_page.oz_strat')}</span>
              </div>
              <div>
                <strong className="text-primary-500 block mb-1 text-[14px]">{t('russia_market_page.focus')}</strong>
                <span className="text-slate-500 text-[14px] md:text-[15px]">{t('russia_market_page.oz_focus')}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Strategic Approach */}
        <div className="bg-primary-500 rounded-3xl px-5 py-8 md:px-10 md:py-10 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-accent-500 opacity-[0.03] pattern-grid" />
          <h2 className="text-[24px] md:text-[36px] font-extrabold mb-3 md:mb-4 leading-tight">{t('russia_market_page.strat_title')}</h2>
          <p className="text-[14px] md:text-[17px] text-primary-100 max-w-3xl mx-auto mb-6 md:mb-7 leading-relaxed" dangerouslySetInnerHTML={{__html: t('russia_market_page.strat_desc')}}>
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to={contactPath(isRu)}
              className="bg-accent-500 hover:bg-accent-600 transition-colors text-white px-7 py-3.5 rounded-full font-bold text-[14px] md:text-[15px] inline-flex items-center gap-2"
            >
              {t('russia_market_page.cta')} <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
