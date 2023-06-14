import React from "react";
import Button from "../../Item/Button";
import { BsHourglassSplit } from "react-icons/bs";
const IntroSection = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="font-bold text-[32px] text-center ">
        <h3>Việc Làm 24h - website việc làm phổ biến nhất Việt </h3>
        <h3>Nam với gần 20 năm kinh nghiệm trên thị trường</h3>
      </div>
      <div className="grid grid-cols-2 my-10 mx-44 gap-10">
        <div className="flex justify-center items-center">
          <div>
            <BsHourglassSplit className="text-[70px]" />
          </div>
          <div className="ml-5">
            <h3 className="font-semibold text-[30px] mb-2">
              Nguồn ứng viên chất lượng
            </h3>
            <p className="font-normal text-[20px]">
              Nhà tuyển dụng có thể tiếp cận nguồn ứng viên dồi dào với hơn{" "}
              <strong>10 triệu hồ sơ</strong> và hơn{" "}
              <strong>50 triệu lượt truy cập</strong> mỗi năm
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div>
            <BsHourglassSplit className="text-[70px]" />
          </div>
          <div className="ml-5">
            <h3 className="font-semibold text-[30px] mb-2">
              Nguồn ứng viên chất lượng
            </h3>
            <p className="font-normal text-[20px]">
              Nhà tuyển dụng có thể tiếp cận nguồn ứng viên dồi dào với hơn{" "}
              <strong>10 triệu hồ sơ</strong> và hơn{" "}
              <strong>50 triệu lượt truy cập</strong> mỗi năm
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div>
            <BsHourglassSplit className="text-[70px]" />
          </div>
          <div className="ml-5">
            <h3 className="font-semibold text-[30px] mb-2">
              Nguồn ứng viên chất lượng
            </h3>
            <p className="font-normal text-[20px]">
              Nhà tuyển dụng có thể tiếp cận nguồn ứng viên dồi dào với hơn{" "}
              <strong>10 triệu hồ sơ</strong> và hơn{" "}
              <strong>50 triệu lượt truy cập</strong> mỗi năm
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div>
            <BsHourglassSplit className="text-[70px]" />
          </div>
          <div className="ml-5">
            <h3 className="font-semibold text-[30px] mb-2">
              Nguồn ứng viên chất lượng
            </h3>
            <p className="font-normal text-[20px]">
              Nhà tuyển dụng có thể tiếp cận nguồn ứng viên dồi dào với hơn{" "}
              <strong>10 triệu hồ sơ</strong> và hơn{" "}
              <strong>50 triệu lượt truy cập</strong> mỗi năm
            </p>
          </div>
        </div>
      </div>
      <div className="text-center font-bold  mb-5">
        <h3 className=" text-24 mb-3">
          Trải nghiệm dịch vụ đăng tin tại Việc Làm 24h
        </h3>
        <Button text="Đăng tin ngay!" />
      </div>
    </div>
  );
};

export default IntroSection;
