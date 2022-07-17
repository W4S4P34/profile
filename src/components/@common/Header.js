import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

import NavigateButton from "../Buttons/NavigateButton";
import { headers } from "../../pages/routes";

import "./Header.css";

const Header = () => {
  let location = useLocation();

  const pages = headers.map((element) => ({
    title: element,
    path: "/" + element.toLowerCase(),
    ref: useRef(null),
    state: useState(false)
  }));

  useEffect(() => {
    pages.forEach((element) => {
      if (element.ref.current?.classList.contains("active")) {
        element.state[1](true);
      } else {
        element.state[1](false);
      }
    });
  });

  if (location.pathname === "/") {
    return;
  }

  return (
    <nav className="navbar navbar-expand-md navbar-dark">
      <div id="header-container" className="container-fluid justify-content-between">
        <NavigateButton className="navbar-brand" to="/home">
          SAMUEL
        </NavigateButton>
        <button
          id="navbar-button"
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-content"
          aria-controls="navbar-content"
          aria-expanded="false">
          <span>
            <i id="navbar-icon" className="fa fa-bars" aria-hidden="true"></i>
          </span>
        </button>
        <div id="navbar-content" className="navbar-collapse collapse justify-content-end text-end">
          <div className="navbar-nav">
            {pages.map((element) => {
              return (
                <NavigateButton
                  key={element.path}
                  id="navbar-link"
                  className="nav-link"
                  to={element.path}
                  isNavLink={true}
                  innerRef={element.ref}
                  activeRef={element.state[0]}>
                  {element.title}
                </NavigateButton>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
