import saregu from "./../../../assets/img/saregu.jpg";
import universidad_mexicana from "./../../../assets/img/universidad_mexicana.jpg";
import tecmilenio from "./../../../assets/img/tecmilenio.png";

const projects = [
  {
    index: 1,
    title: "Ejecutiva de vinculación",
    image: tecmilenio,
    url: "https://tecmilenio.mx/",
    description:
      "Me encargué de generar alianzas estratégicas con empresas para promover los servicios escolares enfocados al sector ejecutivo. Disfruté mucho la parte de prospección comercial y el contacto directo con áreas clave para fortalecer la presencia institucional.",
  },
  {
    index: 2,
    title: "Asistente de relaciones públicas",
    image: universidad_mexicana,
    url: "https://www.lottus.com/",
    description:
      "Durante mi tiempo en Universidad Mexicana, participé activamente en la difusión académica, el seguimiento a aspirantes y la vinculación con preparatorias y empresas. También impartí talleres y colaboré en campañas de telemarketing para atraer nuevos estudiantes.",
  },
  {
    index: 3,
    title: "Encargada de piso y de redes sociales",
    image: saregu,
    url: "https://grupopromesa.mx/",
    description:
      "En Saregu fui responsable de la atención al cliente presencial y en línea, así como de la gestión de redes sociales, diseño de materiales promocionales y fotografía de producto. Además, administré la tienda en línea, control de caja y apoyé en la capacitación del personal nuevo.",
  },
];

export function MyProjects() {
  return (
    <section className="px-4 py-8 md:p-8 w-full flex justify-center">
      <div className="container max-w-6xl">
        <h3 className="text-center text-2xl font-bold mb-2" id="my_projects">
          Mi experiencia laboral
        </h3>
        <p className="text-center text-md mb-8">
          He tenido la oportunidad de contribuir en proyectos de diversas
          magnitudes, colaborando con empresas grandes y pequeñas.
        </p>

        <div className="flex flex-col gap-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="md:w-1/4 w-full max-h-[180px] md:max-h-[200px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 md:w-3/4 flex flex-col justify-center">
                <h2 className="font-bold text-base mb-2">{project.title}</h2>
                <p className="text-sm mb-3 text-justify">
                  {project.description}
                </p>                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
