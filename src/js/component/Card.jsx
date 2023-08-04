// src/components/Card.js
import React from 'react';

const Card = ({ imageSrc, title, text }) => {
  return (
    <div className="card">
      <img src={imageSrc} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <button className="btn btn-primary">Read More</button>
      </div>
    </div>
  );
};

export default Card;
