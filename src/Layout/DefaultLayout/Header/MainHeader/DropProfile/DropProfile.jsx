import React, { useState } from "react";
import {
  HeaderItemsDropDownProfile,
  HeaderItemsDropDownRegion,
} from "../../../../../Utils/Item";
import { FiLogOut } from "react-icons/fi";
import DropDown from "./DropDown/DropDown";
import { TiTick } from "react-icons/ti";
const DropProfile = () => {
  const [isSelectedRegion, setIsSelectedRegion] = useState(0);
  return (
    <div className="text-black h-screen ">
      <div className="  mx-2 my-5 bg-purple-200 ">
        <div className="flex items-center px-2 py-2 gap-2">
          <img
            src="https://www.shutterstock.com/image-vector/default-avatar-profile-icon-vector-260nw-1725655669.jpg"
            alt="avt"
            className="w-6 rounded-full object-contain"
          />
          <p>Thanh</p>
        </div>
      </div>

      <div className="py-5 border-b">
        <div className="pl-5 flex flex-col gap-3">
          <h3 className="text-gray-300">Miền hoạt động</h3>
          <div className="flex flex-col gap-2">
            {HeaderItemsDropDownRegion.map((items, idx) => (
              <div
                className="flex items-center gap-4"
                onClick={() => setIsSelectedRegion(idx)}
              >
                <TiTick />
                <h3>{items.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-b py-5">
        {HeaderItemsDropDownProfile.map((items) => (
          <DropDown content={items.content} title={items.title} />
        ))}
      </div>

      <div className="py-5 pl-5 border-t  text-colorBlueBold flex items-center gap-2 text-[18px]">
        <FiLogOut className="text-blue-700" />
        <h3>Đăng xuất</h3>
      </div>
    </div>
  );
};

export default DropProfile;
