import React from "react";
import DropDown from "../DropDown/DropDown";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <div className="relative mb-16">
      <div className="d:flex flex-row gap-2 justify-center items-center py-[32px] bg-colorBlueBold rounded-lg mt-4 p:hidden">
        {" "}
        <div className="p-3 bg-white font-normal">
          <AiOutlineSearch className="inline-block  text-[25px]" />
          <input
            type="text"
            placeholder="Tìm kiếm cơ hội việc làm"
            className="outline-none ml-2"
          />
        </div>
        <DropDown Text="Tất cả nghề nghiệp" Top={true} />
        <DropDown Text="Tất cả tỉnh thành" Top={true} />
        <button className="py-3 px-6 text-white bg-colortopdownBlue">
          Tìm kiếm
        </button>
        <button className="py-3 px-6 text-white bg-colortopdownGray">
          Lọc nâng cao
        </button>
      </div>

      <div className="p:flex flex-col gap-2 justify-center items-center py-[32px] bg-colorBlueBold  mt-4 d:hidden">
        <div className="flex  gap-3 flex-col items-center">
          <div className="p-3 bg-white font-normal">
            <AiOutlineSearch className="inline-block  text-[25px]" />
            <input
              type="text"
              placeholder="Tìm kiếm cơ hội việc làm"
              className="outline-none ml-2"
            />
          </div>
          <DropDown Text="Tất cả nghề nghiệp" Top={true} />
          <DropDown Text="Tất cả tỉnh thành" Top={true} />
        </div>
        <button className="py-3 px-6 text-white bg-colortopdownBlue">
          Tìm kiếm
        </button>
        <button className="py-3 px-6 text-white bg-colortopdownGray">
          Lọc nâng cao
        </button>
      </div>

      <div className="d:flex flex-row gap-2 justify-center items-center text-[12px] p-3 pb-4 absolute bg-white rounded-md w-full -bottom-16 z-20 shadow-lg cursor-pointer p:hidden">
        <div className="font-medium text-[12px]">Lọc nâng cao:</div>

        <DropDown Text="Tất cả kinh nghiệm" />
        <DropDown Text="Tất cả kinh nghiệm" />

        <DropDown Text="Tất cả kinh nghiệm" />

        <DropDown Text="Tất cả kinh nghiệm" />

        <DropDown Text="Tất cả kinh nghiệm" />

        <DropDown Text="Tất cả kinh nghiệm" />

        <div>
          Xóa chọn |
          <p className="inline-block ml-1 text-colorGrayfont-medium"> Đóng</p>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
