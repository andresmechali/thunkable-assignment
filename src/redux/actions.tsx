export const createProject = ({ name }: { name: string }) => ({
  type: "create",
  name,
});

export const renameProject = ({
  id,
  newName,
}: {
  id: string;
  newName: string;
}) => ({
  type: "rename",
  id,
  name: newName,
});

export const deleteProject = ({ id }: { id: string }) => ({
  type: "delete",
  id,
});

export const reorderProjects = ({
  reorderedProjects,
}: {
  reorderedProjects: ProjectType[];
}) => ({
  type: "reorder",
  reordered: reorderedProjects,
});

export const showCreate = () => ({
  type: "showCreate",
});

export const hideCreate = () => ({
  type: "hideCreate",
});
