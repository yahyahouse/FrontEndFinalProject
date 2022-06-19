import React from "react";

import Profile from "../assets/img/profile_infopenawar.png";
import Card from "../assets/img/card_infopenawar.png";
import Close from "../assets/img/fi_x.svg";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const Modal08 = ({ nav, setNav }) => {
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div
        className={
          nav
            ? "bg-black bg-opacity-50 fixed top-0 left-0 right-0 bottom-0"
            : "hidden"
        }
      />
      <div
        className={
          nav
            ? "w-full h-[100vh] sm:items-center sm:justify-center items-end flex fixed bottom-[0] ease-in-out duration-[1s]"
            : "w-full h-[100vh] sm:items-center sm:justify-center items-end flex fixed bottom-[-100%] ease-in-out duration-[1s]"
        }
      >
        <div className="sm:rounded-2xl sm:w-[360px] duration-[1s] bg-white w-full flex flex-col items-center rounded-t-[16px] shadow-sm">
          <button
            onClick={handleNav}
            className=" sm:hidden w-full h-[38px] flex items-center justify-center"
          >
            <div className="w-[60px] h-[6px] rounded-[20px] bg-gray-900" />
          </button>
          <div className="sm:flex hidden justify-end w-full h-[38px] items-center pr-[16px] pt-[10px]">
            <img
              id="klik"
              onClick={handleNav}
              className="close sm:flex hidden cursor-pointer"
              src={Close}
              alt="img"
            />
          </div>
          <div className="w-[360px] flex flex-col items-center px-[32px]">
            <p className="text-sm text-justify font-medium mb-[8px] w-full">
              Yeay kamu berhasil mendapat harga yang sesuai
            </p>
            <p className="text-sm text-justify font-normal text-gray-900 mb-[16px] w-full">
              Segera hubungi pembeli melalui whatsapp untuk transaksi
              selanjutnya
            </p>
            <div className="p-[16px] flex flex-col border w-full rounded-2xl shadow-md mb-[24px]">
              <p className="text-center font-medium text-sm mb-[16px]">
                Product Match
              </p>
              <div className=" flex mb-[16px]">
                <div className="rounded-xl h-[48px] w-[48px] overflow-hidden">
                  <img src={Profile} alt="Profile" />
                </div>
                <div className="pl-[16px] flex flex-col">
                  <p className="text-sm font-medium mb-[5px]">Nama Pembeli</p>
                  <p className="text-[10px] leading-[14px] text-gray-900">
                    Kota
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="rounded-xl h-[48px] w-[48px] overflow-hidden">
                  <img src={Card} alt="Profile" />
                </div>
                <div className="pl-[16px] flex flex-col">
                  <p className="text-sm font-normal">Jam Tangan Casio</p>
                  <p className="text-sm font-normal line-through">Rp 250.000</p>
                  <p className="text-sm font-normal">Ditawar Rp 200.000</p>
                </div>
              </div>
            </div>
            <Link
              className="h-[48px] rounded-2xl w-full bg-purple-700 text-white flex justify-center items-center mb-[20px]"
              to={"#"}
            >
              <p className="justify-center font-medium text-sm mx-[40px]">
                Hubungi via Whatsapp
              </p>
              <FaWhatsapp size={"20"} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal08;
