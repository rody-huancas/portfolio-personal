import { useLocation, NavLink } from "react-router-dom";
// Componentes
import { Footer } from "./Footer";
// Iconos
import { RiHomeLine, RiUserLine, RiMessage3Line } from "react-icons/ri";
import { AiOutlineAppstore } from "react-icons/ai";

export const Header = () => {
  const location = useLocation();
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
              <li
                className={`flex items-center gap-3 ${
                  location.pathname === "/" ? "item__menu-active" : ""
                }`}
              >
                <RiHomeLine />
                <NavLink to="/" className="transition-all duration-500">
                  Inicio
                </NavLink>
              </li>
              <li
                className={`flex items-center gap-3 ${
                  location.pathname === "/about" ? "item__menu-active" : ""
                }`}
              >
                <RiUserLine />
                <NavLink to="/about">Sobre Mí</NavLink>
              </li>
              <li
                className={`flex items-center gap-3 ${
                  location.pathname === "/projects" ? "item__menu-active" : ""
                }`}
              >
                <AiOutlineAppstore />
                <NavLink to="/projects">Proyectos</NavLink>
              </li>
              <li
                className={`flex items-center gap-3 ${
                  location.pathname === "/contact" ? "item__menu-active" : ""
                }`}
              >
                <RiMessage3Line />
                <NavLink to="/contact">Contacto</NavLink>
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
