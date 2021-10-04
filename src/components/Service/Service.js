import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Service = () => {
  const [allServices, setAllServices] = useState([]);

  useEffect(() => {
    fetch("./services.JSON")
      .then((res) => res.json())
      .then((data) => setAllServices(data));
  }, []);
  return (
    <div>
      <Header></Header>
      <div className="container-fluid">
        <div className="banner-content">
          <p>Our Services</p>
          <h1>Educating and empowering the community</h1>
        </div>
      </div>
      <div className="container all-service">
        <div className="service">
          <div className="row mt-5 pb-5">
            {allServices?.map((service) => (
              <div className="col-md-4">
                <Card className="g-3 mt-5">
                  <Card.Img variant="top" src={service.img} />
                  <Card.Body>
                    <Card.Title>{service.name}</Card.Title>
                    <Card.Text>Price: ${service.price}</Card.Text>
                    <Card.Text>{service.description}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Service;
