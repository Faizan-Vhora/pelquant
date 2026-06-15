import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Industries.css';

const industries = [
  {
    name: 'FinTech',
    desc: 'Payments, lending & compliance',
    link: '/solutions/fintech',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-4H9l3-3 3 3h-2v4zm-1-8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
      </svg>
    ),
    color: '#10b981',
  },
  {
    name: 'HealthTech',
    desc: 'EHR, telehealth & AI diagnostics',
    link: '/solutions/healthtech',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    color: '#ef4444',
  },
  {
    name: 'eCommerce',
    desc: 'Retail, DTC & marketplace platforms',
    link: '/solutions/ecommerce',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0"/>
      </svg>
    ),
    color: '#f59e0b',
  },
  {
    name: 'Logistics',
    desc: 'Supply chain & fleet optimization',
    link: '/solutions/logistics',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="1" y="3" width="15" height="13"/><path d="M16 8h4l3 3v5h-7V8zm3 11a2 2 0 100-4 2 2 0 000 4zM5 18a2 2 0 100-4 2 2 0 000 4z"/>
      </svg>
    ),
    color: '#6366f1',
  },
  {
    name: 'EdTech',
    desc: 'LMS, adaptive learning & certification',
    link: '/solutions/edtech',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
      </svg>
    ),
    color: '#3b82f6',
  },
  {
    name: 'LegalTech',
    desc: 'Contract AI & document automation',
    link: '/solutions/legaltech',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 1v3M3 6l9-5 9 5M3 6l4 2M3 6v10l9 5M3 16l4-2M21 6v10l-9 5M21 16l-4-2M7 8l5 3 5-3M7 8v8M17 8v8M12 11v8"/>
      </svg>
    ),
    color: '#8b5cf6',
  },
  {
    name: 'PropTech',
    desc: 'Real estate & property management',
    link: '/solutions/proptech',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    color: '#ec4899',
  },
  {
    name: 'HR Tech',
    desc: 'ATS, HRIS & workforce analytics',
    link: '/solutions/hrtech',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    color: '#14b8a6',
  },
  {
    name: 'GovTech',
    desc: 'Digital services & citizen portals',
    link: '/solutions/govtech',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 10v11M12 10v11M16 10v11"/>
      </svg>
    ),
    color: '#0ea5e9',
  },
  {
    name: 'SaaS',
    desc: 'Multi-tenant platforms & API products',
    link: '/solutions/saas',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/>
      </svg>
    ),
    color: '#f97316',
  },
  {
    name: 'Media',
    desc: 'Content delivery & monetization',
    link: '/solutions/media',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/>
      </svg>
    ),
    color: '#a855f7',
  },
  {
    name: 'Manufacturing',
    desc: 'Industry 4.0, IoT & predictive AI',
    link: '/solutions/manufacturing',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22V12M12 12L4 7M12 12l8-5M4 7V17l8 5M20 7v10l-8 5M4 7l8-5 8 5"/>
      </svg>
    ),
    color: '#84cc16',
  },
];

export default function Industries() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.08 }
    );
    cardsRef.current.forEach(card => card && observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="industries" id="industries">
      <div className="industries-container">
        <div className="industries-header fade-up">
          <span className="section-label">INDUSTRY EXPERTISE</span>
          <h2 className="section-title">Built for Your Industry</h2>
          <p className="section-desc">
            Domain-specific solutions across 12 verticals. We understand your regulations,
            workflows, and competitive landscape.
          </p>
        </div>

        <div className="industries-grid">
          {industries.map((industry, i) => (
            <Link
              key={i}
              to={industry.link}
              className="industry-card"
              ref={(el) => (cardsRef.current[i] = el)}
              style={{ '--ind-color': industry.color }}
            >
              <div className="industry-icon">
                {industry.icon}
              </div>
              <div className="industry-info">
                <div className="industry-name">{industry.name}</div>
                <div className="industry-desc">{industry.desc}</div>
              </div>
              <div className="industry-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="industries-cta">
          <Link to="/solutions" className="btn-primary">
            View All Industry Solutions
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
