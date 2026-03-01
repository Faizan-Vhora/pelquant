import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Icons } from './Icons';
import './Services.css';

const techServices = [
  { 
    icon: <Icons.Layers />,
    title: 'AI & LLM Integration', 
    desc: 'Production-ready AI systems with RAG, multi-agent workflows, and LLM integration',
    link: '/services/ai-llm-integration'
  },
  { 
    icon: <Icons.Lightning />,
    title: 'AI-Powered Automation', 
    desc: 'Intelligent automation that eliminates manual work and scales operations 24/7',
    link: '/services/ai-automation'
  },
  { 
    icon: <Icons.Cpu />,
    title: 'Custom Software Development', 
    desc: 'Bespoke software solutions tailored to your exact business requirements',
    link: '/services/custom-software-development'
  },
  { 
    icon: <Icons.Smartphone />,
    title: 'Web & Mobile Apps', 
    desc: 'Full-stack applications for web, iOS, and Android with beautiful UX',
    link: '/services/web-mobile-development'
  },
  { 
    icon: <Icons.Rocket />,
    title: 'DevOps & Cloud', 
    desc: 'Scalable cloud infrastructure and CI/CD pipelines on AWS, GCP, Azure',
    link: '/services/devops-cloud'
  },
  { 
    icon: <Icons.Shield />,
    title: 'SecOps with AI', 
    desc: 'AI-enhanced security operations with threat detection and compliance',
    link: '/services/secops'
  },
  { 
    icon: <Icons.Eye />,
    title: 'SIEM Implementation', 
    desc: 'Complete security visibility with enterprise SIEM platforms',
    link: '/services/siem'
  },
  { 
    icon: <Icons.Cpu />,
    title: 'SOAR Automation', 
    desc: 'Security orchestration that responds to threats in under 60 seconds',
    link: '/services/soar'
  }
];

const marketingServices = [
  { 
    icon: <Icons.Search />,
    title: 'Technical SEO', 
    desc: 'Deep technical optimization for search performance',
    link: '/services/technical-seo'
  },
  { 
    icon: <Icons.TrendingUp />,
    title: 'On-Page & Growth SEO', 
    desc: 'Content and growth-focused SEO strategies',
    link: '/services/growth-seo'
  },
  { 
    icon: <Icons.Instagram />,
    title: 'Social Media Marketing', 
    desc: 'Strategic social media management and growth',
    link: '/services/social-media-marketing'
  },
  { 
    icon: <Icons.Target />,
    title: 'Meta & Google Ads', 
    desc: 'High-ROI paid advertising campaigns',
    link: '/services/paid-advertising'
  },
  { 
    icon: <Icons.Chart />,
    title: 'Performance Marketing', 
    desc: 'Data-driven marketing for measurable results',
    link: '/services/performance-marketing'
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
                <Link
                  key={i}
                  to={service.link}
                  className="service-card"
                  ref={(el) => (cardsRef.current[i] = el)}
                >
                  <div className="card-icon">{service.icon}</div>
                  <h4 className="card-title">{service.title}</h4>
                  <p className="card-desc">{service.desc}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="services-divider"></div>

          <div className="service-category">
            <h3 className="category-title" id="marketing">Marketing Services</h3>
            <div className="cards-grid">
              {marketingServices.map((service, i) => (
                <Link
                  key={i}
                  to={service.link}
                  className="service-card"
                  ref={(el) => (cardsRef.current[techServices.length + i] = el)}
                >
                  <div className="card-icon">{service.icon}</div>
                  <h4 className="card-title">{service.title}</h4>
                  <p className="card-desc">{service.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
