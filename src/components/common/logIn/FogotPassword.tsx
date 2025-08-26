"use client";
import * as React from "react";

function ForgotPassword() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-800 to-blue-500 flex items-center justify-center relative overflow-hidden font-sans p-4 sm:p-6">
      {/* Background decorative circles */}
      <div className="absolute w-full h-full pointer-events-none">
        <div className="absolute rounded-full w-24 h-24 top-16 left-16 sm:w-32 sm:h-32 sm:top-20 sm:left-20 bg-white/10" />
        <div className="absolute rounded-full w-32 h-32 bottom-8 right-8 sm:w-48 sm:h-48 sm:bottom-12 sm:right-12 bg-white/10" />
        <div className="absolute rounded-full w-16 h-16 bottom-32 left-32 sm:w-20 sm:h-20 sm:bottom-40 sm:left-40 bg-white/[0.06]" />
      </div>

      {/* Main form container */}
      <div className="w-full max-w-md sm:max-w-lg lg:max-w-2xl lg:w-[676px] min-h-[500px] lg:h-[660px] bg-gradient-to-b from-white/95 to-slate-50/95 border border-white/25 rounded-2xl p-6 sm:p-8 lg:px-20 lg:py-15 flex flex-col items-center relative backdrop-blur-sm">
        
        {/* Logo/Icons */}
        <div className="flex items-center gap-2 mb-6 sm:mb-8 lg:mb-10">
          {/* Bus Icon */}
          <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-[66px] lg:h-16">
            <div className="w-full h-[60%] border-2 border-blue-800 rounded-md absolute top-[20%] left-0 bg-blue-600" />
            <div className="absolute top-[30%] left-[8%] flex gap-1">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-sm bg-blue-300" />
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-sm bg-blue-300" />
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-sm bg-blue-300" />
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-sm bg-blue-300" />
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-sm bg-blue-300" />
            </div>
            <div className="absolute bottom-0 left-[8%] flex gap-6 sm:gap-8 lg:gap-[42px]">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gray-700" />
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gray-700" />
            </div>
            <div className="w-[50%] h-2 rounded-sm absolute top-[10%] left-[25%] bg-blue-800" />
          </div>

          {/* Building Icon */}
          <div className="relative w-8 h-12 sm:w-10 sm:h-16 lg:w-[38px] lg:h-16">
            <div className="w-[75%] h-full border-[1.5px] border-amber-500 rounded-sm absolute top-0 left-[12%] bg-amber-400" />
            <div className="absolute left-0 top-[25%] flex flex-col gap-2 sm:gap-3">
              <div className="w-1 h-1 rounded-full bg-amber-500/30" />
              <div className="w-1 h-1 rounded-full bg-amber-500/30" />
              <div className="w-1 h-1 rounded-full bg-amber-500/30" />
              <div className="w-1 h-1 rounded-full bg-amber-500/30" />
              <div className="w-1 h-1 rounded-full bg-amber-500/30" />
              <div className="w-1 h-1 rounded-full bg-amber-500/30" />
            </div>
            <div className="absolute left-[20%] top-[20%] flex flex-col gap-2 sm:gap-3">
              <div className="h-px bg-amber-500 w-4" />
              <div className="h-px bg-amber-500 w-4" />
              <div className="h-px bg-amber-500 w-4" />
              <div className="h-px bg-amber-500 w-4" />
            </div>
          </div>
        </div>

        {/* Title and subtitle */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-800 mb-2">
            Forgot Password
          </div>
          <div className="text-sm sm:text-base text-slate-500">
            Reset your account access
          </div>
        </div>

        {/* Form */}
        <div className="w-full max-w-md sm:max-w-lg lg:max-w-[540px]">
          <div className="mb-5 sm:mb-6 lg:mb-8">
            <div className="text-sm font-bold text-gray-700 mb-2">
              Mobile Number or Email
            </div>
            <input
              type="text"
              placeholder="Enter registered mobile number or email"
              className="w-full h-12 sm:h-14 lg:h-[54px] bg-white border border-gray-300 rounded-md px-4 text-sm text-gray-400 box-border focus:border-blue-500 focus:outline-none transition-colors"
            />
          </div>

          <div className="mb-6 sm:mb-7 lg:mb-8">
            <div className="text-sm font-bold text-gray-700 mb-2">
              Enter OTP
            </div>
            <input
              type="text"
              placeholder="6-digit OTP"
              className="w-full h-12 sm:h-14 lg:h-[54px] bg-white border border-gray-300 rounded-md px-4 text-sm text-gray-400 box-border focus:border-blue-500 focus:outline-none transition-colors"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-5 mb-8 sm:mb-12 lg:mb-15">
            <button className="h-12 sm:h-13 lg:h-13 border-none rounded-md text-sm sm:text-base font-bold text-white cursor-pointer transition-all duration-200 w-full sm:w-auto sm:flex-1 lg:w-65 bg-blue-500 hover:bg-blue-600 active:bg-blue-700">
              Send OTP
            </button>
            <button className="h-12 sm:h-13 lg:h-13 border-none rounded-md text-sm sm:text-base font-bold text-white cursor-pointer transition-all duration-200 w-full sm:w-auto sm:flex-1 lg:w-65 bg-green-600 hover:bg-green-700 active:bg-green-800">
              Reset Password
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-xs sm:text-xs text-gray-400 text-center mt-auto pt-4 lg:absolute lg:bottom-10">
          © 2024 BusEase Ticketing System. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
