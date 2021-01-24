import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { storeBookDetails } from "./redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(storeBookDetails());
}, [dispatch])

  return (
    <div>
      Welcome to React Book Store
    </div>
  );
}

export default App;
