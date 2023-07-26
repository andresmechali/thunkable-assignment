import { createSlice } from "@reduxjs/toolkit";

const initialState: { list: ProjectType[] } = {
  list: [],
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    createProject(state, action) {
      const { name } = action.payload;
      state.list.unshift({
        id: Math.random().toString(10), // Not the best random generator but good enough for simplicity
        name,
        created: new Date().getTime(),
      });
    },
    renameProject(state, action) {
      const { id, name } = action.payload;
      const index = state.list.findIndex((project) => project.id === id);
      if (index >= 0) {
        const current = state.list[index];
        state.list[index] = {
          ...current,
          name,
        };
      }
    },
    deleteProject(state, action) {
      const { id } = action.payload;
      const index = state.list.findIndex((project) => project.id === id);
      if (index >= 0) {
        state.list.splice(index, 1);
      }
    },
    reorderProjects(state, action) {
      const { reordered } = action.payload;
      state.list = reordered;
    },
  },
});

export const { createProject, renameProject, deleteProject, reorderProjects } =
  projectsSlice.actions;

export default projectsSlice.reducer;
