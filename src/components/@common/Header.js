import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

import "./Header.css";

import NavigateButton from "../Buttons/NavigateButton";

const Header = () => {
  let location = useLocation();

  const pageTitle = ["Home", "About", "Projects", "Blogs"];
  const pagePaths = pageTitle.map((element) => "/" + element.toLowerCase());

  const pageStates = pageTitle.map(() => useState(false));
  const pageRefs = pageTitle.map(() => useRef(null));

  const pages = [];
  for (let index = 0; index < pageTitle.length; index++) {
    pages.push({
      title: pageTitle[index],
      path: pagePaths[index],
      ref: pageRefs[index]
    });
  }

  useEffect(() => {
    pageRefs.forEach((element) => {
      if (element.current?.classList.contains("active")) {
        pageStates[pageRefs.indexOf(element)][1](true);
      } else {
        pageStates[pageRefs.indexOf(element)][1](false);
      }
    });
  });

  if (location.pathname === "/") {
    return;
  }

  return (
    <nav className="navbar navbar-expand-md navbar-dark">
      <div id="navbar-container" className="container-fluid justify-content-between">
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
          <span id="navbar-icon">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </span>
        </button>
        <div id="navbar-content" className="navbar-collapse collapse justify-content-end text-end">
          <div className="navbar-nav">
            {pages.map((element) => {
              return (
                <NavigateButton
                  key={element.path}
                  innerRef={element.ref}
                  id="navbar-link"
                  className="nav-link"
                  to={element.path}
                  isNavLink={true}
                  activeRef={pageStates[pages.indexOf(element)][0]}>
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
