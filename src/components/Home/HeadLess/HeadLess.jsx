import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const HeadLess = ({ Click }) => {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.3)] w-full mt-16 h-full z-30 ">
      <div className="d:h-[661px] p:h-[1300px]  bg-white flex justify-center">
        <div className="w-[70%]  bg-white  h-full z-20">
          <div className="flex justify-start gap-2 items-center font-normal text-18 mt-4">
            <AiOutlineClose
              className="inline-block text-[25px] hover:text-red-600 cursor-pointer"
              onClick={() => Click(false)}
            />{" "}
            Danh sách tất cả nghề nghiệp
          </div>
          <div className="flex gap-5 my-6 p:flex-col d:flex-row">
            <div className="flex-[25%] border-blue-200 border bg-blue-50 rounded-lg">
              <div className="p-6 flex gap-5 flex-col cursor-pointer">
                <h3 className="font-bold text-18 border-b-2 pb-4 border-blue-600">
                  Top 10 nghề nghiệp
                </h3>
                <p className="hover:text-colorBlueBold ">
                  Bán buôn - Bán lẻ - Quản lý cửa hàng
                </p>
                <p className="hover:text-colorBlueBold ">Kinh doanh</p>
                <p className="hover:text-colorBlueBold font-medium">
                  Khoa học - Kỹ thuật
                </p>
                <p className="hover:text-colorBlueBold font-medium">
                  Nghề nghiệp khác
                </p>
                <p className="hover:text-colorBlueBold font-medium">
                  Hành chính - Thư ký
                </p>
                <p className="hover:text-colorBlueBold font-medium">Kế toán</p>
                <p className="hover:text-colorBlueBold font-medium">
                  Kiểm toán
                </p>
                <p className="hover:text-colorBlueBold font-medium">
                  Khách sạn - Nhà hàng - Du lịch
                </p>
                <p className="hover:text-colorBlueBold font-medium">
                  Marketing
                </p>
                <p className="hover:text-colorBlueBold font-medium">
                  Tài chính - Đầu tư
                </p>
              </div>
            </div>
            <div className="flex-[75%]">
              <div className="p-6 flex gap-5 flex-col cursor-pointer">
                <h3 className="font-bold text-18 border-b-2 pb-4 border-colorBlueBoldHover">
                  Ngành Khác
                </h3>
                <div className="grid grid-cols-3 gap-7 text-14 font-semibold">
                  <p className="hover:text-colorBlueBold ">An ninh - Bảo vệ</p>
                  <p className="hover:text-colorBlueBold ">
                    Thiết kế - Sáng tạo nghệ thuật
                  </p>
                  <p className="hover:text-colorBlueBold ">
                    Kiến trúc - Thiết kế nội thất
                  </p>

                  <p className="hover:text-colorBlueBold ">
                    IT Phần cứng - Mạng - Viễn Thông
                  </p>
                  <p className="hover:text-colorBlueBold ">IT Phần mềm</p>
                  <p className="hover:text-colorBlueBold ">
                    Sản xuất - Lắp ráp - Chế biến
                  </p>

                  <p className="hover:text-colorBlueBold ">
                    Vận hành máy - Bảo trì - Bảo dưỡng thiết bị
                  </p>
                  <p className="hover:text-colorBlueBold ">
                    Nông - Lâm - Ngư nghiệp
                  </p>
                  <p className="hover:text-colorBlueBold ">
                    Thu mua - Kho Vận - Chuỗi cung ứng
                  </p>

                  <p className="hover:text-colorBlueBold ">Xuất Nhập Khẩu</p>
                  <p className="hover:text-colorBlueBold ">
                    Y tế - Chăm sóc sức khỏe
                  </p>
                  <p className="hover:text-colorBlueBold ">Ngân hàng</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadLess;
