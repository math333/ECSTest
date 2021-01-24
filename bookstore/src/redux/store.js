import { createStore,combineReducers,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import { booksReducer, addRemoveItemReducer, searchingReducer, densityReducer } from "./reducers";

const rootReducer = combineReducers({
    storeBooks : booksReducer,
    itemsInCart : addRemoveItemReducer,
    search: searchingReducer,
    listDensity : densityReducer,
})

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));