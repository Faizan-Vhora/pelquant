import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../components/Icons';
import './SolutionsPage.css';

export default function IndustryTemplate({ industry, tagline, description, solutions, aiCapabilities, compliance }) {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-up').forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="solutions-page">
      <section className="solutions-hero">
        <div className="solutions-hero-container">
          <Link to="/solutions" className="breadcrumb fade-up">← Back to Solutions</Link>
          <span className="solutions-tag fade-up">{industry.toUpperCase()}</span>
          <h1 className="solutions-hero-headline fade-up">
            {tagline}
          </h1>
          <p className="solutions-hero-desc fade-up">
            {description}
          </p>
        </div>
      </section>

      <section className="solutions-content">
        <div className="solutions-container">
          <span className="section-tag fade-up">WHAT WE BUILD</span>
          <h2 className="section-headline fade-up">
            {industry} Solutions
          </h2>
          <div className="solutions-list">
            {solutions.map((solution, i) => (
              <div key={i} className="solution-item fade-up" style={{ animationDelay: `${i * 50}ms` }}>
                <span className="solution-bullet">→</span>
                <p>{solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {aiCapabilities && (
        <section className="ai-section">
          <div className="solutions-container">
            <span className="section-tag fade-up">AI CAPABILITIES</span>
            <h2 className="section-headline fade-up">
              AI & Automation
            </h2>
            <div className="ai-grid">
              {aiCapabilities.map((capability, i) => {
                // Select icon based on capability title keywords
                let IconComponent = Icons.Target; // default
                const title = capability.title.toLowerCase();
                
                if (title.includes('fraud') || title.includes('detection')) IconComponent = Icons.Shield;
                else if (title.includes('clinical') || title.includes('decision')) IconComponent = Icons.Target;
                else if (title.includes('image') || title.includes('vision')) IconComponent = Icons.Eye;
                else if (title.includes('predictive') || title.includes('analytics')) IconComponent = Icons.TrendingUp;
                else if (title.includes('nlp') || title.includes('language') || title.includes('notes')) IconComponent = Icons.MessageCircle;
                else if (title.includes('recommendation') || title.includes('personalization')) IconComponent = Icons.Target;
                else if (title.includes('search')) IconComponent = Icons.Search;
                else if (title.includes('pricing') || title.includes('dynamic')) IconComponent = Icons.DollarSign;
                else if (title.includes('inventory') || title.includes('demand')) IconComponent = Icons.Chart;
                else if (title.includes('route') || title.includes('optimization')) IconComponent = Icons.Layers;
                else if (title.includes('eta') || title.includes('predictive')) IconComponent = Icons.Clock;
                else if (title.includes('adaptive') || title.includes('learning')) IconComponent = Icons.TrendingUp;
                else if (title.includes('tutor') || title.includes('ai tutor')) IconComponent = Icons.MessageCircle;
                else if (title.includes('grading') || title.includes('automated')) IconComponent = Icons.Target;
                else if (title.includes('contract') || title.includes('review')) IconComponent = Icons.Search;
                else if (title.includes('research')) IconComponent = Icons.BookOpen;
                else if (title.includes('valuation') || title.includes('property')) IconComponent = Icons.DollarSign;
                else if (title.includes('maintenance')) IconComponent = Icons.Settings;
                else if (title.includes('resume') || title.includes('screening')) IconComponent = Icons.Search;
                else if (title.includes('chatbot') || title.includes('hr')) IconComponent = Icons.MessageCircle;
                else if (title.includes('attrition')) IconComponent = Icons.TrendingUp;
                else if (title.includes('citizen') || title.includes('triage')) IconComponent = Icons.Users;
                else if (title.includes('smart city') || title.includes('traffic')) IconComponent = Icons.Layers;
                else if (title.includes('writing') || title.includes('content')) IconComponent = Icons.Edit;
                else if (title.includes('embedded') || title.includes('analytics')) IconComponent = Icons.Chart;
                else if (title.includes('workflow') || title.includes('automation')) IconComponent = Icons.Cpu;
                else if (title.includes('moderation')) IconComponent = Icons.Shield;
                else if (title.includes('transcription') || title.includes('caption')) IconComponent = Icons.MessageCircle;
                else if (title.includes('highlight') || title.includes('clip')) IconComponent = Icons.Zap;
                else if (title.includes('quality') || title.includes('qc')) IconComponent = Icons.Eye;
                else if (title.includes('scheduling') || title.includes('production')) IconComponent = Icons.Clock;
                else if (title.includes('energy')) IconComponent = Icons.Zap;
                
                return (
                  <div key={i} className="ai-card fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                    <div className="ai-card-icon">
                      <IconComponent />
                    </div>
                    <h3>{capability.title}</h3>
                    <p>{capability.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {compliance && (
        <section className="compliance-section">
          <div className="solutions-container">
            <span className="section-tag fade-up">COMPLIANCE & STANDARDS</span>
            <h2 className="section-headline fade-up">
              Regulatory Frameworks
            </h2>
            <div className="compliance-list">
              {compliance.map((item, i) => (
                <div key={i} className="compliance-item fade-up" style={{ animationDelay: `${i * 50}ms` }}>
                  <span className="compliance-check">✓</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="solutions-cta">
        <div className="solutions-cta-container fade-up">
          <h2 className="cta-headline">Ready to Build Your {industry} Solution?</h2>
          <p className="cta-subtext">
            Let's discuss your industry-specific challenges and build solutions that work.
          </p>
          <Link to="/contact" className="btn-primary">Get Started →</Link>
        </div>
      </section>
    </div>
  );
}
