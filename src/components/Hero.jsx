import { useState, useEffect, useRef } from 'react';
import CountUp from './CountUp';
import useReducedMotion from '../hooks/useReducedMotion';
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

function scrollToSection(id) {
  const target = document.getElementById(id);
  if (!target) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
}

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [paused, setPaused] = useState(false);
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const reducedMotion = useReducedMotion();

  const goTo = (index) => {
    if (reducedMotion) {
      setCurrent(index);
      return;
    }
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 300);
  };

  // Auto-rotation stops for reduced-motion users, and while the reader is
  // hovering or keyboard-focused inside the headline block — otherwise the
  // copy you are trying to read swaps out from under you.
  useEffect(() => {
    if (reducedMotion || paused) return undefined;
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % headlines.length);
        setAnimating(false);
      }, 300);
    }, 5500);
    return () => clearInterval(interval);
  }, [reducedMotion, paused]);

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
      {/* Banner. Decorative, so it carries an empty alt — the headline already
          says what the section is about. fetchPriority high because this is
          the LCP element; width/height are set to reserve the box and avoid
          a layout shift while it loads. */}
      <picture className="hero-banner" aria-hidden="true">
        <source
          type="image/webp"
          srcSet="/hero/pelhero-828.webp 828w, /hero/pelhero-1280.webp 1280w, /hero/pelhero-1682.webp 1682w"
          sizes="100vw"
        />
        <img
          src="/hero/pelhero-1682.jpg"
          srcSet="/hero/pelhero-828.jpg 828w, /hero/pelhero-1280.jpg 1280w, /hero/pelhero-1682.jpg 1682w"
          sizes="100vw"
          width="1682"
          height="935"
          alt=""
          fetchPriority="high"
          decoding="async"
        />
      </picture>
      <div className="hero-banner-scrim" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow"  aria-hidden="true" />

      <div className="hero-inner">

        {/* Badge */}
        <div className="hero-badge">
          <span className="badge-dot" />
          Enterprise AI &amp; Digital Transformation
        </div>

        {/* Headline — rotates on a timer; the wrapper reserves two lines so the
            swap never pushes the CTAs and stats down the page. */}
        <div
          className="hero-headline-wrap"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <h1 className={`hero-headline ${animating ? 'fade-out' : 'fade-in'}`}>
            {headlines[current].line1}
            <br />
            <span className="headline-accent">{headlines[current].line2}</span>
          </h1>
        </div>

        {/* Dots */}
        <div
          className="hero-dots"
          role="tablist"
          aria-label="Choose a headline"
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {headlines.map((headline, i) => (
            <button
              key={headline.line1}
              type="button"
              role="tab"
              className={`dot ${i === current ? 'active' : ''}`}
              onClick={() => goTo(i)}
              aria-selected={i === current}
              aria-label={`${headline.line1} ${headline.line2}`}
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
          <button type="button" className="btn-primary" onClick={() => scrollToSection('contact')}>
            Start a Project
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <button type="button" className="btn-ghost" onClick={() => scrollToSection('services')}>
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
                <span className="stat-num">
                  <CountUp end={s.end} suffix={s.suffix} active={statsVisible} />
                </span>
                <span className="stat-label">{s.label}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service marquee — full width, outside inner. Decorative duplicate of
          the services nav, so it stays out of the accessibility tree. */}
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
