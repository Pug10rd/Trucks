import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  priceRange: [0, 1000],
  category: null,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetFilters: () => initialState,
  },
});

export const { setFilters, resetFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
