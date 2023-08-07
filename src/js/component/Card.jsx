import React from 'react';

const Card = ({ imageSrc, title, text }) => {
  return (
    <div className="card mb-4 h-100">
      <img src={imageSrc} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <button className="btn btn-primary mt-3">Read More</button>
      </div>
    </div>
  );
};

const Services = () => {
  const servicesData = [
    {
      imageSrc: "https://picsum.photos/200", // URL externa a la imagen 1
      title: "Service 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      imageSrc: "https://picsum.photos/200", // URL externa a la imagen 2
      title: "Service 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      imageSrc: "https://picsum.photos/200", // URL externa a la imagen 3
      title: "Service 3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      imageSrc: "https://picsum.photos/200", // URL externa a la imagen 4
      title: "Service 4",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="container-fluid my-5" id="services">
      {/* Cambio de container a container-fluid */}
      <div className="row">
        {servicesData.map((service, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-3 mb-4">
            {/* Cambio de clases de columnas */}
            <Card
              imageSrc={service.imageSrc}
              title={service.title}
              text={service.text}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
