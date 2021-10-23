
import { combineReducers } from "redux";
import alert from "./alert";
import itemReducer from "./itemReducer";
import userReducer from "./userReducer";
import categoryReducer from "./categoryReducer";

export default combineReducers({
    alert,
    itemReducer,
    userReducer,
    categoryReducer
  });