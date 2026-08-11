// Shared field rules so every form on the site rejects the same things and
// says the same thing when it does. Previously only the homepage contact form
// validated at all; the rest relied on native browser messages.

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const rules = {
  name: (v) => (!v.trim() ? 'Please tell us your name.' : undefined),

  email: (v) => {
    if (!v.trim()) return 'We need an email address to reply to.';
    if (!EMAIL_PATTERN.test(v.trim())) return 'That email address doesn’t look right.';
    return undefined;
  },

  message: (v) => {
    if (!v.trim()) return 'Tell us a little about the project.';
    if (v.trim().length < 10) return 'A sentence or two helps us point you at the right person.';
    return undefined;
  },

  position: (v) => (!v.trim() ? 'Pick the role you’re applying for.' : undefined),

  // Optional URL field — only complain if something was actually typed.
  url: (v) => {
    if (!v.trim()) return undefined;
    try {
      const parsed = new URL(v.trim().startsWith('http') ? v.trim() : `https://${v.trim()}`);
      return parsed.hostname.includes('.') ? undefined : 'That doesn’t look like a valid link.';
    } catch {
      return 'That doesn’t look like a valid link.';
    }
  },
};

/**
 * Runs `fields` (a map of field name -> rule key) against `data`.
 * Returns a map of field name -> message, containing only the failures.
 */
export function validateFields(data, fields) {
  const errors = {};
  for (const [field, rule] of Object.entries(fields)) {
    const message = rules[rule](data[field] ?? '');
    if (message) errors[field] = message;
  }
  return errors;
}
