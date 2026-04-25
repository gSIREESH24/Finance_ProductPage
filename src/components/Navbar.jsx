import React from 'react';
import './Navbar.css';

const Navbar=()=>{
  return (
    <div className="navbar-container">
      <div className="container">
        <nav className="navbar-content">
          <a href="/" className="brand-logo">
            <div className="brand-icon">R</div>
            RupeeVyze
          </a>
          <ul className="navigation-menu">
            <li><a href="#products">Products</a></li>
            <li><a href="#solutions">Solutions</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#resources">Resources</a></li>
          </ul>
          <div className="navigation-buttons">
            <button className="login-button">Log in</button>
            <button className="signup-button">Open Account</button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
