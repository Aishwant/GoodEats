import axios from "axios";

import {
    GET_CATEGORIES,
    ADD_CATEGORY,
    DELETE_CATEGORY,
    EDIT_CATEGORY,
    GET_ITEMS,
    ADD_ITEM,
    DELETE_ITEM,
    EDIT_ITEM
  } from './types';

  //Add a new category to the menu of the given restaurant
  export const addCategory = category => (dispatch) => {
    const uuidv4 = require('uuid/v4');
    const itemID = uuidv4();
    const placeholderItem = {[itemID] : {"Name":"Item Name", "Description":"Item Description", "Price":"Item Price", "Quantity":"Item Quantity"}};
    category["placeholderItem"] = placeholderItem;
    axios
      .post("/api/database/addCategory", category)
      .then(res => {
        dispatch({
          type: ADD_CATEGORY,
          categoryName: category['newCategory'],
          iID: itemID,
          item: placeholderItem[itemID]
        });
      })
      .catch(err => console.log(err));
  };

  //Get all categories from given restaurant
  export const getCategories = (rID) => (dispatch) => {
    axios
      .get("/api/database/getCategories/" + rID)
      .then(res => {
        dispatch({
          type: GET_CATEGORIES,
          payload: res.data
        });
      })
      .catch(err => console.log(err));
  };

  //Get all the items from the given category
  export const getItems = data => (dispatch) => {
    axios
      .post("/api/database/getItems", data)
      .then(res => {
        dispatch({
          type: GET_ITEMS,
          payload: res.data
        });
      })
      .catch(err => console.log(err));
  };

  //Add a new category to the menu of the given restaurant
  export const addItemToCategory = data => (dispatch) => {
    const uuidv4 = require('uuid/v4');
    const itemID = uuidv4();
    const newItem = {[itemID] : {"Name":data['Name'], "Description":data['Description'], "Price":data['Price']}};
    data['newItem'] = newItem;
    axios
      .post("/api/database/addItemToCategory", data)
      .then(res => {
        dispatch({
          type: ADD_ITEM,
          categoryName: data['category'],
          iID: itemID,
          item: newItem[itemID]
        });
      })
      .catch(err => console.log(err));
  };

  //Delete a given category
  export const deleteCategory = (category, rID) => (dispatch) => {
    const data = {category , rID}
    axios
      .post('/api/database/deleteCategory', data)
      .then(res => {
        dispatch({
          type: DELETE_CATEGORY,
          payload: category
        });
      })
      .catch(err => console.log(err));
  };

  //Delete a given item from a restaurants menu
  export const deleteItem = (rID, category, item) => (dispatch) => {
    const data = {category , rID, item}
    console.log(category)
    console.log(item)
    axios
      .post(`/api/database/deleteItem`, data)
      .then(res => {
        dispatch({
          type: DELETE_ITEM,
          categoryName: category,
          itemID: item
        });
      })
      .catch(err => console.log(err));
  };

  //Add a new category to the menu of the given restaurant
  export const editItem = item => (dispatch) => {
    axios
      .post("/api/database/editItem", item)
      .then(res => {
        dispatch({
          type: EDIT_ITEM,
          payload: res.data
        });
      })
      .catch(err => console.log(err));
  };

  //Edit that name of a given category
  export const editCategory = category => (dispatch) => {
    axios
      .post("/api/database/editCategory", category)
      .then(res => {
        dispatch({
          type: EDIT_CATEGORY,
          payload: res.data
        });
      })
      .catch(err => console.log(err));
  };