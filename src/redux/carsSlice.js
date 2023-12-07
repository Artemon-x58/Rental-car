import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleFetchCarsFulfilled = (state, action) => {
  state.isLoading = false;
  state.items = action.payload;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.error.message;
};

const carsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: "cars",
  initialState: carsInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, handleFetchCarsFulfilled)
      .addCase(fetchCars.rejected, handleRejected);
  },
});

export const carsReducer = slice.reducer;
