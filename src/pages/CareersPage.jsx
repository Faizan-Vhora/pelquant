import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../components/Icons';
import './ContactPage.css';

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
          position: formData.position,
          location: formData.location || 'Not specified',
          portfolio: formData.portfolio || 'Not provided',
          resume: formData.resume || 'Not provided',
          message: formData.message,
          _subject: '💼 New Job Application - Pelquant',
          _template: 'box',
          _captcha: 'false'
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', position: '', location: '', portfolio: '', resume: '', message: '' });
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
      <section className="contact-form-section" style={{ paddingTop: '120px' }}>
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
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="position">Position *</label>
                  <select id="position" name="position" value={formData.position} onChange={handleChange} required>
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
                </div>
                <div className="form-group">
                  <label htmlFor="location">Location</label>
                  <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} placeholder="City, Country" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="portfolio">Portfolio / LinkedIn / GitHub</label>
                <input type="url" id="portfolio" name="portfolio" value={formData.portfolio} onChange={handleChange} placeholder="https://" />
              </div>

              <div className="form-group">
                <label htmlFor="resume">Resume / CV (Link)</label>
                <input type="url" id="resume" name="resume" value={formData.resume} onChange={handleChange} placeholder="Google Drive, Dropbox, etc." />
              </div>

              <div className="form-group">
                <label htmlFor="message">Why do you want to join Pelquant? *</label>
                <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
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
