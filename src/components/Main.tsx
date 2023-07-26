import Project from "./project/Project";
import ProjectList from "./project/ProjectList";
import { useAppSelector } from "../redux/hooks";

const Main: React.FC = () => {
  const ui = useAppSelector((state) => state.ui);

  return (
    <main className="w-full flex flex-col justify-start items-center pt-[71px] md:pt-[60px]">
      {ui.creating && <Project />}
      <ProjectList />
    </main>
  );
};

export default Main;
