import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    trailer: {},
  },
  reducers: {
    addMoviesByCategory: (state, action) => {
      const { category, movies } = action.payload;
      state[category] = movies;
    },
    addTrailer: (state, action) => {
      state.trailer = action.payload;
    },
  },
});

export const { addMoviesByCategory, addTrailer } = moviesSlice.actions;

export default moviesSlice.reducer;
