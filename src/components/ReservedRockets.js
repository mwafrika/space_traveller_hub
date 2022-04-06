import React from 'react';
import { useSelector } from 'react-redux';
import classes from './ReservedRockets.module.css';

const ReservedRockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);

  return (
    <>
      <ul className={classes.reservedRockets}>
        {reservedRockets.map((rocket) => (
          <li key={rocket.id}>{rocket.name}</li>
        ))}
      </ul>
    </>
  );
};

export default ReservedRockets;
