import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMoney } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
const HomeJobItem = ({ vacancies, company, image, location, salary }) => {
  return (
    <div className="p-2  border hover:border-colortopdownBlue rounded-md font-LexendDeca">
      <div className="flex justify-between items-center font-normal text-[14px]">
        {vacancies}
        <AiOutlineHeart className="inline-block text-colortopdownBlue text-[20px]" />
      </div>
      <div className="flex justify-start gap-2 mt-4">
        <img
          className="object-contain w-[62px] h-[62px]"
          src={image}
          alt="logo"
        />
        <div className="truncate font-normal text text-[13px] flex flex-col gap-1 ">
          <p className="truncate text-[#6f6d71] ">{company}</p>
          <li>
            <BiMoney className="inline-block text-[#6f6d71] mr-2" />
            {salary} triệu
          </li>
          <li>
            <CiLocationOn className="inline-block text-[#6f6d71] mr-2" />
            {location}
          </li>
        </div>
      </div>
    </div>
  );
};

export default HomeJobItem;
