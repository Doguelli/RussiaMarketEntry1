import { Link } from "react-router-dom";
import { HeartPulse } from "lucide-react";
import { contactPath } from "@/utils/ruPaths";

const flowCard =
  "bg-slate-50 p-4 rounded-xl border border-slate-100 text-[14px] text-slate-600 leading-relaxed";
const infoCard =
  "bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-[14px] text-slate-600 leading-relaxed";

export const medicalServiceTR = {
  icon: HeartPulse,
  title: "Rusya'da Medikal ve Sağlık Ürünleri İçin Pazar Girişini Yönetiyoruz",
  metaTitle: "Rusya Medikal ve Sağlık Ürünleri Pazar Girişi | Russia Market Entry",
  metaDescription:
    "Medikal cihaz, sarf malzemesi ve sağlık ürünlerinin Rusya pazarına girişi: pazar uygunluğu, distribütör geliştirme, satış kanalları ve yerel operasyon yönetimi.",
  description:
    "Medikal cihaz, sarf malzemeleri ve sağlık ürünlerinin Rusya pazarına girişinden ticari partner geliştirmeye, satış kanallarından yerel operasyona kadar süreci birlikte yönetiyoruz.",
  ctaLabel: "Rusya Pazarınızı Değerlendirelim",
  forWhom: (
    <ul className="list-disc pl-5 space-y-2 text-[15px]">
      <li>Medikal cihaz ve ekipman üreticileri</li>
      <li>Sarf malzemesi ve tüketim ürünü markaları</li>
      <li>Sağlık ve profesyonel kullanım ürünleri geliştiren firmalar</li>
      <li>Rusya'da B2B satış ve distribütör ağı kurmak isteyen şirketler</li>
    </ul>
  ),
  contentSections: [
    {
      title: "Neden Medikal?",
      content: (
        <div className="space-y-5 text-slate-600">
          <p>
            Medikal ürünlerde Rusya'ya giriş yalnızca satış kanalı bulmaktan ibaret değildir. Ürünün pazara
            uygunluğu, gerekli süreçlerin yönetimi, doğru ticari partnerin bulunması ve satış sonrası operasyonun
            birlikte ele alınması gerekir.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className={infoCard}>
              <p className="font-bold text-primary-500 mb-1">Pazar Uygunluğu</p>
              <p>Ürün gamınızın Rusya pazarındaki talep, kanal yapısı ve rekabet ortamıyla uyumunu değerlendiriyoruz.</p>
            </div>
            <div className={infoCard}>
              <p className="font-bold text-primary-500 mb-1">Ticari Partnerler</p>
              <p>Distribütör, ithalatçı ve kurumsal alıcı adaylarını araştırıp önceliklendiriyoruz.</p>
            </div>
            <div className={infoCard}>
              <p className="font-bold text-primary-500 mb-1">Pazar Konumlandırması</p>
              <p>Ürününüzün hedef segment, fiyat bandı ve satış mesajını netleştiriyoruz.</p>
            </div>
            <div className={infoCard}>
              <p className="font-bold text-primary-500 mb-1">Yerel Operasyon</p>
              <p>Satış, stok, lojistik ve performans süreçlerini sürdürülebilir bir yapıda yönetiyoruz.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Hangi Ürünlerle Çalışıyoruz?",
      content: (
        <div className="space-y-4 text-slate-600">
          <div className={flowCard}>
            <p className="font-bold text-primary-500 mb-2">Medikal Cihazlar</p>
            <p>
              Tanı ve tedavi ekipmanları, taşınabilir cihazlar, klinik kullanım ürünleri ve benzeri medikal cihaz
              kategorilerinde pazar girişi ve ticari geliştirme desteği.
            </p>
          </div>
          <div className={flowCard}>
            <p className="font-bold text-primary-500 mb-2">Sarf Malzemeleri</p>
            <p>
              Tek kullanımlık tüketim ürünleri, prosedür kitleri, steril sarf malzemeleri ve benzeri yüksek hacimli
              kategorilerde kanal ve partner geliştirme.
            </p>
          </div>
          <div className={flowCard}>
            <p className="font-bold text-primary-500 mb-2">Sağlık Ürünleri</p>
            <p>
              Profesyonel kullanım ürünleri, sağlık ve bakım kategorileri ile uygun olduğunda kurumsal tedarik
              kanallarına yönelik ticari geliştirme.
            </p>
          </div>
          <p className="text-[14px] text-slate-500">
            Ürün kategorisine göre gerekli süreçler farklılık gösterir. Resmi sertifikasyon, kayıt veya kamu erişimi
            garantisi vermiyoruz; süreçleri proje kapsamında birlikte planlıyoruz.
          </p>
        </div>
      ),
    },
    {
      title: "Rusya'ya Giriş Modeli",
      content: (
        <div className="space-y-4 text-slate-600">
          <div className="flex flex-wrap items-center gap-2 text-[13px] md:text-[14px] font-semibold text-primary-600">
            {[
              "Türkiye'deki Üretici",
              "Pazar & Ürün Analizi",
              "Partner / Kanal Geliştirme",
              "Rusya Operasyonu",
              "Satış & Büyüme",
            ].map((step, i, arr) => (
              <span key={step} className="inline-flex items-center gap-2">
                <span className="bg-slate-50 border border-slate-100 rounded-xl px-3 py-2">{step}</span>
                {i < arr.length - 1 && <span className="text-accent-500">→</span>}
              </span>
            ))}
          </div>
          <p>
            Üreticinin Türkiye'deki yapısını Rusya'daki ticari ve operasyonel süreçlerle birleştiriyoruz. Her aşamada
            kararları pazar verisi, partner uygunluğu ve operasyonel gerçeklik üzerinden alıyoruz.
          </p>
        </div>
      ),
    },
    {
      title: "Ne Yapıyoruz?",
      content: (
        <div className="space-y-4 text-slate-600">
          {[
            {
              n: "01",
              t: "Pazar Araştırması",
              d: "Kategori, talep, rakip yapısı, fiyat bandı ve potansiyel kanalları inceliyoruz.",
            },
            {
              n: "02",
              t: "Ürün & Pazar Uyumlandırması",
              d: "Ürün gamınızı hedef segment, satış modeli ve Rusya'daki ticari beklentilerle hizalıyoruz.",
            },
            {
              n: "03",
              t: "Distribütör Geliştirme",
              d: "Potansiyel distribütör, ithalatçı ve kurumsal alıcı adaylarını araştırıp değerlendiriyoruz.",
            },
            {
              n: "04",
              t: "Ticari Görüşmeler",
              d: "Proje kapsamında uygun firmalarla ticari iletişim sürecini destekliyoruz.",
            },
            {
              n: "05",
              t: "Satış Kanalı Geliştirme",
              d: "B2B, kurumsal satış ve uygun olduğunda tamamlayıcı kanalları birlikte yapılandırıyoruz.",
            },
            {
              n: "06",
              t: "Yerel Operasyon",
              d: "Satış takibi, stok, lojistik koordinasyonu ve performans raporlamasını operasyonel yapıya bağlıyoruz.",
            },
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
      title: "Sadece Partner Bulmuyoruz",
      content: (
        <div className="space-y-4 text-slate-600">
          <p className="text-[16px] font-semibold text-primary-500 leading-relaxed">
            Sadece bir partner listesi vermiyoruz.
          </p>
          <p>
            Ürününüzün Rusya'daki ticari potansiyelini değerlendiriyor, doğru kanalı belirliyor ve satış sonrasında
            devam edecek operasyonun altyapısını birlikte kuruyoruz. Araştırma, ticari geliştirme ve sahadaki operasyon
            aynı ekip tarafından yönetilir.
          </p>
        </div>
      ),
    },
    {
      title: "Operasyonu Veriden Yönetiyoruz",
      content: (
        <div className="space-y-3 text-slate-600">
          <p>
            Pazar geliştirme sürecinde satış, maliyet, stok, lojistik ve performans verilerini tek bir operasyonel yapı
            üzerinden takip ediyoruz. Kararları yalnızca rapor değil, sahadaki satış ve operasyon gerçekliğiyle
            destekliyoruz.
          </p>
          <p className="text-[14px]">
            Operasyon modelimiz hakkında daha fazla bilgi:{" "}
            <Link to="/operasyon-modeli" className="text-accent-500 font-semibold hover:underline">
              Operasyon Modeli
            </Link>
          </p>
        </div>
      ),
    },
    {
      title: "Rusya'daki Medikal Pazar Potansiyelinizi Birlikte Değerlendirelim",
      content: (
        <div className="space-y-4 text-slate-600">
          <p>
            Ürününüzün Rusya pazarındaki potansiyelini, uygun operasyon modelini ve büyüme fırsatlarını birlikte
            değerlendirelim.
          </p>
          <Link
            to={contactPath(false)}
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 transition-colors text-white font-bold px-5 py-3 rounded-xl text-[14px]"
          >
            Ön Analiz İçin Başvurun
          </Link>
        </div>
      ),
    },
  ],
  faqs: [
    {
      q: "Rusya medikal pazarına giriş süreci nasıl işler?",
      a: "Önce ürün ve pazar uygunluğunu değerlendiriyor, ardından partner/kanal geliştirme ve yerel operasyon adımlarını proje kapsamına göre planlıyoruz.",
    },
    {
      q: "Hangi medikal ürün kategorilerinde destek veriyorsunuz?",
      a: "Medikal cihazlar, sarf malzemeleri ve sağlık ürünleri başta olmak üzere B2B odaklı medikal kategorilerde çalışıyoruz.",
    },
    {
      q: "Distribütör bulma garantisi veriyor musunuz?",
      a: "Hayır. Potansiyel firmaları araştırıp değerlendiriyoruz; ticari görüşme ve anlaşma garantisi vermiyoruz.",
    },
    {
      q: "Sertifikasyon ve kayıt süreçlerinde destek oluyor musunuz?",
      a: "Proje kapsamına göre süreç planlamasına destek verebiliriz. Resmi onay, kayıt veya sertifikasyon garantisi vermiyoruz.",
    },
  ],
};

export const medicalServiceEN = {
  icon: HeartPulse,
  title: "We Manage Market Entry for Medical and Healthcare Products in Russia",
  metaTitle: "Russia Medical & Healthcare Products Market Entry | Russia Market Entry",
  metaDescription:
    "Market entry for medical devices, consumables and healthcare products in Russia: market fit, distributor development, sales channels and local operations management.",
  description:
    "From entering the Russian market with medical devices, consumables and healthcare products to developing commercial partners, sales channels and local operations — we manage the process together.",
  ctaLabel: "Evaluate Your Russia Market",
  forWhom: (
    <ul className="list-disc pl-5 space-y-2 text-[15px]">
      <li>Medical device and equipment manufacturers</li>
      <li>Consumables and disposable product brands</li>
      <li>Companies developing healthcare and professional-use products</li>
      <li>Firms building B2B sales and distributor networks in Russia</li>
    </ul>
  ),
  contentSections: [
    {
      title: "Why Medical?",
      content: (
        <div className="space-y-5 text-slate-600">
          <p>
            Entering Russia with medical products is not just about finding a sales channel. Product-market fit, process
            management, identifying the right commercial partner and post-sale operations must be handled together.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className={infoCard}>
              <p className="font-bold text-primary-500 mb-1">Market Fit</p>
              <p>We assess how your product range aligns with demand, channel structure and competition in Russia.</p>
            </div>
            <div className={infoCard}>
              <p className="font-bold text-primary-500 mb-1">Commercial Partners</p>
              <p>We research and prioritize distributor, importer and institutional buyer candidates.</p>
            </div>
            <div className={infoCard}>
              <p className="font-bold text-primary-500 mb-1">Market Positioning</p>
              <p>We clarify target segment, price band and sales messaging for your product.</p>
            </div>
            <div className={infoCard}>
              <p className="font-bold text-primary-500 mb-1">Local Operations</p>
              <p>We manage sales, inventory, logistics and performance in a sustainable structure.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Which Products Do We Work With?",
      content: (
        <div className="space-y-4 text-slate-600">
          <div className={flowCard}>
            <p className="font-bold text-primary-500 mb-2">Medical Devices</p>
            <p>
              Diagnostic and treatment equipment, portable devices, clinical-use products and similar categories —
              market entry and commercial development support.
            </p>
          </div>
          <div className={flowCard}>
            <p className="font-bold text-primary-500 mb-2">Consumables</p>
            <p>
              Single-use products, procedure kits, sterile consumables and similar high-volume categories — channel and
              partner development.
            </p>
          </div>
          <div className={flowCard}>
            <p className="font-bold text-primary-500 mb-2">Healthcare Products</p>
            <p>
              Professional-use products, health and care categories, and where appropriate institutional supply channel
              development.
            </p>
          </div>
          <p className="text-[14px] text-slate-500">
            Required processes vary by category. We do not guarantee official certification, registration or public-sector
            access; we plan processes together within project scope.
          </p>
        </div>
      ),
    },
    {
      title: "Russia Entry Model",
      content: (
        <div className="space-y-4 text-slate-600">
          <div className="flex flex-wrap items-center gap-2 text-[13px] md:text-[14px] font-semibold text-primary-600">
            {[
              "Manufacturer in Turkey",
              "Market & Product Analysis",
              "Partner / Channel Development",
              "Russia Operations",
              "Sales & Growth",
            ].map((step, i, arr) => (
              <span key={step} className="inline-flex items-center gap-2">
                <span className="bg-slate-50 border border-slate-100 rounded-xl px-3 py-2">{step}</span>
                {i < arr.length - 1 && <span className="text-accent-500">→</span>}
              </span>
            ))}
          </div>
          <p>
            We connect the manufacturer's structure in Turkey with commercial and operational processes in Russia. At each
            stage, decisions are based on market data, partner fit and operational reality.
          </p>
        </div>
      ),
    },
    {
      title: "What We Do",
      content: (
        <div className="space-y-4 text-slate-600">
          {[
            {
              n: "01",
              t: "Market Research",
              d: "We analyse category, demand, competitive landscape, price bands and potential channels.",
            },
            {
              n: "02",
              t: "Product & Market Alignment",
              d: "We align your range with target segment, sales model and commercial expectations in Russia.",
            },
            {
              n: "03",
              t: "Distributor Development",
              d: "We research and evaluate potential distributors, importers and institutional buyers.",
            },
            {
              n: "04",
              t: "Commercial Meetings",
              d: "Within project scope, we support the commercial communication process with suitable companies.",
            },
            {
              n: "05",
              t: "Sales Channel Development",
              d: "We structure B2B, institutional sales and complementary channels where appropriate.",
            },
            {
              n: "06",
              t: "Local Operations",
              d: "We connect sales tracking, inventory, logistics coordination and performance reporting to operations.",
            },
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
      title: "We Don't Just Find Partners",
      content: (
        <div className="space-y-4 text-slate-600">
          <p className="text-[16px] font-semibold text-primary-500 leading-relaxed">
            We don't just hand over a partner list.
          </p>
          <p>
            We assess your product's commercial potential in Russia, identify the right channel and build the operational
            infrastructure that will continue after sales. Research, commercial development and field operations are
            managed by the same team.
          </p>
        </div>
      ),
    },
    {
      title: "We Manage Operations with Data",
      content: (
        <div className="space-y-3 text-slate-600">
          <p>
            During market development we track sales, cost, inventory, logistics and performance data through a single
            operational structure. Decisions are supported by field sales and operational reality, not reports alone.
          </p>
          <p className="text-[14px]">
            Learn more about our operation model:{" "}
            <Link to="/operasyon-modeli" className="text-accent-500 font-semibold hover:underline">
              Operation Model
            </Link>
          </p>
        </div>
      ),
    },
    {
      title: "Let's Evaluate Your Medical Market Potential in Russia Together",
      content: (
        <div className="space-y-4 text-slate-600">
          <p>
            Let's assess your product's potential in Russia, the right operation model and growth opportunities together.
          </p>
          <Link
            to={contactPath(false)}
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 transition-colors text-white font-bold px-5 py-3 rounded-xl text-[14px]"
          >
            Apply for a Pre-Analysis
          </Link>
        </div>
      ),
    },
  ],
  faqs: [
    {
      q: "How does the Russia medical market entry process work?",
      a: "We first assess product and market fit, then plan partner/channel development and local operation steps according to project scope.",
    },
    {
      q: "Which medical product categories do you support?",
      a: "We focus on B2B medical categories including medical devices, consumables and healthcare products.",
    },
    {
      q: "Do you guarantee finding a distributor?",
      a: "No. We research and evaluate potential companies; we do not guarantee meetings or agreements.",
    },
    {
      q: "Do you support certification and registration processes?",
      a: "We can support process planning within project scope. We do not guarantee official approval, registration or certification.",
    },
  ],
};

export const medicalServiceRU = {
  icon: HeartPulse,
  title: "Управляем выходом медицинских и товаров для здравоохранения на рынок России",
  metaTitle: "Медицинские продукты и товары для здравоохранения в России | Russia Market Entry",
  metaDescription:
    "Выход медицинских изделий, расходных материалов и товаров для здравоохранения на рынок РФ: оценка рынка, поиск дистрибьюторов, каналы продаж и локальные операции.",
  description:
    "От выхода медизделий, расходников и товаров для здравоохранения на рынок России до поиска коммерческих партнёров, каналов продаж и локальных операций — ведём процесс вместе с вами.",
  ctaLabel: "Оценить потенциал рынка РФ",
  forWhom: (
    <ul className="list-disc pl-5 space-y-2 text-[15px]">
      <li>Производители медицинского оборудования и изделий</li>
      <li>Бренды расходных материалов и одноразовых изделий</li>
      <li>Компании с продуктами для здравоохранения и профессионального применения</li>
      <li>Фирмы, строящие B2B-продажи и сеть дистрибьюторов в России</li>
    </ul>
  ),
  contentSections: [
    {
      title: "Почему медицинский сегмент особенный?",
      content: (
        <div className="space-y-5 text-slate-600">
          <p>
            Выход медицинских продуктов в Россию — это не только поиск канала продаж. Нужно совместно оценить
            соответствие продукту рынку, управлять процессами, найти правильного коммерческого партнёра и выстроить
            операции после продажи.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className={infoCard}>
              <p className="font-bold text-primary-500 mb-1">Соответствие рынку</p>
              <p>Оцениваем, насколько ваш ассортимент подходит спросу, структуре каналов и конкуренции в РФ.</p>
            </div>
            <div className={infoCard}>
              <p className="font-bold text-primary-500 mb-1">Коммерческие партнёры</p>
              <p>Исследуем и приоритизируем дистрибьюторов, импортёров и корпоративных закупщиков.</p>
            </div>
            <div className={infoCard}>
              <p className="font-bold text-primary-500 mb-1">Позиционирование</p>
              <p>Уточняем целевой сегмент, ценовой диапазон и коммерческое сообщение продукта.</p>
            </div>
            <div className={infoCard}>
              <p className="font-bold text-primary-500 mb-1">Локальные операции</p>
              <p>Управляем продажами, запасами, логистикой и показателями в устойчивой структуре.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "С какими продуктами мы работаем?",
      content: (
        <div className="space-y-4 text-slate-600">
          <div className={flowCard}>
            <p className="font-bold text-primary-500 mb-2">Медицинские изделия и оборудование</p>
            <p>
              Диагностическое и лечебное оборудование, портативные приборы, продукты для клинического применения и
              смежные категории — выход на рынок и коммерческое развитие.
            </p>
          </div>
          <div className={flowCard}>
            <p className="font-bold text-primary-500 mb-2">Расходные материалы</p>
            <p>
              Одноразовые изделия, наборы для процедур, стерильные расходники и категории с высоким объёмом — развитие
              каналов и партнёров.
            </p>
          </div>
          <div className={flowCard}>
            <p className="font-bold text-primary-500 mb-2">Товары для здравоохранения</p>
            <p>
              Продукты профессионального применения, категории здоровья и ухода, а также — где уместно — каналы
              корпоративных закупок.
            </p>
          </div>
          <p className="text-[14px] text-slate-500">
            Требуемые процессы зависят от категории. Мы не гарантируем сертификацию, регистрацию или доступ к
            госсектору; планируем процессы совместно в рамках проекта.
          </p>
        </div>
      ),
    },
    {
      title: "Модель выхода на рынок России",
      content: (
        <div className="space-y-4 text-slate-600">
          <div className="flex flex-wrap items-center gap-2 text-[13px] md:text-[14px] font-semibold text-primary-600">
            {[
              "Производитель в Турции",
              "Анализ рынка и продукта",
              "Партнёры / каналы",
              "Операции в России",
              "Продажи и рост",
            ].map((step, i, arr) => (
              <span key={step} className="inline-flex items-center gap-2">
                <span className="bg-slate-50 border border-slate-100 rounded-xl px-3 py-2">{step}</span>
                {i < arr.length - 1 && <span className="text-accent-500">→</span>}
              </span>
            ))}
          </div>
          <p>
            Соединяем структуру производителя в Турции с коммерческими и операционными процессами в России. На каждом
            этапе решения опираются на рыночные данные, соответствие партнёра и операционную реальность.
          </p>
        </div>
      ),
    },
    {
      title: "Что мы делаем?",
      content: (
        <div className="space-y-4 text-slate-600">
          {[
            {
              n: "01",
              t: "Исследование рынка",
              d: "Анализируем категорию, спрос, конкурентов, ценовые диапазоны и потенциальные каналы.",
            },
            {
              n: "02",
              t: "Соответствие продукта рынку",
              d: "Согласуем ассортимент с целевым сегментом, моделью продаж и ожиданиями рынка РФ.",
            },
            {
              n: "03",
              t: "Поиск дистрибьюторов",
              d: "Исследуем и оцениваем потенциальных дистрибьюторов, импортёров и корпоративных закупщиков.",
            },
            {
              n: "04",
              t: "Коммерческие переговоры",
              d: "В рамках проекта поддерживаем коммерческую коммуникацию с подходящими компаниями.",
            },
            {
              n: "05",
              t: "Развитие каналов продаж",
              d: "Выстраиваем B2B, корпоративные продажи и дополнительные каналы, где это уместно.",
            },
            {
              n: "06",
              t: "Локальные операции",
              d: "Связываем учёт продаж, запасы, логистику и отчётность с операционной структурой.",
            },
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
      title: "Мы не просто ищем партнёров",
      content: (
        <div className="space-y-4 text-slate-600">
          <p className="text-[16px] font-semibold text-primary-500 leading-relaxed">
            Мы не просто передаём список партнёров.
          </p>
          <p>
            Оцениваем коммерческий потенциал вашего продукта в России, определяем правильный канал и вместе выстраиваем
            операционную инфраструктуру после продаж. Исследование, коммерческое развитие и полевые операции ведёт одна
            команда.
          </p>
        </div>
      ),
    },
    {
      title: "Управляем операциями на основе данных",
      content: (
        <div className="space-y-3 text-slate-600">
          <p>
            В процессе развития рынка отслеживаем продажи, затраты, запасы, логистику и показатели эффективности в
            единой операционной структуре. Решения опираются на реальность продаж и операций, а не только на отчёты.
          </p>
          <p className="text-[14px]">
            Подробнее о модели работы:{" "}
            <Link to="/ru/model-raboty" className="text-accent-500 font-semibold hover:underline">
              Модель работы
            </Link>
          </p>
        </div>
      ),
    },
    {
      title: "Давайте вместе оценим медицинский потенциал вашего продукта в России",
      content: (
        <div className="space-y-4 text-slate-600">
          <p>
            Вместе оценим потенциал вашего продукта на рынке России, подходящую операционную модель и возможности роста.
          </p>
          <Link
            to={contactPath(true)}
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 transition-colors text-white font-bold px-5 py-3 rounded-xl text-[14px]"
          >
            Запросить предварительный анализ
          </Link>
        </div>
      ),
    },
  ],
  faqs: [
    {
      q: "Как проходит выход на медицинский рынок России?",
      a: "Сначала оцениваем соответствие продукта рынку, затем планируем развитие партнёров/каналов и локальные операции в рамках проекта.",
    },
    {
      q: "С какими категориями медицинских продуктов вы работаете?",
      a: "Фокус на B2B-категориях: медизделия и оборудование, расходники и товары для здравоохранения.",
    },
    {
      q: "Гарантируете ли вы поиск дистрибьютора?",
      a: "Нет. Мы исследуем и оцениваем потенциальные компании; переговоры и сделки не гарантируем.",
    },
    {
      q: "Помогаете ли с сертификацией и регистрацией?",
      a: "Можем поддержать планирование процессов в рамках проекта. Официальное одобрение, регистрацию или сертификацию не гарантируем.",
    },
  ],
};
