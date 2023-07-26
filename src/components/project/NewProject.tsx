import { FC, useEffect, useRef } from "react";
import Card from "../Card";
import { Form, Input, InputRef } from "antd";
import { useAppDispatch } from "../../redux/hooks";
import { createProject } from "../../redux/reducers/projectsReducer";
import { hideCreate } from "../../redux/reducers/uiReducer";

const NewProject: FC = () => {
  const inputRef = useRef<InputRef>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const onCreate = ({ projectName }: { projectName: string }) => {
    console.log("asddsadsa");
    if (projectName) {
      dispatch(createProject({ name: projectName }));
      dispatch(hideCreate());
    }
  };

  const onClickOutside = () => {
    dispatch(hideCreate());
  };

  return (
    <Card onClickOutside={onClickOutside}>
      <Form
        name="create"
        onFinish={onCreate}
        autoComplete="off"
        data-testid="new-project-form"
      >
        <Form.Item name="projectName" className="mb-0">
          <Input
            data-testid="new-project-name"
            ref={inputRef}
            placeholder="Name your project"
            className="rounded-sm text-[16px]"
          />
        </Form.Item>
      </Form>
    </Card>
  );
};

export default NewProject;
