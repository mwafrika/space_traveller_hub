/* eslint-disable jsx-quotes */
import React from 'react';
import ReservedRockets from './rockets/ReservedRockets';
import ReservedDragons from './dragon/profileContainer';
import JoinedMission from './missions/joinedMission';

import '../assets/styles/style.css';

const MyProfile = () => (
  <>
    <main className="profile">
      <ReservedRockets />
      <JoinedMission />
      <ReservedDragons />
    </main>
  </>
);

export default MyProfile;
