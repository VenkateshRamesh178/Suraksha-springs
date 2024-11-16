import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import './PopupForm.css';

const PopupForm = ({ isOpen, closePopup, heading, submitButtonText }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const [isAutoOpen, setIsAutoOpen] = useState(false);

  // Automatically open popup after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAutoOpen(true);
    }, 10000); // 10000ms = 10 seconds

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data using emailjs
    emailjs
      .send(
        'service_igdnsep', // Replace with your emailjs service ID
        'template_b4pp1na', // Replace with your emailjs template ID
        formData,
        'SBc31N7WNNF4OzX9g' // Replace with your emailjs user ID
      )
      .then((response) => {
        console.log('Email sent successfully:', response);
        alert('Thank you for contacting us! Your message has been sent successfully.');
        setFormData({ name: '', phone: '', email: '' });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });

    closePopup();
    setIsAutoOpen(false);
  };

  // Close popup handler for both manual and auto-opened popups
  const handleClosePopup = () => {
    closePopup();
    setIsAutoOpen(false);
  };

  if (!isOpen && !isAutoOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="close-btn" onClick={handleClosePopup}>
          &times;
        </button>
        <h2>{heading}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email (Optional)"
            value={formData.email}
            onChange={handleChange}
          />
          <button type="submit" className="submit-btn">
            {submitButtonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
