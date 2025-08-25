import * as React from "react";
import ClientHomeWhyBook from "./ClientHomeWhyBook";

function ClientHomePaymentsOption() {
  return (
    <>
    <div className="payment-options-container">
      <div className="payment-options-wrapper">
        <div className="payment-title-container">
          <div className="payment-title">
            Multiple Payment Options
          </div>
        </div>
        <div className="payment-logos-container">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/3b40c9cd07f2cfce035959585f978eb424344609?width=200"
            alt="Visa card payment option"
            className="payment-logo"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/ed9639cc3443e941c95ec611ada04316e4cbfb9f?width=192"
            alt="Mastercard payment option"
            className="payment-logo"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/2a00df611e40d1f6c64b73519fe3c19b6969d94d?width=200"
            alt="Genie payment option"
            className="payment-logo"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/a9ca246c626b244efd42605781dc7cd624e2468c?width=192"
            alt="American Express payment option"
            className="payment-logo"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/f0a1dfe2fc5118dc2154cc1f7c6fb27d18ee9039?width=192"
            alt="Money transfer payment option"
            className="payment-logo"
          />
        </div>
      </div>
    </div>
    <ClientHomeWhyBook />
    </>
  );
}

export default ClientHomePaymentsOption;
