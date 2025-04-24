import CV from "./../../../assets/static/CV-SRR.pdf";

export function Navbar() {
  return (
    <nav className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-5 bg-[#374C5C] gap-4 sm:gap-0">
      <div className="flex justify-center sm:justify-start items-center gap-2">
        <a className="font-bold italic text-md text-white text-sm" href="/">
          Sandra Reyes Rivera
        </a>
      </div>
      <div className="flex justify-center sm:justify-end items-center gap-4">
        <a
          href="#contacto"
          className="text-white hover:text-white text-sm font-bold"
        >
          Contacto
        </a>
        <a
          className="text-white bg-[#C9A14A] py-2 px-3 rounded-md hover:text-white font-bold text-sm"
          href={CV}
          target="_blank"
        >
          Descargar CV
        </a>
      </div>
    </nav>
  );
}
