import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import Footer from "../../Layout/DefaultLayout/Footer/Footer";
import Content from "./Content/Content";

const Profile = () => {
  return (
    <>
      <div className="absolute z-10 h-[2500px]">
        <Sidebar />
      </div>
      <div className="ml-[370px] ">
        <Header />
        <div className="mr-[270px] h-[750px]">
          <Content />
        </div>
      </div>
      <div className="z-40 absolute w-full">
        <Footer />
      </div>
    </>
  );
};

export default Profile;
