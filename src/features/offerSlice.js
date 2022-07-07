import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

console.log(JSON.parse(localStorage.getItem("token")));

export const addOffer = createAsyncThunk("offer/addOffer", async (data) => {
  console.log(data);
  try {
    const response = await axios.post(
      `https://dummyprojectbinar.herokuapp.com/offer/buyer/add-offer/${data.path.userId}/${data.path.productId}?offerId=${data.data.offerId}&offer_price=${data.data.offer_price}&offerStatus=${data.data.offerStatus}`,
      data.data,
      {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      }
    );
    console.log(response, "add offer");
  } catch (error) {
    console.log(error.message);
  }
});

const initialState = {};

const offerSLice = createSlice({
  name: "offer",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default offerSLice.reducer;
