import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import AmbientBackground from './components/AmbientBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Industries from './components/Industries';
import TrustBar from './components/TrustBar';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEO from './components/SEO';
import './App.css';

// Only the home page ships in the initial bundle — every other route is
// fetched on demand, so first paint doesn't carry 30+ pages of markup.
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const TeamPage = lazy(() => import('./pages/TeamPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const CookiesPage = lazy(() => import('./pages/CookiesPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const AILLMPage = lazy(() => import('./pages/AILLMPage'));
const SIEMPage = lazy(() => import('./pages/SIEMPage'));
const SOARPage = lazy(() => import('./pages/SOARPage'));
const AIAutomationPage = lazy(() => import('./pages/AIAutomationPage'));
const SecOpsPage = lazy(() => import('./pages/SecOpsPage'));
const CustomSoftwarePage = lazy(() => import('./pages/CustomSoftwarePage'));
const WebMobilePage = lazy(() => import('./pages/WebMobilePage'));
const DevOpsCloudPage = lazy(() => import('./pages/DevOpsCloudPage'));
const TechnicalSEOPage = lazy(() => import('./pages/TechnicalSEOPage'));
const GrowthSEOPage = lazy(() => import('./pages/GrowthSEOPage'));
const SocialMediaPage = lazy(() => import('./pages/SocialMediaPage'));
const PaidAdvertisingPage = lazy(() => import('./pages/PaidAdvertisingPage'));
const PerformanceMarketingPage = lazy(() => import('./pages/PerformanceMarketingPage'));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage'));
const FinTechPage = lazy(() => import('./pages/FinTechPage'));
const HealthTechPage = lazy(() => import('./pages/HealthTechPage'));
const ECommercePage = lazy(() => import('./pages/ECommercePage'));
const LogisticsPage = lazy(() => import('./pages/LogisticsPage'));
const EdTechPage = lazy(() => import('./pages/EdTechPage'));
const LegalTechPage = lazy(() => import('./pages/LegalTechPage'));
const PropTechPage = lazy(() => import('./pages/PropTechPage'));
const HRTechPage = lazy(() => import('./pages/HRTechPage'));
const GovTechPage = lazy(() => import('./pages/GovTechPage'));
const SaaSPage = lazy(() => import('./pages/SaaSPage'));
const MediaPage = lazy(() => import('./pages/MediaPage'));
const ManufacturingPage = lazy(() => import('./pages/ManufacturingPage'));

function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <Industries />
      <About />
      <Contact />
    </>
  );
}

function RouteFallback() {
  return (
    <div className="route-fallback" role="status" aria-live="polite">
      <span className="route-fallback-spinner" aria-hidden="true" />
      <span className="sr-only">Loading page</span>
    </div>
  );
}

// Staggered reveals set an inline transition-delay. transition-delay governs
// *every* transition on an element, so left in place it also delays the card's
// hover — measurably: a card with a 350ms stagger sat motionless for a third of
// a second before lifting. Clearing the delay once the reveal has played keeps
// the stagger and hands the element back to its own hover timing, without
// needing a wrapper element on all ~25 pages that use one.
function releaseStagger(el) {
  if (!el.style.transitionDelay) return;
  const clear = () => { el.style.transitionDelay = ''; };
  el.addEventListener('transitionend', clear, { once: true });
  // Fallback: under reduced motion the reveal is forced visible with no
  // transition, so transitionend never fires.
  setTimeout(clear, 1500);
}

// React Router preserves scroll position across navigations, which lands you
// mid-page on the next route. Reset on path change, but keep in-page hash
// links working and never fight a browser back/forward restore.
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      return undefined;
    }

    // Routes are lazily loaded, so on a direct hit to /services#technology the
    // target does not exist yet — this effect runs before Suspense swaps the
    // fallback for the real page, and the browser's own fragment handling
    // already gave up for the same reason. Keep looking for a short while, then
    // stop rather than hijacking the scroll position later on.
    let frame;
    const deadline = performance.now() + 2000;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const find = () => {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
      } else if (performance.now() < deadline) {
        frame = requestAnimationFrame(find);
      }
    };
    find();
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}

function App() {
  const [scrolledDown, setScrolledDown] = useState(false);
  const [footerInView, setFooterInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolledDown(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // The button is fixed to the bottom-right, which is exactly where the footer
  // puts its newsletter field and legal links. Step aside once the footer is up.
  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => setFooterInView(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const showScrollTop = scrolledDown && !footerInView;

  // Global fade-up Intersection Observer — set up once, then use a
  // MutationObserver to pick up newly-mounted .fade-up elements (e.g.
  // after route navigation) instead of recreating the observer on
  // every scroll-driven re-render.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
            releaseStagger(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' }
    );

    const observe = () => {
      document.querySelectorAll('.fade-up:not(.visible)').forEach((el) => observer.observe(el));
    };

    observe();

    // Batch: a single route render fires many mutations, and re-querying the
    // whole document on each one is the most expensive thing on the page.
    let queued = false;
    const mutationObserver = new MutationObserver(() => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        observe();
      });
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  };

  return (
    <BrowserRouter>
      <SEO />
      <ScrollToTop />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <AmbientBackground />
      <div className="edge-bar edge-bar-bottom" aria-hidden="true"></div>
      <div className="edge-bar edge-bar-left" aria-hidden="true"></div>
      <div className="edge-bar edge-bar-right" aria-hidden="true"></div>
      <Header />
      <main id="main-content">
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/ai-llm-integration" element={<AILLMPage />} />
            <Route path="/services/siem" element={<SIEMPage />} />
            <Route path="/services/soar" element={<SOARPage />} />
            <Route path="/services/ai-automation" element={<AIAutomationPage />} />
            <Route path="/services/secops" element={<SecOpsPage />} />
            <Route path="/services/custom-software-development" element={<CustomSoftwarePage />} />
            <Route path="/services/web-mobile-development" element={<WebMobilePage />} />
            <Route path="/services/devops-cloud" element={<DevOpsCloudPage />} />
            <Route path="/services/technical-seo" element={<TechnicalSEOPage />} />
            <Route path="/services/growth-seo" element={<GrowthSEOPage />} />
            <Route path="/services/social-media-marketing" element={<SocialMediaPage />} />
            <Route path="/services/paid-advertising" element={<PaidAdvertisingPage />} />
            <Route path="/services/performance-marketing" element={<PerformanceMarketingPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/solutions/fintech" element={<FinTechPage />} />
            <Route path="/solutions/healthtech" element={<HealthTechPage />} />
            <Route path="/solutions/ecommerce" element={<ECommercePage />} />
            <Route path="/solutions/logistics" element={<LogisticsPage />} />
            <Route path="/solutions/edtech" element={<EdTechPage />} />
            <Route path="/solutions/legaltech" element={<LegalTechPage />} />
            <Route path="/solutions/proptech" element={<PropTechPage />} />
            <Route path="/solutions/hrtech" element={<HRTechPage />} />
            <Route path="/solutions/govtech" element={<GovTechPage />} />
            <Route path="/solutions/saas" element={<SaaSPage />} />
            <Route path="/solutions/media" element={<MediaPage />} />
            <Route path="/solutions/manufacturing" element={<ManufacturingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/cookies" element={<CookiesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <button
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        tabIndex={showScrollTop ? 0 : -1}
        aria-hidden={!showScrollTop}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>
    </BrowserRouter>
  );
}

export default App;
