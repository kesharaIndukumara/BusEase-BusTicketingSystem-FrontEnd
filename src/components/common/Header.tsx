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
    <div className="navbar" style={{
      zIndex: 1000,
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      backgroundColor: 'white', // Ensure background is visible
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)' // Optional: adds shadow for better separation
    }}>
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
            <Link to="/book-trip" className="nav-link">Book-Trip</Link>
            <Link to="/features" className="nav-link">Features</Link>
            <Link to="/reviews" className="nav-link">Reviews</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <div className="mobile-auth-buttons">
              <div className="signin-button mobile-signin">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/a8c983ca35bcf602cd03955ba00c7b241b50e8cc?placeholderIfAbsent=true"
                  alt="Sign In Button Background"
                  className="signin-background"
                />
                <Link to="/login" className="signin-text">Log In</Link>
              </div>
              <div className="signin-button mobile-signin">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/a8c983ca35bcf602cd03955ba00c7b241b50e8cc?placeholderIfAbsent=true"
                  alt="Sign In Button Background"
                  className="signin-background"
                />
                <Link to="/signin" className="signin-text">Sign in</Link>
              </div>
            </div>
          </nav>

          <div className="auth-buttons-container">
            <div className="signin-button desktop-signin">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/a8c983ca35bcf602cd03955ba00c7b241b50e8cc?placeholderIfAbsent=true"
                alt="Sign In Button Background"
                className="signin-background"
              />
              <Link to="/login" className="signin-text">Log In</Link>
            </div>
            
            <div className="signin-button desktop-signin">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/a8c983ca35bcf602cd03955ba00c7b241b50e8cc?placeholderIfAbsent=true"
                alt="Sign In Button Background"
                className="signin-background"
              />
              <Link to="/signin_user" className="signin-text">Sign in</Link>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Header;
