import axios from "axios";

import {GET_CART, ADD_TO_CART, DELETE_CART_ITEM, GET_ITEM_COUNT, EDIT_INSTRUCTIONS, PLACE_ORDER, ADD_PENDING_ORDER, REJECT_PENDING_ORDER, ACCEPT_PENDING_ORDER, ADD_PENDING_DEV_ORDER, ACCEPT_PENDING_DEV_ORDER, ADD_ON_DEV_ORDER, ADD_DELIVERED_ORDER, DELIVERED_ORDER, SET_MY_ORDERS } from './types.js';

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
export const placeOrder = (orderData, restaurant, userData) => (dispatch) => {
  const keys = Object.keys(orderData);
  const owner_ID = orderData[keys[0]].owner_ID
  const rID = orderData[keys[0]].rID
  const total = orderData.total
  delete orderData.total
  let orderItemCount = 0;
  let item;
  for(item in orderData){
    orderItemCount += orderData[item].Quantity
  }
  const uID = localStorage.getItem("uID");
  const uuidv4 = require('uuid/v4');
  const orderID = uuidv4();
  const rName = restaurant.Name;
  const rAddress = restaurant.Address;
  const rCity = restaurant.City;
  const rZipcode = restaurant.zipcode;
  const orderPlacedTime = new Date();
  const orderDate = orderPlacedTime.toLocaleDateString();
  const orderTime = orderPlacedTime.toLocaleTimeString();
  const user_info = {'customerFName':userData.fname, 'customerLName':userData.lname, 'customerAddress1':userData.Address1, 'customerAddress2':userData.Address2, 'customerCity':userData.city, 'customerZipcode':userData.zipcode};
  const order = { [orderID] : {'orderDate':orderDate, 'orderTime':orderTime, 'status':'PENDING', 'rID':rID, 'rName':rName, 'rAddress':rAddress, 'rCity':rCity, 'rZipcode':rZipcode, 'owner_ID':owner_ID, 'uID':uID, 'total':total, user_info, 'items':orderData}}
  axios
    .post("/api/database/placeOrder", order)
    .then(res => {
      dispatch({
        type: PLACE_ORDER,
        resID: rID,
        totalItems: orderItemCount
      });
    })
    .catch(err => console.log(err));
}

//Add an order to the users list of pending orders
export const addPendingOrder = (orderData) => (dispatch) => {
  if(orderData){
    console.log(orderData)
    dispatch({
      type: ADD_PENDING_ORDER,
      payload: orderData
    })
  }
}

export const acceptPendingOrder = (order,id,rID) => (dispatch) => {
  const data = {
    orderID: id,
    ownerID: localStorage.getItem("uID"),
    rID: rID,
    order:order
  }
  axios.post('/api/database/acceptPendingOrder',data)
  .then(res => {
    dispatch({
      type: ACCEPT_PENDING_ORDER,
      payload: id
    })
  })
}

//When the user rejects the pending orders
export const rejectPendingOrder = (orderID) => (dispatch) => {
  const data = {
    ownerID: localStorage.getItem("uID"),
    orderID: orderID
  }
  axios.post('/api/database/rejectPendingOrder',data)
  .then(res => {
    dispatch({
      type: REJECT_PENDING_ORDER,
      payload: orderID
    })
  })
}

//Add an order to the driver's list of pending dev orders
export const addPendingDevOrder = (orderData) => (dispatch) => {
  
  dispatch({
    type: ADD_PENDING_DEV_ORDER,
    payload: orderData
  })
}

export const acceptPendingDevOrder = (rid,oid,orderData) => (dispatch) => {
  const uId= localStorage.getItem('uID')
  orderData['driver_ID']= uId
  const data = {
    rID:rid,
    orderID:oid,
    uId: uId,
    order:orderData,
  }
  axios.post('/api/database/acceptPendingDevOrder',data)
  .then(res => {
    dispatch({
      type: ACCEPT_PENDING_DEV_ORDER,
      rid: rid,
      oid: oid,
    })
  }
  )
  .error()
}

export const addOnDevOrder = (orderData) => (dispatch) => {
  dispatch({
    type: ADD_ON_DEV_ORDER,
    payload: orderData
  })
}


export const addDeliveredOrder = (orderData) => (dispatch) => {
  dispatch({
    type: ADD_DELIVERED_ORDER,
    payload: orderData
  })
}

export const deliveredOrder = (rid,oid,orderData) => (dispatch) => {
  const data = {
    rID:rid,
    orderID:oid,
    order:orderData,
    uId: localStorage.getItem('uID')
  }

  axios.post('/api/database/orderDelivered', data)
  .then(res => {
    dispatch({
      type: DELIVERED_ORDER,
      rid: rid,
      oid: oid
    })
  })
  .error()
}

export const setMyOrders = (data) => (dispatch) => {
  dispatch({
    type: SET_MY_ORDERS,
    payload: data
  })
}