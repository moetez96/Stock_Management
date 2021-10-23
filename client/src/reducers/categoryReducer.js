import {
   ALL_CATEGORIES,
   ADD_CATEGORY,
   ERROR_ADD_CATEGORY,
   DELETE_CATEGORY,
   UPDATE_CATEGORY,
} from "../actions/types";

const INITIAL_STATE = {
    category: null,
    categories: [],
    loading: true,
    error_add_category: true,
  };
  
  function categoryReducer(state = INITIAL_STATE, action) {
    const {type, payload} = action;
    switch (type) {
        case ALL_CATEGORIES:
        return { 
          ...state, 
          categories: payload 
        };
        case ADD_CATEGORY:
        return { 
          ...state, 
          categories: payload 
        };
        case UPDATE_CATEGORY:
          return { 
            ...state, 
            loading: false, 
            categories: payload 
          };
        case DELETE_CATEGORY:
        return { 
          ...state,
          loading: false, 
          categories: payload 
        };
        case ERROR_ADD_CATEGORY:
        return { 
          ...state, 
          error_add_item: false 
        };

      default: return state;
    }
  }
  
  export default categoryReducer;