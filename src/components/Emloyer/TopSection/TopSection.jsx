import React from "react";
import Button from "../../Item/Button";
const TopSection = () => {
  return (
    <div className="flex justify-center items-center gap-3">
      <div className="">
        <div className="w-[60px] h-[6px] bg-colorBlueBold"></div>
        <div className="text-[36px] font-bold">
          <h3>Nơi gặp gỡ giữa doanh nghiệp </h3>
          <h3>và 10 triệu ứng viên chất lượng</h3>
        </div>
        <p className="text-[16px] py-4">
          Tuyển người dễ dàng với Việc Làm 24h - Chúng tôi luôn có ứng viên phù
          hợp cho bạn
        </p>
        <Button text="Đăng tin ngay!" />
      </div>
      <div className="">
        <img
          src="https://ntd.vieclam24h.vn/img/landing_page_right.png"
          alt="image"
        />
      </div>
    </div>
  );
};

export default TopSection;
