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
              className="w-full text-white border-none rounded-lg py-3 text-sm font-medium cursor-pointer transition-all duration-200 mb-4 bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 touch-manipulation active:scale-98"
            >
              Log In
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

    </div></>
  );
};

export default Login;

