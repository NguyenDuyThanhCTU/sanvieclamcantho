import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { HandBookEmployer } from "../../../../Utils/Item";

const HandBook = () => {
  return (
    <div className="flex justify-center flex-col items-center mb-7 gap-10">
      <h2 className="text-[32px] font-semibold text-primary ">
        Kiến thức hữu ích để bạn tuyển dụng thành công
      </h2>
      <div className="flex flex-col  gap-5 w-[1000px]  text-18 font-normal ">
        {HandBookEmployer.map((items) => (
          <Link to={items.url}>
            <div className="flex justify-between items-center mx-20 border-2 hover:shadow-lg duration-300">
              <p className="p-4 py-3 ">{items.content}</p>
              <IoIosArrowForward />
            </div>
          </Link>
        ))}
      </div>
      <button className="bg-primary text-white py-2 px-10 rounded-sm ">
        Xem tất cả
      </button>
    </div>
  );
};

export default HandBook;
