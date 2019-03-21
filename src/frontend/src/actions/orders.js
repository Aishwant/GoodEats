import axios from "axios";

import {GET_CART, ADD_TO_CART} from './types.js';

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

//Add item to users's cart
export const addToCart = (item) => (dispatch) => {
  const uID = localStorage.getItem("uID")
  const data = item
  axios
    .post("/api/database/addToCart/" + uID, data)
    .then(res => {
      dispatch({
        type: ADD_TO_CART,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
