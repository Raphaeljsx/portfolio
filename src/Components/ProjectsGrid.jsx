import React from "react";
import {
  ReactICO,
  LogoJavascriptICO,
  NodeICO,
  WordpressICO,
  JqueryICO,
  VuelICO,
  MysqlICO,
  TypescriptICO,
  PrismaICO,
} from "../Helpers/Icons";
import { SiExpress } from "react-icons/si";

const projetos = {
  projects: [
    {
      id: 1,
      src: "/log.jpg",
      name: "Dogs - Uma Rede Social para Cachorros",
      description:
        "Desenvolvi uma rede social para cachorros no curso de React que fiz no site da Origamid.",
      technologies: [
        <ReactICO key={ReactICO} />,
        <LogoJavascriptICO key={LogoJavascriptICO} />,
        <NodeICO key={NodeICO} />,
      ],
      liveVersion: "https://dogs-snowy-iota.vercel.app/",
    },
    {
      id: 2,
      src: "/tech.png",
      name: "The TechHub",
      description:
        "Site feito com o objetivo de captar novos clientes os quais se interessassem em locação de locais.",
      technologies: [
        <WordpressICO key={WordpressICO} />,
        <LogoJavascriptICO key={LogoJavascriptICO} />,
        <JqueryICO key={JqueryICO} />,
      ],
      liveVersion: "https://thetechhub.com.br/",
    },
    {
      id: 3,
      src: "/Inspired.jpeg",
      name: "Inspired",
      description:
        "E-commerce como projeto de estudo como forma de aprimorar as minhas habilidades.",
      technologies: [
        <VuelICO key={VuelICO} />,
        <NodeICO key={NodeICO} />,
        <MysqlICO key={MysqlICO} />,
        <SiExpress key={MysqlICO} />,
        <TypescriptICO key={TypescriptICO} />,
        <PrismaICO key={PrismaICO} />,
      ],
      liveVersion: "https://github.com/Raphaeljsx/inspired",
    },
  ],
};

const ProjectsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 justify-center align-center dark:text-white mt-10 pb-20 md:pb-40">
      {projetos.projects.map((projeto) => (
        <div
          key={projeto.id}
          className="flex flex-col justify-center p-4 shadow-md"
        >
          <img src={projeto.src} alt={projeto.name} />
          <h3 className="font-bold mt-4 text-xl">{projeto.name}</h3>
          <p className="my-4">{projeto.description}</p>
          <div className="flex gap-3 text-3xl">{projeto.technologies}</div>
          <a
            href={projeto.liveVersion}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 self-start"
          >
            <button
              className="bg-teal-600 px-5 py-3 rounded-md text-white font-medium dark:text-black hover:bg-teal-700 dark:bg-white 
            dark:hover:bg-teal-600 dark:hover:text-white"
            >
              VER PROJETO
            </button>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectsGrid;
