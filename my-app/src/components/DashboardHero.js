import React from "react";
import Navbar from "./Navbar";
import images from "../constants/images.js";
import "../scss/dashboardHero.scss";

export default function DashboardHero() {
  return (
    <>
      <Navbar />
      <div className="app__dashboard-hero">
        <div className="app__dashboard-hero_image-container">
          <img
            src={images.Sweater}
            alt="Sweater"
            className="app__dashboard-hero_image"
          />
        </div>
        <div className="app__dashboard-hero_content">
          <h1 className="app__dashboard-hero_content-heading">
            Oddaj rzeczy, których już nie chcesz <br /> POTRZEBUJĄCYM
          </h1>
          <img
            className="app__dashboard-hero_decoration"
            src={images.Decoration}
            alt="decoration"
          />
          <h2 className="app__dashboard-hero_content-subheading">
            Wystarczą 4 proste kroki:
          </h2>
          <div className="app__dashboard-content_steps-container">
            <div className="app__dashboard-hero_step">
              <div className="app__dashboard-hero_step-container">
                <h3 className="app__dashboard-hero_step-heading">1</h3>
                <p className="app__dashboard-hero_step-info">
                  Wybierz <br /> rzeczy
                </p>
              </div>
            </div>
            <div className="app__dashboard-hero_step">
              <div className="app__dashboard-hero_step-container">
                <h3 className="app__dashboard-hero_step-heading">2</h3>
                <p className="app__dashboard-hero_step-info">
                  Spakuj je <br /> w worki
                </p>
              </div>
            </div>
            <div className="app__dashboard-hero_step">
              <div className="app__dashboard-hero_step-container">
                <h3 className="app__dashboard-hero_step-heading">3</h3>
                <p className="app__dashboard-hero_step-info">
                  Wybierz <br /> fundacje
                </p>
              </div>
            </div>
            <div className="app__dashboard-hero_step">
              <div className="app__dashboard-hero_step-container">
                <h3 className="app__dashboard-hero_step-heading">4</h3>
                <p className="app__dashboard-hero_step-info">
                  Zamów <br /> kuriera
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
