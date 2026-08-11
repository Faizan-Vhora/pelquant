import { useState, useEffect, useRef, useId } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { searchIndex } from '../searchIndex';
import './Header.css';

const MOBILE_QUERY = '(max-width: 968px)';

const serviceGroups = [
  {
    heading: 'Technology',
    headingClass: 'tech-header',
    links: [
      { to: '/services/ai-llm-integration', label: 'AI & LLM Integration' },
      { to: '/services/custom-software-development', label: 'Custom Software' },
      { to: '/services/web-mobile-development', label: 'Web & Mobile' },
      { to: '/services/devops-cloud', label: 'DevOps & Cloud' },
      { to: '/services/ai-automation', label: 'AI Automation' },
      { to: '/services/siem', label: 'SIEM' },
      { to: '/services/soar', label: 'SOAR' },
      { to: '/services/secops', label: 'SecOps' },
    ],
  },
  {
    heading: 'Marketing',
    headingClass: 'marketing-header',
    links: [
      { to: '/services/performance-marketing', label: 'Performance Marketing' },
      { to: '/services/technical-seo', label: 'Technical SEO' },
      { to: '/services/growth-seo', label: 'Growth SEO' },
      { to: '/services/paid-advertising', label: 'Paid Advertising' },
      { to: '/services/social-media-marketing', label: 'Social Media' },
    ],
  },
];

const solutionGroups = [
  {
    heading: 'Industries',
    headingClass: 'industries-header',
    links: [
      { to: '/solutions/fintech', label: 'FinTech' },
      { to: '/solutions/healthtech', label: 'HealthTech' },
      { to: '/solutions/ecommerce', label: 'eCommerce' },
      { to: '/solutions/logistics', label: 'Logistics' },
      { to: '/solutions/edtech', label: 'EdTech' },
      { to: '/solutions/legaltech', label: 'LegalTech' },
    ],
  },
  {
    heading: 'More Industries',
    headingClass: 'industries-header',
    links: [
      { to: '/solutions/proptech', label: 'PropTech' },
      { to: '/solutions/hrtech', label: 'HR Technology' },
      { to: '/solutions/govtech', label: 'GovTech' },
      { to: '/solutions/saas', label: 'SaaS' },
      { to: '/solutions/media', label: 'Media' },
      { to: '/solutions/manufacturing', label: 'Manufacturing' },
    ],
  },
];

