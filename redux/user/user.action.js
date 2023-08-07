import { USER_ERROR, USER_LOADING, USER_SUCCESS } from "./user.types.js";
import axios from "axios";

import url from "../../ipconfig.js";

export const GetAllUser = (user) => (dispatch) => {
  dispatch({ type: USER_LOADING });
  axios
    .get(`${url}/user`)
    .then((response) => {
      let body = response.data;
      let data = body?.filter((item) => item._id !== user._id);
      dispatch({ type: USER_SUCCESS, payload: data });
      // console.log(JSON.stringify(response.data, null, 2));
    })
    .catch((error) => {
      dispatch({ type: USER_ERROR, payload: error.message });
    });
};
