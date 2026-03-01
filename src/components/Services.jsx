import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Icons } from './Icons';
import './Services.css';

const featuredServices = [
  { 
    icon: <Icons.Layers />,
    title: 'AI & LLM Integration', 
    desc: 'Production-ready AI systems with RAG, multi-agent workflows, and LLM integration',
    link: '/services/ai-llm-integration',
    category: 'Technology'
  },
  { 
    icon: <Icons.Cpu />,
    title: 'Custom Software Development', 
    desc: 'Enterprise-grade software solutions tailored to your business requirements',
    link: '/services/custom-software-development',
    category: 'Technology'
  },
  { 
    icon: <Icons.Smartphone />,
    title: 'Web & Mobile Development', 
    desc: 'Full-stack applications for web, iOS, and Android with beautiful UX',
    link: '/services/web-mobile-development',
    category: 'Technology'
  },
  { 
    icon: <Icons.Shield />,
    title: 'SecOps & SIEM', 
    desc: 'AI-enhanced security operations with threat detection and compliance',
    link: '/services/secops',
    category: 'Technology'
  },
  { 
    icon: <Icons.TrendingUp />,
    title: 'Growth & SEO', 
    desc: 'Technical SEO and content strategies that drive organic traffic',
    link: '/services/growth-seo',
    category: 'Marketing'
  },
  { 
    icon: <Icons.Chart />,
    title: 'Performance Marketing', 
    desc: 'Data-driven campaigns across Google, Meta, and LinkedIn',
    link: '/services/performance-marketing',
    category: 'Marketing'
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
          <span className="section-label">CORE CAPABILITIES</span>
          <h2 className="section-title">Technology & Growth Solutions</h2>
          <p className="services-intro">
            Enterprise-grade technology services and performance marketing that drive measurable business outcomes.
          </p>
        </div>

        <div className="featured-services-grid">
          {featuredServices.map((service, i) => (
            <Link
              key={i}
              to={service.link}
              className="service-card"
              ref={(el) => (cardsRef.current[i] = el)}
            >
              <div className="card-icon">{service.icon}</div>
              <h4 className="card-title">{service.title}</h4>
              <p className="card-desc">{service.desc}</p>
              <span className="card-arrow">→</span>
            </Link>
          ))}
        </div>

        <div className="services-footer">
          <p className="services-count">13 specialized services across technology and marketing</p>
          <Link to="/services" className="btn-primary">View All Services</Link>
        </div>
      </div>
    </section>
  );
}
