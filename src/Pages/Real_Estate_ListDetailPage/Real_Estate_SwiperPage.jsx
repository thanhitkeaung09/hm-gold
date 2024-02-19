import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const SwiperPage = ({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="md:w-[500px] cursor-pointer"
      >
        {data.map((el, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={el} className="w-[800px] h-[500px] object-cover" />
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* for preview image */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={1}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="md:w-[500px] cursor-pointer text-center "
      >
        <div className="swiper-wrapper justify-center">
          {" "}
          {/* Add justify-center class */}
          {data.map((el, index) => (
            <SwiperSlide key={index} className="swiper-slide mx-3 h-20">
              {" "}
              {/* Add mx-2 class for spacing between slides */}
              <img src={el} className="mx-auto w-96 h-20 object-cover" />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};

export default SwiperPage;
