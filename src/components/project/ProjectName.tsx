import { useState } from "react";

type Props = {
  project: ProjectType;
};

const ProjectName: React.FC<Props> = ({ project }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const changeName = () => {
    //
  };

  return <div>{project.name}</div>;
};

export default ProjectName;
