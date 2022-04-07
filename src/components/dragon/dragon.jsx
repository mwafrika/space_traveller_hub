/* eslint-disable camelcase */
/* eslint-disable jsx-quotes */
import React from 'react';
import { useDispatch } from 'react-redux';
import { reserveDragon, cancelReserveDragon } from '../../redux/actions/dragon';
import classes from '../../assets/styles/dragon.module.css';

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
    <section className={classes.dragonCard}>
      <div className={classes.dragonImg}>
        <img src={dragon.flickr_images} alt='dragon' />
      </div>

      <div className={classes.dragonText}>
        <div>
          <h3>{dragon.name}</h3>
          <h3>{dragon.type}</h3>
        </div>
        {dragon.reserved && <p className={classes.reserved}>Reserved</p>}
        {dragon.reserved ? cancelReservation : reserveBtn}
      </div>
    </section>
  );
};

export default dragon;
