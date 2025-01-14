// rout.jsx
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';  // from react-router-dom (v6+)
import Home from "./home";
import Shop from "./shop";
import Cart from "./cart";
import Login from './auth/Login';
import Register from "./auth/Register";
import ForgotPassword from "./auth/ForgotPassword";
import Alert from "./layout/Alert";

// Redux stuff (for dispatch only; do NOT wrap with Provider again)
import store from '../store';
import { loadUser } from '../actions/auth';
import setAuthToken from '../utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const Rout = ({ shop, Filter, allcatefilter, addtocart, cart }) => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <>
      {/* Keep your Alert if you want to display Redux-based alerts */}
      <Alert />

      {/* No <Provider>, no <BrowserRouter> here. Just <Routes> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route
          path="/shop"
          element={
            <Shop
              shop={shop}
              Filter={Filter}
              allcatefilter={allcatefilter}
              addtocart={addtocart}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              Filter={Filter}
              allcatefilter={allcatefilter}
              addtocart={addtocart}
            />
          }
        />
        <Route
          path="/register"
          element={
            <Register
              Filter={Filter}
              allcatefilter={allcatefilter}
              addtocart={addtocart}
            />
          }
        />
        <Route
          path="/forgotPassword"
          element={
            <ForgotPassword
              Filter={Filter}
              allcatefilter={allcatefilter}
              addtocart={addtocart}
            />
          }
        />
      </Routes>
    </>
  );
};

export default Rout;
