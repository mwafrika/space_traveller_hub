/* eslint-disable jsx-quotes */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { displayDragons } from '../../redux/actions/dragon';
import '../../assets/css/style.css';
import Dragon from './dragon';

const DragonList = () => {
  const dragons = useSelector((state) => state.dragons);
  const dispatch = useDispatch();
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
