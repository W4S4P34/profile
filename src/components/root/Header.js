import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import './Header.css';

const Header = (props) => {
  let location = useLocation();

  function renderHeader() {
    if (location.pathname === '/') return;

    return (
      <nav className="navbar navbar-expand-md navbar-dark">
        <div
          id="navbar-container"
          className="container-fluid justify-content-between">
          <Link
            className="navbar-brand ms-4 text-reset text-decoration-none"
            to="/home">
            SAMUEL
          </Link>
          <button
            id="navbar-button"
            className="navbar-toggler me-4"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-content"
            aria-controls="navbar-content"
            aria-expanded="false">
            <span id="navbar-icon">
              <i className="fa fa-bars" aria-hidden="true"></i>
            </span>
          </button>
          <div
            id="navbar-content"
            className="navbar-collapse collapse mx-4 justify-content-end text-end">
            <div className="navbar-nav">
              <NavLink
                id="navbar-link"
                className="nav-link text-reset text-decoration-none"
                to="/home">
                Home
              </NavLink>
              <NavLink
                id="navbar-link"
                className="nav-link text-reset text-decoration-none"
                to="/about">
                About
              </NavLink>
              <NavLink
                id="navbar-link"
                className="nav-link text-reset text-decoration-none"
                to="/projects">
                Projects
              </NavLink>
              <NavLink
                id="navbar-link"
                className="nav-link text-reset text-decoration-none"
                to="/blogs">
                Blogs
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return renderHeader();
};

export default Header;
