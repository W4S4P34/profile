import $ from 'jquery'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min'

import App from './App'

const root = ReactDOM.createRoot($('#root')[0])
root.render(
  <BrowserRouter basename='/profile'>
    <App />
  </BrowserRouter>
)
