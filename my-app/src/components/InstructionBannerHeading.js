import React from "react";
import images from "../constants/images.js";
import "../scss/instructionBannerHeading.scss";

const InstructionBannerHeading = () => {
  return (
    <div className="app__instruction-heading">
      <h1 className="app__instruction-heading_text">Wystarczą 4 prost kroki</h1>
      <div className="app__instruction-heading_image">
        <img src={images.Decoration} alt="decoration" />
      </div>
    </div>
  );
};

export default InstructionBannerHeading;
