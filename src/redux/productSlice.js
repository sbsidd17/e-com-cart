import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("productList/fetch", async () => {
  const resp = await fetch("https://fakestoreapi.com/products");
  const data = await resp.json();
  return data;
});

const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    productList: [],
    status: "idle",
    error: null,
  },
  reducers: {
    createProductList: (state, action) => {
      state.productList = action.payload;
    },
  },
  extraReducers: function (builder) {
    builder
      .addCase(fetchData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.productList = action.payload;
      })
      .addCase(fetchData.error, (state, action) => {
        state.status = "error";
      });
  },
});

export default productSlice.reducer;
export const { createProductList, increaseProductCount, decreaseProductCount } =
  productSlice.actions;
