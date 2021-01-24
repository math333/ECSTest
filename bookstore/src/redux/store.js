import { createStore,combineReducers,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import { booksReducer, addRemoveItemReducer, searchingReducer } from "./reducers";

const rootReducer = combineReducers({
    storeBooks : booksReducer,
    itemsInCart : addRemoveItemReducer,
    search: searchingReducer,
})

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));