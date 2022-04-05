/* eslint-disable jsx-quotes */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayDragons, reserveDragon } from '../../redux/actions/dragon';
import Dragon from './dragon';
import '../../assets/css/style.css';

const DragonList = () => {
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.dragonReducer);
  const [reserve, setReserve] = useState(false);
  const { reserved } = useSelector((state) => state.dragonReducer);
  console.log(reserved, 'reserve component');
  console.log(dragons, 'check dragons');
  useEffect(() => {
    dispatch(displayDragons());
    setReserve(reserved);
  }, []);

  const handleReserve = (id) => {
    dispatch(reserveDragon(id));
  };
  return (
    <>
      <div className='dragon-list'>
        {dragons.map((dragon) => (
          <Dragon
            key={dragon.id}
            dragon={dragon}
            reserve={reserve}
            handleReserve={handleReserve}
          />
        ))}
      </div>
    </>
  );
};

export default DragonList;
