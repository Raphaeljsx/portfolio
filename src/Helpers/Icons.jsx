import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import PropTypes from "prop-types";

import { GoTerminal } from "react-icons/go";
import { SiJavascript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { FaVuejs } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { SiPrisma } from "react-icons/si";

export const DarkModeICO = () => <BsFillMoonStarsFill />;
export const LinkedinICO = () => <AiFillLinkedin />;
export const GithubICO = () => <AiFillGithub />;
export const TerminalICO = ({ className }) => (
  <GoTerminal className={className} />
);
export const JavascriptICO = () => <SiJavascript />;
export const NodeICO = () => <FaNodeJs />;
export const PhpICO = () => <SiPhp />;
export const PostgresICO = () => <SiPostgresql />;
export const LogoJavascriptICO = () => <IoLogoJavascript />;
export const ReactICO = () => <FaReact />;
export const MysqlICO = () => <SiMysql />;
export const VuelICO = () => <FaVuejs />;
export const WordpressICO = () => <FaWordpress />;
export const HtmlICO = () => <FaHtml5 />;
export const CssICO = () => <FaCss3Alt />;
export const TailwindICO = () => <SiTailwindcss />;
export const CurlyICO = ({ className }) => <FaCode className={className} />;
export const JqueryICO = () => <DiJqueryLogo />;
export const TypescriptICO = () => <SiTypescript />;
export const PrismaICO = () => {
  <SiPrisma />;
};

TerminalICO.propTypes = {
  className: PropTypes.text || PropTypes.func,
};

CurlyICO.propTypes = {
  className: PropTypes.text,
};
