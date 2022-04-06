import { useSelector } from 'react-redux';
import classes from './ReservedRockets.module.css';

const ReservedRockets = () => {
  // eslint-disable-next-line max-len
  const rockets = useSelector((state) => state.rockets.list.filter((rocket) => rocket.reserved === true));

  return (
    <>
      <ul className={classes.reservedRockets}>
        {rockets.map((rocket) => (
          <li key={rocket.id}>{rocket.name}</li>
        ))}
      </ul>
    </>
  );
};

export default ReservedRockets;
