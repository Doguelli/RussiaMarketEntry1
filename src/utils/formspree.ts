/**
 * Shared endpoint for both lead forms (contact + Turkey company formation).
 *
 * Public contact email on the site stays hello@russiamarketentry.com.
 * Form submissions are delivered to cankutosar@gmail.com via FormSubmit.
 *
 * First-time setup: FormSubmit sends one activation email to that inbox —
 * open it and confirm, otherwise submissions will not arrive.
 */
export const FORMSPREE_ENDPOINT =
  "https://formsubmit.co/ajax/cankutosar@gmail.com";
