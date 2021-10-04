import React from "react";
import logo from "../image/logo.png";
import "../Header/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="MenuBar-container">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <Link to="/home" className="logo-img">
              <img className="w-75 pt-2" src={logo} alt="" />
            </Link>
          </div>
          <div className="col-md-10">
            <div className="menu-container ">
              <ul className="d-flex align-items-end justify-content-end">
                <Link to="/home" className="items">
                  <li>Home</li>
                </Link>
                <Link to="/about" className="items">
                  <li>About</li>
                </Link>
                <Link to="/service" className="items">
                  <li>Service</li>
                </Link>
                <Link to="/blog" className="items">
                  <li>Blog</li>
                </Link>
                <Link to="contact" className="items">
                  <li>Contact us</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
