import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "../features/blog/blogSlice";
import authReducer from "../features/auth/authSlice";

const store = configureStore({
  reducer: {
    blogs: blogReducer,
    auth: authReducer,
  },
});

export default store;
