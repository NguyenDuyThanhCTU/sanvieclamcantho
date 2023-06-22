import React, { useState } from "react";

import Combo from "./Combo/Combo";
import { ComboServicePrices } from "../../../../Utils/Temp";

const IntroSection = () => {
  return (
    <div>
      <div>
        <div>
          <h3 className="text-[32px] text-white font-bold text-center my-10">
            Bảng giá linh hoạt cho Nhà tuyển dụng
          </h3>
          <div className="flex justify-center items-end gap-10 ">
            {ComboServicePrices.map((items) => (
              <Combo
                image={items.image}
                name={items.name}
                introduction={items.introduction}
                price={items.price}
                topService={items.topService}
                service={items.service}
                bestseller={items.bestseller}
              />
            ))}
          </div>

          <div className="flex px-4 mx-80 gap-4 h-[88px] mt-20 bg-[#eef7ff]  items-end">
            <img
              src="https://ntd.vieclam24h.vn/img/commitCV/CommitCV.png"
              alt="img"
              className="w-48 h-36 pb-2"
            />
            <div className="flex items-center justify-between pb-2 gap-10 ">
              <div className="w-[800px]">
                <h3 className="font-bold">
                  Chính sách cam kết hồ sơ ứng tuyển
                </h3>
                <p>
                  Quý khách sẽ được{" "}
                  <strong className="font-bold text-colortopdownBlue">
                    x2
                  </strong>{" "}
                  quyền lợi cam kết hồ sơ ứng tuyển nếu có đăng kí gói cam kết
                  khi kích hoạt dịch vụ và sau khi kết thúc gói dịch vụ mà tin
                  không đủ số lượng hồ sơ ứng tuyển.
                </p>
              </div>
              <div className="border-2 rounded-md text-primary border-primary px-4 py-2">
                Tìm hiểu thêm
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
