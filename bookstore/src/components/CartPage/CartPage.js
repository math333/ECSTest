import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import CartItem from './CartItem/CartItem';
import CheckoutButton from "./CheckoutButton/CheckoutButton";
import useStyles from "./styles";

export default function CartPage() {
    const itemsInCart = useSelector((state)=>state.itemsInCart.items);
    const size = useSelector((state)=>state.listDensity.density);
    const books = useSelector((state)=>state.storeBooks.books);
    const classes = useStyles();
    const distinct = (value, index, self) => {
        return self.indexOf(value) === index;
    }

    const distinctCartItems = itemsInCart.filter(distinct);

    let cartItems = [];
    if(itemsInCart.length==0){
        cartItems= <Typography variant='h3'>No Item Added Yet</Typography>
    }
    else{
    for(let i=0; i<distinctCartItems.length;i++){
        cartItems.push(<CartItem row={distinctCartItems[i]}/>);
     }
     cartItems.push(<CheckoutButton/>)
    }

    return (
    <div className={classes.cartItems}>
        {cartItems}
    </div>
      )
}