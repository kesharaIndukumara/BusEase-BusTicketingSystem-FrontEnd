import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Header from '../Header.tsx';


const Login: React.FC = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<'USER' | 'BUS OWNER' | 'ADMIN'>('USER');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRoleSelect = (role: 'USER' | 'BUS OWNER' | 'ADMIN') => {
    setSelectedRole(role);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Determine API endpoint based on selected role
    let apiEndpoint = '';
    let redirectPath = '';
    
    switch (selectedRole) {
      // Note: USER login uses port 8082, while BUS OWNER and ADMIN use port 8081. This is intentional due to backend service separation.
      case 'USER':
        apiEndpoint = 'http://localhost:8082/customer/login';
        redirectPath = '/UserDashboard';
        break;
      case 'BUS OWNER':
        apiEndpoint = 'http://localhost:8081/busOwner/login';
        redirectPath = '/bus-owner-dashboard';
        break;
      case 'ADMIN':
        apiEndpoint = 'http://localhost:8081/admin/login';
        redirectPath = '/admin-dashboard';
        break;
      default:
        apiEndpoint = 'http://localhost:8082/customer/login';
        redirectPath = '/UserDashboard';
    }

    console.log('Sending login request with:', { email, password, role: selectedRole, endpoint: apiEndpoint });

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          role: selectedRole
        }),
      });

      console.log('Response received:', response.status, response.statusText);

      if (response.ok) {
        // Backend returns plain text "Login Successful", no need to parse JSON
        const responseText = await response.text();
        console.log('Response text:', responseText);
        
        // Redirect to role-specific dashboard on successful login
        navigate(redirectPath);
      } else {
        const errorText = await response.text();
        setError(errorText || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Login error details:', error);
      setError('Cannot connect to server. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div
        className="w-screen  relative flex flex-col font-['Inter',sans-serif] overflow-hidden bg-gradient-to-br from-blue-100 via-sky-200 to-blue-600"
        style={{ marginTop: '60px', minHeight: 'calc(100vh - 60px)'   }}
      >
        <div className="relative z-[10]">

        </div>

        <div className="flex-1 flex items-center justify-center px-4 py-2 sm:px-6 sm:py-4">
          <div className="absolute w-full h-full top-0 left-0 z-[1]" />
          <div className="rounded-2xl p-6 w-full max-w-md relative z-[2] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] bg-white md:p-8 lg:max-w-lg">

            {/* Logo and Title Section */}
            <div className="text-center mb-6 sm:mb-6">
              <div className="flex justify-center mb-2">
                <img
                  src="/src/assets/img/BusEase-logo-dark.png"
                  alt="BusEase Logo"
                  className="h-12 w-auto sm:h-16"
                />
              </div>
              <div className="text-xs text-gray-500 sm:text-sm">
                Your Journey, Our Priority
              </div>
            </div>

            {/* Role Selection Tabs */}
            <div className="flex mb-4 rounded-lg p-1 bg-gray-100 sm:mb-5">
              {(['USER', 'BUS OWNER', 'ADMIN'] as const).map((role) => (
                <div
                  key={role}
                  className={`flex-1 text-center py-2 px-2 text-xs font-medium rounded-md cursor-pointer transition-all duration-200 touch-manipulation sm:py-2.5 sm:px-3 sm:text-sm ${selectedRole === role
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-800'}`}
                  onClick={() => handleRoleSelect(role)}
                >
                  {role}
                </div>
              ))}
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit}>
              {/* Error Message */}
              {error && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                  {error}
                </div>
              )}

              {/* Email Field */}
              <div className="mb-4 sm:mb-4">
                <div className="text-sm font-medium text-gray-700 mb-1.5">
                  Email Address
                </div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-2.5 px-3 border border-gray-300 rounded-lg text-sm text-gray-900 transition-all duration-200 box-border bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required />
              </div>

              {/* Password Field */}
              <div className="mb-4 sm:mb-4">
                <div className="text-sm font-medium text-gray-700 mb-1.5">
                  Password
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full py-2.5 px-3 pr-10 border border-gray-300 rounded-lg text-sm text-gray-900 transition-all duration-200 box-border bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required />
                  <div
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer text-base touch-manipulation p-1"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? '👁️' : '👁️‍🗨️'}
                  </div>
                </div>
              </div>

              {/* Remember Me and Forgot Password */}
              <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:justify-between sm:items-center sm:mb-5">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 accent-blue-500 touch-manipulation" />
                  <div className="text-sm text-gray-700">
                    Remember me
                  </div>
                </div>
                <div className="text-sm text-blue-500 cursor-pointer hover:text-blue-600 transition-colors touch-manipulation py-1">
                  <Link to="/ForgotPassword">Forgot Password?</Link>
                </div>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full text-white border-none rounded-lg py-3 text-sm font-medium cursor-pointer transition-all duration-200 mb-4 bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 touch-manipulation active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Logging In...' : 'Log In'}
              </button>
            </form>

            {/* Sign Up Link */}
            <div className="text-center">
              <div className="text-sm text-gray-500 mb-1">
                Don't have an account?
              </div>
              <Link
                to="/signup"
                className="text-sm text-blue-500 cursor-pointer hover:text-blue-600 transition-colors touch-manipulation py-1 inline-block"
              >
                Sign up here
              </Link>
            </div>

            {/* Footer Copyright */}
            <div className="text-xs text-gray-500 text-center leading-relaxed pt-4 mt-4 border-t border-gray-200">
              © 2024 BusEase Ticketing System. All rights reserved.
            </div>
          </div>
        </div>

      </div>
    </>
  );
};


export default Login;
