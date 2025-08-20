import React from 'react';
import './ClientHome.css';

const ClientHome = () => {
  return (
    <div className="hero-container">
      {/* Background gradient */}
      <div className="background-gradient">
        <svg width="100%" height="100%" viewBox="0 0 1440 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1440 0H0V1024H1440V0Z" fill="url(#paint0_linear_61_9)" />
          <defs>
            <linearGradient id="paint0_linear_61_9" x1="0" y1="0" x2="96724.2" y2="136018" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1E3A8A" />
              <stop offset="1" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Decorative circle */}
      <div className="decorative-circle">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z" fill="white" fillOpacity="0.1" />
        </svg>
      </div>

      {/* Bottom section */}
      <div className="bottom-section">
        <svg width="100%" height="350" viewBox="0 0 1440 350" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1440 0H0V350H1440V0Z" fill="white" fillOpacity="0.95" />
        </svg>
      </div>

      {/* Bus image */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/dc92df75caa19d25511a419a1a5e2aa8a81f10c6?width=2266"
        alt="Modern bus for comfortable travel"
        className="bus-image"
        loading="lazy"
      />

      {/* Hero content */}
      <div className="hero-content">
        <h1 className="hero-title">Your Journey Starts Here</h1>
        <p className="hero-description">
          Book bus tickets instantly, travel comfortably, and explore destinations
          <br />
          with the most trusted online bus booking platform.
        </p>
        
        {/* Action buttons */}
        <div className="action-buttons">
          <button
            className="book-button"
            onClick={() => console.log('Book Your Ride clicked')}
            aria-label="Book your bus ride"
          >
            <svg width="160" height="50" viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M148 0H12C5.37258 0 0 5.37258 0 12V38C0 44.6274 5.37258 50 12 50H148C154.627 50 160 44.6274 160 38V12C160 5.37258 154.627 0 148 0Z" fill="url(#paint0_linear_book)" />
              <defs>
                <linearGradient id="paint0_linear_book" x1="0" y1="0" x2="0" y2="5000" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FBBF24" />
                  <stop offset="1" stopColor="#F59E0B" />
                </linearGradient>
              </defs>
            </svg>
            <span className="book-button-text">Book Your Ride</span>
          </button>

          <button
            className="learn-button"
            onClick={() => console.log('Learn More clicked')}
            aria-label="Learn more about our services"
          >
            <svg width="162" height="52" viewBox="0 0 162 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M149 1H13C6.37258 1 1 6.37258 1 13V39C1 45.6274 6.37258 51 13 51H149C155.627 51 161 45.6274 161 39V13C161 6.37258 155.627 1 149 1Z" stroke="white" strokeWidth="2" />
            </svg>
            <span className="learn-button-text">Learn More</span>
          </button>
        </div>
      </div>

      {/* Feature cards */}
      <div className="feature-cards">
        {/* Easy Booking Card */}
        <div className="feature-card">
          <div className="feature-card-background">
            <svg width="362" height="182" viewBox="0 0 362 182" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M345 1H17C8.16344 1 1 8.16344 1 17V165C1 173.837 8.16344 181 17 181H345C353.837 181 361 173.837 361 165V17C361 8.16344 353.837 1 345 1Z" fill="white" stroke="black" strokeOpacity="0.1" />
            </svg>
          </div>
          <div className="feature-icon">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60Z" fill="url(#paint0_linear_icon1)" />
              <defs>
                <linearGradient id="paint0_linear_icon1" x1="0" y1="0" x2="6000" y2="6000" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#1E3A8A" />
                  <stop offset="1" stopColor="#3B82F6" />
                </linearGradient>
              </defs>
            </svg>
            <span className="feature-emoji">🎫</span>
          </div>
          <h3 className="feature-title">Easy Booking</h3>
          <p className="feature-description">
            Book your bus tickets in just a few clicks
            <br />
            with our user-friendly interface.
          </p>
        </div>

        {/* Choose Your Seat Card */}
        <div className="feature-card">
          <div className="feature-card-background">
            <svg width="362" height="182" viewBox="0 0 362 182" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M345 1H17C8.16344 1 1 8.16344 1 17V165C1 173.837 8.16344 181 17 181H345C353.837 181 361 173.837 361 165V17C361 8.16344 353.837 1 345 1Z" fill="white" stroke="black" strokeOpacity="0.1" />
            </svg>
          </div>
          <div className="feature-icon">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60Z" fill="url(#paint0_linear_icon2)" />
              <defs>
                <linearGradient id="paint0_linear_icon2" x1="0" y1="0" x2="6000" y2="6000" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#1E3A8A" />
                  <stop offset="1" stopColor="#3B82F6" />
                </linearGradient>
              </defs>
            </svg>
            <span className="feature-emoji">💺</span>
          </div>
          <h3 className="feature-title">Choose Your Seat</h3>
          <p className="feature-description">
            Select your preferred seat from our
            <br />
            interactive seat map.
          </p>
        </div>

        {/* Real Reviews Card */}
        <div className="feature-card">
          <div className="feature-card-background">
            <svg width="362" height="182" viewBox="0 0 362 182" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M345 1H17C8.16344 1 1 8.16344 1 17V165C1 173.837 8.16344 181 17 181H345C353.837 181 361 173.837 361 165V17C361 8.16344 353.837 1 345 1Z" fill="white" stroke="black" strokeOpacity="0.1" />
            </svg>
          </div>
          <div className="feature-icon">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60Z" fill="url(#paint0_linear_icon3)" />
              <defs>
                <linearGradient id="paint0_linear_icon3" x1="0" y1="0" x2="6000" y2="6000" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#1E3A8A" />
                  <stop offset="1" stopColor="#3B82F6" />
                </linearGradient>
              </defs>
            </svg>
            <span className="feature-emoji">⭐</span>
          </div>
          <h3 className="feature-title">Real Reviews</h3>
          <p className="feature-description">
            Read authentic reviews from fellow
            <br />
            travelers and make informed decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientHome;
