import { ReactNode } from "react";

export interface BlogPost {
  slug: string;
  metaTitle: string;
  title: string;
  excerpt: string;
  content: ReactNode;
  imageUrl: string;
  publishedAt: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "rusyada-e-ticaret-nasil-yapilir",
    metaTitle: "Rusya’da E-Ticaret Nasıl Yapılır? 2026 Güncel Rehber",
    title: "Rusya’da E-Ticaret Nasıl Yapılır? 2026 Güncel Rehber",
    excerpt: "Rusya, 140 milyondan fazla nüfusu ve hızla büyüyen dijital ticaret hacmiyle Türk markaları ve üreticiler için dünyanın en önemli e-ihracat pazarlarından biridir.",
    publishedAt: "18 Mayıs 2026",
    readTime: "4 dk okuma",
    imageUrl: "/blog2.jpeg",
    content: (
      <div className="space-y-8">
        <p className="text-lg leading-relaxed text-slate-600">Rusya, 140 milyondan fazla nüfusu ve hızla büyüyen dijital ticaret hacmiyle Türk markaları ve üreticiler için dünyanın en önemli e-ihracat pazarlarından biridir. Wildberries, Ozon ve Lamoda gibi dev platformlar sayesinde fiziksel mağaza açmadan milyonlarca müşteriye ulaşmak mümkündür.</p>
        <p className="text-lg leading-relaxed text-slate-600">Bu rehberde, Rusya’da e-ticaret yapmanın tüm aşamalarını adım adım ele alıyoruz.</p>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">Rusya E-Ticaret Pazarı Neden Önemli?</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li><strong className="text-slate-800">140+ milyon</strong> nüfus</li>
            <li><strong className="text-slate-800">300 milyondan fazla</strong> aylık pazaryeri trafiği</li>
            <li>Türk ürünlerine yüksek talep</li>
            <li>Tekstil, kozmetik, ev ürünleri ve lifestyle kategorilerinde güçlü büyüme</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">Rusya’da Satış Yapabileceğiniz Başlıca Platformlar</h2>
          
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-4">
            <h3 className="text-xl font-bold text-accent-500 mb-2">Wildberries</h3>
            <p className="text-slate-600">Rusya’nın en büyük pazaryeridir. Moda, ayakkabı, aksesuar ve lifestyle ürünlerinde güçlüdür.</p>
          </div>
          
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-4">
            <h3 className="text-xl font-bold text-accent-500 mb-2">Ozon</h3>
            <p className="text-slate-600">Rusya’nın Amazon’u olarak bilinir ve çok kategorili satış için uygundur.</p>
          </div>
          
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h3 className="text-xl font-bold text-accent-500 mb-2">Lamoda</h3>
            <p className="text-slate-600">Premium moda ve seçici marka kabul süreciyle öne çıkar.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          <div className="bg-primary-50 p-8 rounded-3xl">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">Rusya’ya Giriş İçin Gerekenler</h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-700"><span className="w-2 h-2 rounded-full bg-accent-500" /> Doğru ürün seçimi</li>
              <li className="flex items-center gap-3 text-slate-700"><span className="w-2 h-2 rounded-full bg-accent-500" /> GTİP ve gümrük planlaması</li>
              <li className="flex items-center gap-3 text-slate-700"><span className="w-2 h-2 rounded-full bg-accent-500" /> Çestniy Znak uyumluluğu</li>
              <li className="flex items-center gap-3 text-slate-700"><span className="w-2 h-2 rounded-full bg-accent-500" /> Lojistik ve depo organizasyonu</li>
              <li className="flex items-center gap-3 text-slate-700"><span className="w-2 h-2 rounded-full bg-accent-500" /> Pazaryeri kurulumu</li>
              <li className="flex items-center gap-3 text-slate-700"><span className="w-2 h-2 rounded-full bg-accent-500" /> Yerel operasyon yönetimi</li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-primary-500 mb-3">Konsinye Model Nedir?</h2>
              <p className="text-slate-600 leading-relaxed">Konsinye modelde üretici ürünleri gönderir, satış oldukça ödeme alır. Bu model pazara düşük riskle giriş sağlar.</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-primary-500 mb-3">Kârlılık Modeli</h2>
              <p className="text-slate-600 mb-3">Tipik maliyet yapısı:</p>
              <ul className="list-disc pl-6 space-y-1 text-slate-600">
                <li>Pazaryeri komisyonu: <strong className="text-accent-500">%15–25</strong></li>
                <li>Lojistik ve fulfillment: <strong className="text-accent-500">%15–20</strong></li>
                <li>Reklam giderleri: <strong className="text-accent-500">%3–8</strong></li>
                <li>Vergi: Kâr üzerinden <strong className="text-accent-500">%20</strong></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">Ne Kadar Sürede Satış Başlar?</h2>
          <p className="text-lg leading-relaxed text-slate-600">Doğru hazırlık ile ilk satışlar birkaç hafta içinde başlayabilir. Ölçeklenebilir büyüme genellikle ilk 3–6 ay içinde şekillenir.</p>
        </div>

        <div className="bg-slate-900 text-white p-8 rounded-3xl mt-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500 rounded-full blur-[80px] opacity-20 -mr-20 -mt-20 pointer-events-none" />
          <h2 className="text-2xl font-bold mb-4 relative z-10 text-white">Sonuç</h2>
          <p className="text-lg leading-relaxed text-slate-300 relative z-10">Rusya pazarı, doğru operasyon modeli ile markalar ve üreticiler için önemli bir büyüme fırsatıdır. Ancak sürdürülebilir başarı için güçlü bir lojistik, finans ve operasyon altyapısı gerekir.</p>
        </div>
      </div>
    )
  },
  {
    slug: "wildberriesde-satis-yapmak",
    metaTitle: "Wildberries’de Satış Yapmak: Türk Markaları İçin Rehber",
    title: "Wildberries’de Satış Yapmak: Türk Markaları İçin Adım Adım Rehber",
    excerpt: "Wildberries, Rusya’nın en büyük pazaryeridir ve aylık yüz milyonlarca ziyaretçiyle markalara dev bir satış potansiyeli sunar.",
    publishedAt: "17 Mayıs 2026",
    readTime: "3 dk okuma",
    imageUrl: "/blog1.jpeg",
    content: (
      <div className="space-y-8">
        <p className="text-lg leading-relaxed text-slate-600">Wildberries, Rusya’nın en büyük pazaryeridir ve aylık yüz milyonlarca ziyaretçiyle markalara dev bir satış potansiyeli sunar.</p>
        <p className="text-lg leading-relaxed text-slate-600">Bu rehberde Wildberries’de satış sürecini adım adım anlatıyoruz.</p>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">Wildberries Nedir?</h2>
          <p className="text-slate-600 leading-relaxed text-lg">Wildberries, Rusya ve çevre ülkelerde faaliyet gösteren, moda ve tüketim ürünlerinde lider konumdaki bir pazaryeridir.</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">Kimler Satış Yapabilir?</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-600">
            <li className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100"><span className="w-2 h-2 rounded-full bg-primary-500" /> Tekstil markaları</li>
            <li className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100"><span className="w-2 h-2 rounded-full bg-primary-500" /> Kozmetik üreticileri</li>
            <li className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100"><span className="w-2 h-2 rounded-full bg-primary-500" /> Ayakkabı ve aksesuar firmaları</li>
            <li className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100"><span className="w-2 h-2 rounded-full bg-primary-500" /> Ev tekstili üreticileri</li>
            <li className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100"><span className="w-2 h-2 rounded-full bg-primary-500" /> Oyuncak ve lifestyle markaları</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-6 border-b border-slate-100 pb-2">Satış Süreci Adımları</h2>
          
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 shrink-0 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-1">Ürün Analizi</h3>
              <p className="text-slate-600">Talep gören ürünler, kategori hacimleri ve rekabetçi fiyatlar belirlenir.</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 shrink-0 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-1">Barkod ve Çestniy Znak</h3>
              <p className="text-slate-600">Gerekli etiketleme hazırlanır ve yasal zorunluluklara uyumlu hale getirilir.</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 shrink-0 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-1">Lojistik Planlama</h3>
              <p className="text-slate-600">Ürünler Rusya’daki Wildberries FBO depolarına gönderilir.</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 shrink-0 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">4</div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-1">Listeleme ve SEO</h3>
              <p className="text-slate-600">Ürünler profesyonel görseller ve SEO uyumlu içeriklerle yayınlanır.</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 shrink-0 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">5</div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-1">Reklam ve Optimizasyon</h3>
              <p className="text-slate-600">Pazaryeri içi reklamlar kullanılarak satış ivmesi artırılır.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
          <div className="space-y-4 bg-primary-50 p-6 rounded-2xl">
            <h2 className="text-xl font-bold text-primary-600 mb-2">Wildberries’in Avantajları</h2>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent-500" /> Çok yüksek trafik potansiyeli</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent-500" /> Geniş ve yaygın teslimat ağı (PVZ)</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent-500" /> Hızlı ölçeklenme imkanı</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent-500" /> Güçlü algoritma desteği</li>
            </ul>
          </div>

          <div className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h2 className="text-xl font-bold text-slate-800 mb-2">Dikkat Edilmesi Gerekenler</h2>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-center gap-2">- İade oranlarının yönetimi</li>
              <li className="flex items-center gap-2">- Stok ve tedarik planlaması</li>
              <li className="flex items-center gap-2">- Reklam bütçe optimizasyonu</li>
              <li className="flex items-center gap-2">- Bölgesel depo dağılımı (FBO)</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4 my-8 relative p-8 border-l-4 border-accent-500 bg-white shadow-md rounded-2xl">
          <h2 className="text-2xl font-bold text-primary-500 mb-4">Türkiye’den Wildberries’e Satış</h2>
          <p className="text-slate-600 mb-2 text-lg">Türk firmaları için en önemli avantajlar:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <div className="text-center p-3 bg-slate-50 rounded-xl">
              <div className="font-bold text-accent-500 mb-1">Konum</div>
              <div className="text-sm text-slate-600">Coğrafi yakınlık</div>
            </div>
            <div className="text-center p-3 bg-slate-50 rounded-xl">
              <div className="font-bold text-accent-500 mb-1">Talep</div>
              <div className="text-sm text-slate-600">Türk ürünlerine ilgi</div>
            </div>
            <div className="text-center p-3 bg-slate-50 rounded-xl">
              <div className="font-bold text-accent-500 mb-1">Hız</div>
              <div className="text-sm text-slate-600">Hızlı lojistik</div>
            </div>
            <div className="text-center p-3 bg-slate-50 rounded-xl">
              <div className="font-bold text-accent-500 mb-1">Rekabet</div>
              <div className="text-sm text-slate-600">Fiyat avantajı</div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 justify-center text-center p-10 rounded-3xl mt-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Sonuç</h2>
          <p className="text-lg leading-relaxed text-slate-300">Wildberries, doğru operasyon ile markalar için önemli bir büyüme kanalıdır. Ancak başarı, sadece ürün yüklemekle değil; operasyonun profesyonel şekilde yönetilmesiyle mümkündür.</p>
        </div>
      </div>
    )
  }
];
