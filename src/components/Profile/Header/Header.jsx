import { Link } from "react-router-dom";
import React, { useState } from "react";
import { BsBellFill, BsListTask } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import HeaderItem from "../../../components/Item/HeaderItem";
import DropDown from "../../../components/Admin/Item/DropDown";
import DropDownS from "../../../components/Item/DropDownS";
import DropDownUser from "../../../components/Item/DropDownUser";

const Header = ({ Login, Click }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="font-LexendDeca h-16 bg-primary ">
      {" "}
      <div className="bg-primary flex flex-row  justify-between h-16 text-white items-center cursor-pointer w-full">
        <div className=" flex">
          <div className="flex  text-[13px] font-semibold">
            <Link
              className="h-16 leading-[64px] hover:bg-privaryhover pl-[28px] pr-[20px]"
              to="/job"
            >
              Cơ hội việc làm
            </Link>
            <div className="h-16 leading-[64px] hover:bg-privaryhover px-4 group">
              <div className="inline-block  relative">
                Công cụ
                <div className="absolute right-[-130px] top-[75px] hidden  group-hover:block ">
                  <DropDown option={1} />
                </div>
              </div>
              <p className="inline-block hover:scale-125 duration-300 ml-[5px] text-[10px] font-medium text-white bg-[#FC5434] px-2 rounded-lg leading-4	">
                MỚI
              </p>
              <IoMdArrowDropdown className="text-white ml-1 text-[20px] inline-block" />
            </div>
          </div>
        </div>
        <div className="flex  text-[13px] font-semibold ">
          {isLoggedIn ? (
            <div className="pl-[5px]  h-16  flex justify-between gap-5 items-center ">
              <BsBellFill className="hover:bg-colorBlueBoldHover text-[30px] p-2 text-white rounded-full" />
              <div className="flex flex-row justify-between items-center h-16 px-2 gap-2 hover:bg-colorBlueBoldHover group relative">
                <img
                  src="https://vieclam24h.vn/img/default_avatar.svg"
                  alt="img"
                  className="w-[40px] h-[40px]"
                />
                <p>Thanh</p>
                <IoMdArrowDropdown className="text-white  text-[20px] inline-block" />
                <div className="absolute right-[-0px] top-[75px] hidden  group-hover:block ">
                  <DropDownUser />
                </div>
              </div>
            </div>
          ) : (
            <div
              className="flex flex-col justify-center h-16 leading-[32px] hover:bg-privaryhover pl-[28px] pr-[20px]"
              onClick={() => Login(true)}
            >
              <p className=" text-[10px] leading-[16px] font-semibold">
                Người tìm việc
              </p>
              <h3 className=" text-[14px]  leading-[24px] font-semibold">
                Đăng ký/Đăng nhập
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
