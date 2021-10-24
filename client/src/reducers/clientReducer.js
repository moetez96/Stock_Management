import {
    ALL_ClIENTS,
    ADD_CLIENT,
    UPDATE_CLIENT,
    DELETE_CLIENT,
    ERROR_ADD_CLIENT
} from "../actions/types";

const INITIAL_STATE = {
    client: null,
    clients: [],
    loading: true,
    error_add_client: true,
  };
  
  function clientReducer(state = INITIAL_STATE, action) {
    const {type, payload} = action;
    switch (type) {
        case ALL_ClIENTS:
        return { 
          ...state, 
          clients: payload 
        };
        case ADD_CLIENT:
        return { 
          ...state, 
          client: payload 
        };
        case UPDATE_CLIENT:
          return { 
            ...state, 
            loading: false, 
            clients: payload 
          };
        case DELETE_CLIENT:
        return { 
          ...state,
          loading: false, 
          clients: payload 
        };
        case ERROR_ADD_CLIENT:
        return { 
          ...state, 
          error_add_client: false 
        };

      default: return state;
    }
  }
  
  export default clientReducer;