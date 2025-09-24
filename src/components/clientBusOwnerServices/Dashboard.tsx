import React from 'react';
import Header from '../common/Header';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <div className="w-full min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-800 to-blue-500 font-sans" style={{ marginTop: '60px' }}>
        {/* Background decorative circles - hide on mobile for cleaner look */}
        <div className="hidden md:block absolute left-[60px] top-[80px] w-[120px] h-[120px] rounded-full bg-white/10 z-[1]" />
        <div className="hidden md:block absolute right-[60px] bottom-[200px] w-[200px] h-[200px] rounded-full bg-white/10 z-[1]" />

        {/* Main Content Container - Centered */}
        <div className="relative z-[2] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-6">

            {/* Sidebar */}
            <div className="w-full lg:w-[360px] flex-shrink-0 order-2 lg:order-1">
              <div className="w-full h-auto lg:h-full bg-gradient-to-b from-white/98 to-slate-50/98 border border-black/6 rounded-xl lg:rounded-[20px] p-3 sm:p-4 lg:p-5">

                {/* Sidebar Header */}
                <h2 className="text-blue-700 text-base sm:text-lg font-bold mb-3 sm:mb-2">Your Routes &amp; Buses</h2>

                {/* Search Section */}
                <div className="mb-4 sm:mb-6">
                  <label className="text-slate-500 text-xs mb-2 block">Search</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Route or Plate..."
                      className="w-full h-12 sm:h-[45px] px-3 sm:px-4 border border-slate-200 rounded-lg sm:rounded-[10px] bg-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 touch-manipulation" />
                  </div>
                </div>

                {/* Routes Section */}
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-slate-500 text-xs mb-2">Routes</h3>

                  {/* Route Items */}
                  <div className="space-y-2 max-h-64 sm:max-h-none overflow-y-auto">
                    <div className="bg-white border border-gray-200 rounded-xl sm:rounded-[13px] p-3 sm:p-[14px] cursor-pointer hover:bg-gray-50 transition-colors touch-manipulation">
                      <div className="text-slate-900 text-sm font-bold mb-1 break-words">Route 138 — Maharagama ⇄ Pettah</div>
                      <div className="text-slate-500 text-xs">Buses: 12 • AC: 5 • Non-AC: 7</div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl sm:rounded-[13px] p-3 sm:p-[14px] cursor-pointer hover:bg-gray-50 transition-colors touch-manipulation">
                      <div className="text-slate-900 text-sm font-bold mb-1 break-words">Route 87 — Colombo ⇄ Jaffna</div>
                      <div className="text-slate-500 text-xs">Buses: 8 • AC: 3 • Non-AC: 5</div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl sm:rounded-[13px] p-3 sm:p-[14px] cursor-pointer hover:bg-gray-50 transition-colors touch-manipulation">
                      <div className="text-slate-900 text-sm font-bold mb-1 break-words">Route 99 — Colombo ⇄ Batticaloa</div>
                      <div className="text-slate-500 text-xs">Buses: 6 • AC: 2 • Non-AC: 4</div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl sm:rounded-[13px] p-3 sm:p-[14px] cursor-pointer hover:bg-gray-50 transition-colors touch-manipulation">
                      <div className="text-slate-900 text-sm font-bold mb-1 break-words">Route 98 — Colombo ⇄ Badulla</div>
                      <div className="text-slate-500 text-xs">Buses: 5 • AC: 2 • Non-AC: 3</div>
                    </div>
                  </div>
                </div>

                {/* Buses Section */}
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-slate-500 text-xs mb-2">Buses</h3>

                  <div className="space-y-2 max-h-48 sm:max-h-none overflow-y-auto">
                    <div className="bg-white border border-gray-200 rounded-xl sm:rounded-[13px] p-3 cursor-pointer hover:bg-gray-50 transition-colors touch-manipulation">
                      <div className="flex items-center gap-3">
                        <div className="bg-slate-100 border border-slate-300 rounded-md p-2 w-16 sm:w-[70px] h-9 sm:h-[37px] flex items-center justify-center flex-shrink-0">
                          <span className="text-slate-600 text-xs">WP NA-1234</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-slate-900 text-xs">AC • 45 seats</div>
                          <div className="text-slate-500 text-xs">Route 87</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl sm:rounded-[13px] p-3 cursor-pointer hover:bg-gray-50 transition-colors touch-manipulation">
                      <div className="flex items-center gap-3">
                        <div className="bg-slate-100 border border-slate-300 rounded-md p-2 w-16 sm:w-[70px] h-9 sm:h-[37px] flex items-center justify-center flex-shrink-0">
                          <span className="text-slate-600 text-xs">WP ND-4521</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-slate-900 text-xs">Non-AC • 49 seats</div>
                          <div className="text-slate-500 text-xs">Route 99</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl sm:rounded-[13px] p-3 cursor-pointer hover:bg-gray-50 transition-colors touch-manipulation">
                      <div className="flex items-center gap-3">
                        <div className="bg-slate-100 border border-slate-300 rounded-md p-2 w-16 sm:w-[70px] h-9 sm:h-[37px] flex items-center justify-center flex-shrink-0">
                          <span className="text-slate-600 text-xs">WP NB-7788</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-slate-900 text-xs">AC • 40 seats</div>
                          <div className="text-slate-500 text-xs">Route 98</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bus Seat Count */}
                <div className="bg-white border border-gray-200 rounded-xl sm:rounded-[13px] p-3 sm:p-[14px] mb-3 sm:mb-4">
                  <div className="text-slate-900 text-sm font-bold mb-1">Bus Seat Count</div>
                  <div className="text-slate-500 text-xs">Selected bus: 45 / 49 available</div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mb-3 sm:mb-4">
                  <button className="bg-blue-500 text-white font-bold text-sm px-6 sm:px-10 py-3 rounded-lg sm:rounded-[10px] hover:bg-blue-600 transition-colors flex-1 sm:flex-none touch-manipulation">
                    Add Route
                  </button>
                  <button className="bg-slate-200 text-slate-700 font-bold text-sm px-6 sm:px-10 py-3 rounded-lg sm:rounded-[10px] hover:bg-slate-300 transition-colors flex-1 sm:flex-none touch-manipulation">
                    Register Bus
                  </button>
                </div>

                {/* Notifications */}
                <div className="bg-white border border-gray-200 rounded-xl sm:rounded-[13px] p-3 sm:p-4">
                  <h3 className="text-blue-700 text-sm font-bold mb-3">Notifications</h3>
                  <div className="space-y-2 text-slate-700 text-xs max-h-32 sm:max-h-none overflow-y-auto">
                    <div className="py-1">• Route 87 demand +12% this week</div>
                    <div className="py-1">• New permit uploaded (WP ND-4521)</div>
                    <div className="py-1">• Refund requests down by 8%</div>
                    <div className="py-1">• Maintenance due: WP NB-7788</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 order-1 lg:order-2">

              {/* Top Row - Revenue Chart and Booked Stats */}
              <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 lg:gap-5 mb-3">

                {/* Revenue Chart */}
                <div className="flex-1 lg:w-[636px] h-[200px] sm:h-[240px] lg:h-[260px] relative">
                  <div className="w-full h-full bg-gradient-to-b from-white/98 to-slate-50/98 border border-black/6 rounded-xl lg:rounded-[18px] p-3 sm:p-4 lg:p-5">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 lg:mb-4 gap-2">
                      <h3 className="text-blue-700 text-base sm:text-lg font-bold">Revenue (Last 7 Days)</h3>
                      <div className="text-slate-900 text-sm font-bold">Rs 1,245,000</div>
                    </div>

                    {/* Chart Container */}
                    <div className="bg-white border border-gray-200 rounded-lg lg:rounded-[11px] h-[120px] sm:h-[150px] lg:h-[182px] p-2 sm:p-3 lg:p-4 relative overflow-hidden">
                      {/* Chart Grid Lines */}
                      <div className="absolute inset-2 sm:inset-3 lg:inset-4 space-y-3 sm:space-y-4">
                        <div className="border-t border-slate-100"></div>
                        <div className="border-t border-slate-100"></div>
                        <div className="border-t border-slate-100"></div>
                      </div>

                      {/* Chart Line */}
                      <svg className="absolute inset-2 sm:inset-3 lg:inset-4 w-full h-full" viewBox="0 0 577 140" preserveAspectRatio="none">
                        <path d="M11 136L91 101L171 121L251 76L331 87L411 57L491 71L577 41"
                          stroke="#3B82F6" strokeWidth="3" fill="none" />
                        {/* Data Points */}
                        <circle cx="11" cy="136" r="3" fill="#3B82F6" />
                        <circle cx="91" cy="101" r="3" fill="#3B82F6" />
                        <circle cx="171" cy="121" r="3" fill="#3B82F6" />
                        <circle cx="251" cy="76" r="3" fill="#3B82F6" />
                        <circle cx="331" cy="87" r="3" fill="#3B82F6" />
                        <circle cx="411" cy="57" r="3" fill="#3B82F6" />
                        <circle cx="491" cy="71" r="3" fill="#3B82F6" />
                        <circle cx="577" cy="41" r="3" fill="#3B82F6" />
                      </svg>

                      {/* Day Labels */}
                      <div className="absolute bottom-1 sm:bottom-2 left-0 right-0 flex justify-between text-slate-400 text-xs px-2 sm:px-3 lg:px-4">
                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span>Thu</span>
                        <span>Fri</span>
                        <span>Sat</span>
                        <span>Sun</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Booked Stats */}
                <div className="w-full lg:w-[360px] h-auto lg:h-[260px] relative">
                  <div className="w-full h-full bg-gradient-to-b from-white/98 to-slate-50/98 border border-black/6 rounded-xl lg:rounded-[18px] p-3 sm:p-4 lg:p-5">
                    <h3 className="text-blue-700 text-base sm:text-lg font-bold mb-3 lg:mb-4">Booked Stats</h3>

                    <div className="space-y-2 sm:space-y-3">
                      <div className="bg-white border border-gray-200 rounded-lg lg:rounded-[11px] px-3 sm:px-[14px] py-3 sm:py-4 flex justify-between items-center">
                        <span className="text-slate-900 text-sm">Today Bookings</span>
                        <span className="text-blue-700 text-sm font-bold">312</span>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-lg lg:rounded-[11px] px-3 sm:px-[14px] py-3 sm:py-4 flex justify-between items-center">
                        <span className="text-slate-900 text-sm">Upcoming Trips</span>
                        <span className="text-blue-700 text-sm font-bold">87</span>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-lg lg:rounded-[11px] px-3 sm:px-[14px] py-3 sm:py-4 flex justify-between items-center">
                        <span className="text-slate-900 text-sm">Seats Occupied</span>
                        <span className="text-blue-700 text-sm font-bold">1,945</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Top Routes by Revenue */}
              <div className="w-[640px] h-auto lg:h-[140px] bg-gradient-to-b from-white/98 to-slate-50/98 border border-black/6 rounded-xl lg:rounded-[18px] p-3 sm:p-4 lg:p- mb-3 lg:mb-[14px]" style={{}}>
                <h3 className="text-blue-700 text-base font-bold mb-3 lg:mb-4">Top Routes by Revenue</h3>

                <div className="flex flex-col lg:flex-row justify-between items-start gap-4">
                  {/* Route Bars */}
                  <div className="space-y-2 lg:space-y-3 w-full lg:w-auto">
                    <div className="flex items-center gap-2">
                      <div className="w-full max-w-[200px] sm:max-w-[250px] lg:max-w-[300px] h-3 lg:h-4 bg-blue-500 rounded-full"></div>
                      <span className="text-slate-900 text-xs whitespace-nowrap">Route 87 — Rs 420k</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4/5 max-w-[160px] sm:max-w-[200px] lg:max-w-[240px] h-3 lg:h-4 bg-blue-400 rounded-full"></div>
                      <span className="text-slate-900 text-xs whitespace-nowrap">Route 138 — Rs 330k</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3/5 max-w-[140px] sm:max-w-[175px] lg:max-w-[210px] h-3 lg:h-4 bg-blue-300 rounded-full"></div>
                      <span className="text-slate-900 text-xs whitespace-nowrap">Route 99 — Rs 280k</span>
                    </div>
                  </div>

                  {/* Metric Cards */}
                  <div className="flex gap-2 sm:gap-3 lg:gap-4 w-full lg:w-auto justify-center lg:justify-end mt-3 lg:mt-0" style={{marginRight: '-380px', marginTop: '-33px'}}>
                    <div className="bg-white border border-gray-200 rounded-lg lg:rounded-[13px] w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 p-1 lg:p-2 flex flex-col items-center justify-center">
                      <div className="text-slate-500 text-xs text-center">Load</div>
                      <div className="text-slate-900 text-lg sm:text-xl lg:text-2xl font-bold">78%</div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg lg:rounded-[13px] w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 p-1 lg:p-2 flex flex-col items-center justify-center">
                      <div className="text-slate-500 text-xs text-center">Avg Fare</div>
                      <div className="text-slate-900 text-sm sm:text-base lg:text-lg font-bold">Rs 2,650</div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg lg:rounded-[13px] w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 p-1 lg:p-2 flex flex-col items-center justify-center">
                      <div className="text-slate-500 text-xs text-center">Refunds</div>
                      <div className="text-slate-900 text-lg sm:text-xl lg:text-2xl font-bold">12</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bus Preview Section */}
              <div className="w-full h-auto bg-gradient-to-b from-white/98 to-slate-50/98 border border-black/6 rounded-xl lg:rounded-[18px] p-3 sm:p-4 lg:p-5 mb-3">
                <h3 className="text-blue-700 text-base sm:text-lg font-bold mb-2 break-words">Bus Preview — WP NA-1234 (AC) • Route 87</h3>
                <p className="text-slate-500 text-xs mb-3 lg:mb-4">Seat plan with selected seats highlighted inside a red box</p>

                {/* Legend */}
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-3 lg:mb-4">
                  <div className="bg-slate-100 border border-slate-300 rounded-md px-3 sm:px-4 py-2">
                    <span className="text-slate-700 text-xs">Total: 45</span>
                  </div>
                  <div className="bg-blue-50 border border-blue-500 rounded-md px-3 sm:px-4 py-2">
                    <span className="text-blue-700 text-xs">Booked: 23</span>
                  </div>
                  <div className="bg-green-50 border border-green-400 rounded-md px-3 sm:px-4 py-2">
                    <span className="text-green-700 text-xs">Available: 22</span>
                  </div>
                </div>

                {/* Seat Map */}
                <div className="bg-white border border-gray-200 rounded-[17px] p-4 min-h-[372px] relative overflow-x-auto">

                  {/* Legend Visual */}
                  <div className="absolute left-4 top-[60px] bg-slate-50 border border-gray-200 rounded-[11px] p-4 w-[180px]">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-blue-500 rounded-sm bg-white"></div>
                        <span className="text-slate-700 text-xs">Available</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
                        <span className="text-slate-700 text-xs">Selected</span>
                      </div>
                    </div>
                  </div>

                  {/* Seat Grid */}
                  <div className="absolute left-[377px] top-2 w-[222px] min-w-[222px]">
                    {/* Row 1 */}
                    <div className="flex justify-between gap-2 mb-1">
                      <div className="w-8 h-8 border-2 border-blue-500 rounded-md bg-white flex items-center justify-center text-xs text-slate-700">1A</div>
                      <div className="w-8 h-8 border-2 border-blue-500 rounded-md bg-white flex items-center justify-center text-xs text-slate-700">1B</div>
                      <div className="w-8 h-8 border-2 border-blue-500 rounded-md bg-white flex items-center justify-center text-xs text-slate-700">1C</div>
                      <div className="w-8 h-8 border-2 border-blue-500 rounded-md bg-white flex items-center justify-center text-xs text-slate-700">1D</div>
                    </div>

                    {/* Row 2 - Some selected seats */}
                    <div className="flex justify-between gap-2 mb-1">
                      <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center text-xs text-white">2A</div>
                      <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center text-xs text-white">2B</div>
                      <div className="w-8 h-8 border-2 border-blue-500 rounded-md bg-white flex items-center justify-center text-xs text-slate-700">2C</div>
                      <div className="w-8 h-8 border-2 border-blue-500 rounded-md bg-white flex items-center justify-center text-xs text-slate-700">2D</div>
                    </div>

                    {/* Row 3 */}
                    <div className="flex justify-between gap-2 mb-1">
                      <div className="w-8 h-8 border-2 border-blue-500 rounded-md bg-white flex items-center justify-center text-xs text-slate-700">3A</div>
                      <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center text-xs text-white">3B</div>
                      <div className="w-8 h-8 border-2 border-blue-500 rounded-md bg-white flex items-center justify-center text-xs text-slate-700">3C</div>
                      <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center text-xs text-white">3D</div>
                    </div>

                    {/* Continue with more rows... */}
                    <div className="flex justify-between gap-2 mb-1">
                      <div className="w-8 h-8 border-2 border-blue-500 rounded-md bg-white flex items-center justify-center text-xs text-slate-700">4A</div>
                      <div className="w-8 h-8 border-2 border-blue-500 rounded-md bg-white flex items-center justify-center text-xs text-slate-700">4B</div>
                      <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center text-xs text-white">4C</div>
                      <div className="w-8 h-8 border-2 border-blue-500 rounded-md bg-white flex items-center justify-center text-xs text-slate-700">4D</div>
                    </div>

                    <div className="flex justify-between gap-2 mb-1">
                      <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center text-xs text-white">5A</div>
                      <div className="w-8 h-8 border-2 border-blue-500 rounded-md bg-white flex items-center justify-center text-xs text-slate-700">5B</div>
                      <div className="w-8 h-8 border-2 border-blue-500 rounded-md bg-white flex items-center justify-center text-xs text-slate-700">5C</div>
                      <div className="w-8 h-8 border-2 border-blue-500 rounded-md bg-white flex items-center justify-center text-xs text-slate-700">5D</div>
                    </div>

                    <div className="flex justify-between gap-2 mb-1">
                      <div className="w-8 h-8 border-2 border-blue-500 rounded-md bg-white flex items-center justify-center text-xs text-slate-700">6A</div>
                      <div className="w-8 h-8 border-2 border-blue-500 rounded-md bg-white flex items-center justify-center text-xs text-slate-700">6B</div>
                      <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center text-xs text-white">6C</div>
                      <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center text-xs text-white">6D</div>
                    </div>

                    <div className="flex justify-between gap-2 mb-1">
                      <div className="w-8 h-8 border-2 border-blue-500 rounded-md bg-white flex items-center justify-center text-xs text-slate-700">7A</div>
                      <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center text-xs text-white">7B</div>
                      <div className="w-8 h-8 border-2 border-blue-500 rounded-md bg-white flex items-center justify-center text-xs text-slate-700">7C</div>
                      <div className="w-8 h-8 border-2 border-blue-500 rounded-md bg-white flex items-center justify-center text-xs text-slate-700">7D</div>
                    </div>

                    <div className="flex justify-between gap-2 mb-1">
                      <div className="w-8 h-8 border-2 border-blue-500 rounded-md bg-white flex items-center justify-center text-xs text-slate-700">8A</div>
                      <div className="w-8 h-8 border-2 border-blue-500 rounded-md bg-white flex items-center justify-center text-xs text-slate-700">8B</div>
                      <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center text-xs text-white">8C</div>
                      <div className="w-8 h-8 border-2 border-blue-500 rounded-md bg-white flex items-center justify-center text-xs text-slate-700">8D</div>
                    </div>

                    <div className="flex justify-between gap-2 mb-1">
                      <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center text-xs text-white">9A</div>
                      <div className="w-8 h-8 border-2 border-blue-500 rounded-md bg-white flex items-center justify-center text-xs text-slate-700">9B</div>
                      <div className="w-8 h-8 border-2 border-blue-500 rounded-md bg-white flex items-center justify-center text-xs text-slate-700">9C</div>
                      <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center text-xs text-white">9D</div>
                    </div>

                    <div className="flex justify-between gap-2 mb-1">
                      <div className="w-8 h-8 border-2 border-blue-500 rounded-md bg-white flex items-center justify-center text-xs text-slate-700">10A</div>
                      <div className="w-8 h-8 border-2 border-blue-500 rounded-md bg-white flex items-center justify-center text-xs text-slate-700">10B</div>
                      <div className="w-8 h-8 border-2 border-blue-500 rounded-md bg-white flex items-center justify-center text-xs text-slate-700">10C</div>
                      <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center text-xs text-white">10D</div>
                    </div>
                  </div>

                  {/* Selection Box (Red dashed border) */}
                  <div className="absolute left-[377px] top-[30px] w-[86px] h-[78px] border-[3px] border-red-500 border-dashed rounded-[10px] pointer-events-none"></div>

                  {/* Driver and Door Labels */}
                  <div className="absolute bottom-8 left-4 text-slate-400 text-xs">Driver</div>
                  <div className="absolute bottom-8 right-8 text-slate-400 text-xs">Door</div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <button className="bg-slate-200 text-slate-700 font-bold text-sm px-8 py-3 rounded-[10px] hover:bg-slate-300 transition-colors">
                    Clear Selection
                  </button>
                  <button className="bg-blue-500 text-white font-bold text-sm px-8 py-3 rounded-[10px] hover:bg-blue-600 transition-colors">
                    Block Selected Seats
                  </button>
                  <button className="bg-amber-400 text-blue-800 font-bold text-sm px-8 py-3 rounded-[10px] hover:bg-amber-500 transition-colors">
                    Export Report
                  </button>
                </div>
              </div>

              {/* Bottom Row - Performance Tables */}
              <div className="flex flex-col lg:flex-row gap-7">

                {/* Top Performing Routes Table */}
                <div className="w-full lg:w-[480px] h-[252px] bg-gradient-to-b from-white/98 to-slate-50/98 border border-black/6 rounded-[18px] p-5">
                  <h3 className="text-blue-700 text-base font-bold mb-4">Top Performing Routes</h3>

                  {/* Table Header */}
                  <div className="bg-slate-50 border border-gray-200 rounded-[9px] px-3 py-2 mb-2">
                    <div className="flex justify-between text-slate-500 text-xs">
                      <span>Route</span>
                      <span className="ml-32">Bookings</span>
                      <span>Revenue</span>
                    </div>
                  </div>

                  {/* Table Rows */}
                  <div className="space-y-2">
                    <div className="bg-white border border-gray-200 rounded-[9px] px-3 py-2">
                      <div className="flex justify-between text-slate-900 text-xs">
                        <span>87 — Colombo ⇄ Jaffna</span>
                        <span>1,120</span>
                        <span>Rs 420k</span>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-[9px] px-3 py-2">
                      <div className="flex justify-between text-slate-900 text-xs">
                        <span>138 — Maharagama ⇄ Pettah</span>
                        <span>980</span>
                        <span>Rs 330k</span>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-[9px] px-3 py-2">
                      <div className="flex justify-between text-slate-900 text-xs">
                        <span>99 — Colombo ⇄ Batticaloa</span>
                        <span>760</span>
                        <span>Rs 280k</span>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-[9px] px-3 py-2">
                      <div className="flex justify-between text-slate-900 text-xs">
                        <span>98 — Colombo ⇄ Badulla</span>
                        <span>540</span>
                        <span>Rs 230k</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Utilization Summary */}
                <div className="w-full lg:w-[240px] h-[252px] bg-gradient-to-b from-white/98 to-slate-50/98 border border-black/6 rounded-[18px] p-5">
                  <h3 className="text-blue-700 text-base font-bold mb-2">Utilization Summary</h3>
                  <p className="text-slate-500 text-xs mb-4">Avg load by route</p>

                  <div className="space-y-1">
                    <div>
                      <div className="text-slate-700 text-xs mb-1">Route 87 — 82%</div>
                      <div className="w-[180px] h-[14px] bg-blue-500 rounded-full"></div>
                    </div>

                    <div>
                      <div className="text-slate-700 text-xs mb-1">Route 138 — 68%</div>
                      <div className="w-[150px] h-[14px] bg-blue-400 rounded-full"></div>
                    </div>

                    <div>
                      <div className="text-slate-700 text-xs mb-1">Route 99 — 60%</div>
                      <div className="w-[132px] h-[14px] bg-blue-300 rounded-full"></div>
                    </div>

                    <div>
                      <div className="text-slate-700 text-xs mb-1">Route 98 — 53%</div>
                      <div className="w-[116px] h-[14px] bg-blue-200 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="w-full lg:w-[244px] h-[252px] bg-gradient-to-b from-white/98 to-slate-50/98 border border-black/6 rounded-[18px] p-5">
                  <h3 className="text-blue-700 text-base font-bold mb-8">Recent Activity</h3>

                  <div className="space-y-2">
                    <div className="bg-white border border-gray-200 rounded-[9px] px-3 py-2">
                      <div className="text-slate-900 text-xs">New booking: 87 (4 seats)</div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-[9px] px-3 py-2">
                      <div className="text-slate-900 text-xs">Refund approved: 138</div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-[9px] px-3 py-2">
                      <div className="text-slate-900 text-xs">Permit uploaded: ND-4521</div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-[9px] px-3 py-2">
                      <div className="text-slate-900 text-xs">Seat block: 5A–5B</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer - Centered */}
        <footer className="relative z-[2] w-full py-6 mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white/85 text-xs">
              © 2025 BusEase Ticketing System. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Dashboard;
