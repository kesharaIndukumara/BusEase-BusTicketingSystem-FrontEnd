import React from 'react';

const UserDashboard: React.FC = () => {
  return (
    <div className="user-dashboard">
      {/* Background decorative circles */}
      <div className="bg-circle bg-circle-1" />
      <div className="bg-circle bg-circle-2" />
      <div className="bg-circle bg-circle-3" />
      
      {/* Sidebar */}
      <div className="dashboard-sidebar">
        <div className="sidebar-background" />
        <div className="sidebar-menu">
          <div className="sidebar-item active">
            <span>🏠 Dashboard</span>
          </div>
          <div className="sidebar-item">
            <span>📖 Bookings</span>
          </div>
          <div className="sidebar-item">
            <span>🗺️ Routes</span>
          </div>
          <div className="sidebar-item">
            <span>🚌 Buses</span>
          </div>
          <div className="sidebar-item">
            <span>⚙️ Settings</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="dashboard-main">
        {/* Stats Cards */}
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-card-bg" />
            <div className="stat-content">
              <div className="stat-label">Total Bookings</div>
              <div className="stat-value">1,248</div>
              <div className="stat-change positive">▲ 8%</div>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-card-bg" />
            <div className="stat-content">
              <div className="stat-label">Upcoming Trips</div>
              <div className="stat-value">12</div>
              <div className="stat-change positive">▲ 2</div>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-card-bg" />
            <div className="stat-content">
              <div className="stat-label">Cancellations</div>
              <div className="stat-value">5</div>
              <div className="stat-change negative">▼ 1</div>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="dashboard-content">
          {/* Upcoming Trips Section */}
          <div className="content-section">
            <div className="section-background" />
            <div className="section-header">
              <div className="section-title">Upcoming Trips</div>
              <div className="section-subtitle">Next departures in your schedule</div>
            </div>
            
            <div className="trips-list">
              <div className="trip-card">
                <div className="trip-card-bg" />
                <div className="trip-info">
                  <div className="trip-route">Colombo ➜ Jaffna</div>
                  <div className="trip-details">Route 87 • AC • Seats left: 12</div>
                  <div className="trip-schedule">Departs: 10 Sep, 22:00 • Bus: WP NA-1234</div>
                </div>
                <button className="manage-btn">
                  <div className="manage-btn-bg" />
                  <span>Manage</span>
                </button>
              </div>
              
              <div className="trip-card">
                <div className="trip-card-bg" />
                <div className="trip-info">
                  <div className="trip-route">Colombo ➜ Batticaloa</div>
                  <div className="trip-details">Route 99 • NON-AC • Seats left: 6</div>
                  <div className="trip-schedule">Departs: 12 Sep, 20:30 • Bus: WP ND-4521</div>
                </div>
                <button className="manage-btn">
                  <div className="manage-btn-bg" />
                  <span>Manage</span>
                </button>
              </div>
              
              <div className="trip-card">
                <div className="trip-card-bg" />
                <div className="trip-info">
                  <div className="trip-route">Colombo ➜ Badulla</div>
                  <div className="trip-details">Route 98 • AC • Seats left: 20</div>
                  <div className="trip-schedule">Departs: 14 Sep, 06:45 • Bus: WP NB-7788</div>
                </div>
                <button className="manage-btn">
                  <div className="manage-btn-bg" />
                  <span>Manage</span>
                </button>
              </div>
              
              <div className="trip-card">
                <div className="trip-card-bg" />
                <div className="trip-info">
                  <div className="trip-route">Colombo ➜ Trincomalee</div>
                  <div className="trip-details">Route 49 • NON-AC • Seats left: 4</div>
                  <div className="trip-schedule">Departs: 16 Sep, 21:15 • Bus: WP NC-2304</div>
                </div>
                <button className="manage-btn">
                  <div className="manage-btn-bg" />
                  <span>Manage</span>
                </button>
              </div>
            </div>
          </div>

          {/* Booking History Section */}
          <div className="content-section">
            <div className="section-background" />
            <div className="section-header">
              <div className="section-title">Booking History</div>
              <div className="section-subtitle">Recent completed and cancelled bookings</div>
            </div>
            
            <div className="booking-table">
              <div className="table-header">
                <div className="table-header-bg" />
                <div className="header-cell">Date</div>
                <div className="header-cell">Route</div>
                <div className="header-cell">Seats</div>
                <div className="header-cell">Amount</div>
                <div className="header-cell">Status</div>
              </div>
              
              <div className="table-row">
                <div className="table-row-bg" />
                <div className="table-cell">02 Sep</div>
                <div className="table-cell">Colombo–Jaffna</div>
                <div className="table-cell">2</div>
                <div className="table-cell">Rs 5,600</div>
                <div className="table-cell">
                  <div className="status-badge paid">
                    <span>Paid</span>
                  </div>
                </div>
              </div>
              
              <div className="table-row">
                <div className="table-row-bg" />
                <div className="table-cell">28 Aug</div>
                <div className="table-cell">Colombo–Batticaloa</div>
                <div className="table-cell">1</div>
                <div className="table-cell">Rs 2,800</div>
                <div className="table-cell">
                  <div className="status-badge refunded">
                    <span>Refunded</span>
                  </div>
                </div>
              </div>
              
              <div className="table-row">
                <div className="table-row-bg" />
                <div className="table-cell">20 Aug</div>
                <div className="table-cell">Colombo–Badulla</div>
                <div className="table-cell">3</div>
                <div className="table-cell">Rs 7,200</div>
                <div className="table-cell">
                  <div className="status-badge void">
                    <span>Void</span>
                  </div>
                </div>
              </div>
              
              <div className="table-row">
                <div className="table-row-bg" />
                <div className="table-cell">15 Aug</div>
                <div className="table-cell">Colombo–Trincomalee</div>
                <div className="table-cell">1</div>
                <div className="table-cell">Rs 3,000</div>
                <div className="table-cell">
                  <div className="status-badge paid">
                    <span>Paid</span>
                  </div>
                </div>
              </div>
              
              <div className="table-row">
                <div className="table-row-bg" />
                <div className="table-cell">10 Aug</div>
                <div className="table-cell">Colombo–Anuradhapura</div>
                <div className="table-cell">2</div>
                <div className="table-cell">Rs 4,400</div>
                <div className="table-cell">
                  <div className="status-badge paid">
                    <span>Paid</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pagination">
              <button className="pagination-btn active">1</button>
              <button className="pagination-btn">2</button>
              <button className="pagination-btn">3</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="dashboard-footer">
        © 2024 BusEase Ticketing System. All rights reserved.
      </div>
    </div>
  );
};

export default UserDashboard;
