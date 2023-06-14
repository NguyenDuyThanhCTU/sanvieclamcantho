import React from "react";

const HeaderItem = ({ text }) => {
  return (
    <div className="flex items-center text-[13px] font-semibold inline-block">
      <div className="bg-[#B6B6B8] w-1 h-1 rounded-sm mx-2 inline-block "></div>
      <li className="flex items-center hover:bg-colortopdownGray2 p-2">
        {text}
      </li>
    </div>
  );
};

export default HeaderItem;
