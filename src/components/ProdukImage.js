import React from "react";
import { useLocation } from "react-router-dom";
import produkimage from "../assets/img/detailproduk-image.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "../assets/css/ProdukImage.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProdukImage = ({ imageDetail }) => {
  console.log(imageDetail);
  const location = useLocation();

  const imagePreview = JSON.parse(localStorage.getItem("imagePreview"));
  console.log(imagePreview.image0);
  return (
    <div>
      {location.pathname === "/detailproduk" ? (
        <div>
          <div className="w-[600px] h-[436px] pl-2 md:block hidden ">
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={1}
              navigation={true}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              className="swiper-detail rounded-2xl"
            >
              <SwiperSlide>
                <img
                  src={
                    location.pathname === "/detailproduk"
                      ? imagePreview.image0
                      : produkimage
                  }
                  className="w-[600px] h-[436px] object-cover"
                  alt="productImage"
                />
              </SwiperSlide>
              <SwiperSlide
                className={
                  location.pathname === "/detailproduk" && !imagePreview.image1
                    ? "hidden"
                    : ""
                }
              >
                <img
                  src={
                    location.pathname === "/detailproduk"
                      ? imagePreview.image1
                      : produkimage
                  }
                  className="w-[600px] h-[436px] object-cover"
                  alt="productImage"
                />
              </SwiperSlide>
              <SwiperSlide
                className={
                  location.pathname === "/detailproduk" && !imagePreview.image2
                    ? "hidden"
                    : ""
                }
              >
                <img
                  src={
                    location.pathname === "/detailproduk"
                      ? imagePreview.image2
                      : produkimage
                  }
                  className="w-[600px] h-[436px] object-cover"
                  alt="productImage"
                />
              </SwiperSlide>
              <SwiperSlide
                className={
                  location.pathname === "/detailproduk" && !imagePreview.image3
                    ? "hidden"
                    : ""
                }
              >
                <img
                  src={
                    location.pathname === "/detailproduk"
                      ? imagePreview.image3
                      : produkimage
                  }
                  className="w-[600px] h-[436px] object-cover"
                  alt="produkimage"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="w-full block md:hidden -mt-[54px] md:static -z-10">
            <Swiper
              modules={[Pagination]}
              slidesPerView={1}
              centeredSlides={true}
              loop={true}
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <img
                  className="w-full h-[300px] object-cover"
                  src={
                    location.pathname === "/detailproduk"
                      ? imagePreview.image0
                      : produkimage
                  }
                  alt="productImage"
                />
              </SwiperSlide>
              <div className="hidden">
                <SwiperSlide
                  className={
                    location.pathname === "/detailproduk" &&
                    !imagePreview.image1
                      ? "hidden"
                      : ""
                  }
                >
                  <img
                    className="w-full h-[300px] object-cover"
                    src={
                      location.pathname === "/detailproduk"
                        ? imagePreview.image1
                        : produkimage
                    }
                    alt="productImage"
                  />
                </SwiperSlide>
              </div>
              <SwiperSlide
                className={
                  location.pathname === "detailproduk" && !imagePreview.image2
                    ? "hidden"
                    : ""
                }
              >
                <img
                  className="w-full h-[300px] object-cover"
                  src={
                    location.pathname === "/detailproduk"
                      ? imagePreview.image2
                      : produkimage
                  }
                  alt="productImage"
                />
              </SwiperSlide>
              <SwiperSlide
                className={
                  location.pathname === "detailproduk" && !imagePreview.image3
                    ? "hidden"
                    : ""
                }
              >
                <img
                  className="w-full h-[300px] object-cover"
                  src={
                    location.pathname === "/detailproduk"
                      ? imagePreview.image3
                      : produkimage
                  }
                  alt="productImage"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      ) : (
        <div>
          <div className="w-[600px] h-[436px] pl-2 md:block hidden ">
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={1}
              navigation={true}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              className="swiper-detail rounded-2xl"
            >
              {imageDetail &&
                imageDetail.map((item) => (
                  <SwiperSlide>
                    <img
                      src={item}
                      className="w-[600px] h-[436px] object-cover"
                      alt="productImage"
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
          <div className="w-full block md:hidden -mt-[54px] md:static -z-10">
            <Swiper
              modules={[Pagination]}
              slidesPerView={1}
              centeredSlides={true}
              loop={true}
              pagination={{ clickable: true }}
            >
              {imageDetail &&
                imageDetail.map((item) => (
                  <SwiperSlide>
                    <img
                      className="w-full h-[300px] object-cover"
                      src={item}
                      alt="productImage"
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProdukImage;
