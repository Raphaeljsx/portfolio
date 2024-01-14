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
      name: "Dogs - Uma Rede Social",
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
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 dark:text-white">
      {projetos.projects.map((projeto) => (
        <div
          key={projeto.id}
          className="rounded-lg border dark:border-slate-700  dark:bg-card text-card-foreground shadow-sm group overflow-hidden transition-transform duration-200 ease-in-out transform hover:scale-105"
        >
          <img className="w-full h-48 object-cover" src={projeto.src} alt={projeto.name} />
         <div className="p-4">
         
          <h3 className="tracking-tight text-lg font-bold">{projeto.name}</h3>
          <p className="text-sm dark:text-gray-400">{projeto.description}</p>
    
          <div className="flex justify-between items-center mt-4">
            <a
              href={projeto.liveVersion}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 self-start"
            >
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
                Ver projeto
              </button>
            </a>
            <div className="flex space-x-2 text-2xl">
          {projeto.technologies}
          </div>
          </div>
          
         </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsGrid;
