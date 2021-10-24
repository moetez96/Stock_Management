import axios from "axios";
import {
    ALL_ORDERS,
    ADD_ORDER,
    ERROR_ADD_ORDER,
    DELETE_ORDER,
    UPDATE_ORDER,
} from "./types";

const URL = "http://localhost:8763"

export const getAllOrders = () => async (dispatch) => {
    try {
        const {data} = await axios.get(URL + "/order-service/api/order");
        console.log(data)
        dispatch({
            type: ALL_ORDERS,
            payload: data,
        });
    } catch (e) {
        dispatch({
            type: 'ERROR',
            payload: {e},
        });
    }
};

export const addOrder = (order) => async (dispatch) => {
    console.log(console.log("ccc",order))
    try {
        const {data} = await axios.post(URL + "/order-service/api/order", order);
        console.log(data)
        dispatch({
            type: ADD_ORDER,
            payload: data,
        });
    } catch (e) {
        dispatch({
            type: ERROR_ADD_ORDER,
        });
    }
};

export const deleteOrder = (id) => async (dispatch) => {
    console.log(id)
    try {
        const {data} = await axios.delete(URL + `/order-service/api/order/${id}`);
        console.log(26)
        dispatch({
            type: DELETE_ORDER,
            payload: data,
        });
    } catch (e) {
        dispatch({
            type: 'ERROR',
        });
    }
};

export const updateOrder = (id, order) => async (dispatch) => {
    console.log(id)
    try {
        const {data} = await axios.put(URL + `/order-service/api/order/${id}`, order);
        console.log(data)
        dispatch({
            type: UPDATE_ORDER,
            payload: data,
        });
    } catch (e) {
        dispatch({
            type: 'ERROR',
        });
    }
};