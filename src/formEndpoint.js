// Single place every form posts to. It used to be hardcoded in four files,
// which is how the contact and careers forms drifted apart in the first place.
//
// SECURITY NOTE: this value ends up in the client bundle no matter how it is
// supplied — Vite inlines `import.meta.env.*` at build time, so setting
// VITE_FORM_ENDPOINT does NOT hide it. It only makes the endpoint swappable
// without a code change. To stop publishing the destination address, use one
// of these instead and put it in VITE_FORM_ENDPOINT:
//
//   1. A FormSubmit alias — activate the form once, then use the random
//      endpoint FormSubmit issues (https://formsubmit.co/ajax/<alias>).
//   2. Your own function — netlify/functions/send-email.js already exists and
//      keeps the address server-side; point this at its deployed URL.
const DEFAULT_ENDPOINT = 'https://formsubmit.co/ajax/faizanvhoradev@gmail.com';

export const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || DEFAULT_ENDPOINT;

/** Posts a form payload as JSON. Resolves true when the submission was accepted. */
export async function submitForm(payload) {
  const response = await fetch(FORM_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  });
  return response.ok;
}
