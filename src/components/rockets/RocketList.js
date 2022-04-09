import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from './Rocket';
import classes from '../../assets/styles/RocketList.module.css';

const RocketList = () => {
  const rockets = useSelector((state) => state.rockets);

  if (rockets.loading) {
    return (
      <>
        <span>...Loading</span>
      </>
    );
  }
  if (rockets.error) {
    return (
      <>
        <span>...There is an error!</span>
      </>
    );
  }

  return (
    <>
      <div className={classes.rocketListContainer}>
        {rockets.list.map((rocket) => (
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
