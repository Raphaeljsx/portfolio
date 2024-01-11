import ProjectsGrid from "./ProjectsGrid";

const Projects = () => {
  return (
    <section>
      <div className="text-center mt-16 dark:text-white">
        <h3 className="text-xl font-bold">MEUS PROJETOS</h3>
        <p className="leading-6 font-medium mt-3">
          Aqui estão alguns dos meus projetos mais recentes, tanto
          <br className="hidden md:block" />
          comerciais quanto pessoais.
        </p>
      </div>
      <div>
        <ProjectsGrid />
      </div>
    </section>
  );
};

export default Projects;
