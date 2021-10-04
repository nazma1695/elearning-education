import React from "react";
// import Header from "../Header/Header";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div>
      <div className="back text-end">
        <Link to="/home">
          <p className="btn btn-warning">Back To Site</p>
        </Link>
      </div>
      <div className="not-found">
        <h1>404</h1>
        <h3>Not Found</h3>
        <p>The resource requested could not be found on this server!</p>
      </div>
    </div>
  );
};

export default NotFound;
