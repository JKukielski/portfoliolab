import React from "react";
import "../scss/aboutUs.scss";
import images from "../constants/images.js";

const AboutUs = () => {
  return (
    <div className="app__aboutus" id="about">
      <div className="app__aboutus-container">
        <div className="app__aboutus-text">
          <h1 className="app__aboutus-text_heading">O nas</h1>
          <img
            className="app__aboutus-text_decoration"
            src={images.Decoration}
            alt="decoration"
          />
          <p className="app__aboutus-text_description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            aspernatur, aperiam doloribus ex ipsam eum eos ab tenetur eveniet
            illo unde quidem?
          </p>
          <img
            className="app__aboutus-text_signature"
            src={images.Signature}
            alt=""
          />
        </div>
        <div className="app__aboutus-image">
          <img src={images.AboutUs} alt="people" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
