import { BlogPost } from "./blogData";
import { Link } from "react-router-dom";

export const blogPostsRU: BlogPost[] = [
  {
    lang: "ru",
    slug: "registraciya-kompanii-v-turtsii-dlya-inostrantsev-poshagovoe-rukovodstvo-2026",
    metaTitle: "Регистрация компании в Турции для иностранцев (Limited Şirket) 2026",
    metaTitleRu: "Регистрация компании в Турции для иностранцев (Limited Şirket) 2026",
    title: "Регистрация компании (Limited Şirket) в Турции для граждан РФ: пошаговое руководство 2026",
    titleRu: "Регистрация компании (Limited Şirket) в Турции для граждан РФ: пошаговое руководство 2026",
    excerpt: "Полное пошаговое руководство по открытию бизнеса в Турции: выбор формы Limited Şirket, уставный капитал, налоговый номер, регистрация в Торговой палате (İTO) и открытие мультивалютных счетов.",
    excerptRu: "Полное пошаговое руководство по открытию бизнеса в Турции: выбор формы Limited Şirket, уставный капитал, налоговый номер, регистрация в Торговой палате (İTO) и открытие мультивалютных счетов.",
    publishedAt: "20 Mayıs 2026",
    publishedAtRu: "20 мая 2026",
    readTime: "7 dk okuma",
    readTimeRu: "7 мин чтения",
    imageUrl: "/blog1.jpeg",
    content: (
      <div className="space-y-8">
        <p className="text-lg leading-relaxed text-slate-600">
          В 2026 году Турция остается одним из ключевых международных торгово-финансовых хабов для предпринимателей из России и стран СНГ. Законодательство Турции (Закон о прямых иностранных инвестициях № 4875) гарантирует иностранцам абсолютно равные права с местными гражданами: 100% иностранное владение, право быть директором и свободное открытие счетов.
        </p>

        <div className="bg-primary-50 p-6 rounded-2xl border border-primary-100">
          <h3 className="text-xl font-bold text-primary-600 mb-2">Главная коммерческая услуга</h3>
          <p className="text-slate-700 text-sm mb-4">
            Хотите открыть компанию без бюрократических задержек? Наша команда в Стамбуле берет на себя регистрацию, банковский счет, юридический адрес и бухгалтерию под ключ.
          </p>
          <Link
            to="/ru/kompaniya-v-turtsii"
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors"
          >
            Перейти к услуге регистрации компании в Турции →
          </Link>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">
            1. Почему Limited Şirket (ООО) — оптимальная форма?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Для 95% международных проектов подходит форма <strong>Limited Şirket (LTD)</strong>. Она является полным аналогом Общества с ограниченной ответственностью (ООО):
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li><strong>Уставный капитал:</strong> Минимальный капитал составляет 50 000 TRY. Закон позволяет оплатить его в течение 24 месяцев после регистрации.</li>
            <li><strong>Учредители:</strong> От 1 до 50 физических или юридических лиц (могут быть 100% нерезидентами).</li>
            <li><strong>Ответственность:</strong> Учредители отвечают по обязательствам компании только в пределах своего вклада.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">
            2. Пошаговый процесс открытия компании
          </h2>
          <ol className="list-decimal pl-6 space-y-3 text-slate-600">
            <li><strong>Подготовка загранпаспортов и нотариальный перевод:</strong> Оформление апостилированных переводов и получение турецких налоговых номеров (Vergi Kimlik Numarası) для учредителей.</li>
            <li><strong>Регистрация в системе MERSİS:</strong> Создание электронного устава компании с точным подбором кодов экономической деятельности (NACE).</li>
            <li><strong>Оформление юридического адреса:</strong> Аренда виртуального или физического офиса в Стамбуле.</li>
            <li><strong>Подача в Торговую палату Стамбула (İTO):</strong> Получение свидетельства о регистрации и публикация в Торговом вестнике (Ticaret Sicil Gazetesi).</li>
            <li><strong>Договор с сертифицированным бухгалтером (Mali Müşavir):</strong> Назначение лицензированного бухгалтера — обязательное требование турецкого права.</li>
            <li><strong>Открытие мультивалютных счетов в банках:</strong> Ziraat Bankası, Vakıfbank, İş Bankası с подключением SWIFT в USD, EUR, TRY, RUB.</li>
          </ol>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mt-8">
          <h3 className="text-lg font-bold text-slate-900 mb-3">Связанные практические статьи:</h3>
          <ul className="space-y-2 text-sm text-primary-500 font-medium">
            <li><Link to="/ru/blog/otkrytie-bankovskogo-scheta-v-turtsii-dlya-yuridicheskih-i-fizicheskih-lits" className="hover:underline">→ Открытие корпоративного и личного банковского счета в Турции</Link></li>
            <li><Link to="/ru/blog/nalogi-v-turtsii-dlya-biznesa-kurumlar-kdv-optimizatsiya" className="hover:underline">→ Налоговая система Турции: налог на прибыль (Kurumlar) и НДС</Link></li>
            <li><Link to="/ru/blog/vnzh-ikamet-i-rabochaya-viza-v-turtsii-pri-otkrytii-biznesa" className="hover:underline">→ Оформление ВНЖ (Икамет) при открытии бизнеса</Link></li>
          </ul>
        </div>
      </div>
    )
  },

  {
    lang: "ru",
    slug: "otkrytie-bankovskogo-scheta-v-turtsii-dlya-yuridicheskih-i-fizicheskih-lits",
    metaTitle: "Открытие банковского счета в Турции для компаний и физлиц 2026",
    metaTitleRu: "Открытие банковского счета в Турции для компаний и физлиц 2026",
    title: "Открытие корпоративного и личного банковского счета в Турции для иностранцев",
    titleRu: "Открытие корпоративного и личного банковского счета в Турции для иностранцев",
    excerpt: "Как открыть расчетный счет турецкой компании в Ziraat, Vakıfbank, İş Bankası. Требования комплаенс, валюты счетов (USD, EUR, TRY, RUB) и переводы SWIFT.",
    excerptRu: "Как открыть расчетный счет турецкой компании в Ziraat, Vakıfbank, İş Bankası. Требования комплаенс, валюты счетов (USD, EUR, TRY, RUB) и переводы SWIFT.",
    publishedAt: "19 Mayıs 2026",
    publishedAtRu: "19 мая 2026",
    readTime: "6 dk okuma",
    readTimeRu: "6 мин чтения",
    imageUrl: "/blog3.png",
    content: (
      <div className="space-y-8">
        <p className="text-lg leading-relaxed text-slate-600">
          Банковская система Турции остается одной из самых стабильных и открытых для международного бизнеса. Наличие корпоративного счета в турецком банке открывает возможность проводить прямые расчеты с контрагентами по всему миру через SWIFT, принимать платежи от маркетплейсов и конвертировать выручку.
        </p>

        <div className="bg-primary-50 p-6 rounded-2xl border border-primary-100">
          <h3 className="text-xl font-bold text-primary-600 mb-2">Комплексное открытие счетов под ключ</h3>
          <p className="text-slate-700 text-sm mb-4">
            Мы организуем открытие корпоративных счетов для компаний с иностранными учредителями в крупнейших банках Турции с гарантией прохождения комплаенса.
          </p>
          <Link to="/ru/kompaniya-v-turtsii" className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors">
            Узнать подробнее об открытии бизнеса и счетов →
          </Link>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">
            Ведущие банки для работы с иностранным капиталом
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li><strong>Ziraat Bankası:</strong> Крупнейший государственный банк, лояльный комплаенс к внешнеторговым контрактам и прямым переводам.</li>
            <li><strong>Vakıfbank:</strong> Государственный банк с развитым интернет-банкингом и мультивалютными счетами (RUB, TRY, USD, EUR).</li>
            <li><strong>Türkiye İş Bankası:</strong> Ведущий коммерческий банк с высокими лимитами для экспортно-импортных операций.</li>
            <li><strong>Denizbank и Emlak Katılım:</strong> Альтернативные варианты для торговых и логистических проектов.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">
            Необходимый пакет документов
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>Свидетельство о регистрации компании (Ticaret Sicil Gazetesi)</li>
            <li>Налоговая пластина (Vergi Levhası) и налоговый номер компании</li>
            <li>Циркуляр подписей директора (İmza Sirküleri), заверенный турецким нотариусом</li>
            <li>Загранпаспорта учредителей и директора с нотариальным переводом</li>
            <li>Договор аренды юридического адреса (Kira Sözleşmesi)</li>
          </ul>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mt-8">
          <h3 className="text-lg font-bold text-slate-900 mb-3">Читайте также:</h3>
          <ul className="space-y-2 text-sm text-primary-500 font-medium">
            <li><Link to="/ru/blog/kak-otkryt-bankovskiy-schet-v-turcii-inostrancu" className="hover:underline">→ Как открыть банковский счёт в Турции иностранцу в 2026 году</Link></li>
            <li><Link to="/ru/blog/registraciya-kompanii-v-turtsii-dlya-inostrantsev-poshagovoe-rukovodstvo-2026" className="hover:underline">→ Регистрация компании в Турции: пошаговое руководство</Link></li>
            <li><Link to="/ru/blog/torgovlya-i-logistika-mezhdu-turtsiey-i-rossiey-tamozhnya-i-raschety" className="hover:underline">→ Торговля и логистика между Турцией и Россией</Link></li>
          </ul>
        </div>
      </div>
    )
  },

  {
    lang: "ru",
    slug: "nalogi-v-turtsii-dlya-biznesa-kurumlar-kdv-optimizatsiya",
    metaTitle: "Налоги в Турции для бизнеса: Kurumlar, KDV и СИДН 2026",
    metaTitleRu: "Налоги в Турции для бизнеса: Kurumlar, KDV и СИДН 2026",
    title: "Налоговая система Турции: налог на прибыль (Kurumlar Vergisi), НДС (KDV) и оптимизация",
    titleRu: "Налоговая система Турции: налог на прибыль (Kurumlar Vergisi), НДС (KDV) и оптимизация",
    excerpt: "Разбор налогообложения турецких юридических лиц: ставки корпоративного налога 25%, шкала НДС (1%, 10%, 20%), налог на дивиденды (Stopaj) и Соглашение об избежании двойного налогообложения с РФ.",
    excerptRu: "Разбор налогообложения турецких юридических лиц: ставки корпоративного налога 25%, шкала НДС (1%, 10%, 20%), налог на дивиденды (Stopaj) и Соглашение об избежании двойного налогообложения с РФ.",
    publishedAt: "18 Mayıs 2026",
    publishedAtRu: "18 мая 2026",
    readTime: "6 dk okuma",
    readTimeRu: "6 мин чтения",
    imageUrl: "/blog4.png",
    content: (
      <div className="space-y-8">
        <p className="text-lg leading-relaxed text-slate-600">
          Понимание структуры налогов в Турции позволяет заранее рассчитать маржинальность бизнеса и избежать переплат. Налоговое законодательство Турции прозрачно и соответствует европейским стандартам бухгалтерского учета.
        </p>

        <div className="bg-primary-50 p-6 rounded-2xl border border-primary-100">
          <h3 className="text-xl font-bold text-primary-600 mb-2">Налоговое сопровождение и Mali Müşavir</h3>
          <p className="text-slate-700 text-sm mb-4">
            Наши сертифицированные турецкие бухгалтеры ведут учет, готовят ежемесячные декларации и применяют законные льготы для снижения налогооблагаемой базы.
          </p>
          <Link to="/ru/kompaniya-v-turtsii" className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors">
            Узнать о пакете с бухгалтерским сопровождением →
          </Link>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">
            Основные налоги для компаний в Турции (2026)
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-slate-600">
            <li><strong>Корпоративный налог на прибыль (Kurumlar Vergisi):</strong> Базовая ставка составляет <strong>25%</strong> от чистой налогооблагаемой прибыли. Для компаний в сфере экспорта действует сниженная ставка (скидка 5 процентных пунктов).</li>
            <li><strong>НДС (Katma Değer Vergisi — KDV):</strong> Стандартная ставка — <strong>20%</strong>. Льготные ставки — 10% (одежда, обувь, текстиль) и 1% (базовые продукты питания). Экспортные поставки облагаются по ставке <strong>0% НДС</strong> с правом возврата входящего налога.</li>
            <li><strong>Налог на распределение дивидендов (Stopaj):</strong> 10% при выплате дивидендов учредителям-физическим лицам.</li>
            <li><strong>Гербовый сбор (Damga Vergisi):</strong> Небольшой сбор (0.189%–0.948%) при подписании официальных договоров и сдаче отчетности.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">
            Соглашение об избежании двойного налогообложения (СИДН)
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Между Россией и Турецкой Республикой действует Соглашение от 1997 года. Налог на прибыль, уплаченный в Турции, может быть официально зачтен при подаче налоговой декларации в РФ, что защищает бизнес от двойного списания средств.
          </p>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mt-8">
          <h3 className="text-lg font-bold text-slate-900 mb-3">Связанные статьи:</h3>
          <ul className="space-y-2 text-sm text-primary-500 font-medium">
            <li><Link to="/ru/blog/yuridicheskiy-adres-i-buhgalter-mali-musavir-v-turtsii" className="hover:underline">→ Юридический адрес и бухгалтер (Mali Müşavir) в Турции</Link></li>
            <li><Link to="/ru/blog/registraciya-kompanii-v-turtsii-dlya-inostrantsev-poshagovoe-rukovodstvo-2026" className="hover:underline">→ Пошаговое руководство по регистрации компании</Link></li>
          </ul>
        </div>
      </div>
    )
  },

  {
    lang: "ru",
    slug: "vnzh-ikamet-i-rabochaya-viza-v-turtsii-pri-otkrytii-biznesa",
    metaTitle: "ВНЖ (Икамет) и рабочая виза в Турции при открытии бизнеса 2026",
    metaTitleRu: "ВНЖ (Икамет) и рабочая виза в Турции при открытии бизнеса 2026",
    title: "ВНЖ (Икамет) и рабочая виза в Турции при открытии бизнеса: процедуры и условия",
    titleRu: "ВНЖ (Икамет) и рабочая виза в Турции при открытии бизнеса: процедуры и условия",
    excerpt: "Как иностранному учредителю турецкой компании оформить коммерческий ВНЖ (İkamet), рабочее разрешение (Çalışma İzni) и выполнить государственные требования.",
    excerptRu: "Как иностранному учредителю турецкой компании оформить коммерческий ВНЖ (İkamet), рабочее разрешение (Çalışma İzni) и выполнить государственные требования.",
    publishedAt: "17 Mayıs 2026",
    publishedAtRu: "17 мая 2026",
    readTime: "5 dk okuma",
    readTimeRu: "5 мин чтения",
    imageUrl: "/blog5.png",
    content: (
      <div className="space-y-8">
        <p className="text-lg leading-relaxed text-slate-600">
          Владение бизнесом в Турции дает иностранным предпринимателям законное основание для длительного проживания в стране, оформления коммерческого ВНЖ (İkamet) и рабочей визы (Çalışma İzni).
        </p>

        <div className="bg-primary-50 p-6 rounded-2xl border border-primary-100">
          <h3 className="text-xl font-bold text-primary-600 mb-2">Оформление бизнеса и ВНЖ в едином пакете</h3>
          <p className="text-slate-700 text-sm mb-4">
            Мы помогаем не только зарегистрировать юридическое лицо, но и подготовить пакет документов для подачи на ВНЖ учредителя и членов его семьи.
          </p>
          <Link to="/ru/kompaniya-v-turtsii" className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors">
            Подробнее об услугах релокации бизнеса →
          </Link>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">
            Краткосрочный коммерческий ВНЖ (Ticari İkamet)
          </h2>
          <p className="text-slate-600 leading-relaxed">
            После регистрации компании и получения свидетельства Ticaret Sicil Gazetesi учредитель имеет право подать заявку в Миграционную службу Турции (Göç İdaresi) на получение коммерческого ВНЖ сроком на 1–2 года с правом продления.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">
            Рабочее разрешение (Çalışma İzni) и правило 5:1
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Если иностранный учредитель планирует официально получать заработную плату в качестве директора, оформляется разрешение на работу через Министерство труда. По стандартным правилам требуется найм 5 граждан Турции, однако в первый год для ряда экспортеров и IT-компаний действуют льготные послабления.
          </p>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mt-8">
          <h3 className="text-lg font-bold text-slate-900 mb-3">Читайте также:</h3>
          <ul className="space-y-2 text-sm text-primary-500 font-medium">
            <li><Link to="/ru/blog/registraciya-kompanii-v-turtsii-dlya-inostrantsev-poshagovoe-rukovodstvo-2026" className="hover:underline">→ Регистрация компании в Турции: пошаговое руководство</Link></li>
            <li><Link to="/ru/blog/otkrytie-bankovskogo-scheta-v-turtsii-dlya-yuridicheskih-i-fizicheskih-lits" className="hover:underline">→ Открытие банковского счета в Турции</Link></li>
          </ul>
        </div>
      </div>
    )
  },

  {
    lang: "ru",
    slug: "torgovlya-i-logistika-mezhdu-turtsiey-i-rossiey-tamozhnya-i-raschety",
    metaTitle: "Торговля и логистика Турция — Россия: таможня и расчеты 2026",
    metaTitleRu: "Торговля и логистика Турция — Россия: таможня и расчеты 2026",
    title: "Торговля и логистика между Турцией и Россией: таможенное оформление, параллельный импорт и взаиморасчеты",
    titleRu: "Торговля и логистика между Турцией и Россией: таможенное оформление, параллельный импорт и взаиморасчеты",
    excerpt: "Как выстроить бесперебойный торговый коридор между Турцией и РФ: таможенная очистка, логистические маршруты (авто/море), расчеты в рублях и лирах, сертификация EAC.",
    excerptRu: "Как выстроить бесперебойный торговый коридор между Турцией и РФ: таможенная очистка, логистические маршруты (авто/море), расчеты в рублях и лирах, сертификация EAC.",
    publishedAt: "16 Mayıs 2026",
    publishedAtRu: "16 мая 2026",
    readTime: "8 dk okuma",
    readTimeRu: "8 мин чтения",
    imageUrl: "/blog6.png",
    content: (
      <div className="space-y-8">
        <p className="text-lg leading-relaxed text-slate-600">
          Товарооборот между Турцией и Россией в 2026 году сохраняет рекордные показатели. Турция служит ключевым транзитным и производственным узлом для поставок текстиля, обуви, промышленного оборудования, автозапчастей и сырья.
        </p>

        <div className="bg-primary-50 p-6 rounded-2xl border border-primary-100">
          <h3 className="text-xl font-bold text-primary-600 mb-2">Комплексная логистика и фулфилмент</h3>
          <p className="text-slate-700 text-sm mb-4">
            Мы обеспечиваем забор груза с турецких фабрик, экспортную таможню в Стамбуле, маркировку «Честный ЗНАК» и доставку до дверей склада или маркетплейса в РФ.
          </p>
          <Link to="/ru/kompaniya-v-turtsii" className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors">
            Рассчитать логистику и запустить проект →
          </Link>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">
            Ключевые логистические маршруты
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li><strong>Автотранспорт через Грузию / Азербайджан:</strong> Транзитное время 7–10 дней от Стамбула до Москвы. Оптимально для сборных и генеральных грузов.</li>
            <li><strong>Морские паромы и контейнеры (Новороссийск / Туапсе):</strong> Экономичный вариант для крупнотоннажных партий, станков и сырья.</li>
            <li><strong>Авиасообщение (Стамбул — Москва):</strong> Экспресс-доставка за 2–4 дня для образцов, срочных поставок и электроники.</li>
          </ul>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mt-8">
          <h3 className="text-lg font-bold text-slate-900 mb-3">Читайте также:</h3>
          <ul className="space-y-2 text-sm text-primary-500 font-medium">
            <li><Link to="/ru/blog/eksport-iz-turtsii-na-marketpleysy-wildberries-ozon" className="hover:underline">→ Экспорт товаров из Турции на маркетплейсы WB и Ozon</Link></li>
            <li><Link to="/ru/blog/registraciya-kompanii-v-turtsii-dlya-inostrantsev-poshagovoe-rukovodstvo-2026" className="hover:underline">→ Открытие компании в Турции для ВЭД</Link></li>
          </ul>
        </div>
      </div>
    )
  },

  {
    lang: "ru",
    slug: "yuridicheskiy-adres-i-buhgalter-mali-musavir-v-turtsii",
    metaTitle: "Юридический адрес и бухгалтер (Mali Müşavir) в Турции 2026",
    metaTitleRu: "Юридический адрес и бухгалтер (Mali Müşavir) в Турции 2026",
    title: "Юридический адрес и бухгалтерское сопровождение (Mali Müşavir) в Турции для иностранных учредителей",
    titleRu: "Юридический адрес и бухгалтерское сопровождение (Mali Müşavir) в Турции для иностранных учредителей",
    excerpt: "Зачем компании в Турции нужен виртуальный или реальный юридический адрес, как проходит проверка налоговой инспекции (Yoklama) и почему бухгалтер Mali Müşavir обязателен по закону.",
    excerptRu: "Зачем компании в Турции нужен виртуальный или реальный юридический адрес, как проходит проверка налоговой инспекции (Yoklama) и почему бухгалтер Mali Müşavir обязателен по закону.",
    publishedAt: "15 Mayıs 2026",
    publishedAtRu: "15 мая 2026",
    readTime: "5 dk okuma",
    readTimeRu: "5 мин чтения",
    imageUrl: "/blog7.png",
    content: (
      <div className="space-y-8">
        <p className="text-lg leading-relaxed text-slate-600">
          В турецком законодательстве институты юридического адреса и присяжного бухгалтера строго регламентированы. Без официального адреса и лицензированного бухгалтера компания не может получить свидетельство о постановке на учет.
        </p>

        <div className="bg-primary-50 p-6 rounded-2xl border border-primary-100">
          <h3 className="text-xl font-bold text-primary-600 mb-2">Юридический адрес и бухгалтерское обслуживание</h3>
          <p className="text-slate-700 text-sm mb-4">
            Предоставляем юридические адреса в деловых центрах Стамбула (Шишли, Левент, Кадыкёй) и профессиональное сопровождение от русскоязычных присяжных бухгалтеров.
          </p>
          <Link to="/ru/kompaniya-v-turtsii" className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors">
            Подключить адрес и бухгалтерию →
          </Link>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">
            Виртуальный офис (Sanal Ofis) vs Реальный офис
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Для торговли, IT и консалтинга турецкий закон полностью разрешает использование виртуальных адресов (Sanal Ofis). Это экономит до 90% расходов на аренду офиса, обеспечивая прием корреспонденции и успешное прохождение налоговой проверки (Yoklama).
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">
            Кто такой Mali Müşavir?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Mali Müşavir — это сертифицированный государственный присяжный бухгалтер, несущий персональную юридическую ответственность за правильность сдачи деклараций компании. Ни одна компания в Турции не может существовать без официального договора с Mali Müşavir.
          </p>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mt-8">
          <h3 className="text-lg font-bold text-slate-900 mb-3">Читайте также:</h3>
          <ul className="space-y-2 text-sm text-primary-500 font-medium">
            <li><Link to="/ru/blog/nalogi-v-turtsii-dlya-biznesa-kurumlar-kdv-optimizatsiya" className="hover:underline">→ Налоги в Турции: налог на прибыль и НДС</Link></li>
            <li><Link to="/ru/blog/registraciya-kompanii-v-turtsii-dlya-inostrantsev-poshagovoe-rukovodstvo-2026" className="hover:underline">→ Регистрация компании в Турции</Link></li>
          </ul>
        </div>
      </div>
    )
  },

  {
    lang: "ru",
    slug: "eksport-iz-turtsii-na-marketpleysy-wildberries-ozon",
    metaTitle: "Экспорт из Турции на Wildberries и Ozon через турецкое юрлицо 2026",
    metaTitleRu: "Экспорт из Турции на Wildberries и Ozon через турецкое юрлицо 2026",
    title: "Экспорт товаров из Турции на маркетплейсы Wildberries и Ozon через турецкое юрлицо",
    titleRu: "Экспорт товаров из Турции на маркетплейсы Wildberries и Ozon через турецкое юрлицо",
    excerpt: "Схема поставок одежды, текстиля и обуви из Турции на маркетплейсы РФ: маркировка Честный ЗНАК, сертификаты EAC, склады FBO/FBS и вывод валютной выручки.",
    excerptRu: "Схема поставок одежды, текстиля и обуви из Турции на маркетплейсы РФ: маркировка Честный ЗНАК, сертификаты EAC, склады FBO/FBS и вывод валютной выручки.",
    publishedAt: "14 Mayıs 2026",
    publishedAtRu: "14 мая 2026",
    readTime: "6 dk okuma",
    readTimeRu: "6 мин чтения",
    imageUrl: "/blog8.png",
    content: (
      <div className="space-y-8">
        <p className="text-lg leading-relaxed text-slate-600">
          Спрос на турецкую одежду, домашний текстиль и косметику на Wildberries и Ozon продолжает стремительно расти. Поставки напрямую от фабрик через турецкое юридическое лицо дают селлерам колоссальное преимущество по себестоимости и эксклюзивности ассортимента.
        </p>

        <div className="bg-primary-50 p-6 rounded-2xl border border-primary-100">
          <h3 className="text-xl font-bold text-primary-600 mb-2">Интеграция с маркетплейсами под ключ</h3>
          <p className="text-slate-700 text-sm mb-4">
            Мы настраиваем работу с Wildberries и Ozon: от закупки на фабриках в Стамбуле до нанесения DataMatrix кодов и сдачи партий на склады Коледино и Казань.
          </p>
          <Link to="/ru/kompaniya-v-turtsii" className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors">
            Запустить продажи товаров из Турции →
          </Link>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">
            Схема работы: от турецкой фабрики до покупателя
          </h2>
          <ol className="list-decimal pl-6 space-y-3 text-slate-600">
            <li><strong>Закупка и брендинг:</strong> Заказ партий на фабриках Стамбула, Бурсы или Денизли под вашей торговой маркой.</li>
            <li><strong>Маркировка «Честный ЗНАК»:</strong> Генерация кодов в системе ЦРПТ и наклеивание стикеров на складе в Стамбуле.</li>
            <li><strong>Экспорт и таможенное декларирование:</strong> Оформление деклараций соответствия EAC и официальный экспорт со ставкой 0% НДС.</li>
            <li><strong>Поставка на склады FBO:</strong> Сдача на распределительные хабы Wildberries и Ozon с доставкой покупателю за 24–48 часов.</li>
          </ol>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mt-8">
          <h3 className="text-lg font-bold text-slate-900 mb-3">Читайте также:</h3>
          <ul className="space-y-2 text-sm text-primary-500 font-medium">
            <li><Link to="/ru/blog/torgovlya-i-logistika-mezhdu-turtsiey-i-rossiey-tamozhnya-i-raschety" className="hover:underline">→ Логистика и таможня Турция — Россия</Link></li>
            <li><Link to="/ru/blog/registraciya-kompanii-v-turtsii-dlya-inostrantsev-poshagovoe-rukovodstvo-2026" className="hover:underline">→ Регистрация компании в Турции под ключ</Link></li>
          </ul>
        </div>
      </div>
    )
  },

  {
    lang: "ru",
    slug: "limited-sirket-protiv-anonim-sirket-sravnenie-form-biznesa-v-turtsii",
    metaTitle: "Limited Şirket (ООО) vs Anonim Şirket (АО) в Турции 2026",
    metaTitleRu: "Limited Şirket (ООО) vs Anonim Şirket (АО) в Турции 2026",
    title: "Сравнение форм бизнеса в Турции: ООО (Limited Şirket) против АО (Anonim Şirket) для нерезидентов",
    titleRu: "Сравнение форм бизнеса в Турции: ООО (Limited Şirket) против АО (Anonim Şirket) для нерезидентов",
    excerpt: "Детальный сравнительный анализ Limited Şirket и Anonim Şirket в Турции: уставный капитал, органы управления, продажа долей и налогообложение.",
    excerptRu: "Детальный сравнительный анализ Limited Şirket и Anonim Şirket в Турции: уставный капитал, органы управления, продажа долей и налогообложение.",
    publishedAt: "13 Mayıs 2026",
    publishedAtRu: "13 мая 2026",
    readTime: "5 dk okuma",
    readTimeRu: "5 мин чтения",
    imageUrl: "/blog9.png",
    content: (
      <div className="space-y-8">
        <p className="text-lg leading-relaxed text-slate-600">
          При выходе на рынок Турции ключевой юридический вопрос — выбор между <strong>Limited Şirket (ООО)</strong> и <strong>Anonim Şirket (АО)</strong>. Обе формы дают статус турецкого юридического лица со всеми правами, но имеют важные отличия в управлении и капитале.
        </p>

        <div className="bg-primary-50 p-6 rounded-2xl border border-primary-100">
          <h3 className="text-xl font-bold text-primary-600 mb-2">Подбор оптимальной юридической формы</h3>
          <p className="text-slate-700 text-sm mb-4">
            Наши корпоративные юристы в Стамбуле проанализируют специфику вашего бизнеса и составят устав с защитой интересов учредителей.
          </p>
          <Link to="/ru/kompaniya-v-turtsii" className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors">
            Получить консультацию корпоративного юриста →
          </Link>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">
            Сравнительная таблица ключевых различий
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-slate-200 rounded-xl text-sm text-slate-700">
              <thead>
                <tr className="bg-slate-100 font-bold">
                  <th className="p-3 border border-slate-200">Критерий</th>
                  <th className="p-3 border border-slate-200 text-primary-600">Limited Şirket (ООО)</th>
                  <th className="p-3 border border-slate-200">Anonim Şirket (АО)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="p-3 font-semibold">Минимальный капитал (2026)</td>
                  <td className="p-3">50 000 TRY (оплата за 2 года)</td>
                  <td className="p-3">250 000 TRY (25% до регистрации)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Количество учредителей</td>
                  <td className="p-3">От 1 до 50</td>
                  <td className="p-3">От 1 до бесконечности</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Продажа / передача долей</td>
                  <td className="p-3">Через нотариуса и Торговую палату</td>
                  <td className="p-3">Простой передачей акций без нотариуса</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Налогообложение прибыли</td>
                  <td className="p-3">25% (Kurumlar Vergisi)</td>
                  <td className="p-3">25% (Kurumlar Vergisi)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mt-8">
          <h3 className="text-lg font-bold text-slate-900 mb-3">Читайте также:</h3>
          <ul className="space-y-2 text-sm text-primary-500 font-medium">
            <li><Link to="/ru/blog/registraciya-kompanii-v-turtsii-dlya-inostrantsev-poshagovoe-rukovodstvo-2026" className="hover:underline">→ Регистрация Limited Şirket в Турции: пошагово</Link></li>
            <li><Link to="/ru/blog/nalogi-v-turtsii-dlya-biznesa-kurumlar-kdv-optimizatsiya" className="hover:underline">→ Налоги для бизнеса в Турции</Link></li>
          </ul>
        </div>
      </div>
    )
  },

  {
    lang: "ru",
    slug: "mozhno-li-otkryt-kompaniyu-v-turtsii-bez-vnzh",
    metaTitle: "Можно ли открыть компанию в Турции без ВНЖ? Юридические нюансы 2026",
    metaTitleRu: "Можно ли открыть компанию в Турции без ВНЖ? Юридические нюансы 2026",
    title: "Можно ли открыть компанию в Турции без ВНЖ?",
    titleRu: "Можно ли открыть компанию в Турции без ВНЖ?",
    excerpt: "Регистрация компании в Турции для иностранцев без вида на жительство: различия между открытием компании, правом проживания и разрешением на работу.",
    excerptRu: "Регистрация компании в Турции для иностранцев без вида на жительство: различия между открытием компании, правом проживания и разрешением на работу.",
    publishedAt: "28 Ağustos 2026",
    publishedAtRu: "28 августа 2026",
    readTime: "7 dk okuma",
    readTimeRu: "7 мин чтения",
    imageUrl: "/uploads/blog/mozhno-li-otkryt-kompaniyu-v-turtsii-bez-vnzh-ru.png",
    content: (
      <div className="space-y-8">
        <p className="text-lg leading-relaxed text-slate-600">
          Это один из самых частых вопросов иностранных предпринимателей: «Нужно ли сначала получить ВНЖ, чтобы открыть компанию в Турции?» Короткий ответ: наличие ВНЖ не следует рассматривать как обязательное предварительное условие для самой регистрации компании.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Турция применяет принцип равного отношения к международным инвесторам: иностранные инвесторы имеют те же права и обязанности, что и местные инвесторы, а условия создания компании и передачи долей в целом соответствуют условиям для местных инвесторов. Но здесь есть очень важное различие: <strong>открытие компании, право проживания и право работать — это три разных вопроса.</strong>
        </p>

        <div className="bg-primary-50 p-6 rounded-2xl border border-primary-100">
          <h3 className="text-xl font-bold text-primary-600 mb-2">Регистрация компании в Турции для иностранцев</h3>
          <p className="text-slate-700 text-sm mb-4">
            Наша команда в Стамбуле помогает иностранным предпринимателям зарегистрировать компанию, открыть счёт, организовать бухгалтерию и выстроить дальнейшие административные процессы.
          </p>
          <Link
            to="/ru/kompaniya-v-turtsii"
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors"
          >
            Перейти к услуге регистрации компании в Турции →
          </Link>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">
            1. Компания и ВНЖ — разные процессы
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Иностранный предприниматель может рассматривать регистрацию компании как отдельный юридический процесс. Для регистрации могут потребоваться документы иностранного учредителя, включая паспорт и соответствующие переводы/заверения. Официальный инвестиционный портал также описывает получение потенциального налогового номера для иностранных участников.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Но после регистрации возникает другой вопрос: «Могу ли я жить в Турции?» И ещё один: «Могу ли я работать в Турции?» На эти вопросы уже распространяются другие правила.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">
            2. Компания не означает автоматический ВНЖ
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Создание компании в Турции само по себе нельзя трактовать как автоматическое получение вида на жительство. Если предприниматель хочет постоянно находиться в Турции, необходимо отдельно рассмотреть подходящий статус проживания.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Поэтому нельзя строить план «Открыть компанию → автоматически получить ВНЖ» как универсальную схему. Конкретные основания и условия необходимо проверять в соответствии с действующими миграционными правилами.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">
            3. Компания и разрешение на работу — тоже разные вопросы
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Ещё одна распространённая ошибка: «Если я владелец компании, значит я автоматически могу работать в Турции.» Это тоже не следует считать универсальным правилом. Право владения компанией и право осуществлять трудовую деятельность регулируются разными нормами.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Для иностранных граждан, которые планируют фактически работать в Турции, необходимо отдельно оценить необходимость соответствующего разрешения.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">
            4. Можно ли зарегистрировать компанию из-за границы?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            В определённых случаях регистрационные процедуры могут осуществляться с использованием доверенности и привлечением представителя. Официальное руководство Invest in Türkiye прямо предусматривает возможность проведения отдельных процедур через представителя по доверенности, в том числе при получении потенциального налогового номера.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Однако конкретная процедура зависит от гражданства, документов, структуры компании, места проживания, выбранного представителя и требований соответствующего органа. Поэтому перед началом процесса необходимо проверить конкретную ситуацию.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">
            5. Что понадобится иностранному предпринимателю?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            В зависимости от конкретной структуры могут потребоваться:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>паспорт;</li>
            <li>нотариально заверенный перевод;</li>
            <li>документы учредителя;</li>
            <li>адрес компании;</li>
            <li>уставные документы;</li>
            <li>потенциальный налоговый номер;</li>
            <li>доверенность, если процесс ведётся представителем;</li>
            <li>другие документы, предусмотренные регистрационными органами.</li>
          </ul>
          <p className="text-slate-600 leading-relaxed">
            Документы, оформленные за пределами Турции, могут требовать апостиля или консульской легализации и последующего перевода и нотариального заверения в Турции.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">
            6. Что делать после регистрации?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Если предприниматель зарегистрировал компанию, следующий этап зависит от его целей.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-slate-600">
            <li><strong>Если он живёт за пределами Турции:</strong> можно сосредоточиться на цепочке «Компания → Банк → Бухгалтерия → Торговля».</li>
            <li><strong>Если он хочет жить в Турции:</strong> дополнительно необходимо рассмотреть ВНЖ / соответствующий статус проживания.</li>
            <li><strong>Если он хочет работать в Турции:</strong> необходимо отдельно проверить разрешение на работу и соответствующие требования.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">
            7. Почему важно не смешивать эти процессы?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            У предпринимателя могут быть совершенно разные ситуации:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li><strong>Сценарий 1:</strong> предприниматель живёт в Германии, открывает компанию в Турции и управляет бизнесом дистанционно.</li>
            <li><strong>Сценарий 2:</strong> предприниматель хочет переехать в Турцию и заниматься бизнесом на месте.</li>
            <li><strong>Сценарий 3:</strong> предприниматель хочет открыть компанию в Турции для торговли между Турцией и Россией.</li>
            <li><strong>Сценарий 4:</strong> предприниматель хочет открыть e-commerce бизнес в Турции.</li>
          </ul>
          <p className="text-slate-600 leading-relaxed">
            Юридическая структура компании может быть похожей, но дальнейшие процессы будут различаться.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">
            Как мы помогаем иностранным предпринимателям
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Russia Market Entry рассматривает регистрацию компании не как отдельную формальность, а как первый этап создания бизнеса. Мы можем координировать:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-slate-600">
            <li>Регистрация компании</li>
            <li>Бухгалтерия</li>
            <li>Налоговая структура</li>
            <li>Банковские процессы</li>
            <li>ВНЖ / административные процедуры</li>
            <li>E-commerce</li>
            <li>Digital</li>
            <li>Коммерческая деятельность</li>
          </ol>
          <p className="text-slate-600 leading-relaxed">
            Для каждого клиента набор услуг определяется отдельно.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">
            Итог
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Да, иностранный предприниматель может рассматривать открытие компании в Турции без предварительного получения ВНЖ. Но необходимо чётко разделять: <strong>регистрация компании</strong>, <strong>право проживания</strong> и <strong>право на работу</strong> — это три разных процесса.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Поэтому перед регистрацией компании лучше сначала определить не только юридическую форму бизнеса, но и то, где предприниматель будет жить, где будет работать и каким образом будет осуществляться коммерческая деятельность.
          </p>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mt-8">
          <h3 className="text-lg font-bold text-slate-900 mb-3">Читайте также:</h3>
          <ul className="space-y-2 text-sm text-primary-500 font-medium">
            <li><Link to="/ru/blog/registraciya-kompanii-v-turtsii-dlya-inostrantsev-poshagovoe-rukovodstvo-2026" className="hover:underline">→ Как открыть компанию в Турции иностранцу в 2026 году</Link></li>
            <li><Link to="/ru/blog/kak-otkryt-bankovskiy-schet-v-turcii-inostrancu" className="hover:underline">→ Как открыть банковский счёт в Турции иностранцу в 2026 году</Link></li>
            <li><Link to="/ru/blog/limited-sirket-protiv-anonim-sirket-sravnenie-form-biznesa-v-turtsii" className="hover:underline">→ ООО или АО в Турции: сравнение форм бизнеса</Link></li>
            <li><Link to="/ru/blog/vnzh-ikamet-i-rabochaya-viza-v-turtsii-pri-otkrytii-biznesa" className="hover:underline">→ ВНЖ (Икамет) и рабочая виза при открытии бизнеса</Link></li>
          </ul>
        </div>
      </div>
    )
  },

  {
    lang: "ru",
    slug: "kak-otkryt-bankovskiy-schet-v-turcii-inostrancu",
    metaTitle: "Как открыть банковский счёт в Турции иностранцу в 2026 году?",
    metaTitleRu: "Как открыть банковский счёт в Турции иностранцу в 2026 году?",
    title: "Как открыть банковский счёт в Турции иностранцу в 2026 году?",
    titleRu: "Как открыть банковский счёт в Турции иностранцу в 2026 году?",
    excerpt:
      "Как иностранцу открыть банковский счёт в Турции в 2026 году? Документы, налоговый номер, ВНЖ, личный и корпоративный счёт для предпринимателей.",
    excerptRu:
      "Как иностранцу открыть банковский счёт в Турции в 2026 году? Документы, налоговый номер, ВНЖ, личный и корпоративный счёт для предпринимателей.",
    publishedAt: "3 Eylül 2026",
    publishedAtRu: "3 сентября 2026",
    readTime: "10 dk okuma",
    readTimeRu: "10 мин чтения",
    imageUrl: "/uploads/blog/kak-otkryt-bankovskiy-schet-v-turcii-inostrancu-ru.png",
    content: (
      <div className="space-y-8">
        <p className="text-lg leading-relaxed text-slate-600">
          Банковский счёт в Турции для иностранца — один из первых практических вопросов после переезда, открытия компании или начала бизнеса в стране. При этом наличие ВНЖ не является единственным фактором, который определяет возможность открытия счёта.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Для иностранного гражданина банк оценивает документы, личность клиента, адрес проживания, налоговый статус и цель открытия счёта. Если речь идёт о компании, процедура отличается и требует дополнительного пакета документов.
        </p>
        <p className="text-slate-600 leading-relaxed">
          В этой статье разберём, как открыть банковский счёт в Турции иностранцу в 2026 году, какие документы могут потребоваться, чем отличается личный счёт от корпоративного и на что обратить внимание предпринимателям.
        </p>

        <div className="bg-primary-50 p-6 rounded-2xl border border-primary-100">
          <h3 className="text-xl font-bold text-primary-600 mb-2">Планируете открыть компанию в Турции?</h3>
          <p className="text-slate-700 text-sm mb-4">
            Russia Market Entry помогает иностранным предпринимателям выстроить последовательность: регистрация компании, налоговая структура, банковский счёт, бухгалтерия и административные процедуры.
          </p>
          <Link
            to="/ru/kompaniya-v-turtsii"
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors"
          >
            Перейти к услуге регистрации компании в Турции →
          </Link>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">
            Можно ли иностранцу открыть банковский счёт в Турции?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Да, иностранные граждане могут открыть банковский счёт в Турции, однако конкретные требования зависят от банка, типа счёта и статуса клиента.
          </p>
          <p className="text-slate-600 leading-relaxed">
            ВНЖ может упростить подтверждение статуса и адреса, но сама возможность открытия счёта не должна рассматриваться исключительно через наличие или отсутствие ВНЖ.
          </p>
          <p className="text-slate-600 leading-relaxed">Например, банки могут запрашивать:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>действующий заграничный паспорт;</li>
            <li>налоговый номер или идентификационный номер иностранца;</li>
            <li>подтверждение адреса;</li>
            <li>турецкий номер телефона;</li>
            <li>дополнительные документы в зависимости от ситуации;</li>
            <li>информацию о целях использования счёта.</li>
          </ul>
          <p className="text-slate-600 leading-relaxed">
            Требования могут отличаться от одного банка к другому. Поэтому иностранцу важно не просто искать банк, который «открывает счета иностранцам», а заранее подготовить документы именно под свою ситуацию.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">
            Какие документы нужны иностранцу для открытия счёта?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Точный список зависит от банка и типа счёта. Для физического лица обычно могут потребоваться:
          </p>

          <h3 className="text-lg font-bold text-primary-500 mt-4">1. Паспорт</h3>
          <p className="text-slate-600 leading-relaxed">
            Действующий заграничный паспорт является основным документом для идентификации иностранного клиента. Некоторые банки устанавливают дополнительные требования к документу или сроку его действия.
          </p>

          <h3 className="text-lg font-bold text-primary-500 mt-4">2. Налоговый номер</h3>
          <p className="text-slate-600 leading-relaxed">
            Налоговый номер используется иностранцами для различных официальных и финансовых операций в Турции. Ситуация может различаться в зависимости от того, есть ли у иностранца уже Yabancı Kimlik Numarası.
          </p>

          <h3 className="text-lg font-bold text-primary-500 mt-4">3. Подтверждение адреса</h3>
          <p className="text-slate-600 leading-relaxed">
            Банк может попросить документ, подтверждающий адрес проживания. Например, один из крупных турецких банков указывает среди документов для иностранного клиента подтверждение действующего адреса в Турции, например соответствующий коммунальный счёт.
          </p>

          <h3 className="text-lg font-bold text-primary-500 mt-4">4. Турецкий номер телефона</h3>
          <p className="text-slate-600 leading-relaxed">
            Номер телефона может использоваться для SMS-подтверждений, мобильного банкинга и других процедур безопасности.
          </p>

          <h3 className="text-lg font-bold text-primary-500 mt-4">5. Дополнительная информация</h3>
          <p className="text-slate-600 leading-relaxed">
            В зависимости от банка могут потребоваться дополнительные сведения о клиенте, источнике средств или предполагаемом использовании счёта. Это особенно важно для предпринимателей и клиентов, которые планируют осуществлять регулярные международные переводы.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">
            Нужен ли ВНЖ для открытия банковского счёта?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Это один из самых частых вопросов иностранных граждан. Нельзя утверждать, что для каждого иностранца наличие ВНЖ является обязательным условием открытия банковского счёта.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Требования зависят от конкретного банка, типа счёта и документов клиента. При этом наличие действующего ВНЖ может значительно упростить подтверждение личности и адреса.
          </p>
          <p className="text-slate-600 leading-relaxed">Поэтому перед подачей документов необходимо определить:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>кто клиент;</li>
            <li>зачем нужен счёт;</li>
            <li>есть ли ВНЖ;</li>
            <li>есть ли налоговый номер;</li>
            <li>есть ли адрес в Турции;</li>
            <li>какие операции планируются.</li>
          </ul>
          <p className="text-slate-600 leading-relaxed">
            И только после этого выбирать подходящий банк.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">
            Личный счёт или корпоративный счёт?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Здесь важно разделить две совершенно разные ситуации.
          </p>

          <h3 className="text-lg font-bold text-primary-500 mt-4">Личный банковский счёт</h3>
          <p className="text-slate-600 leading-relaxed">Подходит иностранцу для:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>личных расходов;</li>
            <li>получения денежных средств;</li>
            <li>оплаты услуг;</li>
            <li>повседневных банковских операций;</li>
            <li>хранения средств;</li>
            <li>международных переводов в рамках требований банка.</li>
          </ul>

          <h3 className="text-lg font-bold text-primary-500 mt-4">Корпоративный банковский счёт</h3>
          <p className="text-slate-600 leading-relaxed">
            Необходим для нормальной работы турецкой компании. Если иностранец открывает компанию в Турции, банковский процесс становится частью общей процедуры запуска бизнеса.
          </p>
          <p className="text-slate-600 leading-relaxed">Для корпоративного счёта банк может запросить:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>документы компании;</li>
            <li>налоговую регистрацию;</li>
            <li>торговую регистрацию;</li>
            <li>уставные документы;</li>
            <li>документы директоров и акционеров;</li>
            <li>документы лиц, имеющих право подписи;</li>
            <li>паспорта уполномоченных лиц;</li>
            <li>информацию о деятельности компании.</li>
          </ul>
          <p className="text-slate-600 leading-relaxed">
            Например, требования İşbank для корпоративных клиентов включают налоговую регистрацию, документы о существовании компании и документы, подтверждающие полномочия подписантов.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">
            Нужно ли сначала открыть компанию, а потом банковский счёт?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Если цель иностранца — вести бизнес в Турции, обычно необходимо разделять два процесса:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-slate-600">
            <li>Создание компании</li>
            <li>Налоговая регистрация</li>
            <li>Регистрация компании</li>
            <li>Открытие корпоративного банковского счёта</li>
            <li>Начало коммерческой деятельности</li>
          </ol>
          <p className="text-slate-600 leading-relaxed">
            При создании компании иностранным инвесторам также может потребоваться получение потенциального налогового номера. Официальный инвестиционный портал Турции указывает, что он используется, в частности, для открытия банковского счёта, на который вносится капитал создаваемой компании.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Поэтому банковский счёт нельзя рассматривать отдельно от структуры компании и её регистрации.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">
            Какой банк выбрать иностранцу в Турции?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Не существует одного банка, который будет оптимальным для каждого иностранца. При выборе стоит учитывать не только возможность открытия счёта, но и дальнейшее использование банковских услуг.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-slate-600">
            <li><strong>Язык обслуживания.</strong> Если клиент не говорит по-турецки, наличие английского или другого удобного языка обслуживания может значительно упростить коммуникацию.</li>
            <li><strong>Международные переводы.</strong> Если деньги будут регулярно поступать из-за границы или отправляться за границу, условия международных переводов становятся особенно важными.</li>
            <li><strong>Онлайн-банкинг.</strong> Для предпринимателя мобильное и интернет-банкинг могут быть не менее важны, чем само открытие счёта.</li>
            <li><strong>Валютные счета.</strong> Предпринимателю может потребоваться работа не только с турецкой лирой, но и с иностранной валютой.</li>
            <li><strong>Работа с корпоративными клиентами.</strong> Для бизнеса важно заранее выяснить, какие услуги банк предоставляет юридическим лицам.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">
            Может ли гражданин России открыть банковский счёт в Турции?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Гражданство само по себе не означает автоматического права или автоматического отказа в открытии счёта. Для гражданина России, как и для других иностранных клиентов, банк проводит собственную процедуру идентификации и проверки клиента.
          </p>
          <p className="text-slate-600 leading-relaxed">Особенно важно заранее определить:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>цель открытия счёта;</li>
            <li>источник денежных средств;</li>
            <li>предполагаемые операции;</li>
            <li>наличие компании в Турции;</li>
            <li>налоговый статус;</li>
            <li>наличие ВНЖ или другого основания проживания.</li>
          </ul>
          <p className="text-slate-600 leading-relaxed">
            Для российского предпринимателя, который планирует открыть компанию в Турции, банковский вопрос лучше решать одновременно с регистрацией бизнеса, а не после завершения всех остальных процедур.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">
            Что делать, если банк отказал в открытии счёта?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Отказ одного банка не означает, что иностранцу невозможно открыть счёт в Турции вообще. Причины могут быть разными:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>недостаточный пакет документов;</li>
            <li>отсутствие подтверждения адреса;</li>
            <li>особенности статуса клиента;</li>
            <li>специфика предполагаемых операций;</li>
            <li>внутренние процедуры банка;</li>
            <li>необходимость дополнительной проверки.</li>
          </ul>
          <p className="text-slate-600 leading-relaxed">
            В такой ситуации важно сначала понять причину отказа, а затем определить, какие документы или условия необходимо изменить. Не стоит подавать заявки хаотично в большое количество банков без понимания причины проблемы.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">
            Можно ли открыть счёт дистанционно?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Это зависит от конкретного банка и конкретного продукта. Для иностранца, особенно если речь идёт не о стандартном розничном счёте, а о корпоративном банковском обслуживании, может потребоваться личное присутствие и предоставление оригиналов документов.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Поэтому обещания в интернете вроде «откроем банковский счёт в Турции полностью дистанционно за один день» следует воспринимать осторожно. Банковская процедура зависит от требований конкретного финансового учреждения и статуса клиента.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">
            Банковский счёт — только один элемент переезда и открытия бизнеса
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Для иностранца, который планирует не просто жить в Турции, а создать бизнес, банковский счёт является лишь частью общей системы. На практике процесс может выглядеть следующим образом:
          </p>
          <ol className="list-decimal pl-6 space-y-3 text-slate-600">
            <li><strong>Определение структуры</strong> — выбор подходящей формы компании и вида деятельности.</li>
            <li><strong>Регистрация компании</strong> — подготовка документов и регистрация бизнеса.</li>
            <li><strong>Налоговая регистрация</strong> — получение необходимых налоговых идентификаторов.</li>
            <li><strong>Банковское обслуживание</strong> — открытие корпоративного счёта и настройка банковских операций.</li>
            <li><strong>Бухгалтерия</strong> — организация регулярного бухгалтерского и налогового сопровождения.</li>
            <li><strong>ВНЖ и другие процедуры</strong> — если предприниматель планирует проживать в Турции, отдельно рассматриваются миграционные и разрешительные вопросы.</li>
          </ol>
          <p className="text-slate-600 leading-relaxed">
            Именно поэтому открытие банковского счёта не стоит рассматривать как отдельную услугу без связи с остальной структурой бизнеса.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">
            Сколько времени занимает открытие банковского счёта?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Единого срока для всех иностранцев нет. Срок зависит от банка, типа счёта, полноты документов, статуса клиента, необходимости дополнительных проверок и корпоративной структуры.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Поэтому корректнее говорить не о гарантированном количестве часов или дней, а о подготовке полного пакета документов и прохождении банковской проверки.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">
            Что важно подготовить заранее?
          </h2>
          <h3 className="text-lg font-bold text-primary-500 mt-4">Для физического лица</h3>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>паспорт;</li>
            <li>налоговый / идентификационный номер;</li>
            <li>подтверждение адреса;</li>
            <li>турецкий номер телефона;</li>
            <li>информацию о предполагаемом использовании счёта.</li>
          </ul>
          <h3 className="text-lg font-bold text-primary-500 mt-4">Для компании</h3>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>учредительные документы;</li>
            <li>налоговую регистрацию;</li>
            <li>регистрационные документы компании;</li>
            <li>документы директора;</li>
            <li>документы акционеров;</li>
            <li>подтверждение полномочий подписантов;</li>
            <li>информацию о деятельности компании.</li>
          </ul>
          <p className="text-slate-600 leading-relaxed">
            Конкретный перечень необходимо уточнять непосредственно перед открытием счёта.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">
            Открытие компании, банковский счёт и ВНЖ в Турции
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Для иностранного предпринимателя эти процессы часто взаимосвязаны. Если ваша цель — открыть компанию в Турции и начать вести бизнес, необходимо одновременно учитывать:
          </p>
          <p className="text-slate-600 leading-relaxed font-medium">
            Компания → Налоги → Банк → Бухгалтерия → ВНЖ → Коммерческая деятельность
          </p>
          <p className="text-slate-600 leading-relaxed">
            Ошибка на одном этапе может создать проблемы на следующем. Именно поэтому гораздо эффективнее заранее определить всю структуру, чем сначала открыть компанию, затем искать бухгалтера, потом банк и только после этого решать вопросы проживания.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">
            Заключение
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Открыть банковский счёт в Турции иностранцу в 2026 году возможно, но процедура зависит от статуса клиента, банка и цели открытия счёта.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Если речь идёт о личном счёте, основной акцент делается на идентификации клиента, налоговом статусе и подтверждении адреса. Если же задача — открыть компанию в Турции, вести бизнес, принимать платежи и осуществлять международные операции, банковский счёт необходимо рассматривать как часть общей бизнес-инфраструктуры.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Для граждан России и других иностранных предпринимателей особенно важно заранее подготовить документы и понимать последовательность всех процедур.
          </p>
        </div>

        <div className="bg-primary-500 text-white p-6 md:p-8 rounded-2xl mt-8">
          <h3 className="text-xl font-bold mb-3">Планируете открыть компанию в Турции?</h3>
          <p className="text-primary-100 text-sm leading-relaxed mb-4">
            Russia Market Entry помогает иностранным предпринимателям организовать процесс выхода на турецкий рынок: регистрация компании, бухгалтерское и налоговое сопровождение, открытие банковского счёта, помощь с ВНЖ, административные процедуры и сопровождение бизнеса после регистрации.
          </p>
          <p className="text-primary-100 text-sm leading-relaxed mb-5">
            Перед началом процедуры мы определяем вашу ситуацию и формируем необходимую последовательность действий.
          </p>
          <Link
            to="/ru/kompaniya-v-turtsii"
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors"
          >
            Получить консультацию →
          </Link>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mt-8">
          <h3 className="text-lg font-bold text-slate-900 mb-3">Читайте также:</h3>
          <ul className="space-y-2 text-sm text-primary-500 font-medium">
            <li>
              <Link to="/ru/blog/registraciya-kompanii-v-turtsii-dlya-inostrantsev-poshagovoe-rukovodstvo-2026" className="hover:underline">
                → Регистрация компании в Турции для иностранцев: пошаговое руководство 2026
              </Link>
            </li>
            <li>
              <Link to="/ru/blog/otkrytie-bankovskogo-scheta-v-turtsii-dlya-yuridicheskih-i-fizicheskih-lits" className="hover:underline">
                → Открытие корпоративного и личного банковского счёта в Турции
              </Link>
            </li>
            <li>
              <Link to="/ru/blog/mozhno-li-otkryt-kompaniyu-v-turtsii-bez-vnzh" className="hover:underline">
                → Можно ли открыть компанию в Турции без ВНЖ?
              </Link>
            </li>
            <li>
              <Link to="/ru/blog/vnzh-ikamet-i-rabochaya-viza-v-turtsii-pri-otkrytii-biznesa" className="hover:underline">
                → ВНЖ (Икамет) и рабочая виза при открытии бизнеса
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
];
