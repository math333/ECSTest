import {FETCH_ALL, CHANGE_DENSITY, ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ALL, COLUMN_SELECTOR, SEARCH, SORT_BY, REMOVE_SINGLE_ITEM} from "./actionTypes";
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

export const removeSingleItemFromCart = (item) =>{
    return{
        type: REMOVE_SINGLE_ITEM,
        info: 'Removes single item from cart',
        payload: item
    }
}

export const removeALL = () =>{
    return{
        type: REMOVE_ALL,
        info: 'Removes all items from cart'
    }
}


export const doSearch = (string) =>{
    return{
        type: SEARCH,
        info: 'Does Searching',
        payload: string
    }
}

export const sortByColumn = (sortingType) =>{
    return{
        type: SORT_BY,
        info: 'Does Sorting',
        payload: sortingType
    }
}

export const changeDensity=()=> {
    return {
        type: CHANGE_DENSITY,
        info: 'Changes Density'
    }
}

export const columnSelection = (columnIndex) =>{
    return{
        type: COLUMN_SELECTOR,
        info: 'Column selector',
        payload: columnIndex
    }
}