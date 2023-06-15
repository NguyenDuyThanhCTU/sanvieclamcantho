import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const EmployerLayout = ({ children }) => {
  return (
    <>
      <div className="fixed w-full z-10">
        <Header />
      </div>
      <div className="z-0  ">{children}</div>
      <Footer />
    </>
  );
};

export default EmployerLayout;
