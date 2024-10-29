import uniclick from "./../../../assets/img/uniclick-logo.png"
import asimexico from "./../../../assets/img/logoasi.png"
import grupopromesa from "./../../../assets/img/logo promesa.jpg"
import react from "./../../../assets/img/react.svg"
import angular from "./../../../assets/img/angular.svg"
import django from "./../../../assets/img/django.svg"
/* import bootstrap from "./../../../assets/img/bootstrap.svg" */
import wordpress from "./../../../assets/img/wordpress.svg"
import javascript from "./../../../assets/img/javascript.svg"
import github from "./../../../assets/img/github.svg"
import analytics from "./../../../assets/img/google-analytics.svg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const projects = [
    { index: 1, title: "Uniclick", image: uniclick, url: "https://www.uniclick.com.mx/", description: "Una plataforma digital de productos y servicios financieros comprometidos con el desarrollo sostenible de México", language1: react, language2: javascript, language3: angular },
    { index: 2, title: "Grupo Promesa", image: grupopromesa, url: "https://grupopromesa.mx/", description: "Grupo PROMESA se dedica a la educación ambiental en escuelas, empresas y viviendas de México.", language1: wordpress, language2: analytics, language3: django },
    { index: 3, title: "asimexico", image: asimexico, url: "https://asimexico.org/", description: "Autoestima, Salud e Imagen es una sociedad sin fines de lucro, que ayuda personas a tener una imagen positiva", language1: wordpress, language2: analytics, language3: github },
]

export function MyProjects() {
    return (

        <section className="my-5 container">
            <h3 className="text-center" id="my_projects"><strong>Mis proyectos</strong></h3>
            <p className="text-center m-0 description">He tenido la oportunidad de laborar con grandes y pequeñas empresas</p>
            <Swiper
                modules={[Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}

            >
                {projects.map(project =>
                    <SwiperSlide className="col-md-4 px-4 pb-4 pt-3" virtualIndex={project.index} key={project.title}>
                        <div className="card card-project my-3 text-center shadow">
                            <img src={project.image} alt={project.title} className="card-img-top" />
                            <div className="card-body">
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                                <a className="shadow btn py-2 pl-4 pr-0 rounded-pill m-auto d-flex align-items-center" style={{ maxWidth: '120px' }} target="_blank" href={project.url}>Ver más <ExpandCircleDownIcon className="see-more-icon" /></a>
                            </div>
                            <div className="card-footer text-muted d-flex justify-content-center py-4">
                                <img src={project.language1} alt={project.language1} width="40" height="40" />
                                <img className="mx-5" src={project.language2} alt={project.language2} width="40" height="40" />
                                <img src={project.language3} alt={project.language3} width="40" height="40" />
                            </div>
                        </div>
                    </SwiperSlide>)}
            </Swiper>
        </section>
    )
}