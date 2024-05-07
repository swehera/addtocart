import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
  cart: any[];
}

const initialState: CounterState = {
  value: 0,
  cart: [],
};

const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      // Check if the item already exists in the cart
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      // If the item already exists, do nothing
      if (existingItem) {
        return;
      }

      // Otherwise, add the item to the cart
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      state.cart = state.cart.filter((x) => x.id !== action.payload.id);
    },
    // addImages: (state, action: PayloadAction<{ images: string }>) => {
    //   state.images.push(action.payload);
    // },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
