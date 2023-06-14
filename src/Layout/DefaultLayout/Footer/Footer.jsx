import React from "react";
import { BsHeadset } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" bg-primary font-LexendDeca text-white w-screen">
      {" "}
      <div className="flex justify-center pt-9 pb-8 d:flex-row p:flex-col">
        <div className=" border-b-[1px] border-gray-400  h-[240px] d:w-[550px] p:w-screen d:mx-0 p:mx-3">
          <div className="text-[18px] font-semibold">
            Hotline cho Người tìm việc
          </div>
          <div className="flex mt-7">
            <div className="flex  pr-8 border-r">
              <BsHeadset className="text-[24px] h-[50px] w-[50px]" />
              <div className="ml-2">
                <p className="text-[14px] font-normal">
                  Hotline hỗ trợ miền Nam
                </p>
                <p className="text-[14px]">HCM: (028) 7109 2424</p>
              </div>
            </div>
            <div className="flex pl-8 border-l">
              <BsHeadset className="text-[24px]  h-[50px] w-[50px]" />
              <div className="ml-2">
                <p className="text-[14px] font-normal">
                  Hotline hỗ trợ miền Bắc
                </p>
                <p className="text-[14px]">HN: (024) 7309 2424</p>
              </div>
            </div>
          </div>
          <div className="flex items-center mt-6">
            <p>hoặc</p>
            <button className="bg-button py-3 px-9 rounded-lg ml-5">
              Đăng ký nhận tư vấn
            </button>
          </div>
        </div>
        <div className=" border-b-[1px] border-gray-400  h-[240px] d:w-[550px] p:w-screen d:mx-0 p:mx-3 d:pl-10 p:pl-0 p:py-3 d:py-0">
          <div className="text-[18px] font-semibold">
            Hotline cho Nhà tuyển dụng
          </div>
          <div className="flex mt-7">
            <div className="flex  pr-8 border-r">
              <BsHeadset className="text-[24px] h-[50px] w-[50px]" />
              <div className="ml-2">
                <p className="text-[14px] font-normal">
                  Hotline hỗ trợ miền Nam
                </p>
                <p className="text-[14px]">HCM: (028) 7108 2424</p>
              </div>
            </div>
            <div className="flex pl-8 border-l">
              <BsHeadset className="text-[24px]  h-[50px] w-[50px]" />
              <div className="ml-2">
                <p className="text-[14px] font-normal">
                  Hotline hỗ trợ miền Bắc
                </p>
                <p className="text-[14px]">HN: (024) 7308 2424</p>
              </div>
            </div>
          </div>
          <div className="flex items-center mt-6">
            <p>hoặc</p>
            <button className="bg-button py-3 px-9 rounded-lg ml-5">
              Đăng ký nhận tư vấn
            </button>
          </div>
        </div>
      </div>
      <div className=" flex justify-center ">
        <div className="d:w-[1100px] p:w-full border-b border-gray-400 grid d:grid-cols-4 p:grid-cols-2 justify-between pb-8 font-thin gap-5">
          <ul className="flex gap-1 flex-col ml-3">
            <li>Việc làm Đồng Nai</li>
            <li>Việc làm Bến Tre</li>
            <li>Việc làm Đà Nẵng</li>
            <li>Việc làm Vũng Tàu</li>
          </ul>
          <ul className="flex gap-1 flex-col  ml-3">
            <li>Việc làm Bình Dương</li>
            <li>Việc làm Hải Phòng</li>
            <li>Việc làm Đà Lạt</li>
            <li>Việc làm Nha Trang</li>
          </ul>
          <ul className="flex gap-1 flex-col  ml-3">
            <li>Việc làm Xây dựng</li>
            <li>Việc làm Nhân sự</li>
            <li>Việc làm IT Phần Mềm</li>
            <li>Việc làm Chăm sóc khách hàng</li>
          </ul>
          <ul className="flex gap-1 flex-col  ml-3">
            <li>Thiết kế CV</li>
            <li>Trắc nghiệm tính cách</li>
            <li>Công cụ tính lương</li>
          </ul>
        </div>
      </div>
      <div className="pt-8 flex justify-center ">
        <div className="w-[1100px] border-b border-gray-400 flex justify-between pb-8 font-light d:flex-row p:flex-col gap-5 p:items-center d:items-start">
          <div className="max-w-[528px]">
            <h2 className="font-bold ml-2">Về chúng tôi</h2>

            <h3 className="mt-[14px] text-[12px] font-semibold ml-2">
              Vieclam24h.vn - Công Ty Cổ Phần Việc Làm 24h
            </h3>
            <div className="text-[12px] flex gap-1 flex-col font-thin ml-2">
              <p>
                Trụ sở: Tòa nhà Siêu Việt, 23 Trần Cao Vân, Phường Đa Kao, Quận
                1, TP Hồ Chí Minh
              </p>{" "}
              <p>
                Chi nhánh: Tầng 4, tòa nhà Times Tower, 35 Lê Văn Lương, Thanh
                Xuân, Hà Nội.
              </p>{" "}
              <p>
                Giấy phép hoạt động dịch vụ việc làm số: 4938/SLĐTBXH-GP do Sở
                Lao Động Thương Binh & Xã Hội TP.HCM cấp
              </p>
              <p>
                {" "}
                Điện thoại: (028) 7108 2424 | (024) 7308 2424 Email hỗ trợ người
                tìm việc:
              </p>{" "}
              <p>
                ntv@vieclam24h.vn Email hỗ trợ nhà tuyển dụng: ntd@vieclam24h.vn
              </p>
            </div>
          </div>
          <div>
            <h2 className="font-bold">Thông tin</h2>
            <ul className="mt-[14px] text-[12px] font-normal flex flex-col gap-1">
              <li>Cẩm nang nghề nghiệp</li>
              <li>Báo giá dịch vụ</li>
              <li>Điều khoản sử dụng</li>
              <li>Quy định bảo mật</li>
              <li>Sơ đồ trang web</li>
            </ul>
          </div>
          <div>
            <h2>Kết nối với chúng tôi</h2>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-[14px] font-poppins font-normal py-5">
        <p className="pr-2">©2022 All Rights reserved ADS Company</p>
        <p className="pl-2 border-l-[1px] border-gray-400">
          Designed by Thanh Dev ADS Company
        </p>
      </div>{" "}
    </div>
  );
};

export default Footer;
