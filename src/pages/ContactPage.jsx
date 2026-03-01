import { useEffect, useRef, useState } from 'react';
import './ContactPage.css';

export default function ContactPage() {
  const observerRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-up').forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/faizanvhoradev@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || 'Not provided',
          message: formData.message,
          _subject: '📧 New Contact - Pelquant',
          _template: 'box',
          _captcha: 'false'
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">Company (Optional)</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Tell Us About Your Project</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What are you looking to build? What challenges are you facing?"
                  rows="6"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message →'}
              </button>

              {status === 'success' && (
                <div className="form-message success">
                  ✓ Message sent successfully! We'll get back to you within 24 hours.
                </div>
              )}
              {status === 'error' && (
                <div className="form-message error">
                  ✗ Something went wrong. Please try again or email us directly at faizanvhora999@gmail.com
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info-wrapper">
            <div className="contact-info-card fade-up" style={{ animationDelay: '100ms' }}>
              <h3 className="info-card-title">Email Us</h3>
              <a href="mailto:info@pelquant.com" className="info-card-link">
                info@pelquant.com
              </a>
              <p className="info-card-desc">
                We typically respond within 24 hours
              </p>
            </div>

            <div className="contact-info-card fade-up" style={{ animationDelay: '200ms' }}>
              <h3 className="info-card-title">Follow Us</h3>
              <a href="https://twitter.com/pelquant" className="info-card-link" target="_blank" rel="noopener noreferrer">
                @pelquant
              </a>
              <p className="info-card-desc">
                Stay updated with our latest work
              </p>
            </div>

            <div className="contact-info-card fade-up" style={{ animationDelay: '300ms' }}>
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
            <div className="faq-item fade-up" style={{ animationDelay: '0ms' }}>
              <h3 className="faq-question">What's your typical project timeline?</h3>
              <p className="faq-answer">
                Most projects take 4-12 weeks depending on scope. We'll give you a detailed timeline 
                after our initial consultation.
              </p>
            </div>

            <div className="faq-item fade-up" style={{ animationDelay: '100ms' }}>
              <h3 className="faq-question">Do you work with startups?</h3>
              <p className="faq-answer">
                Absolutely. We've helped dozens of startups go from idea to funded product. 
                We understand the constraints and move fast.
              </p>
            </div>

            <div className="faq-item fade-up" style={{ animationDelay: '200ms' }}>
              <h3 className="faq-question">What's your pricing model?</h3>
              <p className="faq-answer">
                We offer both project-based and retainer pricing. After understanding your needs, 
                we'll propose the model that makes the most sense.
              </p>
            </div>

            <div className="faq-item fade-up" style={{ animationDelay: '300ms' }}>
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
