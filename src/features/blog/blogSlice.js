import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../../api/api";

const initialState = {
  blogs: [],
  isLoading: false,
  error: null,
  singleBlog: null,
};

export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const res = await axios.get(url + "blogs");
  return res.data;
});

export const fetchBlogById = createAsyncThunk(
  "blogs/fetchSingleBlog",
  async (id) => {
    const res = await axios.get(url + `blogs/${id}`);
    return res.data;
  }
);

export const addBlog = createAsyncThunk("blogs/addBlog", async (blogData) => {
  const res = await axios.post(url + "blogs/createblog", blogData);
  return res.data;
});

export const blogSlice = createSlice({
  name: "blogs",
  initialState,
  extraReducers: (builder) => {
    // fetch all Blogs
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

    // fetch blog by theri id
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

    // add blog
    builder.addCase(addBlog.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(addBlog.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isProductAdded = action.payload;
    });

    builder.addCase(addBlog.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const selectAllBlogs = (state) => state.blogs;
export default blogSlice.reducer;
