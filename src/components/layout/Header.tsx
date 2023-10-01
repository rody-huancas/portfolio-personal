import { Link } from "react-router-dom";
// Componentes
import { Footer } from "./Footer";
// Iconos
import { RiHomeLine, RiUserLine, RiMessage3Line } from "react-icons/ri";
import { AiOutlineAppstore } from "react-icons/ai";

export const Header = () => {
  return (
    <>
      <header className="w-96 bg__container rounded-xl p-10 shadow-lg text-white flex flex-col justify-between">
        <div>
          <div className="flex flex-col items-center gap-3">
            <h1 className="font-extrabold uppercase text-2xl">
              Rody Huancas
              <span className="text-orange-600 font-sans text-3xl ml-1">.</span>
            </h1>
            <span className="font-medium text-xl">Desarrollador Web</span>
          </div>

          {/* Menú */}
          <nav className="my-10">
            <ul className="flex flex-col gap-4 font-medium">
              <li className="flex items-center gap-3">
                <RiHomeLine />
                <Link to="/">Inicio</Link>
              </li>
              <li className="flex items-center gap-3">
                <RiUserLine />
                <Link to="/about">Sobre Mí</Link>
              </li>
              <li className="flex items-center gap-3">
                <AiOutlineAppstore />
                <Link to="/projects">Proyectos</Link>
              </li>
              <li className="flex items-center gap-3">
                <RiMessage3Line />
                <Link to="/contact">Contacto</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Footer */}
        <Footer />
      </header>
    </>
  );
};
