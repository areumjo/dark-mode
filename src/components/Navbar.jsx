import React, { useState } from 'react';
import useDarkMode from './hooks/useDarkMode';
import { Link } from "react-router-dom";


const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
    console.log('clicked!');
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <Link to="/" style={{textDecoration: 'none'}}><h2>Home</h2></Link>
      <Link to="/charts" style={{textDecoration: 'none'}}><h2>Charts</h2></Link>
      <Link to="/about" style={{textDecoration: 'none'}}><h2>About</h2></Link>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
