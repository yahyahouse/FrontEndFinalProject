import React, { useState } from "react";
import { Link } from "react-router-dom";

import Arrowleft from "../assets/img/fi_arrow-left.svg";
import NavigationBar from "../components/NavigationBar";
import Profile from "../assets/img/profile_infopenawar.png";
import Card from "../assets/img/card_infopenawar.png";
import ModalWhatsapp from "../components/ModalWhatsapp";
import { FaWhatsapp } from "react-icons/fa";
import ModalStatus from "../components/ModalStatus";

function InfoPenawar() {
  const [nav, setNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  function openModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <ModalStatus isOpen={isOpen} setIsOpen={setIsOpen} />
      <ModalWhatsapp nav={nav} setNav={setNav} />
      <NavigationBar />
      <section className="flex justify-center py-[16px] ">
        <Link className="sm:block hidden" to="/">
          <img src={Arrowleft} alt="img" />
        </Link>
        <div className="sm:w-[568px] sm:mx-[78px] duration-[1s] w-[328px]">
          <div className="h-[80px] border rounded-2xl shadow-md flex items-center p-[16px] mb-[24px]">
            <div className="rounded-xl h-[48px] w-[58px] overflow-hidden">
              <img src={Profile} alt="Profile" />
            </div>
            <div className="h-full w-full px-[16px] py-[3px] flex flex-col justify-between">
              <p className="text-sm font-medium">Nama Pembeli</p>
              <p className="text-[10px] leading-[14px] text-gray-900">Kota</p>
            </div>
          </div>
          <p className="my-[16px] text-sm font-medium">
            Daftar Produkmu yang Ditawar
          </p>
          <div className="h-[155px] flex flex-col justify-between border-b border-b-gray-700 pb-[15px] mb-[15px]">
            <div className="flex">
              <div className="Profile rounded-xl h-[48px] w-[58px] overflow-hidden flex items-center justify-center">
                <img src={Card} alt="img" />
              </div>
              <div className="duration-[1s] w-full pl-[16px]">
                <div className="flex justify-between">
                  <p className="text-[10px] leading-[14px] font-normal text-gray-900">
                    Penawaran Produk
                  </p>
                  <p className="text-[10px] leading-[14px] font-normal text-gray-900">
                    20 Apr, 14:04
                  </p>
                </div>
                <p className="text-sm font-normal">Jam Tangan Casio</p>
                <p className="text-sm font-normal">Rp 250.000</p>
                <p className="text-sm font-normal">Ditawar Rp 200.000</p>
              </div>
            </div>
            <div className="sm:justify-end duration-[1s] flex justify-between">
              <button
                onClick={openModal}
                className="w-[156px] h-[36px] border-2 rounded-2xl border-purple-700 flex justify-center items-center text-sm font-medium"
              >
                Status
              </button>
              <button
                onClick={handleNav}
                className="sm:ml-5 duration-[1s] w-[156px] h-[36px] border-2 rounded-2xl bg-purple-700 flex justify-center items-center text-sm font-medium text-white"
              >
                Hubungi di <FaWhatsapp className="ml-2" />
              </button>
            </div>
          </div>
          <div className="h-[155px] flex flex-col justify-between border-b border-b-gray-700 pb-[15px] mb-[15px]">
            <div className="flex">
              <div className="Profile rounded-xl h-[48px] w-[58px] overflow-hidden flex items-center justify-center">
                <img src={Card} alt="img" />
              </div>
              <div className="duration-[1s] w-full pl-[16px]">
                <div className="flex justify-between">
                  <p className="text-[10px] leading-[14px] font-normal text-gray-900">
                    Penawaran Produk
                  </p>
                  <p className="text-[10px] leading-[14px] font-normal text-gray-900">
                    20 Apr, 14:04
                  </p>
                </div>
                <p className="text-sm font-normal">Jam Tangan Casio</p>
                <p className="text-sm font-normal">Rp 250.000</p>
                <p className="text-sm font-normal">Ditawar Rp 200.000</p>
              </div>
            </div>
            <div className="sm:justify-end duration-[1s] flex justify-between">
              <button className="w-[156px] h-[36px] border-2 rounded-2xl border-purple-700 flex justify-center items-center text-sm font-medium">
                Tolak
              </button>
              <button className="sm:ml-5 duration-[1s] w-[156px] h-[36px] border-2 rounded-2xl bg-purple-700 flex justify-center items-center text-sm font-medium text-white">
                Terima
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InfoPenawar;
