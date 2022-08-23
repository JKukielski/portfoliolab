import "../scss/home.scss";
import React from "react";
import Hero from "./Hero";
import ThreeColumnBanner from "./ThreeColumnBanner";
import InstructionBannerHeading from "./InstructionBannerHeading";
import InstructionBanner from "./InstructionBanner";
import CTA from "./CTA";
import AboutUs from "./AboutUs";

const Home = () => {
  return (
    <>
      <Hero />
      <ThreeColumnBanner />
      <InstructionBannerHeading />
      <InstructionBanner />
      <CTA />
      <AboutUs />
    </>
  );
};

export default Home;
