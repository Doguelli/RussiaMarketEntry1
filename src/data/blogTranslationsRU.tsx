import { ReactNode } from "react";
import { Link } from "react-router-dom";

export interface BlogTranslationRU {
  slug: string;
  metaTitleRu: string;
  titleRu: string;
  excerptRu: string;
  publishedAtRu: string;
  readTimeRu: string;
  contentRu: ReactNode;
}

export const blogTranslationsRU: Record<string, BlogTranslationRU> = {
  "rusyada-e-ticaret-nasil-yapilir": {
    slug: "rusyada-e-ticaret-nasil-yapilir",
    metaTitleRu: "Как начать электронную коммерцию в России? Актуальное руководство 2026",
    titleRu: "Как начать электронную коммерцию в России? Актуальное руководство 2026",
    excerptRu: "Россия с населением более 140 миллионов человек и стремительно растущим рынком маркетплейсов представляет собой одну из самых перспективных площадок для e-commerce.",
    publishedAtRu: "18 мая 2026",
    readTimeRu: "4 мин чтения",
    contentRu: (
      <div className="space-y-8">
        <p className="text-lg leading-relaxed text-slate-600">
          Россия с населением свыше 140 миллионов человек и стремительно растущим рынком электронной торговли — одно из ключевых направлений для масштабирования брендов и производителей. Благодаря торговым гигантам <strong>Wildberries</strong>, <strong>Ozon</strong> и <strong>Lamoda</strong>, компании могут продавать продукцию миллионам покупателей без колоссальных инвестиций в сеть офлайн-магазинов.
        </p>
        <p className="text-lg leading-relaxed text-slate-600">
          В этом руководстве мы разберем ключевые этапы запуска бизнеса и продаж на российском рынке.
        </p>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">
            Почему рынок e-commerce в РФ так важен?
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li><strong className="text-slate-800">140+ миллионов</strong> потенциальных потребителей</li>
            <li><strong className="text-slate-800">Более 300 миллионов</strong> ежемесячных посещений ведущих маркетплейсов</li>
            <li>Высокий спрос на качественные зарубежные товары (текстиль, обувь, косметика)</li>
            <li>Возможность быстрой организации торговли через <Link to="/ru/kompaniya-v-turtsii" className="text-accent-500 hover:underline font-semibold">турецкое юридическое лицо</Link> или локальное присутствие</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">
            Основные маркетплейсы для старта
          </h2>
          
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-4">
            <h3 className="text-xl font-bold text-accent-500 mb-2">Wildberries</h3>
            <p className="text-slate-600">Безоговорочный лидер рынка. Доминирует в категориях одежды, обуви, текстиля, косметики и товаров повседневного спроса.</p>
          </div>
          
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-4">
            <h3 className="text-xl font-bold text-accent-500 mb-2">Ozon</h3>
            <p className="text-slate-600">Универсальный маркетплейс с широким охватом электроники, товаров для дома и cross-border доставки.</p>
          </div>
          
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h3 className="text-xl font-bold text-accent-500 mb-2">Lamoda</h3>
            <p className="text-slate-600">Премиальный сегмент моды с избирательным отбором брендов и высокой лояльностью платежеспособной аудитории.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          <div className="bg-primary-50 p-8 rounded-3xl">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">Что необходимо для успешного старта?</h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-700"><span className="w-2 h-2 rounded-full bg-accent-500" /> Анализ товарной ниши и цен</li>
              <li className="flex items-center gap-3 text-slate-700"><span className="w-2 h-2 rounded-full bg-accent-500" /> Оформление кодов ТН ВЭД и сертификатов EAC</li>
              <li className="flex items-center gap-3 text-slate-700"><span className="w-2 h-2 rounded-full bg-accent-500" /> Регистрация в системе «Честный ЗНАК»</li>
              <li className="flex items-center gap-3 text-slate-700"><span className="w-2 h-2 rounded-full bg-accent-500" /> Настройка логистики и фулфилмента</li>
              <li className="flex items-center gap-3 text-slate-700"><span className="w-2 h-2 rounded-full bg-accent-500" /> SEO-оптимизация карточек товаров</li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-primary-500 mb-3">Модель работы и расчеты</h2>
              <p className="text-slate-600 leading-relaxed">
                Для бесперебойных международных расчетов и работы с поставщиками компании активно используют международные хабы, включая <Link to="/ru/kompaniya-v-turtsii" className="text-accent-500 hover:underline font-semibold">компании в Турции с банковскими счетами</Link>.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-primary-500 mb-3">Структура расходов</h2>
              <ul className="list-disc pl-6 space-y-1 text-slate-600">
                <li>Комиссия маркетплейса: <strong className="text-accent-500">15–25%</strong></li>
                <li>Логистика и фулфилмент (FBO/FBS): <strong className="text-accent-500">15–20%</strong></li>
                <li>Внутренняя и внешняя реклама: <strong className="text-accent-500">3–8%</strong></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 text-white p-8 rounded-3xl mt-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500 rounded-full blur-[80px] opacity-20 -mr-20 -mt-20 pointer-events-none" />
          <h2 className="text-2xl font-bold mb-4 relative z-10 text-white">Вывод</h2>
          <p className="text-lg leading-relaxed text-slate-300 relative z-10">
            Российский рынок маркетплейсов открывает колоссальные возможности при условии грамотного юридического структурирования, надежной логистики и быстрой доставки до конечного покупателя.
          </p>
        </div>
      </div>
    )
  },

  "wildberriesde-satis-yapmak": {
    slug: "wildberriesde-satis-yapmak",
    metaTitleRu: "Как продавать на Wildberries: Пошаговый гид для брендов и селлеров",
    titleRu: "Как продавать на Wildberries: Пошаговый гид для брендов и селлеров",
    excerptRu: "Wildberries — абсолютный лидер онлайн-торговли в России с десятками миллионов заказов ежедневно и развитой сетью ПВЗ.",
    publishedAtRu: "17 мая 2026",
    readTimeRu: "3 мин чтения",
    contentRu: (
      <div className="space-y-8">
        <p className="text-lg leading-relaxed text-slate-600">
          Wildberries — крупнейший маркетплейс России и стран СНГ. Миллионы ежедневных покупателей создают непрерывный поток заказов для брендов, работающих как в бюджетном, так и в среднем и премиальном сегментах.
        </p>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">Кто может продавать на Wildberries?</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-600">
            <li className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100"><span className="w-2 h-2 rounded-full bg-primary-500" /> Бренды одежды и обуви</li>
            <li className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100"><span className="w-2 h-2 rounded-full bg-primary-500" /> Производители домашнего текстиля</li>
            <li className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100"><span className="w-2 h-2 rounded-full bg-primary-500" /> Косметические бренды</li>
            <li className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100"><span className="w-2 h-2 rounded-full bg-primary-500" /> Поставщики аксессуаров и товаров для дома</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-6 border-b border-slate-100 pb-2">Пошаговый процесс запуска</h2>
          
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 shrink-0 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-1">Анализ ниши и конкурентов</h3>
              <p className="text-slate-600">Оценка емкости категорий, сезонности, ценовой политики и процента выкупа.</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 shrink-0 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-1">Маркировка и Честный ЗНАК</h3>
              <p className="text-slate-600">Генерация Data Matrix кодов и корректная этикетка в соответствии со стандартами WB.</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 shrink-0 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-1">Логистика FBO и FBS</h3>
              <p className="text-slate-600">Доставка партий на склады Wildberries (Коледино, Электросталь, Казань, Краснодар) для максимальной скорости доставки.</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 shrink-0 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">4</div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-1">SEO и визуальный контент</h3>
              <p className="text-slate-600">Создание инфографики, видеообзоров и плотное наполнение ключевыми запросами для органического поиска.</p>
            </div>
          </div>
        </div>

        <div className="bg-primary-50 p-6 rounded-2xl border border-primary-100 my-8">
          <h3 className="text-lg font-bold text-primary-700 mb-2">Международные поставки на Wildberries</h3>
          <p className="text-slate-600">
            Многие зарубежные производители организуют регулярные поставки на Wildberries через <Link to="/ru/kompaniya-v-turtsii" className="text-accent-500 font-semibold hover:underline">турецкие компании</Link> для оптимизации контрактов, оплат и сертификации EAC.
          </p>
        </div>
      </div>
    )
  },

  "lamodaya-nasil-girilir": {
    slug: "lamodaya-nasil-girilir",
    metaTitleRu: "Как выйти на Lamoda: Критерии отбора, требования и подключение брендов",
    titleRu: "Выход на Lamoda: Полный гид для fashion-брендов и производителей обуви",
    excerptRu: "Lamoda — ведущая e-commerce платформа для модных брендов с премиальным позиционированием и строгими стандартами качества.",
    publishedAtRu: "22 июня 2026",
    readTimeRu: "4 мин чтения",
    contentRu: (
      <div className="space-y-8">
        <p className="text-lg leading-relaxed text-slate-600">
          Lamoda занимает особое положение среди российских маркетплейсов. В отличие от открытых площадок широкого профиля, Lamoda специализируется на одежде, обуви, аксессуарах и премиальной косметике, тщательно модерируя каждый входящий бренд.
        </p>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">Преимущества работы с Lamoda</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li><strong>Высокий средний чек</strong> и лояльная платежеспособная аудитория</li>
            <li>Отсутствие демпинга и контрафактных товаров благодаря закрытой модерации</li>
            <li>Собственная премиальная служба доставки с примеркой</li>
            <li>Высокая ценность бренда при присутствии на витрине Lamoda</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">Требования к брендам для подключения</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-800 mb-2">1. Зарегистрированный товарный знак</h3>
              <p className="text-sm text-slate-600">Официальное свидетельство на бренд или лицензионный договор.</p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-800 mb-2">2. Сертификаты и декларации EAC</h3>
              <p className="text-sm text-slate-600">Полный пакет документов о соответствии техрегламентам Таможенного союза.</p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-800 mb-2">3. Система «Честный ЗНАК»</h3>
              <p className="text-sm text-slate-600">Обязательная маркировка одежды, обуви и белья кодами Data Matrix.</p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-800 mb-2">4. Ассортиментная матрица</h3>
              <p className="text-sm text-slate-600">Актуальная сезонная коллекция с достаточной глубиной размерных рядов.</p>
            </div>
          </div>
        </div>
      </div>
    )
  },

  "ozonda-satis-yapmak": {
    slug: "ozonda-satis-yapmak",
    metaTitleRu: "Как продавать на Ozon: Актуальное руководство для селлеров 2026",
    titleRu: "Продажи на Ozon: Пошаговое руководство по выходу, логистике FBO и рекламе 2026",
    excerptRu: "Ozon — один из самых быстрорастущих и технологичных маркетплейсов в России. Полное руководство по схемам работы (FBO/FBS), маркировке, рекламе и масштабированию продаж.",
    publishedAtRu: "22 июня 2026",
    readTimeRu: "4 мин чтения",
    contentRu: (
      <div className="space-y-8">
        <p className="text-lg leading-relaxed text-slate-600">
          Для брендов и производителей, ориентированных на рынок электронной торговли в России, Ozon стал одной из самых быстрорастущих и высокотехнологичных торговых платформ. Часто называемый «российским Amazon», Ozon предоставляет селлерам доступ к десяткам миллионов активных покупателей благодаря мощной логистической инфраструктуре и развитой сети пунктов выдачи заказов (ПВЗ).
        </p>
        <p className="text-lg leading-relaxed text-slate-600">
          В этом актуальном руководстве мы подробно разбираем ключевые преимущества Ozon, пошаговый процесс подключения, схемы логистики FBO/FBS и инструменты рекламного масштабирования.
        </p>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">
            Что такое Ozon и почему он важен?
          </h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            Ozon — универсальный мультикатегорийный маркетплейс с колоссальным оборотом в категориях моды, косметики, товаров для дома, домашнего текстиля, электроники и товаров повседневного спроса.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Благодаря постоянным инвестициям в фулфилмент-центры и продвинутые рекламные алгоритмы (трафареты, брендовые полки, баллы за отзывы), Ozon обеспечивает селлерам прозрачное управление продажами и прогнозируемую конверсию.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">
            Ключевые преимущества Ozon для селлеров
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li><strong>Высокий платежеспособный трафик</strong> и огромная аудитория подписчиков Ozon Premium</li>
            <li><strong>Развитая сеть FBO-хабов</strong> с гарантированной доставкой по всей России за 24–48 часов</li>
            <li><strong>Широкий охват товарных категорий:</strong> от одежды и обуви до домашнего уюта и косметики</li>
            <li><strong>Гибкие рекламные инструменты:</strong> автоматические кампании, продвижение в поиске и Rich-контент</li>
            <li><strong>Возможность создания брендового магазина</strong> с индивидуальным визуальным оформлением</li>
            <li><strong>Удобная интеграция</strong> для международных брендов и поставщиков через <Link to="/ru/kompaniya-v-turtsii" className="text-accent-500 hover:underline font-semibold">турецкие компании</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">
            Кто может успешно продавать на Ozon?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-600">
            <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100"><span className="w-2 h-2 rounded-full bg-primary-500" /> Текстиль и готовая одежда</div>
            <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100"><span className="w-2 h-2 rounded-full bg-primary-500" /> Косметика и уходовые средства</div>
            <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100"><span className="w-2 h-2 rounded-full bg-primary-500" /> Домашний текстиль и посуда</div>
            <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100"><span className="w-2 h-2 rounded-full bg-primary-500" /> Обувь, сумки и кожгалантерея</div>
            <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100"><span className="w-2 h-2 rounded-full bg-primary-500" /> Товары для детей и игрушки</div>
            <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100"><span className="w-2 h-2 rounded-full bg-primary-500" /> Товары для кухни и интерьера</div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-6 border-b border-slate-100 pb-2">
            Пошаговые этапы запуска продаж на Ozon
          </h2>
          
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 shrink-0 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-1">Анализ ниши и ценообразования</h3>
              <p className="text-slate-600">Оценка спроса в категории, расчет юнит-экономики с учетом комиссий Ozon (10–22%), затрат на логистику и рекламных расходов.</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 shrink-0 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-1">Подготовка документации и маркировка «Честный ЗНАК»</h3>
              <p className="text-slate-600">Оформление деклараций и сертификатов EAC, получение кодов Data Matrix в системе «Честный ЗНАК» и нанесение правильной этикетки.</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 shrink-0 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-1">Логистика и сдача на склады FBO</h3>
              <p className="text-slate-600">Доставка партий на распределительные центры Ozon (Новая Рига, Хоругвино, Тверь, Ростов-на-Дону, Казань) для максимального покрытия регионов.</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 shrink-0 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">4</div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-1">Создание контента и Rich Content</h3>
              <p className="text-slate-600">Оформление продающих карточек товаров: качественные студийные фото, инфографика, видеообзоры и SEO-оптимизированные описания.</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 shrink-0 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">5</div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-1">Рекламные кампании и масштабирование</h3>
              <p className="text-slate-600">Запуск продвижения в поиске, трафаретов, акций распродаж и сбора первых положительных отзывов покупателей.</p>
            </div>
          </div>
        </div>

        <div className="bg-primary-50 p-8 rounded-3xl my-8">
          <h2 className="text-2xl font-bold text-primary-600 mb-3">Преимущества работы по схеме FBO (Fulfillment by Ozon)</h2>
          <p className="text-slate-700 leading-relaxed">
            Модель FBO — ключевой драйвер роста на Ozon. При размещении остатков на складах Ozon маркетплейс берет на себя хранение, упаковку, скоростную доставку и обработку клиентских возвратов. Это дает карточкам наивысший приоритет в поисковой выдаче и обеспечивает доставку покупателю уже на следующий день.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h2 className="text-lg font-bold text-slate-800 mb-2">Сравнение: Ozon или Wildberries?</h2>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>• <strong>Wildberries:</strong> Абсолютный лидер в категориях быстрой моды и текстиля с гигантским объемом заказов и жесткой ценовой конкуренцией.</li>
              <li>• <strong>Ozon:</strong> Сбалансированный средний чек, технологичный рекламный кабинет, лояльная аудитория и мультикатегорийное лидерство.</li>
            </ul>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h3 className="text-lg font-bold text-slate-800 mb-2">Международные поставки на Ozon</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Бренды из Турции и зарубежных стран получают колоссальное преимущество при работе через <Link to="/ru/kompaniya-v-turtsii" className="text-accent-500 font-semibold hover:underline">турецкую компанию</Link>, которая организует закупку, экспорт со ставкой 0% НДС и доставку на склады Ozon.
            </p>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mt-8">
          <h3 className="text-lg font-bold text-slate-900 mb-3">Читайте также:</h3>
          <ul className="space-y-2 text-sm text-primary-500 font-medium">
            <li><Link to="/blog/wildberriesde-satis-yapmak" className="hover:underline">→ Как продавать на Wildberries: пошаговый гид</Link></li>
            <li><Link to="/blog/eksport-iz-turtsii-na-marketpleysy-wildberries-ozon" className="hover:underline">→ Экспорт товаров из Турции на Wildberries и Ozon</Link></li>
            <li><Link to="/ru/kompaniya-v-turtsii" className="hover:underline">→ Регистрация компании в Турции для международной торговли</Link></li>
          </ul>
        </div>

        <div className="bg-slate-900 text-white p-8 rounded-3xl mt-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500 rounded-full blur-[80px] opacity-20 -mr-20 -mt-20 pointer-events-none" />
          <h2 className="text-2xl font-bold mb-4 relative z-10 text-white">Вывод</h2>
          <p className="text-lg leading-relaxed text-slate-300 relative z-10">
            Ozon открывает перед брендами огромный потенциал для масштабирования выручки. Грамотно выстроенная логистика FBO, точное соблюдение требований маркировки и эффективное управление рекламой позволяют стабильно наращивать долю рынка. <strong>Russia Market Entry</strong> обеспечивает комплексное сопровождение выхода на Ozon — от таможни и маркировки до ведения рекламных кампаний.
          </p>
        </div>
      </div>
    )
  },

  "rusyada-sirket-kurmadan-satis-yapilabilir-mi": {
    slug: "rusyada-sirket-kurmadan-satis-yapilabilir-mi",
    metaTitleRu: "Можно ли продавать в России без открытия компании? Модели Cross-Border и B2C",
    titleRu: "Продажи в России без открытия местного юрлица: Модели торговли",
    excerptRu: "Сравнение моделей трансграничной торговли (Cross-Border), работы через дистрибьюторов и использования турецких компаний.",
    publishedAtRu: "15 мая 2026",
    readTimeRu: "4 мин чтения",
    contentRu: (
      <div className="space-y-8">
        <p className="text-lg leading-relaxed text-slate-600">
          Один из частых вопросов иностранных селлеров — обязательно ли регистрировать юрлицо на территории РФ для старта продаж. Ответ зависит от выбранной бизнес-модели, объема поставок и требований маркетплейсов.
        </p>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">Основные модели работы</h2>
          
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-4">
            <h3 className="text-xl font-bold text-accent-500 mb-2">1. Модель Cross-Border (Ozon Global)</h3>
            <p className="text-slate-600">Товары отправляются напрямую зарубежным поставщиком почтой или курьерскими службами после заказа. Плюс — простота старта. Минус — долгая доставка (10–20 дней) и низкая конверсия по сравнению с локальными остатками.</p>
          </div>
          
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-4">
            <h3 className="text-xl font-bold text-accent-500 mb-2">2. Локальные склады (FBO) через зарубежный хаб</h3>
            <p className="text-slate-600">
              Поставки осуществляются оптовыми партиями с таможенным оформлением. Для удобства расчетов и логистики многие поставщики создают <Link to="/ru/kompaniya-v-turtsii" className="text-accent-500 font-semibold hover:underline">компании в Турции</Link>, которые выступают экспортно-импортным мостом.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h3 className="text-xl font-bold text-accent-500 mb-2">3. Работа через оператора полного цикла</h3>
            <p className="text-slate-600">Поставщик передает товары оператору по консигнационной схеме или агентскому договору, избавляясь от необходимости самостоятельного ведения сложного бухучета.</p>
          </div>
        </div>
      </div>
    )
  },

  "wildberries-algoritmasi-nasil-calisir": {
    slug: "wildberries-algoritmasi-nasil-calisir",
    metaTitleRu: "Как работает алгоритм Wildberries? SEO карточек и ранжирование 2026",
    titleRu: "Алгоритм ранжирования Wildberries: Как вывести карточку в топ выдачи",
    excerptRu: "Факторы ранжирования поискового алгоритма Wildberries: скорость доставки, конверсия, выкуп, отзывы и автореклама.",
    publishedAtRu: "14 мая 2026",
    readTimeRu: "5 мин чтения",
    contentRu: (
      <div className="space-y-8">
        <p className="text-lg leading-relaxed text-slate-600">
          Алгоритм поисковой выдачи Wildberries непрерывно совершенствуется. В 2026 году определяющую роль играют не только ключевые слова в описании, но и поведенческие метрики, скорость доставки и рекламная активность.
        </p>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">Главные факторы ранжирования</h2>
          
          <ul className="space-y-4">
            <li className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <strong className="text-primary-600 text-lg block mb-1">1. Скорость доставки до покупателя (35–40% веса)</strong>
              <p className="text-slate-600">Товары, расположенные на ближайшем к клиенту складе (Коледино, Шушары, Казань), всегда ранжируются выше предложений с долгим сроком логистики.</p>
            </li>
            <li className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <strong className="text-primary-600 text-lg block mb-1">2. Выручка карточки и динамика продаж (25–30%)</strong>
              <p className="text-slate-600">Объем заказов за последние 7–14 дней напрямую определяет позицию товара по высокочастотным запросам.</p>
            </li>
            <li className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <strong className="text-primary-600 text-lg block mb-1">3. Конверсия карточки (CTR и CR в корзину)</strong>
              <p className="text-slate-600">Качественная инфографика и видеообложки критически важны для повышения кликабельности в общей выдаче.</p>
            </li>
            <li className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <strong className="text-primary-600 text-lg block mb-1">4. Процент выкупа и рейтинг отзывов</strong>
              <p className="text-slate-600">Рейтинг ниже 4.5 звезд приводит к падению позиций и пессимизации в выдаче.</p>
            </li>
          </ul>
        </div>
      </div>
    )
  },

  "rusyada-en-cok-satan-urunler-2026": {
    slug: "rusyada-en-cok-satan-urunler-2026",
    metaTitleRu: "Самые продаваемые товары в России в 2026 году: Тренды и аналитика",
    titleRu: "Самые востребованные и продаваемые категории товаров в России в 2026 году",
    excerptRu: "Аналитика спроса на маркетплейсах РФ: женская и детская одежда, обувь, текстиль, косметика и товары для дома.",
    publishedAtRu: "12 мая 2026",
    readTimeRu: "5 мин чтения",
    contentRu: (
      <div className="space-y-8">
        <p className="text-lg leading-relaxed text-slate-600">
          Спрос на российских маркетплейсах демонстрирует устойчивый рост в сегменте качественных потребительских товаров повседневного спроса, одежды и товаров для дома.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-primary-50 p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-primary-700 mb-3">Одежда, обувь и текстиль</h3>
            <p className="text-slate-600 mb-3">Традиционно крупнейшая категория Wildberries и Lamoda:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 text-sm">
              <li>Базовый трикотаж и домашняя одежда</li>
              <li>Женские платья, костюмы и верхняя одежда</li>
              <li>Детский текстиль и одежда из натурального хлопка</li>
              <li>Постельное белье, полотенца и интерьерный текстиль</li>
            </ul>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h3 className="text-xl font-bold text-slate-800 mb-3">Косметика и уход</h3>
            <p className="text-slate-600 mb-3">Высокомаржинальная категория со стабильным повторным спросом:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 text-sm">
              <li>Уходовая косметика для лица и тела</li>
              <li>Органическая и натуральная продукция</li>
              <li>Профессиональный уход за волосами</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },

  "wildberries-depo-stratejisi-basarili-satis": {
    slug: "wildberries-depo-stratejisi-basarili-satis",
    metaTitleRu: "Складская стратегия на Wildberries: FBO, FBS и региональное распределение",
    titleRu: "Складская стратегия на Wildberries: Оптимизация логистики и продаж",
    excerptRu: "Как грамотно распределить остатки по региональным складам (Коледино, Электросталь, Казань, Краснодар) для роста заказов.",
    publishedAtRu: "10 мая 2026",
    readTimeRu: "4 мин чтения",
    contentRu: (
      <div className="space-y-8">
        <p className="text-lg leading-relaxed text-slate-600">
          Складская модель — фундамент успеха на Wildberries. Концентрация всех товарных остатков на одном складе ограничивает географию продаж и снижает видимость товара для региональных клиентов.
        </p>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">Рекомендуемая карта распределения запасов</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
              <span className="font-bold text-accent-500 text-xl block mb-1">45–50%</span>
              <strong className="text-slate-800 block text-sm">Москва и МО</strong>
              <span className="text-xs text-slate-500">Коледино, Электросталь, Тула</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
              <span className="font-bold text-accent-500 text-xl block mb-1">20–25%</span>
              <strong className="text-slate-800 block text-sm">Поволжье и Урал</strong>
              <span className="text-xs text-slate-500">Казань, Екатеринбург</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
              <span className="font-bold text-accent-500 text-xl block mb-1">15–20%</span>
              <strong className="text-slate-800 block text-sm">Юг России</strong>
              <span className="text-xs text-slate-500">Краснодар, Невинномысск</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
              <span className="font-bold text-accent-500 text-xl block mb-1">10–15%</span>
              <strong className="text-slate-800 block text-sm">Северо-Запад</strong>
              <span className="text-xs text-slate-500">Санкт-Петербург (Уткина Заводь)</span>
            </div>
          </div>
        </div>
      </div>
    )
  },

  "wildberries-ozon-lojistik-yonetimi-stok-stratejisi": {
    slug: "wildberries-ozon-lojistik-yonetimi-stok-stratejisi",
    metaTitleRu: "Управление логистикой и запасами на Wildberries и Ozon",
    titleRu: "Управление логистикой и товарными запасами на Wildberries и Ozon",
    excerptRu: "Синхронизация остатков, предотвращение out-of-stock ситуаций и расчет оптимальных партий поставок.",
    publishedAtRu: "8 мая 2026",
    readTimeRu: "4 мин чтения",
    contentRu: (
      <div className="space-y-8">
        <p className="text-lg leading-relaxed text-slate-600">
          Падение товара в статус «нет в наличии» (out-of-stock) мгновенно обнуляет позиции карточки в поисковой выдаче маркетплейсов. Восстановление органического трафика может занять недели рекламных инвестиций.
        </p>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">Правила управления запасами</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li><strong>Учет страхового запаса:</strong> Минимальный буфер на складе должен составлять 14–21 день продаж с учетом времени производства и международной доставки.</li>
            <li><strong>Кросс-докинг:</strong> Использование транзитных складов для быстрой переброски партий между маркетплейсами.</li>
            <li><strong>ABC/XYZ анализ:</strong> Фокус логистических мощностей на топ-20% SKU, генерирующих 80% выручки.</li>
          </ul>
        </div>
      </div>
    )
  },

  "cestniy-znak-nedir-rusyada-hangi-urunlerde-zorunludur": {
    slug: "cestniy-znak-nedir-rusyada-hangi-urunlerde-zorunludur",
    metaTitleRu: "Что такое «Честный ЗНАК»? Маркировка товаров в России 2026",
    titleRu: "Что такое «Честный ЗНАК»? Обязательная маркировка Data Matrix для импорта",
    excerptRu: "Все об обязательной национальной системе цифровой маркировки Честный ЗНАК: группы товаров, заказ кодов и таможня.",
    publishedAtRu: "6 мая 2026",
    readTimeRu: "6 мин чтения",
    contentRu: (
      <div className="space-y-8">
        <p className="text-lg leading-relaxed text-slate-600">
          «Честный ЗНАК» — государственная система цифровой маркировки и прослеживаемости товаров в Российской Федерации. Продажа подлежащей маркировке продукции без кодов Data Matrix наказывается крупными штрафами и конфискацией товара.
        </p>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">Товары, подлежащие обязательной маркировке</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">Легкая промышленность (одежда, блузки, трикотаж)</div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">Обувь всех типов и назначений</div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">Домашний текстиль и постельное белье</div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">Парфюмерия и туалетная вода</div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">Порядок нанесения кодов при импорте</h2>
          <p className="text-slate-600">
            Коды Data Matrix должны быть нанесены на потребительскую упаковку <strong>до пересечения границы РФ</strong> (на фабрике производителя или на транзитном таможенном складе).
          </p>
        </div>
      </div>
    )
  },

  "eac-belgesi-nedir-rusyaya-ihracat-icin-bilmeniz-gereken-her-sey": {
    slug: "eac-belgesi-nedir-rusyaya-ihracat-icin-bilmeniz-gereken-her-sey",
    metaTitleRu: "Что такое сертификат EAC? Обязательная сертификация в ЕАЭС",
    titleRu: "Что такое сертификат и декларация EAC? Полный гид по подтверждению соответствия",
    excerptRu: "Технические регламенты ЕАЭС (ТР ТС 017/2011, 007/2011), протоколы испытаний, оформление и ответственность селлера.",
    publishedAtRu: "4 мая 2026",
    readTimeRu: "5 мин чтения",
    contentRu: (
      <div className="space-y-8">
        <p className="text-lg leading-relaxed text-slate-600">
          Знак EAC (Eurasian Conformity) подтверждает, что продукция прошла все установленные процедуры оценки соответствия техническим регламентам Евразийского экономического союза (ЕАЭС).
        </p>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">Основные техрегламенты для e-commerce</h2>
          <ul className="space-y-3">
            <li className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <strong className="text-primary-600 block mb-1">ТР ТС 017/2011</strong>
              <span className="text-slate-600 text-sm">О безопасности продукции легкой промышленности (взрослая одежда, обувь, текстиль).</span>
            </li>
            <li className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <strong className="text-primary-600 block mb-1">ТР ТС 007/2011</strong>
              <span className="text-slate-600 text-sm">О безопасности продукции для детей и подростков (повышенные требования к гипоаллергенности).</span>
            </li>
            <li className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <strong className="text-primary-600 block mb-1">ТР ТС 009/2011</strong>
              <span className="text-slate-600 text-sm">О безопасности парфюмерно-косметической продукции.</span>
            </li>
          </ul>
        </div>
      </div>
    )
  },

  "rusyada-ooo-sirketi-nasil-kurulur-turk-markalari-icin-2026-rehberi": {
    slug: "rusyada-ooo-sirketi-nasil-kurulur-turk-markalari-icin-2026-rehberi",
    metaTitleRu: "Как зарегистрировать ООО в России для иностранных учредителей: Руководство 2026",
    titleRu: "Регистрация ООО в России: Процедура, налоговые режимы и банковские счета",
    excerptRu: "Пошаговый процесс открытия компании в РФ, уставный капитал, выбор системы налогообложения (ОСНО / УСН) и открытие счетов.",
    publishedAtRu: "2 мая 2026",
    readTimeRu: "7 мин чтения",
    contentRu: (
      <div className="space-y-8">
        <p className="text-lg leading-relaxed text-slate-600">
          Создание локального юридического лица (ООО) в России позволяет напрямую сотрудничать со всеми маркетплейсами, организовывать собственные склады и оптимизировать налогообложение.
        </p>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">Этапы регистрации ООО</h2>
          <ol className="list-decimal pl-6 space-y-3 text-slate-600">
            <li>Подготовка учредительных документов и устава</li>
            <li>Аренда юридического адреса</li>
            <li>Формирование уставного капитала (минимум 10 000 руб.)</li>
            <li>Подача заявления по форме Р11001 в регистрирующий орган ФНС</li>
            <li>Получение свидетельства ИНН/ОГРН и кодов статистики</li>
            <li>Открытие расчетного счета в банке и подключение онлайн-кассы</li>
          </ol>
        </div>

        <div className="bg-primary-50 p-6 rounded-2xl border border-primary-100 my-8">
          <h3 className="text-lg font-bold text-primary-700 mb-2">Альтернатива для нерезидентов: Юрлицо в Турции</h3>
          <p className="text-slate-600">
            Если вы хотите вести внешнеэкономическую деятельность и торговлю с Россией без открытия локального офиса в РФ, отличным решением является <Link to="/ru/kompaniya-v-turtsii" className="text-accent-500 font-semibold hover:underline">регистрация компании (Limited Şirket) в Турции</Link> с мультивалютными счетами.
          </p>
        </div>
      </div>
    )
  },

  "rusyaya-ithalat-sureci-turk-markalari-icin-adim-adim-rehber": {
    slug: "rusyaya-ithalat-sureci-turk-markalari-icin-adim-adim-rehber",
    metaTitleRu: "Процедура импорта товаров в Россию: Таможенное оформление и логистика 2026",
    titleRu: "Импорт товаров в Россию: Пошаговый регламент от контракта до растаможки",
    excerptRu: "Внешнеторговый контракт, присвоение кодов ТН ВЭД, расчет таможенных пошлин и НДС, прохождение контроля и выпуск товаров.",
    publishedAtRu: "30 апреля 2026",
    readTimeRu: "6 мин чтения",
    contentRu: (
      <div className="space-y-8">
        <p className="text-lg leading-relaxed text-slate-600">
          Импорт коммерческих партий товаров в РФ требует строгого соблюдения таможенного законодательства ЕАЭС, корректного расчета платежей и подготовки полного пакета товаросопроводительных документов.
        </p>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4 border-b border-slate-100 pb-2">Основные документы для таможенного оформления</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>Внешнеэкономический контракт и спецификация к поставке</li>
            <li>Инвойс (счет-фактура) и упаковочный лист (Packing List)</li>
            <li>Транспортная накладная (CMR, авианакладная или коносамент)</li>
            <li>Декларация или сертификат соответствия EAC</li>
            <li>Коды маркировки «Честный ЗНАК» в таможенной декларации</li>
            <li>Подтверждение уплаты таможенной пошлины и ввозного НДС (20%)</li>
          </ul>
        </div>
      </div>
    )
  }
};
