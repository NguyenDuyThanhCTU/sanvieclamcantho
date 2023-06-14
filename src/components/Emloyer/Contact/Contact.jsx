import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Contact = () => {
  const banner = [
    {
      id: "01",
      image:
        "https://cdn1.vieclam24h.vn/upload/files_cua_nguoi_dung/logo/2019/12/30/2500278_vieclam24h_1577689012.png",
    },
    {
      id: "02",
      image:
        "https://cdn1.vieclam24h.vn/upload/files_cua_nguoi_dung/logo/2019/12/30/2500278_vieclam24h_1577689012.png",
    },
    {
      id: "03",
      image:
        "https://cdn1.vieclam24h.vn/upload/files_cua_nguoi_dung/logo/2019/12/30/2500278_vieclam24h_1577689012.png",
    },
    {
      id: "04",
      image:
        "https://cdn1.vieclam24h.vn/upload/files_cua_nguoi_dung/logo/2019/12/30/2500278_vieclam24h_1577689012.png",
    },
    {
      id: "05",
      image:
        "https://cdn1.vieclam24h.vn/upload/files_cua_nguoi_dung/logo/2019/12/30/2500278_vieclam24h_1577689012.png",
    },
    {
      id: "06",
      image:
        "https://cdn1.vieclam24h.vn/upload/files_cua_nguoi_dung/logo/2019/12/30/2500278_vieclam24h_1577689012.png",
    },
    {
      id: "07",
      image:
        "https://cdn1.vieclam24h.vn/upload/files_cua_nguoi_dung/logo/2019/12/30/2500278_vieclam24h_1577689012.png",
    },
    {
      id: "08",
      image:
        "https://cdn1.vieclam24h.vn/upload/files_cua_nguoi_dung/logo/2019/12/30/2500278_vieclam24h_1577689012.png",
    },
    {
      id: "09",
      image:
        "https://cdn1.vieclam24h.vn/upload/files_cua_nguoi_dung/logo/2019/12/30/2500278_vieclam24h_1577689012.png",
    },
    {
      id: "10",
      image:
        "https://cdn1.vieclam24h.vn/upload/files_cua_nguoi_dung/logo/2019/12/30/2500278_vieclam24h_1577689012.png",
    },
    {
      id: "11",
      image:
        "https://cdn1.vieclam24h.vn/upload/files_cua_nguoi_dung/logo/2019/12/30/2500278_vieclam24h_1577689012.png",
    },
    {
      id: "12",
      image:
        "https://cdn1.vieclam24h.vn/upload/files_cua_nguoi_dung/logo/2019/12/30/2500278_vieclam24h_1577689012.png",
    },
  ];
  return (
    <div className="mx-20">
      <Swiper
        slidesPerView={6}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
        {banner.map((items) => (
          <SwiperSlide>
            <div className="w-full  flex justify-center items-center p-5 gap-5 pb-10">
              <img src={items.image} alt="banner" className="border" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Contact;
