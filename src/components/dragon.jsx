import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayDragons } from '../redux/actions/dragon';

const Dragon = () => {
  const dispatch = useDispatch();
  const dragon = useSelector((state) => state.dragonReducer);
  useEffect(() => {
    dispatch(displayDragons());
    console.log('dragons', dragon);
  }, []);

  return (
    <>
      <h1>My dragons</h1>
      <h1>My dragons</h1>
      <h1>My dragons</h1>
    </>
  );
};

export default Dragon;
