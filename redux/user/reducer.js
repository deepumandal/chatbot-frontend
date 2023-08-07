import { USER_ERROR, USER_LOADING, USER_SUCCESS } from "./user.types.js";

const initialState = {
  Loading: false,
  Error: false,
  errorMessage: "nil",
  data: [],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADING: {
      return {
        ...state,
        Loading: true,
        Error: false,
      };
    }
    case USER_SUCCESS: {
      return {
        ...state,
        Loading: false,
        errorMessage: "validation successfully",
        data: action.payload,
      };
    }
    case USER_ERROR: {
      return {
        ...state,
        Error: true,
        Loading: false,
        errorMessage: "wrong otp entered",
      };
    }
    default:
      return state;
  }
};

export default UserReducer;
