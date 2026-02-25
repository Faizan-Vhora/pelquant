import { useEffect, useRef } from 'react';
import './ServicesPage.css';

export default function ServicesPage() {
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

  const techServices = [
    {
      title: 'AI Product Development',
      desc: 'Custom AI solutions built from the ground up. LLM integration, RAG systems, intelligent automation, and production-ready AI products.',
      features: ['LLM Integration', 'RAG Systems', 'AI Agents', 'Model Fine-tuning']
    },
    {
      title: 'Web & Mobile Apps',
      desc: 'Full-stack applications that scale. React, Next.js, React Native. Cloud-native architecture with modern DevOps practices.',
      features: ['React/Next.js', 'React Native', 'Cloud Architecture', 'API Development']
    },
    {
      title: 'System Integration',
      desc: 'Connect your tools and automate workflows. API development, third-party integrations, data pipelines, and legacy modernization.',
      features: ['API Integration', 'Workflow Automation', 'Data Pipelines', 'Legacy Migration']
    },
    {
      title: 'Cloud & Infrastructure',
      desc: 'Scalable cloud solutions on AWS, GCP, Azure. Infrastructure as code, CI/CD pipelines, monitoring, and cost optimization.',
      features: ['AWS/GCP/Azure', 'IaC (Terraform)', 'CI/CD Pipelines', 'Cost Optimization']
    }
  ];

  const marketingServices = [
    {
      title: 'Growth Strategy',
      desc: 'Data-driven growth plans that actually work. Market analysis, positioning, go-to-market strategy, and growth experiments.',
      features: ['Market Analysis', 'GTM Strategy', 'Growth Experiments', 'Positioning']
    },
    {
      title: 'Content & SEO',
      desc: 'Content that ranks and converts. Technical SEO, content strategy, blog management, and organic traffic growth.',
      features: ['Technical SEO', 'Content Strategy', 'Link Building', 'Traffic Growth']
    },
    {
      title: 'Paid Acquisition',
      desc: 'Performance marketing that scales. Google Ads, Meta Ads, LinkedIn campaigns, and conversion optimization.',
      features: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'Conversion Optimization']
    },
    {
      title: 'Marketing Automation',
      desc: 'Automated systems that nurture and convert. Email sequences, CRM setup, lead scoring, and analytics dashboards.',
      features: ['Email Automation', 'CRM Setup', 'Lead Scoring', 'Analytics']
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-container">
          <span className="services-tag fade-up">WHAT WE DO</span>
          <h1 className="services-hero-headline fade-up">
            Technology & Marketing.<br />
            <span className="gradient-text">Built Together.</span>
          </h1>
          <p className="services-hero-subtext fade-up">
            We don't just build software or run campaigns. We create integrated systems where 
            technology and marketing work as one—driving real growth you can measure.
          </p>
        </div>
      </section>

      {/* Technology Services */}
      <section className="tech-services-section">
        <div className="services-container">
          <span className="section-tag fade-up">TECHNOLOGY SERVICES</span>
          <h2 className="section-headline fade-up">
            We Build <span className="orange-text">Intelligent Systems</span>
          </h2>
          <div className="services-grid">
            {techServices.map((service, index) => (
              <div 
                key={index} 
                className="service-card fade-up" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
                <div className="service-features">
                  {service.features.map((feature, i) => (
                    <span key={i} className="feature-tag">{feature}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Services */}
      <section className="marketing-services-section">
        <div className="services-container">
          <span className="section-tag fade-up">MARKETING SERVICES</span>
          <h2 className="section-headline fade-up">
            We Drive <span className="orange-text">Measurable Growth</span>
          </h2>
          <div className="services-grid">
            {marketingServices.map((service, index) => (
              <div 
                key={index} 
                className="service-card fade-up" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
                <div className="service-features">
                  {service.features.map((feature, i) => (
                    <span key={i} className="feature-tag">{feature}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="process-container">
          <span className="section-tag fade-up">HOW WE WORK</span>
          <h2 className="section-headline fade-up">
            Our <span className="orange-text">Process</span>
          </h2>
          <div className="process-grid">
            <div className="process-step fade-up" style={{ animationDelay: '0ms' }}>
              <div className="step-number">01</div>
              <h3 className="step-title">Discovery</h3>
              <p className="step-desc">
                We start by understanding your business, goals, and challenges. No generic solutions—everything is tailored to your situation.
              </p>
            </div>
            <div className="process-step fade-up" style={{ animationDelay: '100ms' }}>
              <div className="step-number">02</div>
              <h3 className="step-title">Strategy</h3>
              <p className="step-desc">
                We create a detailed plan combining technology and marketing. Clear milestones, realistic timelines, and measurable outcomes.
              </p>
            </div>
            <div className="process-step fade-up" style={{ animationDelay: '200ms' }}>
              <div className="step-number">03</div>
              <h3 className="step-title">Build & Launch</h3>
              <p className="step-desc">
                We build fast, test thoroughly, and launch confidently. You're involved at every step with regular updates and demos.
              </p>
            </div>
            <div className="process-step fade-up" style={{ animationDelay: '300ms' }}>
              <div className="step-number">04</div>
              <h3 className="step-title">Optimize & Scale</h3>
              <p className="step-desc">
                We measure everything, optimize continuously, and scale what works. Your success is our success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="services-cta-container fade-up">
          <h2 className="cta-headline">Ready to Start Building?</h2>
          <p className="cta-subtext">
            Tell us about your project and we'll show you what's possible.
          </p>
          <div className="cta-buttons">
            <a href="/contact" className="btn-primary">Get Started →</a>
            <a href="/about" className="btn-ghost">Learn More About Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}
