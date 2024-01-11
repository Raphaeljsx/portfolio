import { DarkModeICO } from "../Helpers/Icons";
import PropTypes from "prop-types";
import { LinkedinICO, GithubICO } from "../Helpers/Icons";
import photo from "../assets/eu.jpeg";
import Typewriter from "./Typewriter";

const Header = ({ onClick }) => {
  return (
    <>
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-xl font-salsa dark:text-white">Portfolio</h1>
        <ul className="flex items-center">
          <button
            onClick={onClick}
            className="text-2xl cursor-pointer dark:text-white"
          >
            <DarkModeICO />
          </button>
          <li>
            <a
              href="./vc.pdf"
              download
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-2 border-none rounded-md ml-8"
            >
              CV
            </a>
          </li>
        </ul>
      </nav>
      <div className="text-center md:p-10">
        <h3 className="text-lg dark:text-white">
          OLÁ, MEU NOME É RAPHAEL ALVES DE OLIVEIRA!
        </h3>
        <h1 className="text-3xl md:text-5xl py-2 text-teal-600 font-bold">
          <Typewriter text="  Desenvolvedor Full-Stack" />
        </h1>
        <h3 className="text-2xl py-2 dark:text-white"></h3>
        <p className="text-md py-5 leading-8 text-gray-800 dark:text-white animate-animeLeft">
          Sou um desenvolvedor apaixonado por criar soluções tecnológicas
          inovadoras. <br className="hidden md:block" /> Tenho um forte
          background em programação web e estou constantemente aprendendo e
          aprimorando minhas habilidades. <br className="hidden md:block" />
          Estou interessado em <b>Front-End</b> e <b>Back-End</b>.
        </p>
        <div className="flex text-5xl justify-center gap-16 py-3 text-gray-600 dark:text-white animate-animeLeft">
          <a
            href="https://www.linkedin.com/in/oliveiralvesdev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-600"
          >
            <LinkedinICO />
          </a>
          <a
            href="https://github.com/Raphaeljsx"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-600"
          >
            <GithubICO />
          </a>
        </div>
        <div className="relative mx-auto w-60 h-60 mt-20 animate-blink">
          <img
            className="rounded-full overflow-hidden"
            src={photo}
            alt="Raphael Alves de Oliveira"
          />
        </div>
      </div>
    </>
  );
};

Header.propTypes = {
  onClick: PropTypes.func,
};

export default Header;
