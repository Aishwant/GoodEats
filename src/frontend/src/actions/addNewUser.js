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
  REGISTER_SUCCESS
} from './types';

export const addNewUser = (info) => dispatch => {
    axios
      .post("/api/database/newUser", info)
      .then(res => {
        if (!res.data.status){
          dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
          });
        }else{
          localStorage.removeItem('uID');
          dispatch({
            type:LOGIN_FAIL
          });
          dispatch({
            type: GET_ERRORS,
            payload: res.data
          });
        }
      })
      .catch(err => {});
  };