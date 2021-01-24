import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import BookStoreContent from '../components/BookStoreContent/BookStoreContent';
import CartPage from "../components/CartPage/CartPage";
import CheckoutPage from "../components/Checkout/CheckoutPage";

export default () => (
    <Switch>
        <Route path="/" exact component={BookStoreContent}/>
        <Route path="/cart" exact component={CartPage}/>
        <Route path="/checkout" exact component={CheckoutPage}/>
    </Switch>
);