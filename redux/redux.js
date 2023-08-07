import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import authReducer from "./authentication/reducer";
import UserReducer from "./user/reducer.js";
// import { composeWithDevTools } from "remote-redux-devtools";
import thunkMiddleware from "redux-thunk";
import socketReducer from "./room/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: UserReducer,
  socket: socketReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
