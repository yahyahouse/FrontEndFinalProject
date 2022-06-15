import React from "react";
import { Link } from "react-router-dom";

import Arrowleft from "../assets/img/fi_arrow-left.svg";

const NavigationBar = () => {
  return (
    <nav className="sm:h-[84px] sm:px-[136px] h-[52px] w-full px-[16px] shadow-md duration-[1s] flex items-center justify-between">
      <Link className="sm:hidden" to="/">
        <img src={Arrowleft} alt="img" />
      </Link>
      <div className="sm:flex sm:bg-purple-900 w-[100px] h-[34px] hidden" />
      <p className="text-sm font-normal leading-6">Lengkapi Info Akun</p>
      <div className="sm:w-[100px] w-[24px]" />
    </nav>
  );
};

export default NavigationBar;
