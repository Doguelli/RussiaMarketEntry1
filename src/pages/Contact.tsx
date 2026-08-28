import { motion } from "motion/react";
import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Mail, MapPin, Phone, ArrowRight, Send, Target, LineChart, Layers, Settings2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { createBreadcrumbSchema, VERIFIED_CONTACT, OPERATIONAL_LOCATION } from "@/utils/seo";
import { socialMetaElements } from "@/components/PageSocialMeta";
import { contactPath, absoluteUrl, homePath } from "@/utils/ruPaths";
import { FORMSPREE_ENDPOINT } from "@/utils/formspree";

const INDUSTRY_KEYS = [
  "textile",
  "cosmetics",
  "medical",
  "food",
  "consumer",
  "industrial",
  "other",
] as const;

const GOAL_KEYS = [
  "ecommerce",
  "b2b",
  "distributor",
  "digital",
  "medical",
  "scale",
  "explore",
] as const;

type IndustryKey = (typeof INDUSTRY_KEYS)[number];
type GoalKey = (typeof GOAL_KEYS)[number];

const emptyForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  website: "",
  industry: "" as "" | IndustryKey,
  message: "",
};

function trackLeadSubmit() {
  if (typeof window === "undefined") return;
  try {
    window.gtag?.("event", "lead_form_submit", {
      form_id: "russia_pre_analysis",
    });
    window.ym?.(112001301, "reachGoal", "lead_form_submit");
  } catch {
    // Analytics must never block lead submission UX.
  }
}

