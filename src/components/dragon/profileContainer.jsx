import React from 'react';
import { useSelector } from 'react-redux';
import Profile from './profile';

const ProfileContainer = () => {
  const reservedDragons = useSelector((state) => state.dragons);
  const filterReserved = reservedDragons.filter((reserve) => reserve.reserved);
  console.log(filterReserved, 'all dragons');
  //   const getReserved = () => dispatch(renderRocketProfile());

  return (
    <>
      <Profile
        reservedItems={filterReserved.map((dragon) => ({
          id: dragon.id,
          type: dragon.type,
          reserved: dragon.reserved,
        }))}
      />
    </>
  );
};

export default ProfileContainer;
