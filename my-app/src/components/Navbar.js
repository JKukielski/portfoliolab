import React from "react";
import { Link } from "react-router-dom";
import "../scss/navbar.scss";

const Navbar = () => {
  return (
    <div className="app__navbar">
      <div className="app__navbar-user">
        <Link to="/logowanie">Zaloguj</Link>
        <Link to="/rejestracja">Załóż konto</Link>
      </div>
      <div className="app__navbar-menu">
        <ul className="app__navbar-menu_list">
          <li className="app__navbar-menu_list-item">
            <Link to="/">Start</Link>
          </li>
          <li className="app__navbar-menu_list-item">
            <a href="/"> O co chodzi?</a>
          </li>
          <li className="app__navbar-menu_list-item">
            <a href="#about">O nas</a>
          </li>
          <li className="app__navbar-menu_list-item">
            <a href="#organizations">Fundacja i organizacje</a>
          </li>
          <li className="app__navbar-menu_list-item">
            <a href="/#contact">Kontakt</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
