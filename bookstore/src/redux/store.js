import { createStore,combineReducers,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import { booksReducer } from "./reducers";

const rootReducer = combineReducers({
    storeBooks : booksReducer,
})

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));