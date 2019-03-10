import React, { Component } from 'react'
import axios from "axios";
import { Redirect } from "react-router-dom";

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    GET_ERRORS,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    GET_RESTAURANTS,
    GET_RESTAURANTS_BY_ZIP
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

//GET RESTAURANTS BY ZIPCODE
export const getRestaurantByZip = (zip) => (dispatch, getState) => {
  axios
    .get("/api/database/getRestByZip/" + zip)
    .then(res => {
      dispatch({
        type: GET_RESTAURANTS_BY_ZIP,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};