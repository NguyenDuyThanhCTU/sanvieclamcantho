import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { TbBellRinging } from "react-icons/tb";
import { Pagination } from "antd";
import JobItem from "./JobItem/JobItem";
import DropDown from "./DropDown/DropDown";
import HomeJobItem from "../Item/HomeJobItem";

const Job = () => {
  return (
    <div className="mx-72 font-LexendDeca">
      <div className="relative mb-16">
        <div className="flex flex-row gap-2 justify-center items-center py-[32px] bg-colorBlueBold rounded-lg mt-4">
          {" "}
          <div className="p-3 bg-white font-normal">
            <AiOutlineSearch className="inline-block  text-[25px]" />
            <input
              type="text"
              placeholder="Tìm kiếm cơ hội việc làm"
              className="outline-none ml-2"
            />
          </div>
          <DropDown Text="Tất cả nghề nghiệp" Top={true} />
          <DropDown Text="Tất cả tỉnh thành" Top={true} />
          <button className="py-3 px-6 text-white bg-colortopdownBlue">
            Tìm kiếm
          </button>
          <button className="py-3 px-6 text-white bg-colortopdownGray">
            Lọc nâng cao
          </button>
        </div>

        <div className="flex flex-row gap-2 justify-center items-center text-[12px] p-3 pb-4 absolute bg-white rounded-md w-full -bottom-16 z-20 shadow-lg cursor-pointer">
          <div className="font-medium text-[12px]">Lọc nâng cao:</div>

          <DropDown Text="Tất cả kinh nghiệm" />
          <DropDown Text="Tất cả kinh nghiệm" />

          <DropDown Text="Tất cả kinh nghiệm" />

          <DropDown Text="Tất cả kinh nghiệm" />

          <DropDown Text="Tất cả kinh nghiệm" />

          <DropDown Text="Tất cả kinh nghiệm" />

          <div>
            Xóa chọn |
            <p className="inline-block ml-1 text-colorGrayfont-medium"> Đóng</p>
          </div>
        </div>
      </div>
      <div className="mt-20  flex justify-between gap-5 ite">
        <div className="flex-[75%] ">
          <div className="flex justify-between items-center">
            <h3 className="text-24">
              Kết quả tìm kiếm (<strong>9,796</strong> tin đăng)
            </h3>
            <p className="text-colorBlueBold font-semibold text-14">
              <TbBellRinging className="inline-block" /> Nhận thông báo việc làm
              tương tự
            </p>
          </div>
          <div className="flex flex-col  gap-3 mt-5">
            <JobItem />
            <JobItem />
            <JobItem />
            <JobItem />
            <JobItem />
            <JobItem />
            <JobItem />
            <JobItem />
            <JobItem />
            <JobItem />
            <JobItem />
            <JobItem />
            <JobItem />
            <JobItem />
            <JobItem />
            <JobItem />
            <JobItem />
            <JobItem />
            <JobItem />
            <JobItem />
            <JobItem />
            <JobItem />
            <JobItem />
            <JobItem />
            <JobItem />
            <JobItem />
            <JobItem />
            <JobItem />
            <JobItem />
            <JobItem />
          </div>
          <div className="flex justify-center my-12">
            <Pagination defaultCurrent={1} total={50} />
          </div>
        </div>
        <div className="flex-[25%] h-[500px] flex flex-col gap-5 items-center">
          <div className="flex gap-2 flex-col">
            <HomeJobItem />
            <HomeJobItem />
            <HomeJobItem />
          </div>
          <div className="w-full">
            <img
              className="object-cover w-full"
              src="https://vieclam24h.vn/_next/image?url=%2Fimg%2Fads-banners%2Fentry-banner.png&w=384&q=75"
              alt="img"
            />
          </div>
          <div className="">
            <img
              className=""
              src="https://vieclam24h.vn/_next/image?url=https%3A%2F%2Fcdn1.vieclam24h.vn%2Fimages%2Fseeker-banner%2F2023%2F04%2F27%2FWebsite-Banner_168250414419_168259071970.jpg&w=1920&q=75"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
