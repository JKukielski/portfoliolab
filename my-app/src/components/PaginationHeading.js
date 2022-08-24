import React from "react";
import images from "../constants/images.js";
import "../scss/paginationHeading.scss";

const PaginationHeading = () => {
  return (
    <div className="app__pagination-heading">
      <h1 className="app__pagination-heading_text">Komu pomagamy?</h1>
      <div className="app__pagination-heading_image">
        <img src={images.Decoration} alt="decoration" />
      </div>
    </div>
  );
};

export default PaginationHeading;
