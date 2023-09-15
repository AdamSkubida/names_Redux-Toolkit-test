import { createAction, nanoid } from "@reduxjs/toolkit";

export const addName = createAction("name/ADD", (name) => {
  return {
    payload: {
      id: nanoid(),
      name,
    },
  };
});
