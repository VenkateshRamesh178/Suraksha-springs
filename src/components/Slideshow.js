// src/components/Slideshow.js
import React, { useState } from 'react';
import './Slideshow.css';

// Importing images
import img1 from '../assets/gallery/location.png';
import img2 from '../assets/gallery/garden.jpg';
import img3 from '../assets/gallery/playcourt.jpg';
import img4 from '../assets/gallery/pond.jpg';
import img5 from '../assets/gallery/private.jpg';

const images = [img1, img2, img3, img4, img5];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="gallery" className="slideshow-container">
      <div className="slideshow">
        <h1>Gallery</h1>
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          >
            {index === currentIndex && <img src={image} alt={`Slide ${index + 1}`} />}
          </div>
        ))}
      </div>
      <button className="prev-btn" onClick={goToPreviousSlide}>
        &#10094;
      </button>
      <button className="next-btn" onClick={goToNextSlide}>
        &#10095;
      </button>
    </section>
  );
};

export default Slideshow;
