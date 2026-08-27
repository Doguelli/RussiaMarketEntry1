import { Link } from "react-router-dom";
import {
  Settings,
  ShoppingCart,
  Truck,
  MonitorSmartphone,
  TrendingUp,
  Building2,
  Landmark,
  PackageCheck,
  Target
} from "lucide-react";
import { servicePath, servicesPath, contactPath } from "@/utils/ruPaths";
import { blogDetailPath } from "@/utils/blogLanguages";

export const serviceDetails: Record<string, any> = {
  "operasyon-kurulumu": {
    icon: Settings,
    title: "Rusya’da E-Ticaret Operasyonunuzu Kuruyoruz",
    metaTitle: "Rusya E-Ticaret Operasyon Kurulumu | Şirket ve Altyapı",
    metaDescription: "Wildberries, Lamoda, lojistik, vergi ve dijital altyapı süreçlerini uçtan uca yöneterek Rusya pazarına hızlı ve sürdürülebilir giriş sağlıyoruz.",
    description: "Wildberries, Lamoda, lojistik, vergi ve dijital altyapı süreçlerini uçtan uca yöneterek Rusya pazarına hızlı ve sürdürülebilir giriş sağlıyoruz.",
    forWhom: (
      <ul className="list-disc pl-5 space-y-2 text-[15px]">
        <li>Tekstil ve e-ticaret markaları</li>
        <li>Yurtdışına açılmak isteyen üreticiler</li>
        <li>Yüksek satış hedefi olan firmalar</li>
      </ul>
    ),
    contentSections: [
      {
        title: "Rusya pazarına giriş neden zor?",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Rusya’da e-ticaret yapmak yüksek potansiyele sahip olsa da, operasyonel olarak ciddi zorluklar içerir:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Vergi sistemi ve yasal süreçlerin karmaşıklığı</li>
              <li>Lojistik ve teslimat süreçlerinin yönetimi</li>
              <li>Wildberries ve Lamoda platformlarına adaptasyon süreci</li>
              <li>Sipariş, stok ve operasyon süreçlerinin manuel yönetimi</li>
              <li>Yanlış kurulum nedeniyle oluşan finansal kayıplar</li>
            </ul>
            <p>Birçok marka bu süreçleri doğru planlayamadığı için pazara girişte zaman ve para kaybeder.</p>
          </div>
        )
      },
      {
        title: "Biz ne yapıyoruz?",
        content: (
          <div className="space-y-4 text-slate-600">
            <p className="font-semibold text-primary-500">Sadece danışmanlık vermiyoruz.</p>
            <p>Rusya’da satış yapabileceğiniz entegre bir operasyon sistemi kuruyoruz.<br/>Sizin adınıza:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Şirket ve vergi altyapısını oluşturuyoruz</li>
              <li>Wildberries ve Lamoda mağaza kurulumlarını gerçekleştiriyoruz</li>
              <li>Lojistik süreci planlıyor ve yönetiyoruz</li>
              <li>Insales altyapısı ile tüm sistemi entegre ediyoruz</li>
              <li>Satışa hazır, sürdürülebilir bir yapı kuruyoruz</li>
            </ul>
            <p><strong>Amaç:</strong> Sizi en kısa sürede satış yapabilir hale getirmek ve sistemi ölçeklenebilir kurmak</p>
          </div>
        )
      },
      {
        title: "Operasyon Kurulumu Kapsamı",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Kurulum sürecinin tüm adımlarını uçtan uca yönetiyoruz:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Şirket yapılandırması</li>
              <li>Vergi sisteminin kurulumu</li>
              <li>Pazaryeri hesap açılışları</li>
              <li>Ürün hazırlık ve listeleme süreci</li>
              <li>Lojistik planlama</li>
              <li>Dijital altyapı kurulumu (Insales)</li>
              <li>Operasyon ve süreç tasarımı</li>
            </ul>
          </div>
        )
      },
      {
        title: "6 Adımda Operasyon Modeli",
        content: (
          <div className="space-y-6 text-slate-600">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="font-bold text-accent-500 mb-2">1. Analiz ve Planlama</div>
                <p className="text-[14px]">Ürünleriniz, hedef fiyat ve pazar uygunluğu analiz edilir</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="font-bold text-accent-500 mb-2">2. Şirket ve Vergi Kurulumu</div>
                <p className="text-[14px]">Rusya operasyonuna uygun yapı oluşturulur</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="font-bold text-accent-500 mb-2">3. Pazaryeri Kurulumu</div>
                <p className="text-[14px]">Wildberries ve Lamoda hesapları açılır ve yapılandırılır</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="font-bold text-accent-500 mb-2">4. Dijital Sistem Kurulumu</div>
                <p className="text-[14px]">Insales altyapısı kurulur ve tüm sistem entegre edilir</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="font-bold text-accent-500 mb-2">5. Lojistik Planlama</div>
                <p className="text-[14px]">Gönderim ve depo süreçleri organize edilir</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="font-bold text-accent-500 mb-2">6. Satışa Geçiş</div>
                <p className="text-[14px]">Operasyon aktif hale getirilir</p>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "Entegre Dijital Altyapı (Insales)",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Operasyonun sürdürülebilir olması için güçlü bir sistem altyapısı kuruyoruz.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Tüm siparişlerin tek panelde toplanması</li>
              <li>Stokların senkronize edilmesi</li>
              <li>Pazaryerleri ile entegrasyon</li>
              <li>Operasyon süreçlerinin otomasyonu</li>
            </ul>
            <p><strong>Sonuç:</strong> Manuel süreçler yerine sistemli ve ölçeklenebilir bir yapı</p>
          </div>
        )
      },
      {
        title: "Lojistik Avantaj",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Operasyonun en kritik noktası doğru lojistik modelidir.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Türkiye çıkışlı gönderim planı</li>
              <li>Alternatif lojistik çözümleri (Kyrgyzstan route dahil)</li>
              <li>Depo ve iade süreçlerinin yönetimi</li>
            </ul>
            <p><strong>Doğru lojistik =</strong> Daha hızlı teslimat + Daha yüksek satış</p>
          </div>
        )
      },
      {
        title: "Finansal Yapı",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Operasyon kurulumunda en kritik konulardan biri finansal planlamadır.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Vergi yapısının doğru kurulması</li>
              <li>Komisyon ve maliyet hesaplamaları</li>
              <li>Net kâr senaryosu oluşturma</li>
            </ul>
            <p><strong>Amaç:</strong> Sürdürülebilir ve ölçeklenebilir bir yapı kurmak</p>
          </div>
        )
      },
      {
        title: "Sonuç",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Rusya pazarına girişte en büyük farkı, doğru kurulan operasyon yaratır.</p>
            <p>Bizimle çalıştığınızda:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Süreçleri sıfırdan kurmazsınız</li>
              <li>Riskleri minimize edersiniz</li>
              <li>Daha hızlı satışa başlarsınız</li>
              <li>Sistemli ve ölçeklenebilir bir yapı elde edersiniz</li>
            </ul>
          </div>
        )
      }
    ],
    faqs: [
      { q: "Rusya’da şirket kurmak zorunlu mu?", a: "Pazaryerlerinde resmi bir mağaza açmak ve vergi optimizasyonu sağlamak için şirket kurmak genellikle gereklidir, ancak Ozon Global gibi alternatif modelleri de inceliyoruz." },
      { q: "Wildberries ve Lamoda mağaza açmak ne kadar sürer?", a: "Gerekli evraklar tamamlanıp şirket kurulumu yapıldıktan sonra birkaç hafta içinde mağazalar satışa hazır hale getirilebilir." },
      { q: "Insales entegrasyonu neden gerekli?", a: "Operasyon büyüdükçe manuel işlemler hatalara yol açar. Insales stok ve siparişlerinizi tüm platformlarda otomatik olarak senkronize eder." },
      { q: "İlk satış ne kadar sürede yapılır?", a: "Mağaza açılıp lojistik süreç tamamlandıktan sonra doğru reklam kurgusuyla ilk günden itibaren satışlar başlayabilir." },
      { q: "Lojistik süreç nasıl işler?", a: "Türkiye'den ürünler depo/fulfillment noktalarına (FBO) ulaştırılır ve sipariş geldiğinde oradan Rusya içi dağıtıma çıkar." }
    ]
  },

  "pazaryeri-yonetimi": {
    icon: ShoppingCart,
    title: "Rusya'da Pazaryeri Satışlarınızı Yönetiyor ve Büyütüyoruz",
    subtitle: "Wildberries, Ozon, Yandex Market ve Lamoda",
    metaTitle: "Wildberries, Ozon, Yandex Market ve Lamoda Satış Yönetimi | Rusya",
    metaDescription:
      "Wildberries, Ozon, Yandex Market ve Lamoda'da ürün, fiyat, kampanya, reklam ve satış operasyonlarınızı yönetiyor; Rusya'daki e-ticaret performansınızı büyütüyoruz.",
    description:
      "Rusya'nın önde gelen pazaryerlerinde satış operasyonunuzu tek bir yapı üzerinden yönetiyoruz.",
    lead:
      "Mağaza kurulumu, ürün içerikleri, fiyatlandırma, kampanyalar, reklam, stok, performans ve operasyon süreçlerini birlikte yöneterek markanızın Rusya'daki satışlarını sürdürülebilir şekilde büyütüyoruz.",
    ctaLabel: "Ön Analiz Talep Et",
    forWhom: (
      <ul className="list-disc pl-5 space-y-2 text-[15px]">
        <li>Türkiye'de üretim yapan markalar</li>
        <li>Rusya'ya yeni girmek isteyen markalar</li>
        <li>Pazaryeri satışını büyütmek isteyen şirketler</li>
        <li>Birden fazla pazaryeri kanalına açılmak isteyen markalar</li>
        <li>Rusya'da operasyon kurmak isteyen üreticiler</li>
      </ul>
    ),
    contentSections: [
      {
        title: "Rusya'nın Önemli Pazaryerlerinde Satış",
        content: (
          <div className="space-y-5 text-slate-600">
            <p>
              Rusya e-ticaretinde satış; doğru pazaryeri seçimi, ürün konumlandırması, fiyatlandırma, reklam ve operasyonun birlikte yönetilmesiyle büyür.{" "}
              <Link to={servicesPath(false)} className="text-accent-500 font-semibold hover:underline">
                Hizmetlerimiz
              </Link>{" "}
              kapsamında Wildberries, Ozon, Yandex Market ve Lamoda kanallarını operasyonel olarak yönetiyoruz.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  name: "Wildberries",
                  accent: "#CB11AB",
                  text: "Rusya'nın en büyük pazaryerlerinden biri. Moda ve geniş tüketim kategorilerinde yüksek trafik ve güçlü satış potansiyeli sunar.",
                },
                {
                  name: "Ozon",
                  accent: "#005BFF",
                  text: "Geniş kategori yapısı ve güçlü fulfillment altyapısıyla markalar için ölçeklenebilir bir satış kanalıdır.",
                },
                {
                  name: "Yandex Market",
                  accent: "#111111",
                  text: "Yandex ekosistemine yakın bir pazaryeri kanalı. Katalog, fiyat ve görünürlük yönetimi kritik önemdedir.",
                },
                {
                  name: "Lamoda",
                  accent: "#1A1A1A",
                  text: "Moda ve lifestyle odaklı bir pazaryeri. Katalog standartları ve ürün sunumu marka algısını doğrudan etkiler.",
                },
              ].map((p) => (
                <div
                  key={p.name}
                  className="relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 p-4"
                >
                  <span
                    aria-hidden
                    className="absolute left-0 top-0 bottom-0 w-[3px]"
                    style={{ background: p.accent }}
                  />
                  <p className="font-bold text-primary-500 mb-1">{p.name}</p>
                  <p className="text-[14px] leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
            <p className="text-[14px]">
              İlgili rehberler:{" "}
              <Link to={blogDetailPath("wildberriesde-satis-yapmak", "tr")} className="text-accent-500 font-semibold hover:underline">
                Wildberries'de satış
              </Link>
              {" · "}
              <Link to={blogDetailPath("ozonda-satis-yapmak", "tr")} className="text-accent-500 font-semibold hover:underline">
                Ozon'da satış
              </Link>
              {" · "}
              <Link to={blogDetailPath("lamodaya-nasil-girilir", "tr")} className="text-accent-500 font-semibold hover:underline">
                Lamoda'ya giriş
              </Link>
            </p>
          </div>
        ),
      },
      {
        title: "Pazaryerinde satış yapmak neden zor?",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>
              Wildberries, Ozon, Yandex Market ve Lamoda'da satış yapmak yüksek potansiyele sahiptir; ancak doğru yönetilmediğinde ciddi kayıplara neden olabilir:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Yanlış fiyatlandırma ve düşük kâr marjı</li>
              <li>Ürünlerin görünür olmaması</li>
              <li>Kampanya ve reklam yönetiminde hatalar</li>
              <li>Stok ve operasyon uyumsuzluğu</li>
            </ul>
            <p>Birçok marka mağaza açmasına rağmen sürdürülebilir satış elde edemez. Bu nedenle pazaryeri yönetimi; ürün yüklemenin ötesinde sürekli satış yönetimi gerektirir.</p>
          </div>
        ),
      },
      {
        title: "Pazaryeri Operasyonunuzun Her Aşamasını Yönetiyoruz",
        content: (
          <div className="space-y-4 text-slate-600">
            <p className="font-semibold text-primary-500">Sadece ürün yüklemiyoruz. Satış performansınızı artıran bir sistem kuruyor ve yönetiyoruz.</p>
            <p>Operasyonel ve stratejik olarak tüm süreci yönetiyoruz:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Mağaza ve operasyon kurulumu</li>
              <li>Ürün yükleme ve içerik yönetimi</li>
              <li>Ürün başlığı, açıklaması ve arama optimizasyonu</li>
              <li>Fiyatlandırma ve rekabet analizi</li>
              <li>Kampanya ve promosyon yönetimi</li>
              <li>Pazaryeri içi reklam yönetimi</li>
              <li>Stok takibi ve planlama</li>
              <li>Sipariş ve operasyon takibi</li>
              <li>Satış performansı analizi</li>
              <li>Kârlılık ve ürün performansı analizi</li>
              <li>Lojistik ve fulfillment koordinasyonu</li>
              <li>Sistem ve entegrasyon süreçleri (Insales dahil)</li>
            </ul>
            <p>
              <strong>Amaç:</strong> Daha fazla satış, daha yüksek kârlılık ve ölçeklenebilir bir pazaryeri operasyonu.
            </p>
          </div>
        ),
      },
      {
        title: "Wildberries Satış Yönetimi",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>
              Wildberries satış yönetimi; yalnızca ürün listelemesi değil, SEO ürün açıklamaları, fiyat rekabet analizleri, kampanya kurguları ve sürekli performans takibiyle birlikte yürütülür.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Mağaza yönetimi ve ürün kartları</li>
              <li>İçerik optimizasyonu ve görünürlük</li>
              <li>Fiyatlandırma, kampanyalar ve reklam</li>
              <li>Stok / satış takibi ve performans analizi</li>
            </ul>
            <p className="text-[14px]">
              <Link to={blogDetailPath("wildberries-algoritmasi-nasil-calisir", "tr")} className="text-accent-500 font-semibold hover:underline">
                Wildberries algoritması nasıl çalışır?
              </Link>
              {" · "}
              <Link to={blogDetailPath("wildberries-depo-stratejisi-basarili-satis", "tr")} className="text-accent-500 font-semibold hover:underline">
                Depo stratejisi
              </Link>
            </p>
          </div>
        ),
      },
      {
        title: "Ozon Satış Yönetimi",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>
              Ozon'da sürdürülebilir büyüme; mağaza operasyonu, ürün kartları, fiyatlandırma, kampanyalar, reklam ve satış performansının düzenli izlenmesiyle sağlanır. Lojistik ve fulfillment koordinasyonu da satış sonuçlarını doğrudan etkiler.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Mağaza operasyonu ve ürün kartları</li>
              <li>Fiyatlandırma, kampanyalar ve reklam yönetimi</li>
              <li>Satış / performans izleme</li>
              <li>Lojistik ve fulfillment koordinasyonu</li>
            </ul>
            <p className="text-[14px]">
              <Link to={blogDetailPath("ozonda-satis-yapmak", "tr")} className="text-accent-500 font-semibold hover:underline">
                Ozon'da satış yapmak
              </Link>
            </p>
          </div>
        ),
      },
      {
        title: "Yandex Market Satış Yönetimi",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>
              Yandex Market'te güçlü bir varlık; katalog yönetimi, fiyatlandırma, kampanyalar, reklam ve satış performansının birlikte yönetilmesini gerektirir. İhtiyaç halinde Yandex ekosistemindeki görünürlük çalışmalarıyla desteklenebilir.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Pazaryeri varlığı ve katalog yönetimi</li>
              <li>Fiyatlandırma ve kampanya yönetimi</li>
              <li>Reklam ve satış / performans izleme</li>
              <li>Yandex ekosistemiyle uyumlu büyüme desteği</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Lamoda Satış Yönetimi",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>
              Lamoda'nın katalog kabul standartları daha katıdır; marka imajına önem verilir. Doğru ürün sunumu, fiyatlandırma, kampanya ve operasyon koordinasyonuyla satışları sürdürülebilir şekilde büyütmek mümkündür.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Pazaryeri satışları ve ürün sunumu</li>
              <li>Fiyatlandırma ve kampanyalar</li>
              <li>Operasyonel koordinasyon</li>
              <li>Performans takibi</li>
            </ul>
            <p className="text-[14px]">
              <Link to={blogDetailPath("lamodaya-nasil-girilir", "tr")} className="text-accent-500 font-semibold hover:underline">
                Lamoda'ya nasıl girilir?
              </Link>
            </p>
          </div>
        ),
      },
      {
        title: "Pazaryeri Reklamları ve Satış Büyümesi",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>
              Pazaryeri reklamları, satış yönetiminin ayrılmaz parçasıdır. Rekabette öne çıkmak ve görünürlüğü artırmak için platform içi reklamlar kritik rol oynar.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Pazaryeri içi reklam yönetimi</li>
              <li>Ürün görünürlüğü ve kampanya optimizasyonu</li>
              <li>Reklam performansı ve dönüşüm odaklı iyileştirme</li>
              <li>Satış ve kârlılık izleme</li>
            </ul>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5 mt-2">
              <h3 className="font-bold text-primary-500 text-[18px] mb-2">
                Rusya'da Pazaryeri Dışından da Talep Yaratıyoruz
              </h3>
              <p className="mb-3">
                Pazaryeri satışları; Yandex Ads, VK Ads ve Telegram Native Advertising ile desteklenebilir. Bu kanallar genel dijital pazarlama hizmetimizin parçasıdır; bu sayfanın odağı pazaryeri operasyonu ve satış yönetimidir.
              </p>
              <Link
                to={servicePath("marka-buyutme", false)}
                className="inline-flex text-accent-500 font-bold hover:underline"
              >
                Dijital Pazarlama Çözümlerini İncele →
              </Link>
            </div>
          </div>
        ),
      },
      {
        title: "Performans Odaklı Yaklaşım",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Satış sadece ürün yüklemekle gerçekleşmez. Sürekli analiz ve optimizasyon gerektirir.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Hangi ürün ne kadar satıyor?</li>
              <li>Hangi fiyat aralığı daha kârlı?</li>
              <li>Hangi kampanyalar daha iyi performans gösteriyor?</li>
            </ul>
            <p>Bu verileri analiz ederek satışlarınızı sürdürülebilir şekilde büyütüyoruz.</p>
          </div>
        ),
      },
      {
        title: "Satıştan Lojistiğe, Operasyondan Sisteme",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>
              Pazaryeri satışları; stok, fulfillment, depolama, lojistik, entegrasyon ve sipariş operasyonundan bağımsız yönetilemez. Satış süreçleri operasyon altyapınızla entegre çalışmalıdır.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Insales entegrasyonu ve stok senkronizasyonu</li>
              <li>Sipariş yönetimi ve merkezi kontrol</li>
              <li>Lojistik / fulfillment koordinasyonu</li>
            </ul>
            <p className="text-[14px] space-x-1">
              <Link to={servicePath("lojistik-ve-depo", false)} className="text-accent-500 font-semibold hover:underline">
                Lojistik ve depo
              </Link>
              <span>·</span>
              <Link to={servicePath("sistem-ve-entegrasyon", false)} className="text-accent-500 font-semibold hover:underline">
                Sistem ve entegrasyon
              </Link>
              <span>·</span>
              <Link to={servicePath("operasyon-kurulumu", false)} className="text-accent-500 font-semibold hover:underline">
                Operasyon kurulumu
              </Link>
              <span>·</span>
              <Link to={blogDetailPath("wildberries-ozon-lojistik-yonetimi-stok-stratejisi", "tr")} className="text-accent-500 font-semibold hover:underline">
                WB & Ozon lojistik rehberi
              </Link>
            </p>
            <p>
              <strong>Sonuç:</strong> Manuel süreçler yerine sistemli ve ölçeklenebilir bir yapı.
            </p>
          </div>
        ),
      },
      {
        title: "Kimler İçin?",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>
              Bu hizmet; ürün portföyü, üretim kapasitesi, marka veya ticari potansiyeli olan şirketler için tasarlanmıştır. Tek ürünle “deneme” yapmak isteyen bireysel satıcılardan ziyade, Rusya'da sürdürülebilir satış ve operasyon kurmak isteyen firmalara odaklanırız.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Türkiye'de üretim yapan markalar</li>
              <li>Rusya'ya yeni girmek isteyen markalar</li>
              <li>Rusya'da pazaryeri satışını büyütmek isteyen şirketler</li>
              <li>Birden fazla pazaryeri kanalına açılmak isteyen markalar</li>
              <li>Kendi operasyonunu Rusya'da kurmak isteyen üreticiler</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Nasıl Çalışıyoruz?",
        content: (
          <div className="space-y-4 text-slate-600">
            {[
              { n: "01", t: "Ön Analiz", d: "Ürünlerinizi, markanızı ve Rusya'daki potansiyelinizi değerlendiriyoruz." },
              { n: "02", t: "Kanal ve Model", d: "Ürününüz için uygun pazaryeri ve satış modelini belirliyoruz." },
              { n: "03", t: "Kurulum", d: "Mağaza, ürün, fiyat, operasyon ve lojistik altyapısını hazırlıyoruz." },
              { n: "04", t: "Satış ve Optimizasyon", d: "Satış, reklam, kampanya ve ürün performansını sürekli optimize ediyoruz." },
              { n: "05", t: "Sürekli Yönetim", d: "Operasyonu ve performansı düzenli olarak takip ederek büyümeyi yönetiyoruz." },
            ].map((s) => (
              <div key={s.n} className="flex gap-4 border-b border-slate-100 last:border-0 pb-4 last:pb-0">
                <span className="font-extrabold text-accent-500 text-[18px] w-10 flex-shrink-0">{s.n}</span>
                <div>
                  <p className="font-bold text-primary-500">{s.t}</p>
                  <p>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        ),
      },
      {
        title: "Sonuç",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Doğru yönetilen bir pazaryeri hesabı, markanız için güçlü bir gelir kanalına dönüşür.</p>
            <p>Bizimle çalıştığınızda:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Satışlarınızı artırırsınız</li>
              <li>Operasyonel hataları azaltırsınız</li>
              <li>Kârlı ve sürdürülebilir büyüme sağlarsınız</li>
            </ul>
            <Link to={contactPath(false)} className="inline-flex text-accent-500 font-bold hover:underline">
              Ön Analiz Talep Et →
            </Link>
          </div>
        ),
      },
    ],
    faqs: [
      {
        q: "Hangi pazaryerlerini yönetiyorsunuz?",
        a: "Wildberries, Ozon, Yandex Market ve Lamoda üzerinde mağaza, ürün, fiyat, kampanya, reklam ve satış operasyonu yönetimi sağlıyoruz.",
      },
      {
        q: "Ozon ile çalışıyor musunuz?",
        a: "Evet. Ozon'da mağaza operasyonu, ürün kartları, fiyatlandırma, kampanya, reklam ve performans takibini yönetiyoruz; lojistik koordinasyonunu da satış sürecine bağlıyoruz.",
      },
      {
        q: "Yandex Market ile çalışıyor musunuz?",
        a: "Evet. Yandex Market'te katalog, fiyat, kampanya, reklam ve satış performansını yönetiyor; gerektiğinde Yandex ekosistemindeki büyüme çalışmalarıyla destekliyoruz.",
      },
      {
        q: "Wildberries ve Lamoda satış yönetimi nasıl yapılır?",
        a: "Sadece ürün listelemesi değil; SEO ürün açıklamaları, fiyat rekabet analizleri, etkili kampanya kurguları ve sürekli performans takibiyle birlikte yapılır.",
      },
      {
        q: "Lamoda'da satış yapmak zor mu?",
        a: "Lamoda'nın katalog kabul standartları daha katıdır, marka imajına çok önem verilir. Optimizasyonla doğru bir profil yaratarak satışları yüksek seviyelere çıkarabilirsiniz.",
      },
      {
        q: "Pazaryeri reklamlarını yönetiyor musunuz?",
        a: "Evet. Platform içi reklamlar, görünürlük ve dönüşüm odaklı kampanya optimizasyonu satış yönetiminin parçasıdır. Pazaryeri dışındaki Yandex Ads, VK Ads ve Telegram çalışmaları için dijital büyüme hizmetimizi de kullanabilirsiniz.",
      },
      {
        q: "Lojistik ve fulfillment yönetebilir misiniz?",
        a: "Pazaryeri satışını stok, depo ve fulfillment ile entegre planlıyoruz. Lojistik ve depo süreçleri için ilgili operasyon hizmetimizle koordineli ilerleriz.",
      },
      {
        q: "Rusya pazarına yeni giren şirketlere destek veriyor musunuz?",
        a: "Evet. Kanal seçimi, mağaza kurulumu, ürün hazırlığı, operasyon ve satış yönetimini birlikte planlayarak pazara giriş sürecini yönetiyoruz.",
      },
      {
        q: "Birden fazla pazaryerini aynı anda yönetebilir misiniz?",
        a: "Evet. Markanın ürün ve operasyon kapasitesine göre birden fazla kanalı aynı anda kurup yönetebiliriz.",
      },
      {
        q: "Reklam yönetimi gerekli mi?",
        a: "Kesinlikle evet. Rekabette öne çıkabilmek ve organik aramaları desteklemek için platform içi reklamlar kritik önemdedir.",
      },
      {
        q: "Satışlar ne kadar sürede artar?",
        a: "Hesabın durumuna ve sektöre göre değişmekle birlikte, algoritmaların yapılan optimizasyonlara tepki vermesiyle birlikte 2 ile 4 hafta içinde artış gözlemlenmeye başlar.",
      },
    ],
  },

  "lojistik-ve-depo": {
    icon: Truck,
    title: "Rusya Lojistik ve Tedarik Zinciri Yönetimi",
    metaTitle: "Rusya E-Ticaret Lojistik, Depo ve Fulfillment",
    metaDescription: "Rusya e-ticaret pazarında ürünlerinizi Türkiye’deki üretim sürecinizden Rusya’daki son kullanıcıya kadar güvenle ulaştırıyoruz.",
    description: "Biz, Türkiye’deki üretim sürecinizden Rusya’daki son kullanıcıya kadar olan tüm lojistik ve operasyon süreçlerini uçtan uca yönetiyoruz.",
    forWhom: (
      <ul className="list-disc pl-5 space-y-2 text-[15px]">
        <li>Rusya'daki müşterilere hızlı teslimat yapmak isteyen ihracatçılar</li>
        <li>Tedarik zincirini ve gümrük süreçlerini hatasız yönetmek isteyen markalar</li>
      </ul>
    ),
    contentSections: [
      {
        title: "Rusya’da lojistik neden kritik?",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Rusya’nın geniş coğrafyası ve dağıtım yapısı, lojistiği operasyonun merkezine yerleştirir.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Uzun mesafeler ve farklı dağıtım bölgeleri</li>
              <li>Teslimat süresinin satış performansına doğrudan etkisi</li>
              <li>Pazaryeri algoritmalarının stok ve hız odaklı çalışması</li>
            </ul>
            <p><strong>Geç teslim edilen ürün = kaybedilen satış</strong></p>
          </div>
        )
      },
      {
        title: "Biz ne yapıyoruz?",
        content: (
          <div className="space-y-4 text-slate-600">
            <p className="font-semibold text-primary-500">Sadece kargo göndermiyoruz.</p>
            <p>Satış performansınızı destekleyen entegre bir lojistik sistemi kuruyoruz.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Uluslararası sevkiyat yönetimi</li>
              <li>Gümrük ve yasal süreçlerin yönetimi</li>
              <li>Depolama ve fulfillment operasyonu</li>
              <li>İade ve kalite kontrol süreçleri</li>
              <li>Dijital sistem entegrasyonu (Insales)</li>
            </ul>
            <p><strong>Amaç:</strong> Hızlı teslimat + düşük maliyet + yüksek satış</p>
          </div>
        )
      },
      {
        title: "Uluslararası sevkiyat ve gümrükleme",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Türkiye’den Rusya’ya tüm gönderim süreci profesyonel olarak yönetilir.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Karayolu ve alternatif rota planlaması</li>
              <li>Gümrükleme süreçleri (GTİP, beyanname)</li>
              <li>DDP teslimat modeli (vergiler dahil)</li>
              <li>Yasal risklerin minimize edilmesi</li>
            </ul>
            <p>Tüm süreç, Rusya mevzuatına uygun şekilde yürütülür.</p>
          </div>
        )
      },
      {
        title: "Depolama ve fulfillment yönetimi",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Ürünleriniz Rusya’ya ulaştığında stratejik depolara yönlendirilir.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Pazaryeri depoları (FBO modeli)</li>
              <li>Bölgesel dağıtım merkezleri</li>
              <li>Hızlı teslimat için stok konumlandırma</li>
            </ul>
            <p><strong>Doğru depo =</strong> 24-48 saat içinde teslimat avantajı</p>
          </div>
        )
      },
      {
        title: "Barkodlama ve ürün hazırlık",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Rusya pazarına girişte ürünlerin doğru hazırlanması zorunludur.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Çestniy Znak etiketleme</li>
              <li>Pazaryeri barkodlama</li>
              <li>Paketleme ve kalite kontrol</li>
            </ul>
            <p>Bu süreçler eksiksiz yönetilir.</p>
          </div>
        )
      },
      {
        title: "Marketplace entegrasyonu ve stok yönetimi",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Lojistik süreçler dijital altyapı ile entegre çalışır.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Insales entegrasyonu</li>
              <li>Tek panelden stok yönetimi</li>
              <li>Tüm pazaryerlerinde senkronizasyon</li>
              <li>Stoksuz satış riskinin önlenmesi</li>
            </ul>
            <p><strong>Sonuç:</strong> Sistemli ve ölçeklenebilir operasyon</p>
          </div>
        )
      },
      {
        title: "İade ve kalite kontrol yönetimi",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Rusya pazarında iade süreçleri operasyonun önemli bir parçasıdır.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>İade ürünlerin kontrol edilmesi</li>
              <li>Yeniden satışa uygun hale getirilmesi</li>
              <li>Hasarlı ürünlerin raporlanması</li>
            </ul>
            <p>İade süreçleri maliyet değil, yönetilebilir bir sistem haline getirilir.</p>
          </div>
        )
      },
      {
        title: "Lojistik operasyon akışı",
        content: (
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left border-collapse my-6 bg-white border border-slate-200">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="p-4 border border-slate-200">Aşama</th>
                  <th className="p-4 border border-slate-200">İşlem Detayı</th>
                  <th className="p-4 border border-slate-200 whitespace-nowrap">Hedef Süre</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <td className="p-4 border border-slate-200"><span className="text-accent-500 font-bold mr-2">01.</span> <strong>Çıkış Hazırlığı</strong></td>
                  <td className="p-4 border border-slate-200">Türkiye depo çıkışı, paketleme ve etiketleme</td>
                  <td className="p-4 border border-slate-200 font-medium whitespace-nowrap text-slate-600">1-2 İş Günü</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 border border-slate-200"><span className="text-accent-500 font-bold mr-2">02.</span> <strong>Uluslararası Nakliye</strong></td>
                  <td className="p-4 border border-slate-200">Gümrükleme ve sınır geçiş işlemleri</td>
                  <td className="p-4 border border-slate-200 font-medium whitespace-nowrap text-slate-600">5-7 İş Günü</td>
                </tr>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <td className="p-4 border border-slate-200"><span className="text-accent-500 font-bold mr-2">03.</span> <strong>Rusya İç Dağıtım</strong></td>
                  <td className="p-4 border border-slate-200">Pazaryeri depolarına teslimat</td>
                  <td className="p-4 border border-slate-200 font-medium whitespace-nowrap text-slate-600">2-3 İş Günü</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 border border-slate-200"><span className="text-accent-500 font-bold mr-2">04.</span> <strong>Müşteriye Teslimat</strong></td>
                  <td className="p-4 border border-slate-200">Son mil teslimat (Last Mile)</td>
                  <td className="p-4 border border-slate-200 font-medium whitespace-nowrap text-slate-600">1-3 İş Günü</td>
                </tr>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <td className="p-4 border border-slate-200"><span className="text-accent-500 font-bold mr-2">05.</span> <strong>İade Yönetimi</strong></td>
                  <td className="p-4 border border-slate-200">Ürün kontrol ve tekrar satışa alma</td>
                  <td className="p-4 border border-slate-200 font-medium whitespace-nowrap text-slate-600">Sürekli</td>
                </tr>
              </tbody>
            </table>
          </div>
        )
      },
      {
        title: "Sonuç",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Rusya pazarında lojistik sadece bir destek değil, operasyonun merkezidir.</p>
            <p><strong>Doğru lojistik sistemi =</strong> daha hızlı teslimat + daha fazla satış</p>
          </div>
        )
      }
    ],
    faqs: [
      { q: "Rusya’ya kargo kaç günde ulaşır?", a: "Türkiye depo çıkışından sonra gümrük dâhil ortalama 5-7 iş günü içerisinde kargonuz Rusya’ya ulaşır." },
      { q: "Lojistik maliyetleri neye göre değişir?", a: "Hacim, ürün özellikleri ve teslimat hızına (standart veya ekspres) göre lojistik maliyetleri değişkenlik gösterir." },
      { q: "Depo kullanmak zorunlu mu?", a: "En iyi satış dönüşüm oranlarını yakalamak ve pazaryeri algoritmalarında öne çıkmak için (FBO) modeli, yani yerel depo kullanımı tavsiye edilir." },
      { q: "İade süreçleri nasıl yönetilir?", a: "Rusya operasyon deposuna gelen iadeler kalite kontrol sürecinden geçip paketlenir ve yeniden pazaryeri deposuna sevk edilir." }
    ]
  },

  "sistem-ve-entegrasyon": {
    icon: MonitorSmartphone,
    title: "Insales Entegrasyonu ve Operasyon Otomasyonu",
    metaTitle: "InSales E-Ticaret Entegrasyonu | Rusya Pazarı",
    metaDescription: "Rusya e-ticaret operasyonlarında sürdürülebilir büyümenin anahtarı, süreçlerin manuel değil sistematik yönetilmesidir.",
    description: "Rusya e-ticaret operasyonlarında sürdürülebilir büyümenin anahtarı, süreçlerin manuel değil sistematik yönetilmesidir. Biz, operasyonunuzu sadece kurmuyor; Insales altyapısı ile tamamen entegre ve otomatik hale getiriyoruz.",
    forWhom: (
      <ul className="list-disc pl-5 space-y-2 text-[15px]">
        <li>Birden fazla platformda (WB, Ozon, Yandex vb.) satış yapan markalar</li>
        <li>Stok ve sipariş karmaşasını tamamen önlemek isteyen şirketler</li>
      </ul>
    ),
    contentSections: [
      {
        title: "Neden sistem kurulumu kritik?",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Birçok marka satışa başladıktan sonra şu problemlerle karşılaşır:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Stokların senkronize olmaması</li>
              <li>Siparişlerin dağınık yönetilmesi</li>
              <li>Manuel operasyon hataları</li>
              <li>Ölçeklenemeyen yapı</li>
            </ul>
            <p>Bu problemler büyümeyi durdurur.</p>
          </div>
        )
      },
      {
        title: "Insales ile ne sağlıyoruz?",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Insales altyapısı ile tüm operasyon tek merkezden yönetilir:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Tüm pazaryerlerinin tek panelde toplanması</li>
              <li>Siparişlerin merkezi yönetimi</li>
              <li>Stokların anlık senkronizasyonu</li>
              <li>Ürünlerin otomatik güncellenmesi</li>
            </ul>
            <p><strong>Sonuç:</strong> Kontrol edilebilir ve ölçeklenebilir sistem</p>
          </div>
        )
      },
      {
        title: "Merkezi sipariş yönetimi nasıl çalışır?",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Siparişlerin tek panelden yönetilebilmesi için operasyonun doğru kurgulanması gerekir. Bu yapı iki şekilde sağlanır:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Fulfillment modeli ile çalışmak</li>
              <li>Rusya içinde depo kullanımı</li>
            </ul>
            <p>Siparişler, bu altyapı üzerinden tek merkezde toplanır ve yönetilir. <br/><strong className="text-accent-500">Sistem olmadan merkezi yönetim mümkün değildir.</strong></p>
          </div>
        )
      },
      {
        title: "Fulfillment ve depo altyapısı",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Operasyonun sağlıklı çalışması için fiziksel altyapı şarttır.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Pazaryeri depoları (FBO modeli)</li>
              <li>Özel depo kullanımı</li>
              <li>Siparişlerin depo üzerinden çıkışı</li>
              <li>Lojistik süreçlerin sistemle entegre çalışması</li>
            </ul>
            <p>Bu yapı, hem hız hem de kontrol sağlar.</p>
          </div>
        )
      },
      {
        title: "Tek panelden yönetim & Stok",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Wildberries, Lamoda ve Ozon satışlarınızı tek bir sistem üzerinden kontrol edebilirsiniz.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Tüm siparişleri tek ekranda görüntüleme</li>
              <li>Stokların merkezi yönetimi</li>
              <li>Ürün ve fiyat güncellemeleri</li>
            </ul>
            <p>Ayrıca sistem, platformlar arası <strong className="font-semibold text-primary-500">otomatik stok senkronizasyonu</strong> sağlayarak yok satma riskini ortadan kaldırır.</p>
          </div>
        )
      },
      {
        title: "Sonuç",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Başarılı bir e-ticaret operasyonu, sadece satış yapmak değil; sistemi doğru kurmakla mümkündür.</p>
            <p><strong>Doğru sistem + doğru altyapı = kontrol + hız + büyüme</strong></p>
          </div>
        )
      }
    ],
    faqs: [
      { q: "Insales nedir?", a: "Rusya'daki en yaygın e-ticaret altyapılarından biridir. Tüm popüler pazaryerleriyle sorunsuz çalışır ve satış operasyonlarınızı otomatize eder." },
      { q: "Merkezi sipariş yönetimi nasıl sağlanır?", a: "API entegrasyonu sayesinde tüm mağazalarınız tek ekrandan görünür. Sipariş geldiği anda anlık olarak Insales ekranına düşer ve depoya iletilir." },
      { q: "Fulfillment kullanmak zorunlu mu?", a: "Hayır zorunlu değil ama merkezi yönetim ve operasyon hızı için fulfillment sistemine geçiş tavsiye edilir." },
      { q: "Depo olmadan bu sistem çalışır mı?", a: "Sistem çalışır ancak fiziksel depo otomasyonu entegre olmadığında sipariş gönderimleri manuel yapılmak zorundadır." },
      { q: "Stok senkronizasyonu nasıl çalışır?", a: "Bir kanaldan ürün satıldığında, Insales diğer tüm kanallarda o ürünün stoğunu otomatik olarak -1 eksiltir." }
    ]
  },

  "marka-buyutme": {
    icon: TrendingUp,
    title: "Rusya'da Dijital Pazarlama ve Marka Büyütme",
    subtitle: "Yandex Ads · VK Ads · Telegram Native Advertising · SEO",
    metaTitle: "Rusya'da Dijital Pazarlama ve Marka Büyütme | Yandex, VK, Telegram",
    metaDescription:
      "Rusya'da markanızın görünürlüğünü ve satışlarını Yandex Ads, VK Ads, Telegram Native Advertising, SEO ve performans odaklı dijital pazarlama ile büyütüyoruz.",
    description:
      "Rusya'da markanız için görünürlükten satışa uzanan dijital büyüme sistemi kuruyoruz.",
    lead:
      "Yandex Ads, VK Ads, Telegram Native Advertising, SEO ve veri odaklı performans çalışmalarıyla markanızın Rusya'daki hedef kitlesine ulaşmasına ve sürdürülebilir talep oluşturmasına yardımcı oluyoruz.",
    ctaLabel: "Ön Analiz Talep Et",
    forWhom: (
      <ul className="list-disc pl-5 space-y-2 text-[15px]">
        <li>Rusya'da marka görünürlüğü ve talep oluşturmak isteyen firmalar</li>
        <li>E-ticaret ve B2B satışlarını dijital kanallarla büyütmek isteyen markalar</li>
        <li>Medikal / sağlık ve üretici şirketler</li>
        <li>Rusya'ya giren veya halihazırda satan kurumsal işletmeler</li>
      </ul>
    ),
    contentSections: [
      {
        title: "Rusya'nın Dijital Ekosisteminde Markanızı Konumlandırıyoruz",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>
              Rusya'nın dijital ortamı kendine özgü kanallar, arama alışkanlıkları ve içerik davranışlarıyla çalışır. Başka pazarlardan kopyalanan kampanyalar çoğu zaman yeterli olmaz.
            </p>
            <p>
              Markanızı Yandex, VK ve Telegram ekseninde; Rus arama ekosistemi ve yerel kitle davranışına uygun şekilde konumlandırıyoruz. Amaç yalnızca reklam vermek değil;{" "}
              <Link to={servicesPath(false)} className="text-accent-500 font-semibold hover:underline">
                hizmetlerimiz
              </Link>{" "}
              kapsamında sürdürülebilir talep ve marka büyütme sistemi kurmaktır.
            </p>
          </div>
        ),
      },
      {
        title: "Neden performans yönetimi gerekli?",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>
              Ürünü veya markayı pazara çıkarmak tek başına yeterli değildir. Doğru hedef kitleye ulaşmak, görünür olmak ve rekabet içinde öne çıkmak gerekir. Doğru yönetilmeyen kampanyalar potansiyelin çok altında sonuç üretir.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Doğru kitleye ulaşmak</li>
              <li>Görünürlük ve talep oluşturmak</li>
              <li>Trafik, dönüşüm ve kârlılığı birlikte yönetmek</li>
            </ul>
            <p>
              Bu nedenle e-ticaret pazarlama ve marka büyütme çalışmalarını veri odaklı performans yönetimiyle yürütüyoruz.
            </p>
          </div>
        ),
      },
      {
        title: "Yandex Ads",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>
              Yandex Ads ile Rusya'da arama ve ağ reklamlarını markanızın hedeflerine göre planlıyor ve yönetiyoruz. Odak; nitelikli trafik, görünürlük, lead generation ve satış / B2B talep üretimidir.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Arama reklamları</li>
              <li>Görüntülü / ağ reklamları (uygun olduğunda)</li>
              <li>Anahtar kelime ve kitle hedefleme</li>
              <li>Kampanya yapısı ve bütçe yönetimi</li>
              <li>Reklam optimizasyonu ve trafik kazanımı</li>
              <li>Dönüşüm takibi ve performans analizi</li>
            </ul>
          </div>
        ),
      },
      {
        title: "VK Ads",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>
              VK Ads ile Rusya'daki sosyal kitlelere marka görünürlüğü, trafik ve lead generation odaklı kampanyalar yönetiyoruz.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Kitle hedefleme ve kampanya yönetimi</li>
              <li>Marka görünürlüğü ve trafik</li>
              <li>Lead generation</li>
              <li>Yeniden hedefleme (uygun ve desteklenen senaryolarda)</li>
              <li>Performans analizi</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Telegram Native Advertising",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>
              Telegram, Rusya'da güçlü bir iletişim ve içerik kanalıdır. Telegram Native Advertising kapsamında uygun kanal ve kitlelerin araştırılması, native reklam planı, içerik uyarlaması ve kampanya performansının değerlendirilmesini yönetiyoruz.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>İlgili Rus Telegram kanallarının araştırılması</li>
              <li>Native reklam ve kitle seçimi</li>
              <li>Kampanya planlama ve kreatif / içerik uyarlaması</li>
              <li>Trafik ve lead generation</li>
              <li>Kampanya performans değerlendirmesi</li>
            </ul>
            <p className="text-[14px] text-slate-500">
              Her kanala doğrudan erişim iddiasında bulunmuyoruz; hedefe uygun kanal ve kitleleri araştırarak ilerliyoruz.
            </p>
          </div>
        ),
      },
      {
        title: "SEO ve Organik Görünürlük",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>
              Organik görünürlük, ücretli trafiği tamamlayan uzun vadeli bir büyüme katmanıdır. Odak noktamız harici arama görünürlüğüdür; pazaryeri SEO'su gerektiğinde destekleyici olarak ele alınır.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Rusça SEO ve anahtar kelime araştırması</li>
              <li>Arama niyeti ve içerik stratejisi</li>
              <li>Teknik SEO (ihtiyaca göre)</li>
              <li>Landing page optimizasyonu</li>
              <li>Organik trafik geliştirme</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Performans ve Dönüşüm Optimizasyonu",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>
              Satışları artıran ve sürdürülebilir hale getiren bir performans sistemi kuruyoruz. Tüm süreçler veri ile yönetilir: hangi kanal daha iyi çalışıyor, trafik kalitesi nasıl, dönüşüm ve maliyet nasıl seyrediyor?
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Kampanya performansı ve trafik kalitesi</li>
              <li>Dönüşüm ve maliyet verimliliği</li>
              <li>Veri odaklı optimizasyon</li>
              <li>Landing page performansı</li>
              <li>Lead kalitesi ve satış performansına etki</li>
            </ul>
            <p>
              <strong>Amaç:</strong> Daha fazla trafik + daha fazla dönüşüm + daha yüksek kârlılık.
            </p>
          </div>
        ),
      },
      {
        title: "B2B ve Medikal Markalar İçin Dijital Talep",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>
              Dijital pazarlama; B2B alıcı farkındalığı, distribütör görünürlüğü, kurumsal site trafiği, lead generation ve medikal / sağlık markalarının Rus profesyonel kitlelerde görünürlüğünü destekleyebilir.
            </p>
            <p>
              Bu bölüm pazar araştırması veya medikal hizmet sayfası değildir; dijital kanalların bu iş modellerine nasıl katkı verdiğini açıklar.
            </p>
            <Link
              to={servicePath("pazar-arastirmasi-ve-strateji", false)}
              className="inline-flex text-accent-500 font-bold hover:underline"
            >
              B2B ve Pazar Geliştirme Çözümlerini İncele →
            </Link>
          </div>
        ),
      },
      {
        title: "Pazaryeri ve Dijital Pazarlama Birlikte Çalışmalı",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>
              Pazaryeri reklamları platform içi görünürlük yaratır. Yandex Ads, VK Ads ve Telegram ise pazaryeri dışından talep oluşturur. Birlikte farkındalık, trafik, ürün keşfi, satış ve marka büyütmeyi destekleyebilir.
            </p>
            <p>
              Pazaryeri operasyonu, ürün kartları, fiyatlandırma ve platform içi reklam yönetimi{" "}
              <Link to={servicePath("pazaryeri-yonetimi", false)} className="text-accent-500 font-semibold hover:underline">
                pazaryeri yönetimi
              </Link>{" "}
              sayfamızın konusudur. Bu sayfa harici dijital talep ve marka büyütmeye odaklanır.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Ürün görünürlüğü ve kampanya koordinasyonu</li>
              <li>Anahtar kelime ve bütçe disiplinini kanallar arası hizalama</li>
              <li>Operasyon büyüdükçe reklam yatırımlarını ölçekleme</li>
            </ul>
            <p className="text-[14px]">
              <Link to={servicePath("pazaryeri-yonetimi", false)} className="text-accent-500 font-semibold hover:underline">
                Pazaryeri Yönetimi Çözümlerini İncele →
              </Link>
              {" · "}
              <Link to={blogDetailPath("rusyada-e-ticaret-nasil-yapilir", "tr")} className="text-accent-500 font-semibold hover:underline">
                Rusya'da e-ticaret rehberi
              </Link>
            </p>
          </div>
        ),
      },
      {
        title: "Kimler İçin?",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>
              Bu hizmet; ürün portföyü, marka veya ticari potansiyeli olan kurumsal işletmeler içindir. Tek ürünle deneme yapan bireysel satıcılardan ziyade, Rusya'da sürdürülebilir dijital büyüme isteyen firmalara odaklanırız.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Yerleşik markalar ve üreticiler</li>
              <li>Rusya'ya giren veya halihazırda satan şirketler</li>
              <li>E-ticaret şirketleri</li>
              <li>B2B üreticiler</li>
              <li>Medikal / sağlık şirketleri</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Nasıl Çalışıyoruz?",
        content: (
          <div className="space-y-4 text-slate-600">
            {[
              { n: "01", t: "Ön Analiz", d: "Markanızı, ürünlerinizi ve Rusya'daki hedeflerinizi değerlendiriyoruz." },
              { n: "02", t: "Hedef Kitle ve Kanal", d: "Ürününüz ve hedefiniz için doğru dijital kanalları belirliyoruz." },
              { n: "03", t: "Kampanya ve İçerik", d: "Yandex, VK, Telegram ve organik kanallar için uygun yapı ve içerikleri hazırlıyoruz." },
              { n: "04", t: "Ölçüm ve Optimizasyon", d: "Trafik, dönüşüm, maliyet ve lead kalitesini takip ediyoruz." },
              { n: "05", t: "Sürekli Büyüme", d: "Veriye göre kampanyaları ve büyüme stratejisini sürekli geliştiriyoruz." },
            ].map((s) => (
              <div key={s.n} className="flex gap-4 border-b border-slate-100 last:border-0 pb-4 last:pb-0">
                <span className="font-extrabold text-accent-500 text-[18px] w-10 flex-shrink-0">{s.n}</span>
                <div>
                  <p className="font-bold text-primary-500">{s.t}</p>
                  <p>{s.d}</p>
                </div>
              </div>
            ))}
            <p className="text-[14px] pt-2 space-x-1">
              <Link to={servicePath("operasyon-kurulumu", false)} className="text-accent-500 font-semibold hover:underline">
                Operasyon kurulumu
              </Link>
              <span>·</span>
              <Link to={servicePath("sistem-ve-entegrasyon", false)} className="text-accent-500 font-semibold hover:underline">
                Sistem ve entegrasyon
              </Link>
              <span>·</span>
              <Link to={contactPath(false)} className="text-accent-500 font-semibold hover:underline">
                İletişim
              </Link>
            </p>
          </div>
        ),
      },
      {
        title: "Sonuç",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Rusya pazarında büyümek için yalnızca satış yapmak değil; talep, görünürlük ve performansı doğru yönetmek gerekir.</p>
            <p>
              <strong>Doğru strateji + doğru reklam + doğru veri = sürdürülebilir büyüme</strong>
            </p>
            <Link to={contactPath(false)} className="inline-flex text-accent-500 font-bold hover:underline">
              Ön Analiz Talep Et →
            </Link>
          </div>
        ),
      },
    ],
    faqs: [
      {
        q: "Rusya'da hangi dijital reklam kanallarını yönetiyorsunuz?",
        a: "Yandex Ads, VK Ads ve Telegram Native Advertising odaklı dijital kampanyalar yönetiyoruz; SEO ve performans optimizasyonu ile destekliyoruz.",
      },
      {
        q: "Yandex Ads yönetiyor musunuz?",
        a: "Evet. Arama ve uygun olduğunda ağ reklamları, anahtar kelime / kitle hedefleme, bütçe yönetimi, optimizasyon ve performans analiziyle Yandex Ads kampanyalarını yönetiyoruz.",
      },
      {
        q: "VK Ads ile reklam yapıyor musunuz?",
        a: "Evet. VK Ads üzerinden kitle hedefleme, kampanya yönetimi, görünürlük, trafik ve lead odaklı çalışmalar yürütüyoruz.",
      },
      {
        q: "Telegram Native Advertising nedir ve nasıl kullanılır?",
        a: "İlgili Telegram kanallarında native reklam yaklaşımıdır. Uygun kanal ve kitlelerin araştırılması, içerik uyarlaması, planlama ve performans değerlendirmesiyle yürütülür; her kanala doğrudan erişim iddiası yoktur.",
      },
      {
        q: "SEO çalışması yapıyor musunuz?",
        a: "Evet. Rusça SEO, anahtar kelime ve içerik stratejisi, landing page optimizasyonu ve organik görünürlük odaklı çalışmalar yapıyoruz.",
      },
      {
        q: "Dijital pazarlama e-ticaret satışlarını nasıl destekler?",
        a: "Harici trafik ve talep oluşturarak ürün keşfini, marka farkındalığını ve dönüşümü destekler; pazaryeri operasyonuyla birlikte çalıştığında satış büyümesini güçlendirebilir.",
      },
      {
        q: "B2B firmalar dijital pazarlamadan nasıl yararlanabilir?",
        a: "Kurumsal site trafiği, alıcı / distribütör farkındalığı ve lead generation için kullanılabilir. Pazar ve partner araştırması için B2B pazar geliştirme hizmetimizi de inceleyebilirsiniz.",
      },
      {
        q: "Pazaryeri reklamları ile Yandex / VK reklamları arasındaki fark nedir?",
        a: "Pazaryeri reklamları platform içinde görünürlük sağlar. Yandex Ads ve VK Ads ise pazaryeri dışından talep ve trafik üretir. İkisi farklı roller üstlenir ve birlikte planlanmalıdır.",
      },
      {
        q: "Kampanya performansı nasıl ölçülüyor?",
        a: "Trafik, dönüşüm, maliyet verimliliği, lead kalitesi ve satışa etkisi veri üzerinden takip edilir; kampanyalar buna göre optimize edilir. Garanti sonuç veya sabit oran iddiası sunmuyoruz.",
      },
      {
        q: "Reklam vermeden satış yapılır mı?",
        a: "Özellikle yeni markalarda organik görünürlük zaman alır. Çoğu senaryoda kontrollü reklam yatırımı, talep oluşturmak ve ölçülebilir büyüme için kritiktir.",
      },
      {
        q: "Ne kadar bütçe gerekir?",
        a: "Bütçe; ürün, kategori, hedef ve kanala göre değişir. Lansman döneminde daha yoğun, sonrasında stabilize edilen planlar öneririz. Sabit bir tutar vaat etmiyoruz.",
      },
    ],
  },

  "vergi-ve-finans": {
    icon: Building2,
    title: "Vergi ve Finansal Yapı",
    metaTitle: "Rusya E-ticaret Finans ve Vergi Yönetimi",
    metaDescription: "Sınır ötesi ticarette ruble tahsilatı, vergi planlaması ve Türkiye'ye para transfer süreçlerinde hukuki altyapı danışmanlığı.",
    description: "Sınırın ötesindeki paranın güvenli ve en az vergi yüküyle ülkeye geri getirilmesi, kârlı bir operasyonun anahtarıdır. Rusya'daki muhasebe ve Türkiye ile fon akışı süreçlerini tasarlıyoruz.",
    forWhom: (
       <ul className="list-disc pl-5 space-y-2 text-[15px]">
        <li>Risk almadan güvenli şekilde yurtdışından gelir elde etmek isteyenler</li>
        <li>Çift vergilendirmeden kaçınan kurumsal üreticiler ve markalar</li>
      </ul>
    ),
    contentSections: [
      {
        title: "Vergi ve Finansal Yapı",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Rusya e-ticaretinde doğru finansal ve vergi kurgusu operasyonun kârlılığını ve yasal güvenliğini belirler:</p>
            <ul className="list-disc pl-5 space-y-3">
              <li>Rusya içindeki en avantajlı vergi modelinin (OSN, USN) şirket yapısına göre seçimi</li>
              <li>Kâr marjlarının (Gümrük + Lojistik + Pazaryeri Komisyonu + Pazarlama) net şekilde hesaplanması</li>
              <li>E-ticaret muhasebesi hizmetleri (Z raporları, iade faturalandırmaları)</li>
              <li>Rusya'daki banka hesabında biriken fonların (Ruble, Yuan vb.) uluslararası yasal mevzuatlara uygun şekilde Türkiye'ye aktarımı</li>
              <li>Çift vergilendirmeyi önleme anlaşmalarına göre kurumsal vergi planlaması</li>
            </ul>
          </div>
        )
      }
    ],
    faqs: [
      { q: "Rusya pazar yerlerinin komisyonları ne kadar?", a: "Kategoriye göre değişmekle birlikte genelde %10 ile %25 arasında değişen hizmet ve lojistik komisyonları (FBO durumunda) yansır." },
      { q: "Paramı güvenle Türkiye'ye getirebilir miyim?", a: "Evet, aktif olarak kullanılan Ruble ve Yuan para birimi üzerinden işlem yapan bankalar aracılığıyla şirketinize ve yasal ihracatınıza bağlı olarak fonlama ve geri ödeme güvenle yapılmaktadır." }
    ]
  },

  "turkiyede-sirket-kurulumu": {
    icon: Landmark,
    title: "Türkiye'de İşinizi Kuruyor, Ticari Faaliyetinizi Başlatıyoruz",
    metaTitle: "Türkiye'de Şirket Kuruluşu ve Ticari Faaliyet Başlatma",
    metaDescription: "Türkiye'de şirket kurmak isteyen Rusya ve CIS bölgesindeki girişimcilere; kuruluş, muhasebe, banka hesabı, oturum ve ticari altyapı süreçlerinde uçtan uca destek sağlıyoruz.",
    description: "Türkiye'de şirket kurmak isteyen Rusya ve CIS bölgesindeki girişimcilere, yalnızca şirket kuruluşu değil; şirketin faaliyete geçmesi için gereken ticari ve operasyonel süreçlerde de destek sağlıyoruz.",
    forWhom: (
      <ul className="list-disc pl-5 space-y-2 text-[15px]">
        <li>Türkiye'de şirket kurmak isteyen Rusya ve CIS bölgesindeki girişimciler</li>
        <li>Şirket kuruluşundan ticari faaliyete geçişe kadar uçtan uca destek arayanlar</li>
        <li>Hazır şirket devralmayı değerlendiren yabancı yatırımcılar</li>
      </ul>
    ),
    contentSections: [
      {
        title: "Türkiye'de İş Kurarken Karşılaşılan Temel Sorunlar",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Şirket kuruluşundan muhasebe ve vergi süreçlerine, banka hesabı açılışından oturum süreçlerine ve ticari altyapının kurulmasına kadar ihtiyaç duyulan süreçleri tek bir yapı üzerinden koordine ediyoruz.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Şirket kuruluş sürecinin ve gerekli belgelerin bilinmemesi</li>
              <li>Doğru şirket yapısının belirlenememesi</li>
              <li>Bankacılık ve finansal süreçlerin yönetilmesi</li>
              <li>Muhasebe ve vergi yükümlülüklerinin takip edilmesi</li>
              <li>Oturum ve ilgili resmi süreçlerin koordinasyonu</li>
              <li>Şirket kurulduktan sonra ticari faaliyetin nasıl başlatılacağının bilinmemesi</li>
            </ul>
          </div>
        )
      },
      {
        title: "Şirket Kuruluşu",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Türkiye'de yeni bir şirket kurmak isteyen yabancı girişimciler için kuruluş sürecini planlıyor ve gerekli profesyonellerle koordineli şekilde yürütüyoruz.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Şirket türünün belirlenmesi</li>
              <li>Kuruluş süreci</li>
              <li>Gerekli belgelerin hazırlanması</li>
              <li>Resmi süreçlerin koordinasyonu</li>
            </ul>
          </div>
        )
      },
      {
        title: "Hazır Şirket Devri",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Sıfırdan şirket kurmak yerine mevcut bir şirketi devralmak isteyen girişimciler için uygun şirketlerin değerlendirilmesi ve devir sürecinin koordinasyonunda destek sağlıyoruz.</p>
            <p>Şirketin geçmişi, mevcut durumu ve devre ilişkin kontroller yapılmadan yalnızca "hazır şirket" satın alınmasını önermiyoruz.</p>
          </div>
        )
      },
      {
        title: "Muhasebe ve Vergi",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Şirket kurulduktan sonra devam eden muhasebe ve vergi süreçlerinin mali müşavir partnerimiz aracılığıyla düzenli şekilde yürütülmesini sağlıyoruz.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Muhasebe takibi</li>
              <li>Vergi süreçleri</li>
              <li>Beyanname süreçleri</li>
              <li>Finansal yükümlülüklerin takibi</li>
            </ul>
          </div>
        )
      },
      {
        title: "Banka Hesabı",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Türkiye'de ticari faaliyet gösterecek şirket için banka hesabı açılış sürecinde gerekli dokümantasyonun hazırlanması ve süreç koordinasyonunda destek sağlıyoruz.</p>
          </div>
        )
      },
      {
        title: "Oturum Süreçleri",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Türkiye'de yaşamak veya ticari faaliyet yürütmek isteyen yabancı girişimciler için uygun oturum süreçlerinde başvuru ve belge hazırlığı konusunda destek sağlıyoruz.</p>
          </div>
        )
      },
      {
        title: "Ticari Faaliyetin Kurulması",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Şirket kurulduktan sonra asıl hedef ticari faaliyetin başlamasıdır. Bu noktada Türkiye'deki e-ticaret ve dijital operasyon tecrübemiz devreye giriyor.</p>
            <p>İhtiyaca göre aşağıdaki ticari altyapıların kurulmasına da destek sağlayabiliyoruz:</p>
            <ul className="list-disc pl-5 space-y-2 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:space-y-2">
              <li>E-ticaret altyapısı</li>
              <li>Web sitesi</li>
              <li>Marketplace</li>
              <li>Dijital pazarlama</li>
              <li>Reklam yönetimi</li>
              <li>SEO</li>
              <li>Sosyal medya</li>
              <li>İçerik</li>
              <li>ERP ve entegrasyon</li>
              <li>Veri ve operasyon yönetimi</li>
            </ul>
          </div>
        )
      },
      {
        title: "Süreç Nasıl İlerliyor?",
        content: (
          <div className="flex flex-wrap items-center gap-2 text-[14px] font-semibold text-primary-600">
            {["İhtiyaç Analizi", "Şirket Modelinin Belirlenmesi", "Kuruluş veya Hazır Şirket Seçeneği", "Muhasebe & Vergi Yapısının Kurulması", "Banka Süreçleri", "Oturum Süreçleri", "Ticari Altyapının Kurulması", "Faaliyete Başlama"].map((step, i, arr) => (
              <span key={step} className="inline-flex items-center gap-2">
                <span className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-2">{step}</span>
                {i < arr.length - 1 && <span className="text-accent-500">→</span>}
              </span>
            ))}
          </div>
        )
      },
      {
        title: "Neden Biz?",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Türkiye'deki şirket kuruluş sürecini Rusya operasyonundan bağımsız görmüyoruz.</p>
            <p>Türkiye ve Rusya arasındaki ticaret, e-ticaret ve operasyon deneyimimiz sayesinde şirket kuruluşundan sonraki ticari süreci de planlayabiliyoruz.</p>
            <p><strong>Şirket kurmak ilk adımdır. Bizim hedefimiz şirketinizin gerçekten çalışmaya başlamasıdır.</strong></p>
          </div>
        )
      }
    ],
    faqs: []
  },

  "ithalat-ve-gumruk-yonetimi": {
    icon: PackageCheck,
    title: "Ürünlerinizin Rusya'ya Girişini ve Satışa Hazırlanmasını Yönetiyoruz",
    metaTitle: "Rusya'ya İthalat, Gümrük ve Ürün Uygunluk Yönetimi",
    metaDescription: "Ürünün Türkiye'den çıkışından Rusya'daki satışa hazır hale gelmesine kadar gümrük, EAC, Çestniy Znak ve etiketleme süreçlerini uçtan uca yönetiyoruz.",
    description: "Türkiye'den Rusya'ya ürün göndermek yalnızca lojistik operasyon değildir. Ürünün doğru şekilde sınıflandırılması, gerekli belgelerin hazırlanması, gümrük süreçlerinin yönetilmesi ve ürünün Rusya'da satışa hazır hale getirilmesi birbirine bağlı süreçlerdir; biz bu süreci Türkiye'den çıkıştan Rusya'daki satış operasyonuna kadar planlıyoruz.",
    forWhom: (
      <ul className="list-disc pl-5 space-y-2 text-[15px]">
        <li>Rusya'ya ürün göndermeyi planlayan ihracatçı ve üreticiler</li>
        <li>Gümrük ve uygunluk süreçlerini hatasız yönetmek isteyen markalar</li>
        <li>Rusya pazarına ilk kez ürün gönderecek firmalar</li>
      </ul>
    ),
    contentSections: [
      {
        title: "Rusya'ya Ürün Gönderirken Karşılaşılan Temel Sorunlar",
        content: (
          <div className="space-y-4 text-slate-600">
            <ul className="list-disc pl-5 space-y-2">
              <li>Ürünün doğru gümrük sınıflandırmasının yapılamaması</li>
              <li>Gerekli uygunluk belgelerinin önceden belirlenmemesi</li>
              <li>EAC gerekliliklerinin gözden kaçırılması</li>
              <li>Çestniy Znak kapsamının kontrol edilmemesi</li>
              <li>Etiketleme gerekliliklerinin son aşamada fark edilmesi</li>
              <li>Gümrük ve lojistik süreçlerinin birbirinden bağımsız planlanması</li>
              <li>İthalat maliyetlerinin doğru hesaplanmaması</li>
            </ul>
          </div>
        )
      },
      {
        title: "Ürün ve İthalat Analizi",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Ürünün Rusya'ya gönderilmesinden önce ürün kategorisi, teknik özellikleri ve ithalat sürecinde dikkate alınması gereken temel gereklilikleri değerlendiriyoruz.</p>
          </div>
        )
      },
      {
        title: "Gümrük ve İthalat Süreci",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Türkiye'den Rusya'ya yapılacak ticari sevkiyatın gümrük ve lojistik sürecinin planlanmasına destek oluyoruz.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Ticari evraklar</li>
              <li>Ürün bilgileri</li>
              <li>Gümrük süreci</li>
              <li>Sevkiyat koordinasyonu</li>
              <li>Rusya'daki teslim noktası</li>
            </ul>
            <p>Bu adımların tamamı birlikte planlanır.</p>
          </div>
        )
      },
      {
        title: "EAC ve Uygunluk",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Ürün grubunun ilgili uygunluk gerekliliklerini değerlendiriyor ve gerekli süreçlerin doğru şekilde planlanmasına destek oluyoruz.</p>
            <p>Amaç, ürün Rusya'ya ulaştıktan sonra belge veya uygunluk problemiyle karşılaşmamak.</p>
          </div>
        )
      },
      {
        title: "Çestniy Znak",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Çestniy Znak kapsamına giren ürünlerde işaretleme ve ürünlerin satışa hazırlanması sürecini planlıyoruz.</p>
          </div>
        )
      },
      {
        title: "Etiketleme ve Ürün Hazırlığı",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Ürünün Rusya pazarında satışa sunulabilmesi için gerekli ürün bilgileri, etiketleme ve marketplace gerekliliklerini birlikte değerlendiriyoruz.</p>
          </div>
        )
      },
      {
        title: "İthalat Sonrası Operasyon",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>İthalat bizim için sürecin sonu değil. Ürün Rusya'ya ulaştıktan sonra aşağıdaki zincirin nasıl çalışacağı önceden planlanır:</p>
            <div className="flex flex-wrap items-center gap-2 text-[14px] font-semibold text-primary-600">
              {["Gümrük", "Depo", "Marketplace", "Stok", "Satış"].map((step, i, arr) => (
                <span key={step} className="inline-flex items-center gap-2">
                  <span className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-2">{step}</span>
                  {i < arr.length - 1 && <span className="text-accent-500">→</span>}
                </span>
              ))}
            </div>
            <p>Bu sayede ithalat operasyonunu doğrudan satış ve lojistik operasyonuyla birleştiriyoruz.</p>
          </div>
        )
      },
      {
        title: "Süreç Nasıl İlerliyor?",
        content: (
          <div className="flex flex-wrap items-center gap-2 text-[14px] font-semibold text-primary-600">
            {["Ürün Analizi", "Ürün Sınıflandırması", "Uyum ve Belgelendirme Kontrolü", "İthalat & Gümrük Planı", "Sevkiyat", "Rusya Gümrüğü", "Depo / Lojistik Operasyonu", "Marketplace'e Hazırlık"].map((step, i, arr) => (
              <span key={step} className="inline-flex items-center gap-2">
                <span className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-2">{step}</span>
                {i < arr.length - 1 && <span className="text-accent-500">→</span>}
              </span>
            ))}
          </div>
        )
      },
      {
        title: "Neden Biz?",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Biz ithalatı yalnızca bir gümrük işlemi olarak görmüyoruz. Türkiye'den çıkan ürünün Rusya'da satışa hazır hale gelmesine kadar olan operasyonun tamamını değerlendiriyoruz.</p>
            <p>Bu yaklaşım, özellikle Rusya'ya ilk kez giren markalar için gereksiz maliyet ve operasyonel risklerin azaltılmasına yardımcı oluyor.</p>
          </div>
        )
      }
    ],
    faqs: []
  },

  "pazar-arastirmasi-ve-strateji": {
    icon: Target,
    title: "Rusya Pazarı İçin B2B ve Pazar Giriş Stratejisi",
    subtitle: "Pazar araştırması · Alıcı & distribütör araştırması · Medikal B2B · Ticari geliştirme",
    metaTitle: "Rusya B2B Pazar Araştırması ve Giriş Stratejisi | Ticari Geliştirme",
    metaDescription:
      "Rusya pazar araştırması, alıcı ve distribütör araştırması, rakip analizi ve B2B ticari geliştirme çalışmalarıyla markanız için doğru pazara giriş stratejisini oluşturuyoruz.",
    description: "Rusya'da doğru pazarı, doğru firmaları ve doğru ticari fırsatları belirliyoruz.",
    lead:
      "Pazar araştırması, rakip analizi, potansiyel alıcı ve distribütör araştırması, firma değerlendirmesi ve ticari geliştirme çalışmalarıyla Rusya pazarına daha kontrollü ve veriye dayalı şekilde hazırlanmanıza yardımcı oluyoruz.",
    ctaLabel: "Ön Analiz Talep Et",
    forWhom: (
      <ul className="list-disc pl-5 space-y-2 text-[15px]">
        <li>Yerleşik markalar ve üreticiler</li>
        <li>Ürün portföyü olan, Rusya'yı ciddi değerlendiren şirketler</li>
        <li>Distribütör / ithalatçı / B2B alıcı arayan firmalar</li>
        <li>Medikal ve sağlık üreticileri</li>
        <li>Yatırımdan önce pazarı ölçmek isteyen şirketler</li>
      </ul>
    ),
    contentSections: [
      {
        title: "Rusya'da Ticari Fırsatları Araştırıyoruz",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>
              Rusya'ya giriş yalnızca bir ürün kanalı bulmak değildir. İş modeline göre fırsat; distribütörler, ithalatçılar, toptancılar, bayiler, B2B alıcılar, uygun olduğunda kurumsal alıcılar, e-ticaret veya pazaryerleri üzerinden şekillenebilir.
            </p>
            <p>
              Doğru rota ürün, sektör ve ticari hedefe göre değişir.{" "}
              <Link to={servicesPath(false)} className="text-accent-500 font-semibold hover:underline">
                Hizmetlerimiz
              </Link>{" "}
              kapsamında araştırma → değerlendirme → hedefleme → ticari geliştirme mantığıyla ilerliyoruz; ham firma listesi satmıyoruz.
            </p>
          </div>
        ),
      },
      {
        title: "Ön Analiz ile Başlıyoruz",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>
              Daha geniş bir pazar geliştirme çalışmasından önce şirketinizi ve hazırlık seviyenizi değerlendiriyoruz. Amaç, Rusya'nın ticari potansiyel açısından gerçekten anlamlı olup olmadığını netleştirmektir.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Şirket / ürün profili ve ürün portföyü</li>
              <li>Hedef sektör ve Rusya hedefi</li>
              <li>Mevcut ihracat kapasitesi (varsa)</li>
              <li>Olası satış modeli ve pazar uyumu</li>
            </ul>
            <p>
              Bu adım; ticari potansiyeli ve hazırlık seviyesini anlamaya yarar. Tek ürünle “deneme” yaklaşımından ziyade, ciddi bir ticari hedefi olan firmalar için anlamlıdır.
            </p>
            <Link to={contactPath(false)} className="inline-flex text-accent-500 font-bold hover:underline">
              Ön Analiz Talep Et →
            </Link>
          </div>
        ),
      },
      {
        title: "Rusya Pazarına Girerken Karşılaşılan Temel Sorunlar",
        content: (
          <div className="space-y-4 text-slate-600">
            <ul className="list-disc pl-5 space-y-2">
              <li>Ürünün gerçek pazar potansiyelinin bilinmemesi</li>
              <li>Yanlış satış kanalı veya marketplace seçimi</li>
              <li>Rakiplerin ve fiyat seviyelerinin yeterince analiz edilmemesi</li>
              <li>Ürünün Rusya'daki konumlandırmasının yanlış yapılması</li>
              <li>Doğru ticari partner / distribütörün bilinmemesi</li>
              <li>İlk stok ve operasyon planının net olmaması</li>
              <li>Pazara giriş maliyetlerinin önceden hesaplanmaması</li>
              <li>Satış hedefleri ile lojistik planın birbirinden kopuk olması</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Rusya Pazar Araştırması",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>
              Pazar araştırması, hedef firma çalışmalarına zemin hazırlar. Ürününüzün Rusya'daki kategori yapısını, rakiplerini, fiyat dinamiklerini ve pazar fırsatlarını değerlendiriyoruz.
            </p>
            <p className="font-semibold text-primary-500">Pazar Analizi</p>
            <p>
              Kategori yapısı, talep dinamikleri, satış kanalları ve pazar fırsatlarını inceleyerek ürününüz için anlamlı bir çerçeve oluşturuyoruz. Tahmine dayalı değil; mümkün olduğunca ürün, kategori, rakip, fiyat ve satış verilerine dayalı ilerliyoruz.
            </p>
            <p className="font-semibold text-primary-500">Ürün ve Kategori Analizi</p>
            <p>
              Hangi ürünlerin pazara giriş için daha uygun olabileceğini değerlendiriyor; ürün gamının Rusya pazarına göre önceliklendirilmesine yardımcı oluyoruz.
            </p>
            <p className="text-[14px]">
              <Link to={blogDetailPath("rusyada-en-cok-satan-urunler-2026", "tr")} className="text-accent-500 font-semibold hover:underline">
                Rusya'da öne çıkan ürün grupları
              </Link>
              {" · "}
              <Link to={blogDetailPath("rusyada-e-ticaret-nasil-yapilir", "tr")} className="text-accent-500 font-semibold hover:underline">
                Rusya'da e-ticaret rehberi
              </Link>
            </p>
          </div>
        ),
      },
      {
        title: "Rakip Analizi",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Rakip markaları aşağıdaki kriterler üzerinden inceliyoruz:</p>
            <ul className="list-disc pl-5 space-y-2 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:space-y-2">
              <li>Fiyat</li>
              <li>Ürün çeşitliliği</li>
              <li>Satış performansı</li>
              <li>Değerlendirmeler</li>
              <li>İçerik</li>
              <li>Kampanyalar</li>
              <li>Marketplace konumlandırması</li>
              <li>Kanal / partner yapısı (görülebildiği ölçüde)</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Fiyatlandırma, Ticari Model ve Marketplace Seçimi",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>
              Ürünün Rusya'daki satış fiyatını yalnızca rakip fiyatlarına bakarak belirlemiyoruz. Ürün maliyeti, lojistik, marketplace maliyetleri, vergiler, reklam ve hedeflenen kârlılık birlikte değerlendirilerek ticari model oluşturuyoruz.
            </p>
            <p>
              Rusya'da her marketplace aynı müşteri kitlesine ve satış modeline sahip değildir. Ürününüz için Wildberries · Ozon · Yandex Market · Lamoda gibi kanalların hangilerinin öncelikli olabileceğini değerlendiriyoruz — B2B modeli de aynı çerçevede ele alınır.
            </p>
            <p className="font-semibold text-primary-500">İlk Stok ve Operasyon Planı</p>
            <p>Pazara giriş stratejisinin önemli bir parçası da ilk stok planıdır:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Ne kadar ürün gönderilmeli?</li>
              <li>Hangi ürünlerden başlanmalı?</li>
              <li>Stok nerede tutulmalı?</li>
              <li>Hangi kanala ne kadar ürün ayrılmalı?</li>
              <li>Satış hacmine göre stoklar nasıl yönetilmeli?</li>
            </ul>
            <p className="text-[14px] space-x-1">
              <Link to={servicePath("lojistik-ve-depo", false)} className="text-accent-500 font-semibold hover:underline">
                Lojistik ve depo
              </Link>
              <span>·</span>
              <Link to={servicePath("operasyon-kurulumu", false)} className="text-accent-500 font-semibold hover:underline">
                Operasyon kurulumu
              </Link>
            </p>
          </div>
        ),
      },
      {
        title: "Alıcı, Distribütör ve İthalatçı Araştırması",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>
              B2B pazar geliştirmede kritik adım; ilgili potansiyel firmaları araştırmak ve tanımlamaktır. Ham hacim değil, ürün ve sektöre uygunluk önceliklidir.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>B2B alıcılar</li>
              <li>Distribütörler</li>
              <li>İthalatçılar</li>
              <li>Toptancılar</li>
              <li>Bayiler</li>
              <li>Ticari partner adayları</li>
            </ul>
            <p>
              Sabit firma sayısı veya garanti distribütör taahhüdü vermiyoruz. Amaç; nitelikli adayları bulmak ve değerlendirmeye hazır hale getirmektir.
            </p>
          </div>
        ),
      },
      {
        title: "Potansiyel Partnerleri Değerlendiriyoruz",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>
              Potansiyel firmalar; sektör uyumu, ürün uyumluluğu, iş modeli, pazar varlığı, dağıtım yapısı, ürün portföyü ve ticari uygunluk gibi kriterlerle değerlendirilebilir.
            </p>
            <p className="text-[14px] text-slate-500">
              Gizli / yetkisiz şirket bilgilerine erişim iddiasında bulunmuyoruz. Değerlendirme, açık kaynaklar ve proje kapsamında erişilebilir ticari sinyaller üzerinden yapılır.
            </p>
          </div>
        ),
      },
      {
        title: "B2B Ticari Geliştirme",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>
              Çalışma araştırmayla sınırlı kalmak zorunda değildir. Proje kapsamına göre hedef firma önceliklendirme, ticari iletişim, uygun olduğunda partner outreach, ticari görüşmelerin organize edilmesine destek, fırsat takibi ve pazara giriş stratejisinin netleştirilmesi yönünde ilerleyebilir.
            </p>
            <p>
              Görüşme, satış veya distribütör anlaşması garantisi vermiyoruz. Destek; karşılıklı mutabakat ve proje kapsamına göre sağlanır.
            </p>
          </div>
        ),
      },
      {
        title: "Medikal ve Sağlık Sektöründe B2B Pazar Geliştirme",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>
              Medikal ve sağlık, B2B pazar geliştirmede stratejik bir uzmanlık alanımızdır. Ekibimizin 15+ yıllık sektör deneyimi ve Rusya pazar tecrübesi; medikal cihazlar, medikal ekipman, sarf malzemeleri, sağlık ürünleri ve uygun olduğunda hastane / kurumsal tedarik kanallarında ticari geliştirmeyi destekler.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Medikal cihazlar ve ekipman</li>
              <li>Medikal sarf malzemeleri</li>
              <li>Sağlık ürünleri</li>
              <li>Sektör distribütörleri / ithalatçıları / B2B alıcıları</li>
            </ul>
            <p>
              Medikal pazarda başarı; sektör yapısı, ilgili firmalar, ürün konumlandırması, ticari kanallar ve regülasyon bağlamının anlaşılmasını gerektirir. Araştırma ve koordinasyon sağlanabilir; resmi sertifikasyon / hukuki temsil / garanti onay veya hastane–kamu alımı erişimi iddiasında bulunmuyoruz.
            </p>
          </div>
        ),
      },
      {
        title: "E-Ticaret ve B2B Kanalları Birlikte Değerlendiriyoruz",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>
              Ürün ve iş modeline göre Rusya girişi B2B, e-ticaret, pazaryerleri, distribütörler veya hibrit modeller üzerinden olabilir. Araştırma aşamasında bu seçenekleri birlikte değerlendiriyoruz.
            </p>
            <Link
              to={servicePath("pazaryeri-yonetimi", false)}
              className="inline-flex text-accent-500 font-bold hover:underline"
            >
              Rusya'da Pazaryeri Yönetimi →
            </Link>
          </div>
        ),
      },
      {
        title: "Ticari Geliştirmeyi Dijital Kanallarla Destekliyoruz",
        content: (
          <div className="space-y-3 text-slate-600">
            <p>
              Uygun olduğunda Rusya dijital kanalları; B2B görünürlük, alıcı ve distribütör farkındalığı, kurumsal site trafiği ve lead generation için ticari geliştirmeyi destekleyebilir (Yandex Ads, VK Ads, Telegram Native Advertising).
            </p>
            <p className="text-[14px]">
              Bu sayfanın odağı B2B ve medikal pazar geliştirmedir. Dijital pazarlama ayrı bir hizmet alanıdır:{" "}
              <Link to={servicePath("marka-buyutme", false)} className="text-accent-500 font-semibold hover:underline">
                Rusya'da Dijital Pazarlama
              </Link>
            </p>
          </div>
        ),
      },
      {
        title: "Pazara Giriş Stratejisi Nasıl Oluşturuluyor?",
        content: (
          <div className="space-y-4 text-slate-600">
            <div className="flex flex-wrap items-center gap-2 text-[14px] font-semibold text-primary-600">
              {[
                "Ürün Analizi",
                "Rusya Pazar Analizi",
                "Kategori & Rakip Analizi",
                "Kanal / Partner Seçimi",
                "Fiyat & Kârlılık Modeli",
                "İlk Ürün Gamı",
                "Stok & Lojistik Planı",
                "Pazara Giriş",
                "Veriye Göre Optimizasyon",
              ].map((step, i, arr) => (
                <span key={step} className="inline-flex items-center gap-2">
                  <span className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-2">{step}</span>
                  {i < arr.length - 1 && <span className="text-accent-500">→</span>}
                </span>
              ))}
            </div>
            <p>
              Araştırmayı yalnızca rapor olarak bırakmıyoruz; sonucunu operasyona bağlıyoruz: Marketplace · Lojistik · Stok · Fiyat · Pazarlama · Satış. İyi bir pazar araştırmasının değeri, uygulanabilir bir giriş planına dönüşmesidir.
            </p>
            <p className="text-[14px] space-x-1">
              <Link to={servicePath("turkiyede-sirket-kurulumu", false)} className="text-accent-500 font-semibold hover:underline">
                Türkiye'de şirket kurulumu
              </Link>
              <span>·</span>
              <Link to={contactPath(false)} className="text-accent-500 font-semibold hover:underline">
                İletişim
              </Link>
            </p>
          </div>
        ),
      },
      {
        title: "Kimler İçin?",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>
              Bu hizmet; ürün portföyü, üretim kapasitesi, marka veya net ticari hedefi olan şirketler içindir. Ticari potansiyeli ve hazırlık seviyesi düşük, tek ürünle “deneme” yaklaşımı taşıyan taleplerden ziyade, Rusya'yı ciddi değerlendiren firmalara odaklanırız.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Yerleşik markalar ve üreticiler</li>
              <li>Ürün portföyü olan şirketler</li>
              <li>Distribütör / ithalatçı / B2B alıcı arayan firmalar</li>
              <li>B2B ve medikal / sağlık üreticileri</li>
              <li>Yatırımdan önce Rusya'yı değerlendiren şirketler</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Nasıl Çalışıyoruz?",
        content: (
          <div className="space-y-4 text-slate-600">
            {[
              { n: "01", t: "Ön Analiz", d: "Şirketinizi, ürünlerinizi ve Rusya hedefinizi değerlendiriyoruz." },
              { n: "02", t: "Pazar Araştırması", d: "Ürün, kategori, rakip, fiyat ve pazar yapısını inceliyoruz." },
              { n: "03", t: "Hedef Firma Araştırması", d: "Potansiyel alıcı, distribütör, ithalatçı ve ticari partnerleri araştırıyoruz." },
              { n: "04", t: "Değerlendirme ve Ticari Geliştirme", d: "Uygun firmaları önceliklendiriyor ve proje kapsamına göre ticari iletişim sürecini destekliyoruz." },
              { n: "05", t: "Pazara Giriş Stratejisi", d: "Elde edilen verilerle uygulanabilir bir Rusya pazar giriş modeli oluşturuyoruz." },
            ].map((s) => (
              <div key={s.n} className="flex gap-4 border-b border-slate-100 last:border-0 pb-4 last:pb-0">
                <span className="font-extrabold text-accent-500 text-[18px] w-10 flex-shrink-0">{s.n}</span>
                <div>
                  <p className="font-bold text-primary-500">{s.t}</p>
                  <p>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        ),
      },
    ],
    faqs: [
      {
        q: "Rusya'da B2B pazar araştırması yapıyor musunuz?",
        a: "Evet. Pazar, kategori, rakip ve kanal analizinin yanında B2B ticari fırsatları değerlendiriyor; araştırma → değerlendirme → ticari geliştirme mantığıyla çalışıyoruz.",
      },
      {
        q: "Distribütör ve ithalatçı araştırması yapıyor musunuz?",
        a: "Evet. Ürün ve sektöre uygun potansiyel alıcı, distribütör, ithalatçı, toptancı ve bayi adaylarını araştırıyoruz. Sabit firma sayısı veya garanti sonuç taahhüdü vermiyoruz.",
      },
      {
        q: "Potansiyel firmaları nasıl değerlendiriyorsunuz?",
        a: "Sektör uyumu, ürün uyumluluğu, iş modeli, pazar varlığı, dağıtım yapısı ve ticari uygunluk gibi kriterlerle değerlendiriyoruz. Gizli bilgilere erişim iddiasında bulunmuyoruz.",
      },
      {
        q: "Rusya pazarına girmeden önce neden ön analiz yapılmalı?",
        a: "Ön analiz; ticari potansiyeli, hazırlık seviyesini ve doğru satış modelini netleştirir. Yanlış kanal veya erken yatırımdan kaçınmaya yardımcı olur.",
      },
      {
        q: "Medikal firmalar için Rusya pazar araştırması yapıyor musunuz?",
        a: "Evet. Medikal cihaz, ekipman, sarf ve sağlık ürünlerinde B2B pazar geliştirme ve partner araştırması yapıyoruz. Resmi sertifikasyon veya hastane/kamu erişimi garantisi vermiyoruz.",
      },
      {
        q: "B2B araştırması ile pazar araştırması arasındaki fark nedir?",
        a: "Pazar araştırması kategori, rakip, fiyat ve kanal yapısını inceler. B2B araştırması ise hedef firmaları (alıcı, distribütör, ithalatçı vb.) tanımlar ve değerlendirmeye alır. İkisi birlikte çalışır.",
      },
      {
        q: "Ticari görüşmelerin organize edilmesine destek oluyor musunuz?",
        a: "Proje kapsamına ve karşılıklı mutabakata göre ticari iletişime ve uygun olduğunda görüşmelerin organize edilmesine destek verebiliriz. Görüşme veya anlaşma garantisi yoktur.",
      },
      {
        q: "E-ticaret ve B2B satış modeli birlikte değerlendirilebilir mi?",
        a: "Evet. Ürüne göre B2B, e-ticaret, pazaryeri veya hibrit modeller birlikte değerlendirilir. Operasyonel pazaryeri yönetimi için ilgili hizmet sayfamıza bakabilirsiniz.",
      },
    ],
  },
};
