// componentes
import { ButtonSkill } from "@components";
// Iconos
import { RiHtml5Fill } from "react-icons/ri";

export const AboutPage = () => {
  return (
    <>
      <div className="h-full p-10 flex flex-col gap-5 overflow-y-scroll scrollable">
        <h2 className="font-black text-3xl text-gray-700 title__page">
          Sobre Mí
        </h2>

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
          <h3 className="title__page text-2xl font-bold">Mis Habilidades</h3>

          <div className="mt-7 grid__buttons">
            <ButtonSkill Icon={RiHtml5Fill} text={"HTML"} />
            <ButtonSkill Icon={RiHtml5Fill} text={"CSS"} />
            <ButtonSkill Icon={RiHtml5Fill} text={"SASS"} />
            <ButtonSkill Icon={RiHtml5Fill} text={"BOOTSTRAP"} />
            <ButtonSkill Icon={RiHtml5Fill} text={"TAILWIND CSS"} />
            <ButtonSkill Icon={RiHtml5Fill} text={"JQUERY"} />
            <ButtonSkill Icon={RiHtml5Fill} text={"JAVASCRIPT"} />
            <ButtonSkill Icon={RiHtml5Fill} text={"TYPESCRIPT"} />
            <ButtonSkill Icon={RiHtml5Fill} text={"REACT"} />
            <ButtonSkill Icon={RiHtml5Fill} text={"PHP"} />
            <ButtonSkill Icon={RiHtml5Fill} text={"PYTHON"} />
            <ButtonSkill Icon={RiHtml5Fill} text={"DJANGO"} />
            <ButtonSkill Icon={RiHtml5Fill} text={"CODEIGNITER"} />
            <ButtonSkill Icon={RiHtml5Fill} text={"LARAVEL"} />
            <ButtonSkill Icon={RiHtml5Fill} text={"NODE.JS"} />
            <ButtonSkill Icon={RiHtml5Fill} text={"STRAPI"} />
            <ButtonSkill Icon={RiHtml5Fill} text={"MYSQL"} />
            <ButtonSkill Icon={RiHtml5Fill} text={"POSTGRES"} />
            <ButtonSkill Icon={RiHtml5Fill} text={"MONGODB"} />
            <ButtonSkill Icon={RiHtml5Fill} text={"SQL SERVER"} />
            <ButtonSkill Icon={RiHtml5Fill} text={"DOCKER"} />
            <ButtonSkill Icon={RiHtml5Fill} text={"GIT"} />
            <ButtonSkill Icon={RiHtml5Fill} text={"GITHUB"} />
          </div>
        </div>
      </div>
    </>
  );
};
