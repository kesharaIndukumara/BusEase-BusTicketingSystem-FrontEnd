import React from "react";
import "./ClientHomePayments.css";

function ClientHomePayments() {
  return (
    <div className="payments-container">
      <div className="background-overlay">
        <svg
          width="1440"
          height="350"
          viewBox="0 0 1440 350"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="background-svg"
        >
          <path d="M1440 0H0V350H1440V0Z" fill="white" fillOpacity="0.95" />
        </svg>
      </div>

      <div className="title-container">
        <div className="main-title">
          Partnered Bus Service Providers
        </div>
      </div>

      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/a531fa5efd957b4464472bfdecca34aa12252bb9?width=506"
        alt=""
        className="ncg-logo"
      />

      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/2b2a9b482ab1c6bd7986fb03e56eb3261657bad6?width=200"
        alt=""
        className="surrexi-logo"
      />

      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/ae0bf8cbfebc40740a0d083cc4ef0a80338bc6c0?width=400"
        alt=""
        className="new-way-express-logo"
      />

      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/85e940ff08cdcf15259d1614d31ec99c9ebe6fa8?width=274"
        alt=""
        className="annaimuthumari-logo"
      />

      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/585b7a6ea404c40da62e2006608493efa466a4f0?width=200"
        alt=""
        className="al-rashith-logo"
      />

      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/4728540e7bc541e78840d8ad6d54fd2b14f67b37?width=804"
        alt=""
        className="superline-logo"
      />

      <div className="payment-section">
        <div className="payment-background" />
        <div className="payment-content">
          <div className="payment-title-container">
            <div className="payment-title">
              Multiple Payment Options
            </div>
          </div>
          
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/f0a1dfe2fc5118dc2154cc1f7c6fb27d18ee9039?width=192"
            alt=""
            className="money-transfer-icon"
          />

          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/3b40c9cd07f2cfce035959585f978eb424344609?width=200"
            alt=""
            className="visa-card-icon"
          />

          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/ed9639cc3443e941c95ec611ada04316e4cbfb9f?width=192"
            alt=""
            className="mastercard-icon"
          />

          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/2a00df611e40d1f6c64b73519fe3c19b6969d94d?width=200"
            alt=""
            className="genie-icon"
          />

          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/a9ca246c626b244efd42605781dc7cd624e2468c?width=192"
            alt=""
            className="amex-card-icon"
          />
        </div>
      </div>
    </div>
  );
}

export default ClientHomePayments;
