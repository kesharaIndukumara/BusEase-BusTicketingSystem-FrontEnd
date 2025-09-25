import React, { useState } from 'react';
import Header from '../common/Header';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Updated interface to match backend entity
interface FormData {
  fullName: string;
  userName: string; // Changed from username to userName to match backend
  nic: string; // Will convert to number when sending
  vehicleRegNumber: string; // Changed from busRegNumber
  password: string;
  busChassisNumber: string; // Changed from chassisNumber
  localRouteNumber: string; // Changed from routeNumber
  sheetsCount: string; // Will convert to number when sending
  busType: 'AC' | 'NON_AC' | '';
  routerType_normal: boolean; // Changed from routeOptions array
  routerType_special: boolean; // Changed from routeOptions array
  routerPermitNumber: string; // Changed from permitNumber, will convert to number
  permitDocument: File | null; // For file upload
  email: string; // Changed from emailAddress
  address: string; // New field
}

const BusOwnerReg: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    userName: '',
    nic: '',
    vehicleRegNumber: '',
    password: '',
    busChassisNumber: '',
    localRouteNumber: '',
    sheetsCount: '',
    busType: '',
    routerType_normal: false,
    routerType_special: false,
    routerPermitNumber: '',
    permitDocument: null,
    email: '',
    address: '',
  });

  const [dragActive, setDragActive] = useState(false);
  const [activeTab, setActiveTab] = useState<'USER' | 'BUS OWNER'>('BUS OWNER');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Update handleBusTypeChange to match backend
  const handleBusTypeChange = (type: 'AC' | 'NON_AC') => {
    setFormData(prev => ({ ...prev, busType: type }));
  };

  // Update route option handlers to work with boolean flags instead of array
  const handleRouteOptionChange = (option: 'normal' | 'special', checked: boolean) => {
    if (option === 'normal') {
      setFormData(prev => ({ ...prev, routerType_normal: checked }));
    } else {
      setFormData(prev => ({ ...prev, routerType_special: checked }));
    }
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

  // Modify handleSubmit to use axios
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccessMessage(null);
    
    try {
      // Create request payload matching backend structure
      const payload = {
        busChassisNumber: formData.busChassisNumber,
        nic: parseInt(formData.nic, 10) || 0, // Convert to number
        fullName: formData.fullName,
        userName: formData.userName,
        localRouteNumber: formData.localRouteNumber,
        vehicleRegNumber: formData.vehicleRegNumber,
        address: formData.address,
        password: formData.password,
        busType: formData.busType,
        sheetsCount: parseInt(formData.sheetsCount, 10) || 0, // Convert to number
        email: formData.email,
        routerPermitNumber: parseInt(formData.routerPermitNumber, 10) || 0, // Convert to number
        routerType_normal: formData.routerType_normal,
        routerType_special: formData.routerType_special,
        role: "userBusOwner" // Add role field
      };
      
      // Send request to API
      const response = await axios.post('http://localhost:8081/busOwner/add', payload);
      
      // If file needs to be uploaded separately, handle that here
      if (formData.permitDocument) {
        const fileFormData = new FormData();
        fileFormData.append('file', formData.permitDocument);
        fileFormData.append('userName', formData.userName); // To link the file to user
        
        await axios.post('http://localhost:8081/busOwner/upload-permit', fileFormData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      }
      
      console.log('Registration successful:', response.data);
      setSuccessMessage('Registration successful! Redirecting to login page...');
      
      // Reset form after successful submission
      handleReset();
      
      // Redirect to login page after 2 seconds
      setTimeout(() => {
        navigate('/signin');
      }, 2000);
      
    } catch (err) {
      console.error('Registration failed:', err);
      setError(err instanceof Error ? err.message : 'An error occurred during registration');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      userName: '',
      nic: '',
      vehicleRegNumber: '',
      password: '',
      busChassisNumber: '',
      localRouteNumber: '',
      sheetsCount: '',
      busType: '',
      routerType_normal: false,
      routerType_special: false,
      routerPermitNumber: '',
      permitDocument: null,
      email: '',
      address: '',
    });
  };

  return (
    <><Header />
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-800 to-blue-500" style={{marginTop: '60px'}}>
      {/* Background decorative circles - responsive positioning */}
      <div className="absolute w-20 h-20 sm:w-30 sm:h-32 bg-white bg-opacity-10 rounded-full left-5 sm:left-20 top-10 sm:top-22"></div>
      <div className="absolute w-32 h-32 sm:w-50 sm:h-54 bg-white bg-opacity-10 rounded-full right-5 sm:right-60 bottom-32 sm:bottom-52"></div>
      <div className="absolute w-16 h-16 sm:w-20 sm:h-22 bg-white bg-opacity-6 rounded-full left-32 sm:left-55 bottom-10 sm:bottom-20"></div>

      {/* Main container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen py-4 sm:py-8 px-2 sm:px-4">
        <div className="w-full max-w-6xl mx-auto bg-gradient-to-b from-white/95 to-slate-50/95 rounded-2xl sm:rounded-3xl border border-white/25 shadow-2xl overflow-hidden">
          {/* Header section */}
          <div className="flex flex-col items-center pt-4 sm:pt-8 pb-4 sm:pb-6 px-4">
            {/* Bus Logo - responsive sizing */}
            <div className="mb-3 sm:mb-4">
              <img
                src="src/assets/img/BusEase-logo-dark.png"
                alt="BusEase Logo"
                className="w-50 h-34 sm:w-58 sm:h-42 object-contain" />
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-1 sm:mb-2 text-center">BusEase Ticketing</h1>
            <p className="text-base sm:text-lg text-slate-500 text-center">Bus Owner Registration</p>
          </div>
                    {/* Tab Navigation */}
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
      onClick={() => setActiveTab('BUS OWNER')}
    >
      BUS OWNER
    </button>
  </div>
</div>

          {/* Form section */}
          <form onSubmit={handleSubmit} className="px-4 sm:px-8 md:px-16 pb-6 sm:pb-8">
            {/* Display success message */}
            {successMessage && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
                {successMessage}
              </div>
            )}
            
            {/* Display error message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                {error}
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {/* Left Column */}
              <div className="space-y-4 sm:space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter full name"
                    className="w-full px-4 py-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-base transition-colors" />
                </div>

                {/* Username */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Username</label>
                  <input
                    type="text"
                    name="userName" // Changed to match backend
                    value={formData.userName}
                    onChange={handleInputChange}
                    placeholder="Choose a username"
                    className="w-full px-4 py-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-base transition-colors" />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email" // Changed to match backend
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-base transition-colors" />
                </div>

                {/* Address - New Field */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Enter your address"
                    className="w-full px-4 py-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-base transition-colors" />
                </div>

                {/* NIC Number */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">NIC Number</label>
                  <input
                    type="text"
                    name="nic" // Changed to match backend
                    value={formData.nic}
                    onChange={handleInputChange}
                    placeholder="Enter NIC (e.g., 200012345678)"
                    className="w-full px-4 py-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-base transition-colors" />
                </div>

                {/* Bus Registration Number */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Bus Registration Number</label>
                  <input
                    type="text"
                    name="vehicleRegNumber" // Changed to match backend
                    value={formData.vehicleRegNumber}
                    onChange={handleInputChange}
                    placeholder="e.g., WP NA-1234"
                    className="w-full px-4 py-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-base transition-colors" />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4 sm:space-y-6">
                {/* Bus Chassis Number */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Bus Chassis Number</label>
                  <input
                    type="text"
                    name="busChassisNumber" // Changed to match backend
                    value={formData.busChassisNumber}
                    onChange={handleInputChange}
                    placeholder="e.g., JH4DA9350LS000000"
                    className="w-full px-4 py-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-base transition-colors" />
                </div>

                {/* Local Route Number */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Local Route Number</label>
                  <input
                    type="text"
                    name="localRouteNumber" // Changed to match backend
                    value={formData.localRouteNumber}
                    onChange={handleInputChange}
                    placeholder="e.g., 138 Maharagama – Pettah"
                    className="w-full px-4 py-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-base transition-colors" />
                </div>

                {/* Bus Type and Sheets Count */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Bus Type</label>
                    <div className="flex flex-row sm:flex-col gap-4 sm:gap-2 sm:space-y-0">
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="busType"
                          checked={formData.busType === 'AC'}
                          onChange={() => handleBusTypeChange('AC')}
                          className="w-5 h-5 sm:w-4 sm:h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                        <span className="text-sm text-gray-700">AC</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="busType"
                          checked={formData.busType === 'NON_AC'}
                          onChange={() => handleBusTypeChange('NON_AC')}
                          className="w-5 h-5 sm:w-4 sm:h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                        <span className="text-sm text-gray-700">NON AC</span>
                      </label>
                    </div>
                  </div>

                  <div className="w-full sm:w-32">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Sheets Count</label>
                    <input
                      type="number"
                      name="sheetsCount"
                      value={formData.sheetsCount}
                      onChange={handleInputChange}
                      placeholder="e.g., 55"
                      className="w-full px-4 py-3 sm:px-3 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-base sm:text-sm" />
                  </div>
                </div>

                {/* Route Options - Updated to match backend */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Route Options</label>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.routerType_normal}
                        onChange={(e) => handleRouteOptionChange('normal', e.target.checked)}
                        className="w-5 h-5 sm:w-4 sm:h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                      <span className="text-sm text-gray-700 select-none">Normal routes only</span>
                    </label>
                    <label className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.routerType_special}
                        onChange={(e) => handleRouteOptionChange('special', e.target.checked)}
                        className="w-5 h-5 sm:w-4 sm:h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                      <span className="text-sm text-gray-700 select-none">Special tours available</span>
                    </label>
                  </div>
                </div>

                {/* Bus Route Permit Number */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Bus Route Permit Number</label>
                  <input
                    type="number"
                    name="routerPermitNumber" // Changed to match backend
                    value={formData.routerPermitNumber}
                    onChange={handleInputChange}
                    placeholder="Enter permit number"
                    className="w-full px-4 py-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-base transition-colors" />
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
                    className="w-full px-4 py-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-base transition-colors" />
                </div>
              </div>
            </div>

            {/* File Upload Section */}
            <div className="mt-6 sm:mt-8">
              <label className="block text-sm font-bold text-gray-700 mb-3 sm:mb-4">Attach Permit Document</label>
              <div
                className={`relative border-2 border-dashed ${dragActive ? 'border-blue-400 bg-blue-50' : 'border-gray-300'} rounded-lg p-4 sm:p-8 text-center transition-colors`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <svg className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <div className="flex-1">
                    <p className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                      <span className="hidden sm:inline">Drag & drop file here</span>
                      <span className="sm:hidden">Upload document</span>
                    </p>
                    <p className="text-sm text-gray-600 mb-3 sm:mb-2">
                      <span className="hidden sm:inline">or</span>
                    </p>
                    <label className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 sm:py-2 sm:px-6 rounded-lg cursor-pointer transition-colors w-full sm:w-auto text-center">
                      <span className="sm:hidden">Choose File</span>
                      <span className="hidden sm:inline">Browse files</span>
                      <input
                        type="file"
                        className="hidden"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleFileInput} />
                    </label>
                    <p className="text-xs text-gray-400 mt-2">PDF, JPG, or PNG • Max 10MB</p>
                  </div>
                </div>
                {formData.permitDocument && (
                  <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-sm text-green-700 break-all">
                      File uploaded: {formData.permitDocument.name}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
              <button
                type="button"
                onClick={handleReset}
                disabled={isLoading}
                className="w-full sm:w-40 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 text-gray-700 font-bold py-4 sm:py-3 px-6 rounded-lg transition-colors text-base disabled:opacity-50"
              >
                Reset
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full sm:w-40 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-bold py-4 sm:py-3 px-6 rounded-lg transition-colors text-base disabled:opacity-50 flex justify-center items-center"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Submit'
                )}
              </button>
            </div>
          </form>

          {/* Footer */}
          <div className="text-center py-4 sm:py-6 border-t border-gray-200 px-4">
            <p className="text-xs text-gray-400 leading-relaxed">© 2024 BusEase Ticketing System. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div></>
  );
};

export default BusOwnerReg;
