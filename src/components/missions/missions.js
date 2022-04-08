/* eslint-disable jsx-quotes */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { missionJoined, missionLeft } from '../../redux/actions/missions';
import '../../assets/styles/missions.module.css';
import Header from '../header/NavBar';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);
  const handleJoining = (id) => {
    dispatch(missionJoined(id));
  };
  const handleLeave = (id) => {
    dispatch(missionLeft(id));
  };
  if (missions.loading) {
    return <span>...Loading</span>;
  }
  if (missions.error) {
    return <span>Aw! There is an error!</span>;
  }
  return (
    <>
      <Header />
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {missions.list.map((mission) => (
            <tr className='mission' key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td>
                {!mission.reserved && (
                  <span className='badge inactive-badge'>NOT A MEMBER</span>
                )}
                {mission.reserved && (
                  <span className='badge active-badge'>Active Member</span>
                )}
              </td>
              <td>
                {mission.reserved && (
                  <button
                    type='button'
                    onClick={() => handleLeave(mission.mission_id)}
                    className='btn leave-mission-btn'
                  >
                    Leave Mission
                  </button>
                )}
                {!mission.reserved && (
                  <button
                    type='button'
                    className='btn'
                    onClick={() => handleJoining(mission.mission_id)}
                  >
                    Join Mission
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Missions;
