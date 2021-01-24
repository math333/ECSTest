import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { IconButton } from '@material-ui/core';
import { addItemToCart, removeSingleItemFromCart } from "../../redux";
import useStyles from "./styles";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export default function CustomizedTables(props) {
  const classes = useStyles();
  const itemsInCart = useSelector((state)=>state.itemsInCart.items);
  const bookIDArray = itemsInCart.map((item)=>item.bookID);

  let qty=0;

  bookIDArray.forEach((id)=>{if(id==props.row.bookID){
      qty++
  }})

  return (
    <TableContainer className={classes.centerFlex}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left" width="100">Title</StyledTableCell>
            <StyledTableCell align="left" width="100">Price</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
            <StyledTableCell align="center">Quantity</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
            <StyledTableCell align="center">Cost</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <StyledTableRow key={props.row.bookID}>
              <StyledTableCell align="left" width="100">{props.row.title}</StyledTableCell>
              <StyledTableCell align="left" width="100">{props.row.price}</StyledTableCell>
              <StyledTableCell align="left"><AddIcon item={props.row}/></StyledTableCell>
              <StyledTableCell align="center">{qty}</StyledTableCell>
              <StyledTableCell align="right"><RemoveIcon item={props.row}/></StyledTableCell>
              <StyledTableCell align="center">{qty} X {props.row.price} = {qty*props.row.price}</StyledTableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function AddIcon(props){
    const dispatch = useDispatch();

    const addAnItem =() =>{
        dispatch(addItemToCart(props.item));
    }

    return(
        <IconButton onClick={addAnItem}>
            <AddCircleOutlineIcon/>
        </IconButton>
    )
}

function RemoveIcon(props){
    const dispatch = useDispatch();

    const removeAnItem =() =>{
        dispatch(removeSingleItemFromCart(props.item));
    }
    
    return(
        <IconButton onClick={removeAnItem}>
            <RemoveCircleOutlineIcon/>
        </IconButton>
    )
}