/* eslint-disable jsx-quotes */
import React from 'react';
import ReservedRockets from './rockets/ReservedRockets';
import ReservedDragons from './dragon/profileContainer';
import '../assets/styles/style.css';

const MyProfile = () => (
  <>
    <main className='profile'>
      <ReservedRockets />
      <ReservedDragons />
    </main>
  </>
);

export default MyProfile;
