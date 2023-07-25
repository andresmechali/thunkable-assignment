// TODO: fix box-shadow
import AddProjectButton from "./AddProjectButton";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-gray-light flex flex-row flex-shrink-0 justify-center align-middle h-[124px] border-0 border-b-gray shadow-navbar">
      <section className="w-[1025px] flex flex-row justify-between items-end relative">
        <p className="text-gray-dark font-semibold leading-9 text-[16px] translate-x-[101px]">
          MY PROJECTS
        </p>
        <AddProjectButton />
      </section>
    </nav>
  );
};

export default Navbar;
