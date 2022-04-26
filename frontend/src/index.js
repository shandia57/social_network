import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Routes
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from './pages/home/Home';
import Empty from './components/layout/Empty';
import Signin from './pages/auth/signin/Signin';
import Signup from './pages/auth/signup/Signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Empty />}>
          <Route index element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="home" element={<Home />} />
        </Route>
        <Route path="">

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
