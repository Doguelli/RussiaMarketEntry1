import { motion } from "motion/react";
import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Mail, MapPin, Phone, ArrowRight, Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import { createBreadcrumbSchema, VERIFIED_CONTACT, OPERATIONAL_LOCATION } from "@/utils/seo";
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
    "w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all outline-none text-[15px]";

  return (
    <main className="pt-8 pb-24">
      <Helmet>
        <title>{t("contact.title")}</title>
        <meta name="description" content={t("contact.desc_meta")} />
        <meta
          name="keywords"
          content={
            isRu
              ? "контакты, регистрация компании в турции, консультация wildberries ozon"
              : "Russia Market Entry iletişim, Rusya e-ticaret danışmanı Türkiye, iletişim formu"
          }
        />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="tr" href="https://russiamarketentry.com/iletisim" />
        <link rel="alternate" hrefLang="ru" href="https://russiamarketentry.com/ru/kontakty" />
        <link rel="alternate" hrefLang="x-default" href="https://russiamarketentry.com/iletisim" />
        <meta property="og:title" content={t("contact.title")} />
        <meta property="og:description" content={t("contact.desc_meta")} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="bg-transparent py-20 mb-10 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 bg-primary-50 text-primary-600 text-[13px] font-bold rounded-full mb-6 uppercase tracking-wider"
          >
            {t("contact.badge")}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-[40px] md:text-[56px] font-extrabold text-primary-500 mb-6 tracking-tight leading-tight"
          >
            {t("contact.h1")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 max-w-2xl mx-auto text-[18px] leading-relaxed"
          >
            {t("contact.subtitle")}
          </motion.p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[32px] font-extrabold text-primary-500 mb-6 tracking-tight">
              {t("contact.result_oriented")}
            </h2>
            <p className="text-[16px] text-slate-500 mb-10 leading-relaxed border-l-4 border-accent-500 pl-6 py-2">
              {t("contact.result_desc")}
              <strong className="text-primary-500">{t("contact.result_strong")}</strong>
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-6 bg-primary-50 border border-primary-100 rounded-3xl">
                <div className="bg-white p-3 rounded-2xl text-accent-500 shrink-0 shadow-sm border border-primary-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-primary-500 mb-1 text-[16px]">{t("contact.op_centers")}</h4>
                  <p className="text-[13px] font-semibold text-slate-600 mb-1">{t("contact.op_location_label")}</p>
                  <p className="text-[14px] text-slate-500 leading-relaxed">
                    {isRu
                      ? OPERATIONAL_LOCATION.displayRu
                      : isEn
                        ? OPERATIONAL_LOCATION.displayEn
                        : OPERATIONAL_LOCATION.displayTr}
                  </p>
                  <p className="text-[13px] font-semibold text-slate-600 mt-4 mb-1">
                    {t("contact.registered_address_label")}
                  </p>
                  <p className="text-[14px] text-slate-500 leading-relaxed">{VERIFIED_CONTACT.fullAddressRu}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-primary-50 border border-primary-100 rounded-3xl">
                <div className="bg-white p-3 rounded-2xl text-accent-500 shrink-0 shadow-sm border border-primary-100">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-primary-500 mb-1 text-[16px]">{t("contact.phone")}</h4>
                  <p className="text-[14px] text-slate-500 leading-relaxed">
                    TR: {VERIFIED_CONTACT.phoneTr}
                    <br />
                    RU: {VERIFIED_CONTACT.phoneRu}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-primary-50 border border-primary-100 rounded-3xl">
                <div className="bg-white p-3 rounded-2xl text-accent-500 shrink-0 shadow-sm border border-primary-100">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-primary-500 mb-1 text-[16px]">{t("contact.email")}</h4>
                  <p className="text-[14px] text-slate-500 leading-relaxed">{VERIFIED_CONTACT.email}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-primary-900/5 border border-primary-100"
          >
            <h3 className="text-[26px] md:text-[28px] font-extrabold text-primary-500 mb-3 tracking-tight">
              {t("contact.form_title")}
            </h3>
            <p className="text-slate-500 text-[15px] leading-relaxed mb-4">{t("contact.form_intro")}</p>
            <p className="text-slate-600 text-[14px] leading-relaxed mb-8 border-l-4 border-accent-500 pl-4">
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
              <form onSubmit={handleSubmit} className="space-y-8">
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
                  className="w-full bg-accent-500 hover:bg-accent-600 disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold py-[16px] px-8 rounded-full transition-colors flex justify-center items-center gap-3 text-[15px]"
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
