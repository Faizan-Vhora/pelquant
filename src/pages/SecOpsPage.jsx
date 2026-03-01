import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../components/Icons';
import './ServicePage.css';

export default function SecOpsPage() {
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
      title: 'Security Posture Assessment',
      desc: 'Comprehensive audit of your infrastructure, identity systems, data flows, access controls, and existing security tooling. We baseline your current risk exposure with a structured assessment report.'
    },
    {
      num: '02',
      title: 'Threat Modeling & Attack Surface Mapping',
      desc: 'We map your attack surface, identify your most critical assets, model adversary TTPs (Tactics, Techniques, and Procedures), and build a risk-ranked threat model aligned to MITRE ATT&CK.'
    },
    {
      num: '03',
      title: 'AI-Enhanced Threat Detection',
      desc: 'Machine learning models trained to detect anomalous behavior, insider threats, lateral movement, credential misuse, and zero-day attack patterns that rule-based systems miss.'
    },
    {
      num: '04',
      title: 'Automated Incident Response',
      desc: 'AI-powered playbooks that automatically contain, investigate, and remediate defined threat scenarios — reducing dwell time from hours to seconds.'
    },
    {
      num: '05',
      title: 'Continuous 24/7 Monitoring',
      desc: 'Monitoring pipelines with real-time alerting, intelligent log aggregation, and AI-prioritized triage queues that eliminate alert fatigue.'
    },
    {
      num: '06',
      title: 'Vulnerability Management Program',
      desc: 'Automated scanning, CVSS-based prioritization, patch management workflows, and risk-accepted tracking integrated directly into your DevOps pipeline.'
    },
    {
      num: '07',
      title: 'Compliance Automation',
      desc: 'Continuous evidence collection and compliance mapping against SOC 2, ISO 27001, GDPR, HIPAA, PCI-DSS with audit-ready dashboards and automated gap analysis.'
    },
    {
      num: '08',
      title: 'Red Team Simulation & Pen Testing',
      desc: 'Controlled adversarial testing to validate your defenses and uncover weaknesses before real attackers do.'
    }
  ];

  const capabilities = [
    {
      title: 'AI Behavioral Analytics',
      desc: 'User & Entity Behavior Analytics (UEBA) to detect anomalous patterns'
    },
    {
      title: 'Cloud Security Posture Management',
      desc: 'CSPM for AWS, Azure, GCP with continuous misconfiguration detection'
    },
    {
      title: 'Identity & Access Management',
      desc: 'IAM security and Zero Trust implementation'
    },
    {
      title: 'Endpoint Detection & Response',
      desc: 'EDR integration and advanced endpoint protection'
    },
    {
      title: 'Network Traffic Analysis',
      desc: 'Real-time network monitoring and anomaly detection'
    },
    {
      title: 'Threat Intelligence Integration',
      desc: 'Automated threat intel enrichment and correlation'
    }
  ];

  return (
    <div className="service-page">
      {/* Hero */}
      <section className="service-hero">
        <div className="service-hero-container">
          <Link to="/services" className="breadcrumb fade-up">← Back to Services</Link>
          <span className="service-tag fade-up">SECURITY OPERATIONS</span>
          <h1 className="service-hero-headline fade-up">
            SecOps with AI
          </h1>
          <p className="service-hero-desc fade-up">
            We design and implement security operations programs enhanced with AI capabilities. Our SecOps 
            services combine deep security expertise with intelligent automation to detect threats faster, 
            respond more effectively, and maintain continuous compliance — reducing your security team's burden 
            while raising your defensive posture.
          </p>
          <div className="service-hero-cta fade-up">
            <Link to="/contact" className="btn-primary">Strengthen Your Security →</Link>
            <a href="#process" className="btn-ghost">See Our Process</a>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="service-benefits">
        <div className="service-container">
          <div className="benefits-grid">
            <div className="benefit-card fade-up">
              <div className="benefit-icon"><Icons.Shield /></div>
              <h3>AI-Enhanced Detection</h3>
              <p>ML models catch threats that traditional rule-based systems miss, including zero-day attacks.</p>
            </div>
            <div className="benefit-card fade-up" style={{ animationDelay: '100ms' }}>
              <div className="benefit-icon"><Icons.Lightning /></div>
              <h3>Automated Response</h3>
              <p>Reduce incident response time from hours to seconds with AI-powered playbooks.</p>
            </div>
            <div className="benefit-card fade-up" style={{ animationDelay: '200ms' }}>
              <div className="benefit-icon"><Icons.Eye /></div>
              <h3>24/7 Monitoring</h3>
              <p>Continuous security monitoring with intelligent alert prioritization to eliminate fatigue.</p>
            </div>
            <div className="benefit-card fade-up" style={{ animationDelay: '300ms' }}>
              <div className="benefit-icon"><Icons.Shield /></div>
              <h3>Compliance Ready</h3>
              <p>Automated compliance evidence collection for SOC 2, ISO 27001, GDPR, HIPAA, PCI-DSS.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="service-process" id="process">
        <div className="service-container">
          <span className="section-tag fade-up">OUR PROCESS</span>
          <h2 className="section-headline fade-up">
            Step-by-Step <span className="orange-text">SecOps Implementation</span>
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

      {/* Capabilities */}
      <section className="service-products">
        <div className="service-container">
          <span className="section-tag fade-up">KEY CAPABILITIES</span>
          <h2 className="section-headline fade-up">
            Security Capabilities We Deliver
          </h2>
          <div className="platforms-grid">
            {capabilities.map((capability, i) => (
              <div key={i} className="platform-card fade-up" style={{ animationDelay: `${i * 50}ms` }}>
                <h3>{capability.title}</h3>
                <p>{capability.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MITRE ATT&CK */}
      <section className="service-mitre">
        <div className="service-container">
          <div className="mitre-content fade-up">
            <h2>MITRE ATT&CK Aligned</h2>
            <p>
              All our threat detection and response capabilities are mapped to the MITRE ATT&CK framework, 
              ensuring comprehensive coverage across the entire attack lifecycle — from initial access through 
              exfiltration and impact.
            </p>
            <div className="mitre-phases">
              <span className="mitre-phase">Initial Access</span>
              <span className="mitre-phase">Execution</span>
              <span className="mitre-phase">Persistence</span>
              <span className="mitre-phase">Privilege Escalation</span>
              <span className="mitre-phase">Defense Evasion</span>
              <span className="mitre-phase">Credential Access</span>
              <span className="mitre-phase">Discovery</span>
              <span className="mitre-phase">Lateral Movement</span>
              <span className="mitre-phase">Collection</span>
              <span className="mitre-phase">Exfiltration</span>
              <span className="mitre-phase">Impact</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="service-why">
        <div className="service-container">
          <div className="why-content fade-up">
            <h2 className="why-headline">Why Choose Pelquant for SecOps?</h2>
            <div className="why-points">
              <div className="why-point">
                <span className="why-check">✓</span>
                <p><strong>Deep Security Expertise:</strong> Genuine depth in enterprise security operations, not surface-level knowledge</p>
              </div>
              <div className="why-point">
                <span className="why-check">✓</span>
                <p><strong>AI-Enhanced Detection:</strong> ML-based threat detection beyond traditional rule-based systems</p>
              </div>
              <div className="why-point">
                <span className="why-check">✓</span>
                <p><strong>Full-Stack Security:</strong> From SIEM and SOAR to cloud security and compliance automation</p>
              </div>
              <div className="why-point">
                <span className="why-check">✓</span>
                <p><strong>Compliance Experience:</strong> Proven track record with SOC 2, ISO 27001, GDPR, HIPAA, PCI-DSS</p>
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
            <Link to="/services/siem" className="related-card fade-up">
              <h3>SIEM Implementation</h3>
              <p>Complete security visibility and event management</p>
              <span className="related-arrow">→</span>
            </Link>
            <Link to="/services/soar" className="related-card fade-up" style={{ animationDelay: '100ms' }}>
              <h3>SOAR Implementation</h3>
              <p>Automated security orchestration and response</p>
              <span className="related-arrow">→</span>
            </Link>
            <Link to="/services/devops-cloud" className="related-card fade-up" style={{ animationDelay: '200ms' }}>
              <h3>DevOps & Cloud</h3>
              <p>Secure cloud infrastructure and deployment</p>
              <span className="related-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="service-cta">
        <div className="service-cta-container fade-up">
          <h2 className="cta-headline">Ready to Elevate Your Security Posture?</h2>
          <p className="cta-subtext">
            Let's assess your current security operations and design an AI-enhanced program that works.
          </p>
          <Link to="/contact" className="btn-primary">Get Started →</Link>
        </div>
      </section>
    </div>
  );
}
