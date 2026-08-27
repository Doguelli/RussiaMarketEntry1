import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Droplets, ShoppingBag, Factory, Users } from "lucide-react";
import { ForWhomContent } from "./forWhomData";

export const forWhomDataRU: ForWhomContent[] = [
  {
    id: "tekstil-markalari",
    slug: "tekstil-markalari",
    title: "Решения для брендов текстиля и одежды",
    shortTitle: "Текстильные бренды",
    description: "Рынок России — огромная возможность для текстильных брендов. Успех достигается не просто отправкой товаров, а комплексным управлением всей цепочкой продаж под ключ.",
    icon: <ShoppingBag className="w-4 h-4" />,
    color: "text-primary-500",
    bgColor: "bg-primary-500",
    lightColor: "bg-primary-50",
    content: (
      <>
        <p className="text-[18px] leading-relaxed text-slate-600 mb-6 max-w-4xl">
          Рынок текстиля, женской, мужской, детской одежды и домашнего текстиля предлагает колоссальный объем спроса. При правильной стратегии этот рынок становится мощным и высокодоходным источником масштабирования.
        </p>

        <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-2xl mb-12">
          <p className="text-primary-700 font-medium text-[18px]">
            Мы выводим ваш бренд на ведущие маркетплейсы (Wildberries, Ozon, Lamoda) и профессионально управляем всеми операциями от склада до выручки.
          </p>
          <div className="mt-4">
            <Link to="/ru/kontakty" className="inline-flex items-center gap-2 font-bold text-accent-500 hover:text-accent-600">
              👉 Оставить заявку
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-[24px] font-bold text-primary-500 mb-6">Что мы делаем?</h3>
            <ul className="space-y-3">
              {[
                "Регистрация и настройка аккаунтов на WB, Ozon, Lamoda",
                "SEO-оптимизация карточек товаров и перевод инфографики",
                "Позиционирование бренда и запуск эффективной рекламы",
                "Расчет маржинальности и ценообразование",
                "Фулфилмент, маркировка «Честный ЗНАК» и FBO/FBS логистика",
                "Снижение процента возвратов и контроль качества"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-600">
                  <span className="w-2 h-2 rounded-full bg-primary-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl">
            <h3 className="text-[24px] font-bold text-primary-500 mb-6">Почему выбирают нас?</h3>
            <ul className="space-y-3 mb-6">
              {[
                "Глубокая экспертиза в e-commerce и требованиях маркетплейсов",
                "Быстрый старт продаж без бюрократических задержек",
                "Оптимальные тарифы на логистику и таможенное оформление",
                "Прозрачная финансовая отчетность и сквозная аналитика"
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
    ),
    conclusionTitle: "Готовы масштабировать бренд одежды?",
    conclusionDesc: "Свяжитесь с нами, чтобы получить детальный аудит спроса и пошаговый план запуска вашего текстильного бренда."
  },
  {
    id: "ureticiler",
    slug: "ureticiler",
    title: "Решения для производителей и фабрик",
    shortTitle: "Производители",
    description: "Не ограничивайтесь только оптом B2B. Получайте максимальную маржинальность, поставляя продукцию напрямую конечным покупателям через маркетплейсы.",
    icon: <Factory className="w-4 h-4" />,
    color: "text-accent-500",
    bgColor: "bg-accent-500",
    lightColor: "bg-accent-50",
    content: (
      <>
        <p className="text-[18px] leading-relaxed text-slate-600 mb-6 max-w-4xl">
          В дополнение к оптовым контрактам прямые продажи через маркетплейсы позволяют максимизировать прибыль с каждой единицы товара. Вы получаете доступ к десяткам миллионов покупателей с минимальными рисками.
        </p>

        <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-2xl mb-12">
          <p className="text-primary-700 font-medium text-[18px]">
            Объедините ваши производственные мощности с нашим операционным опытом, и мы доставим вашу продукцию прямо покупателю.
          </p>
          <div className="mt-4">
            <Link to="/ru/kontakty" className="inline-flex items-center gap-2 font-bold text-accent-500 hover:text-accent-600">
              👉 Оставить заявку
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
            <h4 className="text-[20px] font-bold text-primary-500 mb-4">Прямой D2C доступ</h4>
            <p className="text-slate-600 text-[14px]">Вы отправляете продукцию на склад, мы размещаем ее на маркетплейсах и перечисляем выручку от продаж, исключая лишних посредников.</p>
          </div>
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
            <h4 className="text-[20px] font-bold text-primary-500 mb-4">Быстрый оборот</h4>
            <p className="text-slate-600 text-[14px]">При выборе востребованных артикулов продажи начинаются с первых дней размещения на Wildberries и Ozon.</p>
          </div>
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
            <h4 className="text-[20px] font-bold text-primary-500 mb-4">Надежная логистика</h4>
            <p className="text-slate-600 text-[14px]">Таможенная очистка, сертификаты EAC, штрихкодирование и распределение по складам FBO — полностью на нашей стороне.</p>
          </div>
        </div>
      </>
    ),
    conclusionTitle: "Прямой выход фабрики к покупателям",
    conclusionDesc: "Узнайте, как организовать регулярные поставки и повысить рентабельность производства уже в этом сезоне."
  },
  {
    id: "e-ticaret-girisimcileri",
    slug: "e-ticaret-girisimcileri",
    title: "Решения для предпринимателей в E-Commerce",
    shortTitle: "E-Commerce компании",
    description: "Запуск онлайн-продаж требует слаженной работы систем. Мы проектируем для вас решение «под ключ»: от подбора ассортимента до синхронизации остатков и рекламы.",
    icon: <Users className="w-4 h-4" />,
    color: "text-[#005BFF]",
    bgColor: "bg-[#005BFF]",
    lightColor: "bg-primary-50",
    content: (
      <>
        <p className="text-[18px] leading-relaxed text-slate-600 mb-6 max-w-4xl">
          Если вы хотите запустить или масштабировать e-commerce бизнес, ключевую роль играет устойчивая инфраструктура. Мы создаем систему, позволяющую вам фокусироваться на росте без погружения в рутину.
        </p>

        <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-2xl mb-12">
          <p className="text-primary-700 font-medium text-[18px]">
            Готовая инфраструктура для превращения бизнес-идеи в стабильные продажи. Работайте надежно и предсказуемо.
          </p>
          <div className="mt-4">
            <Link to="/ru/kontakty" className="inline-flex items-center gap-2 font-bold text-accent-500 hover:text-accent-600">
              👉 Оставить заявку
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-[24px] font-bold text-primary-500 mb-6">Как мы развиваем продажи?</h3>
            <ul className="space-y-3">
              {[
                "Анализ ниш и формирование высокомаржинальной матрицы",
                "Интеграция учетных систем (1C, Insales, МойСклад) с маркетплейсами",
                "Автоматизация заказов и управление складскими остатками",
                "Оптимизация рекламных ставок и конверсии",
                "Подключение мультиканальных продаж",
                "Постоянный мониторинг юнит-экономики"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-600">
                  <span className="w-2 h-2 rounded-full bg-[#005BFF] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl">
            <h3 className="text-[24px] font-bold text-primary-500 mb-6">Преимущества для предпринимателя</h3>
            <ul className="space-y-3 mb-6">
              {[
                "Готовая инфраструктура без необходимости нанимать большой штат",
                "Полная техническая и юридическая поддержка",
                "Максимизация окупаемости инвестиций (ROI)",
                "Управление всеми каналами из единого центра"
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
    ),
    conclusionTitle: "Автоматизированный бизнес на маркетплейсах",
    conclusionDesc: "Получите готовую модель управления продажами и начните масштабирование без лишних затрат времени."
  },
  {
    id: "kozmetik",
    slug: "kozmetik-ureticileri",
    title: "Решения для производителей косметики и парфюмерии",
    shortTitle: "Производители косметики",
    description: "Рынок косметики и средств личной гигиены демонстрирует стабильно высокий спрос. Мы берем на себя регистрацию, сертификацию, маркировку и продажи под ключ.",
    icon: <Droplets className="w-4 h-4" />,
    color: "text-[#FF007A]",
    bgColor: "bg-[#FF007A]",
    lightColor: "bg-pink-50",
    content: (
      <>
        <p className="text-[18px] leading-relaxed text-slate-600 mb-6 max-w-4xl">
          Категория уходовой косметики, средств для волос, макияжа, парфюмерии и органической продукции имеет высокий чек и регулярные повторные покупки. Для производителей это открывает отличные перспективы создания сильного бренда.
        </p>
        
        <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-2xl mb-12">
          <p className="text-primary-700 font-medium text-[18px]">
            Мы выводим косметическую продукцию на рынок и комплексно сопровождаем все нормативные и логистические этапы.
          </p>
          <div className="mt-4">
            <Link to="/ru/kontakty" className="inline-flex items-center gap-2 font-bold text-accent-500 hover:text-accent-600">
              👉 Оставить заявку
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-[24px] font-bold text-primary-500 mb-6">Категории продукции</h3>
            <ul className="space-y-3">
              {[
                "Уход за лицом и телом",
                "Профессиональный и домашний уход за волосами",
                "Декоративная косметика",
                "Парфюмерия и дезодоранты",
                "Органическая и натуральная косметика",
                "Дерматокосметика и гигиена",
                "SPA и велнес-продукты"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-600">
                  <span className="w-2 h-2 rounded-full bg-[#FF007A] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl">
            <h3 className="text-[24px] font-bold text-primary-500 mb-6">Наш комплекс услуг</h3>
            <ul className="space-y-3 mb-6">
              {[
                "Анализ конкурентной среды и цен",
                "Запуск магазинов на Wildberries, Ozon, Золотое Яблоко",
                "Оформление деклараций соответствия и сертификатов СГР",
                "Маркировка и генерация кодов «Честный ЗНАК»",
                "Хранение на специализированных складах с термоконтролем",
                "Продвижение и работа с отзывами/рейтингами"
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
    ),
    conclusionTitle: "Уверенный запуск косметического бренда",
    conclusionDesc: "Соблюдение всех регламентов, правильное хранение и качественный маркетинг гарантируют высокий рейтинг ваших товаров."
  }
];
