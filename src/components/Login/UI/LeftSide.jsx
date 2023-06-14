import React, { useEffect, useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { TfiFacebook } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import {
  getDocuments,
  getDocumentsByField,
} from "../../../Config/Services/Firebase/FireStoreDB";
import { googleSignIn } from "../../../Config/Services/Auth/GoogleAuth";
import { notification } from "antd";
import { useAuth } from "../../../Context/AuthProviders";

export const LeftSide = ({
  setCorrect,
  setUncorrect,
  setIsLoading,
  setIsChangePasswords,
}) => {
  const [errorMessage, setErrorMessage] = useState(false);
  const [Hide, setHide] = useState(false);
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  const { accounts, setAccounts, setUsers, setVerify } = useAuth();

  useEffect(() => {
    getDocuments("accounts").then((data) => {
      setAccounts(data);
    });
  }, []);

  const HandleChangePass = () => {
    if (accounts[0].username === Username) {
      setIsChangePasswords(true);
    } else {
      notification["error"]({
        message: "Lỗi !",
        description: ` 
        Vui lòng nhập tài khoản QUẢN TRỊ vào ô Tài khoản(*) !`,
      });
    }
  };

  const HandleLogin = () => {
    if (
      Username === accounts[0].username &&
      Password === accounts[0].password
    ) {
      setUsers(accounts[0]);
      setIsLoading(false);
      setVerify(true);
      setCorrect(true);
      setTimeout(() => {
        setIsLoading(true);
      }, 1000);
      setTimeout(() => {
        navigate("/admin");
      }, 2000);
    } else if (!Username || !Password) {
      setErrorMessage(true);
      setTimeout(() => {
        setErrorMessage(false);
      }, 2000);
    } else {
      setIsLoading(false);
      setUncorrect(true);
      setTimeout(() => {
        setUncorrect(false);
      }, 2000);
    }
  };

  const HandleGoogleAuth = () => {
    googleSignIn().then((data) => {
      getDocumentsByField("users", "email", data).then((data) => {
        if (data[0].admin) {
          setUsers(data[0]);
          setVerify(true);
          notification["success"]({
            message: "Đăng nhập thành công !",
            description: `Chào mừng đến với ${window.location.hostname} !`,
          });
          setTimeout(() => {
            setIsLoading(true);
          }, 1000);
          setTimeout(() => {
            navigate("/admin");
          }, 2000);
        } else {
          notification["error"]({
            message: "Đăng nhập không thành công !",
            description: ` 
            Vui lòng đăng nhập bằng tài khoản đã được CẤP QUYỀN QUẢN TRỊ !`,
          });
        }
      });
    });
  };

  return (
    <div className="flex-1  m-5 mt-8 mb-2 flex-col flex items-center justify-center  relative">
      <h3 className="text-colortopdownGray text-[20px] font-medium">
        Người quản trị
      </h3>

      <h2 className="text-colortopdownGray text-[24px] font-semibold">
        Đăng nhập
      </h2>
      <div className="py-3 mb-4 text-[14px] w-full font-normal border hover:border-colorBlueBold text-center mt-4 rounded-lg ">
        <div className="hover:scale-125 duration-300">
          <TfiFacebook className="text-blue-600 mr-2 inline-block text-[25px]" />
          Với Facebook
        </div>
      </div>
      <div className="py-3  text-[14px] w-full font-normal border hover:border-colorBlueBold text-center mb-4 rounded-lg">
        <button
          className="hover:scale-125 duration-300 w-full"
          onClick={() => HandleGoogleAuth()}
        >
          <FcGoogle className="text-blue-600 text-[25px] mr-2 inline-block" />
          Với Google
        </button>
      </div>

      <div className="border h-0 w-full relative mt-2 mb-4">
        <p className="absolute bg-white px-10 py-1  -top-4 d:left-[20%] p:left-[9%]">
          Hoặc tiếp tục với Username
        </p>
      </div>

      <div className="w-full mt-3  h-[89px] font-semibold text-[13px] ">
        <div className="mb-2">
          Tài khoản
          <p className="text-red-700 inline-block ml-1">*</p>
        </div>
        <div className="w-full border rounded-lg mb-1">
          <input
            type="text"
            className="p-2 w-full font-normal rounded-lg"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      </div>
      <div className="w-full  min-h-[85px] font-semibold text-[13px] ">
        <div className="mb-2">
          Mật khẩu
          <p className="text-red-700 inline-block ml-1">*</p>
        </div>
        <div className="w-full border rounded-lg mb-1 relative">
          <input
            type={Hide ? "text" : "password"}
            className="p-2  w-full font-normal rounded-lg"
            onChange={(e) => setPassword(e.target.value)}
          />
          {Hide ? (
            <BiHide
              className="absolute right-3 top-[5px] text-[25px] text-colortopdownBlue"
              onClick={() => setHide(false)}
            />
          ) : (
            <BiShow
              className="absolute right-3 top-[5px] text-[25px] text-colortopdownBlue"
              onClick={() => setHide(true)}
            />
          )}
        </div>

        <p
          className={`text-red-600 font-normal ml-2 ${
            errorMessage ? "block " : "hidden"
          }`}
        >
          Vui lòng nhập tài khoản và mật khẩu!
        </p>
      </div>
      <div className=" font-normal w-full">
        <button
          onClick={() => HandleChangePass()}
          className="ml-3 mb-2 hover:underline italic text-[13px]"
        >
          Thay đổi mật khẩu
        </button>
      </div>

      <div className=" mb-4 w-full ">
        <button
          className="py-3 mb-6 bg-blue-900 text-white w-full hover:bg-colorBlueBoldHover rounded-lg"
          onClick={() => HandleLogin()}
        >
          Tiếp tục
        </button>
      </div>
    </div>
  );
};
