import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../components/Icons';
import './ServicePage.css';

export default function WebMobilePage() {
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
      title: 'UX Research & User Journey Mapping',
      desc: 'We study your target users, map critical journeys, identify friction points, and produce user flow diagrams that guide all subsequent design decisions.'
    },
    {
      num: '02',
      title: 'Wireframing & Information Architecture',
      desc: 'Low-fidelity wireframes for every key screen, reviewed and approved before design investment begins.'
    },
    {
      num: '03',
      title: 'UI/UX Design & Prototyping',
      desc: 'High-fidelity Figma designs with interactive prototype — brand-aligned, accessibility-compliant (WCAG 2.1), and validated with real users before development.'
    },
    {
      num: '04',
      title: 'Backend & API Development',
      desc: 'Scalable server-side logic, secure authentication (OAuth2/JWT/SSO), business rule engines, and well-documented API layers.'
    },
    {
      num: '05',
      title: 'Frontend Development',
      desc: 'Pixel-perfect implementation in React, Next.js, Vue.js, or Angular. Optimized for Core Web Vitals, cross-browser compatibility, and responsive across all device sizes.'
    },
    {
      num: '06',
      title: 'Mobile App Development',
      desc: 'React Native or Flutter for cross-platform iOS and Android. Native SDK integration (camera, biometrics, push, GPS, payments) where needed.'
    },
    {
      num: '07',
      title: 'Security Hardening',
      desc: 'OWASP Top 10 protection, SQL injection prevention, XSS/CSRF guards, data encryption at rest and in transit, rate limiting, and penetration testing.'
    },
    {
      num: '08',
      title: 'App Store Submission',
      desc: 'Full App Store (iOS) and Google Play (Android) submission support including screenshots, metadata, review compliance, and phased rollout.'
    },
    {
      num: '09',
      title: 'Post-Launch Monitoring & Iteration',
      desc: 'Real-time APM (Datadog/New Relic), crash reporting (Sentry), analytics integration, and continuous feature iteration.'
    }
  ];

  const techStack = [
    {
      category: 'Frontend',
      items: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS']
    },
    {
      category: 'Mobile',
      items: ['React Native', 'Flutter', 'iOS Native', 'Android Native']
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'MongoDB', 'Redis']
    },
    {
      category: 'Cloud & DevOps',
      items: ['AWS', 'Vercel', 'Docker', 'CI/CD', 'Monitoring', 'CDN']
    }
  ];

  const features = [
    {
      title: 'Progressive Web Apps (PWA)',
      desc: 'Web apps that work offline, install on home screen, and deliver native-like experiences'
    },
    {
      title: 'Real-Time Features',
      desc: 'WebSockets, live updates, collaborative editing, real-time notifications'
    },
    {
      title: 'Payment Integration',
      desc: 'Stripe, PayPal, Razorpay, and custom payment gateway integrations'
    },
    {
      title: 'Authentication & Authorization',
      desc: 'OAuth2, JWT, SSO, multi-factor authentication, role-based access control'
    },
    {
      title: 'Push Notifications',
      desc: 'Cross-platform push notifications for web and mobile with segmentation'
    },
    {
      title: 'Analytics & Tracking',
      desc: 'Google Analytics, Mixpanel, Amplitude, custom event tracking'
    }
  ];

  return (
    <div className="service-page">
      {/* Hero */}
      <section className="service-hero">
        <div className="service-hero-container">
          <Link to="/services" className="breadcrumb fade-up">← Back to Services</Link>
          <span className="service-tag fade-up">WEB & MOBILE</span>
          <h1 className="service-hero-headline fade-up">
            Web & Mobile Development
          </h1>
          <p className="service-hero-desc fade-up">
            We build performant, secure, and beautifully designed web and mobile applications from first pixel 
            to production. Our full-stack teams own the entire product — design, frontend, backend, database, 
            infrastructure, and ongoing evolution.
          </p>
          <div className="service-hero-cta fade-up">
            <Link to="/contact" className="btn-primary">Start Your App →</Link>
            <a href="#process" className="btn-ghost">See Our Process</a>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="service-benefits">
        <div className="service-container">
          <div className="benefits-grid">
            <div className="benefit-card fade-up">
              <div className="benefit-icon"><Icons.Palette /></div>
              <h3>Beautiful Design</h3>
              <p>User-centered design that's both visually stunning and highly functional.</p>
            </div>
            <div className="benefit-card fade-up" style={{ animationDelay: '100ms' }}>
              <div className="benefit-icon"><Icons.Lightning /></div>
              <h3>Lightning Fast</h3>
              <p>Optimized for Core Web Vitals and mobile performance. Sub-second load times.</p>
            </div>
            <div className="benefit-card fade-up" style={{ animationDelay: '200ms' }}>
              <div className="benefit-icon"><Icons.Smartphone /></div>
              <h3>Cross-Platform</h3>
              <p>One codebase for iOS and Android with React Native or Flutter.</p>
            </div>
            <div className="benefit-card fade-up" style={{ animationDelay: '300ms' }}>
              <div className="benefit-icon"><Icons.Lock /></div>
              <h3>Enterprise Security</h3>
              <p>OWASP compliant, penetration tested, and built for regulated industries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="service-process" id="process">
        <div className="service-container">
          <span className="section-tag fade-up">OUR PROCESS</span>
          <h2 className="section-headline fade-up">
            Step-by-Step <span className="orange-text">App Development</span>
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

      {/* Features */}
      <section className="service-products">
        <div className="service-container">
          <span className="section-tag fade-up">CAPABILITIES</span>
          <h2 className="section-headline fade-up">
            Features We Build
          </h2>
          <div className="platforms-grid">
            {features.map((feature, i) => (
              <div key={i} className="platform-card fade-up" style={{ animationDelay: `${i * 50}ms` }}>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="service-tech">
        <div className="service-container">
          <span className="section-tag fade-up">TECHNOLOGY STACK</span>
          <h2 className="section-headline fade-up">
            Tools & <span className="orange-text">Frameworks</span>
          </h2>
          <div className="tech-grid">
            {techStack.map((tech, i) => (
              <div key={i} className="tech-category fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                <h3 className="tech-category-name">{tech.category}</h3>
                <div className="tech-tags">
                  {tech.items.map((item, j) => (
                    <span key={j} className="tech-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance */}
      <section className="service-performance">
        <div className="service-container">
          <div className="performance-content fade-up">
            <h2>Performance & Accessibility</h2>
            <p>
              Every application we build is optimized for Google's Core Web Vitals and WCAG 2.1 accessibility 
              standards. We don't just build apps that work — we build apps that are fast, accessible to everyone, 
              and rank well in search engines.
            </p>
            <div className="performance-metrics">
              <div className="metric">
                <div className="metric-icon"><Icons.Lightning /></div>
                <div className="metric-label">Core Web Vitals</div>
              </div>
              <div className="metric">
                <div className="metric-icon"><Icons.Accessibility /></div>
                <div className="metric-label">WCAG 2.1 Compliant</div>
              </div>
              <div className="metric">
                <div className="metric-icon"><Icons.Smartphone /></div>
                <div className="metric-label">Mobile-First</div>
              </div>
              <div className="metric">
                <div className="metric-icon"><Icons.Search /></div>
                <div className="metric-label">SEO Optimized</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="service-why">
        <div className="service-container">
          <div className="why-content fade-up">
            <h2 className="why-headline">Why Choose Pelquant for Web & Mobile?</h2>
            <div className="why-points">
              <div className="why-point">
                <span className="why-check">✓</span>
                <p><strong>Full-Stack Ownership:</strong> We own design, frontend, backend, infrastructure — no handoffs</p>
              </div>
              <div className="why-point">
                <span className="why-check">✓</span>
                <p><strong>Production Experience:</strong> We've shipped apps used by millions of users</p>
              </div>
              <div className="why-point">
                <span className="why-check">✓</span>
                <p><strong>Performance Obsessed:</strong> Every app optimized for speed, accessibility, and SEO</p>
              </div>
              <div className="why-point">
                <span className="why-check">✓</span>
                <p><strong>App Store Expertise:</strong> We handle iOS and Android submission end-to-end</p>
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
            <Link to="/services/custom-software-development" className="related-card fade-up">
              <h3>Custom Software Development</h3>
              <p>Bespoke backend systems and enterprise software</p>
              <span className="related-arrow">→</span>
            </Link>
            <Link to="/services/ai-llm-integration" className="related-card fade-up" style={{ animationDelay: '100ms' }}>
              <h3>AI & LLM Integration</h3>
              <p>Add intelligent features to your apps</p>
              <span className="related-arrow">→</span>
            </Link>
            <Link to="/services/devops-cloud" className="related-card fade-up" style={{ animationDelay: '200ms' }}>
              <h3>DevOps & Cloud</h3>
              <p>Scalable hosting and deployment infrastructure</p>
              <span className="related-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="service-cta">
        <div className="service-cta-container fade-up">
          <h2 className="cta-headline">Ready to Build Your App?</h2>
          <p className="cta-subtext">
            Let's turn your idea into a beautiful, fast, and secure application.
          </p>
          <Link to="/contact" className="btn-primary">Get Started →</Link>
        </div>
      </section>
    </div>
  );
}
