import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import cartSlice from "./cartSlice";
import storage from "redux-persist/lib/storage";
import userReducer from "./userSlice"; // Assuming you have a userReducer file

const persistConfig = {
  key: "root",
  storage,
};

const persistedCartReducer = persistReducer(persistConfig, cartSlice);
const persistedUserReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    user: persistedUserReducer,
  },
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: { cart: CartState, user: UserState }
export type AppDispatch = typeof store.dispatch;
