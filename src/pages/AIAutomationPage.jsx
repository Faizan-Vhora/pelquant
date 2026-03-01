import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../components/Icons';
import './ServicePage.css';

export default function AIAutomationPage() {
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
      title: 'Process Discovery & ROI Quantification',
      desc: 'We shadow your operations and document every manual, repetitive, or error-prone process with time-and-cost measurements to build a prioritized automation roadmap.'
    },
    {
      num: '02',
      title: 'Automation Architecture Design',
      desc: 'We design the full automation blueprint: which tasks use RPA, which use AI, how they interconnect, what human-in-the-loop checkpoints are required, and how exceptions are handled.'
    },
    {
      num: '03',
      title: 'Intelligent Document Processing (IDP)',
      desc: 'AI systems that read, extract, classify, and route information from invoices, purchase orders, contracts, insurance forms, medical records, and emails with near-human accuracy.'
    },
    {
      num: '04',
      title: 'Workflow Automation Build',
      desc: 'Using n8n, Make, Zapier, or fully custom code, we connect your systems and automate multi-step processes across departments — without changing the tools your team already uses.'
    },
    {
      num: '05',
      title: 'RPA for Legacy Systems',
      desc: 'Where API access is unavailable, we deploy Robotic Process Automation bots that interact with interfaces exactly as a human would — but at machine speed and without error.'
    },
    {
      num: '06',
      title: 'Human-in-the-Loop Design',
      desc: 'Smart escalation paths ensure complex edge cases and exceptions are flagged to humans with full context — automation handles 90%+, humans handle truly complex decisions.'
    },
    {
      num: '07',
      title: 'Testing with Real Production Data',
      desc: 'Automation is stress-tested against real data scenarios including edge cases, missing data, format variations, and peak-load conditions.'
    },
    {
      num: '08',
      title: 'Deployment, Training & Handover',
      desc: 'Full deployment with runbooks, admin dashboards, and training so your team can monitor, modify, and expand automations independently.'
    }
  ];

  const categories = [
    {
      title: 'Intelligent Document Processing',
      desc: 'AI-powered extraction and classification',
      items: ['Invoices', 'Contracts', 'Forms', 'Medical records']
    },
    {
      title: 'Customer Communication',
      desc: 'Automated multi-channel engagement',
      items: ['Email', 'WhatsApp', 'SMS', 'Chatbot responses']
    },
    {
      title: 'HR Automation',
      desc: 'Streamline people operations',
      items: ['Onboarding', 'Leave management', 'Payroll data', 'Employee queries']
    },
    {
      title: 'Finance Automation',
      desc: 'Eliminate manual financial tasks',
      items: ['Invoice reconciliation', 'Expense processing', 'Reporting', 'Payment tracking']
    },
    {
      title: 'Sales Automation',
      desc: 'Accelerate revenue operations',
      items: ['Lead scoring', 'CRM updates', 'Proposal generation', 'Follow-ups']
    },
    {
      title: 'Operations Automation',
      desc: 'Optimize daily operations',
      items: ['Inventory management', 'Order processing', 'Scheduling', 'Data entry']
    }
  ];

  return (
    <div className="service-page">
      {/* Hero */}
      <section className="service-hero">
        <div className="service-hero-container">
          <Link to="/services" className="breadcrumb fade-up">← Back to Services</Link>
          <span className="service-tag fade-up">INTELLIGENT AUTOMATION</span>
          <h1 className="service-hero-headline fade-up">
            AI-Powered Automation
          </h1>
          <p className="service-hero-desc fade-up">
            We build automation systems that work 24/7 to eliminate repetitive tasks, streamline multi-step 
            workflows, and dramatically improve operational efficiency. Every automation is designed with clear 
            ROI targets — time saved, error rate reduction, and cost per transaction.
          </p>
          <div className="service-hero-cta fade-up">
            <Link to="/contact" className="btn-primary">Start Automating →</Link>
            <a href="#process" className="btn-ghost">See Our Process</a>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="service-benefits">
        <div className="service-container">
          <div className="benefits-grid">
            <div className="benefit-card fade-up">
              <div className="benefit-icon"><Icons.Lightning /></div>
              <h3>24/7 Operation</h3>
              <p>Automation works around the clock without breaks, eliminating bottlenecks and delays.</p>
            </div>
            <div className="benefit-card fade-up" style={{ animationDelay: '100ms' }}>
              <div className="benefit-icon"><Icons.Target /></div>
              <h3>Near-Zero Errors</h3>
              <p>AI-powered automation achieves near-human accuracy without human error or fatigue.</p>
            </div>
            <div className="benefit-card fade-up" style={{ animationDelay: '200ms' }}>
              <div className="benefit-icon"><Icons.DollarSign /></div>
              <h3>Clear ROI</h3>
              <p>Every automation is measured by time saved, cost reduction, and error elimination.</p>
            </div>
            <div className="benefit-card fade-up" style={{ animationDelay: '300ms' }}>
              <div className="benefit-icon"><Icons.Link /></div>
              <h3>No Tool Changes</h3>
              <p>We connect your existing systems — no need to replace tools your team already uses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="service-process" id="process">
        <div className="service-container">
          <span className="section-tag fade-up">OUR PROCESS</span>
          <h2 className="section-headline fade-up">
            Step-by-Step <span className="orange-text">Automation Implementation</span>
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

      {/* Automation Categories */}
      <section className="service-products">
        <div className="service-container">
          <span className="section-tag fade-up">AUTOMATION CATEGORIES</span>
          <h2 className="section-headline fade-up">
            What We Automate
          </h2>
          <div className="automation-grid">
            {categories.map((category, i) => (
              <div key={i} className="automation-card fade-up" style={{ animationDelay: `${i * 50}ms` }}>
                <h3>{category.title}</h3>
                <p className="automation-desc">{category.desc}</p>
                <div className="automation-items">
                  {category.items.map((item, j) => (
                    <span key={j} className="automation-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="service-roi">
        <div className="service-container">
          <div className="roi-content fade-up">
            <h2>Typical ROI We Deliver</h2>
            <div className="roi-stats">
              <div className="roi-stat">
                <div className="roi-number">70-90%</div>
                <div className="roi-label">Time Reduction</div>
              </div>
              <div className="roi-stat">
                <div className="roi-number">95%+</div>
                <div className="roi-label">Accuracy Rate</div>
              </div>
              <div className="roi-stat">
                <div className="roi-number">3-6 mo</div>
                <div className="roi-label">Payback Period</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="service-tech">
        <div className="service-container">
          <span className="section-tag fade-up">TECHNOLOGY STACK</span>
          <h2 className="section-headline fade-up">
            Tools & <span className="orange-text">Platforms</span>
          </h2>
          <div className="tech-grid">
            <div className="tech-category fade-up">
              <h3 className="tech-category-name">Workflow Automation</h3>
              <div className="tech-tags">
                <span className="tech-tag">n8n</span>
                <span className="tech-tag">Make</span>
                <span className="tech-tag">Zapier</span>
                <span className="tech-tag">Custom Code</span>
              </div>
            </div>
            <div className="tech-category fade-up" style={{ animationDelay: '100ms' }}>
              <h3 className="tech-category-name">Document AI</h3>
              <div className="tech-tags">
                <span className="tech-tag">OCR</span>
                <span className="tech-tag">NLP</span>
                <span className="tech-tag">Computer Vision</span>
                <span className="tech-tag">LLMs</span>
              </div>
            </div>
            <div className="tech-category fade-up" style={{ animationDelay: '200ms' }}>
              <h3 className="tech-category-name">RPA Tools</h3>
              <div className="tech-tags">
                <span className="tech-tag">UiPath</span>
                <span className="tech-tag">Automation Anywhere</span>
                <span className="tech-tag">Selenium</span>
                <span className="tech-tag">Playwright</span>
              </div>
            </div>
            <div className="tech-category fade-up" style={{ animationDelay: '300ms' }}>
              <h3 className="tech-category-name">Integration</h3>
              <div className="tech-tags">
                <span className="tech-tag">REST APIs</span>
                <span className="tech-tag">Webhooks</span>
                <span className="tech-tag">Message Queues</span>
                <span className="tech-tag">Event Streams</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="service-why">
        <div className="service-container">
          <div className="why-content fade-up">
            <h2 className="why-headline">Why Choose Pelquant for Automation?</h2>
            <div className="why-points">
              <div className="why-point">
                <span className="why-check">✓</span>
                <p><strong>AI-First Approach:</strong> We use AI where it adds value, not just for buzzwords</p>
              </div>
              <div className="why-point">
                <span className="why-check">✓</span>
                <p><strong>ROI-Focused:</strong> Every automation is measured by clear business metrics</p>
              </div>
              <div className="why-point">
                <span className="why-check">✓</span>
                <p><strong>Human-in-the-Loop:</strong> Smart escalation for edge cases, not blind automation</p>
              </div>
              <div className="why-point">
                <span className="why-check">✓</span>
                <p><strong>Production Experience:</strong> We've deployed automation across multiple industries</p>
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
            <Link to="/services/ai-llm-integration" className="related-card fade-up">
              <h3>AI & LLM Integration</h3>
              <p>Advanced AI capabilities for intelligent automation</p>
              <span className="related-arrow">→</span>
            </Link>
            <Link to="/services/soar" className="related-card fade-up" style={{ animationDelay: '100ms' }}>
              <h3>SOAR Implementation</h3>
              <p>Security automation and orchestration</p>
              <span className="related-arrow">→</span>
            </Link>
            <Link to="/services/custom-software-development" className="related-card fade-up" style={{ animationDelay: '200ms' }}>
              <h3>Custom Software Development</h3>
              <p>Bespoke solutions for unique workflows</p>
              <span className="related-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="service-cta">
        <div className="service-cta-container fade-up">
          <h2 className="cta-headline">Ready to Eliminate Manual Work?</h2>
          <p className="cta-subtext">
            Let's identify your highest-ROI automation opportunities and build systems that work 24/7.
          </p>
          <Link to="/contact" className="btn-primary">Get Started →</Link>
        </div>
      </section>
    </div>
  );
}
