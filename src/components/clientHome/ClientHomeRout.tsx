import * as React from "react";
import "./ClientHomeRout.css";

function ClientHomeRout() {
  return (
    <div className="routes-container">
      <div className="routes-wrapper">
        <div className="route-card">
          <div className="route-id">Route 001</div>
          <div className="route-name">Colombo ↔ Kandy</div>
          <div className="route-service">Express Service via Expressway</div>
          <div className="route-duration">Duration: 2.5 hours</div>
          <div className="route-fare">Fare: LKR 280 - 450</div>
          <div className="book-button-container">
            <button className="book-now-button">
              <span className="book-now-text">Book Now</span>
            </button>
          </div>
        </div>

        <div className="route-card">
          <div className="route-id">Route 002</div>
          <div className="route-name">Colombo ↔ Galle</div>
          <div className="route-service">Coastal Highway Route</div>
          <div className="route-duration">Duration: 2 hours</div>
          <div className="route-fare">Fare: LKR 180 - 320</div>
          <div className="book-button-container">
            <button className="book-now-button">
              <span className="book-now-text">Book Now</span>
            </button>
          </div>
        </div>

        <div className="route-card">
          <div className="route-id">Route 003</div>
          <div className="route-name">Colombo ↔ Jaffna</div>
          <div className="route-service">Northern Province Express</div>
          <div className="route-duration">Duration: 7 hours</div>
          <div className="route-fare">Fare: LKR 780 - 1200</div>
          <div className="book-button-container">
            <button className="book-now-button">
              <span className="book-now-text">Book Now</span>
            </button>
          </div>
        </div>

        <div className="route-card">
          <div className="route-id">Route 004</div>
          <div className="route-name">Colombo ↔ Anuradhapura</div>
          <div className="route-service">Ancient City Route</div>
          <div className="route-duration">Duration: 4.5 hours</div>
          <div className="route-fare">Fare: LKR 420 - 650</div>
          <div className="book-button-container">
            <button className="book-now-button">
              <span className="book-now-text">Book Now</span>
            </button>
          </div>
        </div>

        <div className="route-card">
          <div className="route-id">Route 005</div>
          <div className="route-name">Kandy ↔ Badulla</div>
          <div className="route-service">Hill Country Route</div>
          <div className="route-duration">Duration: 3 hours</div>
          <div className="route-fare">Fare: LKR 220 - 380</div>
          <div className="book-button-container">
            <button className="book-now-button">
              <span className="book-now-text">Book Now</span>
            </button>
          </div>
        </div>

        <div className="route-card">
          <div className="route-id">Route 006</div>
          <div className="route-name">Colombo ↔ Ratnapura</div>
          <div className="route-service">Gem City Route</div>
          <div className="route-duration">Duration: 2.5 hours</div>
          <div className="route-fare">Fare: LKR 160 - 280</div>
          <div className="book-button-container">
            <button className="book-now-button">
              <span className="book-now-text">Book Now</span>
            </button>
          </div>
        </div>

        <div className="route-card">
          <div className="route-id">Route 007</div>
          <div className="route-name">Colombo ↔ Trincomalee</div>
          <div className="route-service">Eastern Coast Route</div>
          <div className="route-duration">Duration: 5.5 hours</div>
          <div className="route-fare">Fare: LKR 580 - 850</div>
          <div className="book-button-container">
            <button className="book-now-button">
              <span className="book-now-text">Book Now</span>
            </button>
          </div>
        </div>

        <div className="route-card">
          <div className="route-id">Route 008</div>
          <div className="route-name">Colombo ↔ Batticaloa</div>
          <div className="route-service">Eastern Province Route</div>
          <div className="route-duration">Duration: 6 hours</div>
          <div className="route-fare">Fare: LKR 650 - 950</div>
          <div className="book-button-container">
            <button className="book-now-button">
              <span className="book-now-text">Book Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientHomeRout;
