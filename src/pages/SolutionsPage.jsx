import { Link } from 'react-router-dom';
import { Icons } from '../components/Icons';
import './SolutionsPage.css';

export default function SolutionsPage() {

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
      desc: 'AI agents for property search and leasing, real estate platforms, and enterprise automation for back-office operations',
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
            We don&rsquo;t learn your industry on your budget. Our teams bring existing domain
            knowledge across 12 industry verticals &mdash; meaning we ask smarter questions and
            build solutions that actually fit your market.
          </p>
          <div className="solutions-hero-actions fade-up">
            <a href="#industries" className="btn-primary">
              Browse all 12 industries
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
            <Link to="/services" className="btn-ghost">See our services</Link>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="industries-section" id="industries">
        <div className="solutions-container">
          <span className="section-tag fade-up">INDUSTRIES WE SERVE</span>
          <h2 className="section-headline fade-up">
            Purpose-Built Software for <span className="orange-text">Every Industry</span>
          </h2>
          <div className="industries-grid">
            {industries.map((industry, i) => (
              // The reveal sits on the wrapper: transition-delay applies to every
              // transition on an element, so putting the stagger on the card
              // itself would also delay its hover.
              <div
                className="industry-card-wrap fade-up"
                key={industry.link}
                style={{ transitionDelay: `${Math.min(i, 7) * 50}ms` }}
              >
                <Link to={industry.link} className="industry-card" aria-label={industry.name}>
                  <span className="industry-icon" aria-hidden="true">{industry.icon}</span>
                  <h3 className="industry-name">{industry.name}</h3>
                  <p className="industry-desc">{industry.desc}</p>
                  <span className="industry-arrow">
                    Explore
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agents & Automation */}
      <section className="ai-section">
        <div className="solutions-container">
          <span className="section-tag fade-up">AI AGENTS & AUTOMATION</span>
          <h2 className="section-headline fade-up">
            Every Industry Solution, <span className="orange-text">Built AI-First</span>
          </h2>
          <div className="ai-grid">
            <div className="ai-card fade-up" style={{ transitionDelay: '0ms' }}>
              <div className="ai-card-icon"><Icons.MessageCircle /></div>
              <h3>Conversational AI Agents</h3>
              <p>RAG-powered assistants that answer questions across your documents, products, or systems in natural language — production-deployed, not a demo.</p>
            </div>
            <div className="ai-card fade-up" style={{ transitionDelay: '100ms' }}>
              <div className="ai-card-icon"><Icons.Cpu /></div>
              <h3>Enterprise Workflow Automation</h3>
              <p>Multi-step agentic automation that handles repetitive operations, approvals, and data pipelines end-to-end, so your team works on what actually needs a human.</p>
            </div>
            <div className="ai-card fade-up" style={{ transitionDelay: '200ms' }}>
              <div className="ai-card-icon"><Icons.Layers /></div>
              <h3>Retrieval-Augmented Generation</h3>
              <p>Custom knowledge bases wired into LLMs so answers are grounded in your own data — not generic model training, hallucination-prone guesses.</p>
            </div>
            <div className="ai-card fade-up" style={{ transitionDelay: '300ms' }}>
              <div className="ai-card-icon"><Icons.Link /></div>
              <h3>LLM Integration & Orchestration</h3>
              <p>Production-ready integration of GPT, Claude, and custom models into your existing software stack — architected to scale, not bolted on.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Domain Expertise Matters */}
      <section className="why-domain">
        <div className="solutions-container">
          {/* This was the only section without a tag, and its heading used a
              one-off size instead of the shared .section-headline. */}
          <span className="section-tag fade-up">WHY IT MATTERS</span>
          <h2 className="section-headline fade-up">
            Why <span className="orange-text">Domain Expertise</span> Matters
          </h2>
          <div className="why-domain-content fade-up">
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
            Let&rsquo;s discuss your industry-specific challenges and build solutions that work.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-primary">
              Get Started
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link to="/about" className="btn-ghost">Learn More About Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
