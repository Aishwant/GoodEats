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
    GET_RESTAURANTS
  } from './types';

//GET RESTAURANT NAME
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