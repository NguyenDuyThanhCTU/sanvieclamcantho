import React from "react";

import TopSection from "./TopSection/TopSection";
import IntroSection from "./IntroSection/IntroSection";
import BannerSection from "./BannerSection/BannerSection";
import Advise from "./Advise/Advise";
import HandBook from "./HandBookSection/HandBook";
import Contact from "./ContactSection/Contact";

const EmloyerHome = () => {
  return (
    <div className="mx-24 font-LexendDeca pt-20">
      <TopSection />
      <IntroSection />
      <BannerSection />
      <Contact />
      <HandBook />
      <Advise />
    </div>
  );
};

export default EmloyerHome;
