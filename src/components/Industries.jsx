import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Industries.css';

const industries = [
  { name: 'FinTech',        sub: 'Payments & Lending',        link: '/solutions/fintech',        color: '#34d399' },
  { name: 'HealthTech',     sub: 'EHR & Telehealth',          link: '/solutions/healthtech',     color: '#f87171' },
  { name: 'eCommerce',      sub: 'Retail & Marketplace',      link: '/solutions/ecommerce',      color: '#fbbf24' },
  { name: 'Logistics',      sub: 'Supply Chain & Fleet',      link: '/solutions/logistics',      color: '#818cf8' },
  { name: 'EdTech',         sub: 'LMS & Adaptive Learning',   link: '/solutions/edtech',         color: '#60a5fa' },
  { name: 'LegalTech',      sub: 'Contract AI & Automation',  link: '/solutions/legaltech',      color: '#c084fc' },
  { name: 'PropTech',       sub: 'Real Estate & PropMgmt',    link: '/solutions/proptech',       color: '#f472b6' },
  { name: 'HR Tech',        sub: 'ATS, HRIS & Analytics',     link: '/solutions/hrtech',         color: '#2dd4bf' },
  { name: 'GovTech',        sub: 'Digital Public Services',   link: '/solutions/govtech',        color: '#38bdf8' },
  { name: 'SaaS',           sub: 'Multi-Tenant Platforms',    link: '/solutions/saas',           color: '#fb923c' },
  { name: 'Media',          sub: 'Content & Distribution',    link: '/solutions/media',          color: '#a78bfa' },
  { name: 'Manufacturing',  sub: 'Industry 4.0 & IoT',        link: '/solutions/manufacturing',  color: '#86efac' },
];

export default function Industries() {
  const rowRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    rowRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="industries" id="industries">
      <div className="ind-container">

        {/* Header */}
        <div className="ind-header fade-up">
          <div className="ind-header-left">
            <span className="section-label">INDUSTRY EXPERTISE</span>
            <h2 className="ind-headline">
              Built for<br />Your Industry.
            </h2>
          </div>
          <div className="ind-header-right">
            <p className="ind-desc">
              We understand your regulatory environment, tech stack, and competitive
              dynamics. Domain-specific solutions across 12 verticals — not generic
              software shaped to fit.
            </p>
            <Link to="/solutions" className="ind-all-link">
              Explore all industry solutions
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div className="ind-grid">
          {industries.map((ind, i) => (
            <Link
              key={i}
              to={ind.link}
              className="ind-card"
              ref={el => (rowRefs.current[i] = el)}
              style={{ '--c': ind.color, transitionDelay: `${i * 0.04}s` }}
            >
              <div className="ind-accent" />
              <div className="ind-content">
                <span className="ind-name">{ind.name}</span>
                <span className="ind-sub">{ind.sub}</span>
              </div>
              <svg className="ind-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
