import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { FcAlarmClock } from "react-icons/fc";
import HomeJobItem from "../HomeJobItem/HomeJobItem";
import { Jobs } from "../../../Utils/Item";
const UrgentJob = () => {
  return (
    <div className="border d:mx-72 p:mx-1 my-[32px] ">
      <div className="px-12 py-[18px] p:hidden d:block">
        <div className="text-[32px] font-bold">
          <FcAlarmClock className="inline-block mr-3" />
          Việc làm tuyển gấp
        </div>

        <Swiper
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className=" "
        >
          <SwiperSlide>
            <div className="grid grid-cols-3 grid-rows-6 gap-4 mt-5 ">
              {Jobs.map((items) => (
                <HomeJobItem
                  vacancies={items.vacancies}
                  company={items.company}
                  image={items.image}
                  location={items.location}
                  salary={items.salary}
                />
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className=" py-[18px] d:hidden p:block">
        <div className="text-[32px] font-bold">
          <FcAlarmClock className="inline-block mr-3" />
          Việc làm tuyển gấp
        </div>

        <Swiper
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className=" "
        >
          <SwiperSlide>
            <div className="grid grid-cols-2 grid-rows-6 gap-4 mt-5">
              {Jobs.map((items) => (
                <HomeJobItem
                  vacancies={items.vacancies}
                  company={items.company}
                  image={items.image}
                  location={items.location}
                  salary={items.salary}
                />
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default UrgentJob;
