import CV from "./../../../assets/static/CV-VSJD.pdf";

export function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 bg-gray-800">
      <a className="font-bold italic text-md text-white" href="/">
        JDVS
      </a>
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
