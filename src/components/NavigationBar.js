import React from "react";

const NavigationBar = () => {
  return (
    <nav className="h-[84px] w-full shadow-md duration-[1s] px-[136px] flex items-center justify-between">
      <div className="w-[100px] h-[34px] bg-purple-900" />
      <p className="text-sm font-normal leading-6">Lengkapi Info Akun</p>
      <div className="w-[100px]" />
    </nav>
  );
};

export default NavigationBar;
