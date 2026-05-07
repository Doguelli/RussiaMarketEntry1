import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag, Factory, Users, CheckCircle2 } from "lucide-react";

export default function ForWhom() {
  return (
    <main className="bg-slate-50 min-h-screen pt-12 pb-24">
      <Helmet>
        <title>Kimler İçin Oparasyon Kuruyoruz? | Russia Market Entry</title>
        <meta name="description" content="Tekstil markaları, üreticiler ve e-ticaret girişimcileri için hazırlanan özel Rusya e-ticaret pazarına giriş stratejilerini inceleyin." />
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-[42px] md:text-[56px] font-extrabold text-primary-500 mb-6 tracking-tight leading-tight">
              Her İş Modeli İçin <br />
              <span className="text-accent-500">Özelleştirilmiş Çözümler</span>
            </h1>
            <p className="text-[18px] text-slate-500 leading-relaxed">
              Rusya pazarındaki potansiyel her sektöre farklı fırsatlar sunar. Markalı ürününüz olsun veya olmasın, sizin operasyon modelinize en uygun entegre yapıyı kuruyoruz.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Tekstil Markaları */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 border-t-4 border-primary-500 shadow-sm flex flex-col"
          >
            <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-500 mb-6">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h3 className="text-[24px] font-extrabold text-primary-500 mb-4">Tekstil Markaları İçin</h3>
            <p className="text-slate-500 mb-8 flex-grow">
              Türk tekstil markaları için Rusya en büyük büyüme fırsatıdır. Ancak başarı sadece ürün göndermekle değil; uçtan uca yönetilen bir operasyonla mümkündür.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                <span className="text-[14px] font-medium text-slate-700">Pazaryeri (WB, Lamoda) hesap kurulumu</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                <span className="text-[14px] font-medium text-slate-700">Ürün listeleme ve içerik optimizasyonu</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                <span className="text-[14px] font-medium text-slate-700">Marka konumlandırma ve reklam</span>
              </div>
            </div>
            <Link to="/iletisim" className="mt-auto block text-center w-full bg-slate-100 hover:bg-primary-500 hover:text-white transition-colors text-primary-500 font-bold py-3 rounded-full text-[14px]">
              Markanızı Konumlandırın
            </Link>
          </motion.div>

          {/* Üreticiler İçin */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-8 border-t-4 border-accent-500 shadow-sm flex flex-col"
          >
            <div className="w-16 h-16 bg-accent-50 rounded-2xl flex items-center justify-center text-accent-500 mb-6">
              <Factory className="w-8 h-8" />
            </div>
            <h3 className="text-[24px] font-extrabold text-primary-500 mb-4">Üreticiler İçin</h3>
            <p className="text-slate-500 mb-8 flex-grow">
              Sadece B2B ihracatla yetinmeyin. Konsinye model ile üretim gücünüzü doğrudan Rusya'daki son kullanıcıya ulaştırarak yüksek kârlılık elde edin.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                <span className="text-[14px] font-medium text-slate-700">İhracat yerine doğrudan B2C satış imkânı</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                <span className="text-[14px] font-medium text-slate-700">Marka olmadan da ürün satış fırsatı</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                <span className="text-[14px] font-medium text-slate-700">Esnek ödeme ve lojistik (Risk minimize)</span>
              </div>
            </div>
            <Link to="/iletisim" className="mt-auto block text-center w-full bg-slate-100 hover:bg-accent-500 hover:text-white transition-colors text-accent-500 font-bold py-3 rounded-full text-[14px]">
              Üretiminizi Satışa Dönüştürün
            </Link>
          </motion.div>

          {/* Girişimciler İçin */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 border-t-4 border-[#005BFF] shadow-sm flex flex-col"
          >
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[#005BFF] mb-6">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-[24px] font-extrabold text-primary-500 mb-4">E-Ticaret Girişimcileri</h3>
            <p className="text-slate-500 mb-8 flex-grow">
              Sıfırdan e-ticaret kurmak karmaşıktır. Size doğru ürün seçimi, pazar yeri ve Insales entegrasyonu ile 'Anahtar Teslim' bir operasyon tasarlıyoruz.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                <span className="text-[14px] font-medium text-slate-700">Doğru ürün, doğru lokasyon kurgusu</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                <span className="text-[14px] font-medium text-slate-700">Tek panelden sipariş ve stok yönetimi (Insales)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                <span className="text-[14px] font-medium text-slate-700">Manuel operasyonlar yerine otomatik büyüme</span>
              </div>
            </div>
            <Link to="/iletisim" className="mt-auto block text-center w-full bg-slate-100 hover:bg-[#005BFF] hover:text-white transition-colors text-[#005BFF] font-bold py-3 rounded-full text-[14px]">
              Sıfırdan Operasyon Kurun
            </Link>
          </motion.div>

        </div>
        
        {/* Big CTA summary */}
        <div className="mt-20 bg-primary-500 rounded-3xl p-10 md:p-14 text-center">
          <h2 className="text-[32px] md:text-[40px] font-extrabold text-white mb-6">İş modeliniz hazır mı?</h2>
          <p className="text-primary-100 max-w-2xl mx-auto mb-10 text-[18px]">
            Hangi kategoride olursanız olun, size en uygun büyüme planını oluşturmak için bir ücretsiz görüşme planlayın.
          </p>
          <Link
            to="/iletisim"
            className="inline-flex items-center gap-3 bg-accent-500 hover:bg-accent-600 transition-colors text-white px-10 py-5 rounded-full font-bold text-[16px] shadow-lg transform hover:-translate-y-1"
          >
            Ücretsiz Görüşme Al <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </main>
  );
}
