import { useState } from "react";
// iconos
import { BiLink } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { ListTechnologies } from "./ListTechnologies";

interface PropsCard {
  image: string;
  name: string;
  github: string;
  project: string;
  technologies: string[];
}

export const CardProject = ({
  image,
  name,
  github,
  project,
  technologies = [],
}: PropsCard) => {
  return (
    <div
      className={`w-full sm:w-[22rem] md:w-[18rem] lg:w-[22rem] h-52 rounded-lg shadow-lg overflow-hidden item__card relative font__poppins hovered`}
    >
      <img src={image} alt={name} className="w-full h-full" />

      <div className="overlay text-white flex flex-col gap-3">
        <h3 className="font-bold text-white text-sm md:text-2xl text-center">
          {name}
        </h3>
        <div className="hidden lg:flex flex-wrap justify-center gap-2 p-2 md:px-5">
          <ListTechnologies technologies={technologies} />
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-5 text-sm">
          {github && (
            <a
              href={github}
              target="_blank"
              className="flex items-center gap-3 font-medium bg-gray-100 py-2 px-4 rounded-lg text__container border-2 border-white hover:bg-transparent hover:text-white transition-colors duration-500 ease-linear w-full lg:w-auto"
            >
              <BsGithub /> Ver en GitHub
            </a>
          )}

          {project && (
            <a
              href={project}
              target="_blank"
              className="flex items-center gap-3 font-medium bg-gray-100 py-2 px-4 rounded-lg text__container border-2 border-white hover:bg-transparent hover:text-white transition-colors duration-500 ease-linear w-full lg:w-auto"
            >
              <BiLink /> Ver Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