export default function Contact() {
  const { t, i18n } = useTranslation();
  const isRu = i18n.language === "ru";
  const isEn = i18n.language === "en";
  const pagePath = contactPath(isRu);
  const canonicalUrl = absoluteUrl(pagePath);

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: isRu ? "Главная" : isEn ? "Home" : "Ana Sayfa", url: homePath(isRu) },
    { name: t("nav.contact"), url: pagePath },
  ]);

  const [formData, setFormData] = useState(emptyForm);
  const [russiaGoals, setRussiaGoals] = useState<GoalKey[]>([]);
  const [goalsError, setGoalsError] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const industryOptions = useMemo(
    () =>
      INDUSTRY_KEYS.map((key) => ({
        key,
        label: t(`contact.industry_${key}`),
      })),
    [t, i18n.language]
  );

  const goalOptions = useMemo(
    () =>
      GOAL_KEYS.map((key) => ({
        key,
        label: t(`contact.goal_${key}`),
      })),
    [t, i18n.language]
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if ("setCustomValidity" in e.target) {
      e.target.setCustomValidity("");
    }
  };

  const handleInvalid = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.setCustomValidity(t("contact.field_required"));
  };

  const toggleGoal = (key: GoalKey) => {
    setRussiaGoals((prev) => {
      const next = prev.includes(key) ? prev.filter((g) => g !== key) : [...prev, key];
      if (next.length > 0) setGoalsError(false);
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (russiaGoals.length === 0) {
      setGoalsError(true);
      return;
    }

    setStatus("submitting");
    setGoalsError(false);

    const industryLabel =
      industryOptions.find((o) => o.key === formData.industry)?.label || formData.industry;
    const goalsLabel = goalOptions
      .filter((o) => russiaGoals.includes(o.key))
      .map((o) => o.label)
      .join(", ");

    const payload = {
      name: formData.name.trim(),
      company: formData.company.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      website: formData.website.trim(),
      industry: industryLabel,
      russiaGoals: goalsLabel,
      message: formData.message.trim(),
      _subject: "Russia Market Pre-Analysis",
    };

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        trackLeadSubmit();
        setStatus("success");
        setFormData(emptyForm);
        setRussiaGoals([]);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3.5 md:px-5 md:py-4 rounded-xl border border-slate-200 bg-slate-50/80 focus:bg-white focus:ring-2 focus:ring-primary-300 focus:border-primary-200 transition-all duration-200 ease-out outline-none text-[15px] md:text-[16px]";

  const infoCardClass =
    "rounded-2xl border border-slate-100 bg-white p-5 md:p-6 shadow-sm transition-all duration-[225ms] ease-out hover:-translate-y-0.5 hover:shadow-md hover:border-primary-200/80";

  const analysisTopics = [
    {
      icon: Target,
      title: t("about.belief1_title"),
      desc: t("about.belief1_desc"),
    },
    {
      icon: LineChart,
      title: t("about.step2_title"),
      desc: t("about.step2_desc"),
    },
    {
      icon: Layers,
      title: t("about.belief2_title"),
      desc: t("about.belief2_desc"),
    },
    {
      icon: Settings2,
      title: t("about.belief3_title"),
      desc: t("about.belief3_desc"),
    },
  ];

  const heroTopics = [
    t("about.belief1_title"),
    t("about.step2_title"),
    t("about.belief2_title"),
    t("about.belief3_title"),
  ];

  return (
    <main className="bg-slate-50/60 min-h-screen pt-5 pb-12 md:pt-7 md:pb-16">
      <Helmet>
        <title>{t("contact.title")}</title>
        <meta name="description" content={t("contact.desc_meta")} />
        <meta
          name="keywords"
          content={
            isRu
              ? "контакты, регистрация компании в турции, консультация wildberries ozon"
              : isEn
                ? "Russia Market Entry contact, Russia e-commerce consulting, contact form"
                : "Russia Market Entry iletişim, Rusya e-ticaret danışmanı Türkiye, iletişim formu"
          }
        />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="tr" href="https://russiamarketentry.com/iletisim" />
        <link rel="alternate" hrefLang="ru" href="https://russiamarketentry.com/ru/kontakty" />
        <link rel="alternate" hrefLang="x-default" href="https://russiamarketentry.com/iletisim" />
        {socialMetaElements({ title: t("contact.title"), description: t("contact.desc_meta"), url: canonicalUrl })}
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <section className="border-b border-slate-200/80 bg-white/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 text-[12px] md:text-[13px] font-bold rounded-full mb-4 uppercase tracking-wider"
          >
            {t("contact.badge")}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-[28px] sm:text-[38px] md:text-[44px] font-extrabold text-primary-500 mb-3 md:mb-4 tracking-tight leading-[1.15]"
          >
            {t("contact.h1")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 max-w-3xl mx-auto text-[15px] md:text-[17px] leading-relaxed"
          >
            {t("contact.subtitle")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-5 md:mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-[12px] md:text-[13px] font-semibold text-primary-600"
          >
            {heroTopics.map((topic, i) => (
              <span key={topic} className="inline-flex items-center gap-2">
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5">{topic}</span>
                {i < heroTopics.length - 1 && <span className="text-accent-500 hidden sm:inline">•</span>}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-5 space-y-6 md:space-y-7"
          >
            <div>
              <h2 className="text-[24px] md:text-[28px] font-extrabold text-primary-500 mb-3 tracking-tight leading-tight">
                {t("about.how_h2")}
              </h2>
              <p className="text-[14px] md:text-[15px] text-slate-600 leading-relaxed">
                {t("about.corridor_p2")}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4">
              {analysisTopics.map(({ icon: Icon, title, desc }) => (
                <div key={title} className={infoCardClass}>
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 rounded-xl bg-primary-50 border border-primary-100 p-2.5 text-primary-500">
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-[14px] md:text-[15px] font-bold text-primary-500 mb-1">{title}</h3>
                      <p className="text-[13px] md:text-[14px] text-slate-600 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-5 md:p-6 shadow-sm">
              <p className="text-[11px] md:text-[12px] font-bold uppercase tracking-wider text-accent-500 mb-2">
                {t("contact.result_oriented")}
              </p>
              <p className="text-[14px] md:text-[15px] text-slate-600 leading-relaxed">
                {t("contact.result_desc")}
                <strong className="text-primary-500 font-semibold">{t("contact.result_strong")}</strong>
              </p>
            </div>

            <div className="space-y-3 md:space-y-4">
              <div className={`flex items-start gap-4 ${infoCardClass}`}>
                <div className="bg-primary-50 p-3 rounded-xl text-accent-500 shrink-0 border border-primary-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-primary-500 mb-1 text-[15px] md:text-[16px]">{t("contact.op_centers")}</h4>
                  <p className="text-[13px] font-semibold text-slate-600 mb-1">{t("contact.op_location_label")}</p>
                  <p className="text-[14px] text-slate-600 leading-relaxed">
                    {isRu
                      ? OPERATIONAL_LOCATION.displayRu
                      : isEn
                        ? OPERATIONAL_LOCATION.displayEn
                        : OPERATIONAL_LOCATION.displayTr}
                  </p>
                  <p className="text-[13px] font-semibold text-slate-600 mt-3 mb-1">
                    {t("contact.registered_address_label")}
                  </p>
                  <p className="text-[14px] text-slate-600 leading-relaxed">{VERIFIED_CONTACT.fullAddressRu}</p>
                </div>
              </div>
              <div className={`flex items-start gap-4 ${infoCardClass}`}>
                <div className="bg-primary-50 p-3 rounded-xl text-accent-500 shrink-0 border border-primary-100">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-primary-500 mb-1 text-[15px] md:text-[16px]">{t("contact.phone")}</h4>
                  <p className="text-[14px] text-slate-600 leading-relaxed">
                    TR: {VERIFIED_CONTACT.phoneTr}
                    <br />
                    RU: {VERIFIED_CONTACT.phoneRu}
                  </p>
                </div>
              </div>
              <div className={`flex items-start gap-4 ${infoCardClass}`}>
                <div className="bg-primary-50 p-3 rounded-xl text-accent-500 shrink-0 border border-primary-100">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-primary-500 mb-1 text-[15px] md:text-[16px]">{t("contact.email")}</h4>
                  <p className="text-[14px] text-slate-600 leading-relaxed">{VERIFIED_CONTACT.email}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-7 bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-11 shadow-md shadow-primary-900/5 border border-slate-100"
          >
            <h3 className="text-[24px] md:text-[28px] font-extrabold text-primary-500 mb-2 md:mb-3 tracking-tight">
              {t("contact.form_title")}
            </h3>
            <p className="text-slate-600 text-[15px] md:text-[16px] leading-relaxed mb-3">{t("contact.form_intro")}</p>
            <p className="text-slate-600 text-[13px] md:text-[14px] leading-relaxed mb-6 md:mb-8 rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-3">
              {t("contact.form_filter")}
            </p>

            {status === "success" ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-8 rounded-2xl flex flex-col items-center text-center">
                <div className="bg-green-100 p-4 rounded-full text-green-600 mb-4">
                  <Send className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-xl mb-2">{t("contact.form_success")}</h4>
                <p className="text-[15px]">{t("contact.form_success_desc")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7 md:space-y-8">
                {status === "error" && (
                  <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm font-medium">
                    {t("contact.form_error")}
                  </div>
                )}

                <div className="space-y-5">
                  <h4 className="text-[13px] font-bold uppercase tracking-wider text-primary-500">
                    {t("contact.form_group_contact")}
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700">
                        {t("contact.name_label")} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        onInvalid={handleInvalid}
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder={t("contact.name_placeholder")}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="block text-sm font-semibold text-slate-700">
                        {t("contact.company_label")} *
                      </label>
                      <input
                        type="text"
                        id="company"
                        required
                        onInvalid={handleInvalid}
                        autoComplete="organization"
                        value={formData.company}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder={t("contact.company_placeholder")}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-700">
                        {t("contact.email_label")} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        onInvalid={handleInvalid}
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder={t("contact.email_placeholder")}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-700">
                        {t("contact.phone_label")} *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        onInvalid={handleInvalid}
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder={t("contact.phone_placeholder")}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="website" className="block text-sm font-semibold text-slate-700">
                      {t("contact.website_label")}
                    </label>
                    <input
                      type="text"
                      id="website"
                      inputMode="url"
                      autoComplete="url"
                      value={formData.website}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder={t("contact.website_placeholder")}
                    />
                  </div>
                </div>

                <div className="space-y-5">
                  <h4 className="text-[13px] font-bold uppercase tracking-wider text-primary-500">
                    {t("contact.form_group_needs")}
                  </h4>

                  <div className="space-y-2">
                    <label htmlFor="industry" className="block text-sm font-semibold text-slate-700">
                      {t("contact.industry_label")} *
                    </label>
                    <select
                      id="industry"
                      required
                      onInvalid={handleInvalid}
                      value={formData.industry}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="" disabled>
                        {t("contact.industry_placeholder")}
                      </option>
                      {industryOptions.map((opt) => (
                        <option key={opt.key} value={opt.key}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <fieldset className="space-y-3">
                    <legend className="block text-sm font-semibold text-slate-700 mb-1">
                      {t("contact.goals_label")} *
                    </legend>
                    <div className="space-y-2.5">
                      {goalOptions.map((opt) => {
                        const checked = russiaGoals.includes(opt.key);
                        return (
                          <label
                            key={opt.key}
                            className={`flex items-start gap-3 rounded-xl border px-4 py-3 cursor-pointer transition-colors ${
                              checked
                                ? "border-accent-500/40 bg-accent-50/40"
                                : "border-slate-200 bg-slate-50 hover:bg-white"
                            }`}
                          >
                            <input
                              type="checkbox"
                              className="mt-1 h-4 w-4 rounded border-slate-300 text-accent-500 focus:ring-accent-500"
                              checked={checked}
                              onChange={() => toggleGoal(opt.key)}
                            />
                            <span className="text-[14px] text-slate-700 leading-snug">{opt.label}</span>
                          </label>
                        );
                      })}
                    </div>
                    {goalsError && (
                      <p className="text-sm font-medium text-red-600">{t("contact.goals_error")}</p>
                    )}
                  </fieldset>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700">
                      {t("contact.message_label")} *
                    </label>
                    <textarea
                      id="message"
                      required
                      onInvalid={handleInvalid}
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={`${inputClass} resize-none focus:ring-primary-500`}
                      placeholder={t("contact.message_placeholder")}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-accent-500 hover:bg-accent-600 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-full transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md flex justify-center items-center gap-3 text-[15px] md:text-[16px]"
                >
                  {status === "submitting" ? (
                    t("contact.submitting")
                  ) : (
                    <>
                      {t("contact.submit")} <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
