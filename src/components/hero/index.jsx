import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./index.scss";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

import img1 from "../../assets/imgs/manzura.jpg";
import img2 from "../../assets/imgs/vel.jpg";
import img3 from "../../assets/imgs/telvi.jpg";
import img4 from "../../assets/imgs/yog'.jpg";
import img5 from "../../assets/imgs/futa1.jpg";
import img6 from "../../assets/imgs/manzura1.jpg";
import img7 from "../../assets/imgs/vel1.jpg";
import img8 from "../../assets/imgs/telvi1.jpg";
import img9 from "../../assets/imgs/yogg.jpg";
import img10 from "../../assets/imgs/futa.jpg";

const Hero = () => {
  const images = [img1, img2, img3, img4, img5];
  const swiperItem = images?.map((img, inx) => (
    <SwiperSlide key={inx} className="slider__item">
      <img src={img} alt="" className="imglist1" />
    </SwiperSlide>
  ));
  return (
    <section id="hero">
      <div className="container">
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper1"
        >
          {swiperItem}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
