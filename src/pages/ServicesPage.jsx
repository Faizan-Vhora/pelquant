import { Link } from 'react-router-dom';
import { Icons } from '../components/Icons';
import './ServicesPage.css';

// The 13 services below are the ones that actually have pages, grouped exactly
// as the header dropdown groups them. The page previously listed 8 invented
// categories ("AI Product Development", "System Integration", …) that matched
// no route and linked nowhere, so /services was a dead end — the one place a
// visitor lands expecting to browse services was the only place they couldn't.
const technology = [
  {
    to: '/services/ai-llm-integration',
    icon: Icons.Cpu,
    title: 'AI & LLM Integration',
    desc: 'Intelligent systems built on GPT, Claude, Gemini or a model of your own — with retrieval, agents and evaluation wired in from the start.',
    tags: ['RAG Systems', 'AI Agents', 'Fine-tuning'],
  },
  {
    to: '/services/ai-automation',
    icon: Icons.Zap,
    title: 'AI Automation',
    desc: 'Automate the workflows quietly consuming your team’s week. Document processing, routing, enrichment and human-in-the-loop review.',
    tags: ['Workflow Automation', 'Data Pipelines', 'Ops Tooling'],
  },
  {
    to: '/services/custom-software-development',
    icon: Icons.Layers,
    title: 'Custom Software Development',
    desc: 'Scalable, secure platforms designed around how your business actually runs — not around what an off-the-shelf tool made you accept.',
    tags: ['Architecture', 'Backends', 'Legacy Migration'],
  },
  {
    to: '/services/web-mobile-development',
    icon: Icons.Smartphone,
    title: 'Web & Mobile Development',
    desc: 'Fast, accessible products across web and native. React, Next.js, React Native and Flutter, shipped with real performance budgets.',
    tags: ['React / Next.js', 'React Native', 'PWAs'],
  },
  {
    to: '/services/devops-cloud',
    icon: Icons.Rocket,
    title: 'DevOps & Cloud',
    desc: 'Infrastructure your team can deploy on confidently. CI/CD, containers, Kubernetes and cost control across AWS, Azure and GCP.',
    tags: ['CI/CD', 'Kubernetes', 'Cost Optimization'],
  },
  {
    to: '/services/siem',
    icon: Icons.Eye,
    title: 'SIEM',
    desc: 'Security information and event management that surfaces real threats — tuned detections mapped to MITRE ATT&CK, not alert fatigue.',
    tags: ['Threat Detection', 'Log Pipelines', 'Compliance'],
  },
  {
    to: '/services/soar',
    icon: Icons.Shield,
    title: 'SOAR',
    desc: 'Orchestrate and automate incident response so your analysts spend their time on judgment calls rather than repetitive triage.',
    tags: ['Playbooks', 'Incident Response', 'Threat Intel'],
  },
  {
    to: '/services/secops',
    icon: Icons.Lock,
    title: 'SecOps',
    desc: 'Round-the-clock security operations: monitoring, threat hunting, response and the reporting your auditors keep asking for.',
    tags: ['24/7 Monitoring', 'Threat Hunting', 'Hardening'],
  },
];

const marketing = [
  {
    to: '/services/performance-marketing',
    icon: Icons.Target,
    title: 'Performance Marketing',
    desc: 'Campaigns judged on pipeline, not impressions. Full-funnel measurement, clean attribution and budget that follows what converts.',
    tags: ['Attribution', 'CRO', 'Full-Funnel'],
  },
  {
    to: '/services/technical-seo',
    icon: Icons.Ruler,
    title: 'Technical SEO',
    desc: 'The foundation everything else rests on — Core Web Vitals, crawlability, indexation and the audits that find what’s quietly broken.',
    tags: ['Core Web Vitals', 'Crawlability', 'Site Audits'],
  },
  {
    to: '/services/growth-seo',
    icon: Icons.TrendingUp,
    title: 'Growth SEO',
    desc: 'Organic growth that compounds. Keyword and intent research, content strategy, internal linking and authority building.',
    tags: ['Keyword Research', 'Content', 'Link Building'],
  },
  {
    to: '/services/paid-advertising',
    icon: Icons.DollarSign,
    title: 'Paid Advertising',
    desc: 'Google, Meta and LinkedIn campaigns managed against cost per qualified lead — with creative testing that keeps them from decaying.',
    tags: ['Google Ads', 'Meta Ads', 'LinkedIn Ads'],
  },
  {
    to: '/services/social-media-marketing',
    icon: Icons.MessageCircle,
    title: 'Social Media Marketing',
    desc: 'Strategy, content and community management that builds an audience worth having, plus paid social to put reach behind what works.',
    tags: ['Strategy', 'Content', 'Paid Social'],
  },
];

