import { useLocation } from "react-router-dom";

import NavigateButton from "../Buttons/NavigateButton";

import "./Footer.css";

const Footer = () => {
  let location = useLocation();

  if (location.pathname === "/") {
    return;
  }

  return (
    <div className="d-flex pt-4 pb-3 justify-content-between">
      <div
        id="copyright-label"
        className="d-flex align-self-center text-reset text-decoration-none user-select-none">
        Copyright © 2022 Samuel La
      </div>
      <div id="contact-channels" className="d-flex fs-4 align-self-center">
        <NavigateButton
          id="contact-icon"
          target="_blank"
          to="https://mail.google.com/mail/?view=cm&to=lathanhthai1905@gmail.com&su=SUBJECT&body=BODY">
          <i className="fa fa-envelope-square" aria-hidden="true"></i>
        </NavigateButton>
        <NavigateButton id="contact-icon" target="_blank" to="https://github.com/W4S4P34">
          <i className="fa fa-github-square" aria-hidden="true"></i>
        </NavigateButton>
        <NavigateButton id="contact-icon" to="/home">
          <i className="fa fa-linkedin-square" aria-hidden="true"></i>
        </NavigateButton>
        <NavigateButton id="contact-icon" to="/home">
          <i className="fa fa-facebook-square" aria-hidden="true"></i>
        </NavigateButton>
        <NavigateButton id="contact-icon" to="/home">
          <i className="fa fa-twitter-square" aria-hidden="true"></i>
        </NavigateButton>
      </div>
    </div>
  );
};

export default Footer;
