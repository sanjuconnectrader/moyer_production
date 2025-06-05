import React from 'react';
import './Privacypolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <div className="privacy-policy-content">
        <header className="privacy-header">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </header>

        <div className="privacy-content">
          <section className="policy-section">
            <div className="section-header">
              <div className="section-number">1</div>
              <h2>Information We Collect</h2>
            </div>
            <div className="section-content">
              <p>
                Moyer Production's website contains a single contact form. When you fill it out, we collect only the details you choose to provide—typically your name, email address, phone number, and the content of your message. We do not gather browsing-history data, set marketing cookies, or request payment information, IDs, or other sensitive personal details.
              </p>
            </div>
          </section>

          <section className="policy-section">
            <div className="section-header">
              <div className="section-number">2</div>
              <h2>How We Use Your Information</h2>
            </div>
            <div className="section-content">
              <p>
                We use the submitted information exclusively to answer your enquiry, arrange photography sessions, or provide essential follow-up related to your request. Your data is never sold, rented, or shared with advertisers. If we rely on a trusted service provider (e.g., an email delivery platform) to route messages, that provider is contractually bound to keep your information confidential and secure.
              </p>
            </div>
          </section>

          <section className="policy-section">
            <div className="section-header">
              <div className="section-number">3</div>
              <h2>Data Storage & Security</h2>
            </div>
            <div className="section-content">
              <p>
                Contact-form submissions are stored on access-controlled servers located in or near Bonney Lake, Washington, with industry-standard encryption, firewalls, and regular security audits. We retain the data for up to 12 months—longer only if needed to resolve an active client matter or comply with legal obligations—after which it is permanently deleted.
              </p>
            </div>
          </section>

          <section className="policy-section">
            <div className="section-header">
              <div className="section-number">4</div>
              <h2>Your Privacy Rights</h2>
            </div>
            <div className="section-content">
              <p>
                You may request a copy of the information you provided, ask us to correct inaccuracies, or instruct us to erase your data entirely. To exercise these rights, email <a href="mailto:privacy@moyerproduction.com">privacy@moyerproduction.com</a> or write to us at the studio address listed on our Contact page. We will respond within 30 days, consistent with applicable privacy laws.
              </p>
            </div>
          </section>

          <section className="policy-section">
            <div className="section-header">
              <div className="section-number">5</div>
              <h2>Policy Updates & Contact</h2>
            </div>
            <div className="section-content">
              <p>
                We may revise this policy to reflect changes in law or in our information-handling practices. Any update will appear on this page with a new "Last updated" date. By using the contact form, you consent to the practices described above. Questions? Reach us at <a href="mailto:privacy@moyerproduction.com">privacy@moyerproduction.com</a> or Moyer Production, Bonney Lake, WA 98391, USA.
              </p>
            </div>
          </section>
        </div>

        <footer className="privacy-footer">
          <p>© {new Date().getFullYear()} Moyer Production. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;