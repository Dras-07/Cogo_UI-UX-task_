import React from 'react';
import Card from './explain-card'; 
import './ExplainSection.css';
import compassimg from './img-card-exp/compass.jpg';
import bank from './img-card-exp/bank.jpg';
import cal from './img-card-exp/calendar.jpg';
import book from './img-card-exp/Book.jpg';
import middleImage from './explain-section-img/laptop.jpg'
import topleft from './explain-section-img/tl.jpg';
import topright from './explain-section-img/tr.jpg';
import bottomleft from './explain-section-img/bl.jpg';
import bottomright from './explain-section-img/br.jpg';
const ExplainSection = () => {
  return (
    <div className="es-container">
      <div className="es-left-container">
        <div className="left-container-top">
          <Card
            smallHeading="Stage-1"
            title="Discover"
            description1="•Spot and Contract Rates for Logistics"
            description2= "•Service details, Trade Compliance Regulatory Requirements " 
            description3= "•Knowledge and Insights on Trade, Logistics, Finance, Supply Chains"
            imageUrl={compassimg}
          />
        </div>
        <div className="left-container-bottom">
          <Card
            smallHeading="Stage-2"
            title="Plan & Book"
              description1="•Route, Service Schedules, Inventory, and Cashflow planning"
              description2= "•Book with upfront visibility of service terms and inclusions"
              description3=""
            imageUrl= {book}
          />
        </div>
      </div>
      <div className="es-middle-container">
      <img className="top-left" src={topleft} alt="Top Left" />
      <img className="top-right" src={topright} alt="Top Right" />
        <img className="middle-image" src={middleImage} alt="Middle Image" />
        <img className="bottom-left" src={bottomleft} alt="Bottom Left" />
        <img className="bottom-right" src={bottomright} alt="Bottom Right" />
      </div>
      <div className="es-right-container">
        <div className="right-container-top">
          <Card
            smallHeading="Stage-3"
            title="Execute"
            description1="•Ocean and Air Cargo Tracking"
            description2="•Documentation and Filings, Handled"
            description3="•Multi-modal: Smooth coordination and handovers between various service providers and stakeholders"
            imageUrl={cal}
          />
        </div>
        <div className="right-container-bottom">
          <Card
            smallHeading="Stage-4"
            title="Finance"
            description1="•Deferred payment on Logistics with PayLater"
            description2="•Trade Finance for your Cargo with Export Factoring"
            description3=""
            imageUrl={bank}
          />
        </div>
      </div>
    </div>
  );
};

export default ExplainSection;
