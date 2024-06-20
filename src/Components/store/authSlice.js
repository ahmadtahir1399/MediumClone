import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SignIn: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    SignOut: (state, action) => {
      state.status = null;
      state.userData = null;
    },
  },
});
export const { SignIn, SignOut } = authSlice.actions;

export default authSlice.reducer;
