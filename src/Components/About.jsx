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
} from "../Helpers/Icons";

const About = () => {
  return (
    <section>
      <div className="mt-10">
        <div className="grid grid-cols-1 justify-center items-center lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold py-2 dark:text-white">
              SOBRE MIM
            </h3>
            <p className="dark:text-white">
              Atualmente residindo em São Paulo, sou um Desenvolvedor Frontend
              com 4 anos de experiência no campo. Ao longo da minha trajetória
              profissional, tive a oportunidade de trabalhar com diversas
              linguagens. Possuo expertise em JavaScript, React, Vue, Node e
              Wordpress.
            </p>
          </div>
          <div className="h-full flex hidden justify-center items-center  lg:flex">
            <div className="h-60 dark:bg-white w-0.5 bg-gray-950"></div>
          </div>
          <div>
            <h3 className="text-xl font-bold py-2 dark:text-white">
              TECNOLOGIAS & HABILIDADES
            </h3>
            <span className="flex align-middle items-center gap-5 mt-5 font-bold  text-2xl dark:text-white ">
              <TerminalICO className="text-4xl" /> Back-end
            </span>
            <div className="flex align-middle mt-4 text-3xl gap-3 dark:text-white">
              <LogoJavascriptICO />
              <NodeICO />
              <PhpICO />
              <MysqlICO />
              <PostgresICO />
            </div>
            <span className="flex items-center gap-5 mt-10 font-bold  text-2xl dark:text-white">
              <CurlyICO className="text-4xl" /> Front-End
            </span>
            <div className="flex mt-4 text-3xl gap-3 dark:text-white">
              <LogoJavascriptICO />
              <ReactICO />
              <VuelICO />
              <WordpressICO />
              <HtmlICO />
              <CssICO />
              <TailwindICO />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
