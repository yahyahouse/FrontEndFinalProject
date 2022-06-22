import React from "react";
import Banner from "../components/Banner";
import CardProduct from "../components/CardProduct";
import { FiSearch, FiPlus } from "react-icons/fi";
import { Pagination } from "antd";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import NavigationBar from "../components/NavigationBar";
import { Link } from "react-router-dom";

const Home = () => {
  const handlePaginationChange = (page) => {
    // mengambil value dari pagination yang active
    console.log(page);
  };
  return (
    <div>
      <NavigationBar />
      <Banner />
      <div className="w-full md:px-[136px] mt-10">
        <div className="px-2 mt-[228px] md:mt-2">
          <h3 className="text-base font-bold">Telusuri Category</h3>
          <div>
            <Swiper
              slidesPerView={2.6}
              spaceBetween={20}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 6,
                },
              }}
              modules={[]}
              className="mySwiper"
            >
              <SwiperSlide>
                <button className="bg-purple-700 px-7 py-3 flex items-center gap-2 rounded-xl text-white text-sm font-normal mt-4 hover:bg-purple-500">
                  <FiSearch className="text-white text-xl font-bold" />
                  Semua
                </button>
              </SwiperSlide>
              <SwiperSlide>
                <button className="group bg-purple-100 px-7 py-3 flex items-center gap-2 rounded-xl text-black text-sm font-normal mt-4 hover:bg-purple-700 hover:text-white">
                  <FiSearch className="text-black text-xl font-bold group-hover:text-white" />
                  Hobi
                </button>
              </SwiperSlide>
              <SwiperSlide>
                <button className="group bg-purple-100 px-7 py-3 flex items-center gap-2 rounded-xl text-black text-sm font-normal mt-4 hover:bg-purple-700 hover:text-white">
                  <FiSearch className="text-black text-xl font-bold group-hover:text-white" />
                  Kendaraan
                </button>
              </SwiperSlide>
              <SwiperSlide>
                <button className="group bg-purple-100 px-7 py-3 flex items-center gap-2 rounded-xl text-black text-sm font-normal mt-4 hover:bg-purple-700 hover:text-white">
                  <FiSearch className="text-black text-xl font-bold group-hover:text-white" />
                  Fashion
                </button>
              </SwiperSlide>
              <SwiperSlide>
                <button className="group bg-purple-100 px-7 py-3 flex items-center gap-2 rounded-xl text-black text-sm font-normal mt-4 hover:bg-purple-700 hover:text-white">
                  <FiSearch className="text-black text-xl font-bold group-hover:text-white" />
                  Aksesoris
                </button>
              </SwiperSlide>
              <SwiperSlide>
                <button className="group bg-purple-100 px-7 py-3 flex items-center gap-2 rounded-xl text-black text-sm font-normal mt-4 hover:bg-purple-700 hover:text-white">
                  <FiSearch className="text-black text-xl font-bold group-hover:text-white" />
                  Kesehatan
                </button>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 justify-between gap-3 mt-8 md:mt-10">
          <CardProduct cardWidth={"182px"} />
          <CardProduct cardWidth={"182px"} />
          <CardProduct cardWidth={"182px"} />
          <CardProduct cardWidth={"182px"} />
          <CardProduct cardWidth={"182px"} />
          <CardProduct cardWidth={"182px"} />
          <CardProduct cardWidth={"182px"} />
          <CardProduct cardWidth={"182px"} />
          <CardProduct cardWidth={"182px"} />
          <CardProduct cardWidth={"182px"} />
          <CardProduct cardWidth={"182px"} />
        </div>
      </div>
      <Pagination
        className="mt-12 pb-28 flex justify-center"
        defaultCurrent={1}
        total={1000}
        onChange={handlePaginationChange}
      />
      <Link to={"/infoproduk"}>
        <button className="bg-purple-700 px-7 py-4 flex items-center gap-2 rounded-xl text-white text-sm font-normal mt-4 mx-auto fixed bottom-7 left-[50%] -translate-x-[50%] drop-shadow-[0_0_10px_rgba(0, 0, 0, 0.15)]">
          <FiPlus className="text-white text-xl font-bold" />
          Jual
        </button>
      </Link>
    </div>
  );
};

export default Home;
