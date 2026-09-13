import { Link } from 'react-router-dom';
import { Icons } from '../components/Icons';
import './TeamPage.css';

// Three tiers, and the layout is the hierarchy. The founder gets a feature row:
// full bio, focus areas, both contact links. The other department heads get
// cards in the same three-column system as the team below, but keep their focus
// areas and contact link — that is what separates a management card from a team
// card. Everything is data; adding a person to any list needs no markup change.
const founders = [
  {
    name: 'Faizan Vhora',
    role: 'Founder & CTO',
    slug: 'faizan-vhora',
    // Square source, so the <img> below reserves a 1:1 box. The ladder ends at
    // the source width rather than a round number — a wider variant would be an
    // upscale, and a 2x display picks the widest candidate every time.
    portrait: '/team/faizan-vhora',
    widths: [320, 480, 640, 950],
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

const management = [
  {
    name: 'Faizan Memon',
    role: 'Head of Sales',
    slug: 'faizan-memon',
    portrait: '/team/faizan-memon',
    widths: [320, 480, 640, 736],
    desc: 'Faizan leads business development and solution sales, finding where AI, automation and custom software genuinely earn their place. He turns a business problem into a scope engineering can build against, then stays with it from the first conversation through delivery.',
    focus: [
      { icon: Icons.Briefcase, label: 'Solution Sales' },
      { icon: Icons.Search, label: 'Discovery & Scoping' },
      { icon: Icons.Target, label: 'Industry Verticals' },
      { icon: Icons.Layers, label: 'Delivery Coordination' },
    ],
    links: [
      { href: 'mailto:info@pelquant.com', label: 'info@pelquant.com', icon: Icons.MessageCircle },
    ],
  },
  {
    name: 'Naved Memon',
    role: 'Head of Digital Marketing',
    slug: 'naved-memon',
    portrait: '/team/naved-memon',
    widths: [320, 480, 640, 880],
    desc: 'Naved leads digital marketing, growing businesses through work judged on results rather than impressions. He builds the strategy with the brand and runs it end to end — content and social through to executing and optimising the campaigns.',
    focus: [
      { icon: Icons.TrendingUp, label: 'Performance Marketing' },
      { icon: Icons.DollarSign, label: 'Paid Advertising' },
      { icon: Icons.MessageCircle, label: 'Social & Content' },
      { icon: Icons.Edit, label: 'Video & Creative' },
    ],
    links: [
      { href: 'mailto:info@pelquant.com', label: 'info@pelquant.com', icon: Icons.MessageCircle },
    ],
  },
];

// The wider team. One sentence each, not a bio — at card size a paragraph
// stops being read, and the grid's job is to show who is on the project.
const team = [
  {
    name: 'Khushi Shaikh',
    role: 'Web Developer',
    slug: 'khushi-shaikh',
    portrait: '/team/khushi-shaikh',
    widths: [320, 480, 500],
    desc: 'Khushi joined Pelquant as a trainee and now builds production front-ends — turning designs into interfaces that hold up on real devices and real connections.',
  },
  {
    name: 'Rushda Saiyed',
    role: 'UI/UX Designer',
    slug: 'rushda-saiyed',
    portrait: '/team/rushda-saiyed',
    widths: [320, 480, 640, 700],
    desc: 'Rushda joined Pelquant as a trainee and now designs the interfaces our clients ship, working from research and wireframes through to accessible, finished screens.',
  },
  {
    name: 'Ilsha Shaikh',
    role: 'UI/UX Trainee',
    slug: 'ilsha-shaikh',
    portrait: '/team/ilsha-shaikh',
    widths: [320, 480, 632],
    desc: 'Ilsha is training with the design team on live projects — wireframes, design systems, and the details that separate a screen people can use from one that merely looks good.',
  },
  {
    name: 'Sayma Shaikh',
    role: 'UI/UX Designer',
    slug: 'sayma-shaikh',
    portrait: '/team/sayma-shaikh',
    widths: [320, 480, 640, 778],
    desc: 'Sayma joined Pelquant as a trainee and now works across product design — user flows, interface design, and the prototyping that settles a question before it reaches code.',
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

// Kept next to the CSS that sizes the portrait: change one and the other is
// wrong, and a stale `sizes` silently hands every visitor the wrong variant.
const PORTRAIT_SIZES = '(max-width: 900px) min(72vw, 340px), 420px';
// Three columns inside a 1140px container with 24px gaps is a 364px slot.
const CARD_SIZES = '(max-width: 620px) min(86vw, 400px), (max-width: 960px) 44vw, 364px';

// Capped so the last card in a row does not sit blank while the stagger catches
// up. The observer in App.jsx clears the delay once the reveal has played, so it
// never leaks into the element's own hover timing.
const stagger = (i) => ({ transitionDelay: `${Math.min(i, 5) * 70}ms` });

const srcSet = (member, ext) =>
  member.widths.map((w) => `${member.portrait}-${w}.${ext} ${w}w`).join(', ');

// `src` is what a browser without srcSet support gets, so it wants a usable
// size rather than the smallest rung of the ladder.
const fallbackWidth = (member) =>
  member.widths.filter((w) => w <= 640).pop() ?? member.widths[0];

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
            srcSet={srcSet(member, 'webp')}
            sizes={PORTRAIT_SIZES}
          />
          <img
            src={`${member.portrait}-${fallbackWidth(member)}.jpg`}
            srcSet={srcSet(member, 'jpg')}
            sizes={PORTRAIT_SIZES}
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
                {/* Both cards link the same shared inbox, so out of context the
                    link list would read as two identical "info@pelquant.com"
                    entries. A visually-hidden suffix rather than an aria-label,
                    because the accessible name has to still contain the visible
                    text for speech input to target it (WCAG 2.5.3). */}
                <span className="sr-only"> &mdash; {member.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </article>
  );
}

// One card for both grids. Focus areas and a contact link are what make a
// management card a management card; a team card simply has neither.
function PersonCard({ member, index }) {
  return (
    <article className="person-card fade-up" style={stagger(index)}>
      <div className="person-card-portrait">
        <picture>
          <source type="image/webp" srcSet={srcSet(member, 'webp')} sizes={CARD_SIZES} />
          <img
            src={`${member.portrait}-${fallbackWidth(member)}.jpg`}
            srcSet={srcSet(member, 'jpg')}
            sizes={CARD_SIZES}
            width="640"
            height="640"
            alt={`${member.name}, ${member.role} at Pelquant`}
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>
      <div className="person-card-body">
        <h3 className="person-card-name">{member.name}</h3>
        <span className="person-card-role">{member.role}</span>
        <p className="person-card-desc">{member.desc}</p>

        {member.focus && (
          <ul className="person-card-focus" role="list">
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
        )}

        {member.links && (
          <div className="person-card-links">
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
                  {/* Same shared inbox on several cards, so the accessible name
                      has to say whose it is — as a suffix, not an aria-label, so
                      it still contains the visible text (WCAG 2.5.3). */}
                  <span className="sr-only"> &mdash; {member.name}</span>
                </a>
              );
            })}
          </div>
        )}
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

      <section className="management-section" id="management">
        <div className="team-container">
          <span className="section-tag fade-up">MANAGEMENT</span>
          <h2 className="section-headline fade-up">
            Who You&rsquo;ll <span className="orange-text">Actually Work With</span>
          </h2>
          <div className="management-list">
            {founders.map((member, i) => (
              <MemberFeature key={member.slug} member={member} index={i} />
            ))}
          </div>
          <div className="people-grid management-grid">
            {management.map((member, i) => (
              <PersonCard key={member.slug} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="team-section" id="team">
        <div className="team-container">
          <span className="section-tag fade-up">THE TEAM</span>
          <h2 className="section-headline fade-up">
            The People <span className="orange-text">Building It</span>
          </h2>
          <div className="people-grid">
            {team.map((member, i) => (
              <PersonCard key={member.slug} member={member} index={i} />
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
                  style={stagger(i)}
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
