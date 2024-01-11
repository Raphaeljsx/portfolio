import { useState } from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

function App() {
  const [darkmode, setDarkMode] = useState(false);

  function darkMode() {
    setDarkMode(!darkmode);
  }

  return (
    <div className={darkmode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <Header onClick={darkMode} />
        </section>
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
