import React from "react";

const Button = ({ text }) => {
  return (
    <div>
      <button className="px-20 bg-colorBlueBold text-white py-3">{text}</button>
    </div>
  );
};

export default Button;
