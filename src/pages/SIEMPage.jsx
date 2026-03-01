import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../components/Icons';
import './ServicePage.css';

export default function SIEMPage() {
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
      title: 'Environment Discovery & Log Source Inventory',
      desc: 'We catalog every data source across your environment — on-premise servers, cloud workloads (AWS/Azure/GCP), SaaS applications, endpoints, firewalls, routers, Active Directory, and IoT devices — to design a complete log ingestion architecture.'
    },
    {
      num: '02',
      title: 'SIEM Platform Selection & Architecture',
      desc: 'We evaluate and recommend the right platform for your scale, budget, and team: Splunk, Microsoft Sentinel, IBM QRadar, Elastic SIEM, Wazuh, or Chronicle. We design the data architecture, retention policies, and licensing model.'
    },
    {
      num: '03',
      title: 'Data Ingestion & Log Source Onboarding',
      desc: 'We configure log forwarding agents, syslog receivers, API connectors, and cloud-native log pipelines for every source in scope. Log normalization to a common event schema (CIM/ECS) for unified analysis.'
    },
    {
      num: '04',
      title: 'Correlation Rule Development',
      desc: 'We build detection rules for high-fidelity alerts: brute force attacks, privilege escalation, lateral movement, data exfiltration, ransomware behavior, impossible travel, and more — mapped to MITRE ATT&CK.'
    },
    {
      num: '05',
      title: 'AI/ML-Powered Anomaly Detection',
      desc: 'Beyond static rules, we implement ML-based behavioral baselines that detect statistically anomalous activity for users, systems, and network flows — catching novel attacks that rules miss.'
    },
    {
      num: '06',
      title: 'Alert Tuning & False Positive Reduction',
      desc: 'We methodically tune every detection rule against your environment\'s baseline to minimize false positives without sacrificing coverage — a critical step often skipped that leads to alert fatigue.'
    },
    {
      num: '07',
      title: 'Dashboard & Reporting Design',
      desc: 'Executive security dashboards, SOC analyst workbenches, compliance evidence reports, and threat trend visualizations tailored to each audience.'
    },
    {
      num: '08',
      title: 'Playbook Integration & SOC Workflow Design',
      desc: 'We design the analyst workflows, escalation procedures, and shift handover processes so your SOC team operates efficiently at every tier.'
    },
    {
      num: '09',
      title: 'SIEM Health Monitoring & Maintenance',
      desc: 'Ongoing monitoring of the SIEM platform itself — log source connectivity, ingestion volume, rule performance, index health, and capacity planning.'
    }
  ];

  const platforms = [
    { name: 'Splunk Enterprise & Cloud', desc: 'SPL query development and ESCU content' },
    { name: 'Microsoft Sentinel', desc: 'KQL analytics rules, workbooks, and SOAR playbooks' },
    { name: 'IBM QRadar', desc: 'DSM configuration, custom rules, and offense management' },
    { name: 'Elastic SIEM / Elastic Security', desc: 'ECS normalization, detection rules, ML jobs' },
    { name: 'Wazuh', desc: 'Open-source SIEM, agent deployment, custom decoders and rules' },
    { name: 'Google Chronicle', desc: 'YARA-L rules and UDM (Unified Data Model) integration' }
  ];

  const useCases = [
    'Insider threat detection — identifying malicious or negligent employee behavior',
    'Account compromise detection — credential stuffing, password spray, MFA bypass',
    'Ransomware early warning — shadow copy deletion, mass encryption behavior',
    'Cloud security monitoring — misconfiguration alerts, IAM abuse, unusual API calls',
    'Compliance use cases — log retention, access logging, privileged account monitoring',
    'OT/IoT security monitoring for industrial and critical infrastructure environments'
  ];

  return (
    <div className="service-page">
      {/* Hero */}
      <section className="service-hero">
        <div className="service-hero-container">
          <Link to="/services" className="breadcrumb fade-up">← Back to Services</Link>
          <span className="service-tag fade-up">SECURITY OPERATIONS</span>
          <h1 className="service-hero-headline fade-up">
            SIEM Implementation
          </h1>
          <p className="service-hero-desc fade-up">
            We design, deploy, tune, and manage enterprise-grade SIEM solutions that give your organization 
            complete visibility across every system, user, and data flow. Our SIEM implementations are 
            AI-enhanced — instead of drowning your team in raw alerts, you receive prioritized, contextualized 
            intelligence enabling faster and smarter response.
          </p>
          <div className="service-hero-cta fade-up">
            <Link to="/contact" className="btn-primary">Start Your SIEM Project →</Link>
            <a href="#process" className="btn-ghost">See Our Process</a>
          </div>
        </div>
      </section>

      {/* What is SIEM */}
      <section className="service-benefits">
        <div className="service-container">
          <div className="siem-explainer fade-up">
            <h2>What is SIEM and Why It Matters</h2>
            <p>
              SIEM aggregates and analyzes log data from across your entire IT environment — servers, endpoints, 
              firewalls, cloud services, applications, SaaS platforms, and network devices — in real time. It 
              correlates events across these sources to identify security threats, policy violations, and compliance 
              gaps that no single system would catch alone.
            </p>
            <p className="highlight-text">
              Without SIEM, attackers can persist in your environment for months undetected.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="service-benefits">
        <div className="service-container">
          <div className="benefits-grid">
            <div className="benefit-card fade-up">
              <div className="benefit-icon"><Icons.Eye /></div>
              <h3>Complete Visibility</h3>
              <p>Unified view across all systems, users, and data flows in your entire IT environment.</p>
            </div>
            <div className="benefit-card fade-up" style={{ animationDelay: '100ms' }}>
              <div className="benefit-icon"><Icons.Target /></div>
              <h3>AI-Enhanced Detection</h3>
              <p>ML-based anomaly detection catches novel attacks that static rules miss.</p>
            </div>
            <div className="benefit-card fade-up" style={{ animationDelay: '200ms' }}>
              <div className="benefit-icon"><Icons.Lightning /></div>
              <h3>Reduced Alert Fatigue</h3>
              <p>Tuned detection rules minimize false positives while maintaining comprehensive coverage.</p>
            </div>
            <div className="benefit-card fade-up" style={{ animationDelay: '300ms' }}>
              <div className="benefit-icon"><Icons.Shield /></div>
              <h3>Compliance Ready</h3>
              <p>Built-in compliance reporting for SOC 2, ISO 27001, GDPR, HIPAA, PCI-DSS.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="service-process" id="process">
        <div className="service-container">
          <span className="section-tag fade-up">OUR PROCESS</span>
          <h2 className="section-headline fade-up">
            Step-by-Step <span className="orange-text">SIEM Deployment</span>
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

      {/* Platforms */}
      <section className="service-products">
        <div className="service-container">
          <span className="section-tag fade-up">PLATFORMS WE MASTER</span>
          <h2 className="section-headline fade-up">
            SIEM Platforms We Are Expert In
          </h2>
          <div className="platforms-grid">
            {platforms.map((platform, i) => (
              <div key={i} className="platform-card fade-up" style={{ animationDelay: `${i * 50}ms` }}>
                <h3>{platform.name}</h3>
                <p>{platform.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="service-products" style={{ background: 'rgba(255, 107, 43, 0.02)' }}>
        <div className="service-container">
          <span className="section-tag fade-up">USE CASES</span>
          <h2 className="section-headline fade-up">
            What We Monitor & Detect
          </h2>
          <div className="products-list">
            {useCases.map((useCase, i) => (
              <div key={i} className="product-item fade-up" style={{ animationDelay: `${i * 50}ms` }}>
                <span className="product-bullet">→</span>
                <p>{useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="service-why">
        <div className="service-container">
          <div className="why-content fade-up">
            <h2 className="why-headline">Why Choose Pelquant for SIEM?</h2>
            <div className="why-points">
              <div className="why-point">
                <span className="why-check">✓</span>
                <p><strong>Deep Security Expertise:</strong> Genuine depth in enterprise security operations, not surface-level knowledge</p>
              </div>
              <div className="why-point">
                <span className="why-check">✓</span>
                <p><strong>AI-Enhanced Detection:</strong> ML-based anomaly detection beyond static rules</p>
              </div>
              <div className="why-point">
                <span className="why-check">✓</span>
                <p><strong>Multi-Platform Experience:</strong> Expert in Splunk, Sentinel, QRadar, Elastic, Wazuh, Chronicle</p>
              </div>
              <div className="why-point">
                <span className="why-check">✓</span>
                <p><strong>Tuned for Your Environment:</strong> We eliminate alert fatigue through methodical tuning</p>
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
            <Link to="/services/soar" className="related-card fade-up">
              <h3>SOAR Implementation</h3>
              <p>Automate security response with orchestration platforms</p>
              <span className="related-arrow">→</span>
            </Link>
            <Link to="/services/secops" className="related-card fade-up" style={{ animationDelay: '100ms' }}>
              <h3>SecOps with AI</h3>
              <p>AI-enhanced security operations and threat detection</p>
              <span className="related-arrow">→</span>
            </Link>
            <Link to="/services/devops-cloud" className="related-card fade-up" style={{ animationDelay: '200ms' }}>
              <h3>DevOps & Cloud</h3>
              <p>Secure cloud infrastructure and deployment pipelines</p>
              <span className="related-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="service-cta">
        <div className="service-cta-container fade-up">
          <h2 className="cta-headline">Ready to Gain Complete Security Visibility?</h2>
          <p className="cta-subtext">
            Let's discuss your SIEM requirements and design a solution that fits your environment.
          </p>
          <Link to="/contact" className="btn-primary">Get Started →</Link>
        </div>
      </section>
    </div>
  );
}
