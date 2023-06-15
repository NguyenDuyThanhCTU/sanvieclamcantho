import React from "react";
import Input from "./Input/Input";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";

const Advise = () => {
  return (
    <div className="bg-[#f3f5fa] h-[700px] flex justify-center ">
      <div className="flex items-center p-20">
        <div className="relative h-[554px]">
          <img
            src="https://ntd.vieclam24h.vn/img/call-center-working-night.png"
            alt="image"
            className="h-full w-[818px] object-cover rounded-l-2xl"
          />
          <div className="text-white absolute top-[40%] px-[80px] ">
            <h3 className="text-[30px] font-bold mb-5">
              Hãy để chúng tôi hỗ trợ bạn
            </h3>
            <p className="text-[16px] font-normal">
              Chúng tôi luôn sẵn sàng hỗ trợ tư vấn và giải đáp mọi thắc mắc của
              bạn về tuyển dụng nhân sự qua Việc Làm 24h
            </p>
          </div>
        </div>

        <div className="bg-white h-[554px] flex items-center rounded-r-2xl">
          <form className="px-24">
            <div className="text-center">
              <h3 className="text-[24px] font-bold">Đăng ký tư vấn</h3>
              <h5 className="font-semibold text-[16px]">
                Vui lòng để lại thông tin, <br /> chúng tôi sẽ liên lạc lại với
                bạn sớm nhất có thể.
              </h5>
            </div>
            <div>
              <div>
                <label>Họ và tên</label>
                <div className="flex items-center gap-3 py-2 px-5 border rounded-md border-colortopdownBlue my-2">
                  <AiOutlineUser className="inline-block" />
                  <input
                    type="text"
                    placeholder="Tên của bạn"
                    className="outline-none px-2"
                  />
                </div>
              </div>

              <div>
                <label>Địa chỉ email</label>
                <div className="flex items-center gap-3 py-2 px-5 border rounded-md border-colortopdownBlue my-2">
                  <AiOutlineMail className="inline-block" />
                  <input
                    type="text"
                    placeholder="Tên của bạn"
                    className="outline-none px-2"
                  />
                </div>
              </div>
              <div>
                <label>Số điện thoại</label>
                <div className="flex items-center gap-3 py-2 px-5 border rounded-md border-colortopdownBlue my-2">
                  <BsPhone className="inline-block" />
                  <input
                    type="text"
                    placeholder="Tên của bạn"
                    className="outline-none px-2"
                  />
                </div>
              </div>
            </div>

            <div>
              <p>Quy mô công ty</p>
              <div className="flex justify-between py-2">
                <input type="radio" />

                <input type="radio" />
                <input type="radio" />
                <input type="radio" />
              </div>
            </div>
            <button className="w-full bg-primary py-2 text-white mt-5">
              Yêu cầu tư vấn
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Advise;
