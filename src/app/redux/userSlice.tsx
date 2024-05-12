import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// export interface UserItem {
//   _id: string;
//   username: string;
//   email: string;
//   password: string; // Add quantity property
//   isAdmin: boolean;
// }
interface UserItem {
  _id: string;
  username: string;
  email: string;
  // Define saveUser property
  saveUser?: {
    username: string;
    email: string;
    isAdmin: boolean;
    password: string;
    // Add more properties as needed
  };
}

export interface CounterState {
  value: number;
  user: UserItem[]; // Renamed from user to users
}

const initialState: CounterState = {
  value: 0,
  user: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserItem>) => {
      state.user.push(action.payload);
    },
  },
});

export const { addUser } = userSlice.actions; // Export addUser action
export default userSlice.reducer;
