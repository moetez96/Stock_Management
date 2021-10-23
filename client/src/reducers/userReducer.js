import {
    LOGIN,
    REGISTER,
    ERROR_REGISTER,
    ERROR_LOGIN
} from "../actions/types";

const INITIAL_STATE = {
    token: null,
    user: null,
    error_signup: true,
    error_login: true
  };

  function userReducer(state = INITIAL_STATE, action) {
    const {type, payload} = action;
    switch (type) {
        case LOGIN:
        return { 
          ...state, 
          token: payload.data, 
          user: payload.user, 
          loading: false 
        };
        case REGISTER:
        return { 
          error_signup: false,
        };
        case ERROR_REGISTER:
        return {
          error_signup: true,
        };
      default: return state;
    }
  }
  
  export default userReducer;