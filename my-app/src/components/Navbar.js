import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../scss/navbar.scss";
import { useAuth } from "../contexts/AuthContext";
const Navbar = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/wylogowano");
    } catch {
      setError("Wylogowanie nie powiodło się");
    }
  }

  return (
    <div className="app__navbar">
      {currentUser ? (
        <div className="app__navbar-options">
          <p className="app__navbar_welcome">Cześć {currentUser.email}</p>
          <a href="/oddaj-rzeczy#oddaj-rzeczy">Oddaj rzeczy</a>
          <button className="app__navbar-logout_btn" onClick={handleLogout}>
            Wyloguj
          </button>
        </div>
      ) : (
        <div className="app__navbar-options">
          <Link to="/logowanie">Zaloguj się</Link>
          <Link to="/rejestracja">Załóż konto</Link>
        </div>
      )}

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
