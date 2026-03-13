import { useState, useEffect } from 'react';
import './Hero.css';

const headlines = [
  'AI-First. Full-Stack. Growth-Obsessed.',
  'We Build Intelligent Software That Scales Your Business.',
  'Code Smarter. Grow Faster. Powered by AI.',
  'From First Line of Code to First Page of Google.',
  'AI-Powered Software. Performance-Driven Growth.',
  'Build with AI. Scale with Strategy.',
  'Full-Stack Development Meets AI-First Thinking.',
  'We Engineer Software. We Engineer Growth.',
  'Intelligent Systems. Measurable Results.',
  'Your AI Technology & Growth Partner.',
  'Software That Thinks. Marketing That Converts.',
  'Build Smarter Products. Acquire Better Customers.',
  'AI at the Core. Growth at the Forefront.',
  'We Don\'t Just Build Software — We Build Businesses.',
  'From Idea to AI-Powered Product to Market Leader.',
  'The Intersection of AI, Code & Performance.',
  'Technology That Scales. Marketing That Delivers.',
  'Smarter Software. Sharper Growth.',
  'AI-First Engineering for Companies Ready to Scale.',
  'We Build the Technology. We Drive the Growth.',
  'Full-Stack Development. AI Integration. Real Results.',
  'Code to Customer — We Own the Entire Journey.',
  'Intelligent Software Built for the Age of AI.',
  'Engineering Excellence Meets Growth Intelligence.',
  'AI-Powered Products. Performance-Driven Acquisition.',
  'We Build What Scales. We Market What Converts.',
  'Turn Your Vision Into an AI-Powered Product.',
  'Software + AI + Marketing — All Under One Roof.',
  'Build Faster. Rank Higher. Grow Smarter.',
  'The Only Partner You Need — From Code to Customer.'
];

export default function Hero() {
  const [currentHeadline, setCurrentHeadline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-glow"></div>
      <div className="hero-glow-2"></div>
      <div className="hero-grid"></div>
      
      <div className="hero-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      
      <div className="hero-content visible">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Enterprise AI & Digital Transformation
        </div>

        <h1 className="hero-headline">
          {headlines[currentHeadline]}
        </h1>

        <p className="hero-subheadline">
          Full-stack technology and growth solutions for enterprises across 12+ industries. From AI systems to market leadership.
        </p>

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

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">13</span>
            <span className="stat-label">Services</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number">12+</span>
            <span className="stat-label">Industries</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number">AI</span>
            <span className="stat-label">Powered</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
