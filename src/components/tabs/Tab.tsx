import { useState } from "react";
// Componentes
import { ButtonSkill } from "@components";
// Iconos
import { icons } from "@helpers/icons";

export const Tab = () => {
  const [openTab, setOpenTab] = useState(1);

  const handleTabChange = (tab: number) => {
    setOpenTab(tab);
  };

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="grid grid__tabs gap-3">
            <button
              className={
                "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                (openTab === 1
                  ? "text-white bg__container"
                  : "text__container bg-white")
              }
              onClick={() => handleTabChange(1)}
              role="tablist"
            >
              Frontend
            </button>

            <button
              className={
                "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                (openTab === 2
                  ? "text-white bg__container"
                  : "text__container bg-white")
              }
              onClick={() => handleTabChange(2)}
              role="tablist"
            >
              Backend
            </button>

            <button
              className={
                "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                (openTab === 3
                  ? "text-white bg__container"
                  : "text__container bg-white")
              }
              onClick={() => handleTabChange(3)}
              role="tablist"
            >
              Bases de datos
            </button>

            <button
              className={
                "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                (openTab === 4
                  ? "text-white bg__container"
                  : "text__container bg-white")
              }
              onClick={() => handleTabChange(4)}
              role="tablist"
            >
              Diseño
            </button>

            <button
              className={
                "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                (openTab === 5
                  ? "text-white bg__container"
                  : "text__container bg-white")
              }
              onClick={() => handleTabChange(5)}
              role="tablist"
            >
              Herramientas
            </button>
          </div>

          <div className="flex flex-col bg__container text-white w-full mb-6 mt-5 py-5 px-2 rounded-lg shadow-md overflow-x-hidden">
            <div className="px-2 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"}>
                  <div className="grid__buttons">
                    <ButtonSkill Icon={icons.RiHtml5Fill} text="Html" />
                    <ButtonSkill Icon={icons.RiCss3Fill} text="Css" />
                    <ButtonSkill Icon={icons.FaSass} text="Sass" />
                    <ButtonSkill
                      Icon={icons.BsBootstrapFill}
                      text="Bootstrap"
                    />
                    <ButtonSkill Icon={icons.SiTailwindcss} text="Tailwind" />
                    <ButtonSkill Icon={icons.SiJavascript} text="JavaScript" />
                    <ButtonSkill Icon={icons.SiTypescript} text="TypeScript" />
                    <ButtonSkill Icon={icons.RiReactjsLine} text="React" />
                    <ButtonSkill Icon={icons.SiJquery} text="JQuery" />
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"}>
                  <div className="grid__buttons">
                    <ButtonSkill Icon={icons.SiPhp} text="Php" />
                    <ButtonSkill Icon={icons.FaPython} text="Python" />
                    <ButtonSkill Icon={icons.SiDjango} text="Django" />
                    <ButtonSkill Icon={icons.FaLaravel} text="Laravel" />
                    <ButtonSkill
                      Icon={icons.SiCodeigniter}
                      text="Codeigniter"
                    />
                    <ButtonSkill Icon={icons.FaNodeJs} text="Node.js" />
                    <ButtonSkill Icon={icons.SiExpress} text="Express.js" />
                  </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"}>
                  <div className="grid__buttons">
                    <ButtonSkill
                      Icon={icons.BiLogoPostgresql}
                      text="Postgres"
                    />
                    <ButtonSkill Icon={icons.GrMysql} text="MySQL" />
                    <ButtonSkill Icon={icons.SiMongodb} text="MongoDB" />
                    <ButtonSkill
                      Icon={icons.SiMicrosoftsqlserver}
                      text="SQL Server"
                    />
                  </div>
                </div>
                <div className={openTab === 4 ? "block" : "hidden"}>
                  <div className="grid__buttons">
                    <ButtonSkill Icon={icons.FaFigma} text="Figma" />
                    <ButtonSkill
                      Icon={icons.SiAdobephotoshop}
                      text="Photoshop"
                    />
                  </div>
                </div>
                <div className={openTab === 5 ? "block" : "hidden"}>
                  <div className="grid__buttons">
                    <ButtonSkill Icon={icons.BsGit} text="Git" />
                    <ButtonSkill Icon={icons.BsGithub} text="GitHub" />
                    <ButtonSkill Icon={icons.FaDocker} text="Docker" />
                    <ButtonSkill Icon={icons.SiPostman} text="Postman" />
                    <ButtonSkill Icon={icons.BsTrello} text="Trello" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
