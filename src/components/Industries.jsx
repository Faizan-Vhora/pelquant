import { Link } from 'react-router-dom';
import './Industries.css';

const industries = [
  { name: 'FinTech', link: '/solutions/fintech' },
  { name: 'HealthTech', link: '/solutions/healthtech' },
  { name: 'eCommerce', link: '/solutions/ecommerce' },
  { name: 'Logistics', link: '/solutions/logistics' },
  { name: 'EdTech', link: '/solutions/edtech' },
  { name: 'LegalTech', link: '/solutions/legaltech' },
  { name: 'PropTech', link: '/solutions/proptech' },
  { name: 'HR Tech', link: '/solutions/hrtech' },
  { name: 'GovTech', link: '/solutions/govtech' },
  { name: 'SaaS', link: '/solutions/saas' },
  { name: 'Media', link: '/solutions/media' },
  { name: 'Manufacturing', link: '/solutions/manufacturing' }
];

export default function Industries() {
  return (
    <section className="industries" id="industries">
      <div className="industries-container">
        <div className="industries-header">
          <span className="section-label">INDUSTRY EXPERTISE</span>
          <h2 className="section-title">Built for Your Industry</h2>
          <p className="section-desc">
            Domain-specific solutions across 12 verticals. We understand your regulations, workflows, and competitive landscape.
          </p>
        </div>

        <div className="industries-grid">
          {industries.map((industry, i) => (
            <Link key={i} to={industry.link} className="industry-tag">
              {industry.name}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          ))}
        </div>

        <div className="industries-cta">
          <Link to="/solutions" className="btn-primary">View All Industry Solutions →</Link>
        </div>
      </div>
    </section>
  );
}
