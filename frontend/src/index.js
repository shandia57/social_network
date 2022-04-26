import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Routes
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import App from './pages/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<App />} />
        </Route>
        <Route path="">

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
