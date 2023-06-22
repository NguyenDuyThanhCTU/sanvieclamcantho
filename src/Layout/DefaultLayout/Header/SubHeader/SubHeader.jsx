import React from "react";
import Items from "./Items/Items";
import { BsListTask } from "react-icons/bs";
import { subHeaderItems } from "../../../../Utils/Item";
const SubHeader = () => {
  return (
    <div>
      {/* Desktop */}
      <div className="w-full bg-white border-b cursor-pointer d:block p:hidden">
        <div className="bg-white h-[49px]  text-primary items-center flex flex-row justify-evenly mx-60">
          <div
            className="ml-10 hover:scale-125 duration-300 hover:text-black"
            // onClick={() => Click(true)}
          >
            <BsListTask className=" text-[34px] font-bold" />
          </div>
          <div
          // onClick={() => Click(true)}
          >
            <ul className="flex gap-1 items-center text-[13px] font-semibold">
              <li className="flex items-center hover:bg-colortopdownGray2 p-2">
                Bán buôn - Bán lẻ - Quản lý cửa hàng
              </li>
              <Items text="Kinh Doanh" />
              <Items text="Marketing" />
              <Items text="Khoa học - Kỹ thuật" />
              <Items text=" Nghề nghiệp khác" />
              <Items text="Hành chính - Thư ký" />
              <div className="bg-[#B6B6B8] w-1 h-1 rounded-sm mx-2 inline-block "></div>
              <li className="flex items-center hover:bg-colortopdownGray2 p-2">
                Kế toán
              </li>
            </ul>
          </div>
          <div className="bg-[rgba(225,240,255,1)] leading-[50px]  text-[#0669cc] hover:bg-[rgba(188,221,255,1)] px-6 ">
            Tạo hồ sơ ngay
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="d:hidden p:flex bg-white w-full border-b h-[49px]  justify-between items-center ">
        <div className="flex  overflow-x-auto w-auto">
          <nav class="flex flex-nowrap bg-white p-4 h-[49px] items-center">
            <div className="flex gap-1 items-center text-[13px] font-semibold  w-[1300px]">
              {subHeaderItems.map((items) => (
                <Items name={items.name} link={items.link} />
              ))}

              {/* <li className="  hover:bg-colortopdownGray2 p-2 w-[270px]">
                  Bán buôn - Bán lẻ - Quản lý cửa hàng
                </li>
                <Items text="Kinh Doanh" />
                <Items text="Marketing" />
                <Items text="Khoa học - Kỹ thuật" />
                <Items text=" Nghề nghiệp khác" />
                <Items text="Hành chính - Thư ký" />
                <div className="bg-[#B6B6B8] w-1 h-1 rounded-sm mx-2 inline-block "></div>
                <li className="inline-block w-[90px] hover:bg-colortopdownGray2 p-2">
                  Kế toán
                </li> */}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
