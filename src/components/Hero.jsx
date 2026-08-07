import { useState, useEffect, useRef } from 'react';
import './Hero.css';

const headlines = [
  { line1: 'We Build the Software.', line2: 'We Grow the Business.' },
  { line1: 'AI-First Engineering.', line2: 'Performance-Led Growth.' },
  { line1: 'From Code to Product.', line2: 'To the First Page.' },
  { line1: 'One Partner.', line2: 'Every Capability.' },
  { line1: 'Intelligent Software.', line2: 'Measurable Outcomes.' },
];

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
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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

        {/* Headline — rotates every 4s, fixed-height wrapper prevents layout shift */}
        <div className="hero-headline-wrap">
          <h1 className={`hero-headline ${animating ? 'fade-out' : 'fade-in'}`}>
            {headlines[current].line1}
            <br />
            <span className="headline-accent">{headlines[current].line2}</span>
          </h1>
        </div>

        {/* Dots */}
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

      {/* Banner slot — full-width, reserved for a custom animated banner.
          Empty by default so it's a no-op until content is added here. */}
      <div id="hero-banner-slot" className="hero-banner-slot" aria-hidden="true"></div>

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
