import { Link } from 'react-router-dom';
import { Icons } from '../components/Icons';
import './TeamPage.css';

// Leadership renders as alternating feature rows rather than a card grid.
// A grid built for three looks broken holding one, and a single small card
// makes the one person on it read as an afterthought. Adding a second entry
// here flips the layout side automatically — no markup change needed.
const leadership = [
  {
    name: 'Faizan Vhora',
    role: 'Founder & CTO',
    slug: 'faizan-vhora',
    // Square source, so the <img> below reserves a 1:1 box.
    portrait: '/team/faizan-vhora',
    bio: [
      'Faizan founded Pelquant on a simple conviction: AI belongs in the foundations of a system, not bolted onto the surface of one. He leads the technical direction of every engagement — architecture, model selection, security posture and the call on what not to build.',
      'He works hands-on across the stack, from LLM and retrieval systems through to the cloud infrastructure and security operations that keep them running in production. Clients work with him directly rather than through an account layer.',
    ],
    focus: [
      { icon: Icons.Cpu, label: 'AI & LLM Systems' },
      { icon: Icons.Layers, label: 'Software Architecture' },
      { icon: Icons.Rocket, label: 'Cloud & DevOps' },
      { icon: Icons.Shield, label: 'Security Operations' },
    ],
    links: [
      { href: 'mailto:info@pelquant.com', label: 'info@pelquant.com', icon: Icons.MessageCircle },
      // Faizan's own profile, not the company page — this card is about him,
      // and the company LinkedIn is already linked from the footer and /contact.
      { href: 'https://www.linkedin.com/in/faizan-vhora-24a889175/', label: 'LinkedIn', icon: Icons.Linkedin, external: true },
    ],
  },
];

// Founder-led is a structural fact about how this company is staffed, not a
// claim about results — so these stay true no matter how the team grows.
const principles = [
  {
    icon: Icons.Users,
    title: 'You talk to the builder',
    desc: 'No account manager relaying requirements to a delivery team you never meet. The person making the technical decisions is the person in the room with you.',
  },
  {
    icon: Icons.Target,
    title: 'Scoped honestly',
    desc: 'We say no to work that does not need building. A smaller system that ships and holds up beats a larger one that arrives late and needs rewriting.',
  },
  {
    icon: Icons.Zap,
    title: 'Small team, short path',
    desc: 'Decisions take hours, not sprint cycles. Fewer handoffs means less lost context and far less of your budget spent on coordination.',
  },
];

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

function MemberFeature({ member, index }) {
  return (
    <article className={`member ${index % 2 === 1 ? 'reversed' : ''}`}>
      <div className="member-portrait fade-up">
        <picture>
          <source
            type="image/webp"
            srcSet={`${member.portrait}-320.webp 320w, ${member.portrait}-480.webp 480w, ${member.portrait}-640.webp 640w, ${member.portrait}-960.webp 960w`}
            sizes="(max-width: 900px) min(72vw, 340px), 420px"
          />
          <img
            src={`${member.portrait}-640.jpg`}
            srcSet={`${member.portrait}-320.jpg 320w, ${member.portrait}-480.jpg 480w, ${member.portrait}-640.jpg 640w, ${member.portrait}-960.jpg 960w`}
            sizes="(max-width: 900px) min(72vw, 340px), 420px"
            /* Dimensions reserve the box so the bio beside it does not reflow
               when the portrait decodes. */
            width="640"
            height="640"
            alt={`${member.name}, ${member.role} at Pelquant`}
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>

      <div className="member-body">
        <span className="member-role fade-up">{member.role}</span>
        <h3 className="member-name fade-up">{member.name}</h3>
        {member.bio.map((paragraph, i) => (
          <p className="member-bio fade-up" key={i}>{paragraph}</p>
        ))}

        <ul className="member-focus fade-up" role="list">
          {member.focus.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.label}>
                <span className="focus-icon" aria-hidden="true"><Icon /></span>
                {item.label}
              </li>
            );
          })}
        </ul>

        <div className="member-links fade-up">
          {member.links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.href}
                href={link.href}
                className="member-link"
                {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                <span aria-hidden="true"><Icon /></span>
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </article>
  );
}

export default function TeamPage() {
  return (
    <div className="team-page">
      <section className="team-hero">
        <div className="team-hero-container">
          <span className="team-tag fade-up">OUR TEAM</span>
          <h1 className="team-hero-headline fade-up">
            Small Team.<br />
            <span className="orange-text">Direct Line.</span>
          </h1>
          <p className="team-hero-subtext fade-up">
            Pelquant is deliberately small. The people who scope your project are the
            people who build it &mdash; which is why decisions land in hours and nothing
            gets lost in translation on the way to production.
          </p>
          <div className="team-hero-actions fade-up">
            <Link to="/contact" className="btn-primary">
              Talk to the founder
              <ArrowRight />
            </Link>
            <Link to="/careers" className="btn-ghost">Join the team</Link>
          </div>
        </div>
      </section>

      <section className="leadership-section" id="leadership">
        <div className="team-container">
          <span className="section-tag fade-up">LEADERSHIP</span>
          <h2 className="section-headline fade-up">
            Who You&rsquo;ll <span className="orange-text">Actually Work With</span>
          </h2>
          <div className="leadership-list">
            {leadership.map((member, i) => (
              <MemberFeature key={member.slug} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="principles-section">
        <div className="team-container">
          <span className="section-tag fade-up">HOW WE OPERATE</span>
          <h2 className="section-headline fade-up">
            What <span className="orange-text">Founder-Led</span> Means Here
          </h2>
          <div className="principles-grid">
            {principles.map((principle, i) => {
              const Icon = principle.icon;
              return (
                <div
                  className="principle-card fade-up"
                  key={principle.title}
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <span className="principle-icon" aria-hidden="true"><Icon /></span>
                  <h3 className="principle-title">{principle.title}</h3>
                  <p className="principle-desc">{principle.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="team-cta">
        <div className="team-cta-container fade-up">
          <h2 className="cta-headline">Want to Build Something With Us?</h2>
          <p className="cta-subtext">
            Tell us what you&rsquo;re working on and you&rsquo;ll hear back from the person
            who would be building it.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-primary">
              Start a conversation
              <ArrowRight />
            </Link>
            <Link to="/careers" className="btn-ghost">See open roles</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
