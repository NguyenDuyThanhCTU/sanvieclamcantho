import React from "react";

import { MdKeyboardArrowRight } from "react-icons/md";

import Banner from "./Banner/Banner";
import SuggetedJob from "./SuggestedJob/SuggetedJob";
import UrgentJob from "./UrgentJob/UrgentJob";
import SubBanner from "./SubBanner/SubBanner";
import Handbook from "./Handbook/Handbook";

const Home = () => {
  return (
    <div className="font-LexendDeca">
      <Banner />
      <UrgentJob />
      <SuggetedJob />

      <SubBanner />
      {/*<Handbook />
      <div className="mb-11 cursor-pointer flex justify-between mx-80">
        <div className="flex flex-col gap-3">
          <h3>Việc làm theo Nghề nghiệp</h3>
          <div className="font-light text-[14px]">
            <p className="hover:text-colortopdownBlue">
              Việc làm Hành chính - Thư ký
            </p>
            <p className="hover:text-colortopdownBlue">
              Việc làm An ninh - Bảo vệ
            </p>
            <p className="hover:text-colortopdownBlue">
              Việc làm Thiết kế - Sáng tạo nghệ thuật
            </p>
            <p className="hover:text-colortopdownBlue">
              Việc làm Kiến trúc - Thiết kế nội thất
            </p>
            <p className="hover:text-colortopdownBlue">
              Việc làm Khách sạn - Nhà hàng - Du lịch
            </p>
          </div>
          <div className="text-[12px] text-blue-800 hover:text-colortopdownBlue">
            Xem tất cả nghề nghiệp
            <MdKeyboardArrowRight className="inline-block text-[14px] ml-2" />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h3>Việc làm theo Nghề nghiệp</h3>
          <div className="font-light text-[14px]">
            <p className="hover:text-colortopdownBlue">
              Việc làm Hành chính - Thư ký
            </p>
            <p className="hover:text-colortopdownBlue">
              Việc làm An ninh - Bảo vệ
            </p>
            <p className="hover:text-colortopdownBlue">
              Việc làm Thiết kế - Sáng tạo nghệ thuật
            </p>
            <p className="hover:text-colortopdownBlue">
              Việc làm Kiến trúc - Thiết kế nội thất
            </p>
            <p className="hover:text-colortopdownBlue">
              Việc làm Khách sạn - Nhà hàng - Du lịch
            </p>
          </div>
          <div className="text-[12px] text-blue-800 hover:text-colortopdownBlue">
            Xem tất cả nghề nghiệp
            <MdKeyboardArrowRight className="inline-block text-[14px] ml-2" />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h3>Việc làm mới</h3>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
