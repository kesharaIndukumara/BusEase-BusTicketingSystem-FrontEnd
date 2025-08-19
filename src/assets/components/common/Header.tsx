import { useState } from "react";
import "./Header.css"; // Assuming you have a CSS file for styles

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="navbar-container">
      <div className="navbar-background">
        <div className="navbar-content">
          <div className="brand-section">
            <div className="logo-container">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/e78d755b5773f875499d36d326b520e4d3716598?placeholderIfAbsent=true"
                alt="Bus icon background"
                className="logo-background"
              />
              <div className="bus-emoji">
                🚌
              </div>
            </div>
            <div className="brand-name">
              BusEase
            </div>
          </div>
          {/* Hamburger menu for mobile */}
          <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <div className={`navigation-menu${menuOpen ? ' open' : ''}`}>
            <div className="nav-item">Home</div>
            <div className="nav-item">Features</div>
            <div className="nav-item">Reviews</div>
            <div className="nav-item">Contact</div>
          </div>
          <div className="signin-button round">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/a8c983ca35bcf602cd03955ba00c7b241b50e8cc?placeholderIfAbsent=true"
              alt="Sign in button background"
              className="signin-background"
            />
            <div className="signin-text">
              Sign In
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
