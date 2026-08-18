import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { detectLanguageFromBrowser } from './utils/geoLanguageDetector';

// Translation files
import translationEN from './locales/en.json';
import translationTR from './locales/tr.json';
import translationRU from './locales/ru.json';

const resources = {
  en: {
    translation: translationEN,
  },
  tr: {
    translation: translationTR,
  },
  ru: {
    translation: translationRU,
  },
};

// If URL has /ru prefix, prioritize ru, otherwise use browser/location detection
const isRuPath = typeof window !== 'undefined' && window.location.pathname.startsWith('/ru');
const initialLanguage = isRuPath ? 'ru' : detectLanguageFromBrowser();

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'tr',
    lng: initialLanguage,
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
