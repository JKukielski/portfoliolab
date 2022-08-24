import "../scss/home.scss";
import React from "react";
import Hero from "./Hero";
import ThreeColumnBanner from "./ThreeColumnBanner";
import InstructionBannerHeading from "./InstructionBannerHeading";
import InstructionBanner from "./InstructionBanner";
import CTA from "./CTA";
import AboutUs from "./AboutUs";
import PaginationHeading from "./PaginationHeading";
import Pagination from "./Pagination";

const Home = () => {
  return (
    <>
      <Hero />
      <ThreeColumnBanner />
      <InstructionBannerHeading />
      <InstructionBanner />
      <CTA />
      <AboutUs />
      <PaginationHeading />
      <Pagination />
    </>
  );
};

export default Home;
