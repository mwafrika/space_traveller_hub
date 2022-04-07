/* eslint-disable jsx-quotes */
import React from 'react';
// import classes from '../../assets/styles/profile.module.css';
import { useSelector } from 'react-redux';
import '../../assets/styles/style.css';
import classes from '../../assets/styles/ReservedRockets.module.css';

const joinedMission = () => {
  // eslint-disable-next-line max-len
  const joinedMissions = useSelector((state) => state.missions.list.filter((mission) => mission.reserved === true));
  return (
    <div className='joinedMission'>
      <h1>Joined Missions</h1>
      <ul className={classes.reservedRockets}>
        {joinedMissions.map((mission) => (
          <li key={mission.mission_id} className={classes.reservedRocket}>
            {mission.mission_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default joinedMission;
