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
            <li><Link to="/blog/otkrytie-bankovskogo-scheta-v-turtsii-dlya-yuridicheskih-i-fizicheskih-lits" className="hover:underline">→ Открытие корпоративного и личного банковского счета в Турции</Link></li>
            <li><Link to="/blog/nalogi-v-turtsii-dlya-biznesa-kurumlar-kdv-optimizatsiya" className="hover:underline">→ Налоговая система Турции: налог на прибыль (Kurumlar) и НДС</Link></li>
            <li><Link to="/blog/vnzh-ikamet-i-rabochaya-viza-v-turtsii-pri-otkrytii-biznesa" className="hover:underline">→ Оформление ВНЖ (Икамет) при открытии бизнеса</Link></li>
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
            <li><Link to="/blog/registraciya-kompanii-v-turtsii-dlya-inostrantsev-poshagovoe-rukovodstvo-2026" className="hover:underline">→ Регистрация компании в Турции: пошаговое руководство</Link></li>
            <li><Link to="/blog/torgovlya-i-logistika-mezhdu-turtsiey-i-rossiey-tamozhnya-i-raschety" className="hover:underline">→ Торговля и логистика между Турцией и Россией</Link></li>
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
            <li><Link to="/blog/yuridicheskiy-adres-i-buhgalter-mali-musavir-v-turtsii" className="hover:underline">→ Юридический адрес и бухгалтер (Mali Müşavir) в Турции</Link></li>
            <li><Link to="/blog/registraciya-kompanii-v-turtsii-dlya-inostrantsev-poshagovoe-rukovodstvo-2026" className="hover:underline">→ Пошаговое руководство по регистрации компании</Link></li>
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
            <li><Link to="/blog/registraciya-kompanii-v-turtsii-dlya-inostrantsev-poshagovoe-rukovodstvo-2026" className="hover:underline">→ Регистрация компании в Турции: пошаговое руководство</Link></li>
            <li><Link to="/blog/otkrytie-bankovskogo-scheta-v-turtsii-dlya-yuridicheskih-i-fizicheskih-lits" className="hover:underline">→ Открытие банковского счета в Турции</Link></li>
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
            <li><Link to="/blog/eksport-iz-turtsii-na-marketpleysy-wildberries-ozon" className="hover:underline">→ Экспорт товаров из Турции на маркетплейсы WB и Ozon</Link></li>
            <li><Link to="/blog/registraciya-kompanii-v-turtsii-dlya-inostrantsev-poshagovoe-rukovodstvo-2026" className="hover:underline">→ Открытие компании в Турции для ВЭД</Link></li>
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
            <li><Link to="/blog/nalogi-v-turtsii-dlya-biznesa-kurumlar-kdv-optimizatsiya" className="hover:underline">→ Налоги в Турции: налог на прибыль и НДС</Link></li>
            <li><Link to="/blog/registraciya-kompanii-v-turtsii-dlya-inostrantsev-poshagovoe-rukovodstvo-2026" className="hover:underline">→ Регистрация компании в Турции</Link></li>
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
            <li><Link to="/blog/torgovlya-i-logistika-mezhdu-turtsiey-i-rossiey-tamozhnya-i-raschety" className="hover:underline">→ Логистика и таможня Турция — Россия</Link></li>
            <li><Link to="/blog/registraciya-kompanii-v-turtsii-dlya-inostrantsev-poshagovoe-rukovodstvo-2026" className="hover:underline">→ Регистрация компании в Турции под ключ</Link></li>
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
            <li><Link to="/blog/registraciya-kompanii-v-turtsii-dlya-inostrantsev-poshagovoe-rukovodstvo-2026" className="hover:underline">→ Регистрация Limited Şirket в Турции: пошагово</Link></li>
            <li><Link to="/blog/nalogi-v-turtsii-dlya-biznesa-kurumlar-kdv-optimizatsiya" className="hover:underline">→ Налоги для бизнеса в Турции</Link></li>
          </ul>
        </div>
      </div>
    )
  }
];
