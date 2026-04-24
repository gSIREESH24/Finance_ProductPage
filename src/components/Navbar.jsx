import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="container">
        <nav className="navbar">
          <a href="/" className="logo">
            <div className="logo-icon">R</div>
            RupeeVyze
          </a>
          <ul className="nav-links">
            <li><a href="#products">Products</a></li>
            <li><a href="#solutions">Solutions</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#resources">Resources</a></li>
          </ul>
          <div className="nav-actions">
            <button className="btn-ghost">Log in</button>
            <button className="btn-nav-cta">Open Account</button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
