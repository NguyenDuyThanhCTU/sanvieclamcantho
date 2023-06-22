import React from "react";
import { Link } from "react-router-dom";

const Items = ({ name, link }) => {
  return (
    <div className="flex items-center text-[13px] font-semibold ">
      <div className="bg-[#B6B6B8] w-1 h-1 rounded-sm mx-2 inline-block "></div>
      <Link to={link}>
        <div className="flex items-center hover:bg-colortopdownGray2 p-2">
          <span> {name}</span>
        </div>
      </Link>
    </div>
  );
};

export default Items;
