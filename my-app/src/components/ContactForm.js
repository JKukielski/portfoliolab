import React, { useState, useRef } from "react";
import images from "../constants/images.js";
import Footer from "./Footer.js";
import "../scss/contactForm.scss";

const ContactForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  return (
    <div className="app__contact" id="contact" activeClassName="contact">
      <div className="app__contact-overlay"></div>
      <div className="app__contact-container">
        <div className="app__contact-container_align">
          <div className="app__contact-heading">
            <h1 className="app__contact-heading_text">Skontaktuj się z nami</h1>
            <img src={images.Decoration} alt="decoration" />
          </div>
          <form className="app__contact-form" onSubmit={() => {}} action="">
            <div className="app__contact-form_details">
              <div className="app__contact-form_element">
                <label htmlFor="name">Wpisz swoje imię</label>
                <input
                  type="text"
                  placeholder="Krzysztof"
                  id="name"
                  ref={nameRef}
                />
              </div>
              <div className="app__contact-form_element">
                <label htmlFor="">Wpisz swój email</label>
                <input
                  type="email"
                  placeholder="abc@xyz.pl"
                  id="email"
                  ref={emailRef}
                />
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
                ref={messageRef}
              ></textarea>
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
