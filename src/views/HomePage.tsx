//iconos
import { HiOutlineDocumentText } from "react-icons/hi";
import { RiGithubFill } from "react-icons/ri";

export const HomePage = () => {
  return (
    <>
      <div className="relative w-full h-full bg-secondary-100 p-5 md:p-0 rounded-xl flex items-center justify-center overflow-x-hidden">
        <div className="overlay-bg"></div>
        <div className="flex flex-col items-start justify-center gap-7 p-5 md:px-10 lg:px-20 text-gray-100 z-40">
          <h2 className="font-extrabold text-6xl text-center md:text-left">
            Soy <span className="text-white">Rody Huancas</span>
            <small className="text-[#ff5959]">.</small>
          </h2>
          <p className="text-lg">
            Un desarrollador Full Stack apasionado por la tecnología. Transformo
            ideas en realidad a través del código. ¡Bienvenido a mi portafolio!
          </p>

          <div className="w-full flex flex-col sm:flex-row items-center gap-5">
            <a
              href="/cv-rody-huancas.pdf"
              download
              className="w-full md:w-auto px-8 py-2.5 rounded-full button__cv font-medium cursor-pointer flex items-center justify-center gap-2"
            >
              <HiOutlineDocumentText />
              Descargar CV
            </a>
            <a
              href="https://github.com/rody-huancas"
              target="_blank"
              className="w-full md:w-auto px-8 py-2.5 rounded-full button__github font-medium cursor-pointer flex items-center justify-center gap-2"
            >
              <RiGithubFill />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
