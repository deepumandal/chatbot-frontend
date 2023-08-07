import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  OTP_ERROR,
  OTP_LOADING,
  OTP_SUCCESS,
} from "./auth.types";
import axios from "axios";

import url from "../../ipconfig.js";
import { io } from "socket.io-client";
import { socket } from "../../view/ChatScreen";

// process.env.NODE_ENV == "production"
//   ? process.env.API_BASE_URL_PROD
//   : process.env.API_BASE_URL_DEV;

export const GetOtp = (number) => (dispatch) => {
  dispatch({ type: OTP_LOADING });
  setTimeout(() => {
    dispatch({ type: OTP_SUCCESS, payload: number });
    //   dispatch({ type: OTP_ERROR });
  }, 1000);
};

export const CreateNewAccount = (body) => (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  axios
    .post(`${url}/authentication/newuser`, body)
    .then((response) => {
      let body = response.data;

      dispatch({ type: LOGIN_SUCCESS, payload: body });

      getConnection();

      console.log(body);
    })
    .catch((error) => {
      dispatch({ type: LOGIN_ERROR, payload: error.message });
    });
};
