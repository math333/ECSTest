import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { storeBookDetails } from "./redux";
import Header from "./components/Header/Header";
import BookStoreContent from "./components/BookStoreContent/BookStoreContent";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(storeBookDetails());
}, [dispatch])

  return (
    <>
      <Header/>
      <BookStoreContent/>
    </>
  );
}

export default App;
