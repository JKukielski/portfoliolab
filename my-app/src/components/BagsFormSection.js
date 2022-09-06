import React from "react";
import "../scss/bagsFormSection.scss";
import images from "../constants/images.js";

function BagsFormSection() {
  return (
    <div className="app__formBags">
      <form className="app__formBags-form">
        <label htmlFor="bags">Liczba 60l worków:</label>
        <select name="bags" id="bags">
          <option value="0">wybierz</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <img src={images.ArrowDown} alt="arrowdown" />
        </select>
      </form>
    </div>
  );
}

export default BagsFormSection;
