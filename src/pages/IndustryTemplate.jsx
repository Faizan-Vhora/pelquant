import { Link } from 'react-router-dom';
import { Icons } from '../components/Icons';
import './SolutionsPage.css';

// Ordered keyword → icon rules, in the same order the previous if/else chain
// tested them, so every page keeps the icon it had. Two tests in that chain
// were unreachable — a second `predictive` and a second `analytics`, both
// already matched by an earlier branch — and are dropped here.
//
// A capability can also name its own icon (`icon: 'Shield'`), which skips the
// guessing entirely; keyword matching is a fallback, not the contract.
const ICON_RULES = [
  [['fraud', 'detection'], Icons.Shield],
  [['clinical', 'decision'], Icons.Target],
  [['image', 'vision'], Icons.Eye],
  [['predictive', 'analytics'], Icons.TrendingUp],
  [['nlp', 'language', 'notes'], Icons.MessageCircle],
  [['recommendation', 'personalization'], Icons.Target],
  [['search'], Icons.Search],
  [['pricing', 'dynamic'], Icons.DollarSign],
  [['inventory', 'demand'], Icons.Chart],
  [['route', 'optimization'], Icons.Layers],
  [['eta'], Icons.Clock],
  [['adaptive', 'learning'], Icons.TrendingUp],
  [['tutor'], Icons.MessageCircle],
  [['grading', 'automated'], Icons.Target],
  [['contract', 'review'], Icons.Search],
  [['research'], Icons.BookOpen],
  [['valuation', 'property'], Icons.DollarSign],
  [['maintenance'], Icons.Settings],
  [['resume', 'screening'], Icons.Search],
  [['chatbot', 'hr'], Icons.MessageCircle],
  [['attrition'], Icons.TrendingUp],
  [['citizen', 'triage'], Icons.Users],
  [['smart city', 'traffic'], Icons.Layers],
  [['writing', 'content'], Icons.Edit],
  [['embedded'], Icons.Chart],
  [['workflow', 'automation'], Icons.Cpu],
  [['moderation'], Icons.Shield],
  [['transcription', 'caption'], Icons.MessageCircle],
  [['highlight', 'clip'], Icons.Zap],
  [['quality', 'qc'], Icons.Eye],
  [['scheduling', 'production'], Icons.Clock],
  [['energy'], Icons.Zap],
];

function iconFor(capability) {
  if (capability.icon && Icons[capability.icon]) return Icons[capability.icon];
  const title = capability.title.toLowerCase();
  const rule = ICON_RULES.find(([keywords]) => keywords.some((k) => title.includes(k)));
  return rule ? rule[1] : Icons.Target;
}

// Capped so the last row in a long list doesn't sit blank while the stagger
// catches up. Applied to a wrapper, never the card: transition-delay governs
// every transition on an element, so on the card it would delay hover too.
const stagger = (i, step = 50) => ({ transitionDelay: `${Math.min(i, 7) * step}ms` });

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function IndustryTemplate({
  industry,
  tagline,
  description,
  solutions,
  aiCapabilities,
  compliance,
  solutionsHeading,
  aiTag = 'AI CAPABILITIES',
  aiHeading = 'AI & Automation',
  complianceTag = 'COMPLIANCE & STANDARDS',
  complianceHeading = 'Regulatory Frameworks',
  ctaSubtext = 'Let’s discuss your industry-specific challenges and build solutions that work.',
}) {
  return (
    <div className="solutions-page">
      <section className="solutions-hero">
        <div className="solutions-hero-container">
          <Link to="/solutions" className="breadcrumb fade-up">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Solutions
          </Link>
          <span className="solutions-tag fade-up">{industry.toUpperCase()}</span>
          <h1 className="solutions-hero-headline fade-up">{tagline}</h1>
          <p className="solutions-hero-desc fade-up">{description}</p>
          <div className="solutions-hero-actions fade-up">
            <Link to="/contact" className="btn-primary">
              Talk to us about {industry}
              <ArrowRight />
            </Link>
            <Link to="/services" className="btn-ghost">See our services</Link>
          </div>
        </div>
      </section>

      <section className="solutions-content">
        <div className="solutions-container">
          <span className="section-tag fade-up">WHAT WE BUILD</span>
          <h2 className="section-headline fade-up">
            {solutionsHeading || `${industry} Solutions`}
          </h2>
          {/* A real list: these were divs, so assistive tech got no count and no
              item boundaries, and each row began with a spoken "right arrow". */}
          <ul className="solutions-list" role="list">
            {solutions.map((solution, i) => (
              <li className="solution-row fade-up" key={solution} style={stagger(i)}>
                <div className="solution-item">
                  <span className="solution-bullet" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                  <p>{solution}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {aiCapabilities && (
        <section className="ai-section">
          <div className="solutions-container">
            <span className="section-tag fade-up">{aiTag}</span>
            <h2 className="section-headline fade-up">{aiHeading}</h2>
            <div className="ai-grid">
              {aiCapabilities.map((capability, i) => {
                const Icon = iconFor(capability);
                return (
                  <div className="ai-card-wrap fade-up" key={capability.title} style={stagger(i, 100)}>
                    <div className="ai-card">
                      <div className="ai-card-icon" aria-hidden="true"><Icon /></div>
                      <h3>{capability.title}</h3>
                      <p>{capability.desc}</p>
                    </div>
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
            <span className="section-tag fade-up">{complianceTag}</span>
            <h2 className="section-headline fade-up">{complianceHeading}</h2>
            <ul className="compliance-list" role="list">
              {compliance.map((item, i) => (
                <li className="compliance-row fade-up" key={item} style={stagger(i)}>
                  <div className="compliance-item">
                    <span className="compliance-check" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    <p>{item}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="solutions-cta">
        <div className="solutions-cta-container fade-up">
          <h2 className="cta-headline">Ready to Build Your {industry} Solution?</h2>
          <p className="cta-subtext">{ctaSubtext}</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-primary">
              Get Started
              <ArrowRight />
            </Link>
            <Link to="/solutions" className="btn-ghost">Explore other industries</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
