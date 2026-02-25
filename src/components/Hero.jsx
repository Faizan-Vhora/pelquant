import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow"></div>
      <div className="hero-grid"></div>
      
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          AI-First Technology & Growth Partner
        </div>

        <h1 className="hero-headline">
          Frontier <span className="highlight">AI</span>. Intelligent Growth.
        </h1>

        <p className="hero-subheadline">
          Transforming businesses with cutting-edge AI solutions and strategic growth engineering
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
          <div className="stat">50+ Projects</div>
          <div className="stat-divider"></div>
          <div className="stat">AI-First</div>
          <div className="stat-divider"></div>
          <div className="stat">Global Clients</div>
          <div className="stat-divider"></div>
          <div className="stat">Full-Stack</div>
          <div className="stat-divider"></div>
          <div className="stat">24/7 Ops</div>
        </div>
      </div>
    </section>
  );
}
