import React from "react";
import Button from "../../../Item/Button";
import {
  BsFillGridFill,
  BsFillTelephoneFill,
  BsHourglassSplit,
} from "react-icons/bs";
import { IoDiamondOutline } from "react-icons/io5";

const IntroSection = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-20">
      <div className="w-20 h-2 bg-colortopdownBlue my-10"></div>
      <div className="font-bold text-[30px] text-center ">
        <h3>Việc Làm 24h - website việc làm phổ biến nhất Việt </h3>
        <h3>Nam với gần 20 năm kinh nghiệm trên thị trường</h3>
      </div>
      <div className="grid grid-cols-2 my-10 mx-56 gap-10">
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
            <IoDiamondOutline className="text-[70px]" />
          </div>
          <div className="ml-5">
            <h3 className="font-semibold text-[30px] mb-2">
              Trải nghiệm toàn diện
            </h3>
            <p className="font-normal text-[20px]">
              Tài khoản nhà tuyển dụng được tích hợp thêm các tính năng thông
              minh, giúp thuận tiện quản lý tin đăng, quản lý hồ sơ và theo dõi
              ứng viên, và lượng nộp đơn
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div>
            <BsFillGridFill className="text-[70px]" />
          </div>
          <div className="ml-5">
            <h3 className="font-semibold text-[30px] mb-2">Chi phí hợp lý</h3>
            <p className="font-normal text-[20px]">
              Đặc quyền <strong>12++ tin đăng miễn phí</strong> mỗi năm giúp nhà
              tuyển dụng tối ưu chi phí & quy trình tuyển dụng
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div>
            <BsFillTelephoneFill className="text-[70px]" />
          </div>
          <div className="ml-5">
            <h3 className="font-semibold text-[30px] mb-2">
              Chất lượng CSKH chuyên nghiệp
            </h3>
            <p className="font-normal text-[20px]">
              Đội ngũ CSKH giờ tập trung cho vieclam24h.vn, chuyên nghiệp hơn &
              tận tình hơn, nhằm mang lại trải nghiệm tốt nhất và hiệu quả tối
              đa
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
