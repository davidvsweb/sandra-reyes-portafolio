import profile_picture from "./../../../assets/img/sandra-profile-picture.jpeg";
import CV from "./../../../assets/static/CV-SRR.pdf";

export function Header() {
  return (
    <header>
      <div className="flex justify-center items-center px-4 py-8 md:p-12">
        <div className=" max-w-6xl flex flex-col md:flex-row gap-8 items-center md:items-center">
          <div className="flex justify-center md:justify-start">
            <img
              className="rounded-full w-40 sm:w-52 md:w-56 max-w-[16rem] aspect-square object-cover"
              src={profile_picture}
              alt="profile-picture"
            />
          </div>
          <div
            className="flex flex-col items-center md:items-start gap-4 text-center md:text-left"
            id="about_me"
          >
            <div>
              <h1 className="text-3xl font-bold">Sandra Reyes Rivera</h1>
              <h3 className="text-[#C9A14A] font-bold text-lg">
                Licenciada en Comunicación
              </h3>
            </div>
            <p className="text-md max-w-xl">
              Soy licenciada en Comunicación con experiencia en atención al
              cliente, redacción y fotografía. También imparto conferencias,
              espacios donde comparto conocimientos y aprendo de las
              experiencias del público.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                className="bg-[#C9A14A] py-2 px-4 rounded-md hover:bg-[#A7822F] text-white font-bold"
                href={CV}
                target="_blank"
              >
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
