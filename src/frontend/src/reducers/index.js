import { combineReducers } from "redux";
import leads from "./leads";
import errors from "./errors";
import authReducer from "./authReducer";

export default combineReducers({
  leads,
  errors,
  authReducer
});
