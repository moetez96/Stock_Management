import axios from "axios";
import {
   ALL_ClIENTS,
   ADD_CLIENT,
   ERROR_ADD_CLIENT,
   DELETE_CLIENT,
   UPDATE_CLIENT,
} from "./types";

const URL = "http://localhost:8763"

export const getAllClients = () => async (dispatch) => {
    try {
        const {data} = await axios.get(URL + "/client-service/api/client");
        console.log(data)
        dispatch({
            type: ALL_ClIENTS,
            payload: data,
        });
    } catch (e) {
        dispatch({
            type: 'ERROR',
            payload: {e},
        });
    }
};

export const addClient = (client) => async (dispatch) => {
    
    try {
        const {data} = await axios.post(URL + "/client-service/api/client", client);
        console.log(data)
        dispatch({
            type: ADD_CLIENT,
            payload: data,
        });
    } catch (e) {
        dispatch({
            type: ERROR_ADD_CLIENT,
        });
    }
};

export const deleteClient = (id) => async (dispatch) => {
    console.log(id)
    try {
        const {data} = await axios.delete(URL + `/client-service/api/client/${id}`);
        console.log(data)
        dispatch({
            type: DELETE_CLIENT,
            payload: data,
        });
    } catch (e) {
        dispatch({
            type: 'ERROR',
        });
    }
};

export const updateClient = (id, client) => async (dispatch) => {
    console.log(id)
    try {
        const {data} = await axios.put(URL + `/client-service/api/client/${id}`, client);
        console.log(data)
        dispatch({
            type: UPDATE_CLIENT,
            payload: data,
        });
    } catch (e) {
        dispatch({
            type: 'ERROR',
        });
    }
};