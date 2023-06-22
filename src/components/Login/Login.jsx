import React from "react";
import { useState } from "react";

import { LeftSide } from "./UI/LeftSide";
import { RightSide } from "./UI/RightSide";
import { ChangePassword } from "./UI/ChangePassword";
import Loading from "../Item/Loading";
import Alert from "../Item/Alert";
import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const Login = () => {
  const [Correct, setCorrect] = useState(false);
  const [Uncorrect, setUncorrect] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isChangePasswords, setIsChangePasswords] = useState(false);

  return (
    <div className="bg-[rgba(0,0,0,0.3)] w-full h-full z-50 absolute">
      <div className="relative p:block d:hidden top-3 left-3 text-[25px] ">
        <Link to="/">
          <IoChevronBackOutline />
        </Link>
      </div>
      <div className="">
        <Alert correct={Correct} uncorrect={Uncorrect} />
      </div>
      <Loading loading={isLoading} />

      <div className="d:w-[880px] p:w-[90vw] h-[529px] absolute  bg-white bottom-[25%] p:left-[5%] d:left-[30%] flex font-LexendDeca cursor-pointer rounded-sm -z-10">
        {isChangePasswords ? (
          <ChangePassword setIsChangePasswords={setIsChangePasswords} />
        ) : (
          <LeftSide
            setIsChangePasswords={setIsChangePasswords}
            setCorrect={setCorrect}
            setUncorrect={setUncorrect}
            setIsLoading={setIsLoading}
          />
        )}

        <RightSide />
      </div>
    </div>
  );
};

export default Login;
