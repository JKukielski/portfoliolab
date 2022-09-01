import React from "react";
import Navbar from "./Navbar";
import "../scss/hero.scss";
import images from "../constants/images.js";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <Navbar />
      <div className="app__hero">
        <div className="app__hero-image_container">
          <img className="app__hero-image" src={images.HeroImage} alt="items" />
        </div>
        <div className="app__hero-content">
          <h1 className="app__hero-heading">
            Zacznij pomagać! <br /> Oddaj niechciane rzeczy w zaufane ręce
          </h1>
          <img
            className="app__hero-decoration_image"
            src={images.Decoration}
            alt="decoration"
          />
          <div className="app__hero-content_buttons">
            <Link to="/oddaj-rzeczy" className="app__hero-content_btn">
              ODDAJ RZECZY
            </Link>
            <button className="app__hero-content_btn">
              ZORGANIZUJ <br /> ZBIÓRKĘ
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
