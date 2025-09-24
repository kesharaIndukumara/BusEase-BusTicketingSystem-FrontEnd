import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Header from '../Header.tsx';


const Login: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<'USER' | 'BUS OWNER' | 'ADMIN'>('USER');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleRoleSelect = (role: 'USER' | 'BUS OWNER' | 'ADMIN') => {
    setSelectedRole(role);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Login attempt:', { email, password, role: selectedRole, rememberMe });
  };

  return (
    <><Header />
    <div className="w-screen min-h-screen relative flex flex-col font-['Inter',sans-serif] overflow-hidden bg-blue-600" style={{ marginTop: '60px' }}>
      <div className="relative z-[10]">

      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-6 sm:px-6 sm:py-8">
        <div className="absolute w-full h-full top-0 left-0 z-[1]" />
        <div className="rounded-2xl p-8 w-full max-w-md relative z-[2] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] bg-white md:p-10 lg:p-12 lg:max-w-lg">

          {/* Logo and Title Section */}
          <div className="text-center mb-10 sm:mb-10">
            <div className="flex justify-center mb-4">
              <img
                src="/src/assets/img/BusEase-logo-dark.png"
                alt="BusEase Logo"
                className="h-16 w-auto sm:h-44" // Increased from h-16 to h-44 and added larger size for sm breakpoint
              />
            </div>
            <div className="text-sm text-gray-500">
              Your Journey, Our Priority
            </div>
          </div>

          {/* Role Selection Tabs */}
          <div className="flex mb-6 rounded-lg p-1 bg-gray-100 sm:mb-8 sm:flex-row">
            {(['USER', 'BUS OWNER', 'ADMIN'] as const).map((role) => (
              <div
                key={role}
                className={`flex-1 text-center py-2.5 px-2 text-xs font-medium rounded-md cursor-pointer transition-all duration-200 touch-manipulation sm:py-3 sm:px-4 sm:text-sm ${selectedRole === role
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
            {/* Email Field */}
            <div className="mb-5 sm:mb-6">
              <div className="text-sm font-medium text-gray-700 mb-2">
                Email Address
              </div>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-3 px-4 border border-gray-300 rounded-lg text-base text-gray-900 transition-all duration-200 box-border bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required />
            </div>

            {/* Password Field */}
            <div className="mb-5 sm:mb-6">
              <div className="text-sm font-medium text-gray-700 mb-2">
                Password
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full py-3 px-4 pr-12 border border-gray-300 rounded-lg text-base text-gray-900 transition-all duration-200 box-border bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required />
                <div
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer text-lg touch-manipulation p-1"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </div>
              </div>
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex flex-col gap-3 mb-6 sm:flex-row sm:justify-between sm:items-center sm:mb-8">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-5 h-5 accent-blue-500 touch-manipulation sm:w-4 sm:h-4" />
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
              className="w-full text-white border-none rounded-lg py-4 text-base font-medium cursor-pointer transition-all duration-200 mb-6 bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 touch-manipulation active:scale-98 sm:py-3.5"
            >
              Log In
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="text-center">
            <div className="text-sm text-gray-500 mb-2">
              Don't have an account?
            </div>
            <Link
              to="/signup"
              className="text-sm text-blue-500 cursor-pointer hover:text-blue-600 transition-colors touch-manipulation py-1 inline-block"
            >
              Sign up here
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="text-xs text-white/70 z-[2] px-4 text-center leading-relaxed sm:text-sm py-4">
        © 2024 BusEase Ticketing System. All rights reserved.
      </div>
    </div></>
  );
};

export default Login;
