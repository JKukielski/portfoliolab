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

    if (emailRef.current.value.length === 0) {
      setEmailError("Wprowadź adres mailowy");
    } else {
      setEmailError("");
    }

    if (passwordRef.current.value.length === 0) {
      setPasswordError("Wprowadź hasło");
    } else {
      setPasswordError("");
    }

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/oddaj-rzeczy");
    } catch {
      setError("Niepoprawny email lub hasło");
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
              <input
                type="email"
                name="email"
                id="email"
                ref={emailRef}
                style={{ borderBottom: emailError && "1px solid red" }}
              />
              <p className="app__login-error">{emailError}</p>
            </div>
            <div className="app__login-details_element">
              <label htmlFor="password">Hasło</label>
              <input
                type="password"
                name="password"
                id="password"
                ref={passwordRef}
                style={{ borderBottom: passwordError && "1px solid red" }}
              />
              <p className="app__login-error">{passwordError}</p>
            </div>
            <p className="app__login-error">{error}</p>
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
