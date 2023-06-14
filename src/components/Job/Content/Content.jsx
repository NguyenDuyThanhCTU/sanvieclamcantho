import React from "react";
import { TbBellRinging } from "react-icons/tb";
import { Pagination } from "antd";
import JobItem from "../JobItem/JobItem";

const Content = () => {
  return (
    <div className="mt-20  flex justify-between gap-5 ">
      <div className="flex-[75%] ">
        <div className="d:flex justify-between items-center p:hidden">
          <h3 className="text-24">
            Kết quả tìm kiếm (<strong>9,796</strong> tin đăng)
          </h3>
          <p className="text-colorBlueBold font-semibold text-14">
            <TbBellRinging className="inline-block" /> Nhận thông báo việc làm
            tương tự
          </p>
        </div>

        <div className="p:flex justify-between  d:hidden flex-col mx-1 ">
          <h3 className="text-24 w-screen">
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
      <div className="flex-[25%] h-[500px] d:flex flex-col gap-5 items-center p:hidden ">
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
  );
};

export default Content;
