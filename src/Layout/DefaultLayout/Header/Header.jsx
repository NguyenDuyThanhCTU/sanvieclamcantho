import React, { useState } from "react";

import SubHeader from "./SubHeader/SubHeader";
import MainHeader from "./MainHeader/MainHeader";

const Header = ({ Login }) => {
  return (
    <div className="font-LexendDeca d:h-[114px] p:h-16 bg-primary ">
      <MainHeader />

      <SubHeader />
    </div>
  );
};

export default Header;
