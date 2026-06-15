import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const process = [
  {
    number: '01',
    title: 'Discovery',
    desc: 'We map your tech stack, business goals, and market position to define the right path forward.',
  },
  {
    number: '02',
    title: 'Architecture',
    desc: 'We design scalable, AI-native systems aligned with your industry requirements and compliance needs.',
  },
  {
    number: '03',
    title: 'Build & Integrate',
    desc: 'We ship fast with quality — iterative development cycles, code reviews, and continuous deployment.',
  },
  {
    number: '04',
    title: 'Scale & Grow',
    desc: 'We drive adoption, optimize performance, and execute growth strategies that compound over time.',
  },
];

const stats = [
  { value: '13', label: 'Services' },
  { value: '12+', label: 'Industries' },
  { value: '98%', label: 'Retention' },
  { value: '340%', label: 'Avg. ROI' },
];

export default function About() {
  const sectionRef = useRef(null);
  const stepsRef = useRef([]);
  const statsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    [...stepsRef.current, ...statsRef.current].forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="about-bg-glow"></div>
      <div className="about-container">

        {/* Header */}
        <div className="about-header fade-up">
          <span className="section-label">WHO WE ARE</span>
          <h2 className="about-headline">One Partner.<br/>Every Capability.</h2>
          <p className="about-intro">
            We deliver enterprise-grade technology and growth solutions across 12 industries.
            From AI systems to performance marketing — we combine deep technical expertise
            with the domain knowledge that drives real results.
          </p>
        </div>

        {/* Stats Row */}
        <div className="about-stats">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="about-stat fade-up"
              ref={el => (statsRef.current[i] = el)}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="about-stat-value">{stat.value}</div>
              <div className="about-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Two-column: Process + Visual */}
        <div className="about-body">
          {/* Process Steps */}
          <div className="about-process">
            <h3 className="process-heading">How We Work</h3>
            <div className="process-steps">
              {process.map((step, i) => (
                <div
                  key={i}
                  className="process-step fade-up"
                  ref={el => (stepsRef.current[i] = el)}
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  <div className="step-number">{step.number}</div>
                  <div className="step-connector"></div>
                  <div className="step-content">
                    <div className="step-title">{step.title}</div>
                    <div className="step-desc">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="about-visual">
            <div className="visual-panel">
              <div className="panel-header">
                <div className="panel-dot green"></div>
                <span>Pelquant Intelligence Layer</span>
              </div>
              <div className="panel-body">
                <div className="capability-stack">
                  {[
                    { layer: 'AI Layer', items: ['LLMs', 'RAG', 'Agents'], color: '#FF6B2B' },
                    { layer: 'Application', items: ['APIs', 'SaaS', 'Mobile'], color: '#00D9FF' },
                    { layer: 'Infrastructure', items: ['AWS', 'K8s', 'CI/CD'], color: '#a855f7' },
                    { layer: 'Growth', items: ['SEO', 'Ads', 'Analytics'], color: '#10b981' },
                  ].map((row, i) => (
                    <div key={i} className="cap-row">
                      <div className="cap-layer" style={{ color: row.color }}>{row.layer}</div>
                      <div className="cap-items">
                        {row.items.map((item, j) => (
                          <span key={j} className="cap-item" style={{ borderColor: `${row.color}30` }}>{item}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="certifications">
                  {['SOC 2', 'HIPAA', 'PCI-DSS', 'ISO 27001'].map((cert, i) => (
                    <div key={i} className="cert-badge">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      </svg>
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="visual-quote">
              <div className="quote-mark">"</div>
              <p>We don't just build software — we build businesses.</p>
            </div>
          </div>
        </div>

        <div className="about-ctas fade-up">
          <Link to="/about" className="btn-primary">
            Learn More About Us
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
          <Link to="/solutions" className="btn-ghost">View Industry Solutions</Link>
        </div>
      </div>
    </section>
  );
}
