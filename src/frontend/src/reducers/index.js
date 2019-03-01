import { combineReducers } from "redux";
import errors from "./errors";
import authReducer from "./authReducer";
import restaurantReducer from "./restaurantReducer";

export default combineReducers({
  errors,
  authReducer,
  restaurantReducer
});
