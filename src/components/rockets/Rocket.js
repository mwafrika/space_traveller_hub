import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import classes from '../../assets/styles/Rocket.module.css';
import { reserveRocket, cancelReserve } from '../../redux/actions/rocket';

const Rocket = (props) => {
  const {
    id, name, description, image, reserved,
  } = props;

  const dispatch = useDispatch();

  const reserveHandler = () => {
    dispatch(reserveRocket(id));
  };

  const cancelHandler = () => {
    dispatch(cancelReserve(id));
  };

  const cancelBtn = (
    <button
      type="button"
      className={classes.cancelReserve}
      onClick={cancelHandler}
    >
      Cancel Reservation
    </button>
  );

  const reserveBtn = (
    <button
      type="button"
      className={classes.reserveRocket}
      onClick={reserveHandler}
    >
      Reserve Rocket
    </button>
  );

  return (
    <>
      <div className={classes.rocketCardContainer}>
        <div>
          <img src={image} alt="rocket" className={classes.rocketImg} />
        </div>
        <div className={classes.rocketDescription}>
          <h2 className={classes.name}>{name}</h2>
          <p className={classes.description}>
            <span className={classes.reserved}>
              {reserved ? 'Reserved' : ''}
            </span>
            {description}
          </p>
          {reserved ? cancelBtn : reserveBtn}
        </div>
      </div>
    </>
  );
};

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rocket;
