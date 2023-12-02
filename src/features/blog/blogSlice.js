import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const res = await axios.get("http://localhost:5000/blogs");
  return res.data;
});

export const blogSlice = createSlice({
  name: "blogs",
  initialState: { isLoading: true, blogs: [], error: null },
  extraReducers: (builder) => {
    builder.addCase(fetchBlogs.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      state.isLoading = false;
      state.blogs = action.payload;
      state.error = null;
    });

    builder.addCase(fetchBlogs.rejected, (state, action) => {
      state.isLoading = false;
      (state.blogs = []), (state.error = action.error.message);
    });
  },
});

export const selectAllBlogs = (state) => state.blogs;
export default blogSlice.reducer;
