import React, { useState } from "react";
import "./Header.css";
import BusEaseLogo from '../../assets/img/BusEase-logo.png';
import { Link } from "react-router-dom";

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
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/features" className="nav-link">Features</Link>
            <Link to="/reviews" className="nav-link">Reviews</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <div className="signin-button mobile-signin">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/a8c983ca35bcf602cd03955ba00c7b241b50e8cc?placeholderIfAbsent=true"
                alt="Sign In Button Background"
                className="signin-background"
              />
              <Link to="/login" className="signin-text">Sign In</Link>
            </div>
          </nav>

          <div className="signin-button desktop-signin">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/a8c983ca35bcf602cd03955ba00c7b241b50e8cc?placeholderIfAbsent=true"
              alt="Sign In Button Background"
              className="signin-background"
            />
            <Link to="/login" className="signin-text">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
