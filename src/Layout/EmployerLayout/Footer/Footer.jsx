import React from "react";
import { BsHeadset } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-5 my-10 px-24">
      <h3 className="text-[30px] font-bold">Hotline cho nhà tuyển dụng</h3>
      <div className="flex gap-5">
        <div className="flex pb-5 border-b-2 mb-10">
          <BsHeadset className="text-colortopdownBlue text-[30px]" />
          <div className="ml-2">
            <p className="font-normal">Hotline hỗ trợ miền nam</p>
            <p className="uppercase font-bold text-18">HCM: (028) 7108 2424</p>
          </div>
        </div>

        <div className="flex pb-5 border-b-2 mb-10">
          <BsHeadset className="text-colortopdownBlue text-[30px]" />
          <div className="ml-2">
            <p className="font-normal">Hotline hỗ trợ miền nam</p>
            <p className="uppercase font-bold text-18">HCM: (028) 7108 2424</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-32">
        <div className="flex gap-5 flex-col">
          <h3>Về chúng tôi</h3>
          <div className="text-[13px]">
            <h3>
              <strong>Vieclam24h.vn - Công Ty Cổ Phần Việc Làm 24H</strong>
            </h3>
            <p>
              <strong>Trụ sở:</strong> Tòa nhà Siêu Việt, 23 Trần Cao Vân,
              Phường Đa Kao, Quận 1, TP Hồ Chí Minh
            </p>
            <p>
              <strong>Chi nhánh:</strong>Tầng 4, tòa nhà Times Tower, 35 Lê Văn
              Lương, Thanh Xuân, Hà Nội.
            </p>
            <p>
              <strong>giấy phép hoạt động dịch vụ việc làm số:</strong>{" "}
              4938/SLĐTBXH-GP do Sở Lao Động Thương Binh & Xã Hội TP.HCM cấp
            </p>
            <p>
              <strong>Điện thoại:</strong>(028) 7108 2424 | (024) 7308 2424
            </p>
            <p>
              <strong>Email:</strong>ntd@vieclam24h.vn
            </p>
          </div>
        </div>
        <div className="flex gap-5 flex-col">
          <h3 className="font-bold">Thông tin</h3>
          <div className="flex flex-col items-start gap-3 text-[13px] font-normal">
            <p>Gói đăng tin miễn phí</p>
            <p>Báo giá dịch vụ</p>
            <p>Điều khoản sử dụng</p>
            <p>Quy định bảo mật</p>
          </div>
        </div>
        <div className="flex gap-5 flex-col">
          <h3 className="font-bold">Kết nối với chúng tôi</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1995868.7685369414!2d105.71564137330311!3d12.303581963121088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0895a51d60719%3A0x9d76b0035f6d53d0!2sCan%20Tho%20University!5e0!3m2!1sen!2s!4v1686798894048!5m2!1sen!2s"
            width="400"
            height="300"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="flex justify-center text-[14px] font-poppins font-normal pt-5">
        <p className="pr-2">©2023 All Rights reserved ADS Company</p>
        <p className="pl-2 border-l-[1px] border-gray-400">
          Designed by Thanh Dev ADS Company
        </p>
      </div>{" "}
    </div>
  );
};

export default Footer;
