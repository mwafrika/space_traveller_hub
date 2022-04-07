/* eslint-disable camelcase */
/* eslint-disable jsx-quotes */
import React from 'react';
import { useDispatch } from 'react-redux';
import { reserveDragon, cancelReserveDragon } from '../../redux/actions/dragon';
import '../../assets/styles/style.css';

const dragon = ({ dragon }) => {
  const dispatch = useDispatch();

  const handleReserve = () => {
    dispatch(reserveDragon(dragon.id));
  };

  const handleCancelReserve = () => {
    dispatch(cancelReserveDragon(dragon.id));
  };

  const reserveBtn = (
    <button type='button' onClick={handleReserve}>
      Reserve Dragon
    </button>
  );

  const cancelReservation = (
    <button type='button' onClick={handleCancelReserve}>
      Cancel Reservation
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
        {dragon.reserved ? cancelReservation : reserveBtn}
      </div>
    </section>
  );
};

export default dragon;
