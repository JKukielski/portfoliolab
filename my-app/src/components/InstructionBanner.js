import React from "react";
import "../scss/instructionBanner.scss";
import images from "../constants/images.js";

const InstructionBanner = () => {
  return (
    <div className="app__instruction-banner">
      <div className="app__instruction-banner_container">
        <div className="app__instruction-banner_item">
          <img src={images.Icon1} alt="tshirt" />
          <h2 className="app__instruction-banner_item-heading">
            Wybierz rzeczy
          </h2>
          <div className="app__instruction-divider"></div>
          <p className="app__instruction-banner_item-description">
            ubrania, zabawki, sprzęt i inne
          </p>
        </div>
        <div className="app__instruction-banner_item">
          <img src={images.Icon2} alt="shopping-bag" />
          <h2 className="app__instruction-banner_item-heading">Spakuj je</h2>
          <div className="app__instruction-divider"></div>
          <p className="app__instruction-banner_item-description">
            skorzystaj z worków na śmieci
          </p>
        </div>
        <div className="app__instruction-banner_item">
          <img src={images.Icon3} alt="magnifying-glass" />
          <h2 className="app__instruction-banner_item-heading">
            Zdecyduj komu chcesz pomóc
          </h2>
          <div className="app__instruction-divider"></div>
          <p className="app__instruction-banner_item-description">
            wybierz zaufane miejsce
          </p>
        </div>
        <div className="app__instruction-banner_item">
          <img src={images.Icon4} alt="arrows" />
          <h2 className="app__instruction-banner_item-heading">
            Zamów kuriera
          </h2>
          <div className="app__instruction-divider"></div>
          <p className="app__instruction-banner_item-description">
            kurier przyjedzie w dogodnym terminie
          </p>
        </div>
      </div>
    </div>
  );
};

export default InstructionBanner;
