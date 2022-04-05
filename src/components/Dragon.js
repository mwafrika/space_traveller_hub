import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Dragon = () => {
  const dispatch = useDispatch();
  const dragon = useSelector((state) => state.dragonReducer);
  useEffect(() => {
    dispatch(dragon());
    console.log('dragons', dragon);
  }, []);

  return (
    <div>
      <h1>My dragons</h1>
      <h1>My dragons</h1>
      <h1>My dragons</h1>
    </div>
  );
};

export default Dragon;
