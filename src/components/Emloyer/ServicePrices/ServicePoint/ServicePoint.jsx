import React, { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { BsFillCartPlusFill } from "react-icons/bs";

const ServicePoint = () => {
  const [isCombo, setIsCombo] = useState(1);

  const onMinus = () => {
    if (isCombo > 0) {
      setIsCombo(isCombo - 1);
    }
  };
  return (
    <div>
      <h3 className="text-center text-[32px] font-bold my-10">Điểm dịch vụ</h3>
      <div className="flex justify-center gap-10 mx-72">
        <div className="flex-1">
          <img
            src="https://cdn1.vieclam24h.vn/images/combo_posting_package/2023/01/03/images/167275384384.png"
            alt="img"
          />
        </div>
        <div className="shadow-lg p-8 flex-1">
          <div className="flex justify-between items-center">
            <div className="flex text-primary font-bold items-center gap-1">
              <p className="underline text-[16px] ">đ</p>
              <p className="text-[32px] ">2,560,000</p>
              <p className="text-black font-medium text-[14px]">
                /100 điểm/gói
              </p>
            </div>
            <div className="relative">
              <img
                src="https://ntd.vieclam24h.vn/img/price-list/label-discount.png"
                alt="image"
                className="relative -right-12 "
              />

              <p className=" text-white top-3 -right-8 absolute ">
                Tặng 02 tin Tiêu chuẩn
              </p>
            </div>
          </div>
          <p className="text-gray-500 text-13 mb-5">(Chưa bao gồm thuế VAT)</p>
          <div className="flex pb-3 mb-5 border-b gap-4">
            <div className="flex justify-between items-center h-full  border-blue-500 border rounded-sm ">
              <BiMinus
                onClick={() => onMinus()}
                className="cursor-pointer ml-2"
              />
              <input
                type="text"
                value={isCombo}
                className=" focus-visible:outline-none w-full text-center border-0 px-0 py-[9px] h-auto text-13 "
              />
              <BiPlus
                onClick={() => setIsCombo(isCombo + 1)}
                className="cursor-pointer mr-2"
              />
            </div>
            <div className="rounded-sm w-full text-[18px] text-primary bg-[#f0edf8] hover:bg-[#e1dbf0] flex items-center  py-2 justify-center cursor-pointer gap-1">
              <BsFillCartPlusFill className="text-[23px] " />
              <p>Thêm</p>
            </div>
          </div>
          <div className="mb-7">
            <div className="flex items-center justify-between">
              <p className="uppercase">THÔNG TIN sản phẩm</p>
              <p>Xem chi tiết mức quy đổi điểm</p>
            </div>
            <p>
              Quý khách có thể mua Gói điểm dịch vụ để quy đổi sử dụng cho tất
              cả các gói dịch vụ (*) của Việc Làm 24h bao gồm:
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <li>Tìm kiếm hồ sơ ứng viên trên web</li>
            <li>Đăng tin nâng cao</li>
            <li>Gia tăng ưu tiên trang chủ & trang ngành</li>
            <li>Hiệu ứng nổi bật</li>
            <li>Tính năng làm mới tin</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePoint;
