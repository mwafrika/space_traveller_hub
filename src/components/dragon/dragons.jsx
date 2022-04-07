/* eslint-disable react/prop-types */
/* eslint-disable jsx-quotes */
import React from 'react';
import classes from '../../assets/styles/dragons.module.css';
import Dragon from './dragon';

const DragonList = ({ dragons }) => (
  <div className={classes.dragonList}>
    {dragons.map((dragon) => (
      <Dragon key={dragon.id} dragon={dragon} />
    ))}
  </div>
);

export default DragonList;
