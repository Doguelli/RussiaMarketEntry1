export type ConsentChoice = "granted" | "denied";

const STORAGE_KEY = "cookie_consent_v1";
const CHANGE_EVENT = "cookie-consent-change";
const REOPEN_EVENT = "cookie-consent-reopen";

export function getConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

export function setConsent(choice: ConsentChoice): void {
  try {
    localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    // Storage blocked: the choice still applies to this page view.
  }
  window.dispatchEvent(new CustomEvent<ConsentChoice>(CHANGE_EVENT, { detail: choice }));
}

export function onConsentChange(listener: (choice: ConsentChoice) => void): () => void {
  const handler = (event: Event) => listener((event as CustomEvent<ConsentChoice>).detail);
  window.addEventListener(CHANGE_EVENT, handler);
  return () => window.removeEventListener(CHANGE_EVENT, handler);
}

export function reopenConsentBanner(): void {
  window.dispatchEvent(new Event(REOPEN_EVENT));
}

export function onConsentBannerReopen(listener: () => void): () => void {
  window.addEventListener(REOPEN_EVENT, listener);
  return () => window.removeEventListener(REOPEN_EVENT, listener);
}
