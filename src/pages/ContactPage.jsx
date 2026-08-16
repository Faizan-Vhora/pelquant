import { useRef, useState } from 'react';
import { submitForm } from '../formEndpoint';
import { validateFields } from '../formValidation';
import './ContactPage.css';

const FIELDS = { name: 'name', email: 'email', message: 'message' };

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    website: ''
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const formRef = useRef(null);

  const errorFor = (field) => (touched[field] ? errors[field] : undefined);

  const handleBlur = (e) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
    setErrors(validateFields(formData, FIELDS));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot: bots fill every field including hidden ones, real users never see this
    if (formData.website) {
      return;
    }

    const nextErrors = validateFields(formData, FIELDS);
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
        message: formData.message,
        _subject: '📧 New Contact - Pelquant',
        _template: 'box'
      });

      if (ok) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', message: '', website: '' });
        setErrors({});
        setTouched({});
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
    // Clear a message as soon as the field becomes valid, rather than making
    // the user submit again to find out.
    if (errors[e.target.name]) {
      setErrors(validateFields(next, FIELDS));
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-container">
          <span className="contact-tag fade-up">GET IN TOUCH</span>
          <h1 className="contact-hero-headline fade-up">
            Let's Build Something Real.
          </h1>
          <p className="contact-hero-subtext fade-up">
            Whether you're starting from scratch or scaling fast, we're here to help. 
            Tell us about your project and we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main">
        <div className="contact-main-container">
          {/* Contact Form */}
          <div className="contact-form-wrapper fade-up">
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

              <div className={`form-group ${errorFor('name') ? 'has-error' : ''}`}>
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="John Doe"
                  required
                  aria-invalid={errorFor('name') ? true : undefined}
                  aria-describedby={errorFor('name') ? 'name-error' : undefined}
                />
                {errorFor('name') && <p className="field-error" id="name-error">{errorFor('name')}</p>}
              </div>

              <div className={`form-group ${errorFor('email') ? 'has-error' : ''}`}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="john@company.com"
                  required
                  aria-invalid={errorFor('email') ? true : undefined}
                  aria-describedby={errorFor('email') ? 'email-error' : undefined}
                />
                {errorFor('email') && <p className="field-error" id="email-error">{errorFor('email')}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="company">Company (Optional)</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  autoComplete="organization"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                />
              </div>

              <div className={`form-group ${errorFor('message') ? 'has-error' : ''}`}>
                <label htmlFor="message">Tell Us About Your Project</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="What are you looking to build? What challenges are you facing?"
                  rows="6"
                  required
                  aria-invalid={errorFor('message') ? true : undefined}
                  aria-describedby={errorFor('message') ? 'message-error' : undefined}
                ></textarea>
                {errorFor('message') && <p className="field-error" id="message-error">{errorFor('message')}</p>}
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message →'}
              </button>

              <div aria-live="polite">
                {status === 'success' && (
                  <div className="form-message success">
                    ✓ Message sent successfully! We'll get back to you within 24 hours.
                  </div>
                )}
                {status === 'error' && (
                  <div className="form-message error">
                    ✗ Something went wrong. Please try again or email us directly at info@pelquant.com
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info-wrapper">
            <div className="contact-info-card fade-up" style={{ transitionDelay: '100ms' }}>
              <h3 className="info-card-title">Email Us</h3>
              <a href="mailto:info@pelquant.com" className="info-card-link">
                info@pelquant.com
              </a>
              <p className="info-card-desc">
                We typically respond within 24 hours
              </p>
            </div>

            <div className="contact-info-card fade-up" style={{ transitionDelay: '200ms' }}>
              <h3 className="info-card-title">Follow Us</h3>
              <a href="https://twitter.com/pelquant" className="info-card-link" target="_blank" rel="noopener noreferrer">
                @pelquant
              </a>
              <p className="info-card-desc">
                Stay updated with our latest work
              </p>
            </div>

            <div className="contact-info-card fade-up" style={{ transitionDelay: '300ms' }}>
              <h3 className="info-card-title">Quick Response</h3>
              <p className="info-card-text">24 Hours</p>
              <p className="info-card-desc">
                Average response time for inquiries
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq">
        <div className="faq-container">
          <h2 className="faq-headline fade-up">Common Questions</h2>
          <div className="faq-grid">
            <div className="faq-item fade-up" style={{ transitionDelay: '0ms' }}>
              <h3 className="faq-question">What's your typical project timeline?</h3>
              <p className="faq-answer">
                Most projects take 4-12 weeks depending on scope. We'll give you a detailed timeline 
                after our initial consultation.
              </p>
            </div>

            <div className="faq-item fade-up" style={{ transitionDelay: '100ms' }}>
              <h3 className="faq-question">Do you work with startups?</h3>
              <p className="faq-answer">
                Absolutely. We've helped dozens of startups go from idea to funded product. 
                We understand the constraints and move fast.
              </p>
            </div>

            <div className="faq-item fade-up" style={{ transitionDelay: '200ms' }}>
              <h3 className="faq-question">What's your pricing model?</h3>
              <p className="faq-answer">
                We offer both project-based and retainer pricing. After understanding your needs, 
                we'll propose the model that makes the most sense.
              </p>
            </div>

            <div className="faq-item fade-up" style={{ transitionDelay: '300ms' }}>
              <h3 className="faq-question">Can you help with existing projects?</h3>
              <p className="faq-answer">
                Yes. We regularly take over stalled projects, modernize legacy systems, 
                and augment existing teams.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
