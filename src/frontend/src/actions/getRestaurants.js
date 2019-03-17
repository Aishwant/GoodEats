import React, { Component } from 'react'
import axios from "axios";
import { Redirect } from "react-router-dom";

import {
    GET_RESTAURANTS,
    GET_RESTAURANTS_BY_ZIP,
    GET_RESTAURANTS_BY_ID,
    ADD_RESTAURANT,
    DELETE_RESTAURANT,
    GET_MENU,
    EDIT_RESTAURANT
  } from './types';

//GET ALL RESTAURANTS
export const getRestaurant = () => (dispatch, getState) => {
    axios
      .get("/api/database/get")
      .then(res => {
        dispatch({
          type: GET_RESTAURANTS,
          payload: res.data
        });
      })
      .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };


//GET RESTAURANTS BY ID
export const getRestaurantByID = () => (dispatch, getState) => {
  const uID = localStorage.getItem("uID")
  axios
    .get("/api/database/getRestByID/" + uID)
    .then(res => {
      dispatch({
        type: GET_RESTAURANTS_BY_ID,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
export const getMenu = (rID) => dispatch => {
  axios.get('/api/database/getMenu/'+rID)
  .then(res => {
    dispatch({
      type: GET_MENU,
      payload: res.data
    });
    
  })
  .catch(err =>
    dispatch(returnErrors(err.response.data, err.response.status))
  );
}

//ADD RESTAURANT 
export const addRestaurant = restaurant => (dispatch, getState) => {
  const uID = localStorage.getItem("uID")
  axios
    .post("/api/database/addRestaurant/" + uID, restaurant)
    .then(res => {
      dispatch({
        type: ADD_RESTAURANT,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

//DELETE RESTAURANT
export const deleteRestaurant = rID => (dispatch, getState) => {
  const uID = localStorage.getItem("uID")
  axios
    .get(`/api/database/deleteRestaurant/` + rID + "/" + uID)
    .then(res => {
      dispatch({
        type: DELETE_RESTAURANT,
        payload: rID
      });
    })
    .catch(err => console.log(err));
};

//EDIT RESTAURANT
export const editRestaurant = (data, rID) => (dispatch, getState) => {
  axios
    .post(`/api/database/editRestaurant/` + rID, data)
    .then(res => {
      dispatch({
        type: EDIT_RESTAURANT,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

