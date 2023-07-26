import AddProjectButton from "./AddProjectButton";
import logo from "../assets/ThunkableBeaver.png";

const Navbar: React.FC = () => {
  return (
    <div className="flex flex-row justify-center w-full shadow-navbar bg-gray-light border-0 border-b-gray">
      <nav className="flex flex-row w-full max-w-[800px] flex-shrink-0 justify-center items-end h-[124px] px-4 md:p-0">
        <div className="h-full flex flex-col justify-end relative flex-1 text-gray-dark font-semibold leading-9 text-[16px]">
          <p>MY PROJECTS</p>
          <div className="absolute top-4">
            <img src={logo} alt="logo" width={32} />
          </div>
        </div>
        <AddProjectButton />
      </nav>
    </div>
  );
};

export default Navbar;
