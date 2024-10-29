import uniclick from "./../../img/scrum.svg";
import netlogistik from "./../../img/responsive-design.svg";
import grupopromesa from "./../../img/speedometer.svg";

const benefits = [
  {
    title: "Scrum",
    image: uniclick,
    description:
      "Estimación de horas, planeación de sprint y trabajo por objetivos.",
  },
  {
    title: "Responsive",
    image: netlogistik,
    description: "Maquetado adaptativo para todo tipo de dispositivos.",
  },
  {
    title: "Clean code",
    image: grupopromesa,
    description: "Optimización de código para tiempos mas cortos de carga.",
  },
];

export function Benefits() {
  return (
    <section className="px-4 py-8 md:p-8 bg-grey text-white" id="hard_skills">
      <div className="container">
        <h3 className="text-center mb-2 text-2xl font-bold" id="my_projects">
          Hard skills
        </h3>
        <p className="text-center text-md">
          Óptimo desempeño en equipo e independiente
        </p>
        <div className="flex flex-col md:flex-row gap-4 my-8">
          {benefits.map((benefit) => (
            <div className="flex flex-col gap-2 p-4 shadow bg-black">
              <img src={benefit.image} alt={benefit.title} className="w-10" />
              <div>
                <h2 className="font-bold text-lg">{benefit.title}</h2>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
