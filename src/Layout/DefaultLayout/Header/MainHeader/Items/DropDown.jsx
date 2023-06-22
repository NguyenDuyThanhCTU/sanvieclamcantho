import React from "react";
import { Link } from "react-router-dom";

const DropDown = ({ name, link, Icon }) => {
  return (
    <div>
      <ul className="text-colortopdownGray leading-6 text-[13px] font-semibold">
        <Link to={link}>
          <li className=" hover:bg-colortopdownBlue1  duration-300 element-dropdown">
            {Icon && (
              <Icon className="inline-block text-colortopdownBlue mr-2" />
            )}
            {name}
          </li>
        </Link>
      </ul>
      <div className="absolute w-4 h-4 border border-b-0 border-r-0 bg-white border-solid border-colortopdownBlue -top-2 right-[50%] transform rotate-45 z-0"></div>
      <div className="w-full h-4 bg-none absolute -top-3"> </div>
    </div>
  );
};

export default DropDown;
