import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="brand-section">
          <div className="brand-title">
            {/* BusEase */}
          </div>
          <div className="brand-logo">
            <img src="images/BusEase-log.png" alt="BusEase Logo" />
          </div>
        </div>
        
        <div className="navigation-links">
          <div className="nav-link">FAQs</div>
          <div className="nav-link">Contact Us</div>
          <div className="nav-link">About Us</div>
          <div className="nav-link">Privacy</div>
        </div>
        
        <div className="contact-section">
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "<svg id=\"109:10\" layer-name=\"Contact page\" width=\"96\" height=\"96\" viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"contact-icon\" style=\"width: 96px; height: 96px; flex-shrink: 0; position: absolute; left: 0px; top: 0px\"> <g clip-path=\"url(#clip0_109_10)\"> <path d=\"M56 8H24C19.6 8 16 11.6 16 16V80C16 84.4 19.6 88 24 88H72C76.4 88 80 84.4 80 80V32L56 8ZM48 40C52.4 40 56 43.6 56 48C56 52.4 52.4 56 48 56C43.6 56 40 52.4 40 48C40 43.6 43.6 40 48 40ZM64 72H32V69.72C32 66.48 33.92 63.6 36.88 62.32C40.28 60.84 44.04 60 48 60C51.96 60 55.72 60.84 59.12 62.32C62.08 63.6 64 66.48 64 69.72V72Z\" fill=\"black\"></path> </g> <defs> <clipPath id=\"clip0_109_10\"> <rect width=\"96\" height=\"96\" fill=\"white\"></rect> </clipPath> </defs> </svg>",
              }}
            />
          </div>
          <div className="contact-title">Have Questions?</div>
          <div className="contact-phone">(+94)77 555 5555</div>
          <div className="contact-email">info@busease.lk</div>
        </div>
        
        <div className="video-section">
          <div className="video-container">
            <div className="video-background"></div>
            <div className="video-title">How to use EaseBus..</div>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/9dca78fd76d11e1cd171c7569d06c3aacbbc8861?width=192"
              alt=""
              className="youtube-icon"
            />
          </div>
        </div>
        
        <div className="social-section">
          <div className="social-container">
            <div className="social-background"></div>
            <div className="social-title">Follow Us..</div>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/9695778df7697610c6d60802ddf92fdf0a77ee68?width=42"
              alt=""
              className="facebook-icon"
            />
          </div>
        </div>
      </div>
      
      <div className="copyright-text">
        © 2025 BusEase Ticketing System. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
