import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icons } from './Icons';
import './Services.css';

const allServices = [
  {
    icon: <Icons.Layers />,
    title: 'AI & LLM Integration',
    desc: 'Production-ready AI systems with RAG, multi-agent workflows, and LLM integration at scale.',
    link: '/services/ai-llm-integration',
    category: 'Technology',
    capabilities: ['RAG Pipelines', 'Multi-Agent Systems', 'Fine-tuning'],
    color: '#00D9FF',
  },
  {
    icon: <Icons.Cpu />,
    title: 'Custom Software Development',
    desc: 'Enterprise-grade software solutions engineered to your exact business requirements.',
    link: '/services/custom-software-development',
    category: 'Technology',
    capabilities: ['SaaS Platforms', 'APIs & Microservices', 'Enterprise Apps'],
    color: '#00D9FF',
  },
  {
    icon: <Icons.Smartphone />,
    title: 'Web & Mobile Development',
    desc: 'Full-stack applications for web, iOS, and Android with beautiful, performant UX.',
    link: '/services/web-mobile-development',
    category: 'Technology',
    capabilities: ['React / Next.js', 'Flutter / Swift', 'Progressive Web Apps'],
    color: '#00D9FF',
  },
  {
    icon: <Icons.Shield />,
    title: 'SecOps & SIEM',
    desc: 'AI-enhanced security operations with real-time threat detection and compliance management.',
    link: '/services/secops',
    category: 'Technology',
    capabilities: ['Threat Detection', 'SOC 2 / HIPAA', 'Incident Response'],
    color: '#00D9FF',
  },
  {
    icon: <Icons.TrendingUp />,
    title: 'Growth & SEO',
    desc: 'Technical SEO and content strategies that compound organic traffic month over month.',
    link: '/services/growth-seo',
    category: 'Marketing',
    capabilities: ['Technical Audits', 'Keyword Clusters', 'Core Web Vitals'],
    color: '#c084fc',
  },
  {
    icon: <Icons.Chart />,
    title: 'Performance Marketing',
    desc: 'Data-driven paid campaigns across Google, Meta, and LinkedIn that maximize ROAS.',
    link: '/services/performance-marketing',
    category: 'Marketing',
    capabilities: ['Google Ads', 'Meta Campaigns', 'Attribution Modeling'],
    color: '#c084fc',
  },
];

const tabs = ['All', 'Technology', 'Marketing'];

export default function Services() {
  const [activeTab, setActiveTab] = useState('All');
  const cardsRef = useRef([]);

  const filtered = activeTab === 'All' ? allServices : allServices.filter(s => s.category === activeTab);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.08 }
    );
    cardsRef.current.forEach((card) => card && observer.observe(card));
    return () => observer.disconnect();
  }, [filtered]);

  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="services-header fade-up">
          <span className="section-label">CORE CAPABILITIES</span>
          <h2 className="section-title">Technology &amp; Growth Solutions</h2>
          <p className="services-intro">
            Enterprise-grade technology services and performance marketing that drive measurable business outcomes.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="services-tabs">
          {tabs.map(tab => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'Technology' && (
                <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
                </svg>
              )}
              {tab === 'Marketing' && (
                <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              )}
              {tab}
            </button>
          ))}
        </div>

        <div className="featured-services-grid">
          {filtered.map((service, i) => (
            <Link
              key={`${service.title}-${i}`}
              to={service.link}
              className="service-card"
              ref={(el) => (cardsRef.current[i] = el)}
            >
              <div className="card-glow-border"></div>
              <div className="card-icon" style={{ '--card-color': service.color }}>
                {service.icon}
              </div>
              <span className={`card-category ${service.category.toLowerCase()}`}>
                <span className="card-category-dot"></span>
                {service.category}
              </span>
              <h4 className="card-title">{service.title}</h4>
              <p className="card-desc">{service.desc}</p>

              <ul className="card-capabilities">
                {service.capabilities.map((cap, j) => (
                  <li key={j}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    {cap}
                  </li>
                ))}
              </ul>

              <div className="card-footer">
                <span className="card-link">
                  Learn more
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="services-footer">
          <p className="services-count">
            <span className="count-highlight">13</span> specialized services across technology and marketing
          </p>
          <Link to="/services" className="btn-primary">
            View All Services
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
