import { useEffect, useRef, useState, FC, useCallback } from "react";
import { Form, Input, InputRef, Modal, Tooltip } from "antd";
import { formatDate } from "../utils";
import { useAppDispatch } from "../redux/hooks";
import { QuestionCircleFilled } from "@ant-design/icons";
import Card from "./Card";
import {
  renameProject,
  deleteProject,
} from "../redux/reducers/projectsReducer";

type Props = {
  project: ProjectType;
};

const Project: FC<Props> = ({ project }) => {
  const [isNaming, setIsNaming] = useState<boolean>(!project);
  const inputRef = useRef<InputRef>(null);
  const dispatch = useAppDispatch();
  const [modal, contextHolder] = Modal.useModal();

  useEffect(() => {
    if (isNaming && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isNaming]);

  const onRename = ({ projectName }: { projectName: string }) => {
    if (project && projectName) {
      dispatch(renameProject({ id: project.id, name: projectName }));
      setIsNaming(false);
    }
  };

  const onDelete = () => {
    if (project) {
      dispatch(deleteProject({ id: project.id }));
    }
  };

  const onClickOutside = useCallback(() => {
    setIsNaming(false);
  }, []);

  return (
    <Card onClickOutside={onClickOutside}>
      <div className="flex flex-row flex-1 justify-between items-center">
        {contextHolder}
        {/* Project info */}
        {!isNaming ? (
          <section className="flex flex-col">
            <div className="md:w-[240px] md:justify-between font-semibold text-[20px] flex flex-row gap-4 items-center">
              <Tooltip title={project.name} placement="right">
                <p className="max-w-[200px] truncate">{project.name}</p>
              </Tooltip>
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
          <Form
            name="rename"
            onFinish={onRename}
            autoComplete="off"
            initialValues={{ projectName: project.name }}
            className="w-[200px] md:w-[240px]"
          >
            <Form.Item name="projectName" className="mb-0">
              <Input
                ref={inputRef}
                placeholder={project.name}
                className="rounded-sm text-[16px]"
              />
            </Form.Item>
          </Form>
        )}

        {/* Date (large screens)*/}
        <section className="hidden md:inline text-[14px] text-gray-text">
          {formatDate(project.created)}
        </section>

        {/* Controls */}
        <section className="flex flex-row gap-3">
          <button
            className="md:hidden edit-icon w-6 h-6"
            onClick={() => {
              setIsNaming(true);
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
    </Card>
  );
};

export default Project;
