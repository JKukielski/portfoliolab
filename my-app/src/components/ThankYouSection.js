import React from "react";
import images from "../constants/images";
import "../scss/thankyouFormSection.scss";

export default function ThankYouSection() {
  return (
    <div className="app__thanks">
      <h1 className="app__thanks-heading">
        Dziękujemy za przesłanie formularza <br /> Na maila prześlemy wszelkie{" "}
        <br /> informacje o odbiorze.
      </h1>
      <img src={images.Decoration} alt="decoration" />
    </div>
  );
}
