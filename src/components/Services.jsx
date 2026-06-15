import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const techServices = [
  {
    num: '01',
    title: 'AI & LLM Integration',
    desc: 'Production-ready AI systems — RAG pipelines, multi-agent workflows, and LLM integration at scale.',
    link: '/services/ai-llm-integration',
    tag: 'AI / ML',
  },
  {
    num: '02',
    title: 'Custom Software Development',
    desc: 'Enterprise SaaS platforms, APIs, and microservices engineered to your exact requirements.',
    link: '/services/custom-software-development',
    tag: 'Engineering',
  },
  {
    num: '03',
    title: 'Web & Mobile Development',
    desc: 'Full-stack applications for web, iOS, and Android with fast, beautiful UX.',
    link: '/services/web-mobile-development',
    tag: 'Product',
  },
  {
    num: '04',
    title: 'DevOps & Cloud Infrastructure',
    desc: 'CI/CD pipelines, Kubernetes clusters, and multi-cloud architecture that scales reliably.',
    link: '/services/devops-cloud',
    tag: 'Infrastructure',
  },
  {
    num: '05',
    title: 'SecOps, SIEM & SOAR',
    desc: 'AI-enhanced security operations with real-time threat detection and SOC 2 compliance.',
    link: '/services/secops',
    tag: 'Security',
  },
];

const marketingServices = [
  {
    num: '06',
    title: 'Technical & Growth SEO',
    desc: 'Site architecture, Core Web Vitals, and keyword clusters that compound organic traffic.',
    link: '/services/growth-seo',
    tag: 'SEO',
  },
  {
    num: '07',
    title: 'Paid Advertising',
    desc: 'High-ROAS campaigns across Google, Meta, and LinkedIn with rigorous attribution.',
    link: '/services/paid-advertising',
    tag: 'Paid',
  },
  {
    num: '08',
    title: 'Performance Marketing',
    desc: 'Full-funnel acquisition strategy — from first click to retained customer.',
    link: '/services/performance-marketing',
    tag: 'Growth',
  },
];

function ServiceRow({ service, index }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Link
      to={service.link}
      className="svc-row"
      ref={ref}
      style={{ animationDelay: `${index * 0.06}s` }}
    >
      <span className="svc-num">{service.num}</span>
      <div className="svc-body">
        <div className="svc-top">
          <span className="svc-title">{service.title}</span>
          <span className="svc-tag">{service.tag}</span>
        </div>
        <p className="svc-desc">{service.desc}</p>
      </div>
      <svg className="svc-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M7 17L17 7M17 7H7M17 7v10"/>
      </svg>
    </Link>
  );
}

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-container">

        {/* ── Section Header ── */}
        <div className="svc-header fade-up">
          <div className="svc-header-left">
            <span className="section-label">WHAT WE DO</span>
            <h2 className="svc-headline">
              Technology & Growth.<br />
              All Under One Roof.
            </h2>
          </div>
          <div className="svc-header-right">
            <p className="svc-intro">
              We combine deep engineering with performance marketing —
              so you don't need a separate agency for every problem.
              From AI infrastructure to paid acquisition, one team owns
              the entire journey.
            </p>
            <Link to="/services" className="svc-all-link">
              View all 13 services
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* ── Two Columns ── */}
        <div className="svc-columns">
          {/* Technology */}
          <div className="svc-column">
            <div className="svc-col-header">
              <div className="svc-col-dot tech" />
              <span className="svc-col-label">Technology</span>
            </div>
            <div className="svc-list">
              {techServices.map((s, i) => (
                <ServiceRow key={s.num} service={s} index={i} />
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="svc-divider" />

          {/* Marketing */}
          <div className="svc-column">
            <div className="svc-col-header">
              <div className="svc-col-dot marketing" />
              <span className="svc-col-label">Performance Marketing</span>
            </div>
            <div className="svc-list">
              {marketingServices.map((s, i) => (
                <ServiceRow key={s.num} service={s} index={i} />
              ))}
            </div>

            {/* Stats block at bottom of marketing column */}
            <div className="svc-stats">
              <div className="svc-stat">
                <span className="svc-stat-val">340%</span>
                <span className="svc-stat-lbl">Avg. ROI</span>
              </div>
              <div className="svc-stat">
                <span className="svc-stat-val">98%</span>
                <span className="svc-stat-lbl">Retention</span>
              </div>
              <div className="svc-stat">
                <span className="svc-stat-val">50+</span>
                <span className="svc-stat-lbl">Clients</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
