import React from "react";
import produkimage from "../assets/img/detailproduk-image.png";
import produkmobile from "../assets/img/detailproduk-mobile.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "../assets/css/ProdukImage.css"; 

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProdukImage = () => {
    return (
        <div className="">
            <div className="w-[600px] h-full pl-2 md:block hidden ">
                <Swiper 
                 modules={[Navigation, Pagination]}
                 slidesPerView={1}
                 navigation={true}
                 pagination={{ clickable: true }}
                 onSwiper={(swiper) => console.log(swiper)}
                 onSlideChange={() => console.log('slide change')}
                 className="swiper-detail"
                  >
                    <SwiperSlide>
                        <img src={produkimage} alt={produkimage} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={produkimage} alt={produkimage} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={produkimage} alt={produkimage} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={produkimage} alt={produkimage} />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="w-full block md:hidden -mt-[50px] md:static -z-10">
                <Swiper
                 modules={[ Pagination ]}
                 slidesPerView={1}
                 centeredSlides={true}
                 loop={true}
                 pagination={{ clickable: true }}
                >
                    <SwiperSlide>
                        <img className="w-full" src={produkmobile} alt={produkmobile} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="w-full" src={produkmobile} alt={produkmobile} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="w-full" src={produkmobile} alt={produkmobile} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="w-full" src={produkmobile} alt={produkmobile} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default ProdukImage;