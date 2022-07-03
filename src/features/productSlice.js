import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let token = JSON.parse(localStorage.getItem("token"));
console.log(token);

// axios.interceptors.request.use(
//   (config) => {
//     config.headers.authorization = `Bearer ${token}`;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export const getAllProducts = createAsyncThunk(
  "product/getAllProducts",
  async () => {
    try {
      const response = await axios.get(
        `https://dummyprojectbinar.herokuapp.com/home-page/show-products`
      );
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

//coba di stringify tokennya
//coba perbaiki struktur header
export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (data) => {
    try {
      const response = await axios.post(
        `https://dummyprojectbinar.herokuapp.com/product/seller/add-product/${data.id}`,
        data.dataProduct,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      );

      // const response = await axios({
      //   method: "POST",
      //   url: `https://dummyprojectbinar.herokuapp.com/product/seller/add-product/${data.userId}`,
      //   data: data.formData,
      //   headers: {
      //     accept: "*/*",
      //     "Content--Type": "multipart/form-data",
      //     authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      //   },
      // });
      console.log(response, "add product");
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const getProductBySeller = createAsyncThunk(
  "product/getProductBySeller",
  async (data) => {
    console.log(data);
    try {
      const response = await axios.get(
        `https://dummyprojectbinar.herokuapp.com/product/seller/get-product-seller/${data}`,
        {
          headers: {
            authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      );
      console.log(response, "get by seller");
    } catch (error) {
      console.log(error.message);
    }
  }
);

const initialState = {
  allProducts: [],
  status: "",
  erorr: "",
  succesMessage: "",
};

const productSice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllProducts.pending]: (state) => {
      state.status = "loading";
    },
    [getAllProducts.fulfilled]: (state, action) => {
      // console.log(action.payload.docs.limit);
      state.status = "succes";
      state.allProducts = action.payload;
    },
    [getAllProducts.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});

export const getAllDataProducts = (state) => state.product.allProducts;
export const getAllDataProductsStatus = (state) => state.product.status;
export default productSice.reducer;
