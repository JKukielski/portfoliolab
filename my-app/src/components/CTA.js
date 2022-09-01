import React from "react";
import { Link } from "react-router-dom";
import "../scss/cta.scss";

const CTA = () => {
  return (
    <div className="app__cta">
      <div className="app__cta-btn">
        <Link to="/oddaj-rzeczy">
          ODDAJ <br /> RZECZY
        </Link>
      </div>
    </div>
  );
};

export default CTA;
