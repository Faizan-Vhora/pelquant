import { useRef, useState } from 'react';
import { submitForm } from '../formEndpoint';
import './Contact.css';

const services = [
  'AI & LLM Integration',
  'Custom Software Development',
  'Web & Mobile Development',
  'DevOps & Cloud',
  'AI Automation',
  'SecOps / SIEM / SOAR',
  'Technical SEO',
  'Growth SEO',
  'Social Media Marketing',
  'Paid Advertising',
  'Performance Marketing',
  'Other / Not Sure Yet',
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(data) {
  const errors = {};
  if (!data.name.trim()) {
    errors.name = 'Please tell us your name.';
  }
  if (!data.email.trim()) {
    errors.email = 'We need an email address to reply to.';
  } else if (!EMAIL_PATTERN.test(data.email.trim())) {
    errors.email = 'That email address doesn’t look right.';
  }
  if (!data.message.trim()) {
    errors.message = 'Tell us a little about the project.';
  } else if (data.message.trim().length < 10) {
    errors.message = 'A sentence or two helps us point you at the right person.';
  }
  return errors;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', service: '', message: '', website: ''
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState({});
  const [errors, setErrors] = useState({});
  // Fields only show errors once they've been left or the form submitted —
  // flagging "required" while someone is still typing their name is hostile.
  const [touched, setTouched] = useState({});
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot: bots fill every field including hidden ones, real users never see this
    if (formData.website) {
      return;
    }

    const nextErrors = validate(formData);
    setErrors(nextErrors);
    setTouched({ name: true, email: true, message: true });
    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      formRef.current?.querySelector(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setIsSubmitting(true);
    setStatus('');

    try {
      const ok = await submitForm({
        name: formData.name,
        email: formData.email,
        company: formData.company || 'Not provided',
        service: formData.service || 'Not specified',
        message: formData.message,
        _subject: '📧 New Contact - Pelquant',
        _template: 'box'
      });

      if (ok) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', service: '', message: '', website: '' });
        setErrors({});
        setTouched({});
        setTimeout(() => setStatus(''), 8000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const next = { ...formData, [e.target.name]: e.target.value };
    setFormData(next);
    // Clear an error as soon as the field becomes valid, so the message goes
    // away while you type rather than only on the next submit.
    if (errors[e.target.name]) {
      setErrors(validate(next));
    }
  };

  const handleFocus = (field) => setFocused(f => ({ ...f, [field]: true }));

  const handleBlur = (field) => {
    setFocused(f => ({ ...f, [field]: false }));
    setTouched(t => ({ ...t, [field]: true }));
    setErrors(validate(formData));
  };

  const isFloated = (field) => focused[field] || formData[field];
  const errorFor = (field) => (touched[field] ? errors[field] : undefined);

  return (
    <section className="contact" id="contact">
      <div className="contact-bg-glow"></div>
      <div className="contact-watermark">PELQUANT</div>
      <div className="contact-container">

        <div className="contact-header fade-up">
          <span className="section-label">GET IN TOUCH</span>
          <h2 className="contact-headline">Let's Build Something Real.</h2>
          <p className="contact-subtext">
            Tell us what you're working on — we'll tell you exactly how we can help.
          </p>
        </div>

        <div className="contact-content">
          {/* Form */}
          <div className="contact-form-wrap fade-up">
            <form className="contact-form" onSubmit={handleSubmit} noValidate ref={formRef}>
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="hp-field"
                tabIndex="-1"
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="form-row">
                <div className={`form-field ${isFloated('name') ? 'floated' : ''} ${errorFor('name') ? 'has-error' : ''}`}>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={() => handleBlur('name')}
                    required
                    autoComplete="name"
                    aria-invalid={errorFor('name') ? true : undefined}
                    aria-describedby={errorFor('name') ? 'name-error' : undefined}
                  />
                  <label htmlFor="name">Your Name *</label>
                  <div className="field-line"></div>
                  {errorFor('name') && <p className="field-error" id="name-error">{errorFor('name')}</p>}
                </div>

                <div className={`form-field ${isFloated('email') ? 'floated' : ''} ${errorFor('email') ? 'has-error' : ''}`}>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={() => handleBlur('email')}
                    required
                    autoComplete="email"
                    aria-invalid={errorFor('email') ? true : undefined}
                    aria-describedby={errorFor('email') ? 'email-error' : undefined}
                  />
                  <label htmlFor="email">Work Email *</label>
                  <div className="field-line"></div>
                  {errorFor('email') && <p className="field-error" id="email-error">{errorFor('email')}</p>}
                </div>
              </div>

              <div className="form-row">
                <div className={`form-field ${isFloated('company') ? 'floated' : ''}`}>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    onFocus={() => handleFocus('company')}
                    onBlur={() => handleBlur('company')}
                    autoComplete="organization"
                  />
                  <label htmlFor="company">Company Name</label>
                  <div className="field-line"></div>
                </div>

                <div className={`form-field select-field ${formData.service ? 'floated' : ''}`}>
                  <select
                    name="service"
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    onFocus={() => handleFocus('service')}
                    onBlur={() => handleBlur('service')}
                  >
                    <option value=""></option>
                    {services.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <label htmlFor="service">Service Interest</label>
                  <div className="field-line"></div>
                  <svg className="select-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </div>
              </div>

              <div className={`form-field ${isFloated('message') ? 'floated' : ''} ${errorFor('message') ? 'has-error' : ''}`}>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={() => handleBlur('message')}
                  required
                  aria-invalid={errorFor('message') ? true : undefined}
                  aria-describedby={errorFor('message') ? 'message-error' : undefined}
                ></textarea>
                <label htmlFor="message">Tell us about your project *</label>
                <div className="field-line"></div>
                {errorFor('message') && <p className="field-error" id="message-error">{errorFor('message')}</p>}
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                    </svg>
                  </>
                )}
              </button>

              <p className="form-disclaimer">
                We respond within 24 hours. No spam, ever.
              </p>
            </form>
          </div>

          {/* Info Sidebar */}
          <div className="contact-sidebar fade-up">
            <div className="sidebar-card">
              <div className="sidebar-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8L10.89 13.26C11.54 13.67 12.46 13.67 13.11 13.26L21 8M5 19H19C20.1 19 21 18.1 21 17V7C21 5.9 20.1 5 19 5H5C3.9 5 3 5.9 3 7V17C3 18.1 3.9 19 5 19Z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="sidebar-label">Email</div>
                <a href="mailto:info@pelquant.com" className="sidebar-value">info@pelquant.com</a>
              </div>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div>
                <div className="sidebar-label">LinkedIn</div>
                <a href="https://linkedin.com/company/pelquant" target="_blank" rel="noreferrer" className="sidebar-value">@pelquant</a>
              </div>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
                </svg>
              </div>
              <div>
                <div className="sidebar-label">Coverage</div>
                <div className="sidebar-value">Global Clients</div>
              </div>
            </div>

            <div className="response-guarantee">
              <div className="guarantee-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <div>
                <div className="guarantee-title">24-Hour Response</div>
                <div className="guarantee-desc">We'll get back to you within one business day — guaranteed.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div aria-live="polite">
          {status === 'success' && (
            <div className="status-toast success">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Message sent! We'll be in touch within 24 hours.
            </div>
          )}
          {status === 'error' && (
            <div className="status-toast error">
              Something went wrong. Email us directly at info@pelquant.com
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
