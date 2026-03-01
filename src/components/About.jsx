import { Link } from 'react-router-dom';
import './About.css';

const capabilities = [
  { label: '13 Core Services', desc: 'Technology & Marketing' },
  { label: '12 Industry Verticals', desc: 'Domain Expertise' },
  { label: 'AI-Native Architecture', desc: 'Built for Scale' },
  { label: 'Enterprise Security', desc: 'SOC 2, HIPAA, PCI-DSS' }
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-accent-line"></div>
      <div className="about-container">
        <div className="about-content">
          <span className="section-label">WHO WE ARE</span>
          <h2 className="about-headline">Enterprise Technology Partner Across Every Industry</h2>
          
          <div className="about-text">
            <p>
              We deliver enterprise-grade technology and growth solutions across 12 industries. From AI systems 
              to performance marketing, we combine deep technical expertise with domain knowledge that drives results.
            </p>
            <p>
              Whether you're building new products, modernizing infrastructure, or scaling globally—we bring 
              the capabilities and experience to execute flawlessly.
            </p>
          </div>

          <div className="about-capabilities">
            {capabilities.map((cap, i) => (
              <div key={i} className="capability-item">
                <div className="capability-label">{cap.label}</div>
                <div className="capability-desc">{cap.desc}</div>
              </div>
            ))}
          </div>

          <div className="about-ctas">
            <Link to="/about" className="btn-primary">Learn More About Us</Link>
            <Link to="/solutions" className="btn-ghost">View Industry Solutions</Link>
          </div>
        </div>

        <div className="about-visual">
          <div className="visual-orb"></div>
          <div className="journey-card card-1">
            <div className="card-label">Technology</div>
            <div className="card-line"></div>
          </div>
          <div className="journey-card card-2">
            <div className="card-label">Marketing</div>
            <div className="card-line"></div>
          </div>
          <div className="journey-card card-3">
            <div className="card-label">Security</div>
            <div className="card-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
