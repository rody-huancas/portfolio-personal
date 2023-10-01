export const HomePage = () => {
  return (
    <>
      <div className="relative w-full h-full bg__container rounded-xl flex items-center justify-center">
        <div className="overlay-bg"></div>
        <div className="flex flex-col items-start justify-center gap-7 px-24 text-gray-100 z-40">
          <h2 className="font-extrabold text-6xl font__poppins">
            Soy <span className="text-white">Rody Huancas</span>
            <small className="text-[#ff5959]">.</small>
          </h2>
          <p className="text-xl">
            Soy un desarrollador web Full Stack con experiencia en el desarrollo
            web, apasionado por el aprendizaje autodidacta y la aplicación
            práctica de nuevas tecnologías.
          </p>

          <div className="flex items-center gap-5">
            <button className="px-8 py-2 rounded-lg button__cv font-medium cursor-pointer">
              Descargar CV
            </button>
            <a
              href=""
              className="px-8 py-2 rounded-lg button__github font-medium cursor-pointer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
