import {
  GET_CHAT,
  ROOM_ACTIVE,
  ROOM_ERROR,
  ROOM_LOADING,
  ROOM_SUCCESS,
} from "./room.types.js";
import axios from "axios";

import url from "../../ipconfig.js";

export const activeRoom = (user) => (dispatch) => {
  dispatch({ type: ROOM_ACTIVE, payload: user._id });
};
export const sendMessage = (userId) => (dispatch) => {
  dispatch({ type: ROOM_LOADING });
  // socket connection here
};

export const getlateschat = (id, subject) => (dispatch) => {
  // GET_CHAT
  axios
    .post(`${url}/user/getdata`, {
      id,
      subject,
    })
    .then((response) => {
      // console.log("GET_CHAT", JSON.stringify(response.data, null, 2));
      dispatch({ type: GET_CHAT, payload: response.data });
    });
};
