import axios from "axios";
import { GET_USER } from './types';

export const getUser = () => (dispatch, getState) => {
    const uID = localStorage.getItem("uID")

    axios
      .get("/api/database/getUser/" + uID)
      .then(res => {
        dispatch({
          type: GET_USER,
          payload: res.data
        });
      })
      .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };