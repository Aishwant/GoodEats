import React, { Component } from 'react'
import axios from "axios";
import { Redirect } from "react-router-dom";

//Authenticate

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  GET_ERRORS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  CUSTOMER_ADDED
} from './types';

export const addUser = (info) => dispatch => {

  const toData = {
      uID: localStorage.getItem("uID"),
      data: info
    };
    axios
      .post("/api/database/newuser", toData)
      .then(res => {
        console.log(res.data)
        // if (res.data.status=="success"){
        //   dispatch({
        //     type: CUSTOMER_ADDED,
        //     payload: res.data
        //   });
        // }else{
        //   localStorage.removeItem('uID');
        //   dispatch({
        //     type:LOGIN_FAIL
        //   });
        //   dispatch({
        //     type: GET_ERRORS,
        //     payload: res.data
        //   });
        // }
      })
      .catch(err => {});
  };