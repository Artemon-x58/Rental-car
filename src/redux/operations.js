import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASIC_URL = "https://6571cca3d61ba6fcc0139cdb.mockapi.io/adverts/adverts";

export const fetchCars = createAsyncThunk(
  "adverts/fetchCars",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(BASIC_URL);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
