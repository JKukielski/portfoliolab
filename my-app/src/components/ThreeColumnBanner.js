import React from "react";
import "../scss/threeColumnBanner.scss";
import images from "../constants/images.js";

const ThreeColumnBanner = () => {
  return (
    <div className="app__banner">
      <div className="app__banner-container">
        <div className="app__banner-column">
          <h1 className="app__banner-column_number">10</h1>
          <h2 className="app__banner-column_heading">ODDANYCH WORKÓW</h2>
          <p className="app__banner-column_content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae atque
            quas dolore vel?
          </p>
        </div>
        <div className="app__banner-column">
          <h1 className="app__banner-column_number">5</h1>
          <h2 className="app__banner-column_heading">WSPARTYCH ORGANIZACJI</h2>
          <p className="app__banner-column_content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            voluptate harum voluptates nobis nihil!
          </p>
        </div>
        <div className="app__banner-column">
          <h1 className="app__banner-column_number">7</h1>
          <h2 className="app__banner-column_heading">
            ZORGANIZOWANYCH ZBIÓREK
          </h2>
          <p className="app__banner-column_content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            ad eos harum illo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThreeColumnBanner;
