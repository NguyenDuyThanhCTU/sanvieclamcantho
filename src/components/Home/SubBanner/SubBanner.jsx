import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SubBanner = () => {
  return (
    <>
      <div className="flex items-center flex-col  mx-72 p:hidden d">
        <div className="mb-5 w-full ">
          <img
            className="w-full rounded-md"
            src="https://vieclam24h.vn/img/banner-home-regis-pc.png"
            alt="ads"
          />
        </div>
        <div className="relative">
          <img
            className="rounded-md"
            src="https://vieclam24h.vn/img/explore-interesting/banner-explore-pc-v2.png"
            alt="ads"
          />
          <div className="text-white">
            <h3 className="text-[32px] absolute top-7 left-14 e font-bold">
              Cần tìm việc làm phù hợp cho bạn?{" "}
            </h3>
            <div className="absolute right-14 top-7 rounded-md py-3 px-[32px] bg-purple-800 text-[20px] font-semibold">
              <AiOutlineSearch className="inline-block text-[25px] mr-2" />
              Bắt đầu khám phá
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center flex-col  mx-72">
        <div className="mb-5 w-full ">
          <img
            className="w-full rounded-md"
            src="https://vieclam24h.vn/img/banner-home-regis-pc.png"
            alt="ads"
          />
        </div>
        <div className="relative">
          <img
            className="rounded-md"
            src="https://vieclam24h.vn/img/explore-interesting/banner-explore-pc-v2.png"
            alt="ads"
          />
          <div className="text-white">
            <h3 className="text-[32px] absolute top-7 left-14 e font-bold">
              Cần tìm việc làm phù hợp cho bạn?{" "}
            </h3>
            <div className="absolute right-14 top-7 rounded-md py-3 px-[32px] bg-purple-800 text-[20px] font-semibold">
              <AiOutlineSearch className="inline-block text-[25px] mr-2" />
              Bắt đầu khám phá
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubBanner;
