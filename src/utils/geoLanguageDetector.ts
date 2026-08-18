/**
 * Location and Locale based automatic language detector
 * Supports detection via:
 * 1. Explicit user manual selection (persisted in localStorage)
 * 2. Real-time IP GeoLocation (country code)
 * 3. Browser locale & navigator.languages
 * 4. System / Browser Timezone
 */

export type SupportedLanguage = 'tr' | 'ru' | 'en';

const CIS_RUSSIAN_COUNTRIES = new Set([
  'RU', // Russia
  'BY', // Belarus
  'KZ', // Kazakhstan
  'UZ', // Uzbekistan
  'KG', // Kyrgyzstan
  'TJ', // Tajikistan
  'AM', // Armenia
  'AZ', // Azerbaijan
  'MD', // Moldova
  'GE', // Georgia
  'TM', // Turkmenistan
  'UA', // Ukraine
]);

const TURKISH_COUNTRIES = new Set([
  'TR', // Turkey
  'CY', // Cyprus / Northern Cyprus
]);

const CIS_TIMEZONES = [
  'moscow', 'samara', 'yekaterinburg', 'novosibirsk', 'krasnoyarsk',
  'irkutsk', 'yakutsk', 'vladivostok', 'magadan', 'sakhalin', 'kamchatka',
  'minsk', 'almaty', 'tashkent', 'baku', 'yerevan', 'tbilisi', 'bishkek',
  'dushanbe', 'ashgabat', 'chisinau', 'volgograd', 'kaliningrad', 'omsk'
];

/**
 * Checks if the user has manually selected a language in previous sessions
 */
export function getManuallySelectedLanguage(): SupportedLanguage | null {
  if (typeof window === 'undefined') return null;
  const manual = localStorage.getItem('user_language_manual');
  if (manual === 'tr' || manual === 'ru' || manual === 'en') {
    return manual;
  }
  return null;
}

/**
 * Saves explicit user manual choice to prevent auto-override
 */
export function setManualLanguageChoice(lang: SupportedLanguage): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('user_language_manual', lang);
  localStorage.setItem('i18nextLng', lang);
}

/**
 * Fast synchronous detection using Browser Locale and Timezone
 */
export function detectLanguageFromBrowser(): SupportedLanguage {
  if (typeof window === 'undefined') return 'tr';

  // 1. Check user manual preference first
  const manual = getManuallySelectedLanguage();
  if (manual) return manual;

  // 2. Check TimeZone
  try {
    const tz = (Intl.DateTimeFormat().resolvedOptions().timeZone || '').toLowerCase();
    if (tz.includes('istanbul') || tz.includes('turkey')) {
      return 'tr';
    }
    if (CIS_TIMEZONES.some(zone => tz.includes(zone))) {
      return 'ru';
    }
  } catch {
    // Ignore timezone resolution error
  }

  // 3. Check Browser Languages (navigator.languages)
  try {
    const languages = navigator.languages || [navigator.language || ''];
    for (const lang of languages) {
      const code = (lang || '').toLowerCase();
      if (code.startsWith('ru') || code.startsWith('be') || code.startsWith('kk') || code.startsWith('uz') || code.startsWith('ky') || code.startsWith('tg') || code.startsWith('hy')) {
        return 'ru';
      }
      if (code.startsWith('tr')) {
        return 'tr';
      }
      if (code.startsWith('en')) {
        return 'en';
      }
    }
  } catch {
    // Ignore navigator error
  }

  return 'tr';
}

/**
 * Asynchronous GeoIP Country detector with fast timeout and session caching
 */
export async function detectCountryFromIP(): Promise<string | null> {
  if (typeof window === 'undefined') return null;

  // Check session cache
  const cachedCountry = sessionStorage.getItem('detected_geo_country');
  if (cachedCountry) {
    return cachedCountry;
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 2500);

  try {
    // Fast lightweight GeoIP endpoint
    const response = await fetch('https://api.country.is', {
      signal: controller.signal,
      headers: { 'Accept': 'application/json' }
    });
    clearTimeout(timeoutId);

    if (response.ok) {
      const data = await response.json();
      if (data && data.country && typeof data.country === 'string') {
        const countryCode = data.country.toUpperCase();
        sessionStorage.setItem('detected_geo_country', countryCode);
        return countryCode;
      }
    }
  } catch {
    // Primary endpoint failed or timed out, try fallback
  }

  try {
    const fallbackController = new AbortController();
    const fallbackTimeoutId = setTimeout(() => fallbackController.abort(), 2000);

    const fallbackResponse = await fetch('https://ipapi.co/json/', {
      signal: fallbackController.signal,
      headers: { 'Accept': 'application/json' }
    });
    clearTimeout(fallbackTimeoutId);

    if (fallbackResponse.ok) {
      const data = await fallbackResponse.json();
      if (data && data.country_code && typeof data.country_code === 'string') {
        const countryCode = data.country_code.toUpperCase();
        sessionStorage.setItem('detected_geo_country', countryCode);
        return countryCode;
      }
    }
  } catch {
    // Silent fail if offline or blocked by adblock
  }

  return null;
}

/**
 * Resolves the language based on country code
 */
export function getLanguageForCountry(countryCode: string | null): SupportedLanguage | null {
  if (!countryCode) return null;
  const upper = countryCode.toUpperCase();
  if (CIS_RUSSIAN_COUNTRIES.has(upper)) {
    return 'ru';
  }
  if (TURKISH_COUNTRIES.has(upper)) {
    return 'tr';
  }
  return 'en';
}
