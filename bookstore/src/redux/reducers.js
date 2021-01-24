import { FETCH_ALL, ADD_TO_CART, REMOVE_FROM_CART, SEARCH } from "./actionTypes";

const initialBooksDetails = {
    books: []
}

const initialItemsInCart = {
    items: []
}

const initialSearchValue = {
    searchString: ""
}

export const booksReducer = (state=initialBooksDetails, action) => {
    switch(action.type){
        case FETCH_ALL:
            return {
                ...state,
                books: action.payload.slice(0,250)
            }
        default :
            return state
    }
}

export const addRemoveItemReducer = (state=initialItemsInCart, action) => {
    switch(action.type){
        case ADD_TO_CART:
            return {
                ...state,
                items: [...state.items,action.payload]          
             }
        case REMOVE_FROM_CART:
            return {
                ...state,
                items: state.items.filter((itemInCart)=>itemInCart.bookID!=action.payload.bookID)          
            }
        default :
            return state
    }
}


export const searchingReducer = (state=initialSearchValue, action) => {
    switch(action.type){
        case SEARCH:
            return {
                ...state,
                searchString: action.payload
            }
        default :
            return state
    }
}