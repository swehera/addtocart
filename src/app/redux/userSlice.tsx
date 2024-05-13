import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// export interface UserItem {
//   _id: string;
//   username: string;
//   email: string;
//   password: string; // Add quantity property
//   isAdmin: boolean;
// }
interface LoggedData {
  id: string;
  username: string;
  email: string;
  // Add other properties if available
}

interface UserItem {
  // _id: string;
  // username: string;
  // email: string;
  loggedData: LoggedData; // Include the loggedData property
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
    clearUser: (state) => {
      state.user = [];
    },
  },
});

export const { addUser, clearUser } = userSlice.actions; // Export addUser action
export default userSlice.reducer;
