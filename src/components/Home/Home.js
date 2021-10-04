import React from "react";
// import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import AllServices from "../AllServices/AllServices";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* <h1>Hello</h1> */}
      <AllServices></AllServices>
      <Footer></Footer>
    </div>
  );
};

export default Home;
