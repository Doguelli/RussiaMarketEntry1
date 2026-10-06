import type { PathLang } from "@/utils/ruPaths";

export interface ForWhomGuideLink {
  label: string;
  /** Blog post slug; must exist in every language tree. */
  blogSlug: string;
}

export interface ForWhomGuideSection {
  title: string;
  paragraphs: string[];
  links?: ForWhomGuideLink[];
}

export interface ForWhomGuide {
  sections: ForWhomGuideSection[];
  faq: { question: string; answer: string }[];
}

export const FOR_WHOM_GUIDE_HEADINGS: Record<PathLang, { faq: string; readMore: string }> = {
  tr: { faq: "Sık Sorulan Sorular", readMore: "Detaylı rehber" },
  en: { faq: "Frequently Asked Questions", readMore: "In-depth guide" },
  ru: { faq: "Частые вопросы", readMore: "Подробное руководство" },
};

const BLOG = {
  cestniyZnak: "cestniy-znak-nedir-rusyada-hangi-urunlerde-zorunludur",
  eac: "eac-belgesi-nedir-rusyaya-ihracat-icin-bilmeniz-gereken-her-sey",
  stockStrategy: "wildberries-ozon-lojistik-yonetimi-stok-stratejisi",
  regional: "rusya-e-ticaret-bolgesel-satis-stratejisi-2026",
  exwShelfPrice: "rusya-exw-raf-fiyati-maliyet-hesaplama-2026",
  productDocuments: "rusya-marketplace-urun-belgeleri-2026",
  unitEconomics: "rusya-marketplace-unit-economics-karlilik-2026",
  logistics: "rusyada-e-ticaret-lojistigi-2026",
};

