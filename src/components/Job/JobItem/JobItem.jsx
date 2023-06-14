import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMoney } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";

const JobItem = () => {
  return (
    <>
      <div className="p:hidden d:block p-2  border hover:border-colortopdownBlue rounded-md font-LexendDeca bg-ColorJobItem border-[#e3eefb] relative h-[115px]">
        <AiOutlineHeart className="inline-block text-colortopdownBlue text-[20px] absolute right-2 top-1 " />
        <div className="flex justify-start gap-2 items-center h-full">
          <img
            className="object-contain w-[85px] h-[85px]"
            src="https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/vieclam24h/digbox.jpeg"
            alt="logo"
          />
          <div className="truncate font-normal text text-13 flex flex-col gap-1 ">
            <h3 className="truncate  text-18">
              Công Ty TNHH Mapple Mitra Adiperkasa Việt Nam
            </h3>
            <p
              className="text-[#6f6d71] text-14
          "
            >
              Chi Nhánh Công Ty Cổ Phần Phúc Thành An Tại Thành Phố Hồ Chí Minh
            </p>
            <div className="flex flex-start gap-3">
              <p>
                <BiMoney className="inline-block text-[#6f6d71] mr-1" />
                10 - 20 triệu
              </p>
              <p>
                {" "}
                <CiLocationOn className="inline-block text-[#6f6d71] mr-1" />
                TP.HCM
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="d:hidden p:block  p-2  border hover:border-colortopdownBlue rounded-md font-LexendDeca bg-ColorJobItem border-[#e3eefb] relative h-[115px] w-screen">
        <AiOutlineHeart className="inline-block text-colortopdownBlue text-[20px] absolute right-2 top-1 " />
        <div className="flex justify-start gap-2 items-center h-full">
          <img
            className="object-contain w-[85px] h-[85px]"
            src="https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/vieclam24h/digbox.jpeg"
            alt="logo"
          />
          <div className="truncate font-normal text text-13 flex flex-col gap-1  ">
            <h3 className="truncate  text-18">
              Công Ty TNHH Mapple Mitra Adiperkasa Việt Nam
            </h3>
            <p
              className="text-[#6f6d71] text-14 truncate
          "
            >
              Chi Nhánh Công Ty Cổ Phần Phúc Thành An Tại Thành Phố Hồ Chí Minh
            </p>
            <div className="flex flex-start gap-3">
              <p>
                <BiMoney className="inline-block text-[#6f6d71] mr-1" />
                10 - 20 triệu
              </p>
              <p>
                {" "}
                <CiLocationOn className="inline-block text-[#6f6d71] mr-1" />
                TP.HCM
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobItem;
