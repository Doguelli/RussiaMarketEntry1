/**
 * Approved legal-page copy for TR and RU.
 * Controllers and processors reflect only what the production code does
 * and the entity confirmed for legal pages: ООО «НАСЕЛЬ ТЕКСТИЛЬ».
 */

export type LegalKind = "privacy" | "terms" | "cookies";

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type LegalDoc = {
  kind: LegalKind;
  pathTr: string;
  pathRu: string;
  titleTr: string;
  titleRu: string;
  metaTr: string;
  metaRu: string;
  h1Tr: string;
  h1Ru: string;
  updatedLabelTr: string;
  updatedLabelRu: string;
  updatedDateTr: string;
  updatedDateRu: string;
  sectionsTr: LegalSection[];
  sectionsRu: LegalSection[];
};

const ENTITY = {
  name: "ООО «НАСЕЛЬ ТЕКСТИЛЬ»",
  inn: "1651099520",
  kpp: "165101001",
  ogrn: "1251600038513",
  address:
    "423571, Республика Татарстан, Нижнекамский район, г. Нижнекамск, проспект Мира, д. 50, кв. 179, Россия",
  email: "hello@russiamarketentry.com",
  phone: "+7 993 406-72-58",
};

export const LEGAL_DOCS: Record<LegalKind, LegalDoc> = {
  privacy: {
    kind: "privacy",
    pathTr: "/gizlilik-politikasi",
    pathRu: "/ru/politika-konfidentsialnosti",
    titleTr: "Gizlilik ve Kişisel Verilerin Korunması Politikası",
    titleRu: "Политика конфиденциальности и обработки персональных данных",
    metaTr:
      "Russia Market Entry gizlilik politikası: kişisel verilerin toplanması, işlenmesi, saklanması ve üçüncü taraf hizmetler hakkında bilgilendirme.",
    metaRu:
      "Политика конфиденциальности Russia Market Entry: какие персональные данные собираются, как обрабатываются и какие сторонние сервисы используются.",
    h1Tr: "Gizlilik ve Kişisel Verilerin Korunması Politikası",
    h1Ru: "Политика конфиденциальности и обработки персональных данных",
    updatedLabelTr: "Son güncelleme",
    updatedLabelRu: "Дата последнего обновления",
    updatedDateTr: "24 Ağustos 2026",
    updatedDateRu: "24 августа 2026 г.",
    sectionsTr: [
      {
        heading: "1. Veri sorumlusu",
        paragraphs: [
          `Bu web sitesini (russiamarketentry.com) işleten ve sitede toplanan kişisel verilerden sorumlu olan tüzel kişi ${ENTITY.name}’dir.`,
          `Kimlik bilgileri: ИНН ${ENTITY.inn}, КПП ${ENTITY.kpp}, ОГРН ${ENTITY.ogrn}.`,
          `Kayıtlı adres: ${ENTITY.address}`,
          `İletişim: ${ENTITY.email}, telefon ${ENTITY.phone}.`,
        ],
      },
      {
        heading: "2. Bu politikanın kapsamı",
        paragraphs: [
          "Bu politika, web sitesini ziyaret ettiğinizde, iletişim formunu doldurduğunuzda, Türkiye’de şirket kuruluşu sayfasındaki formu gönderdiğinizde veya sitedeki teknik araçlarla etkileşime girdiğinizde işlenebilecek kişisel veriler hakkında bilgilendirme amaçlıdır.",
          "Politika, yalnızca sitede fiilen kullanılan işlevleri ve üçüncü taraf hizmetleri yansıtır. Analitik çerezler için sitede kabul / ret seçeneği sunan bir çerez banner’ı bulunur; tercih, alt bilgideki “Çerez Ayarları” bağlantısından değiştirilebilir.",
        ],
      },
      {
        heading: "3. Toplanabilecek kişisel veriler",
        paragraphs: ["Aşağıdaki kategorilerde veri işlenebilir:"],
        bullets: [
          "İletişim formu (/iletisim ve /ru/kontakty): ad, e-posta, telefon, şirket adı (isteğe bağlı), mesaj.",
          "Türkiye’de şirket kuruluşu formu (/ru/kompaniya-v-turtsii): ad, telefon, ilgilendiğiniz iş formu, mesaj (isteğe bağlı). Bu formda e-posta alanı yoktur ve e-posta toplanmaz.",
          "Teknik veriler: IP adresi, tarayıcı ve cihaz bilgileri, ziyaret edilen sayfa yolları, dil tercihi ile ilgili yerel depolama değerleri.",
          "Analitik veriler: Google Analytics ve Yandex Metrika aracılığıyla oluşturulan kullanım ve ölçüm verileri.",
        ],
      },
      {
        heading: "4. İşleme amaçları",
        paragraphs: ["Kişisel veriler şu amaçlarla işlenebilir:"],
        bullets: [
          "Taleplerinize yanıt vermek ve iletişim kurmak",
          "Danışmanlık veya hizmet taleplerinizi değerlendirmek",
          "Sitenin güvenliğini ve teknik işleyişini sağlamak",
          "Site kullanımını anlamak ve hizmeti iyileştirmek (analitik)",
          "Yürürlükteki mevzuattan kaynaklanan yükümlülüklere uymak",
        ],
      },
      {
        heading: "5. İşlemenin hukuki dayanakları",
        paragraphs: [
          "İşleme, somut duruma ve ilgili yargı alanına göre; talebinizi yerine getirmek için gerekli olması, meşru menfaatlerin korunması, yasal yükümlülüklerin yerine getirilmesi veya — ilgili olduğunda — açık rızanıza dayanabilir.",
          "Google Analytics çerezleri ile Yandex Metrika oturum kaydı ve tıklama haritası, çerez banner’ında verilen onaya dayanır. Temel ziyaret istatistiği (Yandex Metrika sayacı ve Google Analytics’in çerezsiz ölçümü) sitenin işleyişini ve kullanımını anlamaya yönelik meşru menfaate dayanır.",
        ],
      },
      {
        heading: "6. Üçüncü taraf hizmetler ve altyapı",
        paragraphs: [
          "Sitenin çalışması için aşağıdaki üçüncü taraf hizmetler kullanılır. Bunlar, hizmetin doğası gereği IP adresi ve istek meta verilerini alabilir:",
        ],
        bullets: [
          "FormSubmit (formsubmit.co): İletişim ve Türkiye şirket kuruluşu formları bu hizmete JSON olarak gönderilir. Form içeriği FormSubmit üzerinden operasyon e-postasına iletilir; tarayıcıdan yapılan istek nedeniyle IP ve kullanıcı aracısı (user-agent) bilgisi de FormSubmit’e ulaşabilir.",
          "Google Analytics 4 (ölçüm kimliği G-ZPTMJFB9WS): Sayfa görüntülemeleri ve kullanım verileri toplanır. Google Consent Mode kullanılır: onay verilmeden analitik çerezleri ayarlanmaz ve yalnızca çerezsiz ölçüm sinyalleri gönderilir; onay verildiğinde _ga çerezleri kullanılır.",
          "Yandex Metrika (sayaç 112001301): Ziyaret ve sayfa görüntüleme istatistikleri toplanır; Yandex kendi çerezlerini (ör. _ym_uid) ayarlayabilir. Oturum kaydı (Webvisor) ve tıklama haritası yalnızca çerez banner’ında onay verildikten sonra etkinleşir.",
          "Netlify: Barındırma ve içerik dağıtımı. Ayrıca Decap CMS / yönetici erişimi için Netlify Identity widget’ı yalnızca yönetici paneli ile davet ve şifre sıfırlama bağlantılarında yüklenir.",
          "Geo-IP hizmetleri (api.country.is ve yedek olarak ipapi.co): Manuel dil tercihi kaydedilmemiş bir ziyaretçi ana sayfaya (/) ilk geldiğinde ülke kodu tespiti için IP adresi gönderilebilir; sonuç oturum depolamada tutulabilir ve dil yönlendirmesi için kullanılabilir.",
          "WhatsApp (wa.me): Ziyaretçi WhatsApp bağlantısına tıkladığında Meta/WhatsApp’ın kendi gizlilik kuralları geçerli olur.",
        ],
      },
      {
        heading: "7. Uluslararası aktarımlar",
        paragraphs: [
          "Yukarıdaki hizmetlerden bazıları Rusya Federasyonu dışında (örneğin ABD veya Avrupa’da) sunulabilir. Form, analitik, barındırma veya geo-IP istekleri bu nedenle sınır ötesi aktarım oluşturabilir. Aktarımın ayrıntıları ilgili hizmet sağlayıcının koşullarına bağlıdır.",
        ],
      },
      {
        heading: "8. Saklama",
        paragraphs: [
          "Kişisel veriler, toplama amacının gerektirdiği süre boyunca ve varsa yasal saklama yükümlülüklerine uygun olarak tutulur.",
          "Form gönderileri FormSubmit üzerinden e-posta olarak iletilir; analitik veriler Google Analytics hesabında; dil/ülke tercihleri tarayıcınızın localStorage veya sessionStorage alanlarında saklanabilir. Kesin saklama süreleri ilgili hizmetin ayarlarına ve bizim operasyonel uygulamamıza bağlıdır.",
        ],
      },
      {
        heading: "9. Güvenlik",
        paragraphs: [
          "Verilerin yetkisiz erişim, kayıp veya değiştirilmesine karşı makul teknik ve idari önlemler alınmasına özen gösterilir. İnternet üzerinden iletimin tamamen risksiz olduğu garanti edilemez.",
        ],
      },
      {
        heading: "10. Haklarınız",
        paragraphs: [
          "Uygulanabilir mevzuat çerçevesinde kişisel verilerinize erişim, düzeltme, silme, işlemeyi kısıtlama veya itiraz etme gibi haklara sahip olabilirsiniz.",
          `Haklarınızı kullanmak veya bu politika hakkında soru sormak için ${ENTITY.email} adresine yazabilir veya ${ENTITY.phone} numarasını arayabilirsiniz.`,
        ],
      },
      {
        heading: "11. Politika değişiklikleri",
        paragraphs: [
          "Bu politika güncellenebilir. Güncel sürüm bu sayfada yayınlanır; üstteki “Son güncelleme” tarihi değişikliği gösterir.",
        ],
      },
    ],
    sectionsRu: [
      {
        heading: "1. Оператор персональных данных",
        paragraphs: [
          `Оператором веб-сайта russiamarketentry.com и ответственным за обработку персональных данных, собираемых через сайт, является ${ENTITY.name}.`,
          `Реквизиты: ИНН ${ENTITY.inn}, КПП ${ENTITY.kpp}, ОГРН ${ENTITY.ogrn}.`,
          `Юридический адрес: ${ENTITY.address}`,
          `Контакты: ${ENTITY.email}, телефон ${ENTITY.phone}.`,
        ],
      },
      {
        heading: "2. Область действия политики",
        paragraphs: [
          "Настоящая политика информирует о персональных данных, которые могут обрабатываться при посещении сайта, заполнении формы обратной связи, отправке заявки на странице регистрации компании в Турции или при взаимодействии с техническими средствами сайта.",
          "Политика отражает только фактически используемые функции и сторонние сервисы. Для аналитических cookie на сайте есть баннер с возможностью принять или отклонить их; выбор можно изменить по ссылке «Настройки cookie» в нижней части страницы.",
        ],
      },
      {
        heading: "3. Какие данные могут собираться",
        paragraphs: ["Могут обрабатываться следующие категории данных:"],
        bullets: [
          "Форма контактов (/iletisim и /ru/kontakty): имя, адрес электронной почты, телефон, название компании (необязательно), сообщение.",
          "Форма на странице регистрации компании в Турции (/ru/kompaniya-v-turtsii): имя, телефон, интересующая форма бизнеса, сообщение (необязательно). Поле e-mail на этой форме отсутствует, адрес электронной почты не собирается.",
          "Технические данные: IP-адрес, сведения о браузере и устройстве, пути посещённых страниц, значения локального хранилища, связанные с языковыми предпочтениями.",
          "Аналитические данные: данные об использовании сайта, формируемые через Google Analytics и Яндекс Метрику.",
        ],
      },
      {
        heading: "4. Цели обработки",
        paragraphs: ["Персональные данные могут обрабатываться в целях:"],
        bullets: [
          "ответа на ваши обращения и поддержания связи",
          "рассмотрения запросов на консультацию или услуги",
          "обеспечения безопасности и технической работоспособности сайта",
          "анализа использования сайта и улучшения сервиса",
          "исполнения обязанностей, предусмотренных применимым законодательством",
        ],
      },
      {
        heading: "5. Правовые основания обработки",
        paragraphs: [
          "Обработка может осуществляться в зависимости от конкретной ситуации и применимого права: когда это необходимо для ответа на ваш запрос, для защиты законных интересов, для исполнения правовых обязанностей либо — при наличии — на основании вашего согласия.",
          "Cookie Google Analytics, а также запись сессий (Вебвизор) и карта кликов Яндекс Метрики используются на основании согласия, данного в баннере cookie. Базовая статистика посещений (счётчик Яндекс Метрики и измерение Google Analytics без cookie) основана на законном интересе в обеспечении работы сайта и понимании его использования.",
        ],
      },
      {
        heading: "6. Сторонние сервисы и инфраструктура",
        paragraphs: [
          "Для работы сайта используются следующие сторонние сервисы. По характеру услуги они могут получать IP-адрес и метаданные запроса:",
        ],
        bullets: [
          "FormSubmit (formsubmit.co): формы контактов и заявки на регистрацию компании в Турции отправляются в этот сервис в формате JSON. Содержимое формы передаётся через FormSubmit на операционную электронную почту; при запросе из браузера IP-адрес и user-agent также могут быть доступны FormSubmit.",
          "Google Analytics 4 (идентификатор G-ZPTMJFB9WS): собираются просмотры страниц и данные об использовании. Используется Google Consent Mode: до получения согласия аналитические cookie не устанавливаются и отправляются только сигналы измерения без cookie; после согласия используются cookie _ga.",
          "Яндекс Метрика (счётчик 112001301): собирается статистика посещений и просмотров страниц; Яндекс может устанавливать собственные cookie (например, _ym_uid). Запись сессий (Вебвизор) и карта кликов включаются только после согласия в баннере cookie.",
          "Netlify: хостинг и доставка контента. Кроме того, виджет Netlify Identity (для доступа к CMS / админ-панели) загружается только в админ-панели и по ссылкам приглашения или восстановления пароля.",
          "Сервисы Geo-IP (api.country.is и резервно ipapi.co): при первом посещении главной страницы (/) пользователем без сохранённого ручного выбора языка IP-адрес может передаваться для определения кода страны; результат может сохраняться в sessionStorage и использоваться для языкового перенаправления.",
          "WhatsApp (wa.me): при переходе по ссылке WhatsApp применяются правила конфиденциальности Meta/WhatsApp.",
        ],
      },
      {
        heading: "7. Трансграничная передача",
        paragraphs: [
          "Часть указанных сервисов может предоставляться за пределами Российской Федерации (например, в США или Европе). Отправка форм, аналитика, хостинг или Geo-IP-запросы могут означать трансграничную передачу данных. Условия такой передачи определяются политиками соответствующих поставщиков.",
        ],
      },
      {
        heading: "8. Сроки хранения",
        paragraphs: [
          "Персональные данные хранятся в течение срока, необходимого для целей обработки, и с учётом возможных требований законодательства о хранении.",
          "Заявки форм доставляются по электронной почте через FormSubmit; аналитические данные — в аккаунте Google Analytics; языковые/страновые предпочтения — в localStorage или sessionStorage браузера. Конкретные сроки зависят от настроек сервисов и нашей операционной практики.",
        ],
      },
      {
        heading: "9. Безопасность",
        paragraphs: [
          "Мы стремимся применять разумные технические и организационные меры для защиты данных от несанкционированного доступа, утраты или изменения. Передача данных через интернет не может быть гарантирована как полностью безопасная.",
        ],
      },
      {
        heading: "10. Ваши права",
        paragraphs: [
          "В рамках применимого законодательства вы можете иметь право на доступ к своим данным, их уточнение, удаление, ограничение обработки или возражение против обработки.",
          `Чтобы воспользоваться правами или задать вопрос по этой политике, напишите на ${ENTITY.email} или позвоните по номеру ${ENTITY.phone}.`,
        ],
      },
      {
        heading: "11. Изменения политики",
        paragraphs: [
          "Политика может обновляться. Актуальная редакция публикуется на этой странице; дата «последнего обновления» отражает дату изменения.",
        ],
      },
    ],
  },

  terms: {
    kind: "terms",
    pathTr: "/kullanim-sartlari",
    pathRu: "/ru/usloviya-ispolzovaniya",
    titleTr: "Kullanım Şartları | Russia Market Entry",
    titleRu: "Условия использования | Russia Market Entry",
    metaTr:
      "Russia Market Entry kullanım şartları: sitenin amacı, bilgilendirme niteliği, fikri mülkiyet ve sorumluluk sınırları.",
    metaRu:
      "Условия использования сайта Russia Market Entry: назначение сайта, информационный характер материалов, интеллектуальная собственность и ограничение ответственности.",
    h1Tr: "Kullanım Şartları",
    h1Ru: "Условия использования",
    updatedLabelTr: "Son güncelleme",
    updatedLabelRu: "Дата последнего обновления",
    updatedDateTr: "24 Ağustos 2026",
    updatedDateRu: "24 августа 2026 г.",
    sectionsTr: [
      {
        heading: "1. Site işletmecisi",
        paragraphs: [
          `Bu web sitesi ${ENTITY.name} tarafından işletilir (ИНН ${ENTITY.inn}, КПП ${ENTITY.kpp}, ОГРН ${ENTITY.ogrn}).`,
          `Kayıtlı adres: ${ENTITY.address}`,
          `İletişim: ${ENTITY.email}, ${ENTITY.phone}.`,
        ],
      },
      {
        heading: "2. Sitenin amacı",
        paragraphs: [
          "Russia Market Entry markası altında sunulan bu site; Türkiye–Rusya e-ticaret, pazaryeri operasyonları, lojistik, şirket kuruluşu ve ilgili danışmanlık konularında bilgilendirme, içerik ve iletişim imkânı sağlar.",
        ],
      },
      {
        heading: "3. Bilgilendirme niteliği",
        paragraphs: [
          "Sitedeki makaleler, hizmet açıklamaları, rakamlar ve süreç anlatımları genel bilgilendirme amaçlıdır.",
          "Bu içerikler, otomatik olarak hukuki, vergi, gümrük, muhasebe veya yatırım tavsiyesi oluşturmaz. Somut durumunuz için ayrı bir sözleşme veya profesyonel danışmanlık gerekebilir. Mevzuat ve uygulamalar değişebilir; yayınlanan bilgilerin her an güncel ve eksiksiz olduğu garanti edilmez.",
        ],
      },
      {
        heading: "4. Fikri mülkiyet",
        paragraphs: [
          "Site tasarımı, metinler, görseller, logo ve diğer içerikler — aksi belirtilmedikçe — site işletmecisine veya ilgili hak sahiplerine aittir. İzinsiz kopyalama, çoğaltma, dağıtma veya ticari kullanım yasaktır.",
          "Sitede geçen Wildberries, Ozon, Lamoda, Yandex, Google, FormSubmit, Netlify ve benzeri üçüncü taraf markalar yalnızca referans amaçlıdır; bu markaların sahipliği ilgili sahiplerine aittir.",
        ],
      },
      {
        heading: "5. İzin verilen ve yasaklanan kullanım",
        paragraphs: ["Siteyi yasalara uygun, dürüst ve makul biçimde kullanmalısınız. Özellikle şu davranışlar yasaktır:"],
        bullets: [
          "Sitenin güvenliğini veya işleyişini bozmaya çalışmak",
          "Zararlı yazılım yaymak veya otomatik saldırı / aşırı yük oluşturmak",
          "Yanıltıcı veya hukuka aykırı içerik göndermek",
          "Başkalarının haklarını ihlal etmek",
        ],
      },
      {
        heading: "6. Kullanıcı tarafından gönderilen bilgiler",
        paragraphs: [
          "Formlar veya diğer kanallar aracılığıyla gönderdiğiniz bilgilerin doğru ve size ait olması sizin sorumluluğunuzdadır. Form gönderimi bir teklif veya sözleşme oluşturmaz; hizmet ilişkisi ayrıca kararlaştırılmadıkça doğmaz.",
          "Kişisel verilerin işlenmesi hakkında ayrıntılar Gizlilik Politikası’nda yer alır.",
        ],
      },
      {
        heading: "7. Üçüncü taraf bağlantılar ve hizmetler",
        paragraphs: [
          "Site; WhatsApp, LinkedIn, FormSubmit, Google Analytics, Netlify ve benzeri üçüncü taraf hizmetlere veya dış bağlantılara yönlendirebilir. Bu hizmetlerin koşulları ve gizlilik uygulamaları ilgili sağlayıcılara aittir; onlar üzerinde tam kontrolümüz yoktur.",
        ],
      },
      {
        heading: "8. Kullanılabilirlik",
        paragraphs: [
          "Site kesintisiz, hatasız veya her cihazda aynı şekilde çalışacak şekilde garanti edilmez. Bakım, teknik arıza veya üçüncü taraf kesintileri nedeniyle erişim geçici olarak etkilenebilir.",
        ],
      },
      {
        heading: "9. Sorumluluğun sınırlandırılması",
        paragraphs: [
          "Yürürlükteki hukukun izin verdiği ölçüde; sitenin kullanımından, içeriğe güvenilmesinden veya erişimin kesilmesinden kaynaklanan dolaylı, arızi veya sonuç olarak ortaya çıkan zararlardan sorumlu tutulmamaya çalışılır.",
          "Bu sınırlama, uygulanabilir hukukun zorunlu kıldığı sorumlulukları ortadan kaldırmaz ve yanıltıcı bir bağışıklık iddiası değildir.",
        ],
      },
      {
        heading: "10. Değişiklikler",
        paragraphs: [
          "Site içeriği ve bu kullanım şartları güncellenebilir. Güncel metin bu sayfada yayınlanır.",
        ],
      },
      {
        heading: "11. Uygulanacak hukuk",
        paragraphs: [
          "Uygulanacak hukuk ve yetkili yargı mercileri; somut hukuki ilişkiye, tarafların konumuna ve varsa aranızdaki ayrı sözleşmeye göre belirlenir. Bu metinde tek bir ülke hukuku veya mahkeme seçimi dayatılmaz.",
        ],
      },
      {
        heading: "12. İletişim",
        paragraphs: [
          `Sorularınız için: ${ENTITY.email}, ${ENTITY.phone}.`,
        ],
      },
    ],
    sectionsRu: [
      {
        heading: "1. Оператор сайта",
        paragraphs: [
          `Настоящий веб-сайт администрируется ${ENTITY.name} (ИНН ${ENTITY.inn}, КПП ${ENTITY.kpp}, ОГРН ${ENTITY.ogrn}).`,
          `Юридический адрес: ${ENTITY.address}`,
          `Контакты: ${ENTITY.email}, ${ENTITY.phone}.`,
        ],
      },
      {
        heading: "2. Назначение сайта",
        paragraphs: [
          "Сайт под брендом Russia Market Entry предоставляет информацию и канал связи по вопросам электронной коммерции Турция–Россия, работы с маркетплейсами, логистики, регистрации компаний и связанного консалтинга.",
        ],
      },
      {
        heading: "3. Информационный характер материалов",
        paragraphs: [
          "Статьи, описания услуг, цифры и описания процессов носят общий информационный характер.",
          "Они сами по себе не являются юридической, налоговой, таможенной, бухгалтерской или инвестиционной консультацией. Для вашей конкретной ситуации может потребоваться отдельный договор или профессиональная консультация. Законодательство и практика меняются; актуальность и полнота опубликованных сведений не гарантируются на каждый момент времени.",
        ],
      },
      {
        heading: "4. Интеллектуальная собственность",
        paragraphs: [
          "Дизайн сайта, тексты, изображения, логотип и иные материалы — если не указано иное — принадлежат оператору сайта или иным правообладателям. Несанкционированное копирование, распространение или коммерческое использование запрещены.",
          "Упоминания сторонних товарных знаков (Wildberries, Ozon, Lamoda, Yandex, Google, FormSubmit, Netlify и др.) носят справочный характер; права на них принадлежат соответствующим владельцам.",
        ],
      },
      {
        heading: "5. Допустимое и запрещённое использование",
        paragraphs: ["Вы обязуетесь использовать сайт законно и добросовестно. В частности, запрещено:"],
        bullets: [
          "пытаться нарушить безопасность или работоспособность сайта",
          "распространять вредоносное ПО или создавать чрезмерную нагрузку / атаки",
          "отправлять заведомо ложную или незаконную информацию",
          "нарушать права третьих лиц",
        ],
      },
      {
        heading: "6. Информация, направляемая пользователем",
        paragraphs: [
          "Вы несёте ответственность за достоверность сведений, направляемых через формы и иные каналы. Отправка формы не создаёт оферту или договор; договорные отношения возникают только при отдельной договорённости.",
          "Подробности об обработке персональных данных изложены в Политике конфиденциальности.",
        ],
      },
      {
        heading: "7. Сторонние ссылки и сервисы",
        paragraphs: [
          "Сайт может содержать ссылки или интеграции со сторонними сервисами (WhatsApp, LinkedIn, FormSubmit, Google Analytics, Netlify и др.). Условия использования и конфиденциальности этих сервисов определяются их поставщиками; мы не контролируем их полностью.",
        ],
      },
      {
        heading: "8. Доступность сайта",
        paragraphs: [
          "Непрерывная, безошибочная работа сайта на всех устройствах не гарантируется. Доступ может временно ограничиваться из‑за обслуживания, технических сбоев или перебоев у третьих лиц.",
        ],
      },
      {
        heading: "9. Ограничение ответственности",
        paragraphs: [
          "В пределах, допускаемых применимым правом, мы стремимся не нести ответственность за косвенные, случайные или последующие убытки, связанные с использованием сайта, доверием к его содержанию или недоступностью сайта.",
          "Это ограничение не отменяет обязательную ответственность, установленную законом, и не является вводящим в заблуждение заявлением о полном освобождении от ответственности.",
        ],
      },
      {
        heading: "10. Изменения",
        paragraphs: [
          "Содержание сайта и настоящие условия могут обновляться. Актуальная редакция публикуется на этой странице.",
        ],
      },
      {
        heading: "11. Применимое право",
        paragraphs: [
          "Применимое право и подсудность определяются исходя из конкретного правоотношения, положения сторон и любого отдельного соглашения между вами и нами. Настоящий текст не устанавливает заранее одно конкретное национальное право или суд.",
        ],
      },
      {
        heading: "12. Контакты",
        paragraphs: [
          `По вопросам: ${ENTITY.email}, ${ENTITY.phone}.`,
        ],
      },
    ],
  },

  cookies: {
    kind: "cookies",
    pathTr: "/cerez-politikasi",
    pathRu: "/ru/politika-cookie",
    titleTr: "Çerez Politikası | Russia Market Entry",
    titleRu: "Политика использования файлов cookie | Russia Market Entry",
    metaTr:
      "Russia Market Entry çerez politikası: sitede kullanılan çerezler, Google Analytics, yerel depolama ve tarayıcı kontrolleri.",
    metaRu:
      "Политика cookie Russia Market Entry: какие технологии используются на сайте, Google Analytics, локальное хранилище и настройки браузера.",
    h1Tr: "Çerez Politikası",
    h1Ru: "Политика использования файлов cookie",
    updatedLabelTr: "Son güncelleme",
    updatedLabelRu: "Дата последнего обновления",
    updatedDateTr: "24 Ağustos 2026",
    updatedDateRu: "24 августа 2026 г.",
    sectionsTr: [
      {
        heading: "1. İşletmeci",
        paragraphs: [
          `Bu site ${ENTITY.name} tarafından işletilir. İletişim: ${ENTITY.email}, ${ENTITY.phone}.`,
          `Kayıtlı adres: ${ENTITY.address}`,
        ],
      },
      {
        heading: "2. Çerez nedir?",
        paragraphs: [
          "Çerezler, bir web sitesinin tarayıcınıza yerleştirebildiği küçük metin dosyalarıdır. Benzer amaçlar için localStorage ve sessionStorage gibi tarayıcı depolama alanları da kullanılabilir.",
        ],
      },
      {
        heading: "3. Mevcut durum (önemli)",
        paragraphs: [
          "İlk ziyarette bir çerez banner’ı gösterilir ve analitik çerezleri kabul etme veya reddetme seçeneği sunulur. Tercihiniz tarayıcınızda (localStorage: cookie_consent_v1) saklanır ve alt bilgideki “Çerez Ayarları” bağlantısından istediğiniz zaman değiştirilebilir.",
          "Reddetmeniz veya henüz seçim yapmamış olmanız durumunda Google Analytics çerez ayarlamaz ve Yandex Metrika oturum kaydı / tıklama haritası kapalı kalır; temel ziyaret istatistiği tutulmaya devam eder. Ayrıca çerezleri tarayıcı ayarlarınızdan da silebilir veya engelleyebilirsiniz.",
        ],
      },
      {
        heading: "4. Birinci taraf kodun ayarladığı çerezler",
        paragraphs: [
          "Uygulama kodumuz doğrudan document.cookie ile çerez yazmaz. Sitede görülen çerezler, üçüncü taraf komut dosyalarından kaynaklanır.",
        ],
      },
      {
        heading: "5. Analitik — Google Analytics",
        paragraphs: [
          "Google Analytics 4 kullanılır (ölçüm kimliği G-ZPTMJFB9WS). gtag komut dosyası sayfa yüklendiğinde eklenir; sayfa değişikliklerinde görüntüleme olayları gönderilir. Google Consent Mode sayesinde onay verilmeden çerez ayarlanmaz, yalnızca çerezsiz ölçüm sinyalleri gönderilir.",
          "Onay verdiğinizde Google, _ga ve _ga_* gibi çerezler ayarlayabilir. Bunlar kullanım istatistikleri ve ölçüm amaçlıdır. Süreler Google’ın uygulamalarına bağlıdır.",
          "Yandex Metrika (sayaç 112001301) ziyaret istatistikleri için kullanılır ve _ym_uid, _ym_d gibi çerezler ayarlayabilir. Oturum kaydı (Webvisor) ve tıklama haritası yalnızca onay verdikten sonraki sayfa yüklemelerinde etkinleşir.",
        ],
      },
      {
        heading: "6. Yerel depolama (localStorage / sessionStorage)",
        paragraphs: [
          "Kodda kullanılan depolama anahtarları:",
        ],
        bullets: [
          "localStorage: i18nextLng — dil tercihi",
          "localStorage: user_language_manual — kullanıcının dil seçiciden yaptığı açık tercih",
          "localStorage: cookie_consent_v1 — çerez banner’ında verilen kabul / ret tercihi",
          "sessionStorage: detected_geo_country — geo-IP ile tespit edilen ülke kodunun oturum önbelleği",
        ],
      },
      {
        heading: "7. Geo-IP teknolojisi",
        paragraphs: [
          "Manuel dil tercihi yokken ana sayfaya (/) ilk girişte ülke tespiti için api.country.is ve gerekirse ipapi.co çağrılabilir. Bu istekler çerez değil, harici bir API çağrısıdır; IP adresi ilgili hizmete iletilebilir.",
        ],
      },
      {
        heading: "8. Diğer üçüncü taraf teknolojiler",
        paragraphs: [
          "Netlify Identity widget’ı (identity.netlify.com) yalnızca yönetici paneli ile davet ve şifre sıfırlama bağlantılarında yüklenir; CMS/yönetici kimlik doğrulaması içindir ve kendi depolama veya çerezlerini kullanabilir.",
          "FormSubmit form gönderiminde kullanılır; form gönderilene kadar ziyaretçi tarayıcısına FormSubmit çerezi yerleştirmeyi zorunlu kılmaz, ancak gönderim sırasında FormSubmit’e istek gider.",
          "Sitede reklam / yeniden pazarlama pikseli (ör. Meta Pixel) kurulu değildir.",
        ],
      },
      {
        heading: "9. Tarayıcı üzerinden kontrol",
        paragraphs: [
          "Çerezleri ve site verilerini tarayıcı ayarlarından silebilir, engelleyebilir veya sınırlandırabilirsiniz. Engelleme bazı işlevleri (örneğin dil tercihinin hatırlanması veya analitik) etkileyebilir.",
          "Google Analytics için Google’ın sunduğu tarayıcı eklentileri veya hesap/ayar seçenekleri de kullanılabilir; bunlar Google’ın kendi araçlarıdır.",
        ],
      },
      {
        heading: "10. Daha fazla bilgi",
        paragraphs: [
          "Kişisel verilerin işlenmesi hakkında ayrıntılar Gizlilik Politikası’nda yer alır. Bu çerez politikası güncellenebilir; güncel sürüm bu sayfada yayınlanır.",
        ],
      },
    ],
    sectionsRu: [
      {
        heading: "1. Оператор",
        paragraphs: [
          `Сайт администрируется ${ENTITY.name}. Контакты: ${ENTITY.email}, ${ENTITY.phone}.`,
          `Юридический адрес: ${ENTITY.address}`,
        ],
      },
      {
        heading: "2. Что такое cookie",
        paragraphs: [
          "Cookie — это небольшие текстовые файлы, которые сайт может сохранить в вашем браузере. Для сходных целей также могут использоваться localStorage и sessionStorage.",
        ],
      },
      {
        heading: "3. Текущее состояние (важно)",
        paragraphs: [
          "При первом посещении показывается баннер cookie с возможностью принять или отклонить аналитические cookie. Ваш выбор сохраняется в браузере (localStorage: cookie_consent_v1) и может быть изменён в любой момент по ссылке «Настройки cookie» в нижней части страницы.",
          "Если вы отказались или ещё не сделали выбор, Google Analytics не устанавливает cookie, а запись сессий и карта кликов Яндекс Метрики остаются выключенными; базовая статистика посещений продолжает вестись. Кроме того, cookie можно удалить или заблокировать в настройках браузера.",
        ],
      },
      {
        heading: "4. Cookie, устанавливаемые кодом сайта",
        paragraphs: [
          "Наш код приложения не записывает cookie через document.cookie. Cookie на домене появляются из сторонних скриптов.",
        ],
      },
      {
        heading: "5. Аналитика — Google Analytics",
        paragraphs: [
          "Используется Google Analytics 4 (идентификатор G-ZPTMJFB9WS). Скрипт gtag добавляется при загрузке страницы; при смене маршрута отправляются события просмотра. Благодаря Google Consent Mode до согласия cookie не устанавливаются, отправляются только сигналы измерения без cookie.",
          "После вашего согласия Google может устанавливать cookie вида _ga и _ga_*. Они служат для статистики и измерения. Сроки хранения определяются практикой Google.",
          "Яндекс Метрика (счётчик 112001301) используется для статистики посещений и может устанавливать cookie, например _ym_uid и _ym_d. Запись сессий (Вебвизор) и карта кликов включаются только при загрузке страниц после вашего согласия.",
        ],
      },
      {
        heading: "6. Локальное хранилище (localStorage / sessionStorage)",
        paragraphs: ["В коде используются следующие ключи:"],
        bullets: [
          "localStorage: i18nextLng — предпочтение языка",
          "localStorage: user_language_manual — явный выбор языка пользователем",
          "localStorage: cookie_consent_v1 — выбор «принять / отклонить» в баннере cookie",
          "sessionStorage: detected_geo_country — кэш кода страны, полученного через Geo-IP",
        ],
      },
      {
        heading: "7. Технология Geo-IP",
        paragraphs: [
          "При первом заходе на главную (/) без сохранённого ручного выбора языка могут вызываться api.country.is и при необходимости ipapi.co. Это не cookie, а внешний API-запрос; IP-адрес может передаваться соответствующему сервису.",
        ],
      },
      {
        heading: "8. Другие сторонние технологии",
        paragraphs: [
          "Виджет Netlify Identity (identity.netlify.com) загружается только в админ-панели и по ссылкам приглашения или восстановления пароля для аутентификации CMS/админки и может использовать собственное хранилище или cookie.",
          "FormSubmit используется при отправке форм; до отправки формы он не обязан устанавливать cookie в браузер, но при отправке выполняется запрос к FormSubmit.",
          "Рекламные или ремаркетинговые пиксели (например, Meta Pixel) на сайте не установлены.",
        ],
      },
      {
        heading: "9. Управление через браузер",
        paragraphs: [
          "Вы можете удалять, блокировать или ограничивать cookie и данные сайтов в настройках браузера. Блокировка может повлиять на отдельные функции (например, запоминание языка или аналитику).",
          "Для Google Analytics также могут использоваться расширения и настройки, предоставляемые Google.",
        ],
      },
      {
        heading: "10. Дополнительная информация",
        paragraphs: [
          "Подробности об обработке персональных данных — в Политике конфиденциальности. Настоящая политика cookie может обновляться; актуальная редакция публикуется на этой странице.",
        ],
      },
    ],
  },
};

export function getLegalDoc(kind: LegalKind): LegalDoc {
  return LEGAL_DOCS[kind];
}
