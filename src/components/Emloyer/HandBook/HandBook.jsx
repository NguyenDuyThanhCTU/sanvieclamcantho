import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const HandBook = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <h2 className="text-[32px] font-semibold text-primary ">
        Kiến thức hữu ích để bạn tuyển dụng thành công
      </h2>
      <div className="flex justify-between border-2  w-[1000px] items-center text-18 font-normal ">
        <div>
          <p className="p-4 py-3 ">
            5 Bước để doanh nghiệp phát triển chiến lược nội dung nhân sự
          </p>
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
};

export default HandBook;
