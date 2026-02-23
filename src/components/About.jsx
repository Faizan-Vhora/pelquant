import './About.css';

const features = [
  'AI-First',
  'Real Products Built',
  'Tech + Marketing',
  'Outcome-Driven'
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-accent-line"></div>
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-headline">We Don't Add AI. We Build With It.</h2>
          
          <div className="about-text">
            <p>
              At Pelquant, AI isn't a feature we bolt on—it's the foundation of everything we create. 
              We architect intelligent systems that learn, adapt, and scale with your business.
            </p>
            <p>
              Our approach combines deep technical expertise with strategic growth thinking. We don't 
              just build software; we engineer competitive advantages that compound over time.
            </p>
            <p>
              From startups finding product-market fit to enterprises scaling globally, we've been 
              the technical partner that turns ambitious visions into market-leading realities.
            </p>
            <p>
              We measure success not in features shipped, but in outcomes delivered—revenue growth, 
              operational efficiency, and sustainable competitive moats built through technology.
            </p>
          </div>

          <div className="about-features">
            {features.map((feature, i) => (
              <div key={i} className="feature-item">
                <svg className="check-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-visual">
          <div className="visual-orb"></div>
          <div className="journey-card card-1">
            <div className="card-label">Startups</div>
            <div className="card-line"></div>
          </div>
          <div className="journey-card card-2">
            <div className="card-label">Scale-ups</div>
            <div className="card-line"></div>
          </div>
          <div className="journey-card card-3">
            <div className="card-label">Enterprises</div>
            <div className="card-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
