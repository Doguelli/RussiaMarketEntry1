import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import { 
  ArrowLeft,
  CheckCircle2,
  ArrowRight,
  Settings,
  ShoppingCart,
  Truck,
  MonitorSmartphone,
  TrendingUp,
  Building2
} from "lucide-react";

const serviceDetails: Record<string, any> = {
  "operasyon-kurulumu": {
    icon: Settings,
    title: "Operasyon Kurulumu",
    metaTitle: "Rusya E-Ticaret Operasyon Kurulumu | Şirket ve Altyapı",
    metaDescription: "Rusya pazarına giriş için vergi, şirket, gümrük, pazar yeri mağaza açılışlarını içeren uçtan uca operasyon kurulum hizmetimiz.",
    description: "Rusya e-ticaret pazarına güçlü ve yasal bir giriş yapmak için gereken tüm altyapıyı sizin adınıza kuruyoruz. Doğru şirket yapısı ve sağlam bir temel olmadan pazar yerlerinde kalıcı başarı sağlamak mümkün değildir.",
    forWhom: "Rusya pazarına ilk defa girecek, markasını ve satışlarını ölçeklemek isteyen üretici ve perakendeciler.",
    whatWeDo: [
      "Rusya Federasyonu'nda şirketin yasal olarak kurulması veya Ozon Global gibi cross-border çözümlerinin hazırlanması.",
      "Gerekli GOST ve EAC sertifikasyon süreçlerinin yönetimi.",
      "Wildberries, Ozon, Lamoda vb. platformlarda mağaza açılışı.",
      "Rusya bankalarında ruble hesabının açılması ve para transfer altyapısının kurulması.",
      "Marka tescili ve fikri mülkiyet haklarının korunması."
    ],
    faqs: [
      { q: "Şirket kurmak ne kadar sürer?", a: "Evrakların tamamlanmasının ardından ortalama 2-3 hafta içerisinde şirket kurulumunuz tamamlanmış olur." },
      { q: "Sertifikasyon zorunlu mu?", a: "Evet, tekstil, elektronik ve kozmetik gibi birçok kategoride gümrüklü giriş ve pazar yeri satışları için EAC sertifikası zorunludur." }
    ]
  },
  "pazaryeri-yonetimi": {
    icon: ShoppingCart,
    title: "Wildberries & Lamoda Satış Yönetimi",
    metaTitle: "Wildberries ve Lamoda Satış Danışmanlığı | Rusya Pazarı",
    metaDescription: "Wildberries, Ozon ve Lamoda mağazalarınız için uçtan uca pazaryeri satış yönetimi, stok planlama ve reklam optimizasyonu.",
    description: "Açılan mağazalarınızın profesyonel yönetimini devralıyoruz. Sizin adınıza ürün listeleme, içerik optimizasyonu, kampanya yönetimi ve stok planlaması yaparak satışlarınızı maksimize ediyoruz.",
    forWhom: "Rusya pazarında halihazırda mağazası olan veya yeni başlayan ve satışlarını uzman bir ekibe devretmek isteyen markalar.",
    whatWeDo: [
      "SEO uyumlu ve Rusça tüketici alışkanlıklarına göre ürün açıklamalarının yazılması.",
      "Professional fotoğraf çekimi yönlendirmeleri ve infografik tasarımı.",
      "Rakip analizi ve dinamik fiyatlama kurguları.",
      "Pazaryeri içi (Internal) reklam kampanyalarının (CPA, CPC) kurgulanması ve bütçe yönetimi.",
      "Günlük / haftalık / aylık satış-stok-kârlılık analiz raporlarının oluşturulması."
    ],
    faqs: [
      { q: "Satışlardan komisyon alıyor musunuz?", a: "Çalışma modelimize göre sabit hizmet bedeli + performansa dayalı (success fee) bir model uyguluyoruz." },
      { q: "Hesabın kontrolü kimde oluyor?", a: "Siz her zaman mağazanın tam sahibi olursunuz. Bize sadece 'yönetici' yetkisi eklersiniz, dilediğiniz an raporları şeffafça görebilirsiniz." }
    ]
  },
  "lojistik-ve-depo": {
    icon: Truck,
    title: "Lojistik ve Depo Yönetimi",
    metaTitle: "Rusya E-Ticaret Lojistik, Depo ve Fulfillment Çözümleri",
    metaDescription: "Türkiye'den Rusya'ya kargo, gümrük, Çestniy Znak barkodlama ve Wildberries, Ozon depolarına sevk (FBO/FBS) yönetimi.",
    description: "E-ticarette başarının sırrı hız, maliyet avantajı ve kesintisiz stoktur. Türkiye deposundan Rusya son tüketiciye veya pazaryeri depolarına kadar giden yolculuğu yönetiyoruz.",
    forWhom: "Rusya'daki müşterilere hızlı teslimat yapmak ve karmaşık gümrük süreçlerinden etkilenmemek isteyen ihracatçılar.",
    whatWeDo: [
      "Türkiye'den Rusya deposuna DDP (Gümrük Vergisi Ödenmiş) sevkiyat organizasyonu.",
      "Rusya'daki depomuzda fulfillment, paketleme ve etiketleme hizmetleri.",
      "Çestniy Znak (Честный ЗНАК) zorunlu barkodlama süreçlerinin yönetimi.",
      "Wildberries (FBO) ve Ozon (FBO) depolarına planlı ürün sevkleri ve stok beslemesi.",
      "İade lojistiği, hasar kontrolü ve yeniden paketleme operasyonları."
    ],
    faqs: [
      { q: "Hangi lojistik modelini öneriyorsunuz?", a: "Rusya içinde Wildberries ve Ozon özelinde FBO (pazar yerinin deposunu kullanma) modeli, görünürlük ve hız açısından her zaman en karlısıdır." },
      { q: "Çestniy Znak barkodu nedir?", a: "Rusya devletinin tekstil, ayakkabı başta olmak üzere birçok üründe uyguladığı zorunlu, izlenebilir dijital barkodlama (QR kod) sistemidir." }
    ]
  },
  "sistem-ve-entegrasyon": {
    icon: MonitorSmartphone,
    title: "Insales Entegrasyonu",
    metaTitle: "InSales E-Ticaret Entegrasyonu | Rusya Pazarı",
    metaDescription: "Tüm operasyonunuzu tek panelden yönetin. Insales entegrasyonu ile stok, sipariş ve kargo süreçlerinde otomasyona geçin.",
    description: "Rusya e-ticaret pazarındaki tüm kanallarınızı (kendi siteniz, Wildberries, Ozon, Yandex vb.) tek bir arayüzde birleştiren InSales altyapısını kuruyoruz.",
    forWhom: "Birden fazla kanalda satış yapan ve sipariş karmaşasını, stok tutarsızlıklarını önlemek isteyen şirketler.",
    whatWeDo: [
      "Insales hesabınızın açılması ve temel konfigürasyonların yapılması.",
      "Farklı pazaryerlerine (Ozon, WB, Yandex, Lamoda) API ile entegrasyonların sağlanması.",
      "Stok bilgisinin tüm kanallarda anlık güncellenmesi (Senkronizasyon).",
      "Sipariş ve kargo etiketi yazdırma süreçlerinin otomatikleştirilmesi.",
      "İhtiyaca göre Türkiye'deki ERP (Netsis, Logo, Mikro vb.) sistemlerinizle köprü kurulması."
    ],
    faqs: [
      { q: "Insales kullanmak zorunlu mu?", a: "Zorunlu değil, ancak manuel yükleri azaltıp müşteri memnuniyetini yüksek tutmak ve birden fazla kanalda satmak istiyorsanız en entegre çözümdür." },
      { q: "Kendi e-ticaret sitemiz için kullanılabilir mi?", a: "Evet, InSales ile Rusya'da yerel ödeme ve kargo yöntemleri (CDEK vb.) ile entegre, hazır bir e-ticaret front-end sitesi de kurabiliyoruz." }
    ]
  },
  "marka-buyutme": {
    icon: TrendingUp,
    title: "Marka Büyütme ve Performans",
    metaTitle: "Rusya E-Ticaret Pazarlama & Marka Büyütme",
    metaDescription: "Rakip analizinden pazar payı genişletmeye kadar detaylı veri odaklı pazarlama stratejisi ve performans yönetimi.",
    description: "Mağazanızı sadece açık tutmak yetmez. Analitik araçlar kullanarak pazar içindeki konumunuzu değerlendiriyor, organik sıralamalarda (SEO) ve ücretli reklamlarda öne çıkararak satış payınızı artırıyoruz.",
    forWhom: "Belli bir satış ivmesi yakalamış ama bunu 2x, 5x, 10x yapmak isteyen hırslı e-ticaret markaları.",
    whatWeDo: [
      "MPStats ve benzeri pazar analiz araçlarıyla kategori, rakip fiyat ve arama hacmi analizleri.",
      "Stratejik ürün geliştirme: Pazarda arz eksiği olan (talebi yüksek) ürün tiplerinin tespiti.",
      "Organik sıralamayı etkileyen kelimelerin (SEO) revize edilerek ürünlerin 1. sayfaya taşınması.",
      "Trafik hunisinin (Görüntüleme -> Sepete Ekleme -> Satın Alma) dönüşüm optimizasyonları.",
      "Dış reklam (VKontakte, Yandex Ads, Telegram influencer reklamları) kurguları."
    ],
    faqs: [
      { q: "Reklam yatırımları için ne kadar bütçe ayrılmalı?", a: "Amaca göre değişir. İlk 3 ay lansman bütçesi olarak cironun %10-15'i planlanırken, oturan markalarda bu %5-7 seviyelerinde sürdürülebilir." },
      { q: "Hangi reklam aracı daha iyi sonuç veriyor?", a: "Platform (WB/Ozon) içi arama sonuç reklamları dönüşüm olarak en etkilisi iken, marka bilinirliği için Telegram hedeflenmiş kanalları çok başarılıdır." }
    ]
  },
  "vergi-ve-finans": {
    icon: Building2,
    title: "Vergi ve Finansal Yapı",
    metaTitle: "Rusya E-ticaret Finans ve Vergi Yönetimi",
    metaDescription: "Sınır ötesi ticarette ruble tahsilatı, vergi planlaması ve Türkiye'ye para transfer süreçlerinde hukuki altyapı danışmanlığı.",
    description: "Sınırın ötesindeki paranın güvenli ve en az vergi yüküyle ülkeye geri getirilmesi, kârlı bir operasyonun anahtarıdır. Rusya'daki muhasebe ve Türkiye ile fon akışı süreçlerini tasarlıyoruz.",
    forWhom: "Risk almadan güvenli şekilde yurtdışından gelir elde etmek isteyen ve çift vergilendirmeden kaçınan kurumsal yapılar.",
    whatWeDo: [
      "Rusya içindeki en avantajlı vergi modelinin (OSN, USN) şirket yapısına göre seçimi.",
      "Kar marjlarının (Gümrük + Lojistik + Pazaryeri Komisyonu + Pazarlama) net şekilde hesaplanması.",
      "E-ticaret muhasebesi hizmetleri (Z raporları, iade faturalandırmaları).",
      "Rusya'daki banka hesabında biriken fonların (Ruble, Yuan vb.) uluslararası yasal mevzuatlara uygun şeklide Türkiye'ye aktarımı.",
      "Çift vergilendirmeyi önleme anlaşmalarına göre kurumsal vergi planlaması."
    ],
    faqs: [
      { q: "Rusya pazar yerlerinin komisyonları ne kadar?", a: "Kategoriye göre değişmekle birlikte genelde %10 ile %25 arasında değişen hizmet ve lojistik komisyonları (FBO durumunda) yansır." },
      { q: "Paramı güvenle Türkiye'ye getirebilir miyim?", a: "Evet, aktif olarak kullanılan Ruble ve Yuan para birimi üzerinden işlem yapan bankalar aracılığıyla şirketinize ve yasal ihracatınıza bağlı olarak fonlama ve geri ödeme güvenle yapılmaktadır." }
    ]
  }
};

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const service = id ? serviceDetails[id] : null;

  if (!service) {
    return <Navigate to="/hizmetler" replace />;
  }

  const Icon = service.icon;

  return (
    <main className="bg-slate-50 min-h-screen pt-12 pb-24">
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
      </Helmet>

      {/* Hero Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link to="/hizmetler" className="inline-flex items-center gap-2 text-slate-500 hover:text-accent-500 font-medium text-[14px] mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Hizmetlere Dön
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[32px] p-8 md:p-12 border border-slate-100 shadow-sm relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full blur-[80px] opacity-60 -mr-20 -mt-20 pointer-events-none" />
          
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-primary-50 text-primary-500 mb-8">
             <Icon className="w-8 h-8" />
          </div>
          <h1 className="text-[36px] md:text-[48px] font-extrabold text-primary-500 mb-6 tracking-tight leading-tight">
            {service.title}
          </h1>
          <p className="text-[18px] md:text-[20px] text-slate-500 leading-relaxed font-medium">
            {service.description}
          </p>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="md:col-span-2 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm"
            >
              <h2 className="text-[24px] font-bold text-primary-500 mb-6 flex items-center gap-3">
                Bu Süreçte Neler Yapıyoruz?
              </h2>
              <ul className="space-y-5">
                {service.whatWeDo.map((item: string, index: number) => (
                  <li key={index} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 shrink-0 text-accent-500 mt-0.5" />
                    <span className="text-slate-600 leading-relaxed text-[16px]">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm"
            >
              <h2 className="text-[24px] font-bold text-primary-500 mb-6">Sıkça Sorulan Sorular</h2>
              <div className="space-y-6">
                {service.faqs.map((faq: { q: string, a: string }, index: number) => (
                  <div key={index} className="border-b border-slate-100 last:border-0 pb-6 last:pb-0">
                    <h3 className="font-bold text-primary-500 text-[18px] mb-2">{faq.q}</h3>
                    <p className="text-slate-500 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="md:col-span-1 space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-primary-500 rounded-3xl p-8 border border-primary-400 text-white shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-400 rounded-full blur-[40px] opacity-50" />
              <h3 className="text-[20px] font-bold mb-4 relative z-10">Kimler İçin Uygun?</h3>
              <p className="text-primary-100 leading-relaxed text-[15px] relative z-10 leading-relaxed">
                {service.forWhom}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm text-center"
            >
              <h3 className="text-[20px] font-bold text-primary-500 mb-4 tracking-tight">Hemen Aksiyon Alın</h3>
              <p className="text-slate-500 text-[14px] mb-6 leading-relaxed">
                Bu hizmet özelinde markanız için nasıl bir yapı kurabileceğimizi ücretsiz öğrenin.
              </p>
              <Link to="/iletisim" className="bg-accent-500 hover:bg-accent-600 transition-colors text-white font-bold py-3.5 px-6 rounded-xl w-full flex items-center justify-center gap-2 shadow-sm text-[15px]">
                İletişime Geçin <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
