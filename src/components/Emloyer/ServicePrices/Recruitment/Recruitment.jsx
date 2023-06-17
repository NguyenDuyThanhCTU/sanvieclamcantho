import React from "react";
import { Recruiments } from "../../../../Utils/Temp";
import Published from "./Published/Published";
const Recruitment = () => {
  return (
    <div>
      <h3 className="my-10 text-[32px] font-bold text-center">
        Đăng tin tuyển dụng
      </h3>
      <div className="flex items-center gap-10 justify-center">
        {Recruiments.map((items) => (
          <Published
            name={items.name}
            image={items.image}
            price={items.price}
            rid={items.rid}
          />
        ))}
      </div>
    </div>
  );
};

export default Recruitment;
