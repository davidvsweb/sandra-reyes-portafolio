import profile_picture from "./../../../assets/img/sandra-profile-picture.jpeg";
import CV from "./../../../assets/static/CV-SRR.pdf";

export function Header() {
  return (
    <header>
      <div className="flex justify-center items-center px-4 py-8 md:p-8">
        <div className="container max-w-6xl grid md:grid-cols-3 gap-8">
          <div className="flex justify-center">
            <img
              className="rounded-full w-40 sm:w-64 md:w-full max-w-[18rem] aspect-[3/4] object-cover"
              src={profile_picture}
              alt="profile-picture"
            />
          </div>
          <div
            className="md:col-span-2 flex flex-col items-center md:items-start gap-4"
            id="about_me"
          >
            <h1 className="text-3xl font-bold text-center md:text-left">
              Sandra Reyes Rivera
            </h1>
            <h3 className="text-green font-bold text-lg text-center md:text-left">
              Licenciada en Comunicación
            </h3>
            <p className="text-md text-center md:text-left">
              Soy Licenciada en Comunicación con experiencia en atención al
              cliente, un área que me ha permitido fortalecer mis habilidades
              para conectar con diferentes públicos. A lo largo de mi
              trayectoria, he buscado siempre mantenerme en constante
              aprendizaje, lo que me ha llevado a desarrollar competencias en
              fotografía, redacción y edición de contenido. Además, disfruto dar
              conferencias, donde no solo comparto lo que sé, sino que también
              aprendo de las experiencias de los demás.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                className="bg-[#4A9F98] py-3 px-4 rounded-md hover:text-white font-bold"
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
