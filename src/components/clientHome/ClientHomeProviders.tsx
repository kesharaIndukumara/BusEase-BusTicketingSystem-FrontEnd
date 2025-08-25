import React from 'react';
import ClientHomePaymentsOption from './ClientHomePaymentsOption';

const ClientHomeProviders: React.FC = () => {
  return (
    <>
    <div className="providers-container">
      <div className="providers-wrapper">
        <div className="providers-title">
          Partnered Bus Service Providers
        </div>
        <div className="providers-logos">
          <div className="providers-grid">
            <div className="providers-row">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/196ee000b3cef8aba48a1deaa0e54d0216ec8be1?placeholderIfAbsent=true"
                alt="Bus Service Provider"
                className="provider-logo-large"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/d35139f5386c47f6c95f64874e97abdd1b50c387?placeholderIfAbsent=true"
                alt="Bus Service Provider"
                className="provider-logo-large"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/f8240628db75d6c5e44aa9523eba7f4caedd3c34?placeholderIfAbsent=true"
                alt="Bus Service Provider"
                className="provider-logo-large"
              />
            </div>
            <div className="providers-row">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/b48c4c69b0b0da64d32be457644a9e0919220ab8?placeholderIfAbsent=true"
                alt="Bus Service Provider"
                className="provider-logo-large"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/b303b250d613625da42cbb8b129962357ad94d88?placeholderIfAbsent=true"
                alt="Bus Service Provider"
                className="provider-logo-large"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/b4f32738e13ad47939adb03bfc240193e9ed0328?placeholderIfAbsent=true"
                alt="Bus Service Provider"
                className="provider-logo-large"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <ClientHomePaymentsOption />
    </>
  );
};

export default ClientHomeProviders;
