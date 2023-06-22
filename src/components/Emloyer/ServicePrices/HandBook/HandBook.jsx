import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { HandBookService } from "../../../../Utils/Item";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const HandBook = () => {
  const [isSelected, setIsSelected] = useState(0);

  return (
    <div className="flex justify-center flex-col items-center mb-7 gap-10 my-20">
      <h2 className="text-[32px] font-semibold  ">Các câu hỏi thường gặp</h2>
      <div className="flex justify-center items-center">
        <div>
          <img
            src="https://ntd.vieclam24h.vn/img/price-list/q-a.png"
            alt="img"
          />
        </div>

        <div className="flex flex-col  gap-5 w-[1000px]  text-18 font-normal ">
          {HandBookService.map((items) => (
            <div className=" mx-20 border-2 hover:shadow-lg duration-300">
              <div className="flex justify-between items-center mx-5">
                <p className="p-4  ">{items.title}</p>
                <AiOutlinePlus />
              </div>
              {/* <p className="px-5 py-2 text-13">{items.content}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HandBook;
