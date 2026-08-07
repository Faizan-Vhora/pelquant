import './LegalPage.css';

export default function PrivacyPage() {
  return (
    <div className="legal-page">
      <h1>Privacy Policy</h1>
      <p className="legal-updated">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

      <section>
        <h3>Information We Collect</h3>
        <p>
          When you contact us through our website forms, we collect the information you provide directly,
          such as your name, email address, company name, and the details of your inquiry. We do not
          collect this information through any other means.
        </p>
      </section>

      <section>
        <h3>How We Use Your Information</h3>
        <ul>
          <li>To respond to your inquiries and provide the services you request</li>
          <li>To communicate with you about your project or application</li>
          <li>To improve our website and services</li>
        </ul>
      </section>

      <section>
        <h3>How We Share Your Information</h3>
        <p>
          We do not sell your personal information. We only share information with third-party service
          providers as needed to operate our website and respond to your inquiries (for example, our
          form-submission and email providers).
        </p>
      </section>

      <section>
        <h3>Your Rights</h3>
        <p>
          You may request access to, correction of, or deletion of your personal information at any time
          by contacting us at <a href="mailto:info@pelquant.com">info@pelquant.com</a>.
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
