import { combineReducers, configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./weatherSlice";

const rootReducer = combineReducers({
  weather: weatherSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
