import React from "react";
import IntroSection from "./IntroSection/IntroSection";
import Recruitment from "./Recruitment/Recruitment";
import ServicePoint from "./ServicePoint/ServicePoint";
import HandBook from "./HandBook/HandBook";

const ServicePrices = () => {
  return (
    <div className="font-LexendDeca pt-16 relative">
      <div className="">
        <img
          src="https://ntd.vieclam24h.vn/img/price-list/top.jpg"
          alt="img"
          className="w-full h-[400px] "
        />
      </div>
      <div className="relative -top-96">
        <IntroSection />
        <Recruitment />
        <ServicePoint />
        <HandBook />
      </div>
    </div>
  );
};

export default ServicePrices;
