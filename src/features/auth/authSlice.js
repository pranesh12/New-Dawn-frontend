import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../../api/api";

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : [];
const initialState = {
  currentUser,
  isLoading: false,
  error: null,
  userList: [],
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (registerData) => {
    const res = await axios.post(url + `register`, registerData);
    localStorage.setItem("currentUser", JSON.stringify(res.data.result));
    return res.data;
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (loginData) => {
    const res = await axios.post(url + "login", loginData);
    localStorage.setItem("currentUser", JSON.stringify(res.data.result));
    return res.data;
  }
);

export const deleteUser = createAsyncThunk("auth/loginUser", async (data) => {
  const { id, email } = data;
  const res = await axios.delete(url + `delete?id=${id}&email=${email}`);
  return res.data;
});

export const getAllUser = createAsyncThunk("auth/getAllUser", async (email) => {
  const res = await axios.get(url + `allusers?email=${email}`);
  return res.data;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("currentUser");
      localStorage.removeItem("token");
      window.location.replace("/");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
      window.location.replace("/");
    });

    builder.addCase(registerUser.rejected, (state, action) => {
      state.error = action.error.message;
    });

    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
      window.location.replace("/");
    });

    builder.addCase(loginUser.rejected, (state, action) => {
      state.error = action.payload;
    });

    builder.addCase(getAllUser.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getAllUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userList = action.payload;
    });

    builder.addCase(getAllUser.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
