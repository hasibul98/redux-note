import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const addUser = createAsyncThunk('users/adduser', async (user)=>{
       return user;
});

export const removeUser = createAsyncThunk('users/removeUser', async (id)=>{
       return id;
});

const userSlice = createSlice({
       name: "addRemoveUsers",
       initialState: {list: []},
       reducers: {},
       extraReducers: (builder)=>{
              builder.addCase(addUser.fulfilled, (state, action)=>{
                     state.list.push(action.payload);
              }).addCase(removeUser.fulfilled, (state, action)=>{
                     state.list = state.list.filter((user)=> user.id !== action.payload )
              })
       },
});

export default userSlice.reducer;