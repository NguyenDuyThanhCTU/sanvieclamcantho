import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Hotline from "./PopUp/Hotline";
import HeadLess from "../../components/Home/HeadLess/HeadLess";
// import Login from "../../components/Login/Login";

const DefaultLayout = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [Headless, setHeadLess] = useState(false);
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     if (isLogin || Headless) {
  //       document.body.style.overflow = "hidden";
  //     } else {
  //       document.body.style.overflow = "auto";
  //     }
  //   }
  // }, [isLogin]);

  return (
    <div className="relative">
      {/* {isLogin && <Login Login={setIsLogin} />} */}
      {Headless && <HeadLess Click={setHeadLess} />}
      <div className="">
        <Header />
      </div>
      {/* <Header Login={setIsLogin} Click={setHeadLess} /> */}
      {/* <main className="z-0">{children}</main> */}
      {/* <Footer /> */}
      <div className="z-10 fixed">
        <Hotline />
      </div>
    </div>
  );
};

export default DefaultLayout;
