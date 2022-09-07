import React, { useState, useRef } from "react";
import images from "../constants/images.js";
import Footer from "./Footer.js";
import "../scss/contactForm.scss";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [success, setSuccess] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const data = { name, email, message };

    if (name.length === 0) {
      setNameError("Wprowadź swoje imię!");
    } else {
      setNameError("");
    }

    if (email.length === 0) {
      setEmailError("Wprowadź swój adres mailowy!");
    } else {
      setEmailError("");
    }

    if (message.length < 120) {
      setMessageError("Wiadomość musi mieć conajmniej 120 znaków!");
    } else {
      setMessageError("");
    }

    fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        setSuccess("Wiadomość została wysłana! Wkrótce się skontaktujemy.");
        setName("");
        setEmail("");
        setMessage("");
      }
    });
  }

  return (
    <div className="app__contact" id="contact" activeClassName="contact">
      <div className="app__contact-overlay"></div>
      <div className="app__contact-container">
        <div className="app__contact-container_align">
          <div className="app__contact-heading">
            <h1 className="app__contact-heading_text">Skontaktuj się z nami</h1>
            <img src={images.Decoration} alt="decoration" />
          </div>
          <p className="app__contact-success">{success}</p>

          <form className="app__contact-form" onSubmit={handleSubmit}>
            <div className="app__contact-form_details">
              <div className="app__contact-form_element">
                <label htmlFor="name">Wpisz swoje imię</label>
                <input
                  type="text"
                  placeholder="Krzysztof"
                  id="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  style={{ borderBottom: nameError && "1px solid red" }}
                />
                <p className="app__contact-error">{nameError}</p>
              </div>
              <div className="app__contact-form_element">
                <label htmlFor="">Wpisz swój email</label>
                <input
                  type="email"
                  placeholder="abc@xyz.pl"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  style={{ borderBottom: emailError && "1px solid red" }}
                />
                <p className="app__contact-error">{emailError}</p>
              </div>
            </div>
            <div className="app__contact-form_message">
              <label htmlFor="message">Wpisz swoją wiadomość</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="5"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat."
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                style={{ borderBottom: messageError && "1px solid red" }}
              ></textarea>
              <p className="app__contact-error">{emailError}</p>
            </div>
            <div className="app__contact-form_button-container">
              <button type="submit" className="app__contact-form_btn">
                Wyślij
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactForm;
