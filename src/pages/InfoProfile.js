import React from "react";
import { Link } from "react-router-dom";

import Camera from "../assets/img/fi_camera.svg";
import Arrowleft from "../assets/img/fi_arrow-left.svg";
import NavigationBar from "../components/NavigationBar";

const InfoProfile = () => {
  return (
    <div>
      <NavigationBar />
      <section className="flex justify-center py-6">
        <Link className="sm:block hidden" to="/">
          <img src={Arrowleft} alt="img" />
        </Link>
        <div className="sm:mx-[78px] sm:w-[568px] w-[328px] h-[552px] flex flex-col justify-between items-center duration-[1s]">
          <div className="w-[96px] h-[96px] bg-purple-100 rounded-xl flex items-center justify-center">
            <img src={Camera} alt="img" />
          </div>
          <form className="w-full flex flex-col justify-between">
            <div className="flex flex-col my-3">
              <label className="mb-1 font-medium">Nama*</label>
              <input
                type="text"
                className="border-2 border-gray-300 rounded-2xl h-[48px] px-5"
                placeholder="Nama"
              />
            </div>
            <div className="flex flex-col mb-3">
              <label className="mb-1 font-medium">Kota*</label>
              <select className="border-2 border-gray-300 rounded-2xl h-[48px] px-5">
                <option value="none" hidden>
                  Pilih Kota
                </option>
                <option value="1">test</option>
                <option value="1">test</option>
                <option value="1">test</option>
              </select>
            </div>
            <div className="flex flex-col mb-3">
              <label className="mb-1 font-medium">Alamat*</label>
              <textarea
                type="textarea"
                className="border-2 border-gray-300 rounded-2xl h-[80px] py-1 px-5 resize-none"
                placeholder="Contoh: Jalan Ikan Hiu 33"
              />
            </div>
            <div className="flex flex-col mb-3">
              <label className="mb-1 font-medium">No Handphone*</label>
              <input
                type="text"
                className="border-2 border-gray-300 rounded-2xl h-[48px] px-5"
                placeholder="Contoh: +628123456789"
              />
            </div>
            <button
              type="submit"
              className="h-[48px]  bg-purple-700 text-white rounded-2xl mt-5 font-medium"
            >
              Simpan
            </button>
          </form>
        </div>
        <div className="sm:w-[24px] w-0" />
      </section>
    </div>
  );
};

export default InfoProfile;
