import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    value: {
      isLoggedIn: false,
      user: {},
    },
  },
  reducers: {
    login: (state, action) => {
      state.value.user = action.payload.user;
      state.value.isLoggedIn = true;
    },
    logout: (state, action) => {
      state.value.user = {};
      state.value.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
