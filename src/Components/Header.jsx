import { DarkModeICO } from "../Helpers/Icons";
import PropTypes from "prop-types";
import { LinkedinICO, GithubICO } from "../Helpers/Icons";
import photo from "../assets/eu.jpeg";
import Typewriter from "./Typewriter";

const Header = ({ onClick }) => {
  return (
    <header>
      <nav className="flex justify-between fixed w-full z-10 backdrop-blur-sm py-5 px-10">
        <h1 className="text-xl font-salsa dark:text-white">DEV</h1>
        <ul className="flex items-center">
          <button
            onClick={onClick}
            className="text-2xl cursor-pointer dark:text-gray-100"
          >
            <DarkModeICO />
          </button>
          <li>
            <a
              href="./cv.pdf"
              download
              className="bg-primary text-white px-6 py-2 border-none rounded-md ml-8"
            >
              CV
            </a>
          </li>
        </ul>
      </nav>
     
    </header>
  );
};

Header.propTypes = {
  onClick: PropTypes.func,
};

export default Header;
