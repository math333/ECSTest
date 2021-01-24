import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { BookStoreContent } from '../components/BookStoreContent/BookStoreContent';

export default () => (
    <Switch>
        <Route path="/" exact component={BookStoreContent}/>
    </Switch>
);