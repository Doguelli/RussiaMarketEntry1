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
    title: "Wildberries & Lamoda Satışlarınızı Yönetiyor ve Büyütüyoruz",
    metaTitle: "Wildberries ve Lamoda Satış Yönetimi | Rusya Pazarı",
    metaDescription: "Rusya’nın en büyük pazaryerlerinde satış süreçlerinizi uçtan uca yönetiyor, performansınızı artırıyor ve markanızı ölçekliyoruz.",
    description: "Rusya’nın en büyük pazaryerlerinde satış süreçlerinizi uçtan uca yönetiyor, performansınızı artırıyor ve markanızı ölçekliyoruz.",
    forWhom: (
      <ul className="list-disc pl-5 space-y-2 text-[15px]">
        <li>Rusya pazarında aktif satış yapmak isteyen markalar</li>
        <li>Wildberries veya Lamoda mağazası olan ancak büyüyemeyenler</li>
        <li>Satış süreçlerini profesyonel şekilde yönetmek isteyen firmalar</li>
      </ul>
    ),
    contentSections: [
      {
        title: "Pazaryerinde satış yapmak neden zor?",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Wildberries ve Lamoda’da satış yapmak yüksek potansiyele sahiptir, ancak doğru yönetilmediğinde ciddi kayıplara neden olabilir:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Yanlış fiyatlandırma ve düşük kâr marjı</li>
              <li>Ürünlerin görünür olmaması</li>
              <li>Kampanya ve reklam yönetiminde hatalar</li>
              <li>Stok ve operasyon uyumsuzluğu</li>
            </ul>
            <p>Birçok marka mağaza açmasına rağmen sürdürülebilir satış elde edemez.</p>
          </div>
        )
      },
      {
        title: "Biz ne yapıyoruz?",
        content: (
          <div className="space-y-4 text-slate-600">
            <p className="font-semibold text-primary-500">Sadece ürün yüklemiyoruz.</p>
            <p>Satış performansınızı artıran bir sistem kuruyoruz ve yönetiyoruz.<br/>Sizin adınıza:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Ürünlerinizi optimize ediyoruz</li>
              <li>Doğru fiyatlandırma stratejisi oluşturuyoruz</li>
              <li>Kampanya ve reklamları yönetiyoruz</li>
              <li>Satış performansını sürekli analiz ediyoruz</li>
            </ul>
            <p><strong>Amaç:</strong> Daha fazla satış, daha yüksek kârlılık</p>
          </div>
        )
      },
      {
        title: "Satış Yönetimi Kapsamı",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Operasyonel ve stratejik olarak tüm süreci yönetiyoruz:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Ürün yükleme ve içerik optimizasyonu</li>
              <li>Fiyatlandırma ve rekabet analizi</li>
              <li>Kampanya yönetimi</li>
              <li>Reklam ve görünürlük artırma</li>
              <li>Stok takibi ve planlama</li>
              <li>Performans raporlama</li>
            </ul>
          </div>
        )
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
        )
      },
      {
        title: "Operasyon Entegrasyonu",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Satış süreçleri operasyon altyapınızla entegre çalışır:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Insales entegrasyonu</li>
              <li>Stok senkronizasyonu</li>
              <li>Sipariş yönetimi</li>
              <li>Merkezi kontrol paneli</li>
            </ul>
            <p><strong>Sonuç:</strong> Manuel süreçler yerine sistemli ve ölçeklenebilir bir yapı</p>
          </div>
        )
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
          </div>
        )
      }
    ],
    faqs: [
      { q: "Wildberries satış yönetimi nasıl yapılır?", a: "Sadece ürün listelemesi değil, SEO ürün açıklamaları, fiyat rekabet analizleri ve etkili kampanya kurgularıyla birlikte yapılır." },
      { q: "Lamoda’da satış yapmak zor mu?", a: "Lamoda'nın katalog kabul standartları daha katıdır, marka imajına çok önem verilir. Optimizasyonla doğru bir profil yaratarak satışları yüksek seviyelere çıkarabilirsiniz." },
      { q: "Reklam yönetimi gerekli mi?", a: "Kesinlikle evet. Rekabette öne çıkabilmek ve organik aramaları artırmak platform içi reklamlar olmazsa olmazdır." },
      { q: "Satışlar ne kadar sürede artar?", a: "Hesabın durumuna ve sektöre göre değişmekle birlikte, algoritmaların yapılan optimizasyonlara tepki vermesiyle birlikte 2 ile 4 hafta içinde artış gözlemlenmeye başlar." }
    ]
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
    title: "Marka Büyütme ve Performans Yönetimi",
    metaTitle: "Rusya E-Ticaret Pazarlama & Marka Büyütme",
    metaDescription: "Biz, markanızı sadece pazara sokmuyor; satışlarınızı veri odaklı stratejilerle büyütüyoruz.",
    description: "Rusya pazarında satış yapmak kadar, satışları sürdürülebilir şekilde büyütmek de kritik bir süreçtir. Markanızı veri odaklı stratejilerle destekliyoruz.",
    forWhom: (
      <ul className="list-disc pl-5 space-y-2 text-[15px]">
        <li>Belli bir satış ivmesi yakalamış ama bunu 2x, 5x yapmak isteyen markalar</li>
        <li>Satış potansiyelini artırmak ve yeni hedef kitleye ulaşmak isteyen e-ticaret girişimleri</li>
      </ul>
    ),
    contentSections: [
      {
        title: "Neden performans yönetimi gerekli?",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Pazaryerlerinde ürün yüklemek tek başına yeterli değildir.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Ürünlerin görünür olması gerekir</li>
              <li>Doğru hedef kitleye ulaşması gerekir</li>
              <li>Rekabet içinde öne çıkması gerekir</li>
            </ul>
            <p>Doğru yönetilmeyen hesaplar, potansiyelinin çok altında satış yapar.</p>
          </div>
        )
      },
      {
        title: "Biz ne yapıyoruz?",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Satışları artıran ve sürdürülebilir hale getiren bir performans sistemi kuruyoruz:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Pazaryeri reklam yönetimi</li>
              <li>Ürün görünürlük optimizasyonu</li>
              <li>Kampanya planlama</li>
              <li>Veri analizi ve sürekli optimizasyon</li>
            </ul>
            <p><strong>Amaç:</strong> Daha fazla trafik + daha fazla dönüşüm + daha yüksek kârlılık</p>
          </div>
        )
      },
      {
        title: "Pazaryeri reklam yönetimi",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Rusya’daki pazaryerlerinde reklam süreçlerini profesyonel şekilde yönetiyoruz:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Ürün bazlı reklam stratejileri</li>
              <li>Anahtar kelime optimizasyonu</li>
              <li>Reklam bütçesi yönetimi</li>
              <li>Performans takibi ve iyileştirme</li>
            </ul>
          </div>
        )
      },
      {
        title: "Ürün ve kategori optimizasyonu",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Satış performansı, ürünlerin doğru konumlandırılması ile doğrudan ilişkilidir.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Ürün başlık ve açıklama optimizasyonu</li>
              <li>Kategori ve rekabet analizi</li>
              <li>Fiyatlandırma stratejisi</li>
            </ul>
          </div>
        )
      },
      {
        title: "Veri odaklı karar alma",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Tüm süreçler veri ile yönetilir:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Hangi ürün daha çok satıyor?</li>
              <li>Hangi fiyat daha kârlı?</li>
              <li>Hangi reklam daha iyi performans gösteriyor?</li>
            </ul>
            <p>Bu veriler doğrultusunda sürekli iyileştirme yapılır.</p>
          </div>
        )
      },
      {
        title: "Büyüme stratejisi & Entegrasyon",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Operasyon büyüdükçe sistem de büyür:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Ürün portföyünün genişletilmesi</li>
              <li>Yeni kategori girişleri</li>
              <li>Reklam yatırımlarının artırılması</li>
            </ul>
            <p>Ayrıca stok ve lojistik entegrasyonu sayesinde bu büyüme tüm operasyona uyum sağlar.</p>
          </div>
        )
      },
      {
        title: "Sonuç",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Rusya pazarında büyümek için sadece satış yapmak değil, satışları doğru yönetmek gerekir.</p>
            <p><strong>Doğru strateji + doğru reklam + doğru veri = sürdürülebilir büyüme</strong></p>
          </div>
        )
      }
    ],
    faqs: [
      { q: "Reklam vermeden satış yapılır mı?", a: "Çok düşük bir ihtimaldir, özellikle yeni marka/mağazalarda algoritmaya sinyal göndermek için bir miktar reklam veya ivme şarttır." },
      { q: "Pazaryeri reklamları nasıl çalışır?", a: "Kategori aramalarında veya doğrudan anahtar kelimelerde üst sıralarda gösterim satın alınarak çalışır, bu da organik büyümeyi de tetikler." },
      { q: "Ne kadar bütçe gerekir?", a: "Lansman döneminde yüksek ve sonrasında daha stabil ve optime edilmiş bütçeler (cironun ufak bir oranı) kullanılmalıdır." },
      { q: "Satışlar ne kadar sürede artar?", a: "Optimizasyon adımları atıldıktan hemen sonra organik sıçrama yaşanabilir, genel anlamda reklam tepkimesi ilk ay içinde belli olur." }
    ]
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
    title: "Rusya Pazarına Girmeden Önce Doğru Stratejiyi Oluşturuyoruz",
    metaTitle: "Rusya Pazar Araştırması ve Giriş Stratejisi Danışmanlığı",
    metaDescription: "Ürün, kategori, rakip ve fiyat verilerine dayalı analizlerle Rusya pazarına doğru marketplace ve giriş stratejisiyle girmenizi sağlıyoruz.",
    description: "Her ürün Rusya'da aynı şekilde satılmaz. Rusya pazarına giriş kararını tahminlerle değil, mümkün olduğunca ürün, kategori, rakip, fiyat ve satış verileri üzerinden planlıyoruz.",
    forWhom: (
      <ul className="list-disc pl-5 space-y-2 text-[15px]">
        <li>Rusya pazarına girmeden önce doğru stratejiyi oluşturmak isteyen markalar</li>
        <li>Doğru marketplace ve ürün gamını belirlemek isteyen üreticiler</li>
        <li>Fiyatlandırma ve ilk stok planını veriye dayalı kurmak isteyen firmalar</li>
      </ul>
    ),
    contentSections: [
      {
        title: "Rusya Pazarına Girerken Karşılaşılan Temel Sorunlar",
        content: (
          <div className="space-y-4 text-slate-600">
            <ul className="list-disc pl-5 space-y-2">
              <li>Ürünün gerçek pazar potansiyelinin bilinmemesi</li>
              <li>Yanlış marketplace seçimi</li>
              <li>Rakiplerin ve fiyat seviyelerinin yeterince analiz edilmemesi</li>
              <li>Ürünün Rusya'daki konumlandırmasının yanlış yapılması</li>
              <li>İlk stok miktarının doğru belirlenememesi</li>
              <li>Pazara giriş maliyetlerinin önceden hesaplanmaması</li>
              <li>Satış hedefleri ile lojistik planın birbirinden kopuk olması</li>
            </ul>
          </div>
        )
      },
      {
        title: "Pazar Analizi",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Ürününüzün Rusya'daki kategori yapısını, rakiplerini ve pazar fırsatlarını değerlendiriyoruz.</p>
          </div>
        )
      },
      {
        title: "Ürün ve Kategori Analizi",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Hangi ürünlerin pazara giriş için daha uygun olabileceğini değerlendiriyor; ürün gamının Rusya pazarına göre önceliklendirilmesine yardımcı oluyoruz.</p>
          </div>
        )
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
            </ul>
          </div>
        )
      },
      {
        title: "Marketplace Seçimi",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Rusya'da her marketplace aynı müşteri kitlesine ve satış modeline sahip değildir.</p>
            <p className="font-semibold text-primary-500">Ürününüz için Wildberries · Ozon · Lamoda gibi kanalların hangilerinin öncelikli olması gerektiğini değerlendiriyoruz.</p>
          </div>
        )
      },
      {
        title: "Fiyatlandırma ve Ticari Model",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Ürünün Rusya'daki satış fiyatını yalnızca rakip fiyatlarına bakarak belirlemiyoruz.</p>
            <p>Ürün maliyeti, lojistik, marketplace maliyetleri, vergiler, reklam ve hedeflenen kârlılık birlikte değerlendirilerek ticari model oluşturuyoruz.</p>
          </div>
        )
      },
      {
        title: "İlk Stok ve Operasyon Planı",
        content: (
          <div className="space-y-4 text-slate-600">
            <p>Pazara giriş stratejisinin önemli bir parçası da ilk stok planıdır. Bu soruları giriş stratejisinin bir parçası olarak ele alıyoruz:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Ne kadar ürün gönderilmeli?</li>
              <li>Hangi ürünlerden başlanmalı?</li>
              <li>Stok nerede tutulmalı?</li>
              <li>Hangi marketplace'e ne kadar ürün gönderilmeli?</li>
              <li>Satış hacmine göre stoklar nasıl transfer edilmeli?</li>
            </ul>
          </div>
        )
      },
      {
        title: "Pazara Giriş Stratejisi Nasıl Oluşturuluyor?",
        content: (
          <div className="flex flex-wrap items-center gap-2 text-[14px] font-semibold text-primary-600">
            {["Ürün Analizi", "Rusya Pazar Analizi", "Kategori & Rakip Analizi", "Marketplace Seçimi", "Fiyat & Kârlılık Modeli", "İlk Ürün Gamı", "Stok & Lojistik Planı", "Pazara Giriş", "Satış Verilerine Göre Optimizasyon"].map((step, i, arr) => (
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
            <p>Biz pazar araştırmasını yalnızca bir rapor olarak bırakmıyoruz. Araştırmanın sonucunu operasyona bağlıyoruz:</p>
            <div className="flex flex-wrap items-center gap-2 text-[14px] font-semibold text-primary-600">
              {["Marketplace", "Lojistik", "Stok", "Fiyat", "Pazarlama", "Satış"].map((step, i, arr) => (
                <span key={step} className="inline-flex items-center gap-2">
                  <span className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-2">{step}</span>
                  {i < arr.length - 1 && <span className="text-accent-500">→</span>}
                </span>
              ))}
            </div>
            <p><strong>Çünkü iyi bir pazar araştırmasının gerçek değeri, uygulanabilir bir giriş planına dönüşmesidir.</strong></p>
          </div>
        )
      }
    ],
    faqs: []
  }
};
