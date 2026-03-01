import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../components/Icons';
import './ServicePage.css';

export default function TechnicalSEOPage() {
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
      title: 'Technical SEO Audit',
      desc: 'Comprehensive crawl using Screaming Frog, Semrush, and custom scripts. We identify every crawl error, indexing issue, speed bottleneck, structured data error, and architectural problem.'
    },
    {
      num: '02',
      title: 'Core Web Vitals Optimization',
      desc: 'LCP, FID/INP, and CLS optimization — image compression, code splitting, lazy loading, CDN configuration, render-blocking resource elimination.'
    },
    {
      num: '03',
      title: 'Site Architecture & Internal Linking',
      desc: 'URL structure optimization, canonical tag implementation, pagination handling, and internal link architecture redesign to pass maximum PageRank to priority pages.'
    },
    {
      num: '04',
      title: 'Crawl Budget Management',
      desc: 'robots.txt optimization, XML sitemap architecture, noindex strategy for thin/duplicate content, and log file analysis to understand how Googlebot spends crawl budget.'
    },
    {
      num: '05',
      title: 'Structured Data Implementation',
      desc: 'Schema.org markup for products, articles, FAQs, events, reviews, and organizations — to win rich results and improve click-through rates.'
    },
    {
      num: '06',
      title: 'International SEO (if applicable)',
      desc: 'hreflang implementation, ccTLD vs subfolder vs subdomain strategy, geo-targeting in Google Search Console.'
    },
    {
      num: '07',
      title: 'Monitoring & Reporting',
      desc: 'Google Search Console analysis, crawl health monitoring, index coverage tracking, and monthly technical SEO reports.'
    }
  ];

  const issues = [
    'Crawl errors and broken links',
    'Slow page speed and Core Web Vitals failures',
    'Duplicate content and canonicalization issues',
    'Missing or incorrect structured data',
    'Mobile usability problems',
    'Indexing issues and crawl budget waste',
    'HTTPS and security issues',
    'XML sitemap and robots.txt errors'
  ];

  const tools = [
    'Google Search Console',
    'Screaming Frog',
    'Semrush',
    'Ahrefs',
    'PageSpeed Insights',
    'Lighthouse',
    'GTmetrix',
    'Schema Markup Validator'
  ];

  return (
    <div className="service-page">
      {/* Hero */}
      <section className="service-hero">
        <div className="service-hero-container">
          <Link to="/services" className="breadcrumb fade-up">← Back to Services</Link>
          <span className="service-tag fade-up">SEO SERVICES</span>
          <h1 className="service-hero-headline fade-up">
            Technical SEO
          </h1>
          <p className="service-hero-desc fade-up">
            Technical SEO is the foundation everything else is built on. If search engines cannot properly access, 
            crawl, and understand your website, no amount of great content will help you rank. We fix the technical 
            foundation first.
          </p>
          <div className="service-hero-cta fade-up">
            <Link to="/contact" className="btn-primary">Get SEO Audit →</Link>
            <a href="#process" className="btn-ghost">See Our Process</a>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="service-benefits">
        <div className="service-container">
          <div className="benefits-grid">
            <div className="benefit-card fade-up">
              <div className="benefit-icon"><Icons.Search /></div>
              <h3>Better Crawlability</h3>
              <p>Ensure search engines can access and index all your important pages efficiently.</p>
            </div>
            <div className="benefit-card fade-up" style={{ animationDelay: '100ms' }}>
              <div className="benefit-icon"><Icons.Lightning /></div>
              <h3>Faster Load Times</h3>
              <p>Core Web Vitals optimization for better rankings and user experience.</p>
            </div>
            <div className="benefit-card fade-up" style={{ animationDelay: '200ms' }}>
              <div className="benefit-icon"><Icons.Chart /></div>
              <h3>Rich Results</h3>
              <p>Structured data implementation to win featured snippets and rich results.</p>
            </div>
            <div className="benefit-card fade-up" style={{ animationDelay: '300ms' }}>
              <div className="benefit-icon"><Icons.TrendingUp /></div>
              <h3>Higher Rankings</h3>
              <p>Fix technical issues that are holding your rankings back.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="service-process" id="process">
        <div className="service-container">
          <span className="section-tag fade-up">OUR PROCESS</span>
          <h2 className="section-headline fade-up">
            Step-by-Step <span className="orange-text">Technical SEO</span>
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

      {/* Issues We Fix */}
      <section className="service-products">
        <div className="service-container">
          <span className="section-tag fade-up">WHAT WE FIX</span>
          <h2 className="section-headline fade-up">
            Common Technical SEO Issues
          </h2>
          <div className="products-list">
            {issues.map((issue, i) => (
              <div key={i} className="product-item fade-up" style={{ animationDelay: `${i * 50}ms` }}>
                <span className="product-bullet">→</span>
                <p>{issue}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Web Vitals */}
      <section className="service-vitals">
        <div className="service-container">
          <div className="vitals-content fade-up">
            <h2>Core Web Vitals Optimization</h2>
            <p>
              Google's Core Web Vitals are ranking factors. We optimize all three metrics to ensure your site 
              meets Google's standards and provides excellent user experience.
            </p>
            <div className="vitals-grid">
              <div className="vital-card">
                <div className="vital-icon"><Icons.Lightning /></div>
                <h3>LCP</h3>
                <p className="vital-name">Largest Contentful Paint</p>
                <p className="vital-desc">Main content loads in under 2.5 seconds</p>
              </div>
              <div className="vital-card">
                <div className="vital-icon"><Icons.Target /></div>
                <h3>INP</h3>
                <p className="vital-name">Interaction to Next Paint</p>
                <p className="vital-desc">Page responds to interactions in under 200ms</p>
              </div>
              <div className="vital-card">
                <div className="vital-icon"><Icons.Ruler /></div>
                <h3>CLS</h3>
                <p className="vital-name">Cumulative Layout Shift</p>
                <p className="vital-desc">Visual stability with score under 0.1</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="service-tools">
        <div className="service-container">
          <span className="section-tag fade-up">TOOLS WE USE</span>
          <h2 className="section-headline fade-up">
            SEO Tools & Platforms
          </h2>
          <div className="tools-grid fade-up">
            {tools.map((tool, i) => (
              <div key={i} className="tool-tag">{tool}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="service-why">
        <div className="service-container">
          <div className="why-content fade-up">
            <h2 className="why-headline">Why Choose Pelquant for Technical SEO?</h2>
            <div className="why-points">
              <div className="why-point">
                <span className="why-check">✓</span>
                <p><strong>Technical Depth:</strong> We're developers who understand SEO, not just SEO consultants</p>
              </div>
              <div className="why-point">
                <span className="why-check">✓</span>
                <p><strong>Data-Driven:</strong> Every recommendation backed by crawl data and performance metrics</p>
              </div>
              <div className="why-point">
                <span className="why-check">✓</span>
                <p><strong>Implementation Support:</strong> We don't just audit — we can implement fixes too</p>
              </div>
              <div className="why-point">
                <span className="why-check">✓</span>
                <p><strong>Ongoing Monitoring:</strong> Continuous tracking to catch issues before they impact rankings</p>
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
            <Link to="/services/growth-seo" className="related-card fade-up">
              <h3>On-Page & Growth SEO</h3>
              <p>Content strategy and keyword optimization</p>
              <span className="related-arrow">→</span>
            </Link>
            <Link to="/services/web-mobile-development" className="related-card fade-up" style={{ animationDelay: '100ms' }}>
              <h3>Web Development</h3>
              <p>Build fast, SEO-optimized websites</p>
              <span className="related-arrow">→</span>
            </Link>
            <Link to="/services/performance-marketing" className="related-card fade-up" style={{ animationDelay: '200ms' }}>
              <h3>Performance Marketing</h3>
              <p>Complete digital marketing strategy</p>
              <span className="related-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="service-cta">
        <div className="service-cta-container fade-up">
          <h2 className="cta-headline">Ready to Fix Your Technical SEO?</h2>
          <p className="cta-subtext">
            Get a comprehensive technical SEO audit and actionable recommendations.
          </p>
          <Link to="/contact" className="btn-primary">Get Started →</Link>
        </div>
      </section>
    </div>
  );
}
