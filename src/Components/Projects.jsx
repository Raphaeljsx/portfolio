import ProjectsGrid from "./ProjectsGrid";

const Projects = () => {
  return (
    <section className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
      <div className="text-center mt-16 dark:text-white">
        <h3 className="text-2xl font-bold text-center mb-4 md:text-3xl">MEUS PROJETOS</h3>
        <p className="text-sm md:text-base text-center leading-6 text-muted-foreground tracking-tight dark:text-gray-400">
          Aqui estão alguns dos meus projetos mais recentes, tanto
     
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
