import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserNotification = createAsyncThunk(
  "notification/getUserNotification",
  async (data) => {
    console.log(data);
    try {
      const response = await axios.get(
        `https://dummyprojectbinar.herokuapp.com/notification/get-notification/${data.userId}`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      );
      console.log(response, "get user Notification");
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

const initialState = {
  userNotification: [],
  getUserNotificationStatus: "",
  error: "",
};

const notificationSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [getUserNotification.pending]: (state) => {
      state.getUserNotificationStatus = "loading";
    },
    [getUserNotification.fulfilled]: (state, action) => {
      state.getUserNotificationStatus = "success";
      state.userNotification = action.payload.sort(
        (a, b) => b.notifId - a.notifId
      );
    },
    [getUserNotification.rejected]: (state) => {
      state.getUserNotificationStatus = "rejected";
    },
  },
});

export const getUserNotificationData = (state) =>
  state.notification.userNotification;
export const getUserNotificationStatus = (state) =>
  state.notification.getUserNotificationStatus;

export default notificationSlice.reducer;