function matches(item, query) {
  return (
    item.label.toLowerCase().includes(query) ||
    item.category.toLowerCase().includes(query) ||
    item.path.toLowerCase().includes(query)
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // Only one mega-menu can be open at a time: null | 'services' | 'solutions'
  const [openMenu, setOpenMenu] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeResult, setActiveResult] = useState(-1);
  const location = useLocation();
  const navigate = useNavigate();
  const searchRef = useRef(null);
  const searchPanelRef = useRef(null);
  const navRef = useRef(null);
  const hamburgerRef = useRef(null);
  const listboxId = useId();

  const [isMobile, setIsMobile] = useState(() => window.matchMedia(MOBILE_QUERY).matches);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const handleChange = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
      if (
        navRef.current && !navRef.current.contains(e.target) &&
        hamburgerRef.current && !hamburgerRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
        setOpenMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Escape closes whatever is open, innermost first.
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key !== 'Escape') return;
      if (searchOpen) {
        setSearchOpen(false);
      } else if (openMenu) {
        setOpenMenu(null);
      } else if (menuOpen) {
        setMenuOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [searchOpen, openMenu, menuOpen]);

  // Opening search should put the caret in the field without an autoFocus
  // attribute, which would also steal focus on the very first page render.
  useEffect(() => {
    if (searchOpen) searchPanelRef.current?.querySelector('input')?.focus();
  }, [searchOpen]);

  // The mobile drawer covers the viewport; letting the page scroll behind it
  // is the classic "I closed the menu and lost my place" bug.
  useEffect(() => {
    if (!menuOpen || !isMobile) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [menuOpen, isMobile]);

  // Navigating dismisses every open surface. Done during render rather than in
  // an effect so the closed state paints with the new route, not one frame later.
  const [lastPath, setLastPath] = useState(location.pathname);
  if (lastPath !== location.pathname) {
    setLastPath(location.pathname);
    setMenuOpen(false);
    setOpenMenu(null);
    setSearchOpen(false);
    setSearchQuery('');
    setActiveResult(-1);
  }

  const trimmedQuery = searchQuery.trim().toLowerCase();
  const searchResults = trimmedQuery
    ? searchIndex.filter((item) => matches(item, trimmedQuery)).slice(0, 8)
    : [];
  // Clamp rather than reset in an effect — the result list shrinks as you type.
  const highlighted = searchResults.length === 0
    ? -1
    : Math.min(Math.max(activeResult, 0), searchResults.length - 1);

  const goToResult = (path) => {
    setSearchOpen(false);
    setSearchQuery('');
    navigate(path);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const target = searchResults[highlighted];
    if (target) goToResult(target.path);
  };

  const handleSearchKeyDown = (e) => {
    if (searchResults.length === 0) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveResult((highlighted + 1) % searchResults.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveResult((highlighted - 1 + searchResults.length) % searchResults.length);
    }
  };

  const toggleMenu = (name) => (e) => {
    // On touch/mobile the top-level item is a disclosure toggle; on desktop it
    // stays a real link to the overview page and hover does the opening.
    if (isMobile) {
      e.preventDefault();
      setOpenMenu((current) => (current === name ? null : name));
    }
  };

  const renderSearchPanel = (idPrefix) => (
    <>
      <form className="search-bar" onSubmit={handleSearchSubmit} role="search">
        <input
          type="text"
          role="combobox"
          aria-label="Search services, solutions, and pages"
          aria-expanded={searchResults.length > 0}
          aria-controls={`${listboxId}-${idPrefix}`}
          aria-activedescendant={
            highlighted >= 0 ? `${listboxId}-${idPrefix}-opt-${highlighted}` : undefined
          }
          aria-autocomplete="list"
          autoComplete="off"
          placeholder="Search services, solutions..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleSearchKeyDown}
        />
        <button type="submit" aria-label="Submit search">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
        </button>
      </form>
      {trimmedQuery && (
        <div className="search-results" id={`${listboxId}-${idPrefix}`} role="listbox">
          {searchResults.length > 0 ? (
            searchResults.map((result, i) => (
              <button
                key={result.path}
                id={`${listboxId}-${idPrefix}-opt-${i}`}
                type="button"
                role="option"
                aria-selected={i === highlighted}
                className={`search-result-item ${i === highlighted ? 'active' : ''}`}
                onMouseEnter={() => setActiveResult(i)}
                onClick={() => goToResult(result.path)}
              >
                <span className="search-result-label">{result.label}</span>
                <span className="search-result-category">{result.category}</span>
              </button>
            ))
          ) : (
            <div className="search-no-results">No results for &ldquo;{searchQuery}&rdquo;</div>
          )}
        </div>
      )}
    </>
  );

  const renderDropdown = (name, label, to, groups) => {
    const isOpen = openMenu === name;
    return (
      <div
        className={`nav-item dropdown ${isOpen ? 'open' : ''}`}
        onMouseEnter={() => !isMobile && setOpenMenu(name)}
        onMouseLeave={() => !isMobile && setOpenMenu(null)}
        onFocus={() => !isMobile && setOpenMenu(name)}
        onBlur={(e) => {
          // Tabbing out of the whole group closes it; moving between the
          // trigger and its links does not.
          if (!isMobile && !e.currentTarget.contains(e.relatedTarget)) setOpenMenu(null);
        }}
      >
        <NavLink
          to={to}
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          onClick={toggleMenu(name)}
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          {label}
          {isMobile && <span className="dropdown-arrow" aria-hidden="true">{isOpen ? '▼' : '▶'}</span>}
        </NavLink>
        <div className="dropdown-menu">
          {groups.map((group) => (
            <div className="dropdown-section" key={group.heading}>
              <h4 className={group.headingClass}>{group.heading}</h4>
              {group.links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) => (isActive ? 'active' : undefined)}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo" aria-label="PELQUANT home">
          <span className="logo-bracket" aria-hidden="true">[</span>PELQUANT
        </Link>

        <nav className={`nav ${menuOpen ? 'open' : ''}`} ref={navRef} aria-label="Main">
          {isMobile && <div className="mobile-search">{renderSearchPanel('mobile')}</div>}

          {renderDropdown('services', 'Services', '/services', serviceGroups)}
          {renderDropdown('solutions', 'Solutions', '/solutions', solutionGroups)}

          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Contact
          </NavLink>
        </nav>

        <div className="header-actions">
          <div className="search-container" ref={searchRef}>
            <button
              className={`search-toggle ${searchOpen ? 'active' : ''}`}
              onClick={() => setSearchOpen((open) => !open)}
              aria-label="Search"
              aria-expanded={searchOpen}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </button>
            {searchOpen && (
              <div className="search-dropdown" ref={searchPanelRef}>
                {renderSearchPanel('desktop')}
              </div>
            )}
          </div>
          <a href="mailto:info@pelquant.com" className="btn-ghost">Talk to Sales</a>
          <Link to="/contact" className="btn-primary">Get Started</Link>
        </div>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          ref={hamburgerRef}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
