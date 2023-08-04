// src/components/Jumbotron.js
import React from 'react';

const Jumbotron = () => {
  return (
    <div className="jumbotron jumbotron-fluid bg-primary text-light text-left py-5" id="home">
      <div className="container">
        <h1 className="display-4">Welcome to Our Website</h1>
        <p className="lead">We provide amazing services to our clients.</p>
        <button className="btn btn-light btn-lg">Learn More</button>
      </div>
    </div>
  );
};

export default Jumbotron;
