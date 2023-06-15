import React from "react";
import { FcBullish } from "react-icons/fc";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const BannerSection = () => {
  const banner = [
    {
      id: "01",
      image:
        "https://ntd.vieclam24h.vn/_next/image?url=https%3A%2F%2Fstatic-cdn.vieclam24h.vn%2Frecruiter%2F230608095842%2F_next%2Fstatic%2Fmedia%2Fvl24h_job_post.25494deb.png&w=1920&q=75",
    },
    {
      id: "02",
      image:
        "https://ntd.vieclam24h.vn/_next/image?url=https%3A%2F%2Fstatic-cdn.vieclam24h.vn%2Frecruiter%2F230608095842%2F_next%2Fstatic%2Fmedia%2Fvl24h_detail_job.3d31ee49.png&w=1920&q=75",
    },
    {
      id: "03",
      image:
        "https://ntd.vieclam24h.vn/_next/image?url=https%3A%2F%2Fstatic-cdn.vieclam24h.vn%2Frecruiter%2F230608095842%2F_next%2Fstatic%2Fmedia%2Fvl24h_service_history.10f36325.png&w=1920&q=75",
    },
  ];
  return (
    <div className="bg-[#f3f5fa] my-12 mx-36">
      <div className="flex justify-center items-center">
        <img src="https://ntd.vieclam24h.vn/img/man_university.png" alt="img" />
        <h3 className="text-[32px] font-semibold  ml-3 text-center">
          Phiên bản 2023 giúp đăng tuyển nhanh chóng <br />
          và hiệu quả hơn
        </h3>
      </div>
      <div className="grid grid-cols-3 gap-20 mx-28 ">
        <div className="bg-white rounded-2xl p-2">
          <div className="flex items-center gap-3">
            <FcBullish className="text-[30px]" />
            <h3 className="text-primary text-[24px] font-semibold ml-10">
              Quản lý đăng tuyển
            </h3>
          </div>
          <p className="text-center text-18">
            Với thư viện chuẩn của hơn 1000+ mô tả công việc gợi ý cho nhà tuyển
            dụng với các ngành nghề và vị trí khác nhau
          </p>
        </div>
        <div className="bg-white rounded-2xl p-2">
          <div className="flex items-center gap-3">
            <FcBullish className="text-[30px]" />
            <h3 className="text-primary text-[24px] font-semibold ml-10">
              Quản lý đăng tuyển
            </h3>
          </div>
          <p className="text-center text-18">
            Với thư viện chuẩn của hơn 1000+ mô tả công việc gợi ý cho nhà tuyển
            dụng với các ngành nghề và vị trí khác nhau
          </p>
        </div>
        <div className="bg-white rounded-2xl p-2">
          <div className="flex items-center gap-3">
            <FcBullish className="text-[30px]" />
            <h3 className="text-primary text-[24px] font-semibold ml-10">
              Quản lý đăng tuyển
            </h3>
          </div>
          <p className="text-center text-18">
            Với thư viện chuẩn của hơn 1000+ mô tả công việc gợi ý cho nhà tuyển
            dụng với các ngành nghề và vị trí khác nhau
          </p>
        </div>
      </div>
      <div className="mt-10">
        <Swiper
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper "
        >
          {banner.map((items) => (
            <SwiperSlide>
              <div className="w-full flex justify-center items-center pb-7">
                <img src={items.image} alt="banner" className="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BannerSection;
