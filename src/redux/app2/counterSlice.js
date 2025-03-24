import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter2",
  initialState: { ab: 0 },
  reducers: {
    increment: (state) => {
      state.ab += 1;
    },
    decrement: (state) => {
      state.ab -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
