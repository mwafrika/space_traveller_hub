import React from 'react';
import { useSelector } from 'react-redux';
import classes from '../../assets/styles/ReservedRockets.module.css';

const joinedMission = () => {
  // eslint-disable-next-line max-len
  const joinedMissions = useSelector((state) => state.missions.list.filter((mission) => mission.reserved === true));
  return (
    <div className={classes.reservedRocketContainer}>
      <h2 className={classes.heading}>Joined Missions</h2>
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
