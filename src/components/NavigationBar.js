import React, { useState } from "react";
import {
  FiSearch,
  FiDownload,
  FiMenu,
  FiX,
  FiList,
  FiBell,
  FiUser,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import Arrowleft from "../assets/img/fi_arrow-left.svg";
import Notifikasi from "./Notifikasi";

const NavigationBar = () => {
  // state untuk responsive navbar toggle
  const [nav, setNav] = useState(false);
  // penampung quary yang diinputkan
  const [searchQuery, setSearchQUery] = useState("");
  // state untuk notifikasi modal
  const [notifikasi, setNotifikasi] = useState(false);

  // setting show hide side menu navbar
  const handleNav = () => {
    setNav(!nav);
  };

  // menerima setiap perubahan yang diinput
  const handleChange = (e) => {
    setSearchQUery(e.target.value);
  };

  // setting show hide notifikasi modal

  // handle api search
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchQuery);
  };

  // if else
  const r = window.location.pathname.substring(
    1,
    window.location.pathname.lastIndexOf("/") + 50
  );
  console.log(r);

  if (r === "infoprofile") {
    return (
      <nav className="sm:h-[84px] sm:px-[136px] h-[52px] w-full px-[16px] shadow-[0_0_4px_rgba(0,0,0,0.15)] duration-[1s] flex items-center justify-between">
        <Link className="sm:hidden" to="/">
          <img src={Arrowleft} alt="img" />
        </Link>
        <div className="sm:flex sm:bg-purple-900 w-[100px] h-[34px] hidden" />
        <p className="text-base font-medium leading-6 ">Lengkapi Info Akun</p>
        <div className="sm:w-[100px] w-[24px]" />
      </nav>
    );
  } else if (r === "infoproduk") {
    return (
      <nav className="sm:h-[84px] sm:px-[136px] h-[52px] w-full px-[16px] shadow-[0_0_4px_rgba(0,0,0,0.15)] duration-[1s] flex items-center justify-between">
        <Link className="sm:hidden" to="/">
          <img src={Arrowleft} alt="img" />
        </Link>
        <div className="sm:flex sm:bg-purple-900 w-[100px] h-[34px] hidden" />
        <p className="text-base font-medium leading-6 ">
          Lengkapi Detail Produk
        </p>
        <div className="sm:w-[100px] w-[24px]" />
      </nav>
    );
  } else if (r === "" || r === "daftarJual") {
    return (
      <>
        {/* Notifikasi di daftar jual */}
        {r === "daftarJual" ? (
          <Notifikasi notifikasi={notifikasi} setNotifikasi={setNotifikasi} />
        ) : (
          ""
        )}
        <nav className="w-full md:bg-white static md:fixed top-0 md:shadow-[0_0_4px_rgba(0,0,0,0.15)] duration-[1s] px-2 md:px-[136px] pt-9 md:py-[18px] flex items-center justify-between z-10">
          <div className="hidden md:block w-[100px] h-[34px] bg-purple-900 mr-6" />
          {/* Menu Navbar Mobile */}
          {/* button toggle*/}
          <button
            className="block md:hidden bg-white p-3 rounded-2xl mr-4"
            onClick={handleNav}
          >
            <FiMenu className="w-6 h-6" />
          </button>
          {/* sidebar */}
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[50%] h-full bg-white ease-in-out duration-500 px-2 z-50"
                : "ease-in-out duration-500 fixed left-[-100%] h-full"
            }
          >
            <div className="flex mt-8 gap-10">
              <h3 className="text-sm font-bold text-black">Second Hand</h3>
              <button onClick={handleNav}>
                <FiX className="text-lg text-black font-bold" />
              </button>
            </div>
            <button className="mt-[18px] flex bg-purple-700 px-6 py-[14px] items-center gap-2 rounded-xl text-white text-sm font-normal">
              <FiDownload className="text-white text-xl font-bold -rotate-90" />
              Masuk
            </button>
          </div>
          {/* Menu Navbar Dekstop */}

          {r === "daftarJual" ? (
            <div className="mr-auto">
              <h2 className="md:hidden text-xl font-bold">Daftar Jual Saya</h2>
              <form
                className="hidden md:flex md:justify-start mr-auto w-full"
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
            </div>
          ) : (
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
          )}

          {/* <p className="text-sm font-normal leading-6">Lengkapi Info Akun</p> */}
          {/* <div className="w-[100px]" /> */}

          {r === "daftarJual" ? (
            <div className="hidden md:flex gap-6">
              <button>
                <FiList className="text-2xl text-purple-900" />
              </button>
              <div className="relative">
                <div className="w-2 h-2 rounded bg-red-500 mt-1 absolute -top-1 right-1"></div>
                <button onMouseEnter={(e) => setNotifikasi(true)}>
                  <FiBell className="text-2xl text-purple-900" />
                </button>
              </div>
              <button>
                <FiUser className="text-2xl" />
              </button>
            </div>
          ) : (
            <button className="bg-purple-700 px-6 py-[14px] hidden md:flex items-center gap-2 rounded-xl text-white text-sm font-normal">
              <FiDownload className="text-white text-xl font-bold -rotate-90" />
              Masuk
            </button>
          )}
        </nav>
      </>
    );
  } else {
    return (
      <nav className="sm:h-[84px] sm:px-[136px] h-[52px] w-full px-[16px] shadow-md duration-[1s] flex items-center justify-between">
        <Link className="sm:hidden" to="/">
          <img src={Arrowleft} alt="img" />
        </Link>
        <div className="sm:flex sm:bg-purple-900 w-[100px] h-[34px] hidden" />
        <div className="sm:w-[100px] w-[24px]" />
      </nav>
    );
  }
};

export default NavigationBar;
