import React from 'react';
import './Card.css';

const Card = ({ img, title, description }) => {
  return (
    <div className="card">
      <img src={img} alt={title} className="card-img"/>
      <h4 className="card-title">{title}</h4>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;