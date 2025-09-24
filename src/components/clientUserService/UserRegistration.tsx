import React from 'react';
import Header from '../common/Header';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const UserRegistration: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'USER' | 'BUS OWNER'>('USER');
  const navigate = useNavigate();
  return (
    <><Header /><div className="user-registration-container" style={{ marginTop: '120px' }}>
      <div className="registration-background-overlay" />
      <div className="registration-card" style={{ maxWidth: '1000px', margin: '0 auto', padding: '30px' }}>
        <div className="registration-logo-container">
          <img 
            src="src/assets/img/BusEase-logo-dark.png" 
            alt="BusEase Logo" 
            className="registration-logo" style={{width: '150px', height: '150px'}}
          />
        </div>
        <div className="registration-title">
          User Registration
        </div>
        <div className="registration-subtitle">
          Create your BusEase account
        </div>
        <div className="flex justify-center mb-8">
  <div className="bg-white rounded-lg p-1 shadow-sm border">
    <button
      className={`px-6 py-2 rounded-md font-medium transition-colors ${
        activeTab === 'USER' 
          ? 'bg-blue-50 text-blue-600 border border-blue-200' 
          : 'text-gray-500 hover:text-gray-700'
      }`}
      onClick={() => navigate("/signin_user")}
    >
      USER
    </button>
    <button
      className={`px-6 py-2 rounded-md font-medium transition-colors ${
        activeTab === 'BUS OWNER' 
          ? 'bg-blue-50 text-blue-600 border border-blue-200' 
          : 'text-gray-500 hover:text-gray-700'
      }`}
      onClick={() => navigate("/signin")}
    >
      BUS OWNER
    </button>
  </div>
</div>
        <div className="registration-form" style={{ width: '100%', padding: '0 40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
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
          </div>
          
          <div className="form-field" style={{ marginTop: '25px' }}>
            <div className="field-label">
              Profile Picture
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <input
                type="file"
                accept="image/*"
                id="profile-picture"
                className="form-input-field"
                style={{ paddingTop: '8px' }}
              />
              <label 
                htmlFor="profile-picture" 
                style={{ 
                  cursor: 'pointer',
                  backgroundColor: '#0057b7',
                  color: '#ffffff',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  transition: 'background-color 0.3s ease'
                }}
                className="browse-button"
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#004494'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0057b7'}
              >
                Browse Files
              </label>
            </div>
            <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
              Maximum file size: 5MB. Supported formats: JPG, PNG
            </div>
          </div>
          
          <div style={{ marginTop: '25px', textAlign: 'center' }}>
            <button className="signup-button" style={{ width: '50%', margin: '0 auto' }}>
              Sign Up
            </button>
          </div>
          
          <div className="social-login-divider" style={{ margin: '20px 0' }}>
            or sign up with
          </div>
          
          <div className="social-buttons-container" style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
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
          
          <div className="registration-footer" style={{ marginTop: '25px', textAlign: 'center' }}>
            © 2024 BusEase Ticketing System. All rights reserved.
          </div>
        </div>
      </div>
    </div></>
  );
};

export default UserRegistration;
