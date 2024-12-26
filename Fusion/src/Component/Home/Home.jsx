import React from "react";
import HomeBanner from "./HomeBanner";
import HealthyChoices from "./HealthyChoices";
import GrowingKidsSection from "./GrowingKidsSection";
import SmoothieBanner from "./SmoothieBanner";
import HowItWorks from "./HowItWorks";
import ProductBanner from "./ProductBanner";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <HealthyChoices />
      <GrowingKidsSection />
      <SmoothieBanner />
      <HowItWorks />
      <ProductBanner />
    </>
  );
};

export default Home;
