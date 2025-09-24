import React from 'react';
import Header from '../common/Header';

const UserRegistration: React.FC = () => {
  return (
    <><Header /><div className="user-registration-container" style={{ marginTop: '120px' }}>
      <div className="registration-background-overlay" />
      <div className="registration-card">
        <div className="registration-logo-container">
          <div className="registration-logo-blue" />
          <div className="registration-logo-orange" />
        </div>
        <div className="registration-title">
          User Registration
        </div>
        <div className="registration-subtitle">
          Create your BusEase account
        </div>
        <div className="registration-form">
          <div className="form-field">
            <div className="field-label">
              Full Name
            </div>
            <input
              type="text"
              placeholder="Enter full name"
              className="form-input-field" />
          </div>
          <div className="form-field">
            <div className="field-label">
              Username
            </div>
            <input
              type="text"
              placeholder="Choose a username"
              className="form-input-field" />
          </div>
          <div className="form-field">
            <div className="field-label">
              Password
            </div>
            <input
              type="password"
              placeholder="Enter a strong password"
              className="form-input-field" />
          </div>
          <div className="form-field">
            <div className="field-label">
              Email Address
            </div>
            <input
              type="email"
              placeholder="Enter your email"
              className="form-input-field" />
          </div>
          <div className="form-field">
            <div className="field-label">
              NIC Number
            </div>
            <input
              type="text"
              placeholder="e.g., 200012345678"
              className="form-input-field" />
          </div>
          <div className="form-field">
            <div className="field-label">
              Mobile Number
            </div>
            <input
              type="tel"
              placeholder="e.g., +94 77 123 4567"
              className="form-input-field" />
          </div>
          <button className="signup-button">
            Sign Up
          </button>
          <div className="social-login-divider">
            or sign up with
          </div>
          <div className="social-buttons-container">
            <button className="social-button facebook-button">
              <div className="social-icon facebook-icon" />
              <div>Facebook</div>
            </button>
            <button className="social-button google-button">
              <div className="social-icon google-icon" />
              <div>Google</div>
            </button>
            <button className="social-button yahoo-button">
              <div className="social-icon yahoo-icon" />
              <div>Yahoo</div>
            </button>
          </div>
          <div className="registration-footer">
            © 2024 BusEase Ticketing System. All rights reserved.
          </div>
        </div>
      </div>
    </div></>
  );
};

export default UserRegistration;
