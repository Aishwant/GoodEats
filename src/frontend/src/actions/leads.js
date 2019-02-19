import axios from "axios";

import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_ERRORS } from "./types";

//GET LEADS
//making a async request
export const getLeads = () => dispatch => {
  axios
    .get("/stocks/")
    .then(res => {
      dispatch({
        type: GET_LEADS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

//DELETE LEAD
export const deleteLead = (id) => dispatch => {
  axios
    .delete(`/stocks/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_LEAD,
        payload: id
      });
    })
    .catch(err => console.log(err));
};


//Add leads
export const addLead = (lead) => dispatch => {
    axios
      .post("/stocks/", lead)
      .then(res => {
        dispatch({
          type: ADD_LEAD,
          payload: res.data
        });
      })
      .catch(err => console.log(err));
};