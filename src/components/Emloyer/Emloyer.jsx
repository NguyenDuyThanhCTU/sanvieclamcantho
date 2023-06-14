import React from "react";

import TopSection from "./TopSection/TopSection";
import IntroSection from "./IntroSection/IntroSection";
import BannerSection from "./BannerSection/BannerSection";
import Contact from "./Contact/Contact";
import HandBook from "./HandBook/HandBook";

const Employer = () => {
  return (
    <div className="mx-24 font-LexendDeca">
      <TopSection />
      <IntroSection />
      <BannerSection />
      <Contact />
      <HandBook />
    </div>
  );
};

export default Employer;
