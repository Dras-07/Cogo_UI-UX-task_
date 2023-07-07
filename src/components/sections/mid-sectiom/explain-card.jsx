import React from 'react';
import './explain-card.css';

const Card = ({ smallHeading, title, description1,description2,description3, imageUrl }) => {
  return (
    <div className="card">
      <h3 className="card-small-heading">{smallHeading}</h3>
      <div className="card-heading">
        <img className="card-image" src={imageUrl} alt="Card" />
        <h2 className="card-title">{title}</h2>
      </div>
        <div className="card-content">
          <p className="card-description">{description1}</p>
          <p className="card-description">{description2}</p>
          <p className="card-description">{description3}</p>
        </div>
      </div>
  );
};

export default Card;
