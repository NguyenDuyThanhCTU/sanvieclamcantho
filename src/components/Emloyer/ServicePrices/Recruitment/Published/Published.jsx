import React, { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { BsFillCartPlusFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";

const Published = ({ name, image, price, rid }) => {
  const [isCombo, setIsCombo] = useState(1);

  const onMinus = () => {
    if (isCombo > 0) {
      setIsCombo(isCombo - 1);
    }
  };
  return (
    <div className="w-[400px] rounded-2xl shadow-xl h-[800px]">
      <div>
        <img src={image} alt="img" className="rounded-t-2xl" />
      </div>

      <div className="flex flex-col items-center text-center gap-5 p-7">
        <div>
          <h3 className="text-[20px] font-bold uppercase">{name}</h3>
        </div>
        <div className="text-primary ">
          <div className="flex items-center gap-1">
            <p className="text-16 text-primary font-bold underline ">đ</p>
            <p className="text-[32px] font-bold ">{price}</p>
            <p className=" text-black font-medium text-14"> /1 tin</p>
          </div>
          <p className="text-gray-400 text-13">(Chưa bao gồm thuế VAT)</p>
        </div>
        {rid === 1 ? (
          <div className="border border-blue-500  w-full h-12 rounded-sm ">
            <div className="flex justify-between items-center h-full mx-5">
              <BiMinus onClick={() => onMinus()} className="cursor-pointer" />
              <input
                type="text"
                value={isCombo}
                className=" focus-visible:outline-none w-full text-center border-0 px-0 py-[9px] h-auto text-13 "
              />
              <BiPlus
                onClick={() => setIsCombo(isCombo + 1)}
                className="cursor-pointer"
              />
            </div>
          </div>
        ) : (
          <div className="flex h-12 cursor-pointer gap-5">
            <div className="flex justify-between items-center h-full  border-blue-500 border rounded-sm ">
              <select className="pl-3 pr-28 mx-2 bg-white ">
                <option className="outline-none text-left ">2 Tuần</option>
                <option>4 Tuần</option>
              </select>
            </div>
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
          </div>
        )}

        <div className="rounded-sm w-full text-[18px] text-primary bg-[#f0edf8] hover:bg-[#e1dbf0] flex items-center  py-2 justify-center cursor-pointer gap-1">
          <BsFillCartPlusFill className="text-[23px] " />
          <p>Thêm</p>
        </div>

        <div className="flex flex-col gap-5 pb-5">
          <div className="flex flex-col gap-10 font-normal ">
            {rid === 1 ? (
              <>
                <div className="flex flex-col gap-2 ">
                  <div className="flex gap-1 text-[16px] items-center text-gray-500">
                    <RxCross2 className=" text-red-600" />
                    <p className="">Hiển thị trên trang chủ và trang ngành</p>
                  </div>
                  <div className="flex gap-1 text-[16px] items-center ">
                    <TiTick className="text-colortopdownBlue" />
                    <p className="">Hiển thị ưu tiên trên trang tìm kiếm</p>
                  </div>
                </div>

                <div className="flex gap-2 flex-col">
                  <div className="flex gap-1 text-[16px] items-center text-colortopdownBlue">
                    <TiTick />
                    <p className="font-bold">
                      {" "}
                      <strong className="text-black font-normal">Tặng</strong> 1
                      tin Tiêu chuẩn
                    </p>
                  </div>
                  <div className="flex gap-1 text-[16px] items-center text-colortopdownBlue">
                    <TiTick />{" "}
                    <p className="font-bold">
                      <strong className="text-black font-normal text-[14px]">
                        Quảng bá đa kênh: email, google, facebook,...
                      </strong>
                    </p>
                  </div>
                </div>
              </>
            ) : rid === 2 ? (
              <>
                {" "}
                <div className="flex flex-col gap-2 ">
                  <div className="flex gap-1 text-[16px] items-center text-gray-500">
                    <TiTick className=" text-colortopdownBlue" />
                    <p className="">Hiển thị ưu tiên trên trang ngành</p>
                  </div>
                  <div className="flex gap-1 text-[16px] items-center ">
                    <TiTick className="text-colortopdownBlue" />
                    <p className="">Hiển thị ưu tiên trên trang tìm kiếm</p>
                  </div>
                </div>
                <div className="flex gap-2 flex-col">
                  <div className="flex gap-1 text-[16px] items-center text-colortopdownBlue">
                    <TiTick />
                    <p className="font-bold">
                      {" "}
                      <strong className="text-black font-normal">Tặng</strong> 3
                      tin Tiêu chuẩn
                    </p>
                  </div>
                  <div className="flex gap-1 text-[16px] items-center text-colortopdownBlue">
                    <TiTick />{" "}
                    <p className="font-bold">
                      <strong className="text-black font-normal text-[14px]">
                        Quảng bá đa kênh: email, google, facebook,...
                      </strong>
                    </p>
                  </div>
                  <div className="flex gap-1 text-[16px] items-center text-black ">
                    <TiTick className="text-colortopdownBlue" />
                    <p className="font-normal">
                      Tăng
                      <strong className="text-colortopdownBlue font-bold">
                        {" "}
                        x2
                      </strong>{" "}
                      lượt nộp hồ sơ
                    </p>
                  </div>
                </div>
              </>
            ) : rid === 3 ? (
              <>
                {" "}
                <div className="flex flex-col gap-2 ">
                  <div className="flex gap-1 text-[16px] items-center text-gray-500">
                    <TiTick className=" text-colortopdownBlue" />
                    <p className="">Hiển thị trên trang chủ và trang ngành</p>
                  </div>
                  <div className="flex gap-1 text-[16px] items-center ">
                    <TiTick className=" text-colortopdownBlue" />
                    <p className="">Hiển thị ưu tiên trên trang tìm kiếm</p>
                  </div>
                </div>
                <div className="flex gap-2 flex-col">
                  <div className="flex gap-1 text-[16px] items-center text-colortopdownBlue">
                    <TiTick />
                    <p className="font-bold">
                      {" "}
                      <strong className="text-black font-normal">Tặng</strong> 5
                      tin Tiêu chuẩn
                    </p>
                  </div>
                  <div className="flex gap-1 text-[16px] items-center text-colortopdownBlue">
                    <TiTick />{" "}
                    <p className="font-bold">
                      <strong className="text-black font-normal text-[14px]">
                        Quảng bá đa kênh: email, google, facebook,...
                      </strong>
                    </p>
                  </div>
                  <div className="flex gap-1 text-[16px] items-center text-black ">
                    <TiTick className="text-colortopdownBlue" />
                    <p className="font-normal">
                      Tăng
                      <strong className="text-colortopdownBlue font-bold">
                        {" "}
                        x4
                      </strong>{" "}
                      lượt nộp hồ sơ
                    </p>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Published;
