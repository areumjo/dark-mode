import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-div">
        <h1>Welcome to our magical</h1>
        <h1>crypto-data world</h1>
      </div>
      <Link to="/charts" style={{textDecoration: 'none'}}>
        <h2>ENTER</h2>
      </Link>
    </div>
  );
};

export default Home;
