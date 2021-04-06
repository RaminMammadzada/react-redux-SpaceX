import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div className="navbar">
    <div>
      <p>Logo</p>
    </div>
    <div className="nav-links">
      <Link className="nav-item" to="/missions">Missions</Link>
      <Link className="nav-item" to="/about">About</Link>
    </div>
  </div>
);

export default Navbar;
