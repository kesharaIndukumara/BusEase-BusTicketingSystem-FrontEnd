import * as React from "react";
import "./ClientHomeWhyBook.css";

function ClientHomeWhyBook() {
  return (
    <div className="why-book-container">
      <div className="why-book-background">
        <svg width="1440" height="298" viewBox="0 0 1440 298" fill="none" xmlns="http://www.w3.org/2000/svg" className="background-overlay">
          <path d="M1440 0H0V298H1440V0Z" fill="#C5C5C5" fillOpacity="0.95"></path>
        </svg>
      </div>
      
      <div className="why-book-title">
        Why Book with Easebus?
      </div>
      
      <div className="why-book-features">
        <div className="why-book-feature">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/a415e9abad3b67842712f2495b074c10a91c6995?width=200"
            alt=""
            className="feature-icon"
          />
          <div className="feature-heading">
            More Choices
          </div>
          <div className="feature-text">
            We give you maximum choices across all the routes to choose your bus.
          </div>
        </div>
        
        <div className="why-book-feature">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/cd12ec26f15e0132183c2c2b00300c57d57f7600?width=200"
            alt=""
            className="feature-icon"
          />
          <div className="feature-heading">
            Customer Support
          </div>
          <div className="feature-text">
            We help you to make your journey better.
          </div>
        </div>
        
        <div className="why-book-feature">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/de8362d6618166cead59bc879fe82e57cde8e0c2?width=200"
            alt=""
            className="feature-icon"
          />
          <div className="feature-heading">
            Best Price
          </div>
          <div className="feature-text">
            We always offer best bus ticket price in the market.
          </div>
        </div>
        
        <div className="why-book-feature">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/d8939fa9cb17f33c7798b56dee955015ee0276fb?width=200"
            alt=""
            className="feature-icon"
          />
          <div className="feature-heading">
            Google Map Location
          </div>
          <div className="feature-text">
            We send you the boarding place and destination place link in google map
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientHomeWhyBook;
