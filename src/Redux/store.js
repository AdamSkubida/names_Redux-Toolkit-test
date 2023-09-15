import { configureStore } from "@reduxjs/toolkit";
import { namesReducer } from "./reducers";

export const store = configureStore({
  reducer: {
    names: namesReducer,
  },
});
