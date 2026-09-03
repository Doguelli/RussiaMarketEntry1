import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Building2,
  CheckCircle2,
  Clock,
  ShieldCheck,
  CreditCard,
  FileText,
  Landmark,
  Scale,
  ArrowRight,
  Send,
  HelpCircle,
  Award,
  Globe,
  Briefcase,
  Users,
  ChevronDown
} from "lucide-react";
import { createBreadcrumbSchema, createServiceSchema, createFaqSchema } from "@/utils/seo";
import { socialMetaElements } from "@/components/PageSocialMeta";
import { FORMSPREE_ENDPOINT } from "@/utils/formspree";
import { blogDetailPath } from "@/utils/blogLanguages";

export default function CompanyInTurkey() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  // Phone (WhatsApp/Telegram) is deliberately the only contact channel this
  // form asks for — there is no email input, so no email key is submitted.
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    businessType: "Limited Şirket (ООО)",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        // Both lead forms share one inbox, so name the source in the subject.
        body: JSON.stringify({
          ...formState,
          _subject: "Заявка: регистрация компании в Турции",
          _template: "table",
          _captcha: "false",
        }),
      });

      setStatus(response.ok ? "success" : "error");
    } catch (error) {
      setStatus("error");
    }
  };

  const breadcrumbs = createBreadcrumbSchema([
    { name: "Главная", url: "/ru" },
    { name: "Услуги", url: "/ru/uslugi" },
    { name: "Регистрация компании в Турции", url: "/ru/kompaniya-v-turtsii" }
  ]);

  const serviceSchema = createServiceSchema(
    "Регистрация компании в Турции для иностранцев",
    "Комплексное открытие бизнеса в Турции под ключ: учреждение Limited Şirket, открытие мультивалютных счетов в банках, юридический адрес, ВНЖ и бухгалтерия.",
    "/ru/kompaniya-v-turtsii"
  );

  const packages = [
    {
      name: "Быстрый старт",
      target: "Для фрилансеров, IT и небольших проектов",
      timeline: "5–7 рабочих дней",
      features: [
        "Подготовка устава компании на турецком языке",
        "Получение ИНН (Vergi Kimlik Numarası) для учредителей",
        "Регистрация в Торговой палате (İTO) и Торговом реестре",
        "Получение налоговой карты (Vergi Levhası)",
        "Официальная корпоративная печать",
        "Нотариальные переводы загранпаспортов"
      ],
      popular: false
    },
    {
      name: "Бизнес под ключ (All-in-One)",
      target: "Самый популярный выбор для международной торговли и ВЭД",
      timeline: "7–10 рабочих дней",
      features: [
        "Все услуги пакета «Быстрый старт»",
        "Предоставление юридического адреса в Стамбуле на 1 год",
        "Открытие мультивалютного корпоративного счета (USD, EUR, TRY, RUB)",
        "Договор с сертифицированным присяжным бухгалтером (Mali Müşavir)",
        "Подключение онлайн-банкинга и выпуск бизнес-карт",
        "Оформление электронной цифровой подписи (E-İmza)"
      ],
      popular: true
    },
    {
      name: "Торговля и Маркетплейсы",
      target: "Для экспортеров, селлеров WB/Ozon и производителей",
      timeline: "10–14 рабочих дней",
      features: [
        "Все услуги пакета «Бизнес под ключ»",
        "Оформление ВНЖ (Икамет) для учредителя компании",
        "Регистрация кабинетов на маркетплейсах (Wildberries, Ozon, Amazon)",
        "Консультация по сертификации EAC и маркировке «Честный ЗНАК»",
        "Складское обслуживание и логистическая интеграция",
        "Индивидуальная оптимизация налогов (СИДН Турция — РФ)"
      ],
      popular: false
    }
  ];

  const steps = [
    {
      day: "День 1",
      title: "Анализ и подготовка документов",
      desc: "Определяем виды деятельности компании (NACE коды), готовим нотариальные переводы загранпаспортов и получаем индивидуальные турецкие ИНН (Vergi Kimlik No)."
    },
    {
      day: "День 2–3",
      title: "Разработка устава и MERSİS",
      desc: "Формируем юридический устав в государственной электронной системе MERSİS, утверждаем структуру долей и оформляем договор юридического адреса."
    },
    {
      day: "День 4–5",
      title: "Регистрация в Торговой палате (İTO)",
      desc: "Подача пакета документов в Торговую палату Стамбула, выпуск свидетельства о регистрации в газете Ticaret Sicil Gazetesi и получение налоговой пластины (Vergi Levhası)."
    },
    {
      day: "День 6–7",
      title: "Визит налогового инспектора (Yoklama)",
      desc: "Налоговая инспекция проводит электронную или физическую верификацию адреса. Заключаем контракт с лицензированным присяжным бухгалтером (Mali Müşavir)."
    },
    {
      day: "День 8–10",
      title: "Открытие корпоративных счетов в банках",
      desc: "Личное или доверенное сопровождение в Ziraat Bankası, Vakıfbank, İş Bankası. Активация мультивалютных счетов (USD, EUR, TRY, RUB), интернет-банкинга и карт."
    }
  ];

  const relatedArticles = [
    {
      slug: "registraciya-kompanii-v-turtsii-dlya-inostrantsev-poshagovoe-rukovodstvo-2026",
      title: "Регистрация компании в Турции для граждан РФ: пошаговое руководство 2026",
      readTime: "7 мин"
    },
    {
      slug: "otkrytie-bankovskogo-scheta-v-turtsii-dlya-yuridicheskih-i-fizicheskih-lits",
      title: "Открытие корпоративного и личного банковского счета в Турции: банки, документы и SWIFT",
      readTime: "6 мин"
    },
    {
      slug: "kak-otkryt-bankovskiy-schet-v-turcii-inostrancu",
      title: "Как открыть банковский счёт в Турции иностранцу в 2026 году?",
      readTime: "10 мин"
    },
    {
      slug: "nalogi-v-turtsii-dlya-biznesa-kurumlar-kdv-optimizatsiya",
      title: "Налоговая система Турции: налог на прибыль (Kurumlar Vergisi), НДС (KDV) и СИДН с РФ",
      readTime: "6 мин"
    },
    {
      slug: "vnzh-ikamet-i-rabochaya-viza-v-turtsii-pri-otkrytii-biznesa",
      title: "ВНЖ (Икамет) и рабочая виза в Турции при открытии бизнеса для иностранцев",
      readTime: "5 мин"
    },
    {
      slug: "torgovlya-i-logistika-mezhdu-turtsiey-i-rossiey-tamozhnya-i-raschety",
      title: "Торговля и логистика между Турцией и Россией: таможня, расчеты и параллельный импорт",
      readTime: "8 мин"
    },
    {
      slug: "yuridicheskiy-adres-i-buhgalter-mali-musavir-v-turtsii",
      title: "Юридический адрес и бухгалтерское сопровождение (Mali Müşavir) в Турции",
      readTime: "5 мин"
    },
    {
      slug: "eksport-iz-turtsii-na-marketpleysy-wildberries-ozon",
      title: "Экспорт товаров из Турции на Wildberries и Ozon через турецкое юрлицо",
      readTime: "6 мин"
    },
    {
      slug: "limited-sirket-protiv-anonim-sirket-sravnenie-form-biznesa-v-turtsii",
      title: "Сравнение форм бизнеса в Турции: ООО (Limited Şirket) против АО (Anonim Şirket)",
      readTime: "5 мин"
    }
  ];

  const faqs = [
    {
      q: "Может ли гражданин РФ быть 100% владельцем и генеральным директором компании в Турции?",
      a: "Да. В соответствии с Законом о прямых иностранных инвестициях Турции № 4875, иностранные граждане и компании имеют равные права с местными резидентами. Гражданин РФ может быть единственным учредителем (100% акций) и генеральным директором (Müdür)."
    },
    {
      q: "Сколько времени занимает весь процесс регистрации и открытия банковских счетов?",
      a: "Регистрация компании в Торговой палате Стамбула (İTO) занимает 5–7 рабочих дней с момента подачи документов. Открытие мультивалютного счета в турецком банке занимает дополнительно 3–5 рабочих дней."
    },
    {
      q: "Обязательно ли лично приезжать в Турцию для открытия компании?",
      a: "Учредить компанию можно полностью дистанционно на основании нотариальной доверенности с апостилем. Однако для открытия корпоративного банковского счета и получения доступа к онлайн-банкингу генеральному директору рекомендуется приехать в Стамбул на 1 день для подписания банковских формуляров в сопровождении нашего специалиста."
    },
    {
      q: "Какой минимальный уставный капитал необходим для Limited Şirket в 2026 году?",
      a: "Минимальный уставный капитал для Limited Şirket (ООО) составляет 50 000 турецких лир (TRY). При регистрации вносить деньги на блокированный счет не требуется — закон дает 24 месяца на оплату уставного капитала после завершения регистрации."
    },
    {
      q: "Нужно ли нанимать 5 граждан Турции при открытии компании?",
      a: "Нет. Правило обязательного найма 5 турецких сотрудников (5:1) применяется только в том случае, если иностранный директор оформляет государственное Разрешение на работу (Çalışma İzni). Для самого владения бизнесом, руководства компанией и совершения всех сделок нанимать местных сотрудников не требуется."
    },
    {
      q: "В каких банках Турции открываются корпоративные счета?",
      a: "Мы сотрудничаем с ведущими государственными и коммерческими банками: Ziraat Bankası, Vakıfbank, Türkiye İş Bankası, Denizbank и Emlak Katılım. Счета открываются в мультивалютном формате (USD, EUR, TRY, RUB, CNY) с поддержкой международных SWIFT-переводов."
    }
  ];

  const faqSchema = createFaqSchema(faqs.map((faq) => ({ question: faq.q, answer: faq.a })));

  const companySocialMeta = socialMetaElements({
    title: "Регистрация компании в Турции для иностранцев | Russia Market Entry",
    description:
      "Учреждение Limited Şirket, открытие счетов в банках, юридический адрес и бухгалтер под ключ в Стамбуле.",
    url: "https://russiamarketentry.com/ru/kompaniya-v-turtsii",
  });

  return (
    <>
      <Helmet>
        <title>Регистрация компании в Турции для иностранцев (Limited Şirket) 2026 | Открытие под ключ</title>
        <meta
          name="description"
          content="Открыть компанию в Турции для граждан РФ и нерезидентов под ключ: регистрация Limited Şirket (ООО), открытие мультивалютных счетов в банках (USD, EUR, TRY, RUB), юр. адрес в Стамбуле, ВНЖ и бухгалтерское сопровождение."
        />
        <link rel="canonical" href="https://russiamarketentry.com/ru/kompaniya-v-turtsii" />
        {/* This landing page exists in Russian only. The previous Turkish and
            English alternates pointed at an unrelated service page and at a
            route that does not exist, so the cluster is a single self-reference
            until a genuine translation is published. */}
        <link rel="alternate" hrefLang="ru" href="https://russiamarketentry.com/ru/kompaniya-v-turtsii" />
        <link rel="alternate" hrefLang="x-default" href="https://russiamarketentry.com/ru/kompaniya-v-turtsii" />
        {companySocialMeta}
        <meta name="yandex-verification" content="russiamarketentry-yandex-token" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbs)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-500/20 text-accent-400 border border-accent-500/30 text-xs font-semibold tracking-wide uppercase">
                <ShieldCheck className="w-4 h-4" />
                Юридическая практика 2026 • Стамбул & Москва
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Регистрация компании в Турции <br />
                <span className="text-accent-400">для иностранцев под ключ</span>
              </h1>
              
              <p className="text-lg text-slate-300 leading-relaxed">
                Полное юридическое, банковское и бухгалтерское сопровождение: учреждение <strong>Limited Şirket (ООО)</strong>, открытие мультивалютных корпоративных счетов (USD, EUR, TRY, RUB), престижный юридический адрес в Стамбуле, оформление ВНЖ и налоговая оптимизация.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-accent-400 flex-shrink-0" />
                  <span>100% иностранное владение и контроль</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-accent-400 flex-shrink-0" />
                  <span>Срок открытия: от 5 до 7 рабочих дней</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-accent-400 flex-shrink-0" />
                  <span>Банковские счета с международным SWIFT</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-accent-400 flex-shrink-0" />
                  <span>Лицензированный присяжный бухгалтер</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#contact-form"
                  className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:-translate-y-0.5 shadow-lg shadow-accent-500/25 inline-flex items-center gap-2 text-[15px]"
                >
                  Оставить заявку на расчет
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#packages"
                  className="bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 px-7 py-4 rounded-xl font-semibold transition-colors text-[15px]"
                >
                  Пакеты и тарифы
                </a>
              </div>
            </div>

            {/* Quick Consultation Card */}
            <div className="lg:col-span-5">
              <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-100" id="contact-form">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-primary-500">Бесплатная консультация юриста</h3>
                  <p className="text-sm text-slate-500 mt-1">Ответим на вопросы по налогообложению, банкам и процедуре открытия за 15 минут.</p>
                </div>

                {status === "success" ? (
                  <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-200 text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h4 className="font-bold text-emerald-900 text-lg">Заявка принята!</h4>
                    <p className="text-sm text-emerald-700">Наш юрист в Стамбуле свяжется с вами в течение рабочего времени.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {status === "error" && (
                      <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm font-medium">
                        Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз или напишите нам напрямую в мессенджер.
                      </div>
                    )}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Ваше имя</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Алексей Смирнов"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Телефон / WhatsApp / Telegram</label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="+7 (___) ___ __ __"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Интересующая форма бизнеса</label>
                      <select
                        value={formState.businessType}
                        onChange={(e) => setFormState({ ...formState, businessType: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                      >
                        <option>Limited Şirket (ООО) — Рекомендуется</option>
                        <option>Anonim Şirket (АО)</option>
                        <option>Открытие корпоративного счета в банке</option>
                        <option>Торговля на маркетплейсах (WB, Ozon) + Юрлицо</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Комментарий или вопрос (опционально)</label>
                      <textarea
                        rows={2}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Опишите сферу деятельности вашей компании..."
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full bg-accent-500 hover:bg-accent-600 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-3.5 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm text-sm"
                    >
                      <Send className="w-4 h-4" />
                      {status === "submitting" ? "Отправка..." : "Получить консультацию и расчет"}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Strategic Advantages Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-accent-500 tracking-wider uppercase mb-2">Юрисдикция Турции</h2>
            <p className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Почему предприниматели выбирают Турцию для открытия бизнеса?
            </p>
            <p className="mt-4 text-lg text-slate-600">
              Удобное географическое положение, открытый международный банкинг и поддержка иностранных инвесторов делают Турцию лидером для релокации и ведения ВЭД.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-500 flex items-center justify-center mb-6">
                <Landmark className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Международный банкинг и SWIFT</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Счета в долларах, евро, турецких лирах и рублях. Беспрепятственные транзакции с Европой, США, Азией и странами СНГ без санкционных блокировок.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-500 flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">100% иностранное владение</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Иностранец может быть единственным учредителем и генеральным директором. Номинальные директора не требуются — вы сохраняете полный контроль над компанией.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-500 flex items-center justify-center mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Логистический хаб мира</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Прямой доступ к рынкам ЕС (Таможенный союз), Ближнего Востока и СНГ. Доставка в Москву автотранспортом за 7–10 дней и морем за 3–5 дней.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-500 flex items-center justify-center mb-6">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Защита от двойного налогообложения</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Между Россией и Турцией действует Соглашение об избежании двойного налогообложения (СИДН), позволяющее законно зачитывать уплаченные налоги.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-500 flex items-center justify-center mb-6">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">ВНЖ и гражданство учредителя</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Регистрация компании дает официальное основание для оформления коммерческого вида на жительство (Икамет) и последующего гражданства.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-500 flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Глобальный E-Commerce</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Регистрация аккаунтов на Amazon US/EU, Stripe, PayPal, а также на Wildberries, Ozon и турецких гигантах Trendyol и Hepsiburada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison: Limited vs Anonim */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-xs font-bold text-accent-500 tracking-wider uppercase mb-2">Формы юридических лиц</h2>
            <p className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Limited Şirket (ООО) или Anonim Şirket (АО)?
            </p>
            <p className="mt-3 text-slate-600">
              В 95% случаев для малого и среднего бизнеса, торговли и услуг идеально подходит Limited Şirket.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-slate-200 rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 sm:p-5 font-bold text-sm">Параметр</th>
                  <th className="p-4 sm:p-5 font-bold text-sm bg-primary-700">Limited Şirket (ООО) — 95% клиентов</th>
                  <th className="p-4 sm:p-5 font-bold text-sm">Anonim Şirket (АО)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold text-slate-900">Минимальный капитал (2026)</td>
                  <td className="p-4 font-bold text-primary-600 bg-primary-50/50">50 000 TRY (оплата в течение 2 лет)</td>
                  <td className="p-4">250 000 TRY (25% до регистрации)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold text-slate-900">Количество учредителей</td>
                  <td className="p-4 bg-primary-50/50">От 1 до 50 (физические или юридические лица)</td>
                  <td className="p-4">От 1 до неограниченно</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold text-slate-900">Ответственность участников</td>
                  <td className="p-4 bg-primary-50/50">Ограничена долей в уставном капитале</td>
                  <td className="p-4">Ограничена стоимостью акций</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold text-slate-900">Органы управления</td>
                  <td className="p-4 bg-primary-50/50">Генеральный директор (Müdür)</td>
                  <td className="p-4">Совет директоров (Yönetim Kurulu)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold text-slate-900">Сроки регистрации</td>
                  <td className="p-4 font-bold text-emerald-600 bg-primary-50/50">5–7 рабочих дней</td>
                  <td className="p-4">10–15 рабочих дней</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold text-slate-900">Для каких сфер подходит</td>
                  <td className="p-4 bg-primary-50/50">ВЭД, опт, маркетплейсы, IT, сфера услуг, консалтинг</td>
                  <td className="p-4">Крупные холдинги, финансовые институты, IPO</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Step by step Process */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-accent-500 tracking-wider uppercase mb-2">Этапы работы</h2>
            <p className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Пошаговый график регистрации компании
            </p>
            <p className="mt-4 text-slate-600">
              Мы ведем процесс по четкому регламенту, обеспечивая прозрачность каждого шага.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {steps.map((s, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col md:flex-row gap-5 items-start">
                <div className="bg-primary-50 text-primary-600 px-4 py-2 rounded-lg font-extrabold text-sm whitespace-nowrap">
                  {s.day}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{s.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-white" id="packages">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-accent-500 tracking-wider uppercase mb-2">Тарифы</h2>
            <p className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Пакетные решения для вашего бизнеса
            </p>
            <p className="mt-4 text-slate-600">
              Прозрачные условия без скрытых доплат. Все государственные пошлины и нотариальные сборы включены.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-8 transition-all flex flex-col justify-between ${
                  pkg.popular
                    ? "bg-slate-900 text-white shadow-xl ring-2 ring-accent-500 relative"
                    : "bg-slate-50 text-slate-900 border border-slate-200"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent-500 text-white px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wide">
                    Рекомендуемый выбор
                  </div>
                )}
                <div>
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className={`text-xs mb-4 ${pkg.popular ? "text-slate-300" : "text-slate-500"}`}>{pkg.target}</p>
                  
                  <div className="flex items-center gap-2 text-xs font-semibold py-2 mb-6 border-y border-slate-700/50">
                    <Clock className="w-4 h-4 text-accent-400" />
                    <span>Срок: {pkg.timeline}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${pkg.popular ? "text-accent-400" : "text-primary-500"}`} />
                        <span className={pkg.popular ? "text-slate-200" : "text-slate-700"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact-form"
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-center text-sm transition-colors block ${
                    pkg.popular
                      ? "bg-accent-500 hover:bg-accent-600 text-white"
                      : "bg-primary-500 hover:bg-primary-600 text-white"
                  }`}
                >
                  Выбрать пакет
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Linking Blog Cluster */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-xs font-bold text-accent-500 tracking-wider uppercase mb-2">База знаний и статьи</h2>
            <p className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Полезные материалы по бизнесу в Турции
            </p>
            <p className="mt-3 text-slate-600">
              Изучите наши подробные практические руководства по налогам, банковским счетам, ВНЖ и маркетплейсам.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {relatedArticles.map((art, idx) => (
              <Link
                key={idx}
                to={blogDetailPath(art.slug, "ru")}
                className="bg-white p-5 rounded-xl border border-slate-200 hover:border-primary-500 transition-all hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  <span className="text-xs text-slate-400 font-medium">{art.readTime}</span>
                  <h4 className="font-bold text-slate-900 text-sm mt-2 line-clamp-3 group-hover:text-primary-600 transition-colors">
                    {art.title}
                  </h4>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-primary-500 gap-1">
                  <span>Читать руководство</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-xs font-bold text-accent-500 tracking-wider uppercase mb-2">Вопросы и ответы</h2>
            <p className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Часто задаваемые вопросы
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-5 text-left font-bold text-slate-900 flex justify-between items-center gap-4 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                >
                  <span className="text-base">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${activeFaq === idx ? "rotate-180 text-primary-500" : ""}`} />
                </button>
                {activeFaq === idx && (
                  <div className="p-5 text-sm text-slate-600 leading-relaxed bg-white border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary-500 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Готовы зарегистрировать компанию в Турции?
          </h2>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto">
            Оставьте заявку, и наш специалист в Стамбуле подготовит расчет стоимости и индивидуальную дорожную карту для вашего проекта.
          </p>
          <div className="pt-2 flex justify-center gap-4 flex-wrap">
            <a
              href="#contact-form"
              className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg text-[15px]"
            >
              Заказать регистрацию компании
            </a>
            <a
              href="https://wa.me/905327852420?text=Здравствуйте!%20Хочу%20проконсультироваться%20по%20поводу%20регистрации%20компании%20в%20Турции"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-7 py-4 rounded-xl font-semibold transition-colors text-[15px]"
            >
              Написать в WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
