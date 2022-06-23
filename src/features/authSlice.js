import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react-dom/test-utils";

export const userLogin = createAsyncThunk(
  "auth/userLogin",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `https://dummyprojectbinar.herokuapp.com/api/auth/signin`,
        data
      );
      console.log(response, "login slice");
      return response.data;
    } catch (error) {
      console.error(error.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);

const initialState = {
  user: "",
  status: "",
  role: "",
  erorr: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    // login
    [userLogin.pending]: (state) => {
      state.status = "loading";
    },
    [userLogin.fulfilled]: (state, action) => {
      state.status = "success";
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    [userLogin.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const getStatus = (state) => state.auth.status;
export const getErorrMessage = (state) => state.auth.error;
export default authSlice.reducer;
