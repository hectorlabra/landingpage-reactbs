// src/js/App.js
import React from 'react';
import Navbar from './component/Navbar';
import Jumbotron from './component/Jumbotron';
import Card from './component/Card';
import Footer from './component/Footer';
import '../styles/index.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <div className="container my-5" id="services">
        <div className="row">
          <div className="col-md-3">
            <Card
              imageSrc="path_to_your_image.jpg"
              title="Service 1"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
          {/* Repite esto para las otras 3 tarjetas */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
