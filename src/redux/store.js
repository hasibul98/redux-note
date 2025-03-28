import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import counterSlice from "./app2/counterSlice";
import userReducer from "./blogPost/userSlice";
import userAddDelete from "./user-add-remove/userSlice";
import taskReducer from "./task-managment/taskSlice";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    counterSlice : counterSlice,
    users: userReducer,
    useradd: userAddDelete,
    tasks: taskReducer
  },
});

export default store;
