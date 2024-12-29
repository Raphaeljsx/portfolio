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
  PhpICO,
  TailwindICO,
  JavascriptICO,
} from "../Helpers/Icons";
import { SiExpress } from "react-icons/si";

const projetos = {
  projects: [
    {
      id: 1,
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
      dateCreation: '2021',
      status: true
    },
    {
      id: 2,
      src: "/Inspired.jpeg",
      name: "Inspired",
      description:
        "E-commerce feito como projeto de estudo com foco em aprimorar as minhas habilidades.",
      technologies: [
        <VuelICO key={VuelICO} />,
        <NodeICO key={NodeICO} />,
        <MysqlICO key={MysqlICO} />,
        <SiExpress key={MysqlICO} />,
        <TypescriptICO key={TypescriptICO} />,
        <PrismaICO key={PrismaICO} />,
      ],
      liveVersion: "https://github.com/Raphaeljsx/inspired",
      dateCreation: '2023',
      status: true
    },
    {
      id: 3,
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
      dateCreation: '2024',
      status: true
    },
    {
      id: 4,
      src: "/moneytech.png",
      name: "Money Tech",
      description:
        "Aplicação feita para simular um Dashboard com consumo de Api Rest (React e Typescript).",
      technologies: [
        <ReactICO key={ReactICO} />,
        <TypescriptICO key={TypescriptICO} />,
      ],
      liveVersion: "https://money-tech.vercel.app/",
      dateCreation: '2024',
      status: false
    },
    {
      id: 5,
      src:"/instituto.png",
      name: "Instituto Calmont",
      description:
      "Site criado para o Instituto Calmont, com o objetivo de divulgar serviços e profissionais. Além de captar novos clientes e disponibilizar informações de saúde na área de blog.",
      liveVersion: "https://institutocalmont.com.br/",
      technologies: [
        <WordpressICO key={WordpressICO} />,
        <PhpICO key={PhpICO} />,
        <TailwindICO key={TailwindICO} />,
        <JqueryICO key={JqueryICO} />,
        <JavascriptICO key={JavascriptICO} />,
      ],
      dateCreation: '2024',
      status: true
    },
    {
      id: 6,
      src: "/trevisolucoes.png",
      description:
      "Site criado para a empresa Trevisoluções, com o objetivo de divulgar serviços e profissionais. Além de captar novos clientes.",
      liveVersion: "https://trevisolucoeslean.com.br/",
      technologies: [
        <WordpressICO key={WordpressICO} />,
        <PhpICO key={PhpICO} />,
        <TailwindICO key={TailwindICO} />,
        <JqueryICO key={JqueryICO} />,
        <JavascriptICO key={JavascriptICO} />,
      ],
      dateCreation: '2024',
      status: true
    },
    {
      id: 7,
      src: "/storaze.png",
      name: "Storaze",
      description:
      "Site criado para a empresa Storaze, com o objetivo de divulgar serviços e profissionais. Além de captar novos clientes e disponibilizar informações sobre os serviços prestados.",
      liveVersion: "https://storaze.com.br/",
      technologies: [
        <ReactICO key={ReactICO} />,
        <TailwindICO key={TailwindICO} />,
        <JavascriptICO key={JavascriptICO} />,
        <WordpressICO key={WordpressICO} />,
        <PhpICO key={PhpICO} />,
      ],
      dateCreation: '2024',
      status: true
    }
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
          <a
              href={projeto.liveVersion}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <img className="w-full h-48 object-cover" src={projeto.src} alt={projeto.name} />
            </a>
          
         <div className="p-4">
         
          <h3 className="tracking-tight text-lg font-bold">{projeto.name}</h3>
          <p className="text-sm dark:text-gray-400 mb-5">{projeto.description}</p>
          <span className="text-sm dark:text-gray-400 mb-5">{projeto.dateCreation}</span>
    
          <div className="flex flex-col-reverse md:flex-row md:justify-between   items-center mt-4">
            <a
              href={projeto.liveVersion}
              target="_blank"
              rel="noopener noreferrer"
              className=" self-start mt-5 md:mt-0"
            >

            {projeto .status ? <button
                className="text-white inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium 
                ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
                focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground 
                hover:bg-primary/90 h-10 px-4 py-2 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
               
                Ver Projeto
              </button> :  
              
              <button
              disabled
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium 
                ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
                focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-600 text-primary-foreground 
                hover:bg-primary/90 h-10 px-4 py-2 lg:opacity-0 "
              >
               
               Em desenvolvimento
              </button>
              
              }
              
            </a>
            <div className="flex self-start md:self-center space-x-2 text-2xl">
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
