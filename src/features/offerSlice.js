import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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

const initialState = {
  addOfferStatus: "",
  successMessage: "",
  error: "",
};

const offerSLice = createSlice({
  name: "offer",
  initialState,
  reducers: {},
  extraReducers: {
    [addOffer.pending]: (state) => {
      state.addOfferStatus = "loading";
    },
    [addOffer.fulfilled]: (state, action) => {
      state.addOfferStatus = "success";
    },
    [addOffer.rejected]: (state) => {
      state.addOfferStatus = "rejected";
    },
  },
});

export const getAddOfferStatus = (state) => state.offer.addOfferStatus;
export default offerSLice.reducer;
