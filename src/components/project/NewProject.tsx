import { FC, useEffect, useRef } from "react";
import Card from "../Card";
import { Form, Input, InputRef } from "antd";
import { useAppDispatch } from "../../redux/hooks";
import { createProject, hideCreate } from "../../redux/actions";

const NewProject: FC = () => {
  const inputRef = useRef<InputRef>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const onCreate = ({ projectName }: { projectName: string }) => {
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
      <Form name="create" onFinish={onCreate} autoComplete="off">
        <Form.Item name="projectName" className="mb-0">
          <Input
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
