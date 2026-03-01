import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import AILLMPage from './pages/AILLMPage';
import SIEMPage from './pages/SIEMPage';
import SOARPage from './pages/SOARPage';
import AIAutomationPage from './pages/AIAutomationPage';
import SecOpsPage from './pages/SecOpsPage';
import CustomSoftwarePage from './pages/CustomSoftwarePage';
import WebMobilePage from './pages/WebMobilePage';
import DevOpsCloudPage from './pages/DevOpsCloudPage';
import TechnicalSEOPage from './pages/TechnicalSEOPage';
import GrowthSEOPage from './pages/GrowthSEOPage';
import SocialMediaPage from './pages/SocialMediaPage';
import PaidAdvertisingPage from './pages/PaidAdvertisingPage';
import PerformanceMarketingPage from './pages/PerformanceMarketingPage';
import SolutionsPage from './pages/SolutionsPage';
import FinTechPage from './pages/FinTechPage';
import HealthTechPage from './pages/HealthTechPage';
import ECommercePage from './pages/ECommercePage';
import LogisticsPage from './pages/LogisticsPage';
import EdTechPage from './pages/EdTechPage';
import LegalTechPage from './pages/LegalTechPage';
import PropTechPage from './pages/PropTechPage';
import HRTechPage from './pages/HRTechPage';
import GovTechPage from './pages/GovTechPage';
import SaaSPage from './pages/SaaSPage';
import MediaPage from './pages/MediaPage';
import ManufacturingPage from './pages/ManufacturingPage';
import './App.css';

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Contact />
    </>
  );
}

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <BrowserRouter>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>
      <Header />
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
      </Routes>
      <Footer />
      {showScrollTop && (
        <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 19V5M5 12l7-7 7 7"/>
          </svg>
        </button>
      )}
    </BrowserRouter>
  );
}

export default App;
