import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../components/Icons';
import './ServicePage.css';

export default function GrowthSEOPage() {
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
      title: 'Keyword Research & Opportunity Mapping',
      desc: 'Deep keyword research using Ahrefs, Semrush, and Google data. We identify high-value, achievable keyword clusters aligned to every stage of your buyer journey.'
    },
    {
      num: '02',
      title: 'Competitor Content Gap Analysis',
      desc: 'We map exactly which keywords your top competitors rank for that you do not — building a prioritized content roadmap from the gaps.'
    },
    {
      num: '03',
      title: 'Search Intent Mapping',
      desc: 'Every target keyword is classified by intent (informational, commercial, transactional) to ensure content format and CTA strategy match what the searcher actually wants.'
    },
    {
      num: '04',
      title: 'Content Brief Creation',
      desc: 'Detailed briefs for every target piece — covering structure, key points to cover, NLP-recommended terms, internal links, and target word count.'
    },
    {
      num: '05',
      title: 'On-Page Optimization',
      desc: 'Title tag, meta description, H-tag hierarchy, content optimization for semantic relevance, image alt text, and page experience signals.'
    },
    {
      num: '06',
      title: 'Content Production',
      desc: 'Our specialist writers produce expert, E-E-A-T optimized content across blog posts, landing pages, product pages, and comparison pages.'
    },
    {
      num: '07',
      title: 'Link Building & Digital PR',
      desc: 'Ethical link acquisition through digital PR, expert contributions, resource link building, and broken link outreach.'
    },
    {
      num: '08',
      title: 'Performance Tracking',
      desc: 'Weekly rank tracking, traffic analysis, and conversion attribution — connecting organic search performance to actual business outcomes.'
    }
  ];

  const contentTypes = [
    {
      title: 'Blog Posts & Articles',
      desc: 'Long-form content targeting informational keywords'
    },
    {
      title: 'Landing Pages',
      desc: 'Conversion-optimized pages for commercial keywords'
    },
    {
      title: 'Product/Service Pages',
      desc: 'Transactional pages optimized for buying intent'
    },
    {
      title: 'Comparison Pages',
      desc: '"X vs Y" content capturing high-intent searches'
    },
    {
      title: 'Resource Centers',
      desc: 'Comprehensive guides and knowledge bases'
    },
    {
      title: 'Case Studies',
      desc: 'Proof-driven content for bottom-of-funnel'
    }
  ];

  return (
    <div className="service-page">
      {/* Hero */}
      <section className="service-hero">
        <div className="service-hero-container">
          <Link to="/services" className="breadcrumb fade-up">← Back to Services</Link>
          <span className="service-tag fade-up">SEO SERVICES</span>
          <h1 className="service-hero-headline fade-up">
            On-Page & Growth SEO
          </h1>
          <p className="service-hero-desc fade-up">
            On-page SEO and content strategy are where long-term organic traffic is won. We build content systems 
            that target the exact queries your ideal customers use when they are ready to buy, learn, or engage.
          </p>
          <div className="service-hero-cta fade-up">
            <Link to="/contact" className="btn-primary">Grow Your Traffic →</Link>
            <a href="#process" className="btn-ghost">See Our Process</a>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="service-benefits">
        <div className="service-container">
          <div className="benefits-grid">
            <div className="benefit-card fade-up">
              <div className="benefit-icon"><Icons.TrendingUp /></div>
              <h3>Organic Traffic Growth</h3>
              <p>Sustainable traffic growth from high-intent keywords that convert.</p>
            </div>
            <div className="benefit-card fade-up" style={{ animationDelay: '100ms' }}>
              <div className="benefit-icon"><Icons.Target /></div>
              <h3>Intent-Matched Content</h3>
              <p>Content designed for what users actually want at each stage of their journey.</p>
            </div>
            <div className="benefit-card fade-up" style={{ animationDelay: '200ms' }}>
              <div className="benefit-icon"><Icons.Link /></div>
              <h3>Quality Backlinks</h3>
              <p>Ethical link building that improves domain authority and rankings.</p>
            </div>
            <div className="benefit-card fade-up" style={{ animationDelay: '300ms' }}>
              <div className="benefit-icon"><Icons.DollarSign /></div>
              <h3>ROI-Focused</h3>
              <p>Every keyword and content piece tied to business outcomes and conversions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="service-process" id="process">
        <div className="service-container">
          <span className="section-tag fade-up">OUR PROCESS</span>
          <h2 className="section-headline fade-up">
            Step-by-Step <span className="orange-text">Growth SEO</span>
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

      {/* Content Types */}
      <section className="service-products">
        <div className="service-container">
          <span className="section-tag fade-up">CONTENT WE CREATE</span>
          <h2 className="section-headline fade-up">
            Content Types
          </h2>
          <div className="platforms-grid">
            {contentTypes.map((content, i) => (
              <div key={i} className="platform-card fade-up" style={{ animationDelay: `${i * 50}ms` }}>
                <h3>{content.title}</h3>
                <p>{content.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E-E-A-T */}
      <section className="service-eeat">
        <div className="service-container">
          <div className="eeat-content fade-up">
            <h2>E-E-A-T Optimized Content</h2>
            <p>
              Google's quality guidelines emphasize Experience, Expertise, Authoritativeness, and Trustworthiness. 
              Every piece of content we create is optimized for E-E-A-T signals.
            </p>
            <div className="eeat-grid">
              <div className="eeat-card">
                <h3>Experience</h3>
                <p>First-hand experience and real-world examples</p>
              </div>
              <div className="eeat-card">
                <h3>Expertise</h3>
                <p>Written by subject matter experts with credentials</p>
              </div>
              <div className="eeat-card">
                <h3>Authoritativeness</h3>
                <p>Cited sources, data-backed claims, industry recognition</p>
              </div>
              <div className="eeat-card">
                <h3>Trustworthiness</h3>
                <p>Transparent authorship, accurate information, secure site</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Link Building */}
      <section className="service-linkbuilding">
        <div className="service-container">
          <span className="section-tag fade-up">LINK BUILDING</span>
          <h2 className="section-headline fade-up">
            Ethical Link Acquisition
          </h2>
          <div className="linkbuilding-content fade-up">
            <p>
              We build high-quality backlinks through ethical, white-hat strategies that improve your domain 
              authority and rankings without risking penalties.
            </p>
            <div className="linkbuilding-methods">
              <div className="method-item">
                <span className="method-icon"><Icons.BookOpen /></span>
                <h3>Digital PR</h3>
                <p>Newsworthy content that earns media coverage and links</p>
              </div>
              <div className="method-item">
                <span className="method-icon"><Icons.Edit /></span>
                <h3>Expert Contributions</h3>
                <p>Guest posts and expert quotes on authoritative sites</p>
              </div>
              <div className="method-item">
                <span className="method-icon"><Icons.BookOpen /></span>
                <h3>Resource Link Building</h3>
                <p>Creating linkable assets that naturally attract backlinks</p>
              </div>
              <div className="method-item">
                <span className="method-icon"><Icons.Link /></span>
                <h3>Broken Link Outreach</h3>
                <p>Finding and replacing broken links with your content</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="service-why">
        <div className="service-container">
          <div className="why-content fade-up">
            <h2 className="why-headline">Why Choose Pelquant for Growth SEO?</h2>
            <div className="why-points">
              <div className="why-point">
                <span className="why-check">✓</span>
                <p><strong>Data-Driven Strategy:</strong> Every keyword and content piece backed by search data and competitor analysis</p>
              </div>
              <div className="why-point">
                <span className="why-check">✓</span>
                <p><strong>Expert Writers:</strong> Content created by specialists who understand your industry</p>
              </div>
              <div className="why-point">
                <span className="why-check">✓</span>
                <p><strong>White-Hat Only:</strong> Ethical link building that won't risk penalties</p>
              </div>
              <div className="why-point">
                <span className="why-check">✓</span>
                <p><strong>Business Outcomes:</strong> We track rankings, traffic, AND conversions</p>
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
            <Link to="/services/technical-seo" className="related-card fade-up">
              <h3>Technical SEO</h3>
              <p>Fix technical issues holding your rankings back</p>
              <span className="related-arrow">→</span>
            </Link>
            <Link to="/services/performance-marketing" className="related-card fade-up" style={{ animationDelay: '100ms' }}>
              <h3>Performance Marketing</h3>
              <p>Complete growth strategy across all channels</p>
              <span className="related-arrow">→</span>
            </Link>
            <Link to="/services/paid-advertising" className="related-card fade-up" style={{ animationDelay: '200ms' }}>
              <h3>Paid Advertising</h3>
              <p>Complement organic with paid search campaigns</p>
              <span className="related-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="service-cta">
        <div className="service-cta-container fade-up">
          <h2 className="cta-headline">Ready to Grow Organic Traffic?</h2>
          <p className="cta-subtext">
            Let's build a content strategy that drives sustainable, high-intent traffic.
          </p>
          <Link to="/contact" className="btn-primary">Get Started →</Link>
        </div>
      </section>
    </div>
  );
}
