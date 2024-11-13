// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = ({ openPopup }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="./logo.png" alt="Suraksha Springs"/>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#amenities">Amenities</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li>
          <button className="contact-popup-btn" onClick={openPopup}>
            Download Brochure
          </button>
        </li>
        {/* Call Us Button */}
        <li>
          <a href="tel:+91 8310933745" className="call-btn">
            Call Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