const process = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We start by understanding your business, goals and constraints. Nothing generic — everything is shaped around your situation.',
  },
  {
    num: '02',
    title: 'Strategy',
    desc: 'A detailed plan combining technology and marketing, with clear milestones, honest timelines and outcomes you can measure.',
  },
  {
    num: '03',
    title: 'Build & Launch',
    desc: 'We build fast, test thoroughly and launch confidently. You are involved throughout, with regular updates and working demos.',
  },
  {
    num: '04',
    title: 'Optimize & Scale',
    desc: 'We measure everything, improve continuously and scale what proves itself. Your results are the only scoreboard that counts.',
  },
];

// Capped so the last card in a row doesn't sit blank for most of a second while
// the stagger catches up.
const stagger = (i) => ({ transitionDelay: `${Math.min(i, 5) * 70}ms` });

function ServiceCard({ service, index }) {
  const Icon = service.icon;
  return (
    // The reveal lives on the wrapper and the interaction lives on the card.
    // Sharing one element meant the staggered transition-delay also applied to
    // the hover transition, so the last cards in a row sat motionless for a
    // third of a second before lifting — the page read as hung.
    <div className="service-card-wrap fade-up" style={stagger(index)}>
      <Link to={service.to} className="service-card" aria-label={service.title}>
        <span className="service-icon" aria-hidden="true"><Icon /></span>
        <h3 className="service-title">{service.title}</h3>
        <p className="service-desc">{service.desc}</p>
        <div className="service-features">
          {service.tags.map((tag) => (
            <span key={tag} className="feature-tag">{tag}</span>
          ))}
        </div>
        <span className="service-more">
          Explore service
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </Link>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="services-hero-container">
          <span className="services-tag fade-up">WHAT WE DO</span>
          <h1 className="services-hero-headline fade-up">
            Technology &amp; Marketing.<br />
            <span className="gradient-text">Built Together.</span>
          </h1>
          <p className="services-hero-subtext fade-up">
            We don&rsquo;t just build software or run campaigns. We create integrated systems
            where technology and marketing work as one&mdash;driving real growth you can measure.
          </p>
          <div className="services-hero-actions fade-up">
            <a href="#technology" className="btn-primary">
              Browse all 13 services
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
            <Link to="/contact" className="btn-ghost">Talk to us</Link>
          </div>
        </div>
      </section>

      <section className="tech-services-section" id="technology">
        <div className="services-container">
          <span className="section-tag tech fade-up">TECHNOLOGY SERVICES</span>
          <h2 className="section-headline fade-up">
            We Build <span className="orange-text">Intelligent Systems</span>
          </h2>
          <div className="services-grid tech-grid">
            {technology.map((service, i) => (
              <ServiceCard key={service.to} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="marketing-services-section" id="marketing">
        <div className="services-container">
          <span className="section-tag fade-up">MARKETING SERVICES</span>
          <h2 className="section-headline fade-up">
            We Drive <span className="orange-text">Measurable Growth</span>
          </h2>
          <div className="services-grid">
            {marketing.map((service, i) => (
              <ServiceCard key={service.to} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="process-container">
          <span className="section-tag fade-up">HOW WE WORK</span>
          <h2 className="section-headline fade-up">
            Our <span className="orange-text">Process</span>
          </h2>
          {/* role="list" is redundant on paper, but Safari drops list semantics
              from any list whose marker is removed with list-style: none. */}
          <ol className="process-grid" role="list">
            {process.map((step, i) => (
              <li className="process-step fade-up" key={step.num} style={stagger(i)}>
                <span className="step-number" aria-hidden="true">{step.num}</span>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="services-cta">
        <div className="services-cta-container fade-up">
          <h2 className="cta-headline">Ready to Start Building?</h2>
          <p className="cta-subtext">
            Tell us about your project and we&rsquo;ll show you what&rsquo;s possible.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-primary">
              Get Started
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link to="/about" className="btn-ghost">Learn More About Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
