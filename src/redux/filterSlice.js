import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filter",
  initialState: {
    make: "",
    price: "",
    from: "",
    to: "",
  },
  reducers: {
    setMake(state, action) {
      return { ...state, make: action.payload };
    },
    setPrice(state, action) {
      return { ...state, price: action.payload };
    },
    setMileageFrom(state, action) {
      return { ...state, from: action.payload };
    },
    setMileageTo(state, action) {
      return { ...state, to: action.payload };
    },
  },
});

export const filterReducer = slice.reducer;
export const { setMake } = slice.actions;
export const { setPrice } = slice.actions;
export const { setMileageFrom } = slice.actions;
export const { setMileageTo } = slice.actions;
