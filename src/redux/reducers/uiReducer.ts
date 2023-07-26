import { AnyAction } from "redux";

const initialState: { creating: boolean } = { creating: false };

const uiReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case "showCreate": {
      return {
        ...state,
        creating: true,
      };
    }
    case "hideCreate": {
      return {
        ...state,
        creating: false,
      };
    }
    default:
      return state;
  }
};

export default uiReducer;
