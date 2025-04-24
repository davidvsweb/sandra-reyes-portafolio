import CV from "./../../../assets/static/CV-SRR.pdf";

export function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 bg-gray-800">
      <div className="flex items-center gap-2">        
        <a className="font-bold italic text-md text-white text-sm" href="/">
          Sandra Reyes Rivera
        </a>
      </div>
      <div className="flex items-center gap-4">
        <a
          href="#contacto"
          className="text-white hover:text-white text-sm font-bold"
        >
          Contacto
        </a>
        <a
          className="text-white bg-[#4A9F98] py-2 px-3 rounded-md hover:text-white font-bold text-sm"
          href={CV}
          target="_blank"
        >
          Descargar CV
        </a>
      </div>
    </nav>
  );
}
