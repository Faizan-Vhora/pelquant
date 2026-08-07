import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { searchIndex } from '../searchIndex';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const searchRef = useRef(null);

  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 968);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 968);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
    setSolutionsOpen(false);
    setSearchOpen(false);
  }, [location]);

  const handleServicesClick = (e) => {
    if (isMobile) {
      e.preventDefault();
      setServicesOpen(!servicesOpen);
    }
  };

  const handleSolutionsClick = (e) => {
    if (isMobile) {
      e.preventDefault();
      setSolutionsOpen(!solutionsOpen);
    }
  };

  const trimmedQuery = searchQuery.trim().toLowerCase();
  const searchResults = trimmedQuery
    ? searchIndex.filter((item) => item.label.toLowerCase().includes(trimmedQuery)).slice(0, 8)
    : [];

  const goToResult = (path) => {
    setSearchOpen(false);
    setSearchQuery('');
    navigate(path);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      goToResult(searchResults[0].path);
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-bracket">[</span>PELQUANT
        </Link>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <div className="nav-item dropdown" 
               onMouseEnter={() => !isMobile && setServicesOpen(true)}
               onMouseLeave={() => !isMobile && setServicesOpen(false)}>
            <Link to="/services" className="nav-link" onClick={handleServicesClick}>
              Services {isMobile && <span className="dropdown-arrow">{servicesOpen ? '▼' : '▶'}</span>}
            </Link>
            {servicesOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-section">
                  <h4 className="tech-header">Technology</h4>
                  <Link to="/services/ai-llm-integration">AI & LLM Integration</Link>
                  <Link to="/services/custom-software-development">Custom Software</Link>
                  <Link to="/services/web-mobile-development">Web & Mobile</Link>
                  <Link to="/services/devops-cloud">DevOps & Cloud</Link>
                  <Link to="/services/ai-automation">AI Automation</Link>
                  <Link to="/services/siem">SIEM</Link>
                  <Link to="/services/soar">SOAR</Link>
                  <Link to="/services/secops">SecOps</Link>
                </div>
                <div className="dropdown-section">
                  <h4 className="marketing-header">Marketing</h4>
                  <Link to="/services/performance-marketing">Performance Marketing</Link>
                  <Link to="/services/technical-seo">Technical SEO</Link>
                  <Link to="/services/growth-seo">Growth SEO</Link>
                  <Link to="/services/paid-advertising">Paid Advertising</Link>
                  <Link to="/services/social-media-marketing">Social Media</Link>
                </div>
              </div>
            )}
          </div>

          <div className="nav-item dropdown"
               onMouseEnter={() => !isMobile && setSolutionsOpen(true)}
               onMouseLeave={() => !isMobile && setSolutionsOpen(false)}>
            <Link to="/solutions" className="nav-link" onClick={handleSolutionsClick}>
              Solutions {isMobile && <span className="dropdown-arrow">{solutionsOpen ? '▼' : '▶'}</span>}
            </Link>
            {solutionsOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-section">
                  <h4 className="industries-header">Industries</h4>
                  <Link to="/solutions/fintech">FinTech</Link>
                  <Link to="/solutions/healthtech">HealthTech</Link>
                  <Link to="/solutions/ecommerce">eCommerce</Link>
                  <Link to="/solutions/logistics">Logistics</Link>
                  <Link to="/solutions/edtech">EdTech</Link>
                  <Link to="/solutions/legaltech">LegalTech</Link>
                </div>
                <div className="dropdown-section">
                  <h4 className="industries-header">More Industries</h4>
                  <Link to="/solutions/proptech">PropTech</Link>
                  <Link to="/solutions/hrtech">HR Technology</Link>
                  <Link to="/solutions/govtech">GovTech</Link>
                  <Link to="/solutions/saas">SaaS</Link>
                  <Link to="/solutions/media">Media</Link>
                  <Link to="/solutions/manufacturing">Manufacturing</Link>
                </div>
              </div>
            )}
          </div>

          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>

        <div className="header-actions">
          <div className="search-container" ref={searchRef}>
            <button 
              className={`search-toggle ${searchOpen ? 'active' : ''}`}
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
              </svg>
            </button>
            {searchOpen && (
              <div className="search-dropdown">
                <form className="search-bar" onSubmit={handleSearch}>
                  <input
                    type="text"
                    aria-label="Search services, solutions, and pages"
                    placeholder="Search services, solutions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                  />
                  <button type="submit" aria-label="Submit search">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8"/>
                      <path d="M21 21l-4.35-4.35"/>
                    </svg>
                  </button>
                </form>
                {trimmedQuery && (
                  <div className="search-results">
                    {searchResults.length > 0 ? (
                      searchResults.map((result) => (
                        <button
                          key={result.path}
                          type="button"
                          className="search-result-item"
                          onClick={() => goToResult(result.path)}
                        >
                          <span className="search-result-label">{result.label}</span>
                          <span className="search-result-category">{result.category}</span>
                        </button>
                      ))
                    ) : (
                      <div className="search-no-results">No results for "{searchQuery}"</div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
          <a href="mailto:info@pelquant.com" className="btn-ghost">Talk to Sales</a>
          <Link to="/contact" className="btn-primary">Get Started</Link>
        </div>

        <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
