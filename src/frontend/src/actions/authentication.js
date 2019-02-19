import React, { Component } from 'react'
import axios from "axios";
import { Redirect } from "react-router-dom";

//Authenticate

import {
  LOG_IN,
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS
} from './types';

//CHECK uID & LOAD USER
export const loadUser = () => (dispatch, getState) => {

  //User Loading
  dispatch({ type: USER_LOADING });

  //Get uID from state
  const uID = getState().authReducer.uID;

  if(uID){
    dispatch({
      type: USER_LOADED
    });
  }

}



export const loginAuth = (credentials) => dispatch => {
    axios
      .post("/api/auth/login", credentials)
      .then(res => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        localStorage.removeItem('uID');
        dispatch({
          type:LOGIN_FAIL
        })
      });
  };


//Register
export const register = (credentials) => dispatch => {
  axios
    .post("/api/auth/register", credentials)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type:AUTH_ERROR
      })
    });
};

//LOGOUT
export const logout = () => (dispatch, getState) => {

  //Get UID from state
  const uID = getState().authReducer.uID;

  if(uID){
    dispatch({
      type: LOGOUT_SUCCESS
    });
  }


}