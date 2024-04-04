import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Reducers/UserSlice";
import isLoggedIn from "../Reducers/login.reducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    isLoggedIn,
  },
});

export default store;
