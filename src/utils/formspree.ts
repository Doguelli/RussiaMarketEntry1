/**
 * The one Formspree form both lead forms post to.
 *
 * Kept in a single module so the contact form and the Turkey company-formation
 * landing page cannot drift onto different endpoints — a mismatch here silently
 * loses leads rather than failing loudly.
 */
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/xqenkoky";
