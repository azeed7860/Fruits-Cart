import React from 'react';
 // Import the Login component
 import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src="logo.png" style={{height: '90px', width: '90px'}} alt="Logo" />Fruits-Cart</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link className="nav-link" to="/" >Home</Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Shop</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" >Contact</a>
            </li>
          </ul>
          <span class="navbar-text">
          <Link to="/Login" className="btn btn-warning">Sign-up</Link>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
