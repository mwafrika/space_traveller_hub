/* eslint-disable jsx-quotes */
import React from 'react';
import ReservedRockets from './rockets/ReservedRockets';
import ReservedDragons from './dragon/profileContainer';
import JoinedMission from './missions/joinedMission';

import classes from '../assets/styles/profile.module.css';

const MyProfile = () => (
  <>
    <main className={classes.profile}>
      <ReservedRockets />
      <JoinedMission />
      <ReservedDragons />
    </main>
  </>
);

export default MyProfile;
