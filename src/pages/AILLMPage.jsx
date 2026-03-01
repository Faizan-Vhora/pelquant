import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './ServicePage.css';

export default function AILLMPage() {
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
      title: 'AI Opportunity Assessment',
      desc: 'We audit your data assets, business processes, and competitive landscape to identify where AI integration will deliver the highest ROI and fastest time-to-value.'
    },
    {
      num: '02',
      title: 'Data Audit & Preparation',
      desc: 'We assess data quality, clean and structure raw data, design ingestion pipelines from documents, databases, APIs, emails, and real-time streams.'
    },
    {
      num: '03',
      title: 'RAG Architecture Design',
      desc: 'We architect Retrieval-Augmented Generation systems using vector databases (Pinecone, Weaviate, Chroma, pgvector) — enabling AI to accurately answer questions from your proprietary data.'
    },
    {
      num: '04',
      title: 'LLM Selection & Configuration',
      desc: 'We select the optimal model (GPT-4o, Claude 3.5, Llama 3, Mistral, Gemini) for your use case. Where needed, we fine-tune on domain-specific data for higher accuracy.'
    },
    {
      num: '05',
      title: 'Prompt Engineering & Guardrails',
      desc: 'Systematic prompt design with safety guardrails, hallucination controls, brand voice enforcement, and compliance boundaries.'
    },
    {
      num: '06',
      title: 'Multi-Agent Orchestration',
      desc: 'For complex workflows, we design multi-agent systems using LangChain, AutoGen, or CrewAI where specialized AI agents collaborate on tasks.'
    },
    {
      num: '07',
      title: 'Integration & API Layer',
      desc: 'Secure integration into your existing tools via REST or GraphQL APIs — no disruption to current workflows.'
    },
    {
      num: '08',
      title: 'Evaluation & Testing',
      desc: 'Every AI system is evaluated against real-world test suites before release, with accuracy metrics, latency benchmarks, and edge case coverage.'
    },
    {
      num: '09',
      title: 'Monitoring & Improvement',
      desc: 'Production monitoring for accuracy drift, user feedback loops, and periodic retraining pipelines.'
    }
  ];

  const products = [
    'RAG-powered enterprise knowledge bases and internal search',
    'Intelligent chatbots and virtual assistants (customer support, HR, legal, finance)',
    'AI document analysis, contract review, and data extraction',
    'Automated report generation and business intelligence narration',
    'Recommendation engines and personalization systems',
    'Voice AI and multimodal AI applications',
    'AI-powered code review, testing, and developer tooling'
  ];

  const tech = [
    { name: 'LLMs', items: ['GPT-4o', 'Claude 3.5', 'Llama 3', 'Mistral', 'Gemini'] },
    { name: 'Vector DBs', items: ['Pinecone', 'Weaviate', 'Chroma', 'pgvector'] },
    { name: 'Frameworks', items: ['LangChain', 'AutoGen', 'CrewAI', 'LlamaIndex'] },
    { name: 'Fine-tuning', items: ['LoRA', 'QLoRA', 'Full Fine-tuning', 'RLHF'] }
  ];

  return (
    <div className="service-page">
      {/* Hero */}
      <section className="service-hero">
        <div className="service-hero-container">
          <Link to="/services" className="breadcrumb fade-up">← Back to Services</Link>
          <span className="service-tag fade-up">AI & MACHINE LEARNING</span>
          <h1 className="service-hero-headline fade-up">
            AI & LLM Integration
          </h1>
          <p className="service-hero-desc fade-up">
            We integrate advanced AI and large language models into your existing systems or new products. 
            Our AI implementations deliver real business outcomes — not proof-of-concepts. We have deployed 
            RAG systems, intelligent assistants, and AI-powered decision tools into production environments 
            across multiple industries.
          </p>
          <div className="service-hero-cta fade-up">
            <Link to="/contact" className="btn-primary">Start Your AI Project →</Link>
            <a href="#process" className="btn-ghost">See Our Process</a>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="service-benefits">
        <div className="service-container">
          <div className="benefits-grid">
            <div className="benefit-card fade-up">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <h3>Production-Ready AI</h3>
              <p>Not demos or POCs. We build AI systems that handle real data, real users, and real edge cases in production.</p>
            </div>
            <div className="benefit-card fade-up" style={{ animationDelay: '100ms' }}>
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3>RAG Expertise</h3>
              <p>Deep experience building Retrieval-Augmented Generation systems that answer from your proprietary data accurately.</p>
            </div>
            <div className="benefit-card fade-up" style={{ animationDelay: '200ms' }}>
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <h3>Multi-Agent Systems</h3>
              <p>Complex workflows handled by specialized AI agents that collaborate intelligently to solve business problems.</p>
            </div>
            <div className="benefit-card fade-up" style={{ animationDelay: '300ms' }}>
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
              <h3>Security & Compliance</h3>
              <p>Built-in guardrails, hallucination controls, and compliance boundaries for regulated industries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="service-process" id="process">
        <div className="service-container">
          <span className="section-tag fade-up">OUR PROCESS</span>
          <h2 className="section-headline fade-up">
            Step-by-Step <span className="orange-text">AI Integration</span>
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

      {/* AI Products */}
      <section className="service-products">
        <div className="service-container">
          <span className="section-tag fade-up">WHAT WE BUILD</span>
          <h2 className="section-headline fade-up">
            AI Product Types
          </h2>
          <div className="products-list">
            {products.map((product, i) => (
              <div key={i} className="product-item fade-up" style={{ animationDelay: `${i * 50}ms` }}>
                <span className="product-bullet">→</span>
                <p>{product}</p>
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
            Tools & <span className="orange-text">Platforms</span>
          </h2>
          <div className="tech-grid">
            {tech.map((category, i) => (
              <div key={i} className="tech-category fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                <h3 className="tech-category-name">{category.name}</h3>
                <div className="tech-tags">
                  {category.items.map((item, j) => (
                    <span key={j} className="tech-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="service-why">
        <div className="service-container">
          <div className="why-content fade-up">
            <h2 className="why-headline">Why Choose Pelquant for AI Integration?</h2>
            <div className="why-points">
              <div className="why-point">
                <span className="why-check">✓</span>
                <p><strong>Production Experience:</strong> We've deployed multiple production-ready AI systems across industries</p>
              </div>
              <div className="why-point">
                <span className="why-check">✓</span>
                <p><strong>AI-First Architecture:</strong> AI is the foundation, not a bolt-on feature</p>
              </div>
              <div className="why-point">
                <span className="why-check">✓</span>
                <p><strong>Domain Expertise:</strong> Experience across FinTech, HealthTech, Legal, and more</p>
              </div>
              <div className="why-point">
                <span className="why-check">✓</span>
                <p><strong>Outcome-Driven:</strong> We measure success by business impact, not features shipped</p>
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
            <Link to="/services/ai-automation" className="related-card fade-up">
              <h3>AI-Powered Automation</h3>
              <p>Eliminate repetitive tasks with intelligent automation systems</p>
              <span className="related-arrow">→</span>
            </Link>
            <Link to="/services/custom-software-development" className="related-card fade-up" style={{ animationDelay: '100ms' }}>
              <h3>Custom Software Development</h3>
              <p>Bespoke software solutions built from the ground up</p>
              <span className="related-arrow">→</span>
            </Link>
            <Link to="/services/devops-cloud" className="related-card fade-up" style={{ animationDelay: '200ms' }}>
              <h3>DevOps & Cloud</h3>
              <p>Scalable infrastructure for AI workloads</p>
              <span className="related-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="service-cta">
        <div className="service-cta-container fade-up">
          <h2 className="cta-headline">Ready to Build AI That Works?</h2>
          <p className="cta-subtext">
            Let's discuss your AI integration project and show you what's possible.
          </p>
          <Link to="/contact" className="btn-primary">Get Started →</Link>
        </div>
      </section>
    </div>
  );
}
