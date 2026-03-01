import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../components/Icons';
import './ServicePage.css';

export default function DevOpsCloudPage() {
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

  const process = [
    {
      num: '01',
      title: 'Infrastructure Audit & Cloud Strategy',
      desc: 'Assessment of current infrastructure, cost analysis, and design of a cloud strategy — whether greenfield on AWS/GCP/Azure or migration from on-premise or legacy cloud.'
    },
    {
      num: '02',
      title: 'Infrastructure as Code (IaC) Design',
      desc: 'All infrastructure defined in code using Terraform or AWS CloudFormation — enabling version-controlled, repeatable, and auditable infrastructure provisioning.'
    },
    {
      num: '03',
      title: 'Container Strategy & Orchestration',
      desc: 'Docker containerization of applications and Kubernetes orchestration on EKS, GKE, or AKS — with Helm charts for deployment management and auto-scaling configuration.'
    },
    {
      num: '04',
      title: 'CI/CD Pipeline Implementation',
      desc: 'End-to-end automated pipelines from code commit to production deployment using GitHub Actions, GitLab CI, Jenkins, or CircleCI — including automated testing gates, security scanning, and approval workflows.'
    },
    {
      num: '05',
      title: 'Secrets & Configuration Management',
      desc: 'Secure secrets management using HashiCorp Vault, AWS Secrets Manager, or Azure Key Vault — eliminating hardcoded credentials and environment-specific configuration.'
    },
    {
      num: '06',
      title: 'Observability Stack Implementation',
      desc: 'Metrics (Prometheus/Grafana), distributed tracing (Jaeger/Tempo), log aggregation (ELK/Loki), and synthetic monitoring — full observability before and after every deployment.'
    },
    {
      num: '07',
      title: 'Disaster Recovery & High Availability',
      desc: 'Multi-AZ deployments, database replication, automated failover, backup testing procedures, and documented RTO/RPO targets for every critical system.'
    },
    {
      num: '08',
      title: 'Cost Optimization & FinOps',
      desc: 'Continuous cloud cost analysis with right-sizing recommendations, reserved instance strategy, spot instance utilization, and monthly cost reporting dashboards.'
    }
  ];

  const cloudPlatforms = [
    {
      name: 'Amazon Web Services (AWS)',
      services: ['EC2', 'EKS', 'RDS', 'Lambda', 'S3', 'CloudFront', 'IAM', 'VPC', 'Route53']
    },
    {
      name: 'Google Cloud Platform (GCP)',
      services: ['GKE', 'Cloud Run', 'BigQuery', 'Pub/Sub', 'Cloud Storage', 'Cloud Functions']
    },
    {
      name: 'Microsoft Azure',
      services: ['AKS', 'App Service', 'Azure DevOps', 'CosmosDB', 'Azure Functions', 'Blob Storage']
    }
  ];

  const tools = [
    {
      category: 'Infrastructure as Code',
      items: ['Terraform', 'CloudFormation', 'Pulumi', 'Ansible']
    },
    {
      category: 'Container & Orchestration',
      items: ['Docker', 'Kubernetes', 'Helm', 'ArgoCD']
    },
    {
      category: 'CI/CD',
      items: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'CircleCI']
    },
    {
      category: 'Observability',
      items: ['Prometheus', 'Grafana', 'Datadog', 'New Relic', 'ELK Stack']
    }
  ];

  return (
    <div className="service-page">
      {/* Hero */}
      <section className="service-hero">
        <div className="service-hero-container">
          <Link to="/services" className="breadcrumb fade-up">← Back to Services</Link>
          <span className="service-tag fade-up">INFRASTRUCTURE & DEVOPS</span>
          <h1 className="service-hero-headline fade-up">
            DevOps & Cloud Infrastructure
          </h1>
          <p className="service-hero-desc fade-up">
            We design and implement cloud infrastructure and DevOps practices that allow your engineering team 
            to ship software faster, more reliably, and at any scale. Our approach eliminates manual deployment 
            friction, builds observability into every layer, and automates the operational toil that slows 
            development teams down.
          </p>
          <div className="service-hero-cta fade-up">
            <Link to="/contact" className="btn-primary">Modernize Your Infrastructure →</Link>
            <a href="#process" className="btn-ghost">See Our Process</a>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="service-benefits">
        <div className="service-container">
          <div className="benefits-grid">
            <div className="benefit-card fade-up">
              <div className="benefit-icon"><Icons.Rocket /></div>
              <h3>Ship Faster</h3>
              <p>Automated CI/CD pipelines reduce deployment time from hours to minutes.</p>
            </div>
            <div className="benefit-card fade-up" style={{ animationDelay: '100ms' }}>
              <div className="benefit-icon"><Icons.TrendingUp /></div>
              <h3>Scale Effortlessly</h3>
              <p>Auto-scaling infrastructure that grows with demand and shrinks to save costs.</p>
            </div>
            <div className="benefit-card fade-up" style={{ animationDelay: '200ms' }}>
              <div className="benefit-icon"><Icons.Eye /></div>
              <h3>Full Observability</h3>
              <p>Complete visibility into metrics, logs, and traces across your entire stack.</p>
            </div>
            <div className="benefit-card fade-up" style={{ animationDelay: '300ms' }}>
              <div className="benefit-icon"><Icons.DollarSign /></div>
              <h3>Cost Optimized</h3>
              <p>Continuous cost monitoring and optimization to eliminate cloud waste.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="service-process" id="process">
        <div className="service-container">
          <span className="section-tag fade-up">OUR PROCESS</span>
          <h2 className="section-headline fade-up">
            Step-by-Step <span className="orange-text">DevOps Implementation</span>
          </h2>
          <div className="process-timeline">
            {process.map((step, i) => (
              <div key={i} className="process-item fade-up" style={{ animationDelay: `${i * 50}ms` }}>
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

      {/* Cloud Platforms */}
      <section className="service-products">
        <div className="service-container">
          <span className="section-tag fade-up">CLOUD PLATFORMS</span>
          <h2 className="section-headline fade-up">
            Cloud Expertise
          </h2>
          <div className="cloud-platforms">
            {cloudPlatforms.map((platform, i) => (
              <div key={i} className="cloud-platform-card fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                <h3>{platform.name}</h3>
                <div className="cloud-services">
                  {platform.services.map((service, j) => (
                    <span key={j} className="cloud-service-tag">{service}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="service-tech">
        <div className="service-container">
          <span className="section-tag fade-up">DEVOPS TOOLS</span>
          <h2 className="section-headline fade-up">
            Tools & <span className="orange-text">Technologies</span>
          </h2>
          <div className="tech-grid">
            {tools.map((tool, i) => (
              <div key={i} className="tech-category fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                <h3 className="tech-category-name">{tool.category}</h3>
                <div className="tech-tags">
                  {tool.items.map((item, j) => (
                    <span key={j} className="tech-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DevOps Maturity */}
      <section className="service-maturity">
        <div className="service-container">
          <div className="maturity-content fade-up">
            <h2>DevOps Maturity Model</h2>
            <p>We assess your current DevOps maturity and create a roadmap to advance through each stage:</p>
            <div className="maturity-stages">
              <div className="maturity-stage">
                <div className="stage-number">1</div>
                <h3>Manual</h3>
                <p>Manual deployments, no automation</p>
              </div>
              <div className="maturity-arrow">→</div>
              <div className="maturity-stage">
                <div className="stage-number">2</div>
                <h3>Automated</h3>
                <p>CI/CD pipelines, IaC basics</p>
              </div>
              <div className="maturity-arrow">→</div>
              <div className="maturity-stage">
                <div className="stage-number">3</div>
                <h3>Optimized</h3>
                <p>Full observability, auto-scaling</p>
              </div>
              <div className="maturity-arrow">→</div>
              <div className="maturity-stage">
                <div className="stage-number">4</div>
                <h3>Elite</h3>
                <p>Self-healing, chaos engineering</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="service-why">
        <div className="service-container">
          <div className="why-content fade-up">
            <h2 className="why-headline">Why Choose Pelquant for DevOps & Cloud?</h2>
            <div className="why-points">
              <div className="why-point">
                <span className="why-check">✓</span>
                <p><strong>Multi-Cloud Expertise:</strong> Deep experience across AWS, GCP, and Azure</p>
              </div>
              <div className="why-point">
                <span className="why-check">✓</span>
                <p><strong>Security-First:</strong> Every infrastructure design includes security best practices</p>
              </div>
              <div className="why-point">
                <span className="why-check">✓</span>
                <p><strong>Cost Conscious:</strong> We optimize for performance AND cost efficiency</p>
              </div>
              <div className="why-point">
                <span className="why-check">✓</span>
                <p><strong>Production Experience:</strong> We've built and scaled infrastructure for high-traffic applications</p>
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
            <Link to="/services/custom-software-development" className="related-card fade-up">
              <h3>Custom Software Development</h3>
              <p>Build the applications that run on your infrastructure</p>
              <span className="related-arrow">→</span>
            </Link>
            <Link to="/services/secops" className="related-card fade-up" style={{ animationDelay: '100ms' }}>
              <h3>SecOps with AI</h3>
              <p>Secure your cloud infrastructure and operations</p>
              <span className="related-arrow">→</span>
            </Link>
            <Link to="/services/siem" className="related-card fade-up" style={{ animationDelay: '200ms' }}>
              <h3>SIEM Implementation</h3>
              <p>Monitor and secure your cloud workloads</p>
              <span className="related-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="service-cta">
        <div className="service-cta-container fade-up">
          <h2 className="cta-headline">Ready to Modernize Your Infrastructure?</h2>
          <p className="cta-subtext">
            Let's assess your current setup and design a cloud strategy that scales.
          </p>
          <Link to="/contact" className="btn-primary">Get Started →</Link>
        </div>
      </section>
    </div>
  );
}
