import React, { useState } from "react";
import { BsBellFill, BsEmojiSmile, BsList } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import { RxMagicWand } from "react-icons/rx";
import PhoneDropDown from "./Items/PhoneDropDown";
import DropDown from "./Items/DropDown";

import { BiBookAlt, BiCalculator, BiUser } from "react-icons/bi";
import {
  HeaderItemsDropDownAuth,
  HeaderItemsDropDownRegion,
  HeaderItemsDropDownTools,
  iconMapping,
} from "../../../../Utils/Item";
import { AiOutlineStar } from "react-icons/ai";
import DropProfile from "./DropProfile/DropProfile";

const MainHeader = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isOpen, setIsOpen] = useState(0);

  return (
    <div className="bg-primary h-16 text-white items-center cursor-pointer ">
      {/* <-- Desktop --> */}
      <div className=" d:flex flex-row  justify-evenly p:hidden">
        <div className=" flex justify-between  w-auto mx-6">
          <Link to="/">
            <div className="h-16  pr-4 border-r border-[#5C27D6] w-[144px]  text-center">
              <img
                className=" w-1/2"
                src="https://firebasestorage.googleapis.com/v0/b/sanvieclamcantho-1d6c5.appspot.com/o/logosanvieclamcantho.jpg?alt=media&token=ef1995a4-47a5-4741-9908-05a60c4ddb62"
              />
            </div>
          </Link>

          <div className="  text-[13px] font-semibold flex ">
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
                  <div className="p-3 min-w-[260px] border-colortopdownBlue border border-solid rounded bg-white relative z-30 ">
                    {HeaderItemsDropDownTools.map((items) => {
                      let Icon = items.icon;
                      if (items.icon === "BsEmojiSmile") {
                        Icon = BsEmojiSmile;
                      } else if (items.icon === "BiCalculator") {
                        Icon = BiCalculator;
                      } else if (items.icon === "RxMagicWand") {
                        Icon = RxMagicWand;
                      } else if (items.icon === "BiBookAlt") {
                        Icon = BiBookAlt;
                      }

                      return (
                        <DropDown
                          name={items.name}
                          link={items.link}
                          Icon={Icon}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
              <p className="inline-block hover:scale-125 duration-300 ml-[5px] text-[10px] font-medium text-white bg-[#FC5434] px-2 rounded-lg leading-4	">
                MỚI
              </p>
              <IoMdArrowDropdown className="text-white ml-1 text-[20px] inline-block" />
            </div>
            <Link
              className="h-16 leading-[64px] hover:bg-privaryhover px-2"
              href="/"
            >
              Gói đăng tin miễn phí
            </Link>
          </div>
        </div>

        <div className="flex  text-[13px] font-semibold ">
          <div className="h-16 leading-[64px] hover:bg-privaryhover pl-[28px] pr-[20px] relative  group">
            Miền nam
            <IoMdArrowDropdown className="text-white ml-1 text-[20px] inline-block" />
            <div className="absolute right-0 top-[75px] hidden  group-hover:block ">
              <div className="p-3 min-w-[100px] border-colortopdownBlue border border-solid rounded bg-white relative z-30 ">
                {HeaderItemsDropDownRegion.map((items) => (
                  <DropDown name={items.name} link={items.link} />
                ))}
              </div>
            </div>
          </div>
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
                  <div className="p-3 min-w-[100px] border-colortopdownBlue border border-solid rounded bg-white relative z-30 ">
                    {HeaderItemsDropDownAuth.map((items) => (
                      <DropDown name={items.name} link={items.link} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="flex flex-col justify-center h-16 leading-[32px] hover:bg-privaryhover pl-[28px] pr-[20px]"
              //   onClick={() => Login(true)}
            >
              <p className=" text-[10px] leading-[16px] font-semibold">
                Người tìm việc
              </p>
              <h3 className=" text-[14px]  leading-[24px] font-semibold">
                Đăng ký/Đăng nhập
              </h3>
            </div>
          )}
          <Link to="/employer">
            <div className="h-16 text-[14px]  leading-[64px] hover:bg-privaryhover pl-[28px] pr-[20px] border-l border-[#5C27D6]">
              Nhà Tuyển Dụng
            </div>
          </Link>
        </div>
      </div>
      {/* <-- Phone --> */}
      <div className="p:flex d:hidden relative z-20">
        <div className="flex justify-between items-center mx-2 w-full">
          <div className="w-[86px]" onClick={() => setIsOpen(2)}>
            <BsList className="text-[50px]" />
          </div>
          <div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/sanvieclamcantho-1d6c5.appspot.com/o/logosanvieclamcantho.jpg?alt=media&token=ef1995a4-47a5-4741-9908-05a60c4ddb62"
              alt="logo"
              className="w-16 "
            />
          </div>
          {isLoggedIn ? (
            <div className="  h-16  relative ">
              <div className="flex justify-between  items-center ">
                <BsBellFill className="hover:bg-colorBlueBoldHover text-[30px] p-2 text-white rounded-full" />
                <div
                  className="flex flex-row justify-between items-center h-16 px-2 gap-2 hover:bg-colorBlueBoldHover group relative"
                  onClick={() => setIsOpen(1)}
                >
                  <img
                    src="https://vieclam24h.vn/img/default_avatar.svg"
                    alt="img"
                    className="w-[40px] h-[40px]"
                  />
                </div>
              </div>
            </div>
          ) : (
            <Link to="/login">
              <div>
                <BiUser className="text-[40px]" />
              </div>
            </Link>
          )}
        </div>

        <div
          className={`h-screen ${
            isOpen === 1 ? "w-full" : " w-0 "
          } absolute flex right-0  duration-300 overflow-hidden`}
        >
          <div
            className="flex-[30%] h-full  bg-[rgba(0,0,0,0.4)]"
            onClick={() => setIsOpen(0)}
          ></div>
          <div
            className={`${
              isOpen === 1
                ? "flex-[70%] h-full bg-white overflow-y-scroll"
                : "hidden"
            }`}
          >
            <DropProfile />
          </div>
        </div>

        <div
          className={`h-screen ${
            isOpen === 2 ? "w-full" : " w-0"
          } absolute flex duration-300 overflow-hidden`}
        >
          <div
            className={`${
              isOpen === 2 ? "flex-[70%] h-full bg-white" : "hidden"
            }`}
          >
            <div className="mx-5 mt-10">
              <div className="flex items-center text-black text-[15px] gap-2 pb-5">
                <AiOutlineStar className="text-colortopdownBlue" />
                <p>Cơ hội việc làm</p>
              </div>
              <div className="flex  flex-col gap-5  py-4 border-b border-t">
                {HeaderItemsDropDownTools.map((items) => {
                  let Icon = iconMapping[items.icon];

                  return (
                    <PhoneDropDown
                      name={items.name}
                      link={items.link}
                      Icon={Icon}
                    />
                  );
                })}
              </div>
              <div className="flex items-center text-black text-[15px] gap-2 pt-5">
                <p>Gói đăng tin miễn phí</p>
              </div>
            </div>
          </div>
          <div
            className="flex-[30%] h-full bg-[rgba(0,0,0,0.4)]"
            onClick={() => setIsOpen(0)}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
