import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addOffer = createAsyncThunk("offer/addOffer", async (data) => {
  console.log(data);
  try {
    const response = await axios.post(
      `https://dummyprojectbinar.herokuapp.com/offer/buyer/add-offer/${data.path.userId}/${data.path.productId}?offer_price=${data.data.offer_price}&offerStatus=${data.data.offerStatus}`,
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

export const getBuyerOfferHistory = createAsyncThunk(
  "offer/getBuyerOfferHistory",
  async (userId) => {
    console.log(userId);
    try {
      const response = await axios.get(
        `https://dummyprojectbinar.herokuapp.com/offer/buyer/get-offer-history/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      );
      console.log(response, "get buyer offer history");
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const getSellerOfferHistory = createAsyncThunk(
  "offer/getSellerOfferHistory",
  async (data) => {
    console.log(data);
    try {
      const response = await axios.get(
        `https://dummyprojectbinar.herokuapp.com/offer/seller/get-offer-history/${data.userId}`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      );
      console.log(response, "get seller offer history");
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const getSellerOfferDetail = createAsyncThunk(
  "offer/getSellerOfferDetail",
  async (data) => {
    console.log(data);
    try {
      const response = await axios.get(
        `https://dummyprojectbinar.herokuapp.com/offer/buyer/get-diminati/${data.offerId}`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      );
      console.log(response, "get seller offer detail");
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

const initialState = {
  addOfferStatus: "",
  buyerOfferHistoryData: [],
  buyerOfferHistoryStatus: "",
  sellerOfferHistoryData: [],
  sellerOfferHistoryStatus: "",
  sellerOfferDetailData: [],
  sellerOfferDetailStatus: "",
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
    [getBuyerOfferHistory.pending]: (state) => {
      state.buyerOfferHistoryStatus = "loading";
    },
    [getBuyerOfferHistory.fulfilled]: (state, action) => {
      state.buyerOfferHistoryStatus = "success";
      state.buyerOfferHistoryData = action.payload;
    },
    [getBuyerOfferHistory.rejected]: (state) => {
      state.buyerOfferHistoryStatus = "rejected";
    },
    [getSellerOfferHistory.pending]: (state) => {
      state.sellerOfferHistoryStatus = "loading";
    },
    [getSellerOfferHistory.fulfilled]: (state, action) => {
      state.sellerOfferHistoryStatus = "success";
      state.sellerOfferHistoryData = action.payload;
    },
    [getSellerOfferHistory.rejected]: (state) => {
      state.sellerOfferHistoryStatus = "rejected";
    },
    [getSellerOfferDetail.pending]: (state) => {
      state.sellerOfferDetailStatus = "loading";
    },
    [getSellerOfferDetail.fulfilled]: (state, action) => {
      state.sellerOfferDetailStatus = "success";
      state.sellerOfferDetailData = action.payload;
    },
    [getSellerOfferDetail.rejected]: (state) => {
      state.sellerOfferDetailStatus = "rejected";
    },
  },
});

export const getAddOfferStatus = (state) => state.offer.addOfferStatus;
export const getBuyerOfferHistoryData = (state) =>
  state.offer.buyerOfferHistoryData;
export const getBuyerOfferHistoryStatus = (state) =>
  state.offer.buyerOfferHistoryStatus;
export const getSellerOfferHistoryData = (state) =>
  state.offer.sellerOfferHistoryData;
export const getSellerOfferHistoryStatus = (state) =>
  state.offer.sellerOfferHistoryStatus;
export const getSellerOfferDetailData = (state) =>
  state.offer.sellerOfferDetailData;
export const getSellerOfferDetailStatus = (state) =>
  state.offer.sellerOfferDetailStatus;
export default offerSLice.reducer;
