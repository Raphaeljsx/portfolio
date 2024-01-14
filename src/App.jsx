import { useState } from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

function App() {
  const [darkmode, setDarkMode] = useState(true);

  function darkMode() {
    setDarkMode(!darkmode);
  }

  return (
    <div className={darkmode ? "dark" : ""}>
      <div className="bg-white dark:bg-darker">
      <Header onClick={darkMode} />
        <div className="mx-auto max-w-screen-xl p-4">
     
          <About />
          <Projects />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
