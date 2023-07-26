import { Button } from "antd";
import { ReactComponent as PlusSign } from "../assets/PlusSign.svg";

const AddProjectButton: React.FC = () => {
  const handleClick = () => {
    // TODO
  };

  // TODO: review position - button jumps when resizing
  return (
    <Button
      type="primary"
      shape="circle"
      onClick={handleClick}
      icon={<PlusSign />}
      size="large"
      className="absolute right-[21px] bottom-[45px] md:top-[94px] md:right-[64px] lg:relative lg:top-[30px] flex justify-center items-center bg-add-button active:focus:hover:bg-add-button-hover hover:bg-add-button-hover drop-shadow-add-button w-[60px] h-[60px]"
    />
  );
};

export default AddProjectButton;
