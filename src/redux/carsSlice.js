import { createSlice } from "@reduxjs/toolkit";
import { fetchCars, filterCarsByMake, loadMoreCars } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleFetchCarsFulfilled = (state, action) => {
  state.isLoading = false;
  state.items = action.payload;
};

const handleAddMoreCarsFulfilled = (state, action) => {
  state.isLoading = false;
  state.items = [...state.items, ...action.payload];
};
const handleFilterCarsFulfilled = (state, action) => {
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
      .addCase(fetchCars.rejected, handleRejected)
      .addCase(loadMoreCars.pending, handlePending)
      .addCase(loadMoreCars.fulfilled, handleAddMoreCarsFulfilled)
      .addCase(loadMoreCars.rejected, handleRejected)
      .addCase(filterCarsByMake.pending, handlePending)
      .addCase(filterCarsByMake.fulfilled, handleFilterCarsFulfilled)
      .addCase(filterCarsByMake.rejected, handleRejected);
  },
});

export const carsReducer = slice.reducer;
