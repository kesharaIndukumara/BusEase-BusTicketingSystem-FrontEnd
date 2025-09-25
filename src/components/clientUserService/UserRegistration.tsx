import React from 'react';
import Header from '../common/Header';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface CustomerData {
  nic: number;
  fullName: string;
  username: string;
  password: string;
  email: string;
  mobileNumber: number;
  role: string;
}

const UserRegistration: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'USER' | 'BUS OWNER'>('USER');
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState<CustomerData>({
    nic: 0,
    fullName: '',
    username: '',
    password: '',
    email: '',
    mobileNumber: 0,
    role: 'userCustomer'
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'nic' || name === 'mobileNumber' ? Number(value) : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    console.log('Sending data to backend:', formData); // Log data being sent

    try {
      const response = await fetch('http://localhost:8082/customer/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Registration successful:', result);
        console.log('User registered with role:', formData.role);
        // Navigate to home page after successful registration
        navigate('/');
      } else {
        const errorData = await response.json();
        console.log('Error response:', errorData); // Log the error response
        
        // Check for different types of email conflict errors
        if (response.status === 409 || 
            (errorData.message && (
              errorData.message.toLowerCase().includes('email') ||
              errorData.message.toLowerCase().includes('already exists') ||
              errorData.message.toLowerCase().includes('duplicate') ||
              errorData.message.toLowerCase().includes('conflict')
            ))) {
          setError('Email already exists. Please use a different email address.');
        } else {
          setError('Email already exists. Please use a different email address.');
        }
      }
    } catch (error) {
      setError('Network error. Please try again.');
      console.error('Registration error:', error);
    } finally {
      setLoading(false);
    }
  };

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
          {error && (
            <div style={{ 
              backgroundColor: '#fee', 
              color: '#c33', 
              padding: '10px', 
              borderRadius: '5px', 
              marginBottom: '20px',
              textAlign: 'center'
            }}>
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
              <div className="form-field">
                <div className="field-label">
                  Full Name
                </div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter full name"
                  className="form-input-field"
                  required />
              </div>
              <div className="form-field">
                <div className="field-label">
                  Username
                </div>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Choose a username"
                  className="form-input-field"
                  required />
              </div>
              <div className="form-field">
                <div className="field-label">
                  Password
                </div>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter a strong password"
                  className="form-input-field"
                  required />
              </div>
              <div className="form-field">
                <div className="field-label">
                  Email Address
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="form-input-field"
                  required />
              </div>
              <div className="form-field">
                <div className="field-label">
                  NIC Number
                </div>
                <input
                  type="number"
                  name="nic"
                  value={formData.nic || ''}
                  onChange={handleInputChange}
                  placeholder="e.g., 200012345678"
                  className="form-input-field"
                  required />
              </div>
              <div className="form-field">
                <div className="field-label">
                  Mobile Number
                </div>
                <input
                  type="number"
                  name="mobileNumber"
                  value={formData.mobileNumber || ''}
                  onChange={handleInputChange}
                  placeholder="e.g., 94771234567"
                  className="form-input-field"
                  required />
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
              <button 
                type="submit" 
                className="signup-button" 
                style={{ width: '50%', margin: '0 auto' }}
                disabled={loading}
              >
                {loading ? 'Signing Up...' : 'Sign Up'}
              </button>
            </div>
          </form>
          
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
