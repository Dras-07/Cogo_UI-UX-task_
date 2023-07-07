import React from 'react';
import './ProductCard.css'
const ProductCard = ({ image, name }) => {
  return (
    <div className="prod-card">
      <img src={image} alt={name} className="prod-card-image" />
      <h2 className="prod-card-heading">{name}</h2>
      <p className="prod-card-button">Find out more</p>
    </div>
  );
};

export default ProductCard;
