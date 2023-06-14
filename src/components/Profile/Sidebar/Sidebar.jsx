import React, { useState } from "react";
import { BsMagic } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { RiProfileLine } from "react-icons/ri";

const Sidebar = () => {
  const [Click, setClick] = useState(false);
  const [Click1, setClick1] = useState(false);
  const [Click2, setClick2] = useState(false);
  const [Click3, setClick3] = useState(false);
  const [Click4, setClick4] = useState(false);
  return (
    <div className="h-full w-[370px] border-r font-LexendDeca">
      <div className="flex items-center justify-center bg-primary text-white">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/sanvieclamcantho-1d6c5.appspot.com/o/logosanvieclamcantho.jpg?alt=media&token=ef1995a4-47a5-4741-9908-05a60c4ddb62"
          alt="logo"
          className="h-16 w-16"
        />
        <p className="text-[20px] text-center ml-2 font-bold w-[140px]">
          Sàn việc làm cần thơ
        </p>
      </div>
      <div className="flex flex-col justify-center gap-5 mt-2 ml-3 cursor-pointer">
        <div className="font-bold  " onClick={() => setClick(!Click)}>
          {Click ? (
            <>
              {" "}
              <IoIosArrowDown className="inline-block" /> Quản lý tài khoản
              <div className="w-full m-3 flex items-center gap-3 font-normal text-[18px] text-colorBlueBold">
                <RiProfileLine /> Hồ sơ của bạn
              </div>
              <div className="w-full m-3 flex items-center gap-3 font-normal text-[18px] text-colorBlueBold">
                <BsMagic /> Trang Trí CV
              </div>
            </>
          ) : (
            <>
              {" "}
              <IoIosArrowForward className="inline-block" /> Quản lý tài khoản
            </>
          )}
        </div>
        <div className="font-bold  " onClick={() => setClick1(!Click1)}>
          {Click1 ? (
            <>
              {" "}
              <IoIosArrowDown className="inline-block" /> Quản lý tài khoản
              <div className="w-full m-3 flex items-center gap-3 font-normal text-[18px] text-colorBlueBold">
                <RiProfileLine /> Hồ sơ của bạn
              </div>
              <div className="w-full m-3 flex items-center gap-3 font-normal text-[18px] text-colorBlueBold">
                <BsMagic /> Trang Trí CV
              </div>
            </>
          ) : (
            <>
              {" "}
              <IoIosArrowForward className="inline-block" /> Quản lý tài khoản
            </>
          )}
        </div>{" "}
        <div className="font-bold  " onClick={() => setClick2(!Click2)}>
          {Click2 ? (
            <>
              {" "}
              <IoIosArrowDown className="inline-block" /> Quản lý tài khoản
              <div className="w-full m-3 flex items-center gap-3 font-normal text-[18px] text-colorBlueBold">
                <RiProfileLine /> Hồ sơ của bạn
              </div>
              <div className="w-full m-3 flex items-center gap-3 font-normal text-[18px] text-colorBlueBold">
                <BsMagic /> Trang Trí CV
              </div>
            </>
          ) : (
            <>
              {" "}
              <IoIosArrowForward className="inline-block" /> Quản lý tài khoản
            </>
          )}
        </div>{" "}
        <div className="font-bold  " onClick={() => setClick3(!Click3)}>
          {Click3 ? (
            <>
              {" "}
              <IoIosArrowDown className="inline-block" /> Quản lý hồ sơ
              <div className="w-full m-3 flex items-center gap-3 font-normal text-[18px] text-colorBlueBold">
                <RiProfileLine /> Hồ sơ của bạn
              </div>
              <div className="w-full m-3 flex items-center gap-3 font-normal text-[18px] text-colorBlueBold">
                <BsMagic /> Trang Trí CV
              </div>
            </>
          ) : (
            <>
              {" "}
              <IoIosArrowForward className="inline-block" /> Quản lý việc làm
            </>
          )}
        </div>{" "}
        <div className="font-bold  " onClick={() => setClick4(!Click4)}>
          {Click4 ? (
            <>
              {" "}
              <IoIosArrowDown className="inline-block" /> Nhà tuyển dụng bạn
              quan tâm
              <div className="w-full m-3 flex items-center gap-3 font-normal text-[18px] text-colorBlueBold">
                <RiProfileLine /> Hồ sơ của bạn
              </div>
              <div className="w-full m-3 flex items-center gap-3 font-normal text-[18px] text-colorBlueBold">
                <BsMagic /> Trang Trí CV
              </div>
            </>
          ) : (
            <>
              {" "}
              <IoIosArrowForward className="inline-block" /> Hỗ trợ và thông bá
              <object data="" type=""></object>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
