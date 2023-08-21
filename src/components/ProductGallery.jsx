import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import firstProductImg from "src/assets/Untitled-1 1.png";
import secondProductImg from "src/assets/Untitled-1 3.png";
import thirdProductImg from "src/assets/Untitled-1 4.png";
import fourthProductImg from "src/assets/Untitled-1 2.png";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const ProductGallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img className="swiper-slide-img" src={firstProductImg} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-slide-img" src={secondProductImg} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-slide-img" src={thirdProductImg} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-slide-img" src={fourthProductImg} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onClick={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="mouse-1-img" src={firstProductImg} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={secondProductImg} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={thirdProductImg} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fourthProductImg} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ProductGallery;
