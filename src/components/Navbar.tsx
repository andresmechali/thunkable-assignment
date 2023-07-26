// TODO: fix box-shadow
import AddProjectButton from "./AddProjectButton";
import logo from "../assets/ThunkableBeaver.png";

const Navbar: React.FC = () => {
  return (
    <div className="flex flex-row justify-center w-full shadow-navbar bg-gray-light border-0 border-b-gray">
      <nav className="flex flex-row w-full lg:w-[1025px] flex-shrink-0 justify-center items-end h-[124px] px-4 md:px-16">
        <p className="h-full flex flex-col justify-end relative flex-1 text-gray-dark font-semibold leading-9 text-[16px]">
          MY PROJECTS
          <div className="absolute top-4">
            <img src={logo} alt="" width={32} />
          </div>
        </p>
        <AddProjectButton />
      </nav>
    </div>
  );
};

export default Navbar;
