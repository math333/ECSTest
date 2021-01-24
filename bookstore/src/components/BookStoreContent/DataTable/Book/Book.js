import React from 'react';
import { TableCell, TableRow} from '@material-ui/core';
import { addItemToCart, removeItemFromCart } from "../../../../redux";
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';
import useStyles from "./styles";
import AddCartButton from "./AddToCart/AddToCart";
import RemoveCartButton from "./RemoveFromCart/RemoveFromCart";

export default function Book(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const itemsInCart = useSelector((state)=>state.itemsInCart.items);
    const searchText = useSelector((state)=>state.search.searchString);

    const bookAdded = itemsInCart.map((item)=>item.bookID).includes(props.row.bookID);
     
    const workOnCart= (item)=>{
        bookAdded ? removeFromCart() : addToCart();
    }
  
    const addToCart= () =>{
        dispatch(addItemToCart(props.row));
        alert("Added Item to cart");
    }
  
    const removeFromCart =() =>{
        dispatch(removeItemFromCart(props.row));
        alert("Removed Item from cart");
    }

    const cartButton = bookAdded ? <RemoveCartButton cartWork={workOnCart}/> : <AddCartButton cartWork={workOnCart}/> 

    return (
        <TableRow hover role="checkbox" tabIndex={-1} key={props.row.bookID}>
            {
            props.columns.map((column) => {
                const value = column.id==="cartFuncButton" ? cartButton  : props.row[column.id];
                if(searchText !== "" &&  props.row.title.toString().toLowerCase().indexOf(searchText.toLowerCase())===-1 
                &&  props.row.author.toString().toLowerCase().indexOf(searchText.toLowerCase())===-1
                &&  props.row.rating.toString().indexOf(searchText)===-1
                &&  props.row.language.toString().toLowerCase().indexOf(searchText.toLowerCase())===-1
                &&  props.row.price.toString().indexOf(searchText)===-1){
                    return null
                }
                return (
                    <>
                        <TableCell key={column.id} align={column.align} className = {clsx(!column.visibility && classes.makeInvisible)}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                    </>
                        );
             })}
        </TableRow>
    )}