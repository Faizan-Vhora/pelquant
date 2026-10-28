import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Set VITE_GA_MEASUREMENT_ID (e.g. G-XXXXXXXXXX) at build time to turn this on.
// Without it nothing loads, so local dev and previews stay out of the data.
const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

let loaded = false;

function load() {
  if (loaded || !GA_ID) return;
  loaded = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  // The router drives page views; the automatic one would only count the landing page.
  window.gtag('config', GA_ID, { send_page_view: false });
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
}

export default function Analytics() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    if (!GA_ID) return;
    load();
    window.gtag('event', 'page_view', {
      page_path: pathname + search,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname, search]);

  return null;
}
