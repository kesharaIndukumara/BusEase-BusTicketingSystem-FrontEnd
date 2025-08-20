import React, { useState } from "react";
import "./Header.css";
import BusEaseLogo from '../../images/BusEase-logo.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="logo-section">
            <div className="logo-icon">
              <img
                src={BusEaseLogo}
                alt="BusEase Logo"
                className="logo-background"
              />
            </div>
            {/* <div className="brand-name">BusEase</div> */}
          </div>

          <div className="mobile-menu-toggle" onClick={toggleMenu}>
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          </div>

          <nav className={`navigation-links ${isMenuOpen ? 'mobile-open' : ''}`} style={{ flex: 1, display: 'flex', justifyContent: 'center', gap: '2rem' }}>
            <div className="nav-link">Home</div>
            <div className="nav-link">Features</div>
            <div className="nav-link">Reviews</div>
            <div className="nav-link">Contact</div>
            <div className="signin-button mobile-signin">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/a8c983ca35bcf602cd03955ba00c7b241b50e8cc?placeholderIfAbsent=true"
                alt="Sign In Button Background"
                className="signin-background"
              />
              <div className="signin-text">Sign In</div>
            </div>
          </nav>

          <div className="signin-button desktop-signin">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/a8c983ca35bcf602cd03955ba00c7b241b50e8cc?placeholderIfAbsent=true"
              alt="Sign In Button Background"
              className="signin-background"
            />
            <div className="signin-text">Sign In</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
