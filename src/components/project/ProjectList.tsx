// TODO: replace mocks with redux
// TODO: allow drag and drop
import Project from "./Project";
import { useAppSelector } from "../../redux/hooks";

const ProjectList: React.FC = () => {
  const projects = useAppSelector((state) => state.projects);
  return (
    <>
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </>
  );
};

export default ProjectList;
