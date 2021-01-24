import {FETCH_ALL, ADD_TO_CART, REMOVE_FROM_CART, SEARCH,} from "./actionTypes";
import * as api from "../api";

export const storeBookDetails=()=> async(dispatch) => {
    try{
        const { data } = await api.fetchBooks();
    dispatch({
        type: FETCH_ALL,
        payload:data,
        info : 'Stores Book Details',
    });
    } catch(error){
        console.log(error.message);
    }
}

export const addItemToCart = (item) =>{
    return{
        type: ADD_TO_CART,
        info: 'Adds item to cart',
        payload: item
    }
}

export const removeItemFromCart = (item) =>{
    return{
        type: REMOVE_FROM_CART,
        info: 'Removes item from cart',
        payload: item
    }
}

export const doSearch = (string) =>{
    return{
        type: SEARCH,
        info: 'Does Searching',
        payload: string
    }
}