import {
    ALL_ORDERS,
    ADD_ORDER,
    ERROR_ADD_ORDER,
    DELETE_ORDER,
    UPDATE_ORDER,
 } from "../actions/types";
 
 const INITIAL_STATE = {
     order: null,
     orders: [],
     loading: true,
     error_add_order: true,
   };
   
   function orderReducer(state = INITIAL_STATE, action) {
     const {type, payload} = action;
     switch (type) {
         case ALL_ORDERS:
         return { 
           ...state, 
           orders: payload 
         };
         case ADD_ORDER:
         return { 
           ...state, 
           orders: payload 
         };
         case UPDATE_ORDER:
           return { 
             ...state, 
             loading: false, 
             orders: payload 
           };
         case DELETE_ORDER:
         return { 
           ...state,
           loading: false, 
           orders: payload 
         };
         case ERROR_ADD_ORDER:
         return { 
           ...state, 
           error_add_order: false 
         };
 
       default: return state;
     }
   }
   
   export default orderReducer;