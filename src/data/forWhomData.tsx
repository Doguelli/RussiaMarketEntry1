import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Droplets, ShoppingBag, Factory, Users } from "lucide-react";

export interface ForWhomContent {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: ReactNode;
  color: string;
  bgColor: string;
  lightColor: string;
  content: ReactNode;
  conclusionTitle?: string;
  conclusionDesc?: string;
}

export const forWhomData: ForWhomContent[] = [
  {
    id: "tekstil-markalari",
    slug: "tekstil-markalari",
    title: "Tekstil Markaları İçin Rusya Pazarı Çözümü",
    shortTitle: "Tekstil Markaları",
    description: "Türk tekstil markaları için Rusya en büyük büyüme fırsatıdır. Ancak başarı sadece ürün göndermekle değil; uçtan uca yönetilen bir operasyonla mümkündür.",
    icon: <ShoppingBag className="w-4 h-4" />,
    color: "text-primary-500",
    bgColor: "bg-primary-500",
    lightColor: "bg-primary-50",
    content: (
      <>
        <p className="text-[18px] leading-relaxed text-slate-600 mb-6 max-w-4xl">
          Rusya tekstil ve hazır giyim pazarı, yüksek hacmi ve Türk markalarına olan güçlü ilgisiyle benzersiz bir fırsat sunmaktadır. Kadın giyim, erkek giyim, çocuk giyim ve ev tekstili üreticileri için bu pazar, doğru adımlar atıldığında kârlı bir büyüme motoru olabilir.
        </p>

        <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-2xl mb-12">
          <p className="text-primary-700 font-medium text-[18px]">
            Biz, markanızın hikayesini Rusya'ya taşıyor ve satış operasyonlarınızı uçtan uca profesyonelce yönetiyoruz.
          </p>
          <div className="mt-4">
            <Link to="/iletisim" className="inline-flex items-center gap-2 font-bold text-accent-500 hover:text-accent-600">
              👉 Başvuru Yapın
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-[24px] font-bold text-primary-500 mb-6">Neler Yapıyoruz?</h3>
            <ul className="space-y-3">
              {[
                "Pazaryeri (WB, Lamoda) hesap kurulumu",
                "Ürün listeleme ve içerik optimizasyonu",
                "Marka konumlandırma ve reklam yönetimi",
                "Fiyatlandırma stratejilerinin belirlenmesi",
                "Lojistik ve FBO/FBS depo yönetimi",
                "İade oranlarının minimize edilmesi"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-600">
                  <span className="w-2 h-2 rounded-full bg-primary-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl">
            <h3 className="text-[24px] font-bold text-primary-500 mb-6">Neden Bizi Seçmelisiniz?</h3>
            <ul className="space-y-3 mb-6">
              {[
                "Sektörel deneyim ve Rusya pazarına hakimiyet",
                "Hızlı entegrasyon ve satışa başlama",
                "Optimum lojistik ve gümrükleme çözümleri",
                "Şeffaf raporlama ve karlılık analizi"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    )
  },
  {
    id: "ureticiler",
    slug: "ureticiler",
    title: "Üreticiler İçin Rusya Pazarı Çözümü",
    shortTitle: "Üreticiler",
    description: "Sadece B2B ihracatla yetinmeyin. Konsinye model ile üretim gücünüzü doğrudan Rusya'daki son kullanıcıya ulaştırarak yüksek kârlılık elde edin.",
    icon: <Factory className="w-4 h-4" />,
    color: "text-accent-500",
    bgColor: "bg-accent-500",
    lightColor: "bg-accent-50",
    content: (
      <>
        <p className="text-[18px] leading-relaxed text-slate-600 mb-6 max-w-4xl">
          Toptan satışa ek olarak, ürettiğiniz ürünleri doğrudan tüketicilere sunmak, kar marjını maksimize etmenin en etkili yoludur. Konsinye model ile riskleri azaltarak marka olmadan da yüksek satış hacimlerine ulaşabilirsiniz.
        </p>

        <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-2xl mb-12">
          <p className="text-primary-700 font-medium text-[18px]">
            Tedarik gücünüzü bizim operasyon deneyimimizle birleştirin, ürünlerinizi doğrudan Rus tüketicilerle buluşturalım.
          </p>
          <div className="mt-4">
            <Link to="/iletisim" className="inline-flex items-center gap-2 font-bold text-accent-500 hover:text-accent-600">
              👉 Başvuru Yapın
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
            <h4 className="text-[20px] font-bold text-primary-500 mb-4">Konsinye Model Nedir?</h4>
            <p className="text-slate-600 text-[14px]">Ürünlerinizi bize gönderirsiniz, biz Rusya'daki depolarda konumlandırır ve satış gerçekleştikçe ödemenizi aktarırız. Bu şekilde toptan satış baskısından kurtulur ve Perakende kârlılığından yararlanırsınız.</p>
          </div>
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
            <h4 className="text-[20px] font-bold text-primary-500 mb-4">Hızlı Geri Dönüş</h4>
            <p className="text-slate-600 text-[14px]">Doğru ürün grupları seçildiğinde, satışlar hızlıca başlar. Wildberries ve Ozon üzerinden milyonlarca kullanıcıya anında erişim sağlanır.</p>
          </div>
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
            <h4 className="text-[20px] font-bold text-primary-500 mb-4">Güvenli Lojistik</h4>
            <p className="text-slate-600 text-[14px]">Gümrükleme, sertifikasyon, Çestniy Znak barkodlama süreçleri ve Rusya içi FBO depo dağıtımlarının tamamını biz üstleniyoruz.</p>
          </div>
        </div>
      </>
    )
  },
  {
    id: "e-ticaret-girisimcileri",
    slug: "e-ticaret-girisimcileri",
    title: "E-Ticaret Girişimcileri İçin Rusya Pazarı Çözümü",
    shortTitle: "E-Ticaret Firmaları",
    description: "Sıfırdan e-ticaret kurmak karmaşıktır. Size doğru ürün seçimi, pazar yeri ve Insales entegrasyonu ile 'Anahtar Teslim' bir operasyon tasarlıyoruz.",
    icon: <Users className="w-4 h-4" />,
    color: "text-[#005BFF]",
    bgColor: "bg-[#005BFF]",
    lightColor: "bg-primary-50",
    content: (
      <>
        <p className="text-[18px] leading-relaxed text-slate-600 mb-6 max-w-4xl">
          E-ticaret vizyonunuzu Rusya pazarıyla birleştirerek yeni bir girişim başlatmak istiyorsanız, doğru altyapı her şeydir. Karmaşık yasal süreçler ve lojistik problemleri ile uğraşmadan, doğrudan büyümeye odaklanacağınız sistemler kuruyoruz.
        </p>

        <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-2xl mb-12">
          <p className="text-primary-700 font-medium text-[18px]">
            Fikrinizi satışa dönüştürecek altyapı bizimle hazır, risk almadan kendi işinize odaklanın.
          </p>
          <div className="mt-4">
            <Link to="/iletisim" className="inline-flex items-center gap-2 font-bold text-accent-500 hover:text-accent-600">
              👉 Başvuru Yapın
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-[24px] font-bold text-primary-500 mb-6">Nasıl Büyüteceğiz?</h3>
            <ul className="space-y-3">
              {[
                "Kârlı ürün araştırması ve portföy oluşturma",
                "Tedarik ve maliyet hesaplaması rehberliği",
                "Insales ve pazar yeri teknik entegrasyonu",
                "Ürün listeleme ve içerik yönetimi",
                "Otomatik sipariş ve stok yönetimi süreçleri",
                "Dijital pazarlama ve görünürlük sağlama"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-600">
                  <span className="w-2 h-2 rounded-full bg-[#005BFF] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl">
            <h3 className="text-[24px] font-bold text-primary-500 mb-6">Girişimcinin Kazanımları</h3>
            <ul className="space-y-3 mb-6">
              {[
                "Sıfırdan sorunsuz e-ticaret altyapısı",
                "Yerel dilde profesyonel destek ihtiyacının kalkması",
                "Yatırım getirisinin (ROI) optimize edilmesi",
                "Kurumsal düzeyde teknik arka plan"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    )
  },
  {
    id: "kozmetik",
    slug: "kozmetik-ureticileri",
    title: "Kozmetik Üreticileri İçin Rusya Pazarı Çözümü",
    shortTitle: "Kozmetik Üreticileri",
    description: "Rusya Kozmetik pazarı yüksek bir hacme sahiptir. Ürün kayıt, mevzuat ve pazaryeri süreçlerinizi uçtan uca yönetiyoruz.",
    icon: <Droplets className="w-4 h-4" />,
    color: "text-[#FF007A]",
    bgColor: "bg-[#FF007A]",
    lightColor: "bg-pink-50",
    content: (
      <>
        <p className="text-[18px] leading-relaxed text-slate-600 mb-6 max-w-4xl">
          Rusya kozmetik ve kişisel bakım pazarı, yüksek tüketim hacmi ve güçlü online satış altyapısı sayesinde Türk üreticileri için önemli bir büyüme fırsatı sunmaktadır.
          Cilt bakım ürünleri, saç bakım ürünleri, makyaj ürünleri, parfüm, doğal kozmetik ve kişisel bakım kategorilerinde faaliyet gösteren üreticiler için Rusya pazarı, markalaşma ve satış hacmi açısından büyük potansiyele sahiptir.
        </p>
        
        <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-2xl mb-12">
          <p className="text-primary-700 font-medium text-[18px]">
            Biz, kozmetik üreticilerinin ürünlerini Rusya pazarında satışa açıyor ve tüm operasyon sürecini uçtan uca yönetiyoruz.
          </p>
          <div className="mt-4">
            <Link to="/iletisim" className="inline-flex items-center gap-2 font-bold text-accent-500 hover:text-accent-600">
              👉 Başvuru Yapın
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-[24px] font-bold text-primary-500 mb-6">Kimler İçin Uygun?</h3>
            <ul className="space-y-3">
              {[
                "Cilt bakım ürünleri üreticileri",
                "Saç bakım ürünleri üreticileri",
                "Makyaj ve renkli kozmetik üreticileri",
                "Parfüm ve deodorant üreticileri",
                "Doğal ve organik kozmetik markaları",
                "Kişisel bakım ürünleri üreticileri",
                "Dermokozmetik üreticileri",
                "SPA ve wellness ürün üreticileri"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-600">
                  <span className="w-2 h-2 rounded-full bg-[#FF007A] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl">
            <h3 className="text-[24px] font-bold text-primary-500 mb-6">Kozmetik Üreticileri İçin Ne Yapıyoruz?</h3>
            <ul className="space-y-3 mb-6">
              {[
                "Rusya pazar analizinin yapılması",
                "Wildberries, Ozon ve diğerlerinde satışa başlama",
                "Ürün kayıt ve mevzuat süreçlerinin planlanması",
                "Barkod ve etiketleme süreçlerinin hazırlanması",
                "Lojistik ve gümrük organizasyonu",
                "Depolama ve fulfillment yönetimi",
                "Ürün listeleme ve içerik optimizasyonu",
                "Reklam ve performans yönetimi",
                "Satış ve kârlılık raporlaması"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-medium text-primary-600 text-[16px]">
              👉 Siz ürün geliştirmeye ve üretime odaklanırsınız, biz satış operasyonunu yönetiriz.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
            <h4 className="text-[20px] font-bold text-primary-500 mb-4">Regülasyon ve Uyum Süreçleri</h4>
            <p className="text-slate-600 mb-4 text-[14px]">Kozmetik kategorisinde mevzuata uygunluk büyük önem taşır. Operasyon sürecinde aşağıdaki başlıkları planlıyoruz:</p>
            <ul className="space-y-2 text-[14px] text-slate-600 mb-4">
              <li className="flex items-start gap-2"><span className="text-accent-500 mt-1">•</span> Gerekli sertifika ve ürün belgelerinin değerlendirilmesi</li>
              <li className="flex items-start gap-2"><span className="text-accent-500 mt-1">•</span> Etiketleme ve içerik kontrolü</li>
              <li className="flex items-start gap-2"><span className="text-accent-500 mt-1">•</span> GTİP ve gümrük planlaması</li>
              <li className="flex items-start gap-2"><span className="text-accent-500 mt-1">•</span> Pazaryeri gerekliliklerine uyum</li>
            </ul>
            <p className="font-medium text-accent-500 text-[14px]">👉 Ürünlerinizin Rusya pazarına sorunsuz şekilde giriş yapması sağlanır.</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
            <h4 className="text-[20px] font-bold text-primary-500 mb-4">Konsinye Model ile Düşük Risk</h4>
            <p className="text-slate-600 mb-4 text-[14px]">Kozmetik üreticileri için en etkili modellerden biri konsinye satış modelidir. Bu modelde:</p>
            <ul className="space-y-2 text-[14px] text-slate-600">
              <li className="flex items-start gap-2"><span className="text-accent-500 mt-1">•</span> Ürünleriniz satışa sunulur</li>
              <li className="flex items-start gap-2"><span className="text-accent-500 mt-1">•</span> Satış gerçekleştikçe ödeme alırsınız</li>
              <li className="flex items-start gap-2"><span className="text-accent-500 mt-1">•</span> Yeni bir satış kanalı oluşturulur</li>
              <li className="flex items-start gap-2"><span className="text-accent-500 mt-1">•</span> Pazara düşük riskle giriş yapılır</li>
            </ul>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
            <h4 className="text-[20px] font-bold text-primary-500 mb-4">E-Ticaret ve Marka Altyapısı</h4>
            <p className="text-slate-600 mb-4 text-[14px]">Sadece pazaryerleriyle sınırlı kalmazsınız:</p>
            <ul className="space-y-2 text-[14px] text-slate-600">
              <li className="flex items-start gap-2"><span className="text-accent-500 mt-1">•</span> Rusya’ya özel e-ticaret sitesi kurulumu</li>
              <li className="flex items-start gap-2"><span className="text-accent-500 mt-1">•</span> Insales altyapısı ile tam entegrasyon</li>
              <li className="flex items-start gap-2"><span className="text-accent-500 mt-1">•</span> Çok kanallı satış yönetimi</li>
              <li className="flex items-start gap-2"><span className="text-accent-500 mt-1">•</span> Tek panelden stok ve sipariş kontrolü</li>
            </ul>
          </div>
        </div>
      </>
    ),
    conclusionTitle: "Neden Rusya Kozmetik Pazarı?",
    conclusionDesc: "Rusya pazarı, kozmetik üreticileri için hem marka bilinirliği hem de sürdürülebilir satış açısından önemli fırsatlar sunar. Doğru operasyon ve mevzuat yönetimi ile ürünlerinizi milyonlarca potansiyel müşteriye ulaştırabiliriz.",
  }
];
