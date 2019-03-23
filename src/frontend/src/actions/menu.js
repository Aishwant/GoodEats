import axios from "axios";

import {
    GET_CATEGORIES,
    ADD_CATEGORY,
    DELETE_CATEGORY,
    EDIT_CATEGORY,
  } from './types';

  //Add a new category to the menu of the given restaurant
  export const addCategory = category => (dispatch) => {
    axios
      .post("/api/database/addCategory", category)
      .then(res => {
        dispatch({
          type: ADD_CATEGORY,
          payload: res.data
        });
      })
      .catch(err => console.log(err));
  };