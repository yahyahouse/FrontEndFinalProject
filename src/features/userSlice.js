import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// ADLI START
export const getUserById = createAsyncThunk("user/getUserById", async () => {
  try {
    const response = await axios.get(
      // `https://dummyprojectbinar.herokuapp.com/users/get-user-detail/${id}`
      `https://dummyprojectbinar.herokuapp.com/users/get-user-detail/1`,
      {
        headers: {
          authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      }
    );
    console.log(response, "get user by id");
  } catch (error) {
    console.log(error.message);
  }
});
// ADLI END

const initialState = {
  allUsers: [],
  status: "",
  erorr: "",
  succesMessage: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [getUserById.pending]: (state) => {
      state.status = "loading";
    },
    [getUserById.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [getUserById.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});

export default userSlice.reducer;
