import { FC } from "react";
import ProjectList from "./ProjectList";
import { useAppSelector } from "../redux/hooks";
import NewProject from "./NewProject";

const Main: FC = () => {
  const ui = useAppSelector((state) => state.ui);

  return (
    <main className="w-full flex flex-col justify-start items-center pt-[71px] md:pt-[60px] overflow-auto">
      {ui.creating && <NewProject />}
      <ProjectList />
    </main>
  );
};

export default Main;
