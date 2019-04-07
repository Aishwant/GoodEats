import axios from "axios";

export const addUser = (info) => dispatch => {
  const uuidv4 = require('uuid/v4');
  const rID = uuidv4();

  const toData = {
      uID: localStorage.getItem("uID"),
      data: info,
      resID: rID,
      token: localStorage.getItem("token"),
    };
    axios
      .post("/api/database/newuser", toData)
      .then(res => {
        
      })
      .catch(err => {});
  };

export const editUser = (info) => dispatch =>{
  const data = {
    uID: localStorage.getItem("uID"),
    data: info,
  }
  axios
    .post("/api/database/editmyprofile",data)
    .then(res =>{

    })
    .catch(err => {});
}