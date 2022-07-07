import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import productReducer from "../features/productSlice";
import offerReducer from "../features/offerSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    offer: offerReducer,
  },
});
