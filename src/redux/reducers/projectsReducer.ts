import { AnyAction } from "redux";

const initialState: ProjectType[] = [];

const projectsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case "create": {
      const randomId = Math.random().toString(10); // Not the best random generator but good enough for simplicity
      return [
        {
          id: randomId,
          name: action.name,
          created: new Date().getTime(),
        },
        ...state,
      ];
    }
    case "rename": {
      return state.map((project) => {
        if (project.id === action.id) {
          return {
            ...project,
            name: action.name,
          };
        }
        return project;
      });
    }
    case "delete": {
      return state.filter((project) => project.id !== action.id);
    }
    case "reorder": {
      return [...action.reordered];
    }
    default:
      return state;
  }
};

export default projectsReducer;
