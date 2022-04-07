/* eslint-disable jsx-quotes */
/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import Profile from './profile';
import '../../assets/styles/style.css';
// import NavBar from '../header/NavBar';

const ProfileContainer = () => {
  const reservedDragons = useSelector((state) => state.dragons);
  const filterReserved = reservedDragons.filter((reserve) => reserve.reserved);

  return (
    <>
      {/* <NavBar /> */}
      <div className='profile'>
        <Profile
          title='My Dragons'
          reservedItems={filterReserved.map((dragon) => ({
            id: dragon.id,
            name: dragon.name,
            reserved: dragon.reserved,
          }))}
        />
      </div>
    </>
  );
};

export default ProfileContainer;
