/* eslint-disable jsx-quotes */
import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/styles/style.css';

const Profile = (props) => {
  const { reservedItems, title } = props;
  return (
    <div className='profile-description'>
      <p>{title}</p>
      {reservedItems.map((dragon) => (
        <div key={dragon.id} className='profile-items'>
          <p>{dragon.name}</p>
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