/** Keyed by language, then by the Turkish for-whom slug. */
export const forWhomGuides: Record<PathLang, Record<string, ForWhomGuide>> = {
  tr: {
    "tekstil-markalari": {
      sections: [
        {
          title: "Rusya'da Tekstil Satışının Yasal Temeli",
          paragraphs: [
            "Hazır giyim ve ev tekstili, Avrasya Ekonomik Birliği'nin TR CU 017/2011 sayılı hafif sanayi ürünleri güvenliği teknik düzenlemesi kapsamındadır; ürünlerin büyük bölümü için EAC uygunluk beyanı gerekir. Çocuk giyimi ise TR CU 007/2011 kapsamında ayrıca değerlendirilir.",
            "Giyim, ev tekstili ve ayakkabının büyük bölümü Çestniy Znak (Честный знак) dijital etiketleme sistemine tabidir. Her ürüne Rusya'ya girmeden önce DataMatrix kodu basılması gerekir; kodsuz ürünler pazaryeri depolarına kabul edilmez.",
          ],
          links: [
            { label: "EAC belgesi rehberi", blogSlug: BLOG.eac },
            { label: "Çestniy Znak rehberi", blogSlug: BLOG.cestniyZnak },
          ],
        },
        {
          title: "Beden, İçerik ve İade Yönetimi",
          paragraphs: [
            "Wildberries ve Lamoda'da giyim kategorisinde iade oranları diğer kategorilere göre belirgin şekilde yüksektir. Bu yüzden kârlılığı belirleyen asıl metrik ciro değil, satın alma (iade edilmeyen sipariş) oranıdır.",
            "Rus beden sistemine uygun ölçü tablosu, net kumaş içeriği, gerçek ölçüleri belirtilmiş model fotoğrafları ve Rusça ürün açıklamaları iadeyi doğrudan düşürür. Ürün kartlarını bu verilerle kuruyor, iade nedenlerini düzenli olarak izleyip kartları güncelliyoruz.",
          ],
        },
        {
          title: "Sezon ve Stok Planlaması",
          paragraphs: [
            "Rusya'da sezon geçişleri sert ve bölgeden bölgeye farklıdır. Kışlık ürünlerin sonbahar başında, yazlık ürünlerin ise ilkbaharda pazaryeri depolarında hazır olması gerekir; geç kalan stok sezonun en güçlü haftalarını kaçırır.",
            "Stokları yalnızca Moskova'da değil, bölgesel depolara da dağıtmak teslim süresini kısaltır ve arama sonuçlarındaki görünürlüğü artırır. Sevkiyat planını satış hızına ve bölgesel talebe göre birlikte kuruyoruz.",
          ],
          links: [
            { label: "Stok stratejisi rehberi", blogSlug: BLOG.stockStrategy },
            { label: "Bölgesel satış stratejisi", blogSlug: BLOG.regional },
          ],
        },
      ],
      faq: [
        {
          question: "Tekstil ürünleri için Çestniy Znak zorunlu mu?",
          answer: "Hazır giyimin, ev tekstilinin ve ayakkabının büyük bölümü için evet. Kodlar ürün Rusya'ya girmeden önce alınır ve etikete basılır; kodsuz ürünler pazaryeri depolarına kabul edilmez.",
        },
        {
          question: "Tekstil markası olarak hangi pazaryeriyle başlamalıyım?",
          answer: "Geniş ürün yelpazesi ve yüksek hacim için genellikle Wildberries, daha üst segment ve marka algısı için Lamoda öne çıkar. Ozon ile paralel açılış da sık tercih edilir; kararı fiyat segmentinize ve kategorinize göre birlikte veriyoruz.",
        },
        {
          question: "Rusya'da şirket kurmam gerekiyor mu?",
          answer: "Hayır. Konsinye modelde ithalat ve pazaryeri satışları bizim Rusya'daki operasyon yapımız üzerinden yürütülür; siz ürünü sağlar, satış ve kârlılık raporlarını takip edersiniz.",
        },
      ],
    },
    ureticiler: {
      sections: [
        {
          title: "Toptan İhracat ile Pazaryeri Satışı Arasındaki Fark",
          paragraphs: [
            "Toptan satışta raf fiyatını distribütör belirler; marj, müşteri verisi ve marka algısı onda kalır. Pazaryerinde ise raf fiyatını, stok hareketini ve tüketici yorumlarını doğrudan görürsünüz.",
            "EXW fiyatı ile raf fiyatı arasına navlun, gümrük vergisi, %22 ithalat KDV'si, pazaryeri komisyonu, depo-lojistik ücretleri ve reklam girer. Bu yüzden ürün seçimine her zaman raf fiyatı hesabıyla başlıyoruz.",
          ],
          links: [{ label: "EXW'den raf fiyatına maliyet hesabı", blogSlug: BLOG.exwShelfPrice }],
        },
        {
          title: "Hangi Ürünler Pazaryerinde İyi Çalışır?",
          paragraphs: [
            "Hacmi küçük, kırılganlığı düşük, tekrar satın alınan ve rekabetçi fiyatlanabilen ürünler pazaryeri modelinde en hızlı sonuç verir. Ev ve yaşam, mutfak, hırdavat, otomotiv aksesuarı ve evcil hayvan ürünleri bu kategorilere örnektir.",
            "Tüm kataloğu tek seferde göndermek yerine sınırlı sayıda ürünle pilot bir parti planlıyoruz. Satış hızı, yorumlar ve iade verisine göre kazanan ürünlerde stok derinliğini artırıyor, çalışmayanları erkenden eliyoruz.",
          ],
        },
        {
          title: "Belgeler ve Uygunluk",
          paragraphs: [
            "Her ürün, ait olduğu teknik düzenlemeye göre EAC uygunluk sertifikası veya beyanı ile Rusya'ya girer; bazı kategoriler ayrıca Çestniy Znak etiketlemesine tabidir. Etikette üretici, ithalatçı ve ürün bilgilerinin Rusça yer alması zorunludur.",
            "Ürün grubunuz için gereken belgeleri sevkiyattan önce çıkarıyor, gümrük ve pazaryeri kabulünde sorun yaşanmaması için dosyayı eksiksiz hazırlıyoruz.",
          ],
          links: [{ label: "Pazaryeri ürün belgeleri rehberi", blogSlug: BLOG.productDocuments }],
        },
      ],
      faq: [
        {
          question: "Konsinye modelde ödemeyi ne zaman alırım?",
          answer: "Ödeme, ürünler tüketiciye satıldıkça ve pazaryeri hakedişleri hesaba geçtikçe yapılır. Hangi dönemde ne kadar satış olduğunu ve tüm kesintileri şeffaf raporlarla paylaşıyoruz.",
        },
        {
          question: "Başlamak için minimum ürün adedi var mı?",
          answer: "Sabit bir alt sınır yerine kategori ve lojistik maliyetine göre bir pilot parti planlıyoruz. Genellikle sınırlı sayıda ürünle başlayıp satış verisine göre genişletiyoruz.",
        },
        {
          question: "Kendi markam yoksa Rusya pazaryerlerinde satış yapabilir miyim?",
          answer: "Evet. Pazaryerinde satış için bir marka adı ve ürün kartı gerekir, ancak bunun büyük ve bilinen bir marka olması gerekmez. Gerekli marka yetkilendirme belgelerini birlikte hazırlıyoruz.",
        },
      ],
    },
    "e-ticaret-girisimcileri": {
      sections: [
        {
          title: "Rakamlarla Başlamak: Birim Ekonomisi",
          paragraphs: [
            "Ürün seçmeden önce her ürün için tam maliyet tablosu çıkarıyoruz: alış maliyeti, Rusya'ya taşıma, gümrük vergisi ve ithalat KDV'si, kategoriye göre değişen pazaryeri komisyonu, depo ve teslimat ücretleri, iade maliyeti ve reklam bütçesi.",
            "Tüm bu kalemlerden sonra pozitif marj bırakan ürünler test listesine girer. Bu disiplin, Rusya'ya giren yeni satıcıların en sık yaptığı hatayı, yani satıldıkça zarar eden ürünleri önler.",
          ],
          links: [{ label: "Pazaryeri birim ekonomisi rehberi", blogSlug: BLOG.unitEconomics }],
        },
        {
          title: "FBO mu, FBS mi?",
          paragraphs: [
            "FBO modelinde stok pazaryerinin deposundadır; teslimat hızlıdır ve ürün aramalarda daha görünür olur, ancak depolama ücreti ve dikkatli stok planlaması gerektirir. FBS modelinde siparişleri kendi deponuzdan gönderirsiniz; esnektir ama teslimat daha yavaştır.",
            "Genellikle hızlı dönen ürünlerde FBO ile, geniş ama yavaş dönen ürün gamında FBS ile ilerleyen karma bir yapı kuruyoruz.",
          ],
          links: [{ label: "Rusya e-ticaret lojistiği rehberi", blogSlug: BLOG.logistics }],
        },
        {
          title: "Tipik İlk 90 Gün",
          paragraphs: [
            "İlk ayda hesaplar, belgeler, Rusça ürün kartları ve ilk sevkiyat hazırlanır. İkinci ayda reklam testleri, fiyat ayarları ve ilk yorumların toplanması öne çıkar. Üçüncü ayda kazanan ürünlerde stok derinliği artırılır, performansı zayıf ürünler tasfiye edilir.",
          ],
        },
      ],
      faq: [
        {
          question: "Rusya'da e-ticarete başlamak için ne kadar bütçe gerekir?",
          answer: "Tek bir rakam vermek yanıltıcı olur; bütçe ürün maliyetine, sevkiyat hacmine ve reklam testlerine bağlıdır. Ön görüşmede seçtiğiniz ürünler için birim ekonomisi tablosu çıkarıp gerçekçi bir başlangıç bütçesi öneriyoruz.",
        },
        {
          question: "Insales nedir, neden gerekli?",
          answer: "Insales, Rusya'da yaygın kullanılan bir e-ticaret site altyapısıdır. Pazaryerlerinin yanında kendi sitenizi kurmak müşteri verisini ve marka kanalını size ait kılar; stok ve siparişleri pazaryerleriyle aynı panelden yönetebilirsiniz.",
        },
        {
          question: "Rusça bilmem gerekiyor mu?",
          answer: "Hayır. Ürün kartları, müşteri soruları, pazaryeri destek yazışmaları ve raporlama ekibimiz tarafından yürütülür; size Türkçe raporlanır.",
        },
      ],
    },
    "kozmetik-ureticileri": {
      sections: [
        {
          title: "Mevzuat: TR CU 009/2011 ve Çestniy Znak",
          paragraphs: [
            "Parfüm ve kozmetik ürünleri, Avrasya Ekonomik Birliği'nin TR CU 009/2011 sayılı teknik düzenlemesi kapsamındadır. Ürünlerin çoğu için EAC uygunluk beyanı yeterlidir; çocuk kozmetiği, bronzlaştırıcı ve cilt beyazlatıcı ürünler gibi bazı gruplar ise devlet tescili (SGR) gerektirir.",
            "Parfüm ve kozmetiğin büyük bölümü Çestniy Znak etiketlemesine de tabidir. Etikette Rusça içerik listesi, kullanım talimatı, üretici ve ithalatçı bilgisi ile son kullanma tarihi bulunmalıdır.",
          ],
          links: [
            { label: "EAC belgesi rehberi", blogSlug: BLOG.eac },
            { label: "Çestniy Znak rehberi", blogSlug: BLOG.cestniyZnak },
          ],
        },
        {
          title: "Kozmetikte Pazaryeri Dinamikleri",
          paragraphs: [
            "Kozmetikte satın alma kararını büyük ölçüde puanlar ve yorumlar belirler. Bu nedenle ilk haftalarda yorum toplamaya, kullanım talimatlı görsellere ve içerik listesinin açıkça gösterildiği ürün kartlarına odaklanıyoruz.",
            "Raf ömrü kozmetikte ayrı bir planlama konusudur: pazaryerleri kalan raf ömrü düşük ürünleri depoya kabul etmeyebilir. Sevkiyat partilerini üretim tarihine ve satış hızına göre boyutlandırıyoruz.",
          ],
          links: [{ label: "Pazaryeri ürün belgeleri rehberi", blogSlug: BLOG.productDocuments }],
        },
      ],
      faq: [
        {
          question: "Kozmetik ürünler için Rusya'da hangi belge gerekir?",
          answer: "Çoğu ürün için TR CU 009/2011 kapsamında EAC uygunluk beyanı yeterlidir. Çocuk kozmetiği gibi bazı ürün grupları devlet tescili (SGR) gerektirir; ürün grubunuza göre doğru belgeyi sevkiyattan önce belirliyoruz.",
        },
        {
          question: "Ürün etiketlerini Rusçaya çevirmemiz gerekiyor mu?",
          answer: "Evet, tüketici bilgilerinin Rusça olması zorunludur. Rusça etiket üretim sırasında basılabilir ya da ürün Rusya'ya girmeden önce ek Rusça etiket uygulanabilir; uygun yolu ürüne ve hacme göre belirliyoruz.",
        },
      ],
    },
  },

  en: {
    "tekstil-markalari": {
      sections: [
        {
          title: "The Regulatory Basis for Selling Textiles in Russia",
          paragraphs: [
            "Apparel and home textiles fall under the Eurasian Economic Union technical regulation TR CU 017/2011 on light industry products; most items require an EAC declaration of conformity. Children's clothing is assessed separately under TR CU 007/2011.",
            "Most clothing, home textiles and footwear are also covered by the Chestny ZNAK (Честный знак) digital marking system. Every item needs a DataMatrix code before it enters Russia; unmarked goods are not accepted into marketplace warehouses.",
          ],
          links: [
            { label: "EAC certification guide", blogSlug: BLOG.eac },
            { label: "Chestny ZNAK guide", blogSlug: BLOG.cestniyZnak },
          ],
        },
        {
          title: "Sizing, Content and Returns",
          paragraphs: [
            "Return rates for apparel on Wildberries and Lamoda are markedly higher than in other categories. That makes the buyout rate (orders that are not returned), not revenue, the metric that actually decides profitability.",
            "A size chart that matches the Russian sizing system, clear fabric composition, model photos with real measurements and Russian-language descriptions directly reduce returns. We build product cards with this data, track return reasons regularly and update the cards accordingly.",
          ],
        },
        {
          title: "Season and Stock Planning",
          paragraphs: [
            "Seasons in Russia change sharply and differ from region to region. Winter collections need to be in marketplace warehouses by early autumn and summer ranges by spring; late stock misses the strongest weeks of the season.",
            "Distributing stock to regional warehouses, not only Moscow, shortens delivery times and improves search visibility. We plan shipments together with you based on sales velocity and regional demand.",
          ],
          links: [
            { label: "Stock strategy guide", blogSlug: BLOG.stockStrategy },
            { label: "Regional sales strategy", blogSlug: BLOG.regional },
          ],
        },
      ],
      faq: [
        {
          question: "Is Chestny ZNAK marking mandatory for textiles?",
          answer: "For most apparel, home textiles and footwear, yes. Codes are obtained and printed on the labels before the goods enter Russia; unmarked goods are not accepted into marketplace warehouses.",
        },
        {
          question: "Which marketplace should a textile brand start with?",
          answer: "Wildberries usually leads for broad assortments and high volume, while Lamoda suits higher price segments and brand positioning. Launching on Ozon in parallel is also common; we decide together based on your price segment and category.",
        },
        {
          question: "Do I need to set up a company in Russia?",
          answer: "No. Under the consignment model, imports and marketplace sales run through our operating structure in Russia; you supply the products and follow the sales and profitability reports.",
        },
      ],
    },
    ureticiler: {
      sections: [
        {
          title: "Wholesale Export vs. Marketplace Sales",
          paragraphs: [
            "In wholesale, the distributor sets the shelf price and keeps the margin, the customer data and control of how the brand is perceived. On marketplaces you see the shelf price, stock movement and consumer reviews directly.",
            "Between the EXW price and the shelf price come freight, customs duty, 22% import VAT, marketplace commission, warehouse and logistics fees and advertising. That is why we always start product selection with a shelf-price calculation.",
          ],
          links: [{ label: "EXW to shelf price cost calculation", blogSlug: BLOG.exwShelfPrice }],
        },
        {
          title: "Which Products Work Well on Marketplaces?",
          paragraphs: [
            "Compact, non-fragile, repeat-purchase products that can be priced competitively deliver results fastest in the marketplace model. Home and living, kitchen, hardware, car accessories and pet products are typical examples.",
            "Instead of shipping the whole catalogue at once, we plan a pilot batch with a limited number of products. Based on sales velocity, reviews and return data, we deepen stock on the winners and drop underperformers early.",
          ],
        },
        {
          title: "Documents and Compliance",
          paragraphs: [
            "Each product enters Russia with an EAC certificate or declaration of conformity under its technical regulation, and some categories also require Chestny ZNAK marking. Manufacturer, importer and product information must appear on the label in Russian.",
            "We identify the documents your product group needs before shipment and prepare a complete file so customs clearance and marketplace acceptance go smoothly.",
          ],
          links: [{ label: "Marketplace product documents guide", blogSlug: BLOG.productDocuments }],
        },
      ],
      faq: [
        {
          question: "When do I get paid under the consignment model?",
          answer: "Payment follows actual sales to consumers as marketplace payouts are settled. We share transparent reports showing sales per period and every deduction.",
        },
        {
          question: "Is there a minimum quantity to get started?",
          answer: "Rather than a fixed minimum, we plan a pilot batch based on category and logistics costs. We usually start with a limited number of products and expand based on sales data.",
        },
        {
          question: "Can I sell on Russian marketplaces without my own brand?",
          answer: "Yes. Marketplace listings need a brand name and product cards, but it does not have to be a large, well-known brand. We prepare the required brand authorization documents together.",
        },
      ],
    },
    "e-ticaret-girisimcileri": {
      sections: [
        {
          title: "Start With the Numbers: Unit Economics",
          paragraphs: [
            "Before choosing products, we build a full cost sheet for each one: purchase cost, transport to Russia, customs duty and import VAT, category-specific marketplace commission, warehouse and delivery fees, return costs and advertising budget.",
            "Only products that leave a positive margin after all of these items make the test list. This discipline prevents the most common mistake new sellers make in Russia: products that lose money with every sale.",
          ],
          links: [{ label: "Marketplace unit economics guide", blogSlug: BLOG.unitEconomics }],
        },
        {
          title: "FBO or FBS?",
          paragraphs: [
            "With FBO, stock sits in the marketplace's warehouse: delivery is fast and products are more visible in search, but it involves storage fees and careful stock planning. With FBS, you ship orders from your own warehouse: flexible, but slower to deliver.",
            "We usually build a hybrid setup: FBO for fast-moving products and FBS for a broad but slower-moving range.",
          ],
          links: [{ label: "Russian e-commerce logistics guide", blogSlug: BLOG.logistics }],
        },
        {
          title: "A Typical First 90 Days",
          paragraphs: [
            "Month one covers accounts, documents, Russian product cards and the first shipment. Month two focuses on advertising tests, price adjustments and collecting the first reviews. In month three, stock is deepened on the winners and weak performers are cleared out.",
          ],
        },
      ],
      faq: [
        {
          question: "How much budget do I need to start e-commerce in Russia?",
          answer: "A single figure would be misleading; the budget depends on product costs, shipment volume and advertising tests. In the initial call we build a unit economics sheet for your chosen products and propose a realistic starting budget.",
        },
        {
          question: "What is Insales and why would I need it?",
          answer: "Insales is a widely used e-commerce website platform in Russia. Running your own store alongside marketplaces gives you ownership of customer data and a brand channel, and you can manage stock and orders from the same panel as your marketplaces.",
        },
        {
          question: "Do I need to speak Russian?",
          answer: "No. Product cards, customer questions, marketplace support correspondence and reporting are handled by our team and reported to you in English.",
        },
      ],
    },
    "kozmetik-ureticileri": {
      sections: [
        {
          title: "Regulation: TR CU 009/2011 and Chestny ZNAK",
          paragraphs: [
            "Perfume and cosmetic products fall under the Eurasian Economic Union technical regulation TR CU 009/2011. For most products an EAC declaration of conformity is sufficient, while some groups, such as children's cosmetics, tanning products and skin-whitening products, require state registration (SGR).",
            "Most perfumes and cosmetics are also subject to Chestny ZNAK marking. The label must include a Russian ingredient list, instructions for use, manufacturer and importer details and the expiry date.",
          ],
          links: [
            { label: "EAC certification guide", blogSlug: BLOG.eac },
            { label: "Chestny ZNAK guide", blogSlug: BLOG.cestniyZnak },
          ],
        },
        {
          title: "Marketplace Dynamics in Cosmetics",
          paragraphs: [
            "In cosmetics, ratings and reviews largely drive the purchase decision. In the first weeks we therefore focus on collecting reviews, visuals with usage instructions and product cards that show the ingredient list clearly.",
            "Shelf life is a planning topic of its own: marketplaces may refuse products with little remaining shelf life. We size shipment batches according to production date and sales velocity.",
          ],
          links: [{ label: "Marketplace product documents guide", blogSlug: BLOG.productDocuments }],
        },
      ],
      faq: [
        {
          question: "Which documents do cosmetics need in Russia?",
          answer: "For most products an EAC declaration of conformity under TR CU 009/2011 is sufficient. Some groups, such as children's cosmetics, require state registration (SGR); we determine the right document for your product group before shipment.",
        },
        {
          question: "Do we need to translate product labels into Russian?",
          answer: "Yes, consumer information must be in Russian. The Russian label can be printed during production, or an additional Russian sticker can be applied before the goods enter Russia; we choose the right approach based on the product and volume.",
        },
      ],
    },
  },

  ru: {
    "tekstil-markalari": {
      sections: [
        {
          title: "Нормативная база продаж текстиля в России",
          paragraphs: [
            "Одежда и домашний текстиль подпадают под технический регламент ЕАЭС ТР ТС 017/2011 о безопасности продукции лёгкой промышленности; для большинства товаров требуется декларация о соответствии ЕАС. Детская одежда оценивается отдельно по ТР ТС 007/2011.",
            "Большая часть одежды, домашнего текстиля и обуви также входит в систему цифровой маркировки «Честный знак». Код DataMatrix наносится на каждый товар до ввоза в Россию; товары без маркировки склады маркетплейсов не принимают.",
          ],
          links: [
            { label: "Руководство по сертификации ЕАС", blogSlug: BLOG.eac },
            { label: "Руководство по «Честному знаку»", blogSlug: BLOG.cestniyZnak },
          ],
        },
        {
          title: "Размеры, контент и возвраты",
          paragraphs: [
            "Доля возвратов в категории одежды на Wildberries и Lamoda заметно выше, чем в других категориях. Поэтому прибыльность определяет не оборот, а процент выкупа — доля заказов, которые не вернули.",
            "Размерная сетка по российской системе, точный состав ткани, фото на моделях с реальными параметрами и описания на русском языке напрямую снижают возвраты. Мы собираем карточки товаров с этими данными, регулярно отслеживаем причины возвратов и обновляем карточки.",
          ],
        },
        {
          title: "Сезонность и планирование запасов",
          paragraphs: [
            "Смена сезонов в России резкая и различается по регионам. Зимние коллекции должны быть на складах маркетплейсов к началу осени, летние — к весне; опоздавший товар пропускает самые сильные недели сезона.",
            "Распределение запасов по региональным складам, а не только в Москве, сокращает сроки доставки и улучшает видимость в поиске. План поставок мы выстраиваем вместе с вами по скорости продаж и региональному спросу.",
          ],
          links: [
            { label: "Руководство по стратегии запасов", blogSlug: BLOG.stockStrategy },
            { label: "Региональная стратегия продаж", blogSlug: BLOG.regional },
          ],
        },
      ],
      faq: [
        {
          question: "Обязательна ли маркировка «Честный знак» для текстиля?",
          answer: "Для большей части одежды, домашнего текстиля и обуви — да. Коды получают и наносят на этикетки до ввоза товара в Россию; товары без маркировки склады маркетплейсов не принимают.",
        },
        {
          question: "С какого маркетплейса начинать текстильному бренду?",
          answer: "Для широкого ассортимента и больших объёмов обычно лидирует Wildberries, для более высокого ценового сегмента и позиционирования бренда — Lamoda. Часто параллельно запускают и Ozon; решение принимаем вместе, исходя из вашего ценового сегмента и категории.",
        },
        {
          question: "Нужно ли открывать компанию в России?",
          answer: "Нет. В консигнационной модели импорт и продажи на маркетплейсах проходят через нашу операционную структуру в России; вы поставляете товар и следите за отчётами о продажах и прибыльности.",
        },
      ],
    },
    ureticiler: {
      sections: [
        {
          title: "Оптовый экспорт и продажи на маркетплейсах: в чём разница",
          paragraphs: [
            "При оптовых продажах цену на полке устанавливает дистрибьютор, и у него же остаются маржа, данные о покупателях и восприятие бренда. На маркетплейсе вы напрямую видите цену на полке, движение остатков и отзывы покупателей.",
            "Между ценой EXW и ценой на полке — фрахт, таможенная пошлина, импортный НДС 22%, комиссия маркетплейса, складские и логистические сборы и реклама. Поэтому подбор товаров мы всегда начинаем с расчёта цены на полке.",
          ],
          links: [{ label: "Расчёт себестоимости от EXW до цены на полке", blogSlug: BLOG.exwShelfPrice }],
        },
        {
          title: "Какие товары хорошо продаются на маркетплейсах?",
          paragraphs: [
            "Быстрее всего результат дают компактные, нехрупкие товары повторного спроса, которые можно конкурентно оценить. Типичные примеры — товары для дома, кухни, хозтовары и инструменты, автоаксессуары и зоотовары.",
            "Вместо отправки всего каталога сразу мы планируем пилотную партию с ограниченным числом товаров. По скорости продаж, отзывам и данным о возвратах увеличиваем запас по лидерам и рано выводим слабые позиции.",
          ],
        },
        {
          title: "Документы и соответствие требованиям",
          paragraphs: [
            "Каждый товар ввозится в Россию с сертификатом или декларацией соответствия ЕАС по своему техническому регламенту; для некоторых категорий дополнительно нужна маркировка «Честный знак». Сведения о производителе, импортёре и товаре на этикетке должны быть на русском языке.",
            "Мы определяем необходимые документы для вашей товарной группы до отгрузки и готовим полный пакет, чтобы таможенное оформление и приёмка на маркетплейсе прошли без проблем.",
          ],
          links: [{ label: "Руководство по документам для маркетплейсов", blogSlug: BLOG.productDocuments }],
        },
      ],
      faq: [
        {
          question: "Когда я получаю оплату в консигнационной модели?",
          answer: "Оплата идёт по мере фактических продаж покупателям и зачисления выплат маркетплейсов. Мы предоставляем прозрачные отчёты с продажами за каждый период и всеми удержаниями.",
        },
        {
          question: "Есть ли минимальный объём для старта?",
          answer: "Вместо фиксированного минимума мы планируем пилотную партию с учётом категории и логистических затрат. Обычно начинаем с ограниченного числа товаров и расширяем ассортимент по данным продаж.",
        },
        {
          question: "Можно ли продавать на российских маркетплейсах без собственного бренда?",
          answer: "Да. Для продаж на маркетплейсе нужны название бренда и карточки товаров, но это не обязательно должен быть крупный известный бренд. Необходимые документы на право продажи бренда мы готовим вместе.",
        },
      ],
    },
    "e-ticaret-girisimcileri": {
      sections: [
        {
          title: "Начинаем с цифр: юнит-экономика",
          paragraphs: [
            "До выбора товаров мы составляем полную таблицу затрат по каждой позиции: закупочная цена, доставка в Россию, таможенная пошлина и импортный НДС, комиссия маркетплейса по категории, складские сборы и доставка, стоимость возвратов и рекламный бюджет.",
            "В тестовый список попадают только товары, которые после всех этих статей остаются с положительной маржой. Такая дисциплина защищает от самой частой ошибки новых продавцов в России — товаров, которые приносят убыток с каждой продажей.",
          ],
          links: [{ label: "Руководство по юнит-экономике маркетплейсов", blogSlug: BLOG.unitEconomics }],
        },
        {
          title: "FBO или FBS?",
          paragraphs: [
            "При FBO товар хранится на складе маркетплейса: доставка быстрая, а товар лучше виден в поиске, но нужны оплата хранения и аккуратное планирование запасов. При FBS вы отгружаете заказы со своего склада: гибко, но доставка дольше.",
            "Обычно мы выстраиваем смешанную схему: FBO для быстро оборачиваемых товаров и FBS для широкого, но медленнее продающегося ассортимента.",
          ],
          links: [{ label: "Руководство по логистике e-commerce в России", blogSlug: BLOG.logistics }],
        },
        {
          title: "Типичные первые 90 дней",
          paragraphs: [
            "В первый месяц готовятся кабинеты, документы, карточки товаров на русском языке и первая поставка. Во второй — рекламные тесты, настройка цен и сбор первых отзывов. В третий месяц увеличивается запас по лидерам продаж, а слабые позиции распродаются.",
          ],
        },
      ],
      faq: [
        {
          question: "Какой бюджет нужен для старта e-commerce в России?",
          answer: "Одна цифра была бы некорректной: бюджет зависит от себестоимости товаров, объёма поставки и рекламных тестов. На первой встрече мы считаем юнит-экономику выбранных товаров и предлагаем реалистичный стартовый бюджет.",
        },
        {
          question: "Что такое Insales и зачем он нужен?",
          answer: "Insales — распространённая в России платформа для интернет-магазинов. Собственный сайт рядом с маркетплейсами даёт вам данные о покупателях и свой брендовый канал, а остатками и заказами можно управлять из той же панели, что и маркетплейсами.",
        },
        {
          question: "Нужно ли знать русский язык?",
          answer: "Нет. Карточки товаров, вопросы покупателей, переписку с поддержкой маркетплейсов и отчётность ведёт наша команда.",
        },
      ],
    },
    "kozmetik-ureticileri": {
      sections: [
        {
          title: "Регулирование: ТР ТС 009/2011 и «Честный знак»",
          paragraphs: [
            "Парфюмерно-косметическая продукция подпадает под технический регламент ЕАЭС ТР ТС 009/2011. Для большинства товаров достаточно декларации о соответствии ЕАС, а для некоторых групп — например, детской косметики, средств для загара и отбеливания кожи — требуется государственная регистрация (СГР).",
            "Большая часть парфюмерии и косметики также подлежит маркировке «Честный знак». На этикетке должны быть состав на русском языке, способ применения, сведения о производителе и импортёре и срок годности.",
          ],
          links: [
            { label: "Руководство по сертификации ЕАС", blogSlug: BLOG.eac },
            { label: "Руководство по «Честному знаку»", blogSlug: BLOG.cestniyZnak },
          ],
        },
        {
          title: "Особенности продаж косметики на маркетплейсах",
          paragraphs: [
            "В косметике решение о покупке во многом определяют рейтинг и отзывы. Поэтому в первые недели мы делаем упор на сбор отзывов, визуалы со способом применения и карточки, где состав показан наглядно.",
            "Срок годности — отдельная тема планирования: маркетплейсы могут не принять товар с малым остаточным сроком. Размер партий мы рассчитываем по дате производства и скорости продаж.",
          ],
          links: [{ label: "Руководство по документам для маркетплейсов", blogSlug: BLOG.productDocuments }],
        },
      ],
      faq: [
        {
          question: "Какие документы нужны для косметики в России?",
          answer: "Для большинства товаров достаточно декларации о соответствии ЕАС по ТР ТС 009/2011. Для некоторых групп, например детской косметики, нужна государственная регистрация (СГР); правильный документ для вашей товарной группы мы определяем до отгрузки.",
        },
        {
          question: "Нужно ли переводить этикетки на русский язык?",
          answer: "Да, информация для потребителя должна быть на русском языке. Русскую этикетку можно напечатать при производстве или нанести дополнительный стикер до ввоза товара в Россию; подходящий вариант выбираем по товару и объёму.",
        },
      ],
    },
  },
};
