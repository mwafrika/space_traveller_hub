/* eslint-disable camelcase */
/* eslint-disable jsx-quotes */
import React from 'react';
import { useDispatch } from 'react-redux';
import { reserveDragon } from '../../redux/actions/dragon';
import '../../assets/css/style.css';

const dragon = ({ dragon }) => {
  const dispatch = useDispatch();

  const handleReserve = () => {
    dispatch(reserveDragon(dragon.id));
  };

  const reserveBtn = (
    <button type='button' onClick={handleReserve}>
      Reserve Dragon
    </button>
  );

  return (
    <section className='dragon-card'>
      <div className='dragon-img'>
        <img src={dragon.flickr_images} alt='dragon' />
      </div>

      <div className='dragon-text'>
        <div>
          <h3>{dragon.name}</h3>
          <h3>{dragon.type}</h3>
        </div>
        {dragon.reserved && <p className='reserved'>Reserved</p>}
        {reserveBtn}
      </div>
    </section>
  );
};

export default dragon;
