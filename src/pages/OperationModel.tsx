import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { ShieldCheck, ArrowRight, BarChart3, Calculator, Receipt, Landmark } from "lucide-react";
import { Link } from "react-router-dom";

export default function OperationModel() {
  return (
    <main className="bg-slate-50 min-h-screen pt-12 pb-24">
      <Helmet>
        <title>Rusya E-İhracat Operasyon Modeli | Lojistik ve Gümrük Çözümleri</title>
        <meta name="description" content="Türkiye'den Rusya'ya güvenilir e-ihracat operasyon modeli. Konsinye satış, şeffaf vergi yönetimi ve lojistik entegrasyon sistemimiz." />
        <meta name="keywords" content="Rusya e-ihracat, Rusya gümrük, konsinye satış Rusya, Rusya vergi sistemi, e-ticaret lojistik Türkiye" />
        <link rel="canonical" href="https://russiamarketentry.com/operasyon-modeli" />
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-2 bg-accent-50 text-accent-600 text-[13px] font-bold rounded-full mb-6 uppercase tracking-wider">
              En Güçlü Giriş Stratejisi
            </div>
            <h1 className="text-[42px] md:text-[56px] font-extrabold text-primary-500 mb-6 tracking-tight leading-tight">
              Konsinye Operasyon Modeli <br /> 
              <span className="text-accent-500">ve Finansal Projeksiyon</span>
            </h1>
            <p className="text-[18px] text-slate-500 leading-relaxed max-w-3xl mx-auto">
              Rusya pazarına girişte markaların en büyük çekincesi; risk, ödeme süreci ve operasyonel yükün yönetimidir. Konsinye modelimiz markaların pazara minimum risk ile giriş yapmasını sağlayan en kârlı yapıdır.
            </p>
          </motion.div>
        </div>

        {/* Konsinye Modeli Details */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[32px] font-extrabold text-primary-500 mb-6 tracking-tight">Nasıl Çalışır?</h2>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Bu modelde siz üretime ve ürün tedariğine odaklanırsınız, tüm operasyon süreci bizim tarafımızdan yönetilir. 
                Siz üretirsiniz, biz satarız ve tüm süreçleri raporlarız.
              </p>
              <ul className="space-y-4">
                {[
                  "Ürünlerinizin Rusya operasyonuna dahil edilmesi",
                  "Lojistik, pazar yeri vitrini ve satış yönetimi",
                  "Tahsilat, finansal döngü ve net kârın aktarımı",
                  "Operasyonel ve hukuki yüklerin üstlenilmesi"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-600 font-medium">
                    <ShieldCheck className="w-6 h-6 text-accent-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-primary-500 mb-4 text-[20px]">Avantajları</h3>
              <div className="space-y-6 relative border-l-2 border-slate-200 pl-6 ml-2">
                <div className="relative">
                  <div className="absolute -left-[30px] top-1 w-3 h-3 bg-accent-500 rounded-full ring-4 ring-white" />
                  <strong className="text-slate-800 block text-[16px]">Sıfır Şirket Kurulum Riski</strong>
                  <span className="text-slate-500 text-[14px]">Rusya'da şirket kurmadan doğrudan operasyona başlarsınız.</span>
                </div>
                <div className="relative">
                  <div className="absolute -left-[30px] top-1 w-3 h-3 bg-accent-500 rounded-full ring-4 ring-white" />
                  <strong className="text-slate-800 block text-[16px]">Geniş Kitlelere Hızlı Erişim</strong>
                  <span className="text-slate-500 text-[14px]">Ürünleriniz anında yüksek trafikli pazaryerlerinde listelenir.</span>
                </div>
                <div className="relative">
                  <div className="absolute -left-[30px] top-1 w-3 h-3 bg-accent-500 rounded-full ring-4 ring-white" />
                  <strong className="text-slate-800 block text-[16px]">Esnek Ödeme ve Tahsilat</strong>
                  <span className="text-slate-500 text-[14px]">Satış oldukça düzenli ödeme planı ve döngüsü (15 gün).</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vergi ve Hukuk */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-primary-500 rounded-3xl p-10 text-white"
          >
            <h2 className="text-[28px] font-extrabold mb-6">Vergi ve Hukuki Yapı</h2>
            <p className="text-primary-100 mb-8 leading-relaxed text-[15px]">
              Yanlış vergi ve yasal yapı kurgusu, kazancınızın kaybolmasına neden olur. İşletmenizi koruyan ve sürdürülebilir kılan finansal altyapıyı biz yönetiyoruz.
            </p>
            <ul className="space-y-5">
              <li className="flex gap-4">
                <Landmark className="w-8 h-8 text-accent-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-[16px]">Şirketleşme mi, Konsinye mi?</h4>
                  <p className="text-primary-100 text-[14px]">Kendi şirketinizi (OOO) kurabilirsiniz ya da Konsinye Model ile risk almadan bizim ağımız üzerinden ilerleyebilirsiniz.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Receipt className="w-8 h-8 text-accent-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-[16px]">Çestniy Znak (Zorunlu)</h4>
                  <p className="text-primary-100 text-[14px]">Tekstil dahil birçok üründe dijital ürün takip sistemi zorunluluğunu sizin adınıza hallediyoruz.</p>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-white rounded-3xl p-10 border border-slate-100 shadow-sm"
          >
            <h2 className="text-[28px] font-extrabold text-primary-500 mb-6 flex items-center gap-3">
              <BarChart3 className="text-accent-500 w-8 h-8" />
              Finansal Projeksiyon
            </h2>
            <p className="text-slate-500 mb-8 leading-relaxed text-[15px]">
              Bizim için asıl başarı ciro değil, <strong className="text-slate-800">net kârlılık</strong>tır. Pazar dinamiklerine uygun örnek bir birim ekonomi planı aşağıdadır:
            </p>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <div className="space-y-4 text-[15px]">
                <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                  <span className="text-slate-600 font-medium">Satış Fiyatı (Örn.)</span>
                  <strong className="text-primary-500">%100 ($50)</strong>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-200 text-slate-500">
                  <span>Ürün Maliyeti</span>
                  <span>~ %30 ($15)</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-200 text-slate-500">
                  <span>Pazaryeri Komisyonu + Pazarlama</span>
                  <span>~ %25 ($12.5)</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-200 text-slate-500">
                  <span>Lojistik & Operasyon</span>
                  <span>~ %15 ($7.5)</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-primary-500 font-bold text-[18px]">Net Kârlılık</span>
                  <strong className="text-accent-500 font-black text-[20px]">%20 - %25</strong>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/iletisim"
            className="inline-flex items-center gap-3 bg-accent-500 hover:bg-accent-600 transition-colors text-white px-10 py-5 rounded-full font-bold text-[16px] shadow-lg transform hover:-translate-y-1"
          >
            Sizin İçin Projeksiyon Hazırlayalım <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </main>
  );
}
