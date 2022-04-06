import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../header/NavBar';
import Dragons from './dragons';

const dragonContainer = () => {
  const dragons = useSelector((state) => state.dragons);
  return (
    <>
      <Header />
      <Dragons dragons={dragons} />
    </>
  );
};

export default dragonContainer;
