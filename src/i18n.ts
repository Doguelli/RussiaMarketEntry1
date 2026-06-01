import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation files
import translationEN from './locales/en.json';
import translationTR from './locales/tr.json';

const resources = {
  en: {
    translation: translationEN,
  },
  tr: {
    translation: translationTR,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'tr',
    lng: 'tr', // default language
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
