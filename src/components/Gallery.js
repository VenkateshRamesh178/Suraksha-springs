// src/components/Gallery.js
import React from 'react';
import './Gallery.css';

// Importing images
import img1 from '../assets/gallery/garden.jpg';
import img2 from '../assets/gallery/playcourt.jpg';
import img3 from '../assets/gallery/pond.jpg';
import img4 from '../assets/gallery/private.jpg';

const Gallery = () => {
  const images = [img1, img2, img3, img4];

  return (
    <section id="gallery" className="gallery-section">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
