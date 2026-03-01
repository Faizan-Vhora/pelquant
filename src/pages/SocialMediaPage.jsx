import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../components/Icons';
import './ServicePage.css';

export default function SocialMediaPage() {
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
      title: 'Social Media Audit & Competitive Analysis',
      desc: 'We analyze your current social presence, identify content gaps, benchmark against competitors, and map where your target audience spends time.'
    },
    {
      num: '02',
      title: 'Platform Strategy & Channel Selection',
      desc: 'We determine the right platform mix (LinkedIn, Instagram, X/Twitter, Facebook, YouTube, TikTok) based on your audience demographics, content capabilities, and business goals.'
    },
    {
      num: '03',
      title: 'Brand Voice & Content Framework',
      desc: 'We define your social brand voice, content pillars, visual identity guidelines, and a content calendar framework.'
    },
    {
      num: '04',
      title: 'Content Creation & Production',
      desc: 'Monthly content production — carousels, short-form video, static graphics, stories, thought leadership posts — tailored to each platform\'s algorithm and best practices.'
    },
    {
      num: '05',
      title: 'Community Management',
      desc: 'Proactive community engagement — responding to comments, engaging with target accounts, participating in relevant conversations, and managing DMs.'
    },
    {
      num: '06',
      title: 'Influencer & Partnership Outreach',
      desc: 'Identifying and activating relevant micro and macro influencers aligned to your brand for reach amplification.'
    },
    {
      num: '07',
      title: 'Analytics & Optimization',
      desc: 'Weekly and monthly performance reporting across reach, engagement, follower growth, link clicks, and conversions — with strategy adjustments based on what data shows.'
    }
  ];

  const platforms = [
    {
      name: 'LinkedIn',
      icon: <Icons.Linkedin />,
      desc: 'B2B thought leadership, professional networking, lead generation'
    },
    {
      name: 'Instagram',
      icon: <Icons.Instagram />,
      desc: 'Visual storytelling, brand awareness, influencer partnerships'
    },
    {
      name: 'X',
      icon: <Icons.X />,
      desc: 'Real-time engagement, industry conversations, customer service'
    },
    {
      name: 'Facebook',
      icon: <Icons.Facebook />,
      desc: 'Community building, local business, broad demographic reach'
    },
    {
      name: 'YouTube',
      icon: <Icons.Youtube />,
      desc: 'Long-form video, tutorials, product demos, SEO benefits'
    },
    {
      name: 'TikTok',
      icon: <Icons.TikTok />,
      desc: 'Short-form video, viral content, younger demographics'
    }
  ];

  const contentTypes = [
    'Thought leadership posts',
    'Educational carousels',
    'Short-form video (Reels, Shorts, TikToks)',
    'Behind-the-scenes content',
    'User-generated content campaigns',
    'Live streams and Q&As',
    'Polls and interactive content',
    'Product announcements and launches'
  ];

  return (
    <div className="service-page">
      {/* Hero */}
      <section className="service-hero">
        <div className="service-hero-container">
          <Link to="/services" className="breadcrumb fade-up">← Back to Services</Link>
          <span className="service-tag fade-up">SOCIAL MEDIA</span>
          <h1 className="service-hero-headline fade-up">
            Social Media Marketing
          </h1>
          <p className="service-hero-desc fade-up">
            Social media is where brands are built and communities are formed. We create social media systems 
            that build genuine audience relationships, generate consistent engagement, and drive measurable 
            business outcomes — not just vanity metrics.
          </p>
          <div className="service-hero-cta fade-up">
            <Link to="/contact" className="btn-primary">Grow Your Social Presence →</Link>
            <a href="#process" className="btn-ghost">See Our Process</a>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="service-benefits">
        <div className="service-container">
          <div className="benefits-grid">
            <div className="benefit-card fade-up">
              <div className="benefit-icon"><Icons.Users /></div>
              <h3>Build Community</h3>
              <p>Create engaged audiences that become brand advocates and customers.</p>
            </div>
            <div className="benefit-card fade-up" style={{ animationDelay: '100ms' }}>
              <div className="benefit-icon"><Icons.Volume2 /></div>
              <h3>Brand Awareness</h3>
              <p>Reach new audiences and stay top-of-mind with consistent, quality content.</p>
            </div>
            <div className="benefit-card fade-up" style={{ animationDelay: '200ms' }}>
              <div className="benefit-icon"><Icons.MessageCircle /></div>
              <h3>Direct Engagement</h3>
              <p>Two-way conversations that build trust and gather customer insights.</p>
            </div>
            <div className="benefit-card fade-up" style={{ animationDelay: '300ms' }}>
              <div className="benefit-icon"><Icons.Chart /></div>
              <h3>Measurable Results</h3>
              <p>Track reach, engagement, traffic, and conversions — not just follower counts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="service-process" id="process">
        <div className="service-container">
          <span className="section-tag fade-up">OUR PROCESS</span>
          <h2 className="section-headline fade-up">
            Step-by-Step <span className="orange-text">Social Media Strategy</span>
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
            Social Media Platforms
          </h2>
          <div className="social-platforms">
            {platforms.map((platform, i) => (
              <div key={i} className="social-platform-card fade-up" style={{ animationDelay: `${i * 50}ms` }}>
                <div className="platform-icon">{platform.icon}</div>
                <h3>{platform.name}</h3>
                <p>{platform.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="service-products" style={{ background: 'rgba(255, 107, 43, 0.02)' }}>
        <div className="service-container">
          <span className="section-tag fade-up">CONTENT WE CREATE</span>
          <h2 className="section-headline fade-up">
            Content Types
          </h2>
          <div className="products-list">
            {contentTypes.map((content, i) => (
              <div key={i} className="product-item fade-up" style={{ animationDelay: `${i * 50}ms` }}>
                <span className="product-bullet">→</span>
                <p>{content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="service-metrics">
        <div className="service-container">
          <div className="metrics-content fade-up">
            <h2>What We Measure</h2>
            <p>
              We track metrics that matter — not just vanity metrics. Every social campaign is measured against 
              business outcomes.
            </p>
            <div className="metrics-grid">
              <div className="metric-card">
                <h3>Reach & Impressions</h3>
                <p>How many people see your content</p>
              </div>
              <div className="metric-card">
                <h3>Engagement Rate</h3>
                <p>Likes, comments, shares, saves</p>
              </div>
              <div className="metric-card">
                <h3>Follower Growth</h3>
                <p>Quality audience building over time</p>
              </div>
              <div className="metric-card">
                <h3>Link Clicks</h3>
                <p>Traffic driven to your website</p>
              </div>
              <div className="metric-card">
                <h3>Conversions</h3>
                <p>Leads, signups, sales from social</p>
              </div>
              <div className="metric-card">
                <h3>Share of Voice</h3>
                <p>Your brand vs competitors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="service-why">
        <div className="service-container">
          <div className="why-content fade-up">
            <h2 className="why-headline">Why Choose Pelquant for Social Media?</h2>
            <div className="why-points">
              <div className="why-point">
                <span className="why-check">✓</span>
                <p><strong>Platform Expertise:</strong> Deep understanding of each platform's algorithm and best practices</p>
              </div>
              <div className="why-point">
                <span className="why-check">✓</span>
                <p><strong>Content Quality:</strong> Professional content creation that stands out in crowded feeds</p>
              </div>
              <div className="why-point">
                <span className="why-check">✓</span>
                <p><strong>Community First:</strong> We build engaged communities, not just follower counts</p>
              </div>
              <div className="why-point">
                <span className="why-check">✓</span>
                <p><strong>Business Outcomes:</strong> Every campaign tied to traffic, leads, and revenue</p>
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
              <p>Amplify organic reach with paid social campaigns</p>
              <span className="related-arrow">→</span>
            </Link>
            <Link to="/services/performance-marketing" className="related-card fade-up" style={{ animationDelay: '100ms' }}>
              <h3>Performance Marketing</h3>
              <p>Complete growth strategy across all channels</p>
              <span className="related-arrow">→</span>
            </Link>
            <Link to="/services/growth-seo" className="related-card fade-up" style={{ animationDelay: '200ms' }}>
              <h3>Growth SEO</h3>
              <p>Drive organic traffic to complement social</p>
              <span className="related-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="service-cta">
        <div className="service-cta-container fade-up">
          <h2 className="cta-headline">Ready to Build Your Social Presence?</h2>
          <p className="cta-subtext">
            Let's create a social media strategy that builds community and drives business results.
          </p>
          <Link to="/contact" className="btn-primary">Get Started →</Link>
        </div>
      </section>
    </div>
  );
}
