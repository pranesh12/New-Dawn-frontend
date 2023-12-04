import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  blogs: [],
  isLoading: false,
  error: null,
  singleBlog: null,
};

export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const res = await axios.get("http://localhost:5000/blogs");
  return res.data;
});

export const fetchBlogById = createAsyncThunk(
  "blogs/fetchSingleBlog",
  async (id) => {
    const res = await axios.get(`http://localhost:5000/blogs/${id}`);
    return res.data;
  }
);

export const blogSlice = createSlice({
  name: "blogs",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchBlogs.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      state.isLoading = false;
      state.blogs = action.payload;
    });

    builder.addCase(fetchBlogs.rejected, (state, action) => {
      state.error = action.error.message;
    });

    builder.addCase(fetchBlogById.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchBlogById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.singleBlog = action.payload;
    });

    builder.addCase(fetchBlogById.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const selectAllBlogs = (state) => state.blogs;
export default blogSlice.reducer;
