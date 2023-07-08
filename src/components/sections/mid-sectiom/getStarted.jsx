import React from 'react';
import './getStarted.css';

const GetStarted = () => {
  return (
    <div className="get-started-container">
      <div className="get-started-left">
        <h1>Get Started Today</h1>
        <p>Plan, Book, and Finance your shipment in one place.
         <br />Experience how Cogoport’s Global Trade Platform can Turbocharge your Business.</p>
        <button className="get-started-button">Get Started</button>
      </div>
      <div className="get-started-right">
        <img src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Ftrade-tech-home-1.webp&w=384&q=75" alt="Get Started Image" />
      </div>
    </div>
  );
}

export default GetStarted;
