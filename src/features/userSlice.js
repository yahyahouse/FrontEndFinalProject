import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let token = JSON.parse(localStorage.getItem("token"));
console.log(token);

// ADLI START
export const getUserById = createAsyncThunk("user/getUserById", async (id) => {
  try {
    const response = await axios.get(
      // `https://dummyprojectbinar.herokuapp.com/users/get-user-detail/${id}`
      `https://dummyprojectbinar.herokuapp.com/users/get-user-detail/${id}`,
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

export const userEdit = createAsyncThunk("auth/userEdit", async (data) => {
  try {
    const response = await axios.put(
      `https://dummyprojectbinar.herokuapp.com/users/public/update-users-profile`,
      data,
      {
        headers: {
          authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      }
    );
    console.log(response, "edit");
    return response.data.data;
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
    // USER_EDIT
    [userEdit.pending]: (state) => {
      state.status = "loading";
    },
    [userEdit.fulfilled]: (state, action) => {
      state.status = "succes";
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    [userEdit.rejected]: (state, action) => {
      state.error = action.error.message;
    },
  },
});

export const detailUser = (state) => state.user.detailUser;
export default userSlice.reducer;
