import React, { useState } from 'react';
import Footer from '../common/Footer';

const ClientHomeFeedback: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    route: '',
    feedback: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Feedback submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <>
    <div className="feedback-container">
      <div className="feedback-section">
        <div className="feedback-content">
          <div className="feedback-title">
            Share Your Travel Experience
          </div>
          
          <form onSubmit={handleSubmit} className="feedback-form">
            <div className="form-row">
              <label className="form-label">Name</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter name"
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <label className="form-label">Route Select</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  name="route"
                  value={formData.route}
                  onChange={handleInputChange}
                  placeholder="Enter Route Number"
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div className="form-row feedback-row">
              <label className="form-label">Feedback</label>
              <div className="textarea-wrapper">
                <textarea
                  name="feedback"
                  value={formData.feedback}
                  onChange={handleInputChange}
                  placeholder="Share your Experience..."
                  className="form-textarea"
                  rows={4}
                  required
                />
              </div>
            </div>

            <div className="submit-container">
              <button type="submit" className="submit-button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ClientHomeFeedback;
