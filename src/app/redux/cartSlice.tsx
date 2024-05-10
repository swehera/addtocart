import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number; // Add quantity property
  images: any;
}

export interface CounterState {
  value: number;
  cart: CartItem[];
}

const initialState: CounterState = {
  value: 0,
  cart: [],
};

const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const { id } = action.payload;
      // const existingItemIndex = state.cart.findIndex((item) => item.id === id);
      const existingItem = state.cart.find((item) => item.id == id);

      if (existingItem) {
        // If item already exists, increment its quantity
        // state.cart[existingItemIndex].quantity++;
        // If item already exists, increment its quantity
        existingItem.quantity++;
      } else {
        // Otherwise, add the item to the cart
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    incrementQuantity: (state, action: PayloadAction<{ id: number }>) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action: PayloadAction<{ id: number }>) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;
