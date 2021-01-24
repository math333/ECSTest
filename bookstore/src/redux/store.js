import { createStore,combineReducers,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import { addRemoveItemReducer, booksReducer, columnSelectorReducer, densityReducer, searchingReducer, sortingReducer } from "./reducers";

const rootReducer = combineReducers({
    storeBooks : booksReducer,
    itemsInCart : addRemoveItemReducer,
    search: searchingReducer,
    sortingType: sortingReducer,
    listDensity : densityReducer,
    columnsVisible : columnSelectorReducer,
})

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));