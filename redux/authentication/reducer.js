import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  OTP_ERROR,
  OTP_LOADING,
  OTP_SUCCESS,
} from "./auth.types";

const initialState = {
  loginLoading: false,
  loginError: false,
  errorMessage: "nil",
  userData: {
    isAuthenticated: false,
    number: "",
    body: {}
  },
  otpLoading: false,
  otpError: false,
  otpMessage: "nil",
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    // otp here
    case OTP_LOADING: {
      return {
        ...state,
        otpLoading: true,
        otpError: false,
      };
    }
    case OTP_SUCCESS: {
      alert("Otp");
      console.log("Otp", action.payload);
      return {
        ...state,
        otpLoading: false,
        otpMessage: "validation successfully",
        userData: {
          ...state.userData,
          number: action.payload,
        },
      };
    }
    case OTP_ERROR: {
      return {
        ...state,
        otpError: true,
        otpLoading: false,
        otpMessage: "wrong otp entered",
      };
    }
    case LOGIN_LOADING: {
      return {
        ...state,
        loginLoading: true,
        loginError: false,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loginLoading: false,
        errorMessage: "validation successfully",
        userData: {
          ...state.userData,
          body: action.payload,
          isAuthenticated: true,
        },
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        loginError: true,
        loginLoading: false,
        errorMessage: "wrong otp entered",
      };
    }
    default:
      return state;
  }
};

export default myReducer;
