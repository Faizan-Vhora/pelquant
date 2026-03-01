import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isMobile = window.innerWidth <= 968;

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
                  <h4>Technology</h4>
                  <Link to="/services/ai-llm-integration" onClick={() => setMenuOpen(false)}>AI & LLM Integration</Link>
                  <Link to="/services/custom-software-development" onClick={() => setMenuOpen(false)}>Custom Software</Link>
                  <Link to="/services/web-mobile-development" onClick={() => setMenuOpen(false)}>Web & Mobile</Link>
                  <Link to="/services/devops-cloud" onClick={() => setMenuOpen(false)}>DevOps & Cloud</Link>
                  <Link to="/services/ai-automation" onClick={() => setMenuOpen(false)}>AI Automation</Link>
                  <Link to="/services/siem" onClick={() => setMenuOpen(false)}>SIEM</Link>
                  <Link to="/services/soar" onClick={() => setMenuOpen(false)}>SOAR</Link>
                  <Link to="/services/secops" onClick={() => setMenuOpen(false)}>SecOps</Link>
                </div>
                <div className="dropdown-section">
                  <h4>Marketing</h4>
                  <Link to="/services/performance-marketing" onClick={() => setMenuOpen(false)}>Performance Marketing</Link>
                  <Link to="/services/technical-seo" onClick={() => setMenuOpen(false)}>Technical SEO</Link>
                  <Link to="/services/growth-seo" onClick={() => setMenuOpen(false)}>Growth SEO</Link>
                  <Link to="/services/paid-advertising" onClick={() => setMenuOpen(false)}>Paid Advertising</Link>
                  <Link to="/services/social-media-marketing" onClick={() => setMenuOpen(false)}>Social Media</Link>
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
                  <h4>Industries</h4>
                  <Link to="/solutions/fintech" onClick={() => setMenuOpen(false)}>FinTech</Link>
                  <Link to="/solutions/healthtech" onClick={() => setMenuOpen(false)}>HealthTech</Link>
                  <Link to="/solutions/ecommerce" onClick={() => setMenuOpen(false)}>eCommerce</Link>
                  <Link to="/solutions/logistics" onClick={() => setMenuOpen(false)}>Logistics</Link>
                  <Link to="/solutions/edtech" onClick={() => setMenuOpen(false)}>EdTech</Link>
                  <Link to="/solutions/legaltech" onClick={() => setMenuOpen(false)}>LegalTech</Link>
                </div>
                <div className="dropdown-section">
                  <h4>More Industries</h4>
                  <Link to="/solutions/proptech" onClick={() => setMenuOpen(false)}>PropTech</Link>
                  <Link to="/solutions/hrtech" onClick={() => setMenuOpen(false)}>HR Technology</Link>
                  <Link to="/solutions/govtech" onClick={() => setMenuOpen(false)}>GovTech</Link>
                  <Link to="/solutions/saas" onClick={() => setMenuOpen(false)}>SaaS</Link>
                  <Link to="/solutions/media" onClick={() => setMenuOpen(false)}>Media</Link>
                  <Link to="/solutions/manufacturing" onClick={() => setMenuOpen(false)}>Manufacturing</Link>
                </div>
              </div>
            )}
          </div>

          <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>

        <div className="header-actions">
          <Link to="/contact" className="btn-ghost">Talk to Sales</Link>
          <Link to="/contact" className="btn-primary">Get Started</Link>
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
