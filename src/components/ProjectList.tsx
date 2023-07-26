import { FC } from "react";
import {
  DragDropContext,
  Droppable,
  DropResult,
  Draggable,
} from "@hello-pangea/dnd";
import Project from "./Project";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { reorderProjects } from "../redux/reducers/projectsReducer";
import { reorder } from "../utils";

const ProjectList: FC = () => {
  const projects = useAppSelector((state) => state.projects.list);
  const dispatch = useAppDispatch();

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    if (result.destination.index === result.source.index) return;

    const reordered = reorder(
      projects,
      result.source.index,
      result.destination.index,
    );

    dispatch(reorderProjects({ reordered }));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="projects">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="w-full md:w-[800px] h-screen"
          >
            {projects.map((project, index) => (
              <Draggable
                key={project.id}
                draggableId={project.id}
                index={index}
              >
                {(providedDraggable) => (
                  <div
                    ref={providedDraggable.innerRef}
                    {...providedDraggable.draggableProps}
                    {...providedDraggable.dragHandleProps}
                  >
                    <Project project={project} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ProjectList;
