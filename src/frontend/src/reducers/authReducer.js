import { USER_LOADING, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, GET_RESTAURANTS } from "../actions/types";

const initialState = {
  uID: localStorage.getItem("uID"),
  isAuthenticated: null,
  isLoading: false,
  restaurants: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return{
        ...state,
        isLoading: true
      }
    case USER_LOADED:
      return{
        ...state,
        isAuthenticated: true,
        isLoading: false,
    }
    case LOGIN_SUCCESS:
      localStorage.setItem("uID",action.payload.uID);
      return{
        ...state,
        uID: localStorage.getItem("uID"),
        isAuthenticated: true,
        isLoading: false,
    }
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
      localStorage.removeItem('uID');
      return {
        ...state,
        uID: null,
        isAuthenticated: false,
        isLoading: false,
      }
    case GET_RESTAURANTS:
      return{
        ...state,
        restaurants: action.payload
      };
    default:
      return state;
  }
}
