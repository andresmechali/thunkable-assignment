import logo from "../../assets/ProjectIcon.png";
import { useEffect, useRef, useState } from "react";
import { Form, Input, InputRef, Modal } from "antd";
import { formatDate } from "../../utils";
import { useAppDispatch } from "../../redux/hooks";
import { QuestionCircleFilled } from "@ant-design/icons";
import { Draggable } from "@hello-pangea/dnd";

type Props = {
  project?: ProjectType;
};

const Project: React.FC<Props> = ({ project }) => {
  const [isNaming, setIsNaming] = useState<boolean>(!project);
  const namingRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<InputRef>(null);
  const dispatch = useAppDispatch();
  const [modal, contextHolder] = Modal.useModal();

  useEffect(() => {
    // Stop renaming when clicking outside project card
    const handleClickOutside = (event: any) => {
      if (namingRef.current && !namingRef.current.contains(event.target)) {
        setIsNaming(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  const onCreate = ({ projectName }: { projectName: string }) => {
    if (projectName) {
      // TODO: create project
      dispatch({ type: "create", name: projectName });
      dispatch({ type: "hideCreate" });
    }
  };

  const onRename = ({ projectName }: { projectName: string }) => {
    if (project && projectName) {
      dispatch({ type: "edit", name: projectName, id: project.id });
      setIsNaming(false);
    }
  };

  const onDelete = () => {
    if (project) {
      dispatch({ type: "delete", id: project.id });
    }
  };

  // TODO: remove 'any'
  function renderNaming(formName: string, callBack: any) {
    return (
      // @ts-ignore
      <Form name={formName} onFinish={callBack} autoComplete="off">
        <Form.Item name="projectName" className="mb-0">
          <Input
            ref={inputRef}
            placeholder="Name your project"
            className="rounded-sm text-[16px]"
          />
        </Form.Item>
      </Form>
    );
  }

  return (
    <div
      ref={namingRef}
      className="flex flex-row items-center w-full md:w-[800px] h-[86px] md:h-[70px] pl-4 md:pl-6 pr-4 md:pr-8 pt-4 pb-4 bg-white border-t-gray-line border-b border-b-gray-line first:border-t"
    >
      {contextHolder}
      {/* Logo */}
      <img src={logo} width={32} alt="logo" className="mr-4 md:mr-6" />
      {!project ? (
        <Form name="create" onFinish={onCreate} autoComplete="off">
          <Form.Item name="projectName" className="mb-0">
            <Input
              ref={inputRef}
              placeholder="Name your project"
              className="rounded-sm text-[16px]"
            />
          </Form.Item>
        </Form>
      ) : (
        <div className="flex flex-row flex-1 justify-between items-center">
          {/* Project info */}
          {!isNaming ? (
            <section className="flex flex-col">
              <div className="md:w-[200px] md:justify-between font-semibold text-[20px] flex flex-row gap-4 items-center">
                <p>{project.name}</p>
                <button
                  className="hidden md:inline-flex edit-icon w-6 h-6"
                  onClick={() => {
                    setIsNaming(true);
                    inputRef.current?.focus();
                  }}
                />
              </div>
              <p className="md:hidden text-[14px] text-gray-text">
                {formatDate(project.created)}
              </p>
            </section>
          ) : (
            <Form name="rename" onFinish={onRename} autoComplete="off">
              <Form.Item name="projectName" className="mb-0">
                <Input
                  ref={inputRef}
                  placeholder="Name your project"
                  className="rounded-sm text-[16px]"
                />
              </Form.Item>
            </Form>
          )}

          <section className="hidden md:inline text-[14px] text-gray-text">
            {formatDate(project.created)}
          </section>

          {/* Controls */}
          <section className="flex flex-row gap-3">
            <button
              className="md:hidden edit-icon w-6 h-6"
              onClick={() => {
                setIsNaming(true);
                console.log(inputRef);
                inputRef.current?.focus();
              }}
            />
            <button
              className="delete-icon w-6 h-6"
              onClick={() => {
                modal.confirm({
                  title: (
                    <p className="text-gray-title" style={{ fontWeight: 400 }}>
                      Are you sure you want to delete this project?
                    </p>
                  ),
                  icon: <QuestionCircleFilled />,
                  content: (
                    <p className="font-semilight text-gray-text mb-8">
                      This action can't be undone.
                    </p>
                  ),
                  okText: "Yes",
                  cancelText: "No",
                  okButtonProps: {
                    className: "bg-primary",
                  },
                  onOk: onDelete,
                });
              }}
            />
          </section>
        </div>
      )}
    </div>
  );
};

export default Project;
