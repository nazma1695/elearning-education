import React from "react";
import blog1 from "../image/blog1.jpg";
import blog2 from "../image/blog2.jpg";
import blog3 from "../image/blog3.jpg";
import Header from "../Header/Header";
import { Card, Button } from "react-bootstrap";
import "./Blog.css";
import Footer from "../Footer/Footer";

const Blog = () => {
  return (
    <div>
      <Header></Header>
      <div className="container-fluid">
        <div className="banner-content">
          <p>Blog</p>
          <h1>Educating and empowering the community</h1>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src={blog1} />
              <Card.Body>
                <Card.Title>Build A Full Web Chat App From Scratch.</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src={blog2} />
              <Card.Body>
                <Card.Title>
                  Brush Strokes Energize Trees In Paintings
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src={blog3} />
              <Card.Body>
                <Card.Title>Learning Python for Data Analysis.</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row mt-5 pb-5">
          <div className="col-md-4">
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src={blog2} />
              <Card.Body>
                <Card.Title>Build A Full Web Chat App From Scratch.</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src={blog3} />
              <Card.Body>
                <Card.Title>
                  Brush Strokes Energize Trees In Paintings
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src={blog1} />
              <Card.Body>
                <Card.Title>Learning Python for Data Analysis.</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Blog;
