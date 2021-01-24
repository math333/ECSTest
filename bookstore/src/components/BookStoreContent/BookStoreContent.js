import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

export default function BookStoreContent(){
  const books = useSelector((state)=>state.storeBooks.books);
  
  return (
      !books.length ? <CircularProgress/>:(
    <Grid container alignItems="stretch" spacing={3}>
      Data Table
    </Grid>
      )
  );
};
