import axios from "axios";
import {
   ALL_CATEGORIES,
   ADD_CATEGORY,
   ERROR_ADD_CATEGORY,
   DELETE_CATEGORY,
   UPDATE_CATEGORY,
} from "./types";

const URL = "http://localhost:8763"

export const getAllCategories = () => async (dispatch) => {
    try {
        const {data} = await axios.get(URL + "/category-service/api/category");
        console.log(data)
        dispatch({
            type: ALL_CATEGORIES,
            payload: data,
        });
    } catch (e) {
        dispatch({
            type: 'ERROR',
            payload: {e},
        });
    }
};

export const addCategory = (category) => async (dispatch) => {
    console.log(category)
    try {
        const {data} = await axios.post(URL + "/category-service/api/category", category);
        console.log(data)
        dispatch({
            type: ADD_CATEGORY,
            payload: data,
        });
    } catch (e) {
        dispatch({
            type: ERROR_ADD_CATEGORY,
        });
    }
};

export const deleteCategory = (id) => async (dispatch) => {
    console.log(id)
    try {
        const {data} = await axios.delete(URL + `/category-service/api/category/${id}`);
        console.log(data)
        dispatch({
            type: DELETE_CATEGORY,
            payload: data,
        });
    } catch (e) {
        dispatch({
            type: 'ERROR',
        });
    }
};

export const updateCategory = (id, category) => async (dispatch) => {
    console.log(id)
    try {
        const {data} = await axios.put(URL + `/category-service/api/category/${id}`, category);
        console.log(data)
        dispatch({
            type: UPDATE_CATEGORY,
            payload: data,
        });
    } catch (e) {
        dispatch({
            type: 'ERROR',
        });
    }
};