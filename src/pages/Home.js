import React from "react";
import Banner from "../components/Banner";
import CardProduct from "../components/CardProduct";
import { FiSearch } from "react-icons/fi";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="w-full px-[136px] mt-10">
        <h3 className="text-base font-bold">Telusuri Category</h3>
        <div className="flex gap-4">
          <button className="bg-purple-700 px-7 py-3 flex items-center gap-2 rounded-xl text-white text-sm font-normal mt-4">
            <FiSearch className="text-white text-xl font-bold" />
            Semua
          </button>
          <button className="bg-purple-100 px-7 py-3 flex items-center gap-2 rounded-xl text-black text-sm font-normal mt-4">
            <FiSearch className="text-black text-xl font-bold" />
            Hobi
          </button>
        </div>
        <div className="grid grid-cols-6 justify-between mt-[14px]">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </div>
    </div>
  );
};

export default Home;
