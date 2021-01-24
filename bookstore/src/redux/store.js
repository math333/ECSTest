import { createStore,combineReducers,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import { booksReducer, addRemoveItemReducer } from "./reducers";

const rootReducer = combineReducers({
    storeBooks : booksReducer,
    itemsInCart : addRemoveItemReducer,
})

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));