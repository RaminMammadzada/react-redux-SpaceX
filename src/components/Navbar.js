import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/spacex_logo.png';

const Navbar = () => (
  <div className="navbar sticky-top">
    <div>
      <img src={logo} alt="logo" />
    </div>
    <div className="nav-links">
      <Link className="mx-2" to="/missions">
        <Button variant="outline-light">Missions</Button>
      </Link>
      <Link className="mx-2" to="/about">
        <Button variant="outline-light">About</Button>
      </Link>
    </div>
  </div>
);

export default Navbar;
