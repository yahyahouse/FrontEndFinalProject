import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (data) => {
    try {
      const response = await axios.post(
        `https://dummyprojectbinar.herokuapp.com/product/seller/add-product`,
        data,
        {
          headers: {
            authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      );
      console.log(response, "add product");
    } catch (error) {
      console.log(error.message);
    }
  }
);

const initialState = {
  product: "",
  status: "",
  erorr: "",
  succesMessage: "",
};

const productSice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default productSice.reducer;
