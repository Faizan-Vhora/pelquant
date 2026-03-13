import { useEffect, useRef } from 'react';
import './AboutPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
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
    <>
      <Header />
      <div className="about-page">
        <section className="about-hero">
          <div className="hero-container">
            <span className="hero-tag fade-up">ABOUT US</span>
            <h1 className="hero-headline fade-up">
              We Don't Add AI.<br />
              <span className="gradient-text">We Build With It.</span>
            </h1>
            <p className="hero-subtext fade-up">
              Pelquant is an AI-first technology and growth partner working globally with startups to enterprises, 
              building intelligent systems that solve real problems and drive measurable growth.
            </p>
          </div>
        </section>

        <section className="mission-section">
          <div className="mission-container">
            <div className="mission-left fade-up">
              <span className="section-tag">OUR MISSION</span>
              <blockquote className="mission-quote">
                "Technology should solve real problems, not create new ones.
                AI should simplify complexity, not add it.
                Marketing should drive growth you can measure."
              </blockquote>
              <p className="mission-text">
                At Pelquant, AI isn't a feature we bolt on—it's the foundation of everything we create. 
                We believe the future belongs to companies that understand how to architect intelligence 
                into their systems from day one, not as an afterthought.
              </p>
              <p className="mission-text">
                We partner with ambitious businesses to build products that work, marketing that converts, 
                and systems that scale. No buzzwords. No fluff. Just results you can measure.
              </p>
            </div>
            <div className="mission-right">
              <div className="stat-card stat-purple fade-up">
                <div className="stat-number gradient-purple">18+</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
              <div className="stat-card stat-cyan fade-up">
                <div className="stat-number gradient-cyan">Global</div>
                <div className="stat-label">Clients Worldwide</div>
              </div>
              <div className="stat-card stat-green fade-up">
                <div className="stat-number gradient-green">AI-First</div>
                <div className="stat-label">Always by Design</div>
              </div>
            </div>
          </div>
        </section>

        <section className="why-section">
          <div className="why-container">
            <h2 className="section-headline fade-up">WHY WE'RE DIFFERENT</h2>
            <p className="section-subtitle fade-up">Five Reasons Companies Choose Pelquant</p>
            <div className="why-grid">
              <div className="why-card card-purple fade-up">
                <h3 className="card-title">Already Built Real Products</h3>
                <p className="card-desc">We've deployed multiple production AI products. We know exactly what it takes to move from concept to working software that delivers value.</p>
              </div>
              <div className="why-card card-cyan fade-up">
                <h3 className="card-title">AI-First, Not AI-Added</h3>
                <p className="card-desc">We design systems with AI as the foundation — smarter architecture, better performance, and capabilities that wouldn't otherwise exist.</p>
              </div>
              <div className="why-card card-green fade-up">
                <h3 className="card-title">Technology + Marketing</h3>
                <p className="card-desc">Most agencies do one or the other. We do both — creating the integration where real competitive advantage actually lives.</p>
              </div>
              <div className="why-card card-amber fade-up">
                <h3 className="card-title">Outcome-Driven Approach</h3>
                <p className="card-desc">We measure success by business impact — revenue, efficiency, acquisition. Not hours worked or features shipped.</p>
              </div>
              <div className="why-card card-pink fade-up">
                <h3 className="card-title">Global Experience, Local Focus</h3>
                <p className="card-desc">We work across industries and geographies — bringing perspective on what actually works while staying focused on your situation.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="partners-section">
          <div className="partners-container">
            <h2 className="section-headline fade-up">OUR PARTNERS</h2>
            <p className="section-subtitle fade-up">Built For Builders At Every Stage</p>
            <div className="partners-grid">
              <div className="partner-card partner-green fade-up">
                <h3 className="partner-title">Startups</h3>
                <p className="partner-sub">Building First Product or Scaling to Market</p>
                <p className="partner-desc">We help startups move fast without breaking things. From MVP to product-market fit, we build the technical foundation and go-to-market strategy that gets you funded and growing.</p>
                <span className="partner-tag tag-green">MVP → Product-Market Fit</span>
              </div>
              <div className="partner-card partner-cyan fade-up">
                <h3 className="partner-title">Growing Companies</h3>
                <p className="partner-sub">Automating Operations & Expanding Market Presence</p>
                <p className="partner-desc">Scale without chaos. We automate what's slowing you down, optimize what's working, and build the systems that let you dominate your market.</p>
                <span className="partner-tag tag-cyan">Scale → Automate → Dominate</span>
              </div>
              <div className="partner-card partner-purple fade-up">
                <h3 className="partner-title">Enterprises</h3>
                <p className="partner-sub">Modernizing Legacy Systems & Adopting AI</p>
                <p className="partner-desc">Transform without disruption. We modernize legacy systems, integrate AI capabilities, and help large organizations move at startup speed.</p>
                <span className="partner-tag tag-purple">Legacy → Intelligent</span>
              </div>
              <div className="partner-card partner-orange fade-up">
                <h3 className="partner-title">Any Ambitious Business</h3>
                <p className="partner-sub">Serious About Tech & Marketing Advantage</p>
                <p className="partner-desc">If you're ready to build something that matters, we're ready to help. We work with anyone who sees technology and marketing as competitive advantages, not cost centers.</p>
                <span className="partner-tag tag-orange">Vision → Reality</span>
              </div>
            </div>
          </div>
        </section>

        <section className="philosophy-banner">
          <div className="philosophy-container">
            <p className="philosophy-quote fade-up">
              When you work with Pelquant, you're not hiring a vendor. You're partnering with a team that understands how modern technology and strategic marketing intersect.
            </p>
            <a href="/contact" className="cta-button fade-up">Let's Talk →</a>
          </div>
        </section>

        <section className="cta-strip">
          <div className="cta-container">
            <h2 className="cta-headline">Ready to explore what's possible?</h2>
            <div className="cta-buttons">
              <a href="/contact" className="btn-primary">Start Building →</a>
              <a href="/#services" className="btn-ghost">Explore Services</a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
