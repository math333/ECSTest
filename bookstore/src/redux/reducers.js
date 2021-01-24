import {FETCH_ALL, CHANGE_DENSITY, ADD_TO_CART, REMOVE_FROM_CART, REMOVE_SINGLE_ITEM, REMOVE_ALL, COLUMN_SELECTOR, SEARCH, SORT_BY} from "./actionTypes";
const SELECTABLE_COLUMN_NO = 5;

const initialBooksDetails = {
    books: []
}

const initialItemsInCart = {
    items: []
}

const initialSearchValue = {
    searchString: ""
}

const initialSortingType = {
    sortType: "3_D"
}

const initialDensity ={
    density:'M',
}

const initialColumnSelector = {
    selection: Array(SELECTABLE_COLUMN_NO).fill(true)
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
        case REMOVE_SINGLE_ITEM:
            const itemIndex = state.items.findIndex((item)=>{
                return item.bookID === action.payload.bookID;
            })
            const newCartitems = [];
            state.items.forEach((item,index)=>{
                if(index!==itemIndex){
                    newCartitems.push(item);
                }
            })
            return {
                ...state,
                items: newCartitems
            }
        case REMOVE_ALL:
            return {
                ...state,
                items: []
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

export const sortingReducer = (state=initialSortingType, action) => {
    switch(action.type){
        case SORT_BY:
            return {
                ...state,
                sortType: action.payload
            }
        default :
            return state
    }
}

export const densityReducer = (state=initialDensity, action) => {
    switch(action.type){
        case CHANGE_DENSITY:
            return {
                ...state,
                density: state.density==='M' ? 'S' : 'M'
            }
        default :
            return state
    }
}

export const columnSelectorReducer = (state=initialColumnSelector, action) => {
    switch(action.type){
        case COLUMN_SELECTOR:
            return {
                ...state,
                selection: state.selection.map((bool,index) => index === action.payload ? !bool : bool )          
             }
        default :
            return state
    }
}