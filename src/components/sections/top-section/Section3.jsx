// Section3.js

import React from 'react';
import './Section3.css';
import image from './other-images/map.png';

const Section3 = () => {
  return (
    <div className="container3">
      <div className="left-container">
        <h2>One Stop Solution for Your <br />Supply Chain</h2>
        <p>Connected Shipping, Finance, and Trade-tech, to Power Global Trade and Supply Chains.</p>
      </div>
      <div className="right-container">
 <img src={image} alt="Supply Chain" />
      </div>
    </div>
  );
};

export default Section3;
