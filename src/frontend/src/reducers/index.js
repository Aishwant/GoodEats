import { combineReducers } from "redux";
import errors from "./errors";
import authReducer from "./authReducer";

export default combineReducers({
  errors,
  authReducer
});
