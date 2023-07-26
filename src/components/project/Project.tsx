import logo from "../../assets/ProjectIcon.png";
import { useState } from "react";
import { Form, Input } from "antd";

type Props = {
  project?: Project;
};

const Project: React.FC<Props> = ({ project }) => {
  const [isNaming, setIsNaming] = useState<boolean>(!project);

  const onCreate = ({ projectName }: { projectName: string }) => {
    if (projectName) {
      // TODO: create project
      console.log(projectName);
    }
  };

  const onRename = ({ projectName }: { projectName: string }) => {
    if (projectName) {
      console.log(projectName);
      // TODO: update name
    }
  };

  function renderCreating() {
    return (
      <Form name="create" onFinish={onCreate} autoComplete="off">
        <Form.Item name="projectName" className="mb-0">
          <Input
            placeholder="Name your project"
            className="rounded-sm text-[16px]"
          />
        </Form.Item>
      </Form>
    );
  }
  return (
    <div className="flex flex-row items-center w-full md:w-[800px] h-[86px] md:h-[70px] pl-4 md:pl-6 pr-4 md:pr-8 pt-4 pb-4 bg-white border-t border-t-gray-line border-b border-b-gray-line last:border-t-0">
      {/* Logo */}
      <img src={logo} width={32} alt="logo" className="mr-4 md:mr-6" />
      {!project ? (
        renderCreating()
      ) : (
        <div className="flex flex-row flex-1 justify-between items-center">
          {/* Project info */}
          <p className="font-semibold text-[20px]">{project.name}</p>

          {/* Controls */}
          <button
            className="delete-icon w-6 h-6"
            onClick={() => {
              // TODO: ask for confirmation and delete project
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Project;
