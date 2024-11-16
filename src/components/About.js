import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './About.css';

const About = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });

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
        alert('Thank you for requesting a site visit! We will contact you soon.');
        setFormData({ name: '', email: '' }); // Reset form fields
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Left side content */}
        <div className="about-content">
          <h2>About Suraksha Springs</h2>
          <p>
            Welcome to Suraksha Springs project, where modern living meets luxury.
            Our development is designed to offer unparalleled amenities, beautiful architecture,
            and a vibrant community. Located in a prime area, our homes are built with top-notch
            materials and expert craftsmanship to ensure the best living experience.
          </p>
          <p>
            Whether you're looking for a family home or an investment property, our real estate
            project offers something for everyone. Come and explore your future dream home with us!
          </p>
        </div>

        {/* Right side form */}
        <div className="request-form">
          <h3>Request Site Visit</h3>
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
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <button type="submit" className="submit-btn">Book Site Visit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default About;
