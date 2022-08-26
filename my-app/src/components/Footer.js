import React from "react";
import "../scss/footer.scss";
import images from "../constants/images";

const Footer = () => {
  return (
    <div className="app__footer">
      <div className="app__footer-empty"></div>
      <div className="app__footer-rights">Copyright by Coders Lab</div>
      <div className="app__footer-social">
        <img
          className="app__footer-social_icon facebook"
          src={images.Facebook}
          alt="facebook"
        />
        <img
          className="app__footer-social_icon instagram"
          src={images.Instagram}
          alt="instagram"
        />
      </div>
    </div>
  );
};

export default Footer;
