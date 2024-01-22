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
        className={`md:w-96 bg-secondary-100 md:rounded-xl py-10 px-8 shadow-lg text-white md:flex flex-col justify-between transition-all duration-300 fixed md:left-0 md:static top-0 z-50 w-full h-screen md:h-auto rounded-none ${
          showMenu ? "left-0" : "-left-full"
        }`}
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
                className={`flex items-center gap-3 transition-all duration-300 ease-in-out ${
                  location.pathname === "/" ? "item__menu-active" : ""
                }`}
              >
                <RiHomeLine />
                <NavLink to="/" onClick={onClickNavLink}>
                  Inicio
                </NavLink>
              </li>
              <li
                className={`flex items-center gap-3 transition-all duration-300 ease-in-out ${
                  location.pathname === "/about" ? "item__menu-active" : ""
                }`}
              >
                <RiUserLine />
                <NavLink to="/about" onClick={onClickNavLink}>
                  Sobre Mí
                </NavLink>
              </li>
              <li
                className={`flex items-center gap-3 transition-all duration-300 ease-in-out ${
                  location.pathname === "/projects" ? "item__menu-active" : ""
                }`}
              >
                <AiOutlineAppstore />
                <NavLink to="/projects" onClick={onClickNavLink}>
                  Proyectos
                </NavLink>
              </li>
              <li
                className={`flex items-center gap-3 transition-all duration-300 ease-in-out ${
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
            ? "bg-secondary-100 text-primary-100 border-primary-100"
            : "bg-primary-100 text-secobg-secondary-100 border-primary-100"
        }`}
        onClick={onClickShowMenu}
      >
        <RiMenu4Line />
      </button>
    </>
  );
};
