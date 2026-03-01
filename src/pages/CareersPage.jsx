import { Link } from 'react-router-dom';
import { Icons } from '../components/Icons';
import './ContactPage.css';

export default function CareersPage() {
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
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="position">Position *</label>
                  <select id="position" name="position" required>
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
                  <input type="text" id="location" name="location" placeholder="City, Country" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="portfolio">Portfolio / LinkedIn / GitHub</label>
                <input type="url" id="portfolio" name="portfolio" placeholder="https://" />
              </div>

              <div className="form-group">
                <label htmlFor="resume">Resume / CV (Link)</label>
                <input type="url" id="resume" name="resume" placeholder="Google Drive, Dropbox, etc." />
              </div>

              <div className="form-group">
                <label htmlFor="message">Why do you want to join Pelquant? *</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>

              <button type="submit" className="btn-primary">Submit Application</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
