import $ from "jquery";

import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

// Bootstrap CSS

import "bootstrap/dist/css/bootstrap.min.css";

// Bootstrap Bundle JS

import "bootstrap/dist/js/bootstrap.bundle.min";

import "./index.css";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

import Content from "./Content";

const root = ReactDOM.createRoot($("#root")[0]);
root.render(
  <Router>
    <Header />
    <Content />
    <Footer />
  </Router>
);
