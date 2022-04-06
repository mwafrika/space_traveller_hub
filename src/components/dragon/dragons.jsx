/* eslint-disable react/prop-types */
/* eslint-disable jsx-quotes */
import React from 'react';
import '../../assets/styles/style.css';
import Dragon from './dragon';

const DragonList = ({ dragons }) => (
  <div className='dragon-list'>
    {dragons.map((dragon) => (
      <Dragon key={dragon.id} dragon={dragon} />
    ))}
  </div>
);

export default DragonList;
