import { FETCH_ALL } from "./actionTypes";

const initialBooksDetails = {
    books: []
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