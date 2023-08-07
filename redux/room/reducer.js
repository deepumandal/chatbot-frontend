import {
  CLOSE_ROOM,
  GET_CHAT,
  ROOM_ACTIVE,
  ROOM_ERROR,
  ROOM_LOADING,
  ROOM_SUCCESS,
} from "./room.types.js";

const initialState = {
  Loading: false,
  Error: false,
  errorMessage: "nil",
  activeSocket: "",
  subjectSocket: "",
  isActive: false,
  currentChat: {},
};

const socketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ROOM_LOADING: {
      return {
        ...state,
        Loading: true,
        Error: false,
      };
    }
    case ROOM_SUCCESS: {
      return {
        ...state,
        Loading: false,
        errorMessage: "validation successfully",
        activeSocket: action.payload,
        isActive: false,
      };
    }
    case ROOM_ERROR: {
      return {
        ...state,
        Error: true,
        Loading: false,
        errorMessage: "something went wrong",
      };
    }
    case ROOM_ACTIVE: {
      return {
        ...state,
        subjectSocket: action.payload,
        isActive: true,
      };
    }
    case CLOSE_ROOM: {
      return {
        ...state,
        subjectSocket: "",
        isActive: false,
      };
    }
    case GET_CHAT: {
      console.log(JSON.stringify(action.payload, null, 2));
      return {
        ...state,
        currentChat: action.payload[0],
      };
    }
    default:
      return state;
  }
};

export default socketReducer;
