import React from "react";
import "./Section1.css";
import image from "./other-images/girls.jpg";
import whatsappimg from "./other-images/whatsapp.jpg";
var text='Strengthen your Supply Chain, and Scale your Business \n with Reliable Shipping and Cashflows.';
const Section1 = () => {
  return (
    <div className="container">
      <div className="left-div">
        <h2>Grow Faster, Go Global</h2>
        <p>Strengthen your Supply Chain, and Scale your Business <br />with Reliable Shipping and Cashflows.</p>
        <h3>Talk to us now!</h3>
        <div className="search-bar">
          <img src={whatsappimg} alt="WhatsApp Logo" />
          <span>+91 ▼</span>
          <input type="text" placeholder="Whatsapp number" />
          <button>Get Started</button>
        </div>
      </div>
      <div className="right-div">
        <img src={image} alt="Right Div Image" />
      </div>
    </div>
  );
};

export default Section1;
