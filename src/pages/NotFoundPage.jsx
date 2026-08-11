import { Link } from 'react-router-dom';
import './NotFoundPage.css';

const suggestions = [
  { path: '/services', label: 'Services', desc: '13 technology and growth services' },
  { path: '/solutions', label: 'Solutions', desc: 'Industry solutions across 12 verticals' },
  { path: '/about', label: 'About', desc: 'Who we are and how we work' },
  { path: '/contact', label: 'Contact', desc: 'Start a project with us' },
];

export default function NotFoundPage() {
  return (
    <div className="notfound-page">
      <span className="notfound-code" aria-hidden="true">404</span>
      <h1 className="notfound-headline">This page doesn&rsquo;t exist.</h1>
      <p className="notfound-sub">
        The link may be outdated or mistyped. Here&rsquo;s where most people are headed.
      </p>

      <div className="notfound-links">
        {suggestions.map((item) => (
          <Link key={item.path} to={item.path} className="notfound-link">
            <span className="notfound-link-label">{item.label}</span>
            <span className="notfound-link-desc">{item.desc}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        ))}
      </div>

      <Link to="/" className="btn-primary notfound-home">Back to home</Link>
    </div>
  );
}
