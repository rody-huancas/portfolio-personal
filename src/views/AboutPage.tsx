// componentes
import { ButtonSkill, Tab } from "@components";

export const AboutPage = () => {
  return (
    <>
      <div className="h-full p-10 flex flex-col gap-5 overflow-y-scroll text-gray-700 scrollable">
        <h2 className="font-black text-3xl title__page">Sobre Mí</h2>

        <div className="mt-3 flex flex-col gap-2">
          <span className="text-xl font-bold">Hola!,</span>
          <p className="leading-7">
            Soy Hilder Rody Huancas Chuquipoma, estudiante de la carrera de
            Ingeniería de Sistemas, actualmente me desempeño como desarrollador
            web frontend, pero también tengo conocimientos en backend. Soy una
            persona resolutiva, con capacidad para adaptarme a equipos y con
            ganas de seguir aprendiendo nuevas tecnologías.
          </p>
        </div>

        <div className="mt-5">
          <h3 className="text-xl font-bold">Mis Habilidades</h3>
          <div className="mt-7">
            <Tab />
          </div>
        </div>
      </div>
    </>
  );
};
