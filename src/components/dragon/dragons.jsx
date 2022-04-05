/* eslint-disable jsx-quotes */
/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayDragons } from '../../redux/actions/dragon';
import Dragon from './dragon';

const DragonList = () => {
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.dragonReducer);
  useEffect(() => {
    dispatch(displayDragons());
    console.log('dragons', dragons);
  }, []);

  return (
    <>
      {dragons.map((dragon) => (
        <Dragon key={dragon.id} dragon={dragon} />
      ))}
    </>
  );
};

export default DragonList;
