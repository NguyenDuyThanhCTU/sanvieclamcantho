import React, { useState } from "react";

import Combo from "./Combo/Combo";
import { ComboServicePrices } from "../../../../Utils/Temp";

const IntroSection = () => {
  return (
    <div>
      <div>
        <div className="">
          <img
            src="https://ntd.vieclam24h.vn/img/price-list/top.jpg"
            alt="img"
            className="w-full h-[400px] "
          />
        </div>

        <div>
          <h3 className="text-[32px] text-black font-bold text-center my-10">
            Bảng giá linh hoạt cho Nhà tuyển dụng
          </h3>
          <div className="flex justify-center items-end gap-10">
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
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
