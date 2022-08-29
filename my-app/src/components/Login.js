import React from "react";
import Navbar from "./Navbar";
import "../scss/login.scss";
import images from "../constants/images.js";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="app__login">
      <Navbar />
      <div className="app__login-container">
        <div className="app__login-heading">Zaloguj się</div>
        <img
          src={images.Decoration}
          alt="decoration"
          className="app__login-decoration"
        />
        <div className="app__login-details">
          <div className="app__login-details_element">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="app__login-details_element">
            <label htmlFor="password">Hasło</label>
            <input type="password" name="password" id="password" />
          </div>
        </div>
        <div className="app__login-options">
          <Link to="/">Załóż konto</Link>
          <Link to="/logowanie">Zaloguj się</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
