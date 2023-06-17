import React from "react";
import IntroSection from "./IntroSection/IntroSection";
import Recruitment from "./Recruitment/Recruitment";
import ServicePoint from "./ServicePoint/ServicePoint";

const ServicePrices = () => {
  return (
    <div className="font-LexendDeca pt-16">
      <IntroSection />
      <Recruitment />
      <ServicePoint />
    </div>
  );
};

export default ServicePrices;
