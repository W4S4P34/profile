import $ from "jquery";

import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/@common/Header";
import Footer from "./components/@common/Footer";

import Content from "./Content";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./index.css";

const root = ReactDOM.createRoot($("#root")[0]);
root.render(
  <Router basename="/profile">
    <Header />
    <Content />
    <Footer />
  </Router>
);
