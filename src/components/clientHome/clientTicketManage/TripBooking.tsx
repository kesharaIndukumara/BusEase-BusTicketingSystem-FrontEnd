import React, { useState } from 'react';
import './TripBooking.css';
import Header from '../../common/Header';

interface Route {
  id: string;
  routeNumber: string;
  startLocation: string;
  endLocation: string;
  service: string;
  duration: string;
  fare: string;
  departureTime: string;
  availableSeats: number;
}

interface BookingDetails {
  routeId: string;
  passengerName: string;
  contactNumber: string;
  email: string;
  seatCount: number;
}

const TripBooking: React.FC = () => {
  const [selectedRoute, setSelectedRoute] = useState<Route | null>(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<BookingDetails>({
    routeId: '',
    passengerName: '',
    contactNumber: '',
    email: '',
    seatCount: 1
  });

  // Sample routes data - in real app this would come from API
  const routes: Route[] = [
    {
      id: '001',
      routeNumber: 'Route 001',
      startLocation: 'Colombo',
      endLocation: 'Kandy',
      service: 'Express Service via Expressway',
      duration: '2.5 hours',
      fare: 'LKR 280 - 450',
      departureTime: '06:00 AM',
      availableSeats: 24
    },
    {
      id: '002',
      routeNumber: 'Route 002',
      startLocation: 'Colombo',
      endLocation: 'Galle',
      service: 'Coastal Highway Route',
      duration: '2 hours',
      fare: 'LKR 180 - 320',
      departureTime: '07:30 AM',
      availableSeats: 18
    },
    {
      id: '003',
      routeNumber: 'Route 003',
      startLocation: 'Colombo',
      endLocation: 'Jaffna',
      service: 'Northern Province Express',
      duration: '7 hours',
      fare: 'LKR 780 - 1200',
      departureTime: '05:00 AM',
      availableSeats: 32
    },
    {
      id: '004',
      routeNumber: 'Route 004',
      startLocation: 'Colombo',
      endLocation: 'Anuradhapura',
      service: 'Ancient City Route',
      duration: '4.5 hours',
      fare: 'LKR 420 - 650',
      departureTime: '08:00 AM',
      availableSeats: 15
    },
    {
      id: '005',
      routeNumber: 'Route 005',
      startLocation: 'Kandy',
      endLocation: 'Badulla',
      service: 'Hill Country Route',
      duration: '3 hours',
      fare: 'LKR 220 - 380',
      departureTime: '09:15 AM',
      availableSeats: 28
    },
    {
      id: '006',
      routeNumber: 'Route 006',
      startLocation: 'Colombo',
      endLocation: 'Ratnapura',
      service: 'Gem City Route',
      duration: '2.5 hours',
      fare: 'LKR 160 - 280',
      departureTime: '10:00 AM',
      availableSeats: 20
    }
  ];

  const handleSelectRoute = (route: Route) => {
    setSelectedRoute(route);
    setBookingDetails(prev => ({ ...prev, routeId: route.id }));
    setShowBookingForm(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBookingDetails(prev => ({
      ...prev,
      [name]: name === 'seatCount' ? parseInt(value) || 1 : value
    }));
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the booking data to your backend
    alert(`Booking confirmed for ${selectedRoute?.routeNumber} - ${selectedRoute?.startLocation} to ${selectedRoute?.endLocation}`);
    
    // Reset form
    setShowBookingForm(false);
    setSelectedRoute(null);
    setBookingDetails({
      routeId: '',
      passengerName: '',
      contactNumber: '',
      email: '',
      seatCount: 1
    });
  };

  const handleCancelBooking = () => {
    setShowBookingForm(false);
    setSelectedRoute(null);
    setBookingDetails({
      routeId: '',
      passengerName: '',
      contactNumber: '',
      email: '',
      seatCount: 1
    });
  };

  return (
    <>
      <Header />
      <div className="trip-booking-container bg-gradient-to-br from-blue-100 via-sky-200 to-blue-600" style={{ marginTop: '60px', minHeight: 'calc(100vh - 60px)' }}>
        <div className="trip-booking-wrapper">
          <div className="trip-booking-header">
            <h1 className="trip-booking-title" style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1e3a8a' }}>Select & Book Your Trip</h1>
            <p className="trip-booking-subtitle" style={{ fontSize: '1.25rem', color: '#1e3a8a' }}>Choose from available routes and book your journey instantly</p>
          </div>

          {!showBookingForm ? (
            <div className="routes-selection">
              <div className="routes-grid">
                {routes.map((route) => (
                  <div key={route.id} className="route-booking-card" style={{ backgroundColor: 'white', borderRadius: '8px', padding: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', marginBottom: '16px'}}>
                    <div className="route-header">
                      <div className="route-id">{route.routeNumber}</div>
                      <div className="available-seats">
                        <span className={`seats-indicator ${route.availableSeats < 10 ? 'low-seats' : ''}`}>
                          {route.availableSeats} seats available
                        </span>
                      </div>
                    </div>
                    <div className="route-name">{route.startLocation} ↔ {route.endLocation}</div>
                    <div className="route-service">{route.service}</div>
                    <div className="route-details">
                      <div className="route-duration">Duration: {route.duration}</div>
                      <div className="route-departure">Departure: {route.departureTime}</div>
                    </div>
                    <div className="route-fare">Fare: {route.fare}</div>
                    <div className="book-button-container">
                      <button 
                        className="select-route-button"
                        onClick={() => handleSelectRoute(route)}
                        disabled={route.availableSeats === 0}
                      >
                        <span className="select-route-text">
                          {route.availableSeats === 0 ? 'Fully Booked' : 'Select Route'}
                        </span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="booking-form-container">
              <div className="selected-route-summary">
                <h3 className="summary-title">Selected Route</h3>
                <div className="summary-details">
                  <div className="summary-route">{selectedRoute?.routeNumber}: {selectedRoute?.startLocation} → {selectedRoute?.endLocation}</div>
                  <div className="summary-info">
                    <span>Departure: {selectedRoute?.departureTime}</span>
                    <span>Duration: {selectedRoute?.duration}</span>
                    <span>Fare: {selectedRoute?.fare}</span>
                  </div>
                </div>
              </div>

              <form className="booking-form" onSubmit={handleBookingSubmit}>
                <h3 className="form-title">Passenger Details</h3>
                
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="passengerName"
                    value={bookingDetails.passengerName}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Contact Number</label>
                  <input
                    type="tel"
                    name="contactNumber"
                    value={bookingDetails.contactNumber}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={bookingDetails.email}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Number of Seats</label>
                  <input
                    type="number"
                    name="seatCount"
                    value={bookingDetails.seatCount}
                    onChange={handleInputChange}
                    className="form-input"
                    min="1"
                    max={selectedRoute?.availableSeats || 1}
                    required
                  />
                </div>

                <div className="form-actions">
                  <button type="button" className="cancel-button" onClick={handleCancelBooking}>
                    Cancel
                  </button>
                  <button type="submit" className="confirm-booking-button">
                    Confirm Booking
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TripBooking;