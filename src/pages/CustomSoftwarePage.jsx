import { Link } from 'react-router-dom';
import { Icons } from '../components/Icons';
import './ServicePage.css';

export default function CustomSoftwarePage() {

  const process = [
    {
      num: '01',
      title: 'Discovery & Requirements Engineering',
      desc: 'Deep-dive workshops with your stakeholders to map current workflows, identify bottlenecks, document functional and non-functional requirements, and define measurable success criteria.'
    },
    {
      num: '02',
      title: 'Technical Architecture Design',
      desc: 'Our architects produce a comprehensive system design — tech stack selection, database schema, API contracts, integration maps, security model, and scalability roadmap — delivered as a detailed Technical Design Document (TDD).'
    },
    {
      num: '03',
      title: 'Agile Sprint Development',
      desc: 'Two-week development sprints with working demos after every sprint. You see real software early and can provide feedback before full budget is committed.'
    },
    {
      num: '04',
      title: 'Quality Assurance & Testing',
      desc: 'Unit testing, integration testing, end-to-end testing, performance load testing, and OWASP security scanning before any release.'
    },
    {
      num: '05',
      title: 'Staging Environment & UAT',
      desc: 'Full staging deployment for your team to conduct User Acceptance Testing (UAT) with documented test plans and defect tracking.'
    },
    {
      num: '06',
      title: 'Production Deployment',
      desc: 'Zero-downtime deployment strategies, rollback plans, monitoring instrumentation, and go-live support.'
    },
    {
      num: '07',
      title: 'Hypercare & Post-Launch Support',
      desc: 'Dedicated post-launch support window, bug resolution SLAs, performance monitoring, and feature iteration as usage patterns emerge.'
    }
  ];

  const techStack = [
    {
      category: 'Backend',
      items: ['Node.js', 'Python (Django/FastAPI)', 'Go', 'Java', '.NET']
    },
    {
      category: 'Databases',
      items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'ClickHouse']
    },
    {
      category: 'APIs',
      items: ['REST', 'GraphQL', 'gRPC', 'WebSockets', 'Event-Driven (Kafka, RabbitMQ)']
    },
    {
      category: 'Architecture',
      items: ['Microservices', 'Serverless', 'Monolith-to-Microservices', 'Event-Driven']
    }
  ];

  const useCases = [
    'Enterprise resource planning (ERP) systems',
    'Customer relationship management (CRM) platforms',
    'Business intelligence and analytics dashboards',
    'Workflow management and approval systems',
    'Data processing and ETL pipelines',
    'Third-party API integrations and middleware',
    'Legacy system modernization and migration',
    'Internal tools and admin portals'
  ];

  return (
    <div className="service-page">
      {/* Hero */}
      <section className="service-hero">
        <div className="service-hero-container">
          <Link to="/services" className="breadcrumb fade-up"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>Back to Services</Link>
          <span className="service-tag fade-up">SOFTWARE ENGINEERING</span>
          <h1 className="service-hero-headline fade-up">
            Custom Software Development
          </h1>
          <p className="service-hero-desc fade-up">
            We engineer bespoke software solutions from the ground up, tailored precisely to your business 
            challenges. Whether you need to digitize manual operations, automate complex workflows, or build 
            entirely new product lines, our engineers design systems that fit your exact requirements and scale 
            with your growth trajectory.
          </p>
          <div className="service-hero-cta fade-up">
            <Link to="/contact" className="btn-primary">Start Your Project<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg></Link>
            <a href="#process" className="btn-ghost">See Our Process</a>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="service-benefits">
        <div className="service-container">
          <div className="benefits-grid">
            <div className="benefit-card fade-up">
              <div className="benefit-icon"><Icons.Target /></div>
              <h3>Tailored to Your Needs</h3>
              <p>No generic templates. Every solution is designed specifically for your business requirements.</p>
            </div>
            <div className="benefit-card fade-up" style={{ transitionDelay: '100ms' }}>
              <div className="benefit-icon"><Icons.TrendingUp /></div>
              <h3>Built to Scale</h3>
              <p>Architecture designed for growth — from MVP to enterprise scale without rebuilding.</p>
            </div>
            <div className="benefit-card fade-up" style={{ transitionDelay: '200ms' }}>
              <div className="benefit-icon"><Icons.Lock /></div>
              <h3>Security First</h3>
              <p>OWASP compliance, penetration testing, and security best practices built in from day one.</p>
            </div>
            <div className="benefit-card fade-up" style={{ transitionDelay: '300ms' }}>
              <div className="benefit-icon"><Icons.Lightning /></div>
              <h3>Agile Delivery</h3>
              <p>Working software every 2 weeks. See progress early, provide feedback, iterate fast.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="service-process" id="process">
        <div className="service-container">
          <span className="section-tag fade-up">OUR PROCESS</span>
          <h2 className="section-headline fade-up">
            Step-by-Step <span className="orange-text">Development Process</span>
          </h2>
          <div className="process-timeline">
            {process.map((step, i) => (
              <div key={i} className="process-item fade-up" style={{ transitionDelay: `${i * 50}ms` }}>
                <div className="process-number">{step.num}</div>
                <div className="process-content">
                  <h3 className="process-title">{step.title}</h3>
                  <p className="process-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="service-products">
        <div className="service-container">
          <span className="section-tag fade-up">WHAT WE BUILD</span>
          <h2 className="section-headline fade-up">
            Common Use Cases
          </h2>
          <div className="products-list">
            {useCases.map((useCase, i) => (
              <div key={i} className="product-item fade-up" style={{ transitionDelay: `${i * 50}ms` }}>
                <span className="product-bullet" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg></span>
                <p>{useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="service-tech">
        <div className="service-container">
          <span className="section-tag fade-up">TECHNOLOGY STACK</span>
          <h2 className="section-headline fade-up">
            Technical <span className="orange-text">Expertise</span>
          </h2>
          <div className="tech-grid">
            {techStack.map((tech, i) => (
              <div key={i} className="tech-category fade-up" style={{ transitionDelay: `${i * 100}ms` }}>
                <h3 className="tech-category-name">{tech.category}</h3>
                <div className="tech-tags">
                  {tech.items.map((item, j) => (
                    <span key={j} className="tech-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration & Migration */}
      <section className="service-integration">
        <div className="service-container">
          <div className="integration-content fade-up">
            <h2>Integration & Modernization</h2>
            <div className="integration-grid">
              <div className="integration-item">
                <h3>Third-Party Integrations</h3>
                <p>Connect with CRM, ERP, payment gateways, logistics platforms, communication tools, and any API-enabled service.</p>
              </div>
              <div className="integration-item">
                <h3>Legacy System Modernization</h3>
                <p>Migrate from outdated systems to modern architecture without disrupting operations. Phased migration strategies that minimize risk.</p>
              </div>
              <div className="integration-item">
                <h3>Cloud Migration</h3>
                <p>Move from on-premise to cloud (AWS, Azure, GCP) with zero-downtime strategies and cost optimization.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="service-why">
        <div className="service-container">
          <div className="why-content fade-up">
            <h2 className="why-headline">Why Choose Pelquant for Custom Development?</h2>
            <div className="why-points">
              <div className="why-point">
                <span className="why-check" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg></span>
                <p><strong>AI-First Architecture:</strong> We design systems with AI capabilities from the ground up</p>
              </div>
              <div className="why-point">
                <span className="why-check" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg></span>
                <p><strong>Production Experience:</strong> We&rsquo;ve built and deployed complex systems across multiple industries</p>
              </div>
              <div className="why-point">
                <span className="why-check" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg></span>
                <p><strong>Security Expertise:</strong> Deep security knowledge ensures your software is protected from day one</p>
              </div>
              <div className="why-point">
                <span className="why-check" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg></span>
                <p><strong>Transparent Process:</strong> Working demos every 2 weeks, clear communication, no surprises</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="service-related">
        <div className="service-container">
          <h2 className="related-headline fade-up">Related Services</h2>
          <div className="related-grid">
            <Link to="/services/web-mobile-development" className="related-card fade-up">
              <h3>Web & Mobile Development</h3>
              <p>Full-stack applications for web and mobile platforms</p>
              <span className="related-arrow" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg></span>
            </Link>
            <Link to="/services/ai-llm-integration" className="related-card fade-up" style={{ transitionDelay: '100ms' }}>
              <h3>AI & LLM Integration</h3>
              <p>Add intelligent capabilities to your software</p>
              <span className="related-arrow" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg></span>
            </Link>
            <Link to="/services/devops-cloud" className="related-card fade-up" style={{ transitionDelay: '200ms' }}>
              <h3>DevOps & Cloud</h3>
              <p>Scalable infrastructure and deployment pipelines</p>
              <span className="related-arrow" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg></span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="service-cta">
        <div className="service-cta-container fade-up">
          <h2 className="cta-headline">Ready to Build Your Custom Solution?</h2>
          <p className="cta-subtext">
            Let&rsquo;s discuss your requirements and design software that fits your business perfectly.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-primary">Get Started<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg></Link>
            <Link to="/services" className="btn-ghost">Explore other services</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
