import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchNews = createAsyncThunk('news/fetchNews', async()=>{
       const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2025-02-28&sortBy=publishedAt&apiKey=fdcc5c89ac6b4a4891e6f2bab9c90ccf');
       const data = await response.json();
       console.log(data);
       return data.articles;

})

const newsSlice = createSlice({
       name: "news",
       initialState: {
              articles: [],
              status: "idle",
              error: null,

       },
       reducers: {},
       extraReducers: (builder)=>{
              builder.addCase(fetchNews.pending, (state)=>{
                     state.status = "loading";
              }).addCase(fetchNews.fulfilled, (state, action)=>{
                     state.status = "succeeded";
                     state.articles = action.payload;
              }).addCase(fetchNews.rejected, (state, action)=>{
                     state.status = "failed";
                     state.error = action.error.message;
              })
       }

})

export default newsSlice.reducer;