import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { storeBookDetails } from "./redux";
import Header from "./components/Header/Header";
import Router from "./routes";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(storeBookDetails());
}, [dispatch])

  return (
    <>
      <Header/>
      <Router/>
    </>
  );
}

export default App;
