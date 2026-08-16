import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../components/Icons';
import { submitForm } from '../formEndpoint';
import { validateFields } from '../formValidation';
import './ContactPage.css';

// Portfolio and resume are optional, but a typo'd link is worth catching —
// it's the whole point of the field.
const FIELDS = {
  name: 'name',
  email: 'email',
  position: 'position',
  message: 'message',
  portfolio: 'url',
  resume: 'url',
};

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    location: '',
    portfolio: '',
    resume: '',
    message: ''
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

    const nextErrors = validateFields(formData, FIELDS);
    setErrors(nextErrors);
    setTouched(Object.fromEntries(Object.keys(FIELDS).map((f) => [f, true])));
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
        position: formData.position,
        location: formData.location || 'Not specified',
        portfolio: formData.portfolio || 'Not provided',
        resume: formData.resume || 'Not provided',
        message: formData.message,
        _subject: '💼 New Job Application - Pelquant',
        _template: 'box',
        _captcha: 'false'
      });

      if (ok) {
        setStatus('success');
        setFormData({ name: '', email: '', position: '', location: '', portfolio: '', resume: '', message: '' });
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
    if (errors[e.target.name]) {
      setErrors(validateFields(next, FIELDS));
    }
  };

  return (
    <div className="contact-page">
      <section className="contact-form-section" style={{ paddingTop: '120px' }}>
        {/* The h1 used to share .section-heading with the h2 below it, so both
            rendered at 48px and the page had no heading hierarchy at all. */}
        <div className="careers-hero">
          <span className="careers-tag">JOIN THE TEAM</span>
          <h1 className="careers-headline">Careers at Pelquant</h1>
          <p className="careers-intro">
            Remote-first, globally distributed, and building AI-native products for
            clients across 12 industries.
          </p>
        </div>
        <h2 className="section-heading">Why Join Pelquant?</h2>
        <div className="contact-form-container">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <Icons.Rocket />
              </div>
              <div>
                <h3>Cutting-Edge Projects</h3>
                <p>Work on AI/LLM integrations, enterprise software, and high-impact marketing campaigns.</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <Icons.Users />
              </div>
              <div>
                <h3>Remote-First</h3>
                <p>Work from anywhere. We hire globally and support flexible schedules.</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <Icons.TrendingUp />
              </div>
              <div>
                <h3>Growth & Learning</h3>
                <p>Access to courses, conferences, and mentorship from senior engineers.</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <Icons.DollarSign />
              </div>
              <div>
                <h3>Competitive Compensation</h3>
                <p>Market-rate salaries, equity options, and performance bonuses.</p>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h2>Apply Now</h2>
            <form className="contact-form" onSubmit={handleSubmit} noValidate ref={formRef}>
              <div className="form-row">
                <div className={`form-group ${errorFor('name') ? 'has-error' : ''}`}>
                  <label htmlFor="name">Full Name *</label>
                  <input type="text" id="name" name="name" autoComplete="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} required aria-invalid={errorFor('name') ? true : undefined} aria-describedby={errorFor('name') ? 'name-error' : undefined} />
                  {errorFor('name') && <p className="field-error" id="name-error">{errorFor('name')}</p>}
                </div>
                <div className={`form-group ${errorFor('email') ? 'has-error' : ''}`}>
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" autoComplete="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} required aria-invalid={errorFor('email') ? true : undefined} aria-describedby={errorFor('email') ? 'email-error' : undefined} />
                  {errorFor('email') && <p className="field-error" id="email-error">{errorFor('email')}</p>}
                </div>
              </div>

              <div className="form-row">
                <div className={`form-group ${errorFor('position') ? 'has-error' : ''}`}>
                  <label htmlFor="position">Position *</label>
                  <select id="position" name="position" value={formData.position} onChange={handleChange} onBlur={handleBlur} required aria-invalid={errorFor('position') ? true : undefined} aria-describedby={errorFor('position') ? 'position-error' : undefined}>
                    <option value="">Select a position</option>
                    <option value="fullstack">Full-Stack Engineer</option>
                    <option value="frontend">Frontend Developer</option>
                    <option value="backend">Backend Engineer</option>
                    <option value="ai">AI/ML Engineer</option>
                    <option value="devops">DevOps Engineer</option>
                    <option value="security">Security Engineer</option>
                    <option value="seo">SEO Specialist</option>
                    <option value="marketing">Performance Marketer</option>
                    <option value="designer">UI/UX Designer</option>
                  </select>
                  {errorFor('position') && <p className="field-error" id="position-error">{errorFor('position')}</p>}
                </div>
                <div className="form-group">
                  <label htmlFor="location">Location</label>
                  <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} placeholder="City, Country" />
                </div>
              </div>

              <div className={`form-group ${errorFor('portfolio') ? 'has-error' : ''}`}>
                <label htmlFor="portfolio">Portfolio / LinkedIn / GitHub</label>
                <input type="url" id="portfolio" name="portfolio" value={formData.portfolio} onChange={handleChange} onBlur={handleBlur} placeholder="https://" aria-invalid={errorFor('portfolio') ? true : undefined} aria-describedby={errorFor('portfolio') ? 'portfolio-error' : undefined} />
                {errorFor('portfolio') && <p className="field-error" id="portfolio-error">{errorFor('portfolio')}</p>}
              </div>

              <div className={`form-group ${errorFor('resume') ? 'has-error' : ''}`}>
                <label htmlFor="resume">Resume / CV (Link)</label>
                <input type="url" id="resume" name="resume" value={formData.resume} onChange={handleChange} onBlur={handleBlur} placeholder="Google Drive, Dropbox, etc." aria-invalid={errorFor('resume') ? true : undefined} aria-describedby={errorFor('resume') ? 'resume-error' : undefined} />
                {errorFor('resume') && <p className="field-error" id="resume-error">{errorFor('resume')}</p>}
              </div>

              <div className={`form-group ${errorFor('message') ? 'has-error' : ''}`}>
                <label htmlFor="message">Why do you want to join Pelquant? *</label>
                <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} onBlur={handleBlur} required aria-invalid={errorFor('message') ? true : undefined} aria-describedby={errorFor('message') ? 'message-error' : undefined}></textarea>
                {errorFor('message') && <p className="field-error" id="message-error">{errorFor('message')}</p>}
              </div>

              <button type="submit" className="btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>

              {status === 'success' && (
                <div className="form-message success">
                  ✓ Application submitted successfully! We'll review it and get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="form-message error">
                  ✗ Something went wrong. Please try again or email us directly at faizanvhora999@gmail.com
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
