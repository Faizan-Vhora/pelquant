import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../components/Icons';
import './SolutionsPage.css';

export default function SolutionsPage() {
  const observerRef = useRef(null);

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

  const industries = [
    {
      name: 'FinTech',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="5" width="20" height="14" rx="2"/>
          <line x1="2" y1="10" x2="22" y2="10"/>
        </svg>
      ),
      desc: 'Digital banking, payments, lending, trading platforms, and RegTech solutions',
      link: '/solutions/fintech'
    },
    {
      name: 'HealthTech',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      ),
      desc: 'EHR/EMR systems, telemedicine, hospital management, and healthcare AI',
      link: '/solutions/healthtech'
    },
    {
      name: 'eCommerce',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="9" cy="21" r="1"/>
          <circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
      ),
      desc: 'Online stores, marketplaces, inventory management, and omnichannel retail',
      link: '/solutions/ecommerce'
    },
    {
      name: 'Logistics',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="1" y="3" width="15" height="13"/>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
          <circle cx="5.5" cy="18.5" r="2.5"/>
          <circle cx="18.5" cy="18.5" r="2.5"/>
        </svg>
      ),
      desc: 'Supply chain, fleet management, warehouse systems, and delivery optimization',
      link: '/solutions/logistics'
    },
    {
      name: 'EdTech',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
        </svg>
      ),
      desc: 'Learning management, online education, school systems, and AI tutoring',
      link: '/solutions/edtech'
    },
    {
      name: 'LegalTech',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      desc: 'Case management, contract automation, legal research, and compliance',
      link: '/solutions/legaltech'
    },
    {
      name: 'PropTech',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      ),
      desc: 'Property management, real estate platforms, smart buildings, and IoT',
      link: '/solutions/proptech'
    },
    {
      name: 'HR Technology',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      desc: 'HRIS, recruitment, payroll, performance management, and employee engagement',
      link: '/solutions/hrtech'
    },
    {
      name: 'GovTech',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <path d="M9 22V12h6v10"/>
        </svg>
      ),
      desc: 'Citizen services, government ERP, digital identity, and smart city platforms',
      link: '/solutions/govtech'
    },
    {
      name: 'SaaS',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
        </svg>
      ),
      desc: 'Multi-tenant platforms, subscription billing, and product development',
      link: '/solutions/saas'
    },
    {
      name: 'Media & Entertainment',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="23 7 16 12 23 17 23 7"/>
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
        </svg>
      ),
      desc: 'Streaming platforms, content management, creator tools, and digital publishing',
      link: '/solutions/media'
    },
    {
      name: 'Manufacturing',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 20h20"/>
          <path d="M7 20V8l5-5 5 5v12"/>
          <path d="M12 3v5"/>
          <path d="M7 13h10"/>
        </svg>
      ),
      desc: 'MES, IoT platforms, quality management, and Industry 4.0 solutions',
      link: '/solutions/manufacturing'
    }
  ];

  return (
    <div className="solutions-page">
      {/* Hero */}
      <section className="solutions-hero">
        <div className="solutions-hero-container">
          <span className="solutions-tag fade-up">INDUSTRY SOLUTIONS</span>
          <h1 className="solutions-hero-headline fade-up">
            Domain Expertise.<br />
            <span className="gradient-text">Industry-Specific Solutions.</span>
          </h1>
          <p className="solutions-hero-desc fade-up">
            We don't learn your industry on your budget. Our teams bring existing domain knowledge across 12+ 
            industry verticals — meaning we ask smarter questions and build solutions that actually fit your market.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="industries-section">
        <div className="solutions-container">
          <span className="section-tag fade-up">INDUSTRIES WE SERVE</span>
          <h2 className="section-headline fade-up">
            Purpose-Built Software for <span className="orange-text">Every Industry</span>
          </h2>
          <div className="industries-grid">
            {industries.map((industry, i) => (
              <Link 
                key={i} 
                to={industry.link} 
                className="industry-card fade-up" 
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="industry-icon">{industry.icon}</div>
                <h3 className="industry-name">{industry.name}</h3>
                <p className="industry-desc">{industry.desc}</p>
                <span className="industry-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Domain Expertise Matters */}
      <section className="why-domain">
        <div className="solutions-container">
          <div className="why-domain-content fade-up">
            <h2>Why Domain Expertise Matters</h2>
            <div className="why-domain-grid">
              <div className="why-domain-item">
                <div className="why-domain-icon"><Icons.Target /></div>
                <h3>Regulatory Compliance</h3>
                <p>We understand industry-specific regulations like HIPAA, PCI-DSS, SOC 2, GDPR, and build compliance in from day one.</p>
              </div>
              <div className="why-domain-item">
                <div className="why-domain-icon"><Icons.Settings /></div>
                <h3>Industry Workflows</h3>
                <p>We know how your industry works — the processes, terminology, and pain points — so we build solutions that fit.</p>
              </div>
              <div className="why-domain-item">
                <div className="why-domain-icon"><Icons.Lightning /></div>
                <h3>Faster Time to Market</h3>
                <p>No learning curve. We start with domain knowledge and deliver production-ready solutions faster.</p>
              </div>
              <div className="why-domain-item">
                <div className="why-domain-icon"><Icons.Link /></div>
                <h3>Industry Integrations</h3>
                <p>We've already integrated with the tools and platforms your industry uses — no surprises.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="solutions-cta">
        <div className="solutions-cta-container fade-up">
          <h2 className="cta-headline">Ready to Build for Your Industry?</h2>
          <p className="cta-subtext">
            Let's discuss your industry-specific challenges and build solutions that work.
          </p>
          <Link to="/contact" className="btn-primary">Get Started →</Link>
        </div>
      </section>
    </div>
  );
}
