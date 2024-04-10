import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userreducer";
import authReducer from "./AuthentificationReducer";

export default combineReducers({
  userReducer,
  auth: authReducer,
});
