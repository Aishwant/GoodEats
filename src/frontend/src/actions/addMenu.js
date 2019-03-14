import React from 'react'
import axios from "axios";
import {Redirect} from "react-router-dom";

import{
    ADD_MENU,
} from './types';

export const addMenu =(item) =>(dispatch)=>{
    axios
        .post("/api/database/addMenu", item)
        .then(res => {
            dispatch({
                type:ADD_MENU,
                payload:res.data

            });
        })
        .catch(err=>
            dispatch(returnErrors(err.response.date,err.response.status)));


};




