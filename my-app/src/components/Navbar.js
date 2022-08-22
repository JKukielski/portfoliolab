import React from "react";
import { Link } from "react-router-dom";
import "../scss/navbar.scss";

const Navbar = () => {
  return (
    <div className="app__navbar">
      <div className="app__navbar-user">
        <p>Zaloguj</p>
        <p>Załóż konto</p>
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
            <a href="/">O nas</a>
          </li>
          <li className="app__navbar-menu_list-item">
            <a href="/">Fundacja i organizacje</a>
          </li>
          <li className="app__navbar-menu_list-item">
            <a href="/">Kontakt</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
