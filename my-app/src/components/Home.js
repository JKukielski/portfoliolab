import "../scss/home.scss";
import React from "react";
import Hero from "./Hero";
import ThreeColumnBanner from "./ThreeColumnBanner";

const Home = () => {
  return (
    <>
      <Hero />
      <ThreeColumnBanner />
    </>
  );
};

export default Home;
