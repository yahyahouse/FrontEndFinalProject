import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk(
  "product/getAllProducts",
  async (data) => {
    try {
      const response = await axios.get(
        `https://dummyprojectbinar.herokuapp.com/home-page/get-product-page?productName=${data.productName}&productCategory=${data.productCategory}&page=${data.page}&size=${data.size}`
      );
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }
);
export const getDetailProduct = createAsyncThunk(
  "product/getDetailProduct",
  async (idProduct) => {
    console.log(idProduct);
    try {
      const response = await axios.get(
        `https://dummyprojectbinar.herokuapp.com/product/buyer/get-detail-product/${idProduct}`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      );
      console.log(response, "detail product");
      return response.data[0];
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const getProductsFilter = createAsyncThunk(
  "product/getProductsFilter",
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
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

const initialState = {
  allProducts: [],
  detailProduct: [],
  sellerProducts: [],
  getAllProductStatus: "",
  getDetailProductStatus: "",
  addProductStatus: "",
  getProductBySellerStatus: "",
  erorr: "",
  succesMessage: "",
};

const productSice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllProducts.pending]: (state) => {
      state.getAllProductStatus = "loading";
    },
    [getAllProducts.fulfilled]: (state, action) => {
      // console.log(action.payload.docs.limit);
      state.getAllProductStatus = "succes";
      state.allProducts = action.payload;
    },
    [getAllProducts.rejected]: (state) => {
      state.getAllProductStatus = "rejected";
    },
    [getDetailProduct.pending]: (state) => {
      state.getDetailProductStatus = "loading";
    },
    [getDetailProduct.fulfilled]: (state, action) => {
      state.getDetailProductStatus = "succes";
      state.detailProduct = action.payload;
    },
    [getDetailProduct.rejected]: (state) => {
      state.getDetailProductStatus = "rejected";
    },
    [addProduct.pending]: (state) => {
      state.addProductStatus = "loading";
    },
    [addProduct.fulfilled]: (state, action) => {
      state.addProductStatus = "Produk berhasil ditambahkan";
    },
    [addProduct.rejected]: (state) => {
      state.addProductStatus = "rejected";
    },

    [getProductBySeller.pending]: (state) => {
      state.getProductBySellerStatus = "loading";
    },
    [getProductBySeller.fulfilled]: (state, action) => {
      state.getProductBySellerStatus = "success";
      state.sellerProducts = action.payload;
    },
    [getProductBySeller.rejected]: (state) => {
      state.getProductBySellerStatus = "rejected";
    },
  },
});

export const getAllDataProducts = (state) => state.product.allProducts;
export const getDetailDataProducts = (state) => state.product.detailProduct;
export const getSellerProducts = (state) => state.product.sellerProducts;
export const getAllProductStatus = (state) => state.product.getAllProductStatus;
export const getAddProductStatus = (state) => state.product.addProductStatus;
export default productSice.reducer;
