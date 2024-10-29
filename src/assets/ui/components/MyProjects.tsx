import uniclick from "./../../../assets/img/uniclick-logo.png";
import asimexico from "./../../../assets/img/logoasi.png";
import grupopromesa from "./../../../assets/img/logo promesa.jpg";
import lottus from "./../../../assets/img/lottus.jpeg";
import react from "./../../../assets/img/react.svg";
import angular from "./../../../assets/img/angular.svg";
import django from "./../../../assets/img/django.svg";
import typescript from "./../../../assets/img/typescript.svg";
import wordpress from "./../../../assets/img/wordpress.svg";
import javascript from "./../../../assets/img/javascript.svg";
import github from "./../../../assets/img/github.svg";
import analytics from "./../../../assets/img/google-analytics.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const projects = [
  {
    index: 1,
    title: "Lottus Education",
    image: lottus,
    url: "https://www.lottus.com/",
    description:
      "Plataforma de educación superior superior que está revolucionando la educación en México.",
    language1: react,
    language2: typescript,
    language3: github,
  },
  {
    index: 2,
    title: "Grupo Promesa",
    image: grupopromesa,
    url: "https://grupopromesa.mx/",
    description:
      "Grupo PROMESA se dedica a la educación ambiental en escuelas, empresas y viviendas de México.",
    language1: wordpress,
    language2: analytics,
    language3: django,
  },
  {
    index: 3,
    title: "Uniclick",
    image: uniclick,
    url: "https://www.uniclick.com.mx/",
    description:
      "Una plataforma digital de productos y servicios financieros comprometidos con el desarrollo sostenible de México",
    language1: react,
    language2: javascript,
    language3: angular,
  },
  {
    index: 4,
    title: "asimexico",
    image: asimexico,
    url: "https://asimexico.org/",
    description:
      "Autoestima, Salud e Imagen es una sociedad sin fines de lucro, que ayuda personas a tener una imagen positiva",
    language1: wordpress,
    language2: analytics,
    language3: github,
  },
];

export function MyProjects() {
  return (
    <section className="px-4 py-8 md:p-8 w-full flex justify-center">
      <div className="container">
        <h3 className="text-center text-2xl font-bold mb-2" id="my_projects">
          Proyectos Destacados
        </h3>
        <p className="text-center text-md">
          He tenido la oportunidad de contribuir en proyectos de diversas
          magnitudes, colaborando con empresas grandes y pequeñas.
        </p>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },         
            1280: {
              slidesPerView: 3,
              spaceBetween: 10,
            }            
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {projects.map((project) => (
            <SwiperSlide
              className="p-5 w-full"
              virtualIndex={project.index}
              key={project.title}
            >
              <div className="text-center shadow-lg mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full"
                />
                <div className="p-4 h-44 flex flex-col gap-2 items-center">
                  <h2 className="font-bold text-md">{project.title}</h2>
                  <p className="text-sm">{project.description}</p>
                  <div className="shadow-lg flex items-center  border border-neutral-400 rounded-full py-2 pl-4 pe-2">
                    <a
                      className="text-sm hover:text-black"
                      target="_blank"
                      href={project.url}
                    >
                      Ver más
                    </a>
                    <ExpandCircleDownIcon className="see-more-icon" />
                  </div>
                </div>
                <div className="flex justify-around p-4">
                  <img
                    src={project.language1}
                    alt={project.language1}
                    width="40"
                    height="40"
                  />
                  <img
                    className="mx-5"
                    src={project.language2}
                    alt={project.language2}
                    width="40"
                    height="40"
                  />
                  <img
                    src={project.language3}
                    alt={project.language3}
                    width="40"
                    height="40"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
