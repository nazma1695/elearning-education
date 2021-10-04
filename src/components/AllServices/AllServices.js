import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import "./AllServices.css";

const AllServices = () => {
  const [allServices, setAllServices] = useState([]);

  useEffect(() => {
    fetch("./api.JSON")
      .then((res) => res.json())
      .then((data) => setAllServices(data));
  }, []);
  return (
    <div className="container all-teams">
      <div className="all-team">
        <h1 style={{ color: "#0c2e60" }}>Our Services</h1>
      </div>
      <div className="teams">
        <div className="row">
          {allServices?.map((service) => (
            <div className="col-md-3">
              <Card className="g-3">
                <Card.Img variant="top" src={service.img} />
                <Card.Body>
                  <Card.Title>{service.name}</Card.Title>
                  <Card.Text>Price: ${service.price}</Card.Text>
                  <Card.Footer>
                    <small className="text-white text-center btn btn-warning">
                      Enroll Now
                    </small>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllServices;
