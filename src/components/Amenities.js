import React from 'react';
import './Gallery.css';

import img1 from '../assets/images/badminton.png';
import img2 from '../assets/images/cricket.png';
import img3 from '../assets/images/indoor.png';
import img4 from '../assets/images/pool.png';
import img5 from '../assets/images/gym.png';

const Amenities = () => {
  const images = [img1, img2, img3, img4, img5];

  return (
    <section id="gallery" className="gallery-section">
      <h2>Amenities</h2>
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

export default Amenities;
