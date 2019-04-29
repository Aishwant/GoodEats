import { combineReducers } from "redux";
import errors from "./errors";
import authReducer from "./authReducer";
import restaurantReducer from "./restaurantReducer";
import cartReducer from "./cartReducer";
import orderReducer from "./orderReducer";

export default combineReducers({
  errors,
  authReducer,
  restaurantReducer,
  cartReducer,
  orderReducer
});
