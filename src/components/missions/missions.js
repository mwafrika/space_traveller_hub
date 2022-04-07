import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import missionsRetrieved from '../../redux/actions/missions';
import styles from '../../assets/styles/missions.module.css';
import Header from '../header/NavBar';

const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(missionsRetrieved());
  }, [dispatch]);
  const missions = useSelector((state) => state.missions);
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
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th>&nbsp;</th>
        </thead>
        {missions.list.map((mission) => (
          <tr className={styles.mission} key={mission.mission_id}>
            <td>{mission.mission_name}</td>
            <td>{mission.description}</td>
            <td>{mission.status}</td>
            <td>{mission.status}</td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default Missions;
