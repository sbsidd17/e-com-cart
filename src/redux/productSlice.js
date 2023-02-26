import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    count : 0,
    productList: [],
  },
  reducers: {
    createProductList: (state, action) => {
      state.productList = action.payload;
    },
  },
});

export default productSlice.reducer;
export const { createProductList, increaseProductCount, decreaseProductCount } = productSlice.actions;
