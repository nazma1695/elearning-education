import React from "react";
import logo from "../image/logo.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-start">
                <img src={logo} alt="" />
                <p className="mt-4 ">
                  <small>
                    *There are many variations of passg of Lorem Ipsum
                    available, but thmajority have suffered altem,
                  </small>
                </p>

                <p className="mt-3">
                  <small>Nazma © . All rights reserved.</small>
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container">
                <ul>
                  <li className="footer-menu">Home</li>
                  <li className="footer-menu">About</li>
                  <li className="footer-menu">Services</li>
                  <li className="footer-menu">Blog</li>
                  <li className="footer-menu">Contact Us</li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="right-footer-container">
                <h3>Sign up for Next </h3>
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Enter Your Email"
                />
                <div className="phone d-flex mt-4">
                  <div>
                    <h5>+1 8 800 555 35 35</h5>
                  </div>
                </div>
                <div className="map">
                  <div>
                    <p>
                      160 Broadway, New York, NY 10038,
                      <br /> 102 1st Avenue, New York, NY 100
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
