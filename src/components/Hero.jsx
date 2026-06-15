import { useState, useEffect, useRef } from 'react';
import './Hero.css';

const headlines = [
  'AI-First. Full-Stack. Growth-Obsessed.',
  'We Build Intelligent Software That Scales.',
  'Code Smarter. Grow Faster. Powered by AI.',
  'From First Line of Code to First Page of Google.',
  'AI-Powered Software. Performance-Driven Growth.',
  'Build with AI. Scale with Strategy.',
  'Full-Stack Development Meets AI-First Thinking.',
  'We Engineer Software. We Engineer Growth.',
  'Intelligent Systems. Measurable Results.',
  'Your AI Technology & Growth Partner.',
];

const techStack = ['React', 'Next.js', 'Python', 'LangChain', 'OpenAI', 'AWS', 'Kubernetes', 'PostgreSQL'];
const liveMetrics = [
  { label: 'AI Models Deployed', value: '200+' },
  { label: 'Avg. ROI Delivered', value: '340%' },
  { label: 'Client Retention', value: '98%' },
];

export default function Hero() {
  const [currentHeadline, setCurrentHeadline] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [metricIndex, setMetricIndex] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  // Typewriter effect for headlines
  useEffect(() => {
    const target = headlines[currentHeadline];
    let i = 0;
    setDisplayText('');
    setIsTyping(true);

    const typeInterval = setInterval(() => {
      if (i <= target.length) {
        setDisplayText(target.slice(0, i));
        i++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
      }
    }, 38);

    return () => clearInterval(typeInterval);
  }, [currentHeadline]);

  // Rotate headlines
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Rotate live metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setMetricIndex((prev) => (prev + 1) % liveMetrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Stats counter animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero">
      <div className="hero-glow"></div>
      <div className="hero-glow-2"></div>
      <div className="hero-grid"></div>
      <div className="hero-particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`particle particle-${(i % 5) + 1}`}></div>
        ))}
      </div>

      <div className="hero-inner">
        {/* Left Column */}
        <div className="hero-content visible">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Enterprise AI & Digital Transformation
            <span className="badge-live">LIVE</span>
          </div>

          <h1 className="hero-headline">
            {displayText}
            <span className={`cursor ${isTyping ? 'blinking' : 'hidden'}`}>|</span>
          </h1>

          <p className="hero-subheadline">
            Full-stack technology and growth solutions for enterprises across 12+ industries.
            From AI systems to market leadership — all under one roof.
          </p>

          <div className="hero-social-proof">
            <div className="proof-avatars">
              {['F', 'S', 'M', 'A'].map((l, i) => (
                <div key={i} className="avatar">{l}</div>
              ))}
            </div>
            <span className="proof-text">Trusted by 50+ growing businesses worldwide</span>
          </div>

          <div className="hero-ctas">
            <button className="btn-primary btn-large" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Start Building
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <button className="btn-ghost btn-large" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Services
            </button>
          </div>

          <div className="headline-dots">
            {headlines.slice(0, 5).map((_, i) => (
              <button
                key={i}
                className={`dot ${i === currentHeadline % 5 ? 'active' : ''}`}
                onClick={() => setCurrentHeadline(i)}
                aria-label={`View headline ${i + 1}`}
              />
            ))}
          </div>

          <div className="hero-stats" ref={statsRef}>
            {[
              { number: 13, suffix: '', label: 'Services' },
              { number: 12, suffix: '+', label: 'Industries' },
              { number: 100, suffix: '%', label: 'AI-Native' },
              { number: 24, suffix: '/7', label: 'Support' },
            ].map((stat, i) => (
              <div key={i} className="stat-item">
                {i > 0 && <div className="stat-divider"></div>}
                <div className="stat">
                  <CountUp end={stat.number} suffix={stat.suffix} active={statsVisible} />
                  <span className="stat-label">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column — Visual Panel */}
        <div className="hero-visual">
          <div className="visual-card main-card">
            <div className="card-header">
              <div className="traffic-lights">
                <span className="tl red"></span>
                <span className="tl yellow"></span>
                <span className="tl green"></span>
              </div>
              <span className="card-tag">AI Dashboard</span>
            </div>
            <div className="card-body">
              <div className="metric-row">
                <span className="metric-key">Status</span>
                <span className="metric-val online">● Online</span>
              </div>
              <div className="metric-row">
                <span className="metric-key">Active Projects</span>
                <span className="metric-val">24</span>
              </div>
              <div className="metric-row">
                <span className="metric-key">AI Requests/s</span>
                <span className="metric-val accent">1,847</span>
              </div>
              <div className="metric-row">
                <span className="metric-key">Uptime</span>
                <span className="metric-val success">99.97%</span>
              </div>
              <div className="mini-bars">
                {[90, 65, 80, 45, 95, 70].map((h, i) => (
                  <div key={i} className="bar" style={{ height: `${h}%`, animationDelay: `${i * 0.15}s` }}></div>
                ))}
              </div>
            </div>
          </div>

          <div className="visual-card stack-card">
            <div className="stack-label">Tech Stack</div>
            <div className="stack-pills">
              {techStack.map((tech, i) => (
                <span key={i} className="stack-pill" style={{ animationDelay: `${i * 0.1}s` }}>{tech}</span>
              ))}
            </div>
          </div>

          <div className="visual-card metric-card">
            <div className="live-dot"></div>
            <div className="live-metric-label">{liveMetrics[metricIndex].label}</div>
            <div className="live-metric-value">{liveMetrics[metricIndex].value}</div>
          </div>

          <div className="visual-orb"></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-hint">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}

function CountUp({ end, suffix, active }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, end]);

  return (
    <span className="stat-number">{count}{suffix}</span>
  );
}
