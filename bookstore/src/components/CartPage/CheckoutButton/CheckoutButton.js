import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Box, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './styles';

export default function CheckoutButton() {
    const classes = useStyles();
    const itemsInCart = useSelector((state)=>state.itemsInCart.items);
    const size = useSelector((state)=>state.listDensity.density);
    const books = useSelector((state)=>state.storeBooks.books);
    let totalCost = 0;
    const totalQty = itemsInCart.length;
    itemsInCart.forEach(element => {
        totalCost+=element.price;        
    });
    return (
    <div class={classes.checkoutArea}>
        <div>
            <Box marginRight={5} marginTop={1} marginBottom={1}>Total Quantity : {totalQty}</Box>
            <Box marginRight={5}>Total Cost : {totalCost}</Box>
        </div>
        <Link to="/checkout"  className={classes.mobilePageLink}>
            <Button variant="contained" className={classes.button}>Checkout</Button>
        </Link>
    </div>
      )
}