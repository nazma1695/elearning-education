import React from "react";
import img from "../image/about-img.jpg";
import img1 from "../image/1.png";
import img2 from "../image/2.png";
import img3 from "../image/3.png";
import img4 from "../image/4.png";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./About.css";

const About = () => {
  return (
    <div>
      <Header></Header>
      <div className="container-fluid">
        <div className="banner-content">
          <p>About Us</p>
          <h1>Educating and empowering the community</h1>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5 pb-5">
          <div className="col-md-6 mx-auto">
            <h2>Perspiciatis unde omnis iste natus error inventore.</h2>
            <p>
              Perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <h2>Dolor sit amet consectetur adipisicing elit. Unde, quasi.</h2>
            <p>
              Nemo dolores, iusto pariatur corporis quis ullam harum voluptate
              porro officiis aliquam quas explicabo? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Alias similique, consequuntur
              incidunt at repellendus ratione totam excepturi iste. Similique
              ipsum numquam recusandae, eligendi maiores temporibus officia
              harum labore deleniti quasi.
            </p>
          </div>
          <div className="col-md-6">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="row pb-5">
          <div className="col-md-3">
            <img src={img1} alt="" />
          </div>
          <div className="col-md-3">
            <img src={img2} alt="" />
          </div>
          <div className="col-md-3">
            <img src={img3} alt="" />
          </div>
          <div className="col-md-3">
            <img src={img4} alt="" />
          </div>
        </div>
      </div>

      {/* <Banner></Banner> */}
      <Footer></Footer>
    </div>
  );
};

export default About;
