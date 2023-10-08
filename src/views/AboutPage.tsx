// componentes
import { Tab } from "@components";

export const AboutPage = () => {
  return (
    <>
      <div className="h-full p-10 flex flex-col gap-5 overflow-y-scroll text-gray-700 scrollable">
        <h2 className="font-black text-3xl title__page font__poppins">
          Sobre Mí
        </h2>

        <div className="mt-3 flex flex-col gap-2">
          <span className="text-xl font-bold">Hola!,</span>
          <p className="leading-7">
            Soy Hilder Rody Huancas Chuquipoma, un desarrollador Full Stack de
            Perú. Me considero una persona comprometida con el crecimiento y el
            aprendizaje en el mundo del desarrollo, centrándome principalmente
            en el desarrollo web. Aunque mi trayectoria es aún breve, he tenido
            la oportunidad de sumergirme en diversos proyectos que me han
            permitido adquirir habilidades en el desarrollo de aplicaciones y
            sitios web. Cada línea de código que escribo representa una
            oportunidad para aprender y mejorar, y me emociona continuar
            explorando este fascinante mundo. Estoy ansioso por las próximas
            aventuras y desafíos que me esperan en este apasionante campo.
          </p>
        </div>

        <div className="mt-5">
          <h3 className="text-2xl font-bold subtitle__page">Mis Habilidades</h3>
          <div className="mt-5">
            <Tab />
          </div>
        </div>
      </div>
    </>
  );
};
