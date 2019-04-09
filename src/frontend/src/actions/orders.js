import axios from "axios";

import {GET_CART, ADD_TO_CART, DELETE_CART_ITEM, GET_ITEM_COUNT, EDIT_INSTRUCTIONS, PLACE_ORDER, ADD_PENDING_ORDER, REJECT_PENDING_ORDER } from './types.js';

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
  const formattedData = { [itemID] : itemData }
  const newTotal = itemData.Price
  dispatch({
    type: ADD_TO_CART,
    rID: itemData.rID,
    item: itemID,
    data: itemData,
    qty: Quantity,
    fd: formattedData,
    toBeAdded: newTotal
  });
  axios
    .post("/api/database/addToCart/" + uID, data)
    .then(res => {
      
    })
    .catch(err => console.log(err));
};

//Delete an item from the user's cart
export const deleteCartItem = (rID, itemID, Quantity, Price) => (dispatch) => {
  const uID = localStorage.getItem("uID")
  const toBeRemoved = Quantity*Price
  axios
    .get(`/api/database/deleteCartItem/` + rID + "/"+ itemID + "/" + uID)
    .then(res => {
      dispatch({
        type: DELETE_CART_ITEM,
        resID: rID,
        payload: itemID,
        qty: Quantity,
        price: toBeRemoved
      });
    })
    .catch(err => console.log(err));
};

//Get the total number of items in the cart when loading the page
export const getItemCount = () => (dispatch) => {
  const uID = localStorage.getItem("uID");
  if(uID !== null){
    axios
      .get("/api/database/getItemCount/" + uID)
      .then(res => {
        dispatch({
          type: GET_ITEM_COUNT,
          payload: res.data
        });
      })
      .catch(err => console.log(err));
  }
};

//Get the total number of items in the cart when loading the page
export const editInstructions = (rID, itemID, Instructions) => (dispatch) => {
  const uID = localStorage.getItem("uID");
  const data = { uID, rID, itemID, Instructions };
  axios
    .post("/api/database/editInstructions", data)
    .then(res => {
      dispatch({
        type: EDIT_INSTRUCTIONS,
        resID: rID,
        id: itemID,
        instructions: Instructions
      });
    })
    .catch(err => console.log(err));
};

//Send an order request to the owner of the restaurant the user is ordering from
export const placeOrder = (orderData) => (dispatch) => {
  const keys = Object.keys(orderData);
  orderData['ownner_ID'] = orderData[keys[0]].owner_ID
  orderData['rID'] = orderData[keys[0]].rID
  const uuidv4 = require('uuid/v4');
  const orderID = uuidv4();
  orderData['orderID'] = { [orderID] : "Order Data"}
  orderData['uID'] = localStorage.getItem("uID");
  console.log(orderData)
  *axios
    .post("/api/database/placeOrder", orderData)
    .then(res => {
      dispatch({
        type: PLACE_ORDER,
        resID: orderData.rID
      });
    })
    .catch(err => console.log(err));
};

//Add an order to the users list of pending orders
export const addPendingOrder = (orderData) => (dispatch) => {
  console.log(orderData)
  dispatch({
    type: ADD_PENDING_ORDER,
    payload: orderData
  })
}

//When the user rejects the pending orders
export const rejectPendingOrder = (orderID) => (dispatch) => {
  const data = {
    ownerID = localStorage.getItem['uID'],
    orderID = orderID
  }
  axios.post('/api/database/rejectPendingOrder',orderID)
  .then(res => {
    dispatch({
      type: REJECT_PENDING_ORDER,
      payload: orderID
    })
  })
}