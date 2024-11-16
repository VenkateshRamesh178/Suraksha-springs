import React from 'react';
import './Pricing.css';

const Pricing = ({openPopup}) => {
  return (
    <section id="pricing" className="pricing">
      <h2>Pricing</h2>
      <div className="pricing-table">
        <div className="pricing-card">
          <h3>2 BHK</h3>
          <p>Size: 1140 - 1250 sq.ft.</p>
          <button onClick={openPopup}>Get Pricing</button>
        </div>
        <div className="pricing-card">
          <h3>3.5 BHK</h3>
          <p>Size: 1380 - 1560 sq.ft.</p>
          <button onClick={openPopup}>Get Pricing</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
