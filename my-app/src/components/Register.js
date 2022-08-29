import React from "react";
import Navbar from "./Navbar";
import "../scss/register.scss";
import images from "../constants/images.js";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="app__register">
      <Navbar />
      <div className="app__register-container">
        <div className="app__register-heading">Załóż konto</div>
        <img
          src={images.Decoration}
          alt="decoration"
          className="app__register-decoration"
        />
        <div className="app__register-details">
          <div className="app__register-details_element">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="app__register-details_element">
            <label htmlFor="password">Hasło</label>
            <input type="password" name="password" id="password" />
          </div>
          <div className="app__register-details_element">
            <label htmlFor="password">Powtórz hasło</label>
            <input type="password" name="password" id="password" />
          </div>
        </div>
        <div className="app__register-options">
          <Link to="/">Załóż konto</Link>
          <Link to="/logowanie">Zaloguj się</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
