import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { TrendingUp, Globe2, Truck, ShieldCheck, ArrowRight, BarChart3, Users, PackageOpen, Target } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function WhyRussiaDetail() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <main className="bg-slate-50 min-h-screen pt-12 pb-24">
      <Helmet>
        <title>Neden Rusya? Pazar Detayları | Russia Market Entry</title>
        <meta name="description" content="Rusya e-ticaret pazarının hacmi, lojistik gücü, Türk markalarına olan yüksek talep ve rekabet avantajları hakkında kapsamlı analiz." />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-2 bg-primary-100 text-primary-600 text-[13px] font-bold rounded-full mb-6 uppercase tracking-wider">
              Detaylı Pazar Analizi
            </div>
            <h1 className="text-[42px] md:text-[56px] font-extrabold text-primary-500 mb-6 tracking-tight leading-tight">
              Neden Rusya Pazarı?
            </h1>
            <p className="text-[18px] text-slate-500 leading-relaxed">
              Küresel ticarette değişen dengeler ve e-ticaretin yeni kuralları ışığında, Rusya pazarının Türk markaları ve üreticileri için neden en stratejik büyüme alanı olduğunu keşfedin.
            </p>
          </motion.div>
        </div>

        <div className="space-y-16">
          
          {/* Hacim */}
          <motion.div
            id="hacim"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm scroll-mt-24"
          >
            <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-500 mb-8">
              <TrendingUp className="w-8 h-8" />
            </div>
            <h2 className="text-[32px] font-bold text-primary-500 mb-6">Devasa Pazar Hacmi ve Hızlı Büyüme</h2>
            <div className="prose prose-slate prose-lg max-w-none text-slate-600">
              <p>
                Rusya, 140 milyonu aşan devasa nüfusu ile sadece bölgesinin değil, dünyanın en büyük tüketici pazarlarından biridir. İnternet penetrasyonunun %85'i aştığı ülkede, <strong>100 milyondan fazla online alışveriş yapan kullanıcı</strong> bulunuyor.
              </p>
              <p>
                Pandemi ve sonrasındaki süreçte online alışveriş alışkanlığı katlanarak büyüdü ve bugün e-ticaret pazarının hacmi <strong>100 milyar doların üzerine</strong> çıktı. Özellikle Wildberries, Ozon ve Lamoda gibi dev pazaryerlerinin ülkenin en ücra bölgelerine kadar genişleyen kapsama alanları, günlük sipariş adetlerini milyonlar mertebesine taşımıştır.
              </p>
              <ul>
                <li>Yıllık bazda %30-%40 e-ticaret büyüme potansiyeli</li>
                <li>Günlük ortalama milyonlarca paket sevkiyatı</li>
                <li>Nakit yerine, dijital ödeme sistemlerinin kullanımının rekor seviyede olması</li>
              </ul>
            </div>
          </motion.div>

          {/* Talep */}
          <motion.div
            id="talep"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm scroll-mt-24"
          >
            <div className="w-16 h-16 bg-accent-50 rounded-2xl flex items-center justify-center text-accent-500 mb-8">
              <Globe2 className="w-8 h-8" />
            </div>
            <h2 className="text-[32px] font-bold text-primary-500 mb-6">Türk Markalarına Güçlü Talep</h2>
            <div className="prose prose-slate prose-lg max-w-none text-slate-600">
              <p>
                Global devlerin ve pek çok Avrupalı markanın pazardan çekilmesi, doğan devasa boşluğun doldurulması ihtiyacını yarattı. Çin ürünlerinin yoğunluğu olsa da, Rus tüketicisinde kalite, dikiş kalıpları ve tasarım uyumu açısından <strong className="text-primary-500">“Made in Türkiye”</strong> kavramı her zaman premium bir algıya sahiptir.
              </p>
              <p>
                Asya ürünlerine kıyasla Türk mallarının standartlarının yüksek olması ve Avrupa ekolüne yakın tarzı, tüketicinin tercihlerinde ilk sıralarda yer alır. Tekstil, kozmetik, ev elektroniği, ev yaşam gibi birçok kategoride Türk markalarının ciddi bir kredibilitesi vardır.
              </p>
              <ul>
                <li>Kalite/Fiyat ekseninde Türkiye'nin benzersiz avantajı</li>
                <li>Hızlı moda (Fast-fashion) ve tasarım yeteneğinin yüksek olması</li>
                <li>Zaten yıllardır Bavul Ticareti (B2B) üzerinden aşina olunan Türk markası algısı</li>
              </ul>
            </div>
          </motion.div>

          {/* Lojistik */}
          <motion.div
            id="lojistik"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm scroll-mt-24"
          >
            <div className="w-16 h-16 bg-[#005BFF]/10 rounded-2xl flex items-center justify-center text-[#005BFF] mb-8">
              <Truck className="w-8 h-8" />
            </div>
            <h2 className="text-[32px] font-bold text-primary-500 mb-6">Gelişmiş Lojistik ve Teslimat Altyapısı</h2>
            <div className="prose prose-slate prose-lg max-w-none text-slate-600">
              <p>
                Rusya gibi dünyanın en geniş coğrafyasına sahip bir ülkede e-ticaretin başarısı lojistik ekosistemine bağlıdır. Rusya, bu sorunu <strong className="text-slate-800">PVZ (Sipariş Teslim Noktaları)</strong> modeliyle çözmüştür.
              </p>
              <p>
                Bugün ülke genelinde <strong>80.000'den fazla</strong> teslimat noktası bulunuyor. Tüketici sipariş veriyor, kargosunu kendisine en yakın PVZ noktasına söylüyor ve bu noktalardaki <strong>deneme kabinlerinde</strong> ürünleri deneyip sadece uyduğundan veya beğendiğinden emin olduğu ürünü alıyor.
              </p>
              <ul>
                <li>"Dene ve Al" sistemi sayesinde tüketicinin sepeti büyütme cesareti</li>
                <li>Kargocuyu evde bekleme zorunluluğunun ortadan kalkması</li>
                <li>Çok yüksek e-ticaret dönüşüm (Conversion) oranları</li>
              </ul>
            </div>
          </motion.div>

          {/* Rekabet */}
          <motion.div
            id="rekabet"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm scroll-mt-24"
          >
            <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-primary-500 mb-8">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h2 className="text-[32px] font-bold text-primary-500 mb-6">Rekabet Avantajı ve Karlılık</h2>
            <div className="prose prose-slate prose-lg max-w-none text-slate-600">
              <p>
                Bugün Avrupa (Amazon, Zalando vb.) pazarında yeni bir marka olarak rekabet etmek oldukça maliyetli bir reklam bütçesi ve düşük karlılık sınırlarında savaşmayı gerektirir. Pazar doymuş ve oyuncular bellidir.
              </p>
              <p>
                Öte yandan Rusya pazarında doğru kurulmuş bir <strong className="text-primary-500">Konsinye modeli, şeffaf vergi yönetimi ve doğru pazarlama planı</strong> ile yüksek hacimli satışlara ulaşıp, döviz cinsinden güçlü kâr marjları yakalamak çok daha kolaydır.
              </p>
              <ul>
                <li>Avrupa'nın %5-%10 büyümesine karşılık Rusya pazarının hızlı dijitalleşmesi</li>
                <li>Etkili sıralama algoritmaları sayesinde markanızın devler içinde kaybolmaması</li>
                <li>Orijinal ve lisanslı Türk üretim algısının doğrudan satış kapaması getirmesi</li>
              </ul>
            </div>
          </motion.div>

        </div>

        {/* CTA */}
        <div className="mt-16 bg-primary-500 rounded-3xl p-10 md:p-14 text-center">
           <h2 className="text-[32px] font-extrabold text-white mb-6">Pazara Hemen Giriş Yapın</h2>
           <p className="text-primary-100 max-w-2xl mx-auto mb-10 text-[18px]">
             Risksiz konsinye operasyon modelimiz ile sizi bu devasa pazara bağlayalım. Stratejinizi birlikte kurgulayalım.
           </p>
           <Link
             to="/iletisim"
             className="inline-flex items-center gap-3 bg-accent-500 hover:bg-accent-600 transition-colors text-white px-10 py-4 rounded-full font-bold text-[16px] shadow-lg transform hover:-translate-y-1"
           >
             Ücretsiz Strateji Görüşmesi Planla <ArrowRight className="w-5 h-5" />
           </Link>
        </div>

      </div>
    </main>
  );
}
