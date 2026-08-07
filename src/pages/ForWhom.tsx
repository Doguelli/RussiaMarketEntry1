import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag, Factory, Users, CheckCircle2, Droplets } from "lucide-react";
import { useTranslation } from "react-i18next";
import { forWhomData } from "@/data/forWhomData";
import { forWhomDataEN } from "@/data/forWhomDataEN";
import { createBreadcrumbSchema } from "@/utils/seo";

export default function ForWhom() {
  const { t, i18n } = useTranslation();
  const currentData = i18n.language === 'en' ? forWhomDataEN : forWhomData;

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: i18n.language === 'en' ? 'Home' : 'Ana Sayfa', url: '/' },
    { name: t('nav.for_whom'), url: '/kimler-icin' }
  ]);

  const metaTitle = i18n.language === 'en'
    ? "Who Is It For? - Solutions for Every Business Model | Russia Market Entry"
    : "Kimler İçin? - Her İş Modeli İçin Çözümler | Russia Market Entry";

  const metaDesc = i18n.language === 'en'
    ? "Custom e-commerce entry solutions for textile brands, manufacturers, e-commerce entrepreneurs, and cosmetics brands in Russia."
    : "Tekstil markaları, üreticiler, e-ticaret girişimcileri ve kozmetik markaları için özelleştirilmiş Rusya e-ticaret ve pazar giriş çözümleri.";

  return (
    <main className="bg-slate-50 min-h-screen pt-12 pb-24">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDesc} />
        <link rel="canonical" href="https://russiamarketentry.com/kimler-icin" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:url" content="https://russiamarketentry.com/kimler-icin" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-[42px] md:text-[56px] font-extrabold text-primary-500 mb-6 tracking-tight leading-tight">
              {i18n.language === 'en' ? 'Customized Solutions' : 'Her İş Modeli İçin'} <br />
              <span className="text-accent-500">{i18n.language === 'en' ? 'For Every Business Model' : 'Özelleştirilmiş Çözümler'}</span>
            </h1>
            <p className="text-[18px] text-slate-500 leading-relaxed">
              {i18n.language === 'en' 
                ? 'The potential in the Russian market offers different opportunities for each sector. Whether you have a branded product or not, we establish the most suitable integrated structure for your operational model.'
                : 'Rusya pazarındaki potansiyel her sektöre farklı fırsatlar sunar. Markalı ürününüz olsun veya olmasın, sizin operasyon modelinize en uygun entegre yapıyı kuruyoruz.'}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentData.map((dataItem, i) => (
            <motion.div
              key={dataItem.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex"
            >
              <Link to={`/kimler-icin/${dataItem.slug}`} className="bg-white rounded-3xl p-8 shadow-sm flex flex-col w-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group border-t-4" style={{borderTopColor: 'var('+dataItem.color+')'}}>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors ${dataItem.lightColor} ${dataItem.color}`} style={{backgroundColor: 'var('+dataItem.lightColor+')'}}>
                  {dataItem.icon}
                </div>
                <h3 className={`text-[24px] font-extrabold text-primary-500 mb-4 transition-colors`}>{dataItem.title}</h3>
                <p className="text-slate-500 mb-8 flex-grow">
                  {dataItem.description}
                </p>
                <div className="mt-auto block text-center w-full text-white font-bold py-3 rounded-full text-[14px] transition-colors" style={{backgroundColor: 'var(' + dataItem.bgColor.replace('bg-', '') + ', #000)'}}>
                  {i18n.language === 'en' ? 'View Details' : 'Detayları İncele'}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* Big CTA summary */}
        <div className="mt-20 bg-primary-500 rounded-3xl p-10 md:p-14 text-center">
          <h2 className="text-[32px] md:text-[40px] font-extrabold text-white mb-6">
            {i18n.language === 'en' ? 'Is your business model ready?' : 'İş modeliniz hazır mı?'}
          </h2>
          <p className="text-primary-100 max-w-2xl mx-auto mb-10 text-[18px]">
            {i18n.language === 'en' 
              ? 'Schedule a free consultation to create the most suitable growth plan for you, regardless of your category.'
              : 'Hangi kategoride olursanız olun, size en uygun büyüme planını oluşturmak için bir ücretsiz görüşme planlayın.'}
          </p>
          <Link
            to="/iletisim"
            className="inline-flex items-center gap-3 bg-accent-500 hover:bg-accent-600 transition-colors text-white px-10 py-5 rounded-full font-bold text-[16px] shadow-lg transform hover:-translate-y-1"
          >
            {i18n.language === 'en' ? 'Get Free Consultation' : 'Ücretsiz Görüşme Al'} <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </main>
  );
}
