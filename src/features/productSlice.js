import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk(
  "product/getAllProducts",
  async (data) => {
    try {
      const response = await axios.get(
        `https://dummyprojectbinar.herokuapp.com/home-page?productName=${data.productName}&productCategory=${data.productCategory}&page=${data.page}&size=${data.size}`
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
      return response.data;
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

export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (data) => {
    try {
      const response = await axios.post(
        `https://dummyprojectbinar.herokuapp.com/product/seller/update-product/${data.userId}/${data.productId}`,
        data.dataProduct,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      );
      console.log(response, "update product");
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

export const updateProductToSold = createAsyncThunk(
  "product/updateProductToSold",
  async (data) => {
    try {
      const response = await axios.post(
        `https://dummyprojectbinar.herokuapp.com/product/seller/product-status-sold/${data.userId}/${data.productId}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      );
      console.log(response, "update product to sold");
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const getSellerProductSold = createAsyncThunk(
  "product/getSellerProductSold",
  async (data) => {
    console.log(data);
    try {
      const response = await axios.get(
        `https://dummyprojectbinar.herokuapp.com/product/seller/get-product-sold/${data.userId}
        `,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      );
      console.log(response, "get seller product sold");
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
  updateProductStatus: "",
  getProductBySellerStatus: "",
  updateProductToSoldStatus: "",
  getSellerProductSold: [],
  getSellerProductSoldStatus: "",
  erorr: "",
  succesMessage: "",
};

const productSice = createSlice({
  name: "product",
  initialState,
  reducers: {
    clearStatusProduct: (state) => {
      state.addProductStatus = "";
      state.updateProductStatus = "";
      state.updateProductToSoldStatus = "";
    },
  },
  extraReducers: {
    [getAllProducts.pending]: (state) => {
      state.getAllProductStatus = "loading";
    },
    [getAllProducts.fulfilled]: (state, action) => {
      // console.log(action.payload.docs.limit);
      state.getAllProductStatus = "succes";
      state.allProducts = action.payload.products.filter(
        (item) => item.productStatus === "Available"
      );
    },
    [getAllProducts.rejected]: (state) => {
      state.getAllProductStatus = "rejected";
    },
    [updateProduct.pending]: (state) => {
      state.updateProductStatus = "loading";
    },
    [updateProduct.fulfilled]: (state, action) => {
      state.updateProductStatus = "Produk berhasil diubah";
    },
    [updateProduct.rejected]: (state) => {
      state.updateProductStatus = "rejected";
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
      state.getSellerProductSoldStatus = "loading";
    },
    [getProductBySeller.fulfilled]: (state, action) => {
      state.getProductBySellerStatus = "success";
      state.getSellerProductSoldStatus = "success";
      // filter available
      state.sellerProducts = action.payload.filter(
        (item) => item.productStatus === "Available"
      );
      // filter sold
      state.getSellerProductSold = action.payload.filter(
        (item) => item.productStatus === "Sold"
      );
    },
    [getProductBySeller.rejected]: (state) => {
      state.getProductBySellerStatus = "rejected";
      state.getSellerProductSoldStatus = "rejected";
    },
    [updateProductToSold.pending]: (state) => {
      state.updateProductToSoldStatus = "loading";
    },
    [updateProductToSold.fulfilled]: (state) => {
      state.updateProductToSoldStatus = "success";
    },
    [updateProductToSold.rejected]: (state) => {
      state.updateProductToSoldStatus = "rejected";
    },
    // product-sold
    [getSellerProductSold.pending]: (state) => {
      state.getSellerProductSoldStatus = "loading";
    },
    [getSellerProductSold.fulfilled]: (state, action) => {
      state.getSellerProductSoldStatus = "success";
      state.getSellerProductSold = action.payload;
    },
    [getSellerProductSold.rejected]: (state) => {
      state.getSellerProductSoldStatus = "rejected";
    },
  },
});

export const getAllDataProducts = (state) => state.product.allProducts;
export const getDetailDataProducts = (state) => state.product.detailProduct;
export const getDetailProductStatus = (state) =>
  state.product.getDetailProductStatus;
export const getSellerProducts = (state) => state.product.sellerProducts;
export const getAllProductStatus = (state) => state.product.getAllProductStatus;
export const getAddProductStatus = (state) => state.product.addProductStatus;
export const getUpdateProductStatus = (state) =>
  state.product.updateProductStatus;
export const getUpdateProductToSoldStatus = (state) =>
  state.product.updateProductToSoldStatus;
export const getSellerProductSoldData = (state) =>
  state.product.getSellerProductSold;
export const getSellerProductSoldStatus = (state) =>
  state.product.getSellerProductSoldStatus;

export const { clearStatusProduct } = productSice.actions;
export default productSice.reducer;
