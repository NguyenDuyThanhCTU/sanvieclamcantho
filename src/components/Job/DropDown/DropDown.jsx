import React from "react";

import { Dropdown, Space } from "antd";
import { IoIosArrowDown } from "react-icons/io";

const DropDown = ({ Text, Top }) => {
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item (disabled)
        </a>
      ),

      disabled: true,
    },
  ];
  return (
    <div>
      <Dropdown menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            {" "}
            <div
              className={`p-3  ${
                Top ? "bg-white font-normal" : "border font-medium"
              }`}
            >
              <input
                type="text"
                placeholder={Text}
                className={` outline-none ${Top ? "w-[150px]" : "w-[120px]"}`}
              />
              <IoIosArrowDown className="inline-block ml-2" />
            </div>
          </Space>
        </a>
      </Dropdown>
    </div>
  );
};

export default DropDown;
