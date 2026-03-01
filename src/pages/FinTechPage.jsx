import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './SolutionsPage.css';

export default function FinTechPage() {
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

  const solutions = [
    'Digital banking platforms and neobank applications',
    'Payment processing systems and merchant gateways',
    'Lending and loan origination platforms',
    'Trading platforms and investment apps',
    'Wealth management and robo-advisory',
    'RegTech and compliance automation (AML, KYC)',
    'Open Banking integrations (PSD2)',
    'Insurance technology platforms',
    'Blockchain and DeFi solutions'
  ];

  const aiCapabilities = [
    { title: 'AI-Powered Fraud Detection', desc: 'Behavioral models and real-time transaction monitoring' },
    { title: 'Automated KYC/AML', desc: 'Document verification and watchlist screening' },
    { title: 'Credit Risk Modeling', desc: 'ML-based credit scoring with alternative data' },
    { title: 'AI Financial Advisors', desc: 'Portfolio Q&A and financial planning assistance' }
  ];

  const compliance = [
    'PCI-DSS — Payment card industry security',
    'PSD2 / Open Banking regulation',
    'AML / CFT — Anti-Money Laundering',
    'GDPR — Data privacy for financial data',
    'SOC 2 Type II for financial SaaS',
    'SEC, FCA, RBI regulations'
  ];

  return (
    <div className="solutions-page">
      <section className="solutions-hero">
        <div className="solutions-hero-container">
          <Link to="/solutions" className="breadcrumb fade-up">← Back to Solutions</Link>
          <span className="solutions-tag fade-up">FINTECH</span>
          <h1 className="solutions-hero-headline fade-up">
            Financial Technology Solutions
          </h1>
          <p className="solutions-hero-desc fade-up">
            Financial software demands the highest standards of security, accuracy, compliance, and performance. 
            Pelquant has deep expertise building financial platforms — from consumer banking apps and payment 
            processors to investment platforms, compliance systems, and AI-powered financial analytics.
          </p>
        </div>
      </section>

      <section className="solutions-content">
        <div className="solutions-container">
          <span className="section-tag fade-up">WHAT WE BUILD</span>
          <h2 className="section-headline fade-up">
            FinTech Solutions
          </h2>
          <div className="solutions-list">
            {solutions.map((solution, i) => (
              <div key={i} className="solution-item fade-up" style={{ animationDelay: `${i * 50}ms` }}>
                <span className="solution-bullet">→</span>
                <p>{solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-section">
        <div className="solutions-container">
          <span className="section-tag fade-up">AI IN FINTECH</span>
          <h2 className="section-headline fade-up">
            AI & Automation Capabilities
          </h2>
          <div className="ai-grid">
            {aiCapabilities.map((capability, i) => (
              <div key={i} className="ai-card fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                <h3>{capability.title}</h3>
                <p>{capability.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="compliance-section">
        <div className="solutions-container">
          <span className="section-tag fade-up">REGULATORY COMPLIANCE</span>
          <h2 className="section-headline fade-up">
            Frameworks We Work Within
          </h2>
          <div className="compliance-list">
            {compliance.map((item, i) => (
              <div key={i} className="compliance-item fade-up" style={{ animationDelay: `${i * 50}ms` }}>
                <span className="compliance-check">✓</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="solutions-cta">
        <div className="solutions-cta-container fade-up">
          <h2 className="cta-headline">Ready to Build Your FinTech Solution?</h2>
          <p className="cta-subtext">
            Let's discuss your financial technology project and build compliant, secure solutions.
          </p>
          <Link to="/contact" className="btn-primary">Get Started →</Link>
        </div>
      </section>
    </div>
  );
}
