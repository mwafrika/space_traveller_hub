import { useSelector } from 'react-redux';
import NavBar from './NavBar';
import Rocket from './Rocket';
import classes from './RocketList.module.css';

const RocketList = () => {
  const rockets = useSelector((state) => state.rockets);

  if (rockets.loading) {
    return (
      <>
        <NavBar />
        <span>...Loading</span>
      </>
    );
  }
  if (rockets.error) {
    return (
      <>
        <NavBar />
        <span>...There is an error!</span>
      </>
    );
  }

  return (
    <>
      <NavBar />
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
