import React,{useEffect} from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import useStyles from "./styles";
import { removeALL } from "../../redux";

export default function CheckoutPage() {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(removeALL())
    })

    return (
    <div className={classes.placedOrder}>
        <Typography variant='h3'>Your Order has been placed</Typography>
    </div>
      )
}