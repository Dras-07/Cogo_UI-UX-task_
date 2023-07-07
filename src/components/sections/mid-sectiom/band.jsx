import React from 'react';
import './band.css';
import i1 from './img/vedanta.jpg';
import i2 from './img/bombay-d.jpg';
import i3 from './img/jsw.jpg';
import i4 from './img/reliance.jpg';
import i5 from './img/tvs.jpg';
import i6 from './img/voltas.jpg';
import i7 from './img/ut.jpg';
const Band = () => {
  return (
    <div className="band-container">
      <div className="div1">
        <h1 className="heading">Trusted By</h1>
      </div>
      <div className="div2">
  <div className="scroll-container">
    <img src={i1} alt="Image 1" className="scroll-item" />
    <img src={i2} alt="Image 2" className="scroll-item" />
    <img src={i3} alt="Image 3" className="scroll-item" />
    <img src={i4} alt="Image 4" className="scroll-item" />
    <img src={i5} alt="Image 5" className="scroll-item" />
    <img src={i6} alt="Image 6" className="scroll-item" />
    <img src={i7} alt="Image 7" className="scroll-item" />
  </div>
</div>
      <div className="div3">
      <div className="div3-content">
          <h2 className="div3-heading">Ready to take your Supply Chain to the Next Level?</h2>
          <button className="div3-button">Get Started ▶</button>
       </div>
      </div>
    </div>
  );
};

export default Band;
