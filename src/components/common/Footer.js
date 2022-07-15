import { useLocation } from "react-router-dom";

import "./Footer.css";

import ExternalLink from "../../utils/ExternalLink";

const Footer = () => {
  let location = useLocation();

  function renderFooter() {
    if (location.pathname === "/") {
      return;
    }

    return (
      <div className="d-flex w-100 justify-content-between">
        <div id="copyright-label" className="d-flex ps-4 py-4">
          Copyright © 2022 Samuel La
        </div>
        <div id="contact-channels" className="d-flex pe-4 py-4">
          <ExternalLink
            id="contact-icon"
            className="text-reset text-decoration-none"
            target="_blank"
            to="https://mail.google.com/mail/?view=cm&to=lathanhthai1905@gmail.com&su=SUBJECT&body=BODY">
            <i className="fa fa-envelope-square" aria-hidden="true"></i>
          </ExternalLink>
          <ExternalLink
            id="contact-icon"
            className="text-reset text-decoration-none"
            target="_blank"
            to="https://github.com/W4S4P34">
            <i className="fa fa-github-square" aria-hidden="true"></i>
          </ExternalLink>
          <ExternalLink id="contact-icon" className="text-reset text-decoration-none" to="/home">
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
          </ExternalLink>
          <ExternalLink id="contact-icon" className="text-reset text-decoration-none" to="/home">
            <i className="fa fa-facebook-square" aria-hidden="true"></i>
          </ExternalLink>
          <ExternalLink id="contact-icon" className="text-reset text-decoration-none" to="/home">
            <i className="fa fa-twitter-square" aria-hidden="true"></i>
          </ExternalLink>
        </div>
      </div>
    );
  }

  return renderFooter();
};

export default Footer;
