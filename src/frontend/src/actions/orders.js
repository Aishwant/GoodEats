import axios from "axios";

import {GET_CART} from './types.js';

//Get user's cart
export const getCart = () => (dispatch) => {
    const uID = localStorage.getItem("uID");
    console.log("Test1");
    axios
      .get("/api/database/getCart/" + uID)
      .then(res => {
        dispatch({
          type: GET_CART,
          payload: res.data
        });
      })
      .catch(err => console.log(err));
};