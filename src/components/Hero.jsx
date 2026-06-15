import { useState, useEffect, useRef } from 'react';
import './Hero.css';

const headlines = [
  { pre: 'Build Smarter.', accent: 'Grow Faster.', post: 'Powered by AI.' },
  { pre: 'From First Line of Code', accent: null, post: 'to First Page of Google.' },
  { pre: 'AI-First Engineering.', accent: 'Performance-Driven', post: 'Growth.' },
  { pre: 'One Partner.', accent: 'Every Capability.', post: 'Real Results.' },
  { pre: 'Intelligent Software.', accent: null, post: 'Measurable Outcomes.' },
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
      {/* Subtle grid background */}
      <div className="hero-grid" aria-hidden="true"></div>
      {/* Soft gradient orbs */}
      <div className="hero-orb hero-orb-1" aria-hidden="true"></div>
      <div className="hero-orb hero-orb-2" aria-hidden="true"></div>

      <div className="hero-inner">
        {/* ── LEFT ── */}
        <div className="hero-left">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Enterprise AI &amp; Digital Transformation
          </div>

          <h1 className={`hero-headline ${animating ? 'fade-out' : 'fade-in'}`}>
            {h.pre}{' '}
            {h.accent && <span className="headline-accent">{h.accent}</span>}
            {h.accent && ' '}
            {h.post}
          </h1>

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

        {/* ── RIGHT — Dashboard Panel ── */}
        <div className="hero-right">
          <div className="dashboard-card">
            <div className="dash-header">
              <div className="dots-row">
                <span className="dot-r" /><span className="dot-y" /><span className="dot-g" />
              </div>
              <span className="dash-title">AI DASHBOARD</span>
            </div>
            <div className="dash-body">
              <Row label="Status"         value="● Online"    cls="green" />
              <Row label="Active Projects" value="24"          cls="" />
              <Row label="AI Requests/s"  value="1,847"       cls="orange" />
              <Row label="Uptime"         value="99.97%"      cls="blue" />
              <div className="mini-bars">
                {[70,45,85,55,90,60,80].map((h,i)=>(
                  <div key={i} className="bar" style={{ height:`${h}%`, animationDelay:`${i*0.1}s` }} />
                ))}
              </div>
            </div>
          </div>

          <div className="stack-card">
            <span className="stack-label">TECH STACK</span>
            <div className="stack-pills">
              {['React','Next.js','Python','LangChain','OpenAI','AWS','Kubernetes','PostgreSQL'].map(t => (
                <span key={t} className="pill">{t}</span>
              ))}
            </div>
          </div>

          <div className="live-card">
            <span className="live-indicator" />
            <div>
              <div className="live-label">Avg. ROI Delivered</div>
              <div className="live-value">340%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value, cls }) {
  return (
    <div className="dash-row">
      <span className="dash-key">{label}</span>
      <span className={`dash-val ${cls}`}>{value}</span>
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
