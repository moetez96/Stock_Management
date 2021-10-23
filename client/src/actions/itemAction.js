import axios from "axios";
import {
   ALL_ITEMS,
   ADD_ITEM,
   ERROR_ADD_ITEM,
   DELETE_ITEM,
   UPDATE_ITEM,
} from "./types";

const URL = "http://localhost:8763"

export const getAllItems = () => async (dispatch) => {
    try {
        const {data} = await axios.get(URL + "/item-service/api/items");
        console.log(data)
        dispatch({
            type: ALL_ITEMS,
            payload: data,
        });
    } catch (e) {
        dispatch({
            type: 'ERROR',
            payload: {e},
        });
    }
};

export const addItems = (item) => async (dispatch) => {
    console.log(item)
    try {
        const {data} = await axios.post(URL + "/item-service/api/items", item);
        console.log(data)
        dispatch({
            type: ADD_ITEM,
            payload: data,
        });
    } catch (e) {
        dispatch({
            type: ERROR_ADD_ITEM,
        });
    }
};

export const deleteItems = (id) => async (dispatch) => {
    console.log(id)
    try {
        const {data} = await axios.delete(URL + `/item-service/api/items/${id}`);
        console.log(data)
        dispatch({
            type: DELETE_ITEM,
            payload: data,
        });
    } catch (e) {
        dispatch({
            type: 'ERROR',
        });
    }
};

export const updateItems = (id, item) => async (dispatch) => {
    console.log(id)
    try {
        const {data} = await axios.put(URL + `/item-service/api/items/${id}`, item);
        console.log(data)
        dispatch({
            type: UPDATE_ITEM,
            payload: data,
        });
    } catch (e) {
        dispatch({
            type: 'ERROR',
        });
    }
};