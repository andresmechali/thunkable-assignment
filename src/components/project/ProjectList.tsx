// TODO: replace mocks with redux
// TODO: allow drag and drop
import Project from "./Project";

const projects: Project[] = [
  {
    id: "1",
    name: "asd",
  },
];

const ProjectList: React.FC = () => {
  return (
    <>
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </>
  );
};

export default ProjectList;
