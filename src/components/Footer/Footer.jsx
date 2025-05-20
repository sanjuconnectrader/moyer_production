import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import './Footer.css';

const Footer = () => (
  <footer className="ft">
    <div className="ft__container">
      {/* ───────────── top grid ───────────── */}
      <div className="ft__grid">
        {/* 1 ▪ Quick Links */}
        <div className="ft__col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/packages">Packages</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* 2 ▪ Production's */}
        <div className="ft__col">
          <h4>Production's</h4>
          <ul>
            <li><Link to="/video">Video Production</Link></li>
            <li><Link to="/photography">Photography Production</Link></li>
            <li><Link to="/restaurant-marketing">Restaurant Marketing</Link></li>
          </ul>
        </div>

        {/* 3 ▪ Services */}
        <div className="ft__col">
          <h4>Services</h4>
          <ul>
            <li><Link to="/live-stream">Live Stream</Link></li>
            <li><Link to="/drone-photography">Drone Photography</Link></li>
            <li><Link to="/wedding-photography">Wedding Photography</Link></li>
            <li><Link to="/headshot-photography">Headshot Photography</Link></li>
          </ul>
        </div>

        {/* 4 ▪ Connect */}
        <div className="ft__col">
          <h4>Connect With Us</h4>
          <address>
            <a href="tel:+17028824874">702-882-4874</a><br />
            <a href="mailto:moyerproduction@gmail.com">moyerproduction@gmail.com</a><br />
            Lake WA, Washington
          </address>
          <div className="ft__social">
            <a href="https://instagram.com" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" aria-label="Facebook">
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      {/* ───────────── divider ───────────── */}
      <hr className="ft__divider" />

      {/* ───────────── bottom row ───────────── */}
      <div className="ft__legal">
        <p className="ft__copy">copyright &copy; moyerproduction Est. 2024</p>
        <div className="ft__links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <span className="ft__separator">|</span>
          <Link to="/terms-conditions">Terms & Conditions</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;