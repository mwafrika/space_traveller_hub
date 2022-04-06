import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayRockets } from '../redux/actions/rocket';
import NavBar from './NavBar';
import Rocket from './Rocket';
import classes from './RocketList.module.css';

const RocketList = () => {
  const dispatch = useDispatch();

  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    dispatch(displayRockets());
  }, []);

  return (
    <>
      <NavBar />
      <div className={classes.rocketListContainer}>
        {rockets.map((rocket) => (
          <Rocket
            key={rocket.id}
            id={rocket.id}
            name={rocket.name}
            description={rocket.description}
            image={rocket.image}
            reserved={rocket.reserved}
          />
        ))}
      </div>
    </>
  );
};

export default RocketList;