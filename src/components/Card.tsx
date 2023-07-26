import { ReactNode, FC, useRef, useEffect } from "react";
import logo from "../assets/ProjectIcon.png";

const Card: FC<{ children: ReactNode; onClickOutside?: VoidFunction }> = ({
  children,
  onClickOutside,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Listens to clicks outside its children and runs callback
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        if (onClickOutside) {
          onClickOutside();
        }
      }
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return (
    <div
      ref={ref}
      className="flex flex-row items-center w-full md:w-[800px] h-[86px] md:h-[70px] pl-4 md:pl-6 pr-4 md:pr-8 pt-4 pb-4 bg-white border-t-gray-line border-b border-b-gray-line first:border-t"
    >
      {/* Logo */}
      <img src={logo} width={32} alt="logo" className="mr-4 md:mr-6" />

      {children}
    </div>
  );
};

export default Card;
