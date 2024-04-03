import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import reducer from "./reducers";

const store = configureStore({
  reducer: {
    user: userReducer,
    isLoggedIn: reducer,
  },
});

export default store;
