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
    const now = new Date();
    const minutes = now.getHours() * 60 + now.getMinutes();
    const index = Math.floor(minutes / 10) % headlines.length;
    setCurrentHeadline(index);
  }, []);

  return (
    <section className="hero">
      <div className="hero-glow"></div>
      <div className="hero-grid"></div>
      
      <div className="hero-content">
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
          <button className="btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Start Building
          </button>
          <button className="btn-ghost" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
            Explore Services
          </button>
        </div>

        <div className="hero-stats">
          <div className="stat">13 Services</div>
          <div className="stat-divider"></div>
          <div className="stat">12 Industries</div>
          <div className="stat-divider"></div>
          <div className="stat">AI-Powered</div>
          <div className="stat-divider"></div>
          <div className="stat">Enterprise-Grade</div>
          <div className="stat-divider"></div>
          <div className="stat">Global Scale</div>
        </div>
      </div>
    </section>
  );
}
