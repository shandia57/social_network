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
import CreatePublication from './pages/user/createPublication/CreatePublication';
import UpdatePublication from './pages/user/updatePublication/UpdatePublication';
import Forums from './pages/forum/Forums';
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
          <Route path="/user" element={<User />} />
          <Route path="/user/publication" element={<CreatePublication />} />
          <Route path="/user/publication/:id" element={<UpdatePublication />} />
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
