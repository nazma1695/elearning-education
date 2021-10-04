import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Contact = () => {
  return (
    <div>
      <Header></Header>
      <div className="container-fluid mt-3 pb-5">
        <div className="banner-content">
          <p>Contact Us</p>
          <h1>Educating and empowering the community</h1>
        </div>
      </div>
      <div className="container">
        <form className="row g-3 mb-5 mt-3">
          <div className="col-md-6">
            <label for="inputName" className="form-label">
              Name
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="col-md-6">
            <label for="inputEmail" className="form-label">
              Email
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="col-md-12">
            <label for="inputAddress" className="form-label">
              Address
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter Your Address"
            />
          </div>
          <div className="col-md-6">
            <label for="inputCity" className="form-label">
              City
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter Your City"
            />
          </div>
          <div className="col-md-4">
            <label for="inputCity" className="form-label">
              State
            </label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Select Your State</option>
              <option value="1">Khulna</option>
              <option value="2">Jessore</option>
              <option value="3">Dhaka</option>
            </select>
          </div>
          <div className="col-md-2">
            <label for="inputZip" className="form-label">
              Zip
            </label>
            <input className="form-control" type="number" />
          </div>
          <div className="col-md-12">
            <input className="form-check-input" type="checkbox" />
            <label for="exampleCheck1" className="form-check-label">
              Check me out
            </label>
          </div>
          <div className="col-md-12">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
