import React from "react";
import Header from "../Header/Header";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <Header></Header>
      <div className="">
        <div className="row d-flex banner align-items-center justify-content-center">
          <div className="col-md-10 banner-text">
            <h1 className="title">EDUCATE!</h1>
            <h3>SMART IS GREAT</h3>
            <button className="mt-3 btn btn-warning">About Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
