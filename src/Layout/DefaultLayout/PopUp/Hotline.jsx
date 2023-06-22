import React from "react";
import { BsMessenger } from "react-icons/bs";

function Hotline() {
  return (
    <div className="fixed bottom-7 right-10 z-[9999px] box-border">
      <div className="flex items-center">
        <div className="text-black font-semibold d:flex p:hidden justify-start items-center rounded-full w-[250px]  h-[60px] bg-white shadow-2xl absolute right-5">
          <a href="tel:0971706658">
            <span className="ml-5">Liên hệ với chúng tôi</span>
          </a>
        </div>
        <div className="h-16 w-16   mess-animation">
          <BsMessenger className="text-white text-[40px]" />
        </div>
      </div>
    </div>
  );
}

export default Hotline;
