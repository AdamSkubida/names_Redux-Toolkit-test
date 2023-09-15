import { addName } from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  names: [
    { id: 0, name: "Adam" },
    { id: 1, name: "Paula" },
  ],
};

export const namesReducer = createReducer(initialState, {
  [addName]: (state, action) => {
    return {
      ...state,
      names: [...state.names, action.payload],
    };
  },
});
