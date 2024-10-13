import { createSlice } from "@reduxjs/toolkit";

const aiSearchSlice = createSlice({
  name: "aiSearch",
  initialState: {
    showAiSearchComponent: false,
  },
  reducers: {
    toggleAiSearchComponent: (state, action) => {
      state.showAiSearchComponent = !state.showAiSearchComponent;
    },
  },
});

export const { toggleAiSearchComponent } = aiSearchSlice.actions;
export default aiSearchSlice.reducer;
