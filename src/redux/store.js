import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import counterSlice from "./app2/counterSlice";
import userReducer from "./blogPost/userSlice";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    counterSlice : counterSlice,
    users: userReducer
  },
});

export default store;
