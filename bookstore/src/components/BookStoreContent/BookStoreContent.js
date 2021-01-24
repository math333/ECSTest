import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import DataTable from "./DataTable/DataTable";
import StarRatings from 'react-star-ratings';
const imgUrlPrefix = "http://covers.openlibrary.org/b/isbn/";

export default function BookStoreContent(){
  const books = useSelector((state)=>state.storeBooks.books);
  const rows = books.map((book)=>createData(book));  

  function createData(book) {
    let bookID = book.bookID;
    let cover= book.isbn.toString();
    if(cover.length!=10){
        cover ="0"+cover;
    }
    cover = imgUrlPrefix + cover +'-M' +'.jpg';
    cover = <img src = {cover} alt="Book Cover" height={'170'} width={'160'}/>
    let title = book.title;
    let author = book.authors;
    let rating = <StarRatings rating={book.average_rating} starRatedColor="blue" numberOfStars={5} name='rating' starDimension="15px" starSpacing="1.0px"/>;
    let language = book.language_code;
    let price = book.price;
    return { bookID, cover, title, author, rating, language, price };
  }

  return (
      !books.length ? <CircularProgress/>:(
      <Grid container alignItems="stretch" spacing={3}>
        <DataTable rows={rows}/>
      </Grid>
      )
  );
};
