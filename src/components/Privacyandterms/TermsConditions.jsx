import React from 'react';
import './TermsConditions.css';

const TermsConditions = () => {
  return (
    <div className="terms-conditions-container">
      <div className="terms-conditions-content">
        <header className="terms-header">
          <h1>Terms & Conditions</h1>
          <p className="last-updated">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </header>

        <div className="terms-content">
          <section className="terms-section">
            <div className="section-header">
              <div className="section-number">1</div>
              <h2>Introduction</h2>
            </div>
            <div className="section-content">
              <p>
                These Terms & Conditions govern your use of Moyer Production's website and services. By accessing or using our website, you agree to be bound by these terms. If you disagree with any part of these terms, please refrain from using our website.
              </p>
            </div>
          </section>

          <section className="terms-section">
            <div className="section-header">
              <div className="section-number">2</div>
              <h2>Services Provided</h2>
            </div>
            <div className="section-content">
              <p>
                Moyer Production provides professional photography services as described on our website. All services are subject to availability and require prior booking. We reserve the right to refuse service to anyone for any reason at any time.
              </p>
              <p>
                Pricing for services will be provided upon request and may vary based on project requirements, location, and other factors.
              </p>
            </div>
          </section>

          <section className="terms-section">
            <div className="section-header">
              <div className="section-number">3</div>
              <h2>Intellectual Property</h2>
            </div>
            <div className="section-content">
              <p>
                All photographs, images, and content created by Moyer Production remain the exclusive property of Moyer Production unless otherwise agreed in writing. Clients receive usage rights as specified in their service agreement but may not claim ownership of the original works.
              </p>
              <p>
                Unauthorized use, reproduction, or distribution of our work without explicit permission is strictly prohibited.
              </p>
            </div>
          </section>

          <section className="terms-section">
            <div className="section-header">
              <div className="section-number">4</div>
              <h2>Client Responsibilities</h2>
            </div>
            <div className="section-content">
              <p>
                Clients are responsible for:
              </p>
              <ul className="terms-list">
                <li>Providing accurate information when booking services</li>
                <li>Arriving on time for scheduled sessions</li>
                <li>Obtaining necessary permissions for location access</li>
                <li>Communicating any specific requirements in advance</li>
              </ul>
              <p>
                Cancellations require at least 48 hours notice. Late cancellations may incur fees as specified in your service agreement.
              </p>
            </div>
          </section>

          <section className="terms-section">
            <div className="section-header">
              <div className="section-number">5</div>
              <h2>Limitation of Liability</h2>
            </div>
            <div className="section-content">
              <p>
                Moyer Production shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your access to or use of our services. Our total liability for any claim related to our services shall not exceed the amount paid for those specific services.
              </p>
              <p>
                We are not responsible for unsatisfactory results due to client-provided conditions (lighting, weather, subject cooperation, etc.) beyond our control.
              </p>
            </div>
          </section>

          <section className="terms-section">
            <div className="section-header">
              <div className="section-number">6</div>
              <h2>Changes to Terms</h2>
            </div>
            <div className="section-content">
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after changes constitutes acceptance of the new terms.
              </p>
            </div>
          </section>

          <section className="terms-section">
            <div className="section-header">
              <div className="section-number">7</div>
              <h2>Governing Law</h2>
            </div>
            <div className="section-content">
              <p>
                These terms shall be governed by and construed in accordance with the laws of Washington State. Any disputes relating to these terms will be subject to the exclusive jurisdiction of the courts of Pierce County, Washington.
              </p>
              <p>
                For questions about these Terms & Conditions, please contact us at <a href="mailto:legal@moyerproduction.com">legal@moyerproduction.com</a> or Moyer Production, Bonney Lake, WA 98391, USA.
              </p>
            </div>
          </section>
        </div>

        <footer className="terms-footer">
          <p>© {new Date().getFullYear()} Moyer Production. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default TermsConditions;