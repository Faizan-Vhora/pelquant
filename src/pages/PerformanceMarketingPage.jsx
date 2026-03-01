import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../components/Icons';
import './ServicePage.css';

export default function PerformanceMarketingPage() {
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

  const process = [
    {
      num: '01',
      title: 'Growth Audit & Funnel Analysis',
      desc: 'We map your entire customer acquisition funnel — from first touch to purchase and retention — identifying conversion rate leaks, drop-off points, and growth bottlenecks.'
    },
    {
      num: '02',
      title: 'Attribution Model Design',
      desc: 'We design a full multi-touch attribution model using GA4, Northbeam, Triple Whale, or custom data warehouse solutions to accurately credit each channel\'s contribution to revenue.'
    },
    {
      num: '03',
      title: 'Unit Economics Modeling',
      desc: 'We model your LTV, CAC, payback period, and contribution margins at a channel and cohort level — giving you a clear view of which growth investments are actually profitable.'
    },
    {
      num: '04',
      title: 'CRO (Conversion Rate Optimization)',
      desc: 'Heuristic analysis, user session recordings, heatmaps, and structured A/B tests on landing pages, checkout flows, and onboarding sequences.'
    },
    {
      num: '05',
      title: 'Growth Experiments Roadmap',
      desc: 'A structured experimentation backlog prioritized by expected impact and effort — enabling systematic, data-driven growth rather than one-off campaign launches.'
    },
    {
      num: '06',
      title: 'Channel Mix Optimization',
      desc: 'Continuous rebalancing of budget across channels based on performance data, incrementality testing, and market saturation signals.'
    },
    {
      num: '07',
      title: 'Retention & LTV Programs',
      desc: 'Email lifecycle automation, loyalty programs, win-back campaigns, and upsell sequences to maximize revenue per customer — often the highest-ROI growth lever.'
    },
    {
      num: '08',
      title: 'Growth Reporting & Executive Dashboards',
      desc: 'Real-time dashboards connecting marketing activity to business KPIs: revenue, CAC, LTV, MoM growth, and marketing efficiency ratio (MER).'
    }
  ];

  const channels = [
    { name: 'Paid Search', desc: 'Google Ads, Bing Ads' },
    { name: 'Paid Social', desc: 'Meta, LinkedIn, TikTok' },
    { name: 'Organic Search', desc: 'SEO & Content Marketing' },
    { name: 'Email Marketing', desc: 'Lifecycle & Campaigns' },
    { name: 'Affiliate Marketing', desc: 'Partner & Referral Programs' },
    { name: 'Content Marketing', desc: 'Blog, Video, Podcasts' }
  ];

  const metrics = [
    {
      name: 'CAC',
      full: 'Customer Acquisition Cost',
      desc: 'Total marketing spend divided by new customers'
    },
    {
      name: 'LTV',
      full: 'Lifetime Value',
      desc: 'Total revenue expected from a customer over their lifetime'
    },
    {
      name: 'LTV:CAC',
      full: 'LTV to CAC Ratio',
      desc: 'Healthy ratio is 3:1 or higher'
    },
    {
      name: 'Payback Period',
      full: 'Time to Recover CAC',
      desc: 'How long it takes to recover acquisition cost'
    },
    {
      name: 'MER',
      full: 'Marketing Efficiency Ratio',
      desc: 'Total revenue divided by total marketing spend'
    },
    {
      name: 'ROAS',
      full: 'Return on Ad Spend',
      desc: 'Revenue generated per dollar spent on ads'
    }
  ];

  return (
    <div className="service-page">
      {/* Hero */}
      <section className="service-hero">
        <div className="service-hero-container">
          <Link to="/services" className="breadcrumb fade-up">← Back to Services</Link>
          <span className="service-tag fade-up">GROWTH STRATEGY</span>
          <h1 className="service-hero-headline fade-up">
            Performance Marketing
          </h1>
          <p className="service-hero-desc fade-up">
            Performance marketing is the strategic layer that ties all channels together — building a growth 
            system where every dollar of marketing spend is tracked to business outcomes. We build the frameworks, 
            attribution systems, and optimization processes that turn marketing from a cost center into a revenue engine.
          </p>
          <div className="service-hero-cta fade-up">
            <Link to="/contact" className="btn-primary">Build Your Growth System →</Link>
            <a href="#process" className="btn-ghost">See Our Process</a>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="service-benefits">
        <div className="service-container">
          <div className="benefits-grid">
            <div className="benefit-card fade-up">
              <div className="benefit-icon"><Icons.Chart /></div>
              <h3>Full Attribution</h3>
              <p>Know exactly which channels and campaigns drive revenue, not just clicks.</p>
            </div>
            <div className="benefit-card fade-up" style={{ animationDelay: '100ms' }}>
              <div className="benefit-icon"><Icons.DollarSign /></div>
              <h3>Profitable Growth</h3>
              <p>Optimize for unit economics and LTV:CAC ratio, not vanity metrics.</p>
            </div>
            <div className="benefit-card fade-up" style={{ animationDelay: '200ms' }}>
              <div className="benefit-icon"><Icons.Target /></div>
              <h3>Systematic Testing</h3>
              <p>Structured experimentation framework that compounds learning over time.</p>
            </div>
            <div className="benefit-card fade-up" style={{ animationDelay: '300ms' }}>
              <div className="benefit-icon"><Icons.TrendingUp /></div>
              <h3>Scalable Systems</h3>
              <p>Build growth systems that scale predictably with budget increases.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="service-process" id="process">
        <div className="service-container">
          <span className="section-tag fade-up">OUR PROCESS</span>
          <h2 className="section-headline fade-up">
            Step-by-Step <span className="orange-text">Growth Strategy</span>
          </h2>
          <div className="process-timeline">
            {process.map((step, i) => (
              <div key={i} className="process-item fade-up" style={{ animationDelay: `${i * 50}ms` }}>
                <div className="process-number">{step.num}</div>
                <div className="process-content">
                  <h3 className="process-title">{step.title}</h3>
                  <p className="process-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Channels */}
      <section className="service-products">
        <div className="service-container">
          <span className="section-tag fade-up">CHANNELS WE OPTIMIZE</span>
          <h2 className="section-headline fade-up">
            Multi-Channel Growth
          </h2>
          <div className="channels-grid">
            {channels.map((channel, i) => (
              <div key={i} className="channel-card fade-up" style={{ animationDelay: `${i * 50}ms` }}>
                <h3>{channel.name}</h3>
                <p>{channel.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="service-pm-metrics">
        <div className="service-container">
          <span className="section-tag fade-up">KEY METRICS</span>
          <h2 className="section-headline fade-up">
            What We <span className="orange-text">Measure & Optimize</span>
          </h2>
          <div className="pm-metrics-grid">
            {metrics.map((metric, i) => (
              <div key={i} className="pm-metric-card fade-up" style={{ animationDelay: `${i * 50}ms` }}>
                <div className="pm-metric-name">{metric.name}</div>
                <div className="pm-metric-full">{metric.full}</div>
                <div className="pm-metric-desc">{metric.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Framework */}
      <section className="service-framework">
        <div className="service-container">
          <div className="framework-content fade-up">
            <h2>The Growth Framework</h2>
            <p>
              We don't just run campaigns — we build complete growth systems with clear feedback loops and 
              compounding improvements.
            </p>
            <div className="framework-steps">
              <div className="framework-step">
                <div className="step-icon"><Icons.Target /></div>
                <h3>Hypothesis</h3>
                <p>Identify growth opportunities based on data</p>
              </div>
              <div className="framework-arrow">→</div>
              <div className="framework-step">
                <div className="step-icon"><Icons.Search /></div>
                <h3>Experiment</h3>
                <p>Design and run controlled tests</p>
              </div>
              <div className="framework-arrow">→</div>
              <div className="framework-step">
                <div className="step-icon"><Icons.Chart /></div>
                <h3>Measure</h3>
                <p>Analyze results with statistical rigor</p>
              </div>
              <div className="framework-arrow">→</div>
              <div className="framework-step">
                <div className="step-icon"><Icons.Rocket /></div>
                <h3>Scale</h3>
                <p>Double down on winners, kill losers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="service-why">
        <div className="service-container">
          <div className="why-content fade-up">
            <h2 className="why-headline">Why Choose Pelquant for Performance Marketing?</h2>
            <div className="why-points">
              <div className="why-point">
                <span className="why-check">✓</span>
                <p><strong>Full-Stack Growth:</strong> We handle strategy, execution, and optimization across all channels</p>
              </div>
              <div className="why-point">
                <span className="why-check">✓</span>
                <p><strong>Data Infrastructure:</strong> We build proper attribution and analytics from day one</p>
              </div>
              <div className="why-point">
                <span className="why-check">✓</span>
                <p><strong>Unit Economics Focus:</strong> We optimize for profitability, not just growth</p>
              </div>
              <div className="why-point">
                <span className="why-check">✓</span>
                <p><strong>Systematic Approach:</strong> Structured experimentation that compounds learning over time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="service-related">
        <div className="service-container">
          <h2 className="related-headline fade-up">Related Services</h2>
          <div className="related-grid">
            <Link to="/services/paid-advertising" className="related-card fade-up">
              <h3>Paid Advertising</h3>
              <p>Google Ads, Meta Ads, LinkedIn campaigns</p>
              <span className="related-arrow">→</span>
            </Link>
            <Link to="/services/growth-seo" className="related-card fade-up" style={{ animationDelay: '100ms' }}>
              <h3>Growth SEO</h3>
              <p>Organic traffic and content strategy</p>
              <span className="related-arrow">→</span>
            </Link>
            <Link to="/services/social-media-marketing" className="related-card fade-up" style={{ animationDelay: '200ms' }}>
              <h3>Social Media Marketing</h3>
              <p>Community building and engagement</p>
              <span className="related-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="service-cta">
        <div className="service-cta-container fade-up">
          <h2 className="cta-headline">Ready to Build a Growth System?</h2>
          <p className="cta-subtext">
            Let's design a performance marketing strategy that turns marketing into a predictable revenue engine.
          </p>
          <Link to="/contact" className="btn-primary">Get Started →</Link>
        </div>
      </section>
    </div>
  );
}
