import { useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
// Componentes
import { Footer } from "./Footer";
// Iconos
import {
  RiHomeLine,
  RiUserLine,
  RiMessage3Line,
  RiMenu4Line,
} from "react-icons/ri";
import { AiOutlineAppstore } from "react-icons/ai";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const onClickShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const onClickNavLink = () => {
    setShowMenu(false);
  };

  return (
    <>
      <header
        className={`lg:w-96 bg-secondary-100 rounded-xl py-10 px-8 shadow-lg text-white md:flex flex-col justify-between ${
          showMenu ? "header__top" : "hidden"
        }`}
        style={{
          animation: showMenu ? "slideIn 0.3s ease-in-out" : "",
        }}
      >
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
            <ul className="flex flex-col gap-6 md:gap-4 font-medium">
              <li
                className={`flex items-center gap-3 ${
                  location.pathname === "/" ? "item__menu-active" : ""
                }`}
              >
                <RiHomeLine />
                <NavLink
                  to="/"
                  className="transition-all duration-500"
                  onClick={onClickNavLink}
                >
                  Inicio
                </NavLink>
              </li>
              <li
                className={`flex items-center gap-3 ${
                  location.pathname === "/about" ? "item__menu-active" : ""
                }`}
              >
                <RiUserLine />
                <NavLink to="/about" onClick={onClickNavLink}>
                  Sobre Mí
                </NavLink>
              </li>
              <li
                className={`flex items-center gap-3 ${
                  location.pathname === "/projects" ? "item__menu-active" : ""
                }`}
              >
                <AiOutlineAppstore />
                <NavLink to="/projects" onClick={onClickNavLink}>
                  Proyectos
                </NavLink>
              </li>
              <li
                className={`flex items-center gap-3 ${
                  location.pathname === "/contact" ? "item__menu-active" : ""
                }`}
              >
                <RiMessage3Line />
                <NavLink to="/contact" onClick={onClickNavLink}>
                  Contacto
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        {/* Footer */}
        <Footer />
      </header>

      <button
        className={`button__menu md:hidden border-2 ${
          !showMenu
            ? "bg-blue-700 text-white border-white"
            : "bg-white text-blue-700 border-white"
        }`}
        onClick={onClickShowMenu}
      >
        <RiMenu4Line />
      </button>
    </>
  );
};
