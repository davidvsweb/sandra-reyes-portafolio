import CV from "./../../../assets/static/CV-VSJD.pdf";
import code_icon from "./../../../assets/img/icons-code.png";

export function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 bg-gray-800">
      <div className="flex items-center gap-2">
        <img src={code_icon} alt="icon-code" className="w-8"/>
      <a className="font-bold italic text-md text-white" href="/">
        DVS
      </a>
      </div>
      <div className="flex items-center gap-4">        
        <a
          className="text-white bg-blue-500 py-2 px-3 rounded-md hover:text-white font-bold"
          href={CV}
          target="_blank"
        >
          Descargar CV
        </a>
      </div>
    </nav>
  );
}
