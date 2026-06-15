import { useState, useEffect, useRef } from 'react';
import './Hero.css';

const headlines = [
  { line1: 'Build Smarter.', line2: 'Grow Faster with AI.' },
  { line1: 'From Code to Product.', line2: 'To the First Page.' },
  { line1: 'AI-First Engineering.', line2: 'Performance-Led Growth.' },
  { line1: 'One Partner.', line2: 'Every Capability.' },
  { line1: 'Intelligent Software.', line2: 'Measurable Outcomes.' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % headlines.length);
        setAnimating(false);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.2 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const h = headlines[current];

  return (
    <section className="hero">
      <div className="hero-grid" aria-hidden="true"></div>
      <div className="hero-orb hero-orb-1" aria-hidden="true"></div>
      <div className="hero-orb hero-orb-2" aria-hidden="true"></div>

      <div className="hero-inner">
        {/* ── LEFT ── */}
        <div className="hero-left">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Enterprise AI &amp; Digital Transformation
          </div>

          {/* Fixed-height headline container — prevents layout shift on rotation */}
          <div className="hero-headline-wrap">
            <h1 className={`hero-headline ${animating ? 'fade-out' : 'fade-in'}`}>
              {h.line1}
              <br />
              <span className="headline-accent">{h.line2}</span>
            </h1>
          </div>

          <p className="hero-sub">
            Full-stack technology and growth solutions for enterprises across
            12+ industries. From AI systems to market leadership —
            all under one roof.
          </p>

          {/* Social proof */}
          <div className="hero-proof">
            <div className="proof-faces">
              {['F','S','M','A'].map((l, i) => (
                <span key={i} className="face">{l}</span>
              ))}
            </div>
            <span>Trusted by <strong>50+</strong> growing businesses worldwide</span>
          </div>

          {/* CTAs */}
          <div className="hero-ctas">
            <button
              className="btn-primary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Building
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <button
              className="btn-ghost"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Services
            </button>
          </div>

          {/* Headline dots */}
          <div className="hero-dots">
            {headlines.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === current ? 'active' : ''}`}
                onClick={() => { setAnimating(true); setTimeout(() => { setCurrent(i); setAnimating(false); }, 300); }}
                aria-label={`Headline ${i + 1}`}
              />
            ))}
          </div>

          {/* Stats */}
          <div className="hero-stats" ref={statsRef}>
            {[
              { end: 13, suffix: '', label: 'Services' },
              { end: 12, suffix: '+', label: 'Industries' },
              { end: 100, suffix: '%', label: 'Cloud‑Native' },
              { end: 24, suffix: '/7', label: 'Support' },
            ].map((s, i) => (
              <div key={i} className="stat">
                {i > 0 && <div className="stat-sep" />}
                <div className="stat-inner">
                  <CountUp end={s.end} suffix={s.suffix} active={statsVisible} />
                  <span className="stat-label">{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT — Project showcase panel ── */}
        <div className="hero-right">
          {/* Recent work */}
          <div className="showcase-card">
            <div className="showcase-header">
              <span className="showcase-eyebrow">Recent Work</span>
              <span className="showcase-status"><span className="live-dot" />Live</span>
            </div>
            <div className="showcase-projects">
              <ShowcaseItem
                title="FinTech Lending Platform"
                tag="AI + Engineering"
                metric="+280% loan approvals"
              />
              <ShowcaseItem
                title="eCommerce Growth Engine"
                tag="Performance Marketing"
                metric="3.4× ROAS in 60 days"
              />
              <ShowcaseItem
                title="HealthTech EHR Migration"
                tag="DevOps + Cloud"
                metric="Zero-downtime cutover"
              />
            </div>
          </div>

          {/* Stack + outcome */}
          <div className="hero-meta-row">
            <div className="meta-block">
              <span className="meta-label">Stack</span>
              <div className="meta-pills">
                {['React','Next.js','Python','AWS','K8s'].map(t => (
                  <span key={t} className="pill">{t}</span>
                ))}
              </div>
            </div>
            <div className="meta-divider" />
            <div className="meta-block meta-outcome">
              <span className="meta-big">340%</span>
              <span className="meta-label">Avg. ROI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShowcaseItem({ title, tag, metric }) {
  return (
    <div className="showcase-item">
      <div className="showcase-item-top">
        <span className="showcase-item-title">{title}</span>
        <span className="showcase-item-tag">{tag}</span>
      </div>
      <span className="showcase-item-metric">{metric}</span>
    </div>
  );
}

function CountUp({ end, suffix, active }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let n = 0;
    const step = end / 40;
    const t = setInterval(() => {
      n = Math.min(n + step, end);
      setCount(Math.floor(n));
      if (n >= end) clearInterval(t);
    }, 30);
    return () => clearInterval(t);
  }, [active, end]);
  return <span className="stat-num">{count}{suffix}</span>;
}
