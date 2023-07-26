import { createSlice } from "@reduxjs/toolkit";

const initialState: { creating: boolean } = { creating: false };

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showCreate(state) {
      state.creating = true;
    },
    hideCreate(state) {
      state.creating = false;
    },
  },
});

export const { showCreate, hideCreate } = uiSlice.actions;

export default uiSlice.reducer;
