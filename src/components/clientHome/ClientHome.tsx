import React from 'react';
import './ClientHome.css';
import Header from '../common/Header';
import ClientHomeFeatures from '../clientHome/ClientHomeFatures';
import Footer from '../common/Footer';


const ClientHome: React.FC = () => {
  return (
    <>
    <Header />
        <div className="hero-section">
      <div className="hero-background" />
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/dc92df75caa19d25511a419a1a5e2aa8a81f10c6?width=2266"
        alt=""
        className="hero-image"
      />
      <div className="hero-content">
        <div className="hero-title">
          Your Journey Starts Here
        </div>
        <div className="hero-description">
          Book bus tickets instantly, travel comfortably, and explore
          destinations with the most trusted online bus booking platform.
        </div>
        <div className="hero-buttons">
          <div className="book-button">
            <svg width="160" height="61" viewBox="0 0 160 61" fill="none" xmlns="http://www.w3.org/2000/svg" className="book-button-bg">
              <path d="M148 0.399902H12C5.37258 0.399902 0 6.83021 0 14.7624V45.8812C0 53.8133 5.37258 60.2437 12 60.2437H148C154.627 60.2437 160 53.8133 160 45.8812V14.7624C160 6.83021 154.627 0.399902 148 0.399902Z" fill="url(#paint0_linear_120_23)" />
              <defs>
                <linearGradient id="paint0_linear_120_23" x1="0" y1="0.399902" x2="0" y2="5984.78" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FBBF24" />
                  <stop offset="1" stopColor="#F59E0B" />
                </linearGradient>
              </defs>
            </svg>
            <span className="book-button-text">Book Your Ride</span>
          </div>
          <div className="learn-button">
            <svg width="162" height="63" viewBox="0 0 162 63" fill="none" xmlns="http://www.w3.org/2000/svg" className="learn-button-bg">
              <path d="M149 1.3999H13C6.37258 1.3999 1 7.83021 1 15.7624V46.8812C1 54.8133 6.37258 61.2437 13 61.2437H149C155.627 61.2437 161 54.8133 161 46.8812V15.7624C161 7.83021 155.627 1.3999 149 1.3999Z" stroke="black" strokeWidth="2" fill="none" />
            </svg>
            <span className="learn-button-text">Learn More</span>
          </div>
        </div>
      </div>
    </div>
    <ClientHomeFeatures/>
    <Footer />
    </>

  );
};

export default ClientHome;
