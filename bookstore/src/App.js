import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { storeBookDetails } from "./redux";
import Header from "./components/Header/Header";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(storeBookDetails());
}, [dispatch])

  return (
    <>
      <Header/>
    </>
  );
}

export default App;
