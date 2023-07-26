import { Button } from "antd";
import { ReactComponent as PlusSign } from "../assets/PlusSign.svg";

const AddProjectButton: React.FC = () => {
  const handleClick = () => {
    // TODO
  };

  return (
    <Button
      type="primary"
      shape="circle"
      onClick={handleClick}
      icon={<PlusSign />}
      size="large"
      className="absolute right-[21px] bottom-[45px] md:top-[30px] md:right-0 md:relative flex justify-center items-center bg-add-button active:focus:hover:bg-add-button-hover hover:bg-add-button-hover drop-shadow-add-button w-[60px] h-[60px]"
    />
  );
};

export default AddProjectButton;
