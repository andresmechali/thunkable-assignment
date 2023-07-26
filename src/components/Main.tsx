import { useState } from "react";
import Project from "./project/Project";
import ProjectList from "./project/ProjectList";

const Main: React.FC = () => {
  const [showNewProject, setShowNewProject] = useState<boolean>(true);
  const [newProjectName, setNewProjectName] = useState<string>("");

  return (
    <main className="w-full flex flex-col justify-start items-center pt-[71px] md:pt-[60px]">
      {showNewProject && <Project />}
      <ProjectList />
    </main>
  );
};

export default Main;
