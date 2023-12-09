import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASIC_URL = "https://6571cca3d61ba6fcc0139cdb.mockapi.io/adverts/adverts";

export const fetchCars = createAsyncThunk(
  "adverts/fetchCars",
  async ({ page, pageSize }, thunkAPI) => {
    try {
      const url = new URL(BASIC_URL);
      url.searchParams.append("page", page);
      url.searchParams.append("limit", pageSize);

      const res = await axios.get(url.toString());

      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const loadMoreCars = createAsyncThunk(
  "adverts/loadMoreCars",
  async ({ page, pageSize }, thunkAPI) => {
    try {
      const url = new URL(BASIC_URL);
      url.searchParams.append("page", page);
      url.searchParams.append("limit", pageSize);

      const res = await axios.get(url.toString());
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const filterCarsByMake = createAsyncThunk(
  "adverts/filterCarsByMake",
  async ({ make }, thunkAPI) => {
    try {
      const url = new URL(BASIC_URL);
      url.searchParams.append("make", make);
      const res = await axios.get(url.toString());

      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
