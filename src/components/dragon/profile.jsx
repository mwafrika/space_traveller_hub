import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../header/NavBar';

const Profile = (props) => {
  const { reservedItems } = props;
  console.log(reservedItems);
  return (
    <>
      <NavBar />
      <div>
        {reservedItems.map((dragon) => (
          <div key={dragon.id}>
            <p>{dragon.reserved}</p>
            <p>{dragon.type}</p>
          </div>
        ))}
      </div>
    </>
  );
};

Profile.propTypes = {
  reservedItems: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};
export default Profile;
