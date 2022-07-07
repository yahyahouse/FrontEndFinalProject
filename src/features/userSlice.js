import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let token = JSON.parse(localStorage.getItem("token"));
console.log(token);

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
    return response.data[0];
  } catch (error) {
    console.log(error.message);
  }
});
// ADLI END

const initialState = {
  detailUser: [],
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
      state.detailUser = action.payload;
    },
    [getUserById.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});

export const detailUser = (state) => state.user.detailUser;
export default userSlice.reducer;
