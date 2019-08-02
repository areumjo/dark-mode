import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import { BrowserRouter, Route } from 'react-router-dom';
import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

import "./styles.css";

const App = () => {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => {
        setCoinData(res.data)
        // console.log(res.data)
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Route path="/" exact component = {Home} />
      <Route path="/about" component = {About} />
      <Route path="/charts" render={props => <Charts {...props} coinData={coinData} />} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter><App /></BrowserRouter>, rootElement);
