import React from "react";
import Banner from "../components/Banner";
import CardProduct from "../components/CardProduct";
import { FiSearch, FiPlus } from "react-icons/fi";
import { Pagination } from "antd";

const Home = () => {
  const handlePaginationChange = (page) => {
    // mengambil value dari pagination yang active
    console.log(page);
  };
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
        <div className="grid grid-cols-6 justify-between gap-y-3 mt-[14px]">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
        <Pagination
          className="mt-7 pb-28"
          defaultCurrent={1}
          total={1000}
          onChange={handlePaginationChange}
        />
      </div>
      <button className="bg-purple-700 px-7 py-4 flex items-center gap-2 rounded-xl text-white text-sm font-normal mt-4 mx-auto fixed bottom-7 left-[50%] -translate-x-[50%] shadow-[0_0_10px_rgba(0, 0, 0, 0.15)]">
        <FiPlus className="text-white text-xl font-bold" />
        Jual
      </button>
    </div>
  );
};

export default Home;
