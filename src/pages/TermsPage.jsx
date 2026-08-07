import './LegalPage.css';

export default function TermsPage() {
  return (
    <div className="legal-page">
      <h1>Terms of Service</h1>
      <p className="legal-updated">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

      <section>
        <h3>Acceptance of Terms</h3>
        <p>
          By accessing or using the Pelquant website, you agree to be bound by these Terms of Service.
          If you do not agree to these terms, please do not use this website.
        </p>
      </section>

      <section>
        <h3>Use of Our Services</h3>
        <p>
          Any services described on this website (technology development, AI integration, marketing, or
          otherwise) are subject to a separate written agreement between Pelquant and the client. Nothing
          on this website constitutes a binding offer or contract on its own.
        </p>
      </section>

      <section>
        <h3>Intellectual Property</h3>
        <p>
          All content on this website, including text, graphics, logos, and code, is the property of
          Pelquant unless otherwise noted, and may not be reproduced without permission.
        </p>
      </section>

      <section>
        <h3>Limitation of Liability</h3>
        <p>
          This website and its content are provided "as is" without warranties of any kind. Pelquant is
          not liable for any damages arising from your use of this website.
        </p>
      </section>

      <section>
        <h3>Changes to These Terms</h3>
        <p>
          We may update these terms from time to time. Continued use of the website after changes
          constitutes acceptance of the updated terms.
        </p>
      </section>

      <section>
        <h3>Contact Us</h3>
        <p>
          Questions about these terms can be sent to <a href="mailto:info@pelquant.com">info@pelquant.com</a>.
        </p>
      </section>
    </div>
  );
}
