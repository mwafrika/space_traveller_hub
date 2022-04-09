/* eslint-disable jsx-quotes */
import React from 'react';
import PropTypes from 'prop-types';
import classes from '../../assets/styles/ReservedRockets.module.css';

const Profile = (props) => {
  const { reservedItems, title } = props;
  return (
    <div className={classes.profileDescription}>
      <h2 className={classes.heading}>{title}</h2>
      <ul className={classes.reservedRockets}>
        {reservedItems.map((dragon) => (
          <li key={dragon.id} className={classes.reservedRocket}>
            {dragon.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

Profile.propTypes = {
  reservedItems: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
};
export default Profile;
