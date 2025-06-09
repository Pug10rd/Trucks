import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { mockapiConstants } from "../mockapiConstants";

function buildQueryString(filters) {
  const params = [];

  if (filters.location) {
    params.push(`location=${encodeURIComponent(filters.location)}`);
  }

  if (filters.equipment && filters.equipment.length > 0) {
    filters.equipment.forEach((eq) => {
      if (eq === "transmission") {
        params.push(`${encodeURIComponent(eq)}=automatic`);
      } else {
        params.push(`${encodeURIComponent(eq)}=true`);
      }
    });
  }

  const formMap = {
    "camper-van": "panelTruck",
    "camper-fully-integrated": "fullyIntegrated",
    "camper-alcove": "alcove",
  };

  if (filters.form && formMap[filters.form]) {
    params.push(`form=${encodeURIComponent(formMap[filters.form])}`);
  }

  if (filters.page) {
    params.push(`page=${filters.page}`);
  }

  if (filters.limit) {
    params.push(`limit=${filters.limit}`);
  }

  return `?${params.join("&")}`;
}

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (filters = {}, thunkAPI) => {
    try {
      const query = buildQueryString(filters);
      const response = await axios.get(
        `${mockapiConstants.BASE_URL}${mockapiConstants.CAMPERS_ENDPOINT}${query}`
      );

      return Array.isArray(response.data)
        ? response.data
        : response.data.items || [];
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
