import React, { useState } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import { BiMinus, BiPlus } from "react-icons/bi";
import { RiMagicLine } from "react-icons/ri";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { Popover, Space } from "antd";

const Combo = ({
  image,
  name,
  introduction,
  price,
  topService,
  service,
  bestseller,
}) => {
  const [isCombo, setIsCombo] = useState(1);

  const onMinus = () => {
    if (isCombo > 0) {
      setIsCombo(isCombo - 1);
    }
  };
  const content = (
    <div className="w-[260px] h-[64px] font-LexendDeca font-normal">
      <p className="text-center">
        Ngoài website Việc Làm 24h, tin đăng sẽ được quảng bá đa kênh: email,
        mạng xã hội & công cụ tìm kiếm
      </p>
    </div>
  );
  return (
    <>
      {bestseller ? (
        <div className="w-[400px] rounded-2xl shadow-xl h-[940px]">
          <div className="w-full h-[40px] bg-[#50d5f0] rounded-t-2xl text-white uppercase text-[18px] font-bold flex justify-center items-center gap-3">
            <RiMagicLine className="text-[24px]" />
            <p>Bán chạy nhất</p>
            <RiMagicLine className="text-[24px]" />
          </div>
          <div>
            <img src={image} alt="img" />
          </div>

          <div className="flex flex-col items-center text-center gap-5 p-7">
            <div>
              <h3 className="text-[20px] font-bold uppercase">{name}</h3>
              <p className="text-[14px] font-normal text-gray-400">
                {introduction}
              </p>
            </div>
            <div className="text-primary ">
              <div className="flex items-center gap-1">
                <p className="text-16 text-primary font-bold underline ">đ</p>
                <p className="text-[32px] font-bold ">{price}</p>
                <p className=" text-black font-medium text-14"> /1 combo</p>
              </div>
              <p className="text-gray-400 text-13">(Chưa bao gồm thuế VAT)</p>
            </div>

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

            <div className="rounded-sm w-full text-[18px] text-primary bg-[#f0edf8] hover:bg-[#e1dbf0] flex items-center  py-2 justify-center cursor-pointer gap-1">
              <BsFillCartPlusFill className="text-[23px] " />
              <p>Thêm</p>
            </div>

            <div className="flex flex-col gap-5 pb-5">
              <div className="flex flex-col gap-2">
                {topService.map((items) => (
                  <div className=" text-[16px]  font-normal">
                    {items.state ? (
                      <div className="flex  items-center gap-1">
                        <TiTick className="text-colortopdownBlue" />{" "}
                        <p className="tracking-tighter "> {items.name}</p>
                      </div>
                    ) : (
                      <div className="flex  items-center gap-1">
                        {" "}
                        <RxCross2 className="text-red-600" />{" "}
                        <p> {items.name}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                {service.map((items, idx) => (
                  <div className="flex justify-between">
                    <div className="flex gap-1 text-[16px] items-center text-gray-700  ">
                      {items.state ? (
                        <TiTick className="text-colortopdownBlue" />
                      ) : (
                        <RxCross2 className="text-red-600" />
                      )}

                      <p className=" font-normal tracking-tighter">
                        {items.name}
                      </p>
                    </div>
                    {idx < 2 && (
                      <>
                        <Space>
                          <Popover content={content} trigger="hover">
                            <AiOutlineQuestionCircle className="text-[20px] text-gray-500 cursor-pointer" />
                          </Popover>
                        </Space>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-[400px] rounded-2xl shadow-xl h-[900px]">
          <div>
            <img src={image} alt="img" className="rounded-t-2xl" />
          </div>

          <div className="flex flex-col items-center text-center gap-5 p-7">
            <div>
              <h3 className="text-[20px] font-bold uppercase">{name}</h3>
              <p className="text-[14px] font-normal text-gray-400">
                {introduction}
              </p>
            </div>
            <div className="text-primary ">
              <div className="flex items-center gap-1">
                <p className="text-16 text-primary font-bold underline ">đ</p>
                <p className="text-[32px] font-bold ">{price}</p>
                <p className=" text-black font-medium text-14"> /1 combo</p>
              </div>
              <p className="text-gray-400 text-13">(Chưa bao gồm thuế VAT)</p>
            </div>

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

            <div className="rounded-sm w-full text-[18px] text-primary bg-[#f0edf8] hover:bg-[#e1dbf0] flex items-center  py-2 justify-center cursor-pointer gap-1">
              <BsFillCartPlusFill className="text-[23px] " />
              <p>Thêm</p>
            </div>

            <div className="flex flex-col gap-5 pb-5">
              <div className="flex flex-col gap-2">
                {topService.map((items) => (
                  <div className=" text-[16px]  font-normal">
                    {items.state ? (
                      <div className="flex  items-center gap-1">
                        <TiTick className="text-colortopdownBlue" />{" "}
                        <p className="tracking-tighter "> {items.name}</p>
                      </div>
                    ) : (
                      <div className="flex  items-center gap-1">
                        {" "}
                        <RxCross2 className="text-red-600" />{" "}
                        <p> {items.name}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2 font-thin">
                {service.map((items, idx) => (
                  <div className="flex justify-between">
                    <div className="flex gap-1 text-[16px] items-center text-gray-700  ">
                      {items.state ? (
                        <TiTick className="text-colortopdownBlue" />
                      ) : (
                        <RxCross2 className="text-red-600" />
                      )}

                      <p className=" font-normal tracking-tighter">
                        {items.name}
                      </p>
                    </div>
                    {idx < 2 && (
                      <>
                        <Space>
                          <Popover content={content} trigger="hover">
                            <AiOutlineQuestionCircle className="text-[20px] text-gray-500 cursor-pointer" />
                          </Popover>
                        </Space>
                      </>
                    )}
                  </div>
                ))}
                {/* 
                <div className="flex gap-1 text-[16px] items-center text-colortopdownBlue">
                  <TiTick />
                  <p className="font-bold">
                    {" "}
                    <strong className="text-black font-normal">Tặng</strong> 2
                    tin Tiêu chuẩn
                  </p>
                </div>
                <div className="flex gap-1 text-[16px] items-center text-colortopdownBlue">
                  <TiTick />{" "}
                  <p className="font-bold">
                    {" "}
                    30 điểm{" "}
                    <strong className="text-black font-normal">dịch vụ</strong>
                  </p>
                </div>
                <div className="flex gap-1 text-[16px] items-center text-colortopdownBlue">
                  <TiTick />
                  <p>
                    <strong className="text-black font-normal">
                      Định mức cam kết ứng tuyển{" "}
                    </strong>
                    6 hồ sơ
                  </p>
                </div>
                <div className="flex gap-1 text-[15px] items-center text-colortopdownBlue">
                  <TiTick />
                  <p>
                    <strong className="text-black font-normal">
                      Tự động làm mới mỗi khung giờ trong{" "}
                    </strong>
                    2 tuần
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Combo;
