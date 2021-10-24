
import { combineReducers } from "redux";
import alert from "./alert";
import itemReducer from "./itemReducer";
import userReducer from "./userReducer";
import categoryReducer from "./categoryReducer";
import clientReducer from "./clientReducer" ;
import orderReducer from "./orderReducer";

export default combineReducers({
    alert,
    itemReducer,
    userReducer,
    categoryReducer,
    clientReducer ,
    orderReducer
  });