import {
    ALL_ITEMS,
    ADD_ITEM,
    ERROR_ADD_ITEM,
    DELETE_ITEM,
    UPDATE_ITEM
} from "../actions/types";

const INITIAL_STATE = {
    item: null,
    items: [],
    loading: true,
    error_add_item: true,
  };
  
  function itemReducer(state = INITIAL_STATE, action) {
    const {type, payload} = action;
    switch (type) {
        case ALL_ITEMS:
        return { 
          ...state, 
          items: payload 
        };
        case ADD_ITEM:
        return { 
          ...state, 
          item: payload 
        };
        case UPDATE_ITEM:
          return { 
            ...state, 
            loading: false, 
            items: payload 
          };
        case DELETE_ITEM:
        return { 
          ...state,
          loading: false, 
          items: payload 
        };
        case ERROR_ADD_ITEM:
        return { 
          ...state, 
          error_add_item: false 
        };

      default: return state;
    }
  }
  
  export default itemReducer;