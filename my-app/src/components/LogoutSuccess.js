import React from "react";
import "../scss/logoutSuccess.scss";
import images from "../constants/images.js";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const LogoutSuccess = () => {
  return (
    <div className="app__logout">
      <Navbar />
      <div className="app__logout-container">
        <div className="app__logout-heading">
          Wylogowanie nastąpiło <br /> pomyślnie!
        </div>
        <img
          src={images.Decoration}
          alt="decoration"
          className="app__logout-decoration"
        />
        <button className="app__logout-btn">
          <Link to="/">Strona główna</Link>
        </button>
      </div>
    </div>
  );
};

export default LogoutSuccess;
