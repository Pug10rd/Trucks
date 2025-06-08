import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { mockapiConstants } from "../mockapiConstants";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        `${mockapiConstants.BASE_URL}${mockapiConstants.CAMPERS_ENDPOINT}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  "campers/fetchById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(
        `${mockapiConstants.BASE_URL}${mockapiConstants.CAMPER_BY_ID_ENDPOINT(
          id
        )}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
