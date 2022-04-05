/* eslint-disable camelcase */
/* eslint-disable jsx-quotes */
import React from 'react';

import '../../assets/css/style.css';

const dragon = ({ dragon, reserve, handleReserve }) => (
  <section className='dragon-card'>
    <div className='dragon-img'>
      <img src={dragon.flickr_images[0]} alt='dragon' />
    </div>

    <div className='dragon-text'>
      <div>
        <h3>{dragon.name}</h3>
        <h3>{dragon.type}</h3>
      </div>
      {reserve && <p className='reserved'>Reserved</p>}
      <button type='button' onClick={handleReserve(dragon.id)}>
        Reserve Dragon
      </button>
    </div>
  </section>
);

export default dragon;
