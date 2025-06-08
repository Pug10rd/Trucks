import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteItems: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const camperId = action.payload;
      if (state.favoriteItems.includes(camperId)) {
        state.favoriteItems = state.favoriteItems.filter(
          (id) => id !== camperId
        );
      } else {
        state.favoriteItems.push(camperId);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
