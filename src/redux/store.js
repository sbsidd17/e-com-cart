import { configureStore } from "@reduxjs/toolkit";
import productSlice from './productSlice'
import cartSlice from './cartSlice'

const store = configureStore({
  reducer: {
    cartSlice,
    productSlice,
  },
});

export default store;
