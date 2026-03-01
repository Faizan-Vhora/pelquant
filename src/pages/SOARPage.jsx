import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../components/Icons';
import './ServicePage.css';

export default function SOARPage() {
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
      title: 'SOC Process & Use Case Assessment',
      desc: 'We document every repetitive analyst task, triage workflow, and response procedure in your SOC — identifying exactly where automation will save the most time and reduce the most risk.'
    },
    {
      num: '02',
      title: 'SOAR Platform Selection',
      desc: 'We evaluate and recommend the right platform for your environment: Palo Alto XSOAR (Cortex), Splunk SOAR, IBM Resilient, Microsoft Sentinel Playbooks (Logic Apps), Shuffle, or TheHive. We assess integration breadth, licensing, and team capability.'
    },
    {
      num: '03',
      title: 'Integration Architecture Design',
      desc: 'We map every tool integration required: SIEM, EDR/XDR, threat intelligence feeds, ticketing systems (ServiceNow, Jira), identity platforms (Active Directory, Okta), firewall APIs, email gateways, and cloud provider APIs.'
    },
    {
      num: '04',
      title: 'Connector & Integration Development',
      desc: 'We build and test all required integrations using native connectors, REST APIs, and custom scripts — ensuring bidirectional data flow between all tools.'
    },
    {
      num: '05',
      title: 'Playbook Design & Development',
      desc: 'We design detailed playbook logic for each use case, covering decision trees, conditional branches, enrichment steps, human approval gates, and remediation actions. Playbooks are peer-reviewed and documented before deployment.'
    },
    {
      num: '06',
      title: 'Enrichment Automation',
      desc: 'Every alert is automatically enriched with threat intelligence (VirusTotal, Shodan, MISP, STIX/TAXII feeds), IP reputation, user context, asset criticality, and historical incident data — before a human ever looks at it.'
    },
    {
      num: '07',
      title: 'Playbook Testing in Staging',
      desc: 'All playbooks are tested in a staging environment against simulated alerts, edge cases, and failure scenarios before production deployment.'
    },
    {
      num: '08',
      title: 'Case Management Configuration',
      desc: 'We configure the case management system with severity tiers, SLA timers, escalation rules, analyst assignment logic, and audit trails for compliance.'
    },
    {
      num: '09',
      title: 'Metrics, KPIs & ROI Reporting',
      desc: 'We instrument SOAR with metrics dashboards tracking MTTR, alert closure rates, automation coverage, analyst workload, and false positive trends — demonstrating clear ROI.'
    },
    {
      num: '10',
      title: 'SOC Team Training & Playbook Ownership',
      desc: 'We train your SOC analysts and leads on playbook management, new use case development, and platform administration so they own the capability long-term.'
    }
  ];

  const playbooks = [
    {
      title: 'Phishing Email Triage',
      desc: 'Extract IOCs, block sender, quarantine email, notify user, create ticket — all in under 60 seconds'
    },
    {
      title: 'Compromised Account Response',
      desc: 'Disable account, revoke sessions, reset MFA, notify manager, open investigation case'
    },
    {
      title: 'Malware/Ransomware Containment',
      desc: 'Isolate endpoint via EDR, block C2 IPs on firewall, snapshot disk for forensics, alert IR team'
    },
    {
      title: 'Threat Intelligence Enrichment',
      desc: 'Auto-enrich every alert with IP/domain/file reputation, geolocation, WHOIS, and CVE data'
    },
    {
      title: 'Vulnerability Alert Triage',
      desc: 'Correlate scanner findings with asset criticality, assign to owners, set SLA timers'
    },
    {
      title: 'Cloud Security Incident Response',
      desc: 'Revoke IAM credentials, snapshot instance, isolate VPC, notify cloud team'
    },
    {
      title: 'Data Exfiltration Response',
      desc: 'Block destination, capture network logs, preserve evidence, escalate to DLP team'
    }
  ];

  const platforms = [
    { name: 'Palo Alto Cortex XSOAR', desc: 'Playbook development in YAML, content pack creation' },
    { name: 'Splunk SOAR', desc: 'Python playbook development, custom app integration' },
    { name: 'Microsoft Sentinel Playbooks', desc: 'Logic Apps, ARM templates, Azure API integrations' },
    { name: 'TheHive & Cortex', desc: 'Open-source SOAR and automated analyzer integration' },
    { name: 'Shuffle SOAR', desc: 'Workflow automation, open-source orchestration' },
    { name: 'IBM Security QRadar SOAR', desc: 'Complex incident management workflows' }
  ];

  return (
    <div className="service-page">
      {/* Hero */}
      <section className="service-hero">
        <div className="service-hero-container">
          <Link to="/services" className="breadcrumb fade-up">← Back to Services</Link>
          <span className="service-tag fade-up">SECURITY AUTOMATION</span>
          <h1 className="service-hero-headline fade-up">
            SOAR Implementation
          </h1>
          <p className="service-hero-desc fade-up">
            We design and implement SOAR platforms that automate repetitive security operations tasks, 
            orchestrate responses across your tool ecosystem, and dramatically reduce mean time to respond 
            (MTTR) to security incidents. Where SIEM detects threats, SOAR acts on them — automatically and 
            at machine speed.
          </p>
          <div className="service-hero-cta fade-up">
            <Link to="/contact" className="btn-primary">Start Your SOAR Project →</Link>
            <a href="#process" className="btn-ghost">See Our Process</a>
          </div>
        </div>
      </section>

      {/* What is SOAR */}
      <section className="service-benefits">
        <div className="service-container">
          <div className="siem-explainer fade-up">
            <h2>What is SOAR and Why It Matters</h2>
            <p>
              SOAR platforms connect your entire security toolset — SIEM, EDR, threat intelligence, ticketing, 
              firewalls, identity systems — and execute automated response playbooks when threats are detected.
            </p>
            <p className="highlight-text">
              A task that takes a human analyst 45 minutes can be completed by a SOAR playbook in under 60 seconds.
            </p>
            <p>
              SOAR transforms your SOC from reactive to proactive.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="service-benefits">
        <div className="service-container">
          <div className="benefits-grid">
            <div className="benefit-card fade-up">
              <div className="benefit-icon"><Icons.Lightning /></div>
              <h3>60x Faster Response</h3>
              <p>Automate tasks that take analysts 45 minutes down to under 60 seconds.</p>
            </div>
            <div className="benefit-card fade-up" style={{ animationDelay: '100ms' }}>
              <div className="benefit-icon"><Icons.Link /></div>
              <h3>Unified Tool Ecosystem</h3>
              <p>Connect SIEM, EDR, firewalls, ticketing, and identity systems into one orchestrated workflow.</p>
            </div>
            <div className="benefit-card fade-up" style={{ animationDelay: '200ms' }}>
              <div className="benefit-icon"><Icons.Cpu /></div>
              <h3>Intelligent Automation</h3>
              <p>Auto-enrich alerts with threat intel, context, and historical data before human review.</p>
            </div>
            <div className="benefit-card fade-up" style={{ animationDelay: '300ms' }}>
              <div className="benefit-icon"><Icons.Chart /></div>
              <h3>Measurable ROI</h3>
              <p>Track MTTR reduction, automation coverage, and analyst workload with built-in metrics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="service-process" id="process">
        <div className="service-container">
          <span className="section-tag fade-up">OUR PROCESS</span>
          <h2 className="section-headline fade-up">
            Step-by-Step <span className="orange-text">SOAR Deployment</span>
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

      {/* Playbooks */}
      <section className="service-products">
        <div className="service-container">
          <span className="section-tag fade-up">AUTOMATION PLAYBOOKS</span>
          <h2 className="section-headline fade-up">
            SOAR Playbooks We Build
          </h2>
          <div className="playbooks-grid">
            {playbooks.map((playbook, i) => (
              <div key={i} className="playbook-card fade-up" style={{ animationDelay: `${i * 50}ms` }}>
                <h3>{playbook.title}</h3>
                <p>{playbook.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="service-products" style={{ background: 'rgba(255, 107, 43, 0.02)' }}>
        <div className="service-container">
          <span className="section-tag fade-up">PLATFORMS WE MASTER</span>
          <h2 className="section-headline fade-up">
            SOAR Platforms We Are Expert In
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

      {/* Why Choose Us */}
      <section className="service-why">
        <div className="service-container">
          <div className="why-content fade-up">
            <h2 className="why-headline">Why Choose Pelquant for SOAR?</h2>
            <div className="why-points">
              <div className="why-point">
                <span className="why-check">✓</span>
                <p><strong>Production Playbook Experience:</strong> We've built and deployed complex playbooks across multiple platforms</p>
              </div>
              <div className="why-point">
                <span className="why-check">✓</span>
                <p><strong>Multi-Platform Expertise:</strong> Expert in XSOAR, Splunk SOAR, Sentinel, TheHive, Shuffle, QRadar SOAR</p>
              </div>
              <div className="why-point">
                <span className="why-check">✓</span>
                <p><strong>Custom Integration Development:</strong> We build custom connectors when native integrations don't exist</p>
              </div>
              <div className="why-point">
                <span className="why-check">✓</span>
                <p><strong>ROI-Focused Implementation:</strong> We measure and demonstrate clear time savings and efficiency gains</p>
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
              <p>Complete security visibility and threat detection</p>
              <span className="related-arrow">→</span>
            </Link>
            <Link to="/services/secops" className="related-card fade-up" style={{ animationDelay: '100ms' }}>
              <h3>SecOps with AI</h3>
              <p>AI-enhanced security operations programs</p>
              <span className="related-arrow">→</span>
            </Link>
            <Link to="/services/ai-automation" className="related-card fade-up" style={{ animationDelay: '200ms' }}>
              <h3>AI-Powered Automation</h3>
              <p>Intelligent automation for business operations</p>
              <span className="related-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="service-cta">
        <div className="service-cta-container fade-up">
          <h2 className="cta-headline">Ready to Automate Security Response?</h2>
          <p className="cta-subtext">
            Let's discuss your SOC workflows and design playbooks that save time and reduce risk.
          </p>
          <Link to="/contact" className="btn-primary">Get Started →</Link>
        </div>
      </section>
    </div>
  );
}
