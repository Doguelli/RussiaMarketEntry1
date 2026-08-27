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

/**
 * Map a public pathname to the site language that URL tree must display.
 * /ru/* → ru, /en/* → en, Russian-only legacy paths → ru, everything else → tr
 * (EN may still run on TR-shaped URLs via manual choice / GeoIP — see sync helper).
 */
export function resolveLanguageFromPath(pathname: string): 'tr' | 'ru' | 'en' {
  const path = (pathname.split('?')[0] || '/').replace(/\/+$/, '') || '/';
  if (path === '/ru' || path.startsWith('/ru/')) return 'ru';
  if (path === '/en' || path.startsWith('/en/')) return 'en';
  // Legacy Russian-only landing outside /ru (body + chrome must stay Russian).
  if (path === '/kompaniya-v-turtsii') return 'ru';
  return 'tr';
}

/**
 * Resolve the i18n language for a pathname without wiping a valid EN session
 * on shared TR URLs. Russian sticky state on TR URLs is always cleared.
 */
export function resolveI18nLanguageForPath(
  pathname: string,
  currentLanguage: string
): 'tr' | 'ru' | 'en' {
  const fromPath = resolveLanguageFromPath(pathname);
  if (fromPath === 'ru' || fromPath === 'en') return fromPath;
  // TR URL tree: never keep Russian; allow English (shared-URL architecture).
  if (currentLanguage === 'en') return 'en';
  return 'tr';
}

// Client: path tree wins for /ru, /en, and Russian-only paths.
// On TR URLs, allow EN from detection/manual choice but never sticky RU.
// SSR always starts as 'tr' here — entry-server sets language from the prerender URL before render.
const initialLanguage =
  typeof window !== 'undefined'
    ? (() => {
        const fromPath = resolveLanguageFromPath(window.location.pathname);
        if (fromPath === 'ru' || fromPath === 'en') return fromPath;
        const detected = detectLanguageFromBrowser();
        if (detected === 'en') return 'en';
        return 'tr';
      })()
    : 'tr';

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
