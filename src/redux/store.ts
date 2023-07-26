import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./reducers/projectsReducer";
import uiReducer from "./reducers/uiReducer";

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
