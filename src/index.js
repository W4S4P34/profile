import $ from 'jquery';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './index.css';

import Header from './components/root/Header';
import Footer from './components/root/Footer';

import Content from './Content';

const root = ReactDOM.createRoot($('#root')[0]);
root.render(
  <Router basename="/profile">
    <Header />
    <Content />
    <Footer />
  </Router>
);
