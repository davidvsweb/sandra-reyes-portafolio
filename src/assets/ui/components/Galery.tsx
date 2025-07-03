import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import photo_1 from "./../../img/galery/1.jpg";
import photo_2 from "./../../img/galery/2.jpg";
import photo_3 from "./../../img/galery/3.jpg";
import photo_4 from "./../../img/galery/4.jpg";
import photo_5 from "./../../img/galery/5.jpg";
import photo_6 from "./../../img/galery/6.jpg";
import photo_7 from "./../../img/galery/7.jpg";
import photo_8 from "./../../img/galery/8.jpg";
import photo_9 from "./../../img/galery/9.jpg";
import photo_10 from "./../../img/galery/10.jpg";

const photos = [
  photo_1,
  photo_2,
  photo_3,
  photo_4,
  photo_5,
  photo_6,
  photo_7,
  photo_8,
  photo_9,
  photo_10,
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
        <div className="mt-8 text-center">
          <p className="mb-4 text-base">
            Si quieres ver más sobre mi trabajo haz <strong>click</strong> en este enlace:
          </p>
          <a
            href="https://drive.google.com/drive/folders/10lVwdjxiwjI0OZGhAp9sut4gKOs6pDQh?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#374C5C] font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-200 hover:text-[#C9A14A] transition"
          >
            Ver en Google Drive
          </a>
        </div>
      </div>
    </section>
  );
}
    