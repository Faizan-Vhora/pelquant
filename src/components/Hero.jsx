import { useState, useEffect, useRef } from 'react';
import './Hero.css';

const marqueeItems = [
  'AI & LLM Integration',
  'Custom Software',
  'Web & Mobile',
  'DevOps & Cloud',
  'SecOps & SIEM',
  'Technical SEO',
  'Paid Advertising',
  'Performance Marketing',
  'AI & LLM Integration',
  'Custom Software',
  'Web & Mobile',
  'DevOps & Cloud',
  'SecOps & SIEM',
  'Technical SEO',
  'Paid Advertising',
  'Performance Marketing',
];

const stats = [
  { end: 50,  suffix: '+',  label: 'Clients Served' },
  { end: 12,  suffix: '+',  label: 'Industries' },
  { end: 340, suffix: '%',  label: 'Avg. ROI' },
  { end: 24,  suffix: '/7', label: 'Support' },
];

export default function Hero() {
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.1 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow"  aria-hidden="true" />

      <div className="hero-inner">

        {/* Badge */}
        <div className="hero-badge">
          <span className="badge-dot" />
          Enterprise AI &amp; Digital Transformation
        </div>

        {/* Headline */}
        <h1 className="hero-headline">
          We Build the Software.
          <br />
          <span className="headline-accent">We Grow the Business.</span>
        </h1>

        {/* Sub */}
        <p className="hero-sub">
          From AI infrastructure to paid acquisition — one team owns
          the full journey. No handoffs, no gaps, no excuses.
        </p>

        {/* CTAs */}
        <div className="hero-ctas">
          <button
            className="btn-primary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start a Project
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <button
            className="btn-ghost"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            See What We Do
          </button>
        </div>

        {/* Social proof */}
        <div className="hero-proof">
          <div className="proof-faces">
            {['F', 'S', 'M', 'A', 'R'].map((l, i) => (
              <span key={i} className="face">{l}</span>
            ))}
          </div>
          <span>Trusted by <strong>50+ businesses</strong> across 12 industries</span>
        </div>

        {/* Stats */}
        <div className="hero-stats" ref={statsRef}>
          {stats.map((s, i) => (
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

      {/* Service marquee — full width, outside inner */}
      <div className="hero-marquee" aria-hidden="true">
        <div className="marquee-track">
          {marqueeItems.map((item, i) => (
            <span key={i} className="marquee-item">
              {item}
              <span className="marquee-sep">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
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
