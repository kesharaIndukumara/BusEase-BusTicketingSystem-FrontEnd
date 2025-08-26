import React, { useState } from 'react';

interface FormData {
  fullName: string;
  username: string;
  nicNumber: string;
  busRegNumber: string;
  password: string;
  chassisNumber: string;
  routeNumber: string;
  sheetsCount: string;
  busType: 'AC' | 'NON-AC' | '';
  routeOptions: string[];
  permitNumber: string;
  permitDocument: File | null;
}

const BusOwnerReg: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    username: '',
    nicNumber: '',
    busRegNumber: '',
    password: '',
    chassisNumber: '',
    routeNumber: '',
    sheetsCount: '',
    busType: '',
    routeOptions: [],
    permitNumber: '',
    permitDocument: null,
  });

  const [dragActive, setDragActive] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBusTypeChange = (type: 'AC' | 'NON-AC') => {
    setFormData(prev => ({ ...prev, busType: type }));
  };

  const handleRouteOptionChange = (option: string) => {
    setFormData(prev => ({
      ...prev,
      routeOptions: prev.routeOptions.includes(option)
        ? prev.routeOptions.filter(o => o !== option)
        : [...prev.routeOptions, option]
    }));
  };

  const handleFileUpload = (file: File) => {
    if (file.size <= 10 * 1024 * 1024) { // 10MB limit
      setFormData(prev => ({ ...prev, permitDocument: file }));
    } else {
      alert('File size must be less than 10MB');
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileUpload(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      username: '',
      nicNumber: '',
      busRegNumber: '',
      password: '',
      chassisNumber: '',
      routeNumber: '',
      sheetsCount: '',
      busType: '',
      routeOptions: [],
      permitNumber: '',
      permitDocument: null,
    });
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-800 to-blue-500">
      {/* Background decorative circles */}
      <div className="absolute w-30 h-32 bg-white bg-opacity-10 rounded-full left-20 top-22"></div>
      <div className="absolute w-50 h-54 bg-white bg-opacity-10 rounded-full right-60 bottom-52"></div>
      <div className="absolute w-20 h-22 bg-white bg-opacity-6 rounded-full left-55 bottom-20"></div>

      {/* Main container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen py-8 px-4">
        <div className="w-full max-w-6xl mx-auto bg-gradient-to-b from-white/95 to-slate-50/95 rounded-3xl border border-white/25 shadow-2xl overflow-hidden">
          {/* Header section */}
          <div className="flex flex-col items-center pt-8 pb-6">
            {/* Bus Icon */}
            <div className="mb-4">
              <svg width="113" height="61" viewBox="0 0 114 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M65 14.4023H7C3.68629 14.4023 1 17.309 1 20.8945V44.6992C1 48.2848 3.68629 51.1914 7 51.1914H65C68.3137 51.1914 71 48.2848 71 44.6992V20.8945C71 17.309 68.3137 14.4023 65 14.4023Z" fill="#2563EB" stroke="#1E40AF" strokeWidth="2"/>
                <path d="M15.5 20.8945H8.5C7.67157 20.8945 7 21.6212 7 22.5176V26.8457C7 27.7421 7.67157 28.4688 8.5 28.4688H15.5C16.3284 28.4688 17 27.7421 17 26.8457V22.5176C17 21.6212 16.3284 20.8945 15.5 20.8945Z" fill="#60A5FA"/>
                <path d="M27.5 20.8945H20.5C19.6716 20.8945 19 21.6212 19 22.5176V26.8457C19 27.7421 19.6716 28.4688 20.5 28.4688H27.5C28.3284 28.4688 29 27.7421 29 26.8457V22.5176C29 21.6212 28.3284 20.8945 27.5 20.8945Z" fill="#60A5FA"/>
                <path d="M39.5 20.8945H32.5C31.6716 20.8945 31 21.6212 31 22.5176V26.8457C31 27.7421 31.6716 28.4688 32.5 28.4688H39.5C40.3284 28.4688 41 27.7421 41 26.8457V22.5176C41 21.6212 40.3284 20.8945 39.5 20.8945Z" fill="#60A5FA"/>
                <path d="M51.5 20.8945H44.5C43.6716 20.8945 43 21.6212 43 22.5176V26.8457C43 27.7421 43.6716 28.4688 44.5 28.4688H51.5C52.3284 28.4688 53 27.7421 53 26.8457V22.5176C53 21.6212 52.3284 20.8945 51.5 20.8945Z" fill="#60A5FA"/>
                <path d="M45 7.91016H17C15.8954 7.91016 15 8.87904 15 10.0742V14.4023C15 15.5975 15.8954 16.5664 17 16.5664H45C46.1046 16.5664 47 15.5975 47 14.4023V10.0742C47 8.87904 46.1046 7.91016 45 7.91016Z" fill="#1E40AF"/>
                <path d="M17 62.0117C20.3137 62.0117 23 59.1051 23 55.5195C23 51.934 20.3137 49.0273 17 49.0273C13.6863 49.0273 11 51.934 11 55.5195C11 59.1051 13.6863 62.0117 17 62.0117Z" fill="#374151"/>
                <path d="M55 62.0117C58.3137 62.0117 61 59.1051 61 55.5195C61 51.934 58.3137 49.0273 55 49.0273C51.6863 49.0273 49 51.934 49 55.5195C49 59.1051 51.6863 62.0117 55 62.0117Z" fill="#374151"/>
                <path d="M107 1.41797H81C78.7909 1.41797 77 3.35574 77 5.74609V57.6836C77 60.074 78.7909 62.0117 81 62.0117H107C109.209 62.0117 111 60.074 111 57.6836V5.74609C111 3.35574 109.209 1.41797 107 1.41797Z" fill="#FBBF24" stroke="#F59E0B" strokeWidth="1.5"/>
                <path d="M77 24.1406C78.6569 24.1406 80 22.6873 80 20.8945C80 19.1018 78.6569 17.6484 77 17.6484C75.3431 17.6484 74 19.1018 74 20.8945C74 22.6873 75.3431 24.1406 77 24.1406Z" fill="#F59E0B" fillOpacity="0.3"/>
                <path d="M111 24.1406C112.657 24.1406 114 22.6873 114 20.8945C114 19.1018 112.657 17.6484 111 17.6484C109.343 17.6484 108 19.1018 108 20.8945C108 22.6873 109.343 24.1406 111 24.1406Z" fill="#F59E0B" fillOpacity="0.3"/>
                <path d="M77 34.9609C78.6569 34.9609 80 33.5076 80 31.7148C80 29.9221 78.6569 28.4688 77 28.4688C75.3431 28.4688 74 29.9221 74 31.7148C74 33.5076 75.3431 34.9609 77 34.9609Z" fill="#F59E0B" fillOpacity="0.3"/>
                <path d="M111 34.9609C112.657 34.9609 114 33.5076 114 31.7148C114 29.9221 112.657 28.4688 111 28.4688C109.343 28.4688 108 29.9221 108 31.7148C108 33.5076 109.343 34.9609 111 34.9609Z" fill="#F59E0B" fillOpacity="0.3"/>
                <path d="M77 45.7812C78.6569 45.7812 80 44.3279 80 42.5352C80 40.7424 78.6569 39.2891 77 39.2891C75.3431 39.2891 74 40.7424 74 42.5352C74 44.3279 75.3431 45.7812 77 45.7812Z" fill="#F59E0B" fillOpacity="0.3"/>
                <path d="M111 45.7812C112.657 45.7812 114 44.3279 114 42.5352C114 40.7424 112.657 39.2891 111 39.2891C109.343 39.2891 108 40.7424 108 42.5352C108 44.3279 109.343 45.7812 111 45.7812Z" fill="#F59E0B" fillOpacity="0.3"/>
                <path d="M83 16.5664H105" stroke="#F59E0B"/>
                <path d="M83 27.3867H99" stroke="#F59E0B"/>
                <path d="M83 38.207H105" stroke="#F59E0B"/>
                <path d="M83 49.0273H95" stroke="#F59E0B"/>
              </svg>
            </div>
            
            <h1 className="text-3xl font-bold text-blue-800 mb-2">BusEase Ticketing</h1>
            <p className="text-lg text-slate-500">Bus Owner Registration</p>
          </div>

          {/* Form section */}
          <form onSubmit={handleSubmit} className="px-8 md:px-16 pb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>

                {/* Username */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Username</label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="Choose a username"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>

                {/* NIC Number */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">NIC Number</label>
                  <input
                    type="text"
                    name="nicNumber"
                    value={formData.nicNumber}
                    onChange={handleInputChange}
                    placeholder="Enter NIC (e.g., 200012345678)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>

                {/* Bus Registration Number */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Bus Registration Number</label>
                  <input
                    type="text"
                    name="busRegNumber"
                    value={formData.busRegNumber}
                    onChange={handleInputChange}
                    placeholder="e.g., WP NA-1234"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="xxxxxxxxxxxxxxxxxxx"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Bus Chassis Number */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Bus Chassis Number</label>
                  <input
                    type="text"
                    name="chassisNumber"
                    value={formData.chassisNumber}
                    onChange={handleInputChange}
                    placeholder="e.g., JH4DA9350LS000000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>

                {/* Local Route Number */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Local Route Number</label>
                  <input
                    type="text"
                    name="routeNumber"
                    value={formData.routeNumber}
                    onChange={handleInputChange}
                    placeholder="e.g., 138 Maharagama – Pettah"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>

                {/* Bus Type and Sheets Count */}
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Bus Type</label>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="busType"
                          checked={formData.busType === 'AC'}
                          onChange={() => handleBusTypeChange('AC')}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">AC</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="busType"
                          checked={formData.busType === 'NON-AC'}
                          onChange={() => handleBusTypeChange('NON-AC')}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">NON-AC</span>
                      </label>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">Select one (app logic should enforce)</p>
                  </div>

                  <div className="w-32">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Sheets Count</label>
                    <input
                      type="number"
                      name="sheetsCount"
                      value={formData.sheetsCount}
                      onChange={handleInputChange}
                      placeholder="e.g., 55"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                  </div>
                </div>

                {/* Route Options */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Route Options</label>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.routeOptions.includes('normal')}
                        onChange={() => handleRouteOptionChange('normal')}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">Normal routes only</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.routeOptions.includes('special')}
                        onChange={() => handleRouteOptionChange('special')}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">Special tours available</span>
                    </label>
                  </div>
                </div>

                {/* Bus Route Permit Number */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Bus Route Permit Number</label>
                  <input
                    type="text"
                    name="permitNumber"
                    value={formData.permitNumber}
                    onChange={handleInputChange}
                    placeholder="Enter permit number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
              </div>
            </div>

            {/* File Upload Section */}
            <div className="mt-8">
              <label className="block text-sm font-bold text-gray-700 mb-4">Attach Permit Document</label>
              <div
                className={`relative border-2 border-dashed ${dragActive ? 'border-blue-400 bg-blue-50' : 'border-gray-300'} rounded-lg p-8 text-center transition-colors`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <div className="flex items-center justify-center space-x-4">
                  <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <div>
                    <p className="text-lg font-bold text-gray-900 mb-1">Drag & drop file here</p>
                    <p className="text-sm text-gray-600 mb-2">or</p>
                    <label className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg cursor-pointer transition-colors">
                      Browse files
                      <input
                        type="file"
                        className="hidden"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleFileInput}
                      />
                    </label>
                    <p className="text-xs text-gray-400 mt-2">PDF, JPG, or PNG • Max 10MB</p>
                  </div>
                </div>
                {formData.permitDocument && (
                  <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-sm text-green-700">
                      File uploaded: {formData.permitDocument.name}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8">
              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-40 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Reset
              </button>
              <button
                type="submit"
                className="w-full sm:w-40 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Submit
              </button>
            </div>
          </form>

          {/* Footer */}
          <div className="text-center py-6 border-t border-gray-200">
            <p className="text-xs text-gray-400">© 2024 BusEase Ticketing System. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusOwnerReg;
