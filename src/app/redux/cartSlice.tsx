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
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      state.cart = state.cart.filter((x) => x.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
