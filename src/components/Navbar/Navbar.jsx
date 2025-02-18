/* eslint linebreak-style: ["error", "windows"] */

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Nav } from 'react-bootstrap';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbars = () => {
  const links = [
    {
      id: 1,
      text: 'Rocket',
      path: '/',
    },
    {
      id: 2,
      text: 'Mission',
      path: '/missions',
    },
    {
      id: 3,
      text: 'My profile',
      path: '/profile',
    },
  ];

  const listOfLinks = links.map((link) => (
    <li key={link.id} className="nav-link">
      <NavLink className="nav-link" to={link.path}>{link.text}</NavLink>
    </li>
  ));

  return (

    <header>
      <Nav className="navbar navbar-expand-lg">
        <Container className="container-fluid">
          <img className="nav-logo" src={logo} alt="The page Logo" />
          <a className="navbar-brand" href="/">Space Traveler&lsquo;s Hub</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
            <ul className="navbar-nav">
              {listOfLinks}
            </ul>
          </div>
        </Container>
      </Nav>
    </header>
  );
};

export default Navbars;
