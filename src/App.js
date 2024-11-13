import React, { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Amenities from './components/Amenities';
import Slideshow from './components/Slideshow';
import Footer from './components/Footer';
import PopupForm from './components/PopupForm';
import './App.css';

const App = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const sections = {
    home: useRef(null),
    about: useRef(null),
    amenities: useRef(null),
    gallery: useRef(null),
  };

  const scrollToSection = (section) => {
    sections[section].current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Navbar scrollToSection={scrollToSection} openPopup={() => setPopupOpen(true)} />
      <Hero />
      <div ref={sections.about}><About /></div>
      <div ref={sections.amenities}><Amenities /></div>
      {/* <div ref={sections.gallery}><Gallery /></div> */}
      <Slideshow />
      <Footer />
      <PopupForm isOpen={isPopupOpen} closePopup={() => setPopupOpen(false)} />
    </div>
  );
};

export default App;
