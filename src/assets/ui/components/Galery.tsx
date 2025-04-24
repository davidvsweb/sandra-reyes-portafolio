import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import photo_1 from "./../../img/galery/1.jpg";
import photo_2 from "./../../img/galery/2.png";
import photo_3 from "./../../img/galery/4.jpg";
import photo_4 from "./../../img/galery/5.jpg";
import photo_5 from "./../../img/galery/6.jpg";
import photo_6 from "./../../img/galery/7.jpg";
import photo_7 from "./../../img/galery/8.jpg";
import photo_8 from "./../../img/galery/9.png";

const photos = [
  photo_1,
  photo_2,
  photo_3,
  photo_4,
  photo_5,
  photo_6,
  photo_7,
  photo_8,
];

export function Galery() {
  return (
    <section
      className="px-4 py-8 md:p-8 bg-[#374C5C] text-white flex justify-center"
      id="hard_skills"
    >
      <div className="container max-w-6xl">
        <h3 className="text-center mb-2 text-2xl font-bold">Galería</h3>
        <p className="text-center text-md mb-6">
          Algunas imágenes que reflejan mi camino profesional y personal.
        </p>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
            1400: {
              slidesPerView: 3,
            },
          }}
        >
          {photos.map((photo, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-96 overflow-hidden rounded-xl shadow">
                <img
                  src={photo}
                  alt={`Galería ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
