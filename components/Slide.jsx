import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination } from "swiper";
SwiperCore.use([Pagination]);


export default function Slider() {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        className="MiSlide"
      >
        <SwiperSlide>
          <div className="item">
          Slide 1 aqui
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className="item">
          Slide 2 aqui
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className="item">
          Slide 3 aqui
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className="item">
          Slide 4 aqui
          </div>
          </SwiperSlide>
      </Swiper>
    </div>
  );
}
