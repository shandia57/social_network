import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './index.css';

// Routes
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from './pages/home/Home';
import User from './pages/user/User';
import Forums from './pages/forum/forums/Forums';
import ForumsDetails from './pages/forum/forumDetails/ForumsDetails';
import Empty from './components/layout/navigation/Empty';
import NavBar from './components/layout/navigation/PrincipalNavigationBar';
import Auth from './pages/auth/Auth';
import Signin from './pages/auth/signin/Signin';
import Signup from './pages/auth/signup/Signup';
import App from './pages/app';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

      {/* Controller Route */}
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<App />} />
          <Route path="/home" element={<Home />} />
          <Route path="/forums" element={<Forums />} />
          <Route path="/forums/details" element={<ForumsDetails />} />
          <Route path="/user" element={<User />} />
        </Route>

        {/* Auth routes */}
        <Route path="/auth" element={<Empty />}>
          <Route index element={<Auth />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
