import axios from "axios";

import {GET_CART, ADD_TO_CART, DELETE_CART_ITEM} from './types.js';

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
export const addToCart = (itemID, itemData, Quantity) => (dispatch) => {
  const uID = localStorage.getItem("uID")
  const data = { itemID, itemData, Quantity}
  axios
    .post("/api/database/addToCart/" + uID, data)
    .then(res => {
      dispatch({
        type: ADD_TO_CART,
        item: itemID,
        data: itemData,
        qty: Quantity
      });
    })
    .catch(err => console.log(err));
};

//Delete an item from the user's cart
export const deleteCartItem = itemID => (dispatch) => {
  const uID = localStorage.getItem("uID")
  axios
    .get(`/api/database/deleteCartItem/` + itemID + "/" + uID)
    .then(res => {
      dispatch({
        type: DELETE_CART_ITEM,
        payload: itemID
      });
    })
    .catch(err => console.log(err));
};
