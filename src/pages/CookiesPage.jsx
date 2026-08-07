import './LegalPage.css';

export default function CookiesPage() {
  return (
    <div className="legal-page">
      <h1>Cookie Policy</h1>
      <p className="legal-updated">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

      <section>
        <h3>What Are Cookies</h3>
        <p>
          Cookies are small text files placed on your device when you visit a website. They are widely
          used to make websites function properly and to provide reporting information.
        </p>
      </section>

      <section>
        <h3>How We Use Cookies</h3>
        <p>
          This website currently does not set any analytics, advertising, or tracking cookies. Any
          cookies present are limited to those strictly necessary for the website to function.
        </p>
      </section>

      <section>
        <h3>Managing Cookies</h3>
        <p>
          Most web browsers allow you to control cookies through their settings. You can set your browser
          to refuse cookies or alert you when cookies are being sent.
        </p>
      </section>

      <section>
        <h3>Contact Us</h3>
        <p>
          Questions about this policy can be sent to <a href="mailto:info@pelquant.com">info@pelquant.com</a>.
        </p>
      </section>
    </div>
  );
}
