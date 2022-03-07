import React, { useRef, useState } from "react";
import Img1 from '../assets/img/01.png'
import Img2 from '../assets/img/04.jpg'
import Img3 from '../assets/img/05.jpg'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./carousel.css";

import { Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="c-img"> <img src={Img2} /> </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="c-img"> <img src={Img2} /> </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="c-img"> <img src={Img3} /> </div>
        </SwiperSlide>
      
      </Swiper>
    </>
  );
}
