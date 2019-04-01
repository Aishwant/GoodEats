import axios from "axios";

import {GET_CART, ADD_TO_CART, DELETE_CART_ITEM, GET_ITEM_COUNT, EDIT_INSTRUCTIONS} from './types.js';

//Get user's cart
export const getCart = () => (dispatch) => {
    const uID = localStorage.getItem("uID");
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
  dispatch({
    type: ADD_TO_CART,
    item: itemID,
    data: itemData,
    qty: Quantity
  });
  axios
    .post("/api/database/addToCart/" + uID, data)
    .then(res => {
      
    })
    .catch(err => console.log(err));
};

//Delete an item from the user's cart
export const deleteCartItem = (itemID, Quantity) => (dispatch) => {
  const uID = localStorage.getItem("uID")
  axios
    .get(`/api/database/deleteCartItem/` + itemID + "/" + uID)
    .then(res => {
      dispatch({
        type: DELETE_CART_ITEM,
        payload: itemID,
        qty: Quantity
      });
    })
    .catch(err => console.log(err));
};

//Get the total number of items in the cart when loading the page
export const getItemCount = () => (dispatch) => {
  const uID = localStorage.getItem("uID");
  axios
    .get("/api/database/getItemCount/" + uID)
    .then(res => {
      dispatch({
        type: GET_ITEM_COUNT,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

//Get the total number of items in the cart when loading the page
export const editInstructions = (itemID, Instructions) => (dispatch) => {
  const uID = localStorage.getItem("uID");
  const data = { uID, itemID, Instructions };
  axios
    .post("/api/database/editInstructions", data)
    .then(res => {
      dispatch({
        type: EDIT_INSTRUCTIONS,
        id: itemID,
        instructions: Instructions
      });
    })
    .catch(err => console.log(err));
};