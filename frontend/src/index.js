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
import App from './pages/app';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

      {/* Controller Route */}
      <Routes>
        <Route path="/" element={<Empty />}>
          <Route index element={<App />} />
        </Route>

        {/* Auth routes */}
        <Route path="/auth" element={<Empty />}>
          <Route index element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signup />} />
        </Route>

        {/* Others pages */}
        <Route path="/homepage" element={<Empty />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();