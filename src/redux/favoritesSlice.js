import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "favorites",
  initialState: {
    list: [],
  },
  reducers: {
    addOrRemoveToFavorites: (state, action) => {
      const carToAdd = action.payload;

      if (!state.list.some((car) => car.id === carToAdd.id)) {
        state.list.push(carToAdd);
      } else {
        const carToDelete = action.payload;
        state.list = state.list.filter((car) => car.id !== carToDelete.id);
      }
    },
  },
});

export const { addOrRemoveToFavorites } = slice.actions;
export const favoritesReducer = slice.reducer;
