// TODO: replace mocks with redux
// TODO: allow drag and drop
import Project from "./Project";

const projects: ProjectType[] = [
  {
    id: "1",
    name: "Currency App",
    created: new Date().getTime(),
  },
  {
    id: "2",
    name: "Hello App",
    created: new Date().getTime(),
  },
  {
    id: "3",
    name: "Video",
    created: new Date().getTime(),
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
