/* eslint-disable jsx-quotes */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayDragons } from '../../redux/actions/dragon';
import Dragon from './dragon';
import '../../assets/css/style.css';

const DragonList = () => {
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.dragonReducer);
  useEffect(() => {
    dispatch(displayDragons());
  }, []);

  return (
    <>
      <div className='dragon-list'>
        {dragons.map((dragon) => (
          <Dragon key={dragon.id} dragon={dragon} />
        ))}
      </div>
    </>
  );
};

export default DragonList;
