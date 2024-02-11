import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { WeatherState } from "../interface/state";

export const fetchCity = createAsyncThunk(
  "fetchCity",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async (args: { searchCity: any, days: any }) => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=55f1ce97a2c8412dbb514135240302&q=${args.searchCity}&days=${args.days}`
      );
      return { city: response.data };
    } catch (error) {
      return { error: error };
    }
  }
);

export const fetchCityByDefault = createAsyncThunk(
  "fetchCityByDefault",
  async () => {
    try {
      const response = await axios.get(
        "https://api.weatherapi.com/v1/forecast.json?key=55f1ce97a2c8412dbb514135240302&q=Kyiv&days=7"
      );
      return { cityByDefault: response.data };
    } catch (error) {
      return { error: error };
    }
  }
);

const initialState = {
  city: null,
} as WeatherState;

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCity.pending, () => {})
      .addCase(fetchCity.fulfilled, (state, action) => {
        state.city = action.payload.city;
      })
      .addCase(fetchCity.rejected, () => {})
      .addCase(fetchCityByDefault.pending, () => {})
      .addCase(fetchCityByDefault.fulfilled, (state, action) => {
        state.city = action.payload.cityByDefault;
      })
      .addCase(fetchCityByDefault.rejected, () => {})
  },
});

export default weatherSlice.reducer;
