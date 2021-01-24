import * as api from "../api";
import { FETCH_ALL } from "./actionTypes";

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