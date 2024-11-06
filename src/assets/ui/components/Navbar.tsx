import CV from "./../../../assets/static/CV-VSJD.pdf";
import code_icon from "./../../../assets/img/icons-code.png";

export function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 bg-gray-800">
      <div className="flex items-center gap-2">
        <img src={code_icon} alt="icon-code" className="w-6"/>
      <a className="font-bold italic text-md text-white text-sm" href="/">
        David Web
      </a>
      </div>
      <div className="flex items-center gap-4">
        <a href="#contacto" className="text-white hover:text-white text-sm font-bold">Contacto</a>
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
