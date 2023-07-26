import { AnyAction } from "redux";

const initialState: ProjectType[] = [
  {
    id: "1",
    name: "Currency App",
    created: new Date().getTime(),
  },
  {
    id: "2",
    name: "Hello App",
    created: new Date().getTime(),
  },
  {
    id: "3",
    name: "Video",
    created: new Date().getTime(),
  },
];

const projectsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case "create": {
      console.log(action);
      const randomId = Math.random().toString(10);
      return [
        {
          id: randomId,
          name: action.name,
          created: new Date().getTime(),
        },
        ...state,
      ];
    }
    case "edit": {
      console.log(action);
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
    default:
      return state;
  }
};

export default projectsReducer;