import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App.jsx';

import './index.css';
import "../public/assets/js/bootstrap.min.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
// import "../public/assets/js/main.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
