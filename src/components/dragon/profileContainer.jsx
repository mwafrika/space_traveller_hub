/* eslint-disable jsx-quotes */
/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import Profile from './profile';
import classes from '../../assets/styles/ReservedRockets.module.css';

const ProfileContainer = () => {
  const reservedDragons = useSelector((state) => state.dragons);
  const filterReserved = reservedDragons.filter((reserve) => reserve.reserved);

  return (
    <div className={classes.reservedRocketContainer}>
      <Profile
        title='My Dragons'
        reservedItems={filterReserved.map((dragon) => ({
          id: dragon.id,
          name: dragon.name,
          reserved: dragon.reserved,
        }))}
      />
    </div>
  );
};

export default ProfileContainer;
