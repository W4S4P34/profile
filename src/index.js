import $ from 'jquery'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min'

import './index.css'

import Header from './components/Header';
import Footer from './components/Footer';

import App from './App'


const root = ReactDOM.createRoot($('#root')[0])
root.render(
  <div id='root-content' className='d-flex flex-column justify-content-between'>
    <BrowserRouter basename='/profile'>
      <Header />
      <App />
      <Footer />
    </BrowserRouter>
  </div>
)
