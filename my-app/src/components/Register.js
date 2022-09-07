import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import "../scss/register.scss";
import images from "../constants/images.js";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.js";

const Register = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (emailRef.current.value.length === 0) {
      setEmailError("Wprowadź adres mailowy");
    } else {
      setEmailError("");
    }

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      setPasswordConfirmError("Hasła muszą być identyczne");
    } else {
      setPasswordConfirmError("");
    }

    if (
      passwordRef.current.value.length === 0 ||
      passwordRef.current.value < 6
    ) {
      setPasswordError("Podane hasło jest za krótkie");
    } else {
      setPasswordError("");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/oddaj-rzeczy");
    } catch {
      setError("");
    }

    setLoading(false);
  }

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
        <form onSubmit={handleSubmit}>
          <div className="app__register-details">
            <div className="app__register-details_element">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                ref={emailRef}
                style={{ borderBottom: emailError && "1px solid red" }}
              />
              <p className="app__register-error">{emailError}</p>
            </div>
            <div className="app__register-details_element">
              <label htmlFor="password">Hasło</label>
              <input
                type="password"
                name="password"
                id="password"
                ref={passwordRef}
                style={{ borderBottom: passwordError && "1px solid red" }}
              />
              <p className="app__register-error">{passwordError}</p>
            </div>
            <div className="app__register-details_element">
              <label htmlFor="passwordConfirm">Powtórz hasło</label>
              <input
                type="password"
                name="passwordConfirm"
                id="passwordConfirm"
                ref={passwordConfirmRef}
                style={{
                  borderBottom: passwordConfirmError && "1px solid red",
                }}
              />
              <p className="app__register-error">{passwordConfirmError}</p>
            </div>
          </div>
          <div className="app__register-options">
            <button type="submit" disabled={loading}>
              Załóż konto
            </button>
            <Link to="/logowanie">Zaloguj się</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
