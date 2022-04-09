import { useSelector } from 'react-redux';
import classes from '../../assets/styles/ReservedRockets.module.css';

const ReservedRockets = () => {
  // eslint-disable-next-line max-len
  const rockets = useSelector((state) => state.rockets.list.filter((rocket) => rocket.reserved === true));

  return (
    <>
      <div className={classes.reservedRocketContainer}>
        <h2 className={classes.heading}>Reserved Rockets</h2>
        <ul className={classes.reservedRockets}>
          {rockets.map((rocket) => (
            <li key={rocket.id} className={classes.reservedRocket}>
              {rocket.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ReservedRockets;
