import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import "../scss/login.scss";
import images from "../constants/images.js";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.js";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    // if (emailRef.current.value === "" || passwordRef.current.value === "") {
    //   setError("Wprowadź adres mailowy oraz hasło");
    // }

    if (passwordError.current.value.length < 6) {
      setPasswordError("Podane hasło jest za krótkie");
    }
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/oddaj-rzeczy");
    } catch {
      setError("Logowanie nie powiodło się");
    }

    setLoading(false);
  }

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
        <form onSubmit={handleSubmit}>
          <div className="app__login-details">
            <div className="app__login-details_element">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" ref={emailRef} />
            </div>
            <div className="app__login-details_element">
              <label htmlFor="password">Hasło</label>
              <input
                type="password"
                name="password"
                id="password"
                ref={passwordRef}
              />
            </div>
            <p className="app__register-error">{error}</p>
          </div>
          <div className="app__login-options">
            <Link to="/rejestracja">Załóż konto</Link>
            <button type="submit">Zaloguj się</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
