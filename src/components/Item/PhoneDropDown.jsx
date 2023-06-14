import React from "react";
import { Link } from "react-router-dom";
const PhoneDropDown = ({ Items }) => {
  return (
    <div className="absolute top-14 left-2 font-LexendDeca bg-white text-primary font-bold rounded-b-xl shadow-xl">
      {Items.map((items) => (
        <Link to={items.link}>
          {" "}
          <div className="p-4 ">{items.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default PhoneDropDown;
