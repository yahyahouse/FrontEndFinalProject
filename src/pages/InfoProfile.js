import React from "react";
import { Link } from "react-router-dom";

import Camera from "../assets/img/fi_camera.svg";
import Arrowleft from "../assets/img/fi_arrow-left.svg";
import NavigationBar from "../components/NavigationBar";

const InfoProfile = () => {
  return (
    <div>
      <NavigationBar />
      <section className="h-[580px] flex items-start justify-center my-[40px]">
        <Link className="sm:block hidden" to="/">
          <img src={Arrowleft} alt="img" className="" />
        </Link>
        <div className="sm:mx-[78px] sm:w-[568px] sm:h-[552px] w-[328px] h-[552px] flex flex-col justify-between items-center ">
          <Link to="#">
            <div className="w-[96px] h-[96px] bg-purple-100 rounded-xl flex items-center justify-center">
              <img src={Camera} alt="img" />
            </div>
          </Link>
          <form className="w-full h-full flex flex-col justify-between">
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
              <select
                id="cars"
                name="cars"
                className="border-2 border-gray-300 rounded-2xl h-[48px] px-5"
              >
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
