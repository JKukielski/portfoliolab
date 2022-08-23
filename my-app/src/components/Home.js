import "../scss/home.scss";
import React from "react";
import Hero from "./Hero";
import ThreeColumnBanner from "./ThreeColumnBanner";
import InstructionBannerHeading from "./InstructionBannerHeading";
import InstructionBanner from "./InstructionBanner";

const Home = () => {
  return (
    <>
      <Hero />
      <ThreeColumnBanner />
      <InstructionBannerHeading />
      <InstructionBanner />
    </>
  );
};

export default Home;
