import {
  TerminalICO,
  NodeICO,
  PhpICO,
  MysqlICO,
  PostgresICO,
  LogoJavascriptICO,
  ReactICO,
  VuelICO,
  WordpressICO,
  HtmlICO,
  CssICO,
  TailwindICO,
  CurlyICO,
  CodeIcon2,
  FaTerminalIcon2,
  GithubICO,
  LinkedinICO,
} from "../Helpers/Icons";
import Typewriter from "./Typewriter";

const About = () => {
  return (
    
    <section>
       <div className="text-center pt-40 md:p-10">
        <h3 className="text-2xl font-semibold tracking-tighter text-gray-500 dark:text-gray-400  sm:text-3xl md:text-4xl lg:text-5xl/none md:mt-40 py-1">
        
          Olá, meu nome é Raphael Oliveira!
        </h3>
        <h1 className="text-3xl text-primary font-bold capitalize tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
          <Typewriter text="  Desenvolvedor Full-Stack" />
        </h1>
      
        <p className="text-md py-5 leading-6 text-gray-800 dark:text-gray-400 animate-animeLeft">
          Sou um desenvolvedor apaixonado por criar soluções tecnológicas
          inovadoras. <br className="hidden md:block" /> Tenho um forte
          background em programação web e estou constantemente aprendendo e
          aprimorando minhas habilidades. <br className="hidden md:block" />
          Estou interessado em <b>Front-End</b> e <b>Back-End</b>.
        </p>
        <div className="flex text-5xl justify-center gap-3 py-3 text-gray-600  dark:text-gray-400 animate-animeLeft">
          <a
            href="https://github.com/Raphaeljsx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl md:text-3xl lg:text-5xl hover:opacity-80   hover:text-primary"
          >
            <GithubICO />
          </a>
          <a
            href="https://www.linkedin.com/in/oliveiralvesdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl md:text-3xl lg:text-5xl hover:opacity-80   hover:text-primary "
          >
            <LinkedinICO />
          </a>
        </div>
        
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 justify-center items-center  md:gap-0">
          <div>
            <h3 className="text-lg font-bold tracking-tighter md:text-2xl uppercase dark:text-gray-200">
              SOBRE MIM
            </h3>
            <p className="text-sm md:text-base leading-6 text-muted-foreground tracking-tight dark:text-gray-400 ">
              Atualmente residindo em São Paulo, sou um Desenvolvedor Frontend
              com 4 anos de experiência no campo. Ao longo da minha trajetória
              profissional, tive a oportunidade de trabalhar com diversas
              linguagens. Possuo expertise em JavaScript, React, Vue, Node e
              Wordpress.
            </p>
          </div>
          <div data-orientation="horizontal" role="none" className=" flex shrink-0 bg-border h-[1px] w-full my-4 dark:bg-gray-800"></div>
          <div>
            <h3 className="text-lg font-bold uppercase tracking-tighter md:text-2xl dark:text-gray-200">
            tecnologias e habilidades
            </h3>
            <p className="text-sm  text-muted-foreground md:text-base dark:text-gray-400">Minhas habilidades incluem:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-4 mb-10">
            <div id="front">
              <span className="flex font-semibold items-center text-xl md:text-2xl lg:text-3xl space-x-2 mb-4 dark:text-gray-200">
                <FaTerminalIcon2 className="text-4xl" /> Front-End
              </span>
              <div className="flex space-x-2 text-2xl md:text-3xl lg:text-4xl dark:text-white">
                <LogoJavascriptICO />
                <ReactICO />
                <VuelICO />
                <WordpressICO />
                <HtmlICO />
                <CssICO />
                <TailwindICO />
              </div>
            </div>
            <div id="backend">
              
              <span className="flex font-semibold items-center text-xl md:text-2xl lg:text-3xl space-x-2 mb-4 dark:text-gray-200">
                <CodeIcon2 className="text-4xl" /> Back-end
              </span>
              <div className="flex space-x-2 text-2xl md:text-3xl lg:text-4xl dark:text-white">
                <LogoJavascriptICO />
                <NodeICO />
                <PhpICO />
                <MysqlICO />
                <PostgresICO />
              </div>
            </div>
           
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
