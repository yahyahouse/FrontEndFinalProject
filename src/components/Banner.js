import React from "react";
import banner from "../asset/banner-image.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";

const Banner = () => {
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={1.6}
        centeredSlides={true}
        loop={true}
        spaceBetween={16}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={banner} alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner} alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner} alt="banner" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
