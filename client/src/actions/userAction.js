import axios from "axios";
import {
    LOGIN,
    REGISTER,
    ERROR_REGISTER,
    ERROR_LOGIN
} from "../actions/types";

const URL = "http://localhost:8763"

export const login = (user) => async (dispatch) => {
    console.log(JSON.stringify(user))
    const body = JSON.stringify(user);
    console.log(body)

    try {
        const {data} = await axios.post(URL + "/user-service/api/auth/login", user );
        console.log(data)
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', data.token);
        dispatch({
            type: LOGIN,
            payload: data,
        });
    } catch (e) {
        console.log(e)
        dispatch({
            type:  ERROR_LOGIN,
            payload: e,
        });
    }
};

export const signup = (user) => async (dispatch) => {
    try {
        const {data} = await axios.post(URL + "/user-service/api/auth/signup",user);
        console.log(data)
        dispatch({
            type: REGISTER,
        });
    } catch (e) {
        dispatch({
            type: ERROR_REGISTER,
        });
    }
};