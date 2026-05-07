import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { ShoppingBag, TrendingUp, Globe2, Truck, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function RussiaMarket() {
  return (
    <main className="bg-slate-50 min-h-screen pt-12 pb-24">
      <Helmet>
        <title>Rusya E-Ticaret Pazarı | Ozon ve Wildberries Satış Stratejileri</title>
        <meta name="description" content="Wildberries, Ozon ve Lamoda ekosistemleri hakkında bilgi edinin. Neden Rusya e-ticaret pazarına girmelisiniz?" />
        <meta name="keywords" content="Rusya e-ticaret hacmi, Wildberries satış, Ozon satış nasıl yapılır, Lamoda Türkiye, Rusya pazar analizi" />
        <link rel="canonical" href="https://russiamarketentry.com/rusya-pazari" />
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-2 bg-primary-100 text-primary-600 text-[13px] font-bold rounded-full mb-6 uppercase tracking-wider">
              Neden Rusya?
            </div>
            <h1 className="text-[42px] md:text-[56px] font-extrabold text-primary-500 mb-6 tracking-tight leading-tight">
              Türk Markaları İçin <br /> <span className="text-accent-500">Yeni Büyüme Rotası</span>
            </h1>
            <p className="text-[18px] text-slate-500 leading-relaxed">
              Dünya genelinde ticaret dengeleri değişirken, Avrupa'daki doygunluk ve Körfez'deki rekabet, markaları yeni, büyük ve daha sürdürülebilir pazarlara yönlendiriyor. Rusya, stratejik bir büyüme pazarı olarak öne çıkıyor.
            </p>
          </motion.div>
        </div>

        {/* Neden Rusya Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {[
            {
              id: "hacim",
              icon: TrendingUp,
              title: "Devasa Pazar Hacmi",
              desc: "140 milyonu aşan nüfus, 100+ milyon online alışveriş yapan kullanıcı ve 100 milyar doların üzerinde e-ticaret hacmi."
            },
            {
              id: "talep",
              icon: Globe2,
              title: "Güçlü Talep",
              desc: "Rus tüketicisi için Türk ürünleri (özellikle tekstil), kalite ve fiyat dengesi açısından “Made in Türkiye” algısıyla en güçlü alternatiftir."
            },
            {
              id: "lojistik",
              icon: Truck,
              title: "Gelişmiş Lojistik",
              desc: "80.000+ teslimat noktası (PVZ) ve 'Dene ve al' alışkanlığının yaygınlığı ile online alışveriş güveni ve dönüşüm oranı çok yüksek."
            },
            {
              id: "rekabet",
              icon: ShieldCheck,
              title: "Rekabet Avantajı",
              desc: "Avrupa'ya kıyasla daha az doygun rekabet, doğru fiyatlandırma ile güçlü kâr marjı ve ölçeklenebilir satış modeli."
            }
          ].map((item, i) => (
            <Link to={`/neden-rusya-detay#${item.id}`} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:border-primary-300 transition-all cursor-pointer flex gap-6 h-full group"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-primary-50 group-hover:bg-primary-500 group-hover:text-white transition-colors rounded-2xl flex items-center justify-center text-primary-500">
                    <item.icon className="w-7 h-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-[20px] font-bold text-primary-500 mb-3 group-hover:text-accent-500 transition-colors flex items-center gap-2">
                    {item.title} 
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-[15px]">{item.desc}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Pazar Karşılaştırması Table */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 md:p-12 mb-24 overflow-x-auto">
          <h2 className="text-[32px] font-extrabold text-primary-500 mb-8 tracking-tight text-center">Avrupa vs Rusya Pazarı</h2>
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b-2 border-primary-500">
                <th className="py-4 px-6 text-primary-500 font-bold uppercase tracking-wider text-[14px]">Kriter</th>
                <th className="py-4 px-6 text-slate-500 font-bold uppercase tracking-wider text-[14px]">Avrupa Pazarı</th>
                <th className="py-4 px-6 text-accent-500 font-bold uppercase tracking-wider text-[14px]">Rusya Pazarı</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { kriter: "Rekabet Seviyesi", eur: "Doygun / Çok Yüksek", rus: "Gelişmekte Olan / Yüksek Fırsat" },
                { kriter: "Türk Malı Algısı", eur: "Sıradan", rus: "Premium / Güvenilir" },
                { kriter: "E-Ticaret Büyüme Hızı", eur: "%5 - %10", rus: "%30 - %40" },
                { kriter: "Lojistik Süre", eur: "15-20 Gün", rus: "7-12 Gün" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="py-5 px-6 font-bold text-primary-500">{row.kriter}</td>
                  <td className="py-5 px-6 text-slate-500">{row.eur}</td>
                  <td className="py-5 px-6 font-semibold text-accent-500 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent-500" /> {row.rus}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pazaryeri Ekosistemi */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[36px] font-extrabold text-primary-500 mb-6 tracking-tight">Rusya Pazaryeri Ekosistemi</h2>
          <p className="text-slate-500 text-[18px]">
            Rusya'da başarı, her platformda aynı stratejiyi uygulamak değil; pazaryerinin dinamiklerini doğru analiz etmekten geçer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Wildberries */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 border-t-4 border-[#cb11ab] shadow-sm relative overflow-hidden group"
          >
            <h3 className="text-[28px] font-black text-[#cb11ab] tracking-tight lowercase mb-6">wildberries</h3>
            <div className="space-y-4 mb-8">
              <div>
                <strong className="text-primary-500 block mb-1">Pazar Hacmi:</strong>
                <span className="text-slate-500 text-[15px]">Aylık 300+ milyon ziyaret. Moda ve giyimde açık ara lider.</span>
              </div>
              <div>
                <strong className="text-primary-500 block mb-1">Marka Stratejisi:</strong>
                <span className="text-slate-500 text-[15px]">Hacim ve algoritma merkezidir. Yüksek satış adetlerine ulaşılır.</span>
              </div>
              <div>
                <strong className="text-primary-500 block mb-1">Odak:</strong>
                <span className="text-slate-500 text-[15px]">Hacim, fiyat ve geniş kitlelere erişim.</span>
              </div>
            </div>
          </motion.div>

          {/* Lamoda */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-8 border-t-4 border-black shadow-sm"
          >
            <h3 className="text-[28px] font-black text-black tracking-widest uppercase mb-6">LAMODA</h3>
            <div className="space-y-4 mb-8">
              <div>
                <strong className="text-primary-500 block mb-1">Pazar Hacmi:</strong>
                <span className="text-slate-500 text-[15px]">18-20 milyon ziyaret, ancak sepet ortalaması çok yüksek.</span>
              </div>
              <div>
                <strong className="text-primary-500 block mb-1">Marka Stratejisi:</strong>
                <span className="text-slate-500 text-[15px]">Prestij kanalıdır. Müşterisi seçici ve kalite odaklıdır.</span>
              </div>
              <div>
                <strong className="text-primary-500 block mb-1">Odak:</strong>
                <span className="text-slate-500 text-[15px]">Saf moda, yüksek standart ve marka değeri.</span>
              </div>
            </div>
          </motion.div>

          {/* Ozon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 border-t-4 border-[#005BFF] shadow-sm"
          >
            <h3 className="text-[28px] font-black text-[#005BFF] tracking-tighter mb-6">OZON</h3>
            <div className="space-y-4 mb-8">
              <div>
                <strong className="text-primary-500 block mb-1">Pazar Hacmi:</strong>
                <span className="text-slate-500 text-[15px]">Aylık 300+ milyon ziyaret. "Amazon modeli" ile çok kategorili.</span>
              </div>
              <div>
                <strong className="text-primary-500 block mb-1">Marka Stratejisi:</strong>
                <span className="text-slate-500 text-[15px]">Erişim ve ölçekleme platformu. Güçlü teknolojik altyapı.</span>
              </div>
              <div>
                <strong className="text-primary-500 block mb-1">Odak:</strong>
                <span className="text-slate-500 text-[15px]">Erişim, teknoloji ve genç/inovatif kullanıcı kitlesi.</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Strategic Approach */}
        <div className="bg-primary-500 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-accent-500 opacity-[0.03] pattern-grid" />
          <h2 className="text-[32px] md:text-[40px] font-extrabold mb-6">Stratejik Yaklaşımımız</h2>
          <p className="text-[18px] text-primary-100 max-w-3xl mx-auto mb-10 leading-relaxed">
            Bizim operasyon modelimizde tek bir platforma bağlı kalmıyoruz: <br className="hidden md:block" />
            <strong className="text-white">Wildberries</strong> ile güçlü satış hacmi oluşturuyor, <strong className="text-white">Lamoda</strong> ile marka değerinizi yükseltiyor, <strong className="text-white">Ozon</strong> ile erişiminizi zirveye çıkarıyoruz.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/iletisim"
              className="bg-accent-500 hover:bg-accent-600 transition-colors text-white px-8 py-4 rounded-full font-bold text-[16px] inline-flex items-center gap-2"
            >
              Operasyonunuzu Kuralım <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
