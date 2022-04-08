/* eslint-disable jsx-quotes */
import { NavLink } from 'react-router-dom';
import React from 'react';
import classes from '../../assets/styles/NavBar.module.css';
import planet1 from '../../assets/images/planet1.png';

const links = [
  {
    id: 1,
    path: '/',
    text: 'Rocket  ',
    style: classes.rocket,
  },
  {
    id: 2,
    path: '/missions',
    text: 'Missions',
    style: classes.dragon,
  },
  {
    id: 3,
    path: '/dragons',
    text: 'Dragon ',
    style: classes.dragon,
  },
  {
    id: 4,
    path: '/myprofile',
    text: 'My Profile ',
    style: classes.myProfile,
  },
];
const NavBar = () => (
  <>
    <header className={classes.header}>
      <div className={classes.logo}>
        <img className={classes.logoImg} src={planet1} alt='planet logo' />
        <h2>Space Travelers Hub</h2>
      </div>
      <ul className={classes.navBar}>
        {links.map((link) => (
          <li key={link.id} className={`${classes.navLink} ${link.style}`}>
            <NavLink
              to={link.path}
              style={({ isActive }) => (isActive
                ? { textDecoration: 'underline' }
                : { textDecoration: 'none' })}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <h2 className={classes.myLogo}>Logo</h2>
    </header>
  </>
);

export default NavBar;
