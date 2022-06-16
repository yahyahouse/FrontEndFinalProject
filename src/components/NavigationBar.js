import React, { useState } from "react";
import { FiSearch, FiDownload, FiMenu } from "react-icons/fi";

const NavigationBar = () => {
  // penampung quary yang diinputkan
  const [searchQuery, setSearchQUery] = useState("");

  // menerima setiap perubahan yang diinput
  const handleChange = (e) => {
    setSearchQUery(e.target.value);
  };

  // handle api search
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchQuery);
  };

  return (
    <nav className="w-full md:bg-white static md:fixed top-0 md:shadow-md duration-[1s] px-2 md:px-[136px] pt-9 md:py-[18px] flex items-center justify-between z-50">
      <div className="hidden md:block w-[100px] h-[34px] bg-purple-900 mr-6" />
      <button className="block md:hidden bg-white p-3 rounded-2xl mr-4">
        <FiMenu className="w-6 h-6" />
      </button>
      <form
        className="flex md:justify-start mr-auto w-full"
        onSubmit={handleSubmit}
      >
        <input
          className="w-full md:w-[410px] h-full py-4 px-6 bg-white md:bg-[#EEEEEE] rounded-tl-2xl rounded-bl-2xl focus:outline-none placeholder:text-sm placeholder:text-gray-900"
          placeholder="Cari di sini ..."
          value={searchQuery}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="py-4 px-6 bg-white md:bg-[#EEEEEE] rounded-tr-2xl rounded-br-2xl"
        >
          <FiSearch className="w-[19px] h-[19px] text-gray-900" />
        </button>
      </form>

      {/* <p className="text-sm font-normal leading-6">Lengkapi Info Akun</p> */}
      {/* <div className="w-[100px]" /> */}
      <button className="bg-purple-700 px-6 py-[14px] hidden md:flex items-center gap-2 rounded-xl text-white text-sm font-normal">
        <FiDownload className="text-white text-xl font-bold -rotate-90" />
        Masuk
      </button>
    </nav>
  );
};

export default NavigationBar;
