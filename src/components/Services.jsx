import { useEffect, useRef } from 'react';
import './Services.css';

const techServices = [
  { 
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
    title: 'Custom Software Dev', 
    desc: 'Tailored solutions built for your unique business needs' 
  },
  { 
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
    title: 'Full-Stack Web & Mobile', 
    desc: 'End-to-end development across all platforms' 
  },
  { 
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
    title: 'AI & LLM Integrations', 
    desc: 'Cutting-edge AI models integrated into your workflow' 
  },
  { 
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
    title: 'AI-Powered Automation', 
    desc: 'Intelligent automation to scale operations' 
  },
  { 
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
    title: 'SecOps with AI', 
    desc: 'AI-enhanced security operations and monitoring' 
  },
  { 
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>,
    title: 'DevOps & Cloud', 
    desc: 'Scalable infrastructure and deployment pipelines' 
  }
];

const marketingServices = [
  { 
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>,
    title: 'Technical SEO', 
    desc: 'Deep technical optimization for search performance' 
  },
  { 
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>,
    title: 'On-Page & Growth SEO', 
    desc: 'Content and growth-focused SEO strategies' 
  },
  { 
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5Z"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><path d="M17.5 6.5h.01"/></svg>,
    title: 'SMM', 
    desc: 'Strategic social media management and growth' 
  },
  { 
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
    title: 'Meta & Google Ads', 
    desc: 'High-ROI paid advertising campaigns' 
  },
  { 
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><rect x="7" y="10" width="3" height="7"/><rect x="14" y="5" width="3" height="12"/></svg>,
    title: 'Performance Marketing', 
    desc: 'Data-driven marketing for measurable results' 
  }
];

export default function Services() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => card && observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="services-header">
          <span className="section-label">OUR SERVICES</span>
          <h2 className="section-title">What We Build & Grow</h2>
        </div>

        <div className="services-grid">
          <div className="service-category">
            <h3 className="category-title">Technology Services</h3>
            <div className="cards-grid">
              {techServices.map((service, i) => (
                <div
                  key={i}
                  className="service-card"
                  ref={(el) => (cardsRef.current[i] = el)}
                >
                  <div className="card-icon">{service.icon}</div>
                  <h4 className="card-title">{service.title}</h4>
                  <p className="card-desc">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="services-divider"></div>

          <div className="service-category">
            <h3 className="category-title" id="marketing">Marketing Services</h3>
            <div className="cards-grid">
              {marketingServices.map((service, i) => (
                <div
                  key={i}
                  className="service-card"
                  ref={(el) => (cardsRef.current[techServices.length + i] = el)}
                >
                  <div className="card-icon">{service.icon}</div>
                  <h4 className="card-title">{service.title}</h4>
                  <p className="card-desc">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
