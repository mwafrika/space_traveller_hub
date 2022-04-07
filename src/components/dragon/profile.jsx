/* eslint-disable jsx-quotes */
import React from 'react';
import PropTypes from 'prop-types';
import classes from '../../assets/styles/profile.module.css';

const Profile = (props) => {
  const { reservedItems, title } = props;
  return (
    <div className={classes.profileDescription}>
      <p className={classes.profileHeading}>{title}</p>
      {reservedItems.map((dragon) => (
        <div key={dragon.id} className={classes.profileItems}>
          <p className={classes.reservedDragon}>{dragon.name}</p>
        </div>
      ))}
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
