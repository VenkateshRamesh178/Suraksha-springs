import React, { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Amenities from './components/Amenities';
import Slideshow from './components/Slideshow';
import Footer from './components/Footer';
import PopupForm from './components/PopupForm';
import Pricing from './components/Pricing';
import './App.css';

const App = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [popupHeading, setPopupHeading] = useState('Contact Us');
  const [submitButtonText, setSubmitButtonText] = useState('Submit');

  const sections = {
    home: useRef(null),
    about: useRef(null),
    amenities: useRef(null),
    gallery: useRef(null),
  };

  const scrollToSection = (section) => {
    sections[section].current.scrollIntoView({ behavior: 'smooth' });
  };

  const openPopupWithConfig = (heading, buttonText) => {
    setPopupHeading(heading);
    setSubmitButtonText(buttonText);
    setPopupOpen(true);
  };

  return (
    <div className="App">
      <Navbar
        scrollToSection={scrollToSection}
        openPopup={() => openPopupWithConfig('Download Brochure', 'Download')}
      />
      <Hero />
      <div ref={sections.about}><About /></div>
      <div ref={sections.amenities}><Amenities /></div>
      <Pricing openPopup={() => openPopupWithConfig('Get Pricing Details', 'Request Pricing')} />
      <Slideshow />
      <Footer />
      <PopupForm
        isOpen={isPopupOpen}
        closePopup={() => setPopupOpen(false)}
        heading={popupHeading}
        submitButtonText={submitButtonText}
      />
    </div>
  );
};

export default App;
