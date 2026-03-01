import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../components/Icons';
import './ServicePage.css';

export default function PaidAdvertisingPage() {
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
      title: 'Business & Audience Discovery',
      desc: 'We map your ideal customer profiles, purchase journeys, competitive positioning, and historical campaign data to build the strategic foundation.'
    },
    {
      num: '02',
      title: 'Tracking & Attribution Setup',
      desc: 'We implement pixel/tag setup, conversion events, server-side tracking, UTM taxonomy, and attribution modeling — ensuring every lead and sale is accurately measured.'
    },
    {
      num: '03',
      title: 'Campaign Architecture Design',
      desc: 'We design the full campaign structure — account hierarchy, campaign objectives, ad set audience segmentation, budget allocation, and bidding strategy.'
    },
    {
      num: '04',
      title: 'Creative Development',
      desc: 'Ad creative across all formats: single image, carousel, video, stories, responsive search ads, performance max, dynamic ads — with messaging tailored to each audience segment and funnel stage.'
    },
    {
      num: '05',
      title: 'Campaign Launch & Initial Optimization',
      desc: 'Phased launch with close monitoring during the learning phase, rapid iteration on underperforming ad sets, and budget reallocation to winners.'
    },
    {
      num: '06',
      title: 'A/B Testing Framework',
      desc: 'Systematic creative testing, audience testing, landing page testing, and bidding strategy testing — with statistical significance thresholds before calling winners.'
    },
    {
      num: '07',
      title: 'Scaling & Profitability Optimization',
      desc: 'Scaling budgets on proven campaigns while maintaining target CPA/ROAS — using horizontal scaling (new audiences) and vertical scaling (budget increase) strategies.'
    },
    {
      num: '08',
      title: 'Reporting & Insights',
      desc: 'Weekly performance reports and monthly strategy reviews — including full attribution analysis, customer acquisition cost by channel, and revenue attribution.'
    }
  ];

  const platforms = [
    {
      name: 'Google Ads',
      icon: <Icons.Search />,
      formats: ['Search Ads', 'Display Ads', 'Shopping Ads', 'YouTube Ads', 'Performance Max']
    },
    {
      name: 'Meta Ads',
      icon: <Icons.Smartphone />,
      formats: ['Facebook Ads', 'Instagram Ads', 'Stories', 'Reels', 'Messenger Ads']
    },
    {
      name: 'LinkedIn Ads',
      icon: <Icons.Briefcase />,
      formats: ['Sponsored Content', 'Message Ads', 'Dynamic Ads', 'Text Ads']
    }
  ];

  const objectives = [
    'Brand awareness and reach',
    'Website traffic and engagement',
    'Lead generation and form fills',
    'App installs and engagement',
    'E-commerce sales and ROAS',
    'Event registrations and webinar signups'
  ];

  return (
    <div className="service-page">
      {/* Hero */}
      <section className="service-hero">
        <div className="service-hero-container">
          <Link to="/services" className="breadcrumb fade-up">← Back to Services</Link>
          <span className="service-tag fade-up">PAID ADVERTISING</span>
          <h1 className="service-hero-headline fade-up">
            Meta & Google Ads
          </h1>
          <p className="service-hero-desc fade-up">
            Paid advertising is the fastest route to qualified demand — when done right. Our paid media team 
            combines deep platform expertise with rigorous data analysis to build campaigns that consistently 
            generate positive ROI and scale with your budget.
          </p>
          <div className="service-hero-cta fade-up">
            <Link to="/contact" className="btn-primary">Start Advertising →</Link>
            <a href="#process" className="btn-ghost">See Our Process</a>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="service-benefits">
        <div className="service-container">
          <div className="benefits-grid">
            <div className="benefit-card fade-up">
              <div className="benefit-icon"><Icons.Lightning /></div>
              <h3>Immediate Results</h3>
              <p>Start driving qualified traffic and leads within days, not months.</p>
            </div>
            <div className="benefit-card fade-up" style={{ animationDelay: '100ms' }}>
              <div className="benefit-icon"><Icons.Target /></div>
              <h3>Precise Targeting</h3>
              <p>Reach exactly the right audience based on demographics, interests, and behavior.</p>
            </div>
            <div className="benefit-card fade-up" style={{ animationDelay: '200ms' }}>
              <div className="benefit-icon"><Icons.Chart /></div>
              <h3>Full Attribution</h3>
              <p>Track every dollar spent to revenue generated with complete transparency.</p>
            </div>
            <div className="benefit-card fade-up" style={{ animationDelay: '300ms' }}>
              <div className="benefit-icon"><Icons.TrendingUp /></div>
              <h3>Scalable Growth</h3>
              <p>Scale winning campaigns while maintaining profitability and target ROAS.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="service-process" id="process">
        <div className="service-container">
          <span className="section-tag fade-up">OUR PROCESS</span>
          <h2 className="section-headline fade-up">
            Step-by-Step <span className="orange-text">Paid Advertising</span>
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

      {/* Platforms */}
      <section className="service-products">
        <div className="service-container">
          <span className="section-tag fade-up">PLATFORMS WE MANAGE</span>
          <h2 className="section-headline fade-up">
            Advertising Platforms
          </h2>
          <div className="ad-platforms">
            {platforms.map((platform, i) => (
              <div key={i} className="ad-platform-card fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="platform-icon">{platform.icon}</div>
                <h3>{platform.name}</h3>
                <div className="ad-formats">
                  {platform.formats.map((format, j) => (
                    <span key={j} className="ad-format-tag">{format}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="service-products" style={{ background: 'rgba(255, 107, 43, 0.02)' }}>
        <div className="service-container">
          <span className="section-tag fade-up">CAMPAIGN OBJECTIVES</span>
          <h2 className="section-headline fade-up">
            What We Optimize For
          </h2>
          <div className="products-list">
            {objectives.map((objective, i) => (
              <div key={i} className="product-item fade-up" style={{ animationDelay: `${i * 50}ms` }}>
                <span className="product-bullet">→</span>
                <p>{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Framework */}
      <section className="service-testing">
        <div className="service-container">
          <div className="testing-content fade-up">
            <h2>Systematic A/B Testing</h2>
            <p>
              We don't guess — we test. Every campaign includes systematic testing to identify what works and 
              scale it profitably.
            </p>
            <div className="testing-grid">
              <div className="testing-card">
                <h3>Creative Testing</h3>
                <p>Images, videos, headlines, copy variations tested against each other</p>
              </div>
              <div className="testing-card">
                <h3>Audience Testing</h3>
                <p>Different demographics, interests, behaviors, and lookalikes</p>
              </div>
              <div className="testing-card">
                <h3>Landing Page Testing</h3>
                <p>Different page designs, copy, CTAs, and conversion flows</p>
              </div>
              <div className="testing-card">
                <h3>Bidding Strategy Testing</h3>
                <p>Manual vs automated bidding, different optimization goals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="service-ad-metrics">
        <div className="service-container">
          <span className="section-tag fade-up">KEY METRICS</span>
          <h2 className="section-headline fade-up">
            What We Track & Optimize
          </h2>
          <div className="ad-metrics-grid fade-up">
            <div className="ad-metric">
              <div className="metric-name">CPA</div>
              <div className="metric-desc">Cost Per Acquisition</div>
            </div>
            <div className="ad-metric">
              <div className="metric-name">ROAS</div>
              <div className="metric-desc">Return on Ad Spend</div>
            </div>
            <div className="ad-metric">
              <div className="metric-name">CTR</div>
              <div className="metric-desc">Click-Through Rate</div>
            </div>
            <div className="ad-metric">
              <div className="metric-name">CVR</div>
              <div className="metric-desc">Conversion Rate</div>
            </div>
            <div className="ad-metric">
              <div className="metric-name">CPC</div>
              <div className="metric-desc">Cost Per Click</div>
            </div>
            <div className="ad-metric">
              <div className="metric-name">LTV</div>
              <div className="metric-desc">Customer Lifetime Value</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="service-why">
        <div className="service-container">
          <div className="why-content fade-up">
            <h2 className="why-headline">Why Choose Pelquant for Paid Ads?</h2>
            <div className="why-points">
              <div className="why-point">
                <span className="why-check">✓</span>
                <p><strong>Platform Expertise:</strong> Certified experts in Google Ads, Meta Ads, and LinkedIn Ads</p>
              </div>
              <div className="why-point">
                <span className="why-check">✓</span>
                <p><strong>Data-Driven Optimization:</strong> Every decision backed by performance data and testing</p>
              </div>
              <div className="why-point">
                <span className="why-check">✓</span>
                <p><strong>Full Transparency:</strong> Complete access to ad accounts and detailed performance reports</p>
              </div>
              <div className="why-point">
                <span className="why-check">✓</span>
                <p><strong>Profitable Scaling:</strong> We scale campaigns while maintaining or improving efficiency</p>
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
            <Link to="/services/performance-marketing" className="related-card fade-up">
              <h3>Performance Marketing</h3>
              <p>Complete growth strategy and attribution</p>
              <span className="related-arrow">→</span>
            </Link>
            <Link to="/services/social-media-marketing" className="related-card fade-up" style={{ animationDelay: '100ms' }}>
              <h3>Social Media Marketing</h3>
              <p>Organic social to complement paid campaigns</p>
              <span className="related-arrow">→</span>
            </Link>
            <Link to="/services/growth-seo" className="related-card fade-up" style={{ animationDelay: '200ms' }}>
              <h3>Growth SEO</h3>
              <p>Long-term organic traffic to reduce ad dependency</p>
              <span className="related-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="service-cta">
        <div className="service-cta-container fade-up">
          <h2 className="cta-headline">Ready to Scale with Paid Ads?</h2>
          <p className="cta-subtext">
            Let's build profitable ad campaigns that drive qualified leads and sales.
          </p>
          <Link to="/contact" className="btn-primary">Get Started →</Link>
        </div>
      </section>
    </div>
  );
}
