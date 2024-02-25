import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';

import './index.css';
import "../public/assets/js/bootstrap.min.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { AuthProvider } from './store/auth.jsx';
// import "../public/assets/js/main.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </AuthProvider>

)
