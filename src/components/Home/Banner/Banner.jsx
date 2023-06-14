import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { RiSuitcaseLine } from "react-icons/ri";
const Banner = () => {
  const banner = [
    {
      id: "01",
      image:
        "https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/vieclam24h/banner1.webp",
    },
    {
      id: "02",
      image:
        "https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/vieclam24h/banner2.webp",
    },
    {
      id: "03",
      image:
        "https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/vieclam24h/banner3.webp",
    },
  ];
  const jobs = [
    {
      id: "01",
      image:
        "https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/vieclam24h/vitri6.webp",
      number: "2",
    },
    {
      id: "02",
      image:
        "https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/vieclam24h/vitri6.webp",
      number: "10",
    },
    {
      id: "03",
      image:
        "https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/vieclam24h/vitri6.webp",
      number: "60",
    },
    {
      id: "04",
      image:
        "https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/vieclam24h/vitri6.webp",
      number: "60",
    },
    {
      id: "05",
      image:
        "https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/vieclam24h/vitri6.webp",
      number: "60",
    },
    {
      id: "06",
      image:
        "https://ads-company-storage.s3.ap-southeast-2.amazonaws.com/vieclam24h/vitri6.webp",
      number: "60",
    },
  ];

  return (
    <div className="d:mx-72 p:mx-0">
      <Swiper
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper rounded h-[320px]"
      >
        {banner.map((items) => (
          <SwiperSlide>
            <img src={items.image} alt="banner" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="px-20 pt-6 pb-3 p:hidden d:block">
        <div className="flex justify-start cursor-pointer">
          {jobs.map((items) => (
            <div className="border flex items-center flex-col gap-5 p-3 hover:shadow-lg">
              <img className="w-[96px] h-[92px]" src={items.image} alt="logo" />

              <div className="">
                <RiSuitcaseLine className="inline-block mr-2" />
                {items.number} vị trí đang tuyển
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-2 pt-6 pb-3 d:hidden p:block">
        <div className="flex justify-start cursor-pointer">
          {jobs.slice(0, 3).map((item) => (
            <div className="border flex items-center flex-col gap-5 p-3 hover:shadow-lg">
              <img className="w-[96px] h-[92px]" src={item.image} alt="logo" />

              <div className="">
                <RiSuitcaseLine className="inline-block mr-2" />
                {item.number} vị trí đang tuyển
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
