import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptComponent: false,
  },
  reducers: {
    toggleGptComponent: (state, action) => {
      state.showGptComponent = !state.showGptComponent;
    },
  },
});

export const { toggleGptComponent } = gptSlice.actions;
export default gptSlice.reducer;
