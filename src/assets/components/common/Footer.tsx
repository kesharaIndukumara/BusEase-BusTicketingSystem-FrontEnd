import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="brand-section">
        <div className="brand-text">BusEase</div>
        <div className="brand-icon-container">
          <div className="brand-icon-background">
            <svg className="brand-icon-svg" width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M46.4 0H11.6C5.1935 0 0 5.1935 0 11.6V46.4C0 52.8065 5.1935 58 11.6 58H46.4C52.8065 58 58 52.8065 58 46.4V11.6C58 5.1935 52.8065 0 46.4 0Z" fill="#FBBF24"/>
            </svg>
            <div className="bus-emoji">🚌</div>
          </div>
        </div>
      </div>

      <div className="navigation-links">
        <div className="nav-link">FAQs</div>
        <div className="nav-link">Contact Us</div>
        <div className="nav-link">About Us</div>
        <div className="nav-link">Privacy</div>
      </div>

      <div className="contact-section">
        <div className="contact-icon">
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/e43fbddb562bbfc497734f24c4d1f7f1769e6d42?width=192" alt="Rotary Dial Telephone" className="contact-phone-icon" />
        </div>
        <div className="contact-info">
          <div className="contact-title">Have Questions?</div>
          <div className="contact-phone">(+94)77 555 5555</div>
          <div className="contact-email">info@busease.lk</div>
        </div>
      </div>

      <div className="media-section">
        <div className="video-section">
          <div className="video-background"></div>
          <div className="video-title">How to use EaseBus..</div>
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/9dca78fd76d11e1cd171c7569d06c3aacbbc8861?width=192" alt="YouTube" className="youtube-icon" />
        </div>
        
        <div className="social-section">
          <div className="social-background"></div>
          <div className="social-title">Follow Us..</div>
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/9695778df7697610c6d60802ddf92fdf0a77ee68?width=42" alt="Facebook" className="facebook-icon" />
        </div>
      </div>

      <div className="copyright-text">© 2025 BusEase Ticketing System. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
