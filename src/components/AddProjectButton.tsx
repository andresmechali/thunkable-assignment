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
      style={{
        width: "60px",
        height: "60px",
      }}
      onClick={handleClick}
      icon={<PlusSign width={60} />}
      size="large"
      className="flex justify-center items-center bg-add-button active:focus:hover:bg-add-button-hover drop-shadow-add-button translate-y-[50%] translate-x-[-130px]"
    />
  );
};

export default AddProjectButton;
